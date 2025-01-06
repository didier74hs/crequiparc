import { useState } from "react";
import { motion } from "framer-motion";

const HomeStaging = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const stagingPhotos = [
    {
      src: "https://images.unsplash.com/photo-1600210492493-0946911123ea",
      alt: "Salon modernisé",
      description: "Visualisation du salon avec un aménagement contemporain",
    },
    {
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
      alt: "Cuisine équipée",
      description: "Proposition d'aménagement pour la cuisine",
    },
    {
      src: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87",
      alt: "Chambre principale",
      description: "Suggestion de décoration pour la chambre",
    },
    // Ajoutez ici vos vraies photos de home staging
  ];

  return (
    <div className="pt-16 min-h-screen bg-estate-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-display text-3xl md:text-4xl text-estate-dark mb-4">
            Projection Home Staging
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez le potentiel de l'appartement à travers ces visualisations professionnelles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stagingPhotos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div
                className="relative aspect-w-16 aspect-h-9 cursor-pointer"
                onClick={() => setSelectedImage(photo.src)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white font-medium">Voir en grand</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-estate-dark mb-2">
                  {photo.alt}
                </h3>
                <p className="text-gray-600">{photo.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal pour l'image en grand */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={selectedImage}
              alt="Vue agrandie"
              className="w-full h-auto rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeStaging;