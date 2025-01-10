import AnimatedPhotoViewer from "@/components/AnimatedPhotoViewer";

const HomeStaging = () => {
  const stagingPhotos = [
    {
      src: "/lovable-uploads/c7f92949-6eb9-4ac0-b674-e9aeabe06c34.png",
      alt: "Chambre enfant",
      description: "Chambre d'enfant lumineuse avec balcon",
    },
    {
      src: "/lovable-uploads/8758c2fb-b98c-4e8f-beb6-0810164ecce2.png",
      alt: "Chambre principale",
      description: "Chambre principale avec décoration classique",
    },
    {
      src: "/lovable-uploads/c2382287-f4f3-487b-9079-a35e2a530626.png",
      alt: "Chambre secondaire",
      description: "Chambre secondaire avec vue dégagée",
    },
    {
      src: "/lovable-uploads/f9c2030b-b513-4bc1-9205-031bff9836c4.png",
      alt: "Cuisine équipée",
      description: "Cuisine moderne entièrement équipée",
    },
    {
      src: "/lovable-uploads/883bab77-f0c9-4b5c-ac1e-81de1cda1d08.png",
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

        <AnimatedPhotoViewer photos={stagingPhotos} />
      </div>
    </div>
  );
};

export default HomeStaging;