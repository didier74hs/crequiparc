import { useState } from "react";
import { motion } from "framer-motion";

const HomeStaging = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const stagingPhotos = [
    {
      src: "/crequiparc/lovable-uploads/c7f92949-6eb9-4ac0-b674-e9aeabe06c34.png",
      alt: "Chambre enfant",
      description: "Chambre d'enfant lumineuse avec balcon",
    },
    {
      src: "/crequiparc/lovable-uploads/8758c2fb-b98c-4e8f-beb6-0810164ecce2.png",
      alt: "Chambre principale",
      description: "Chambre principale avec décoration classique",
    },
    {
      src: "/crequiparc/lovable-uploads/c2382287-f4f3-487b-9079-a35e2a530626.png",
      alt: "Chambre secondaire",
      description: "Chambre secondaire avec vue dégagée",
    },
    {
      src: "/crequiparc/lovable-uploads/f9c2030b-b513-4bc1-9205-031bff9836c4.png",
      alt: "Cuisine équipée",
      description: "Cuisine moderne entièrement équipée",
    },
    {
      src: "/crequiparc/lovable-uploads/883bab77-f0c9-4b5c-ac1e-81de1cda1d08.png",
      alt: "Salon",
      description: "Salon spacieux et lumineux",
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-estate-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-display text-3xl md:text-4xl text-estate-dark mb-4">
            Photos Home Staging
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez l'appartement à travers ces photos professionnelles
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