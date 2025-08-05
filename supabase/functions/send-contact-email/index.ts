import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const contactRequest: ContactRequest = await req.json();
    console.log("Received contact request:", contactRequest);
    console.log("RESEND_API_KEY is configured:", !!RESEND_API_KEY);

    // Create Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Store the message in the database
    const { data: insertedData, error: dbError } = await supabase
      .from('contact_messages')
      .insert([contactRequest])
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error(`Failed to store message in database: ${dbError.message}`);
    }

    console.log('Successfully stored message in database:', insertedData);

    // Send email via Resend
    const emailHtml = `
      <h2>Nouveau message de contact</h2>
      <p><strong>Nom:</strong> ${contactRequest.name}</p>
      <p><strong>Email:</strong> ${contactRequest.email}</p>
      <p><strong>Téléphone:</strong> ${contactRequest.phone || 'Non renseigné'}</p>
      <p><strong>Message:</strong></p>
      <p>${contactRequest.message}</p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Appartement Tête d'Or <onboarding@resend.dev>",
        to: ["dnet1@gmx.fr"],
        subject: "Nouveau message de contact - Appartement Tête d'Or",
        html: emailHtml,
        reply_to: contactRequest.email
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error('Resend API error:', error);
      throw new Error(`Failed to send email: ${error}`);
    }

    const emailResponse = await res.json();
    console.log('Successfully sent email:', emailResponse);

    return new Response(JSON.stringify({ success: true, data: insertedData }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
};

serve(handler);