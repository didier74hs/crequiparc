import { AnimatedPhotoViewer } from "@/components/AnimatedPhotoViewer";

const Photos = () => {
  const photos = [
    {
      src: "/lovable-uploads/ce534b6e-5a8e-4aef-87fa-cf67d8b008e5.png",
      alt: "Salon 1",
    },
    {
      src: "/lovable-uploads/3e09e151-a1a5-4588-88c9-28a648ec2ce9.png",
      alt: "Salon 2",
    },
    {
      src: "/lovable-uploads/39d2287b-4211-4023-8653-639f68f508ba.png",
      alt: "Salon 3",
    },
    {
      src: "/lovable-uploads/44815cbb-a705-4f8f-8e2a-12a2c694f2f3.png",
      alt: "Salon 4",
    },
    {
      src: "/lovable-uploads/1b6e5fb2-c68b-42f4-bea1-159abfefe435.png",
      alt: "Salon 5",
    },
    {
      src: "/lovable-uploads/6ce8c256-736d-4109-bb23-5e40c4979eb1.png",
      alt: "Salon 6",
    },
    {
      src: "/lovable-uploads/79540ec2-7dbe-48c4-86e4-844554cf260b.png",
      alt: "Chambre 3",
    },
    {
      src: "/lovable-uploads/c3b51f52-bbc3-4a88-ae0e-0b5e47c7b37b.png",
      alt: "Chambre 1",
    },
    {
      src: "/lovable-uploads/7799294a-f29c-4d57-926e-8f322bce5638.png",
      alt: "Chambre 2",
    },
    {
      src: "/lovable-uploads/67006b9a-15ee-4f84-b929-096185df0f64.png",
      alt: "Salle de bain",
    },
    {
      src: "/lovable-uploads/75fa4c5b-c768-4b11-a33f-89e1bb093356.png",
      alt: "Cuisine",
    },
    {
      src: "/lovable-uploads/5dd4db30-79e8-4f0e-8d40-94e428789e51.png",
      alt: "Cave",
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-estate-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-display text-3xl md:text-4xl text-estate-dark mb-8 text-center">
          Photos de l'Appartement Vide
        </h1>
        
        <p className="text-estate-dark text-lg mb-12 text-center max-w-3xl mx-auto">
          Rénovation récente : peintures neuves dans l'entrée, le dégagement desservant les chambres, les toilettes indépendantes, ainsi que dans les deux chambres de la partie sud de l'appartement. Les teintes semblables à celles des photos apportent luminosité et fraîcheur à ces espaces de vie. Ces améliorations ne sont pas présentes sur les photos qui suivent, celles-ci ayant été prises avant les travaux.
        </p>

        <AnimatedPhotoViewer photos={photos} />
      </div>
    </div>
  );
};

export default Photos;