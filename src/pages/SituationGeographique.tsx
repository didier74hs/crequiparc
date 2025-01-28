const SituationGeographique = () => {
  return (
    <div className="pt-16 min-h-screen bg-estate-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-display text-3xl md:text-4xl text-estate-dark mb-8 text-center">
          Situation Géographique
        </h1>
        <div className="max-w-4xl mx-auto space-y-8">
          <img
            src="/lovable-uploads/43b95c23-87f6-4925-8873-0e1d0a5bd6c6.png"
            alt="Situation géographique de l'appartement"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <img
            src="/lovable-uploads/2c8709a4-d058-4d20-b245-26d958e3a0f3.png"
            alt="Vue de la rue avec le magasin d'alimentation et l'appartement"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="space-y-2">
            <img
              src="/lovable-uploads/0b7b456b-8bd9-4416-9f1a-ebe6493ee284.png"
              alt="Distance jusqu'au Parc Tête d'Or"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="text-estate-dark text-sm italic text-center">
              Temps et distance depuis l'appartement pour aller à l'arrêt de bus
            </p>
          </div>
          <div className="space-y-2">
            <img
              src="/lovable-uploads/c4789580-05e5-4ea4-8d3a-1e6eefc540b6.png"
              alt="Plan du quartier et itinéraire"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="text-estate-dark text-sm italic text-center">
              Temps et distance depuis l'appartement pour aller à l'arrêt de métro le plus proche
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SituationGeographique;