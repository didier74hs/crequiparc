import { useState } from "react";
import PhotoCard from "../components/home-staging/PhotoCard";
import ImageModal from "../components/home-staging/ImageModal";
import { stagingPhotos } from "../data/stagingPhotos";

const HomeStaging = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
            <PhotoCard
              key={index}
              photo={photo}
              index={index}
              onImageClick={setSelectedImage}
            />
          ))}
        </div>
      </div>

      <ImageModal selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
};

export default HomeStaging;