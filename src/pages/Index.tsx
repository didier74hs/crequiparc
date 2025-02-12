import { ArrowDown } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/lovable-uploads/0bd08475-552e-44fb-a104-86c893ab3b1e.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="font-display text-4xl md:text-6xl text-center mb-4">
            Votre Havre de Paix
          </h1>
          <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
            Un appartement d'exception aux portes du Parc de la Tête d'Or
          </p>
          
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="animate-bounce mt-8"
            aria-label="Scroll to contact form"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>

      {/* Contact Section */}
      <div
        id="contact"
        className="py-16 bg-estate-light"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-estate-dark mb-4">
              Intéressé par une visite ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Contactez-nous pour plus d'informations ou pour organiser une visite de cet appartement unique.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Index;