import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Photo {
  src: string;
  alt: string;
  description?: string;
}

interface AnimatedPhotoViewerProps {
  photos: Photo[];
  autoPlayDelay?: number;
}

const AnimatedPhotoViewer = ({ photos, autoPlayDelay = 7000 }: AnimatedPhotoViewerProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex === null) {
      setSelectedIndex(0);
    } else {
      const timer = setTimeout(() => {
        setSelectedIndex((prev) => (prev === null || prev >= photos.length - 1 ? 0 : prev + 1));
      }, autoPlayDelay);
      return () => clearTimeout(timer);
    }
  }, [selectedIndex, photos.length, autoPlayDelay]);

  return (
    <AnimatePresence>
      {selectedIndex !== null && (
        <motion.div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative max-w-4xl w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={photos[selectedIndex].src}
              alt={photos[selectedIndex].alt}
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedPhotoViewer;