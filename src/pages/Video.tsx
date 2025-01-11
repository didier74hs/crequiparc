import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Video = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-3xl md:text-4xl text-estate-dark mb-8 text-center">
          Visite Virtuelle
        </h1>
        
        <div 
          onClick={() => setIsOpen(true)}
          className="cursor-pointer"
        >
            <div className="relative group">
              <img 
                src="/lovable-uploads/ce534b6e-5a8e-4aef-87fa-cf67d8b008e5.png"
                alt="Cliquez pour voir la vidéo"
                className="rounded-lg shadow-lg max-w-2xl mx-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 w-16 h-16 bg-white/30 rounded-full animate-ping" />
                  <div className="absolute -inset-3 w-14 h-14 bg-white/40 rounded-full animate-ping animation-delay-150" />
                  <div className="relative w-12 h-12 bg-white/80 rounded-full" />
                </div>
              </div>
            </div>
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-4xl">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Video;