import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedPhotoViewerProps {
  photos: Array<{
    src: string;
    alt: string;
  }>;
  autoPlay?: boolean;
}

const AnimatedPhotoViewer = ({ photos, autoPlay = true }: AnimatedPhotoViewerProps) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => {
        if (prev === null) return 0;
        return (prev + 1) % photos.length;
      });
    }, 7000); // 5 seconds fullscreen + 2 seconds for animations

    return () => clearInterval(interval);
  }, [photos.length, autoPlay]);

  useEffect(() => {
    if (currentPhotoIndex !== null) {
      setIsFullscreen(true);
      const timer = setTimeout(() => {
        setIsFullscreen(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentPhotoIndex]);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className="relative aspect-w-4 aspect-h-3"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="object-cover rounded-lg shadow-md w-full h-full"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {currentPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: isFullscreen ? 1 : 0.9,
              transition: {
                duration: 0.5
              }
            }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          >
            <img
              src={photos[currentPhotoIndex].src}
              alt={photos[currentPhotoIndex].alt}
              className="max-w-[90vw] max-h-[90vh] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedPhotoViewer;