import { ExternalLink } from "lucide-react";

const Video = () => {
  return (
    <div className="pt-16 min-h-screen bg-estate-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-display text-3xl md:text-4xl text-estate-dark mb-8 text-center">
          Visite Virtuelle
        </h1>
        
        <div className="text-estate-dark text-lg mb-12 text-center max-w-3xl mx-auto">
          <p className="mb-8">
            Merci de cliquer sur la photo ci-dessous afin de vous permettre de visiter l'appartement. Cette vidéo n'est pas professionnelle, mais à l'avantage de vous permettre d'avoir une idée de l'appartement avant les travaux de peinture et de vous demander si vous souhaitez le visiter réellement à présent. Merci pour votre indulgence quant à sa qualité.
          </p>
          
          <a 
            href="https://asse.quickconnect.to/d/s/v24gp0NdUl0UUoPAd44jzL12CZcXr5so/rJIjrFhNb5Lv6UvJsnTkGMN9kAvQ3opZ-frGgAq7lvgo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-90 transition-opacity"
          >
            <div className="relative group">
              <img 
                src="/lovable-uploads/ce534b6e-5a8e-4aef-87fa-cf67d8b008e5.png"
                alt="Cliquez pour voir la vidéo"
                className="rounded-lg shadow-lg max-w-2xl mx-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Outer pulsing circle */}
                  <div className="absolute -inset-4 w-16 h-16 bg-white/30 rounded-full animate-ping" />
                  {/* Inner pulsing circle */}
                  <div className="absolute -inset-3 w-14 h-14 bg-white/40 rounded-full animate-ping animation-delay-150" />
                  {/* Static center circle with icon */}
                  <div className="relative w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 text-estate-dark" />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Video;