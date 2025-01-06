import { useState } from "react";
import { motion } from "framer-motion";

const Photos = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    {
      src: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6",
      alt: "Salon",
    },
    {
      src: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      alt: "Cuisine",
    },
    {
      src: "https://images.unsplash.com/photo-1501127122-f385ca6ddd9d",
      alt: "Chambre",
    },
    // Ajoutez ici vos vraies photos
  ];

  return (
    <div className="pt-16 min-h-screen bg-estate-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-display text-3xl md:text-4xl text-estate-dark mb-8 text-center">
          Photos de l'Appartement
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(photo.src)}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="object-cover rounded-lg shadow-md group-hover:opacity-90 transition-opacity"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <p className="text-white font-medium">{photo.alt}</p>
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

export default Photos;