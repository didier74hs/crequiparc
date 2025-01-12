import { motion } from "framer-motion";

interface PhotoCardProps {
  photo: {
    src: string;
    alt: string;
    description: string;
  };
  index: number;
  onImageClick: (src: string) => void;
}

const PhotoCard = ({ photo, index, onImageClick }: PhotoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg"
    >
      <div
        className="relative aspect-w-16 aspect-h-9 cursor-pointer"
        onClick={() => onImageClick(photo.src)}
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
  );
};

export default PhotoCard;