interface ImageModalProps {
  selectedImage: string | null;
  onClose: () => void;
}

const ImageModal = ({ selectedImage, onClose }: ImageModalProps) => {
  if (!selectedImage) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full">
        <img
          src={selectedImage}
          alt="Vue agrandie"
          className="w-full h-auto rounded-lg"
        />
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-300"
          onClick={onClose}
        >
          Fermer
        </button>
      </div>
    </div>
  );
};

export default ImageModal;