const Descriptif = () => {
  return (
    <div className="min-h-screen pt-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl md:text-4xl text-estate-dark mb-8 text-center">
          Descriptif de l'appartement
        </h1>

        <div className="space-y-8">
          {/* Description générale */}
          <section className="bg-estate-light rounded-lg p-6">
            <h2 className="font-display text-2xl text-estate-dark mb-4">
              Description générale
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Je propose à la vente un appartement lumineux et spacieux, idéalement situé dans le 6e arrondissement de Lyon, à proximité immédiate du Parc de la Tête d'Or et des commerces. Cet appartement de 122 m² (avec 21 m² de balcon orienté sud et est) est à rénover et offre un potentiel exceptionnel pour devenir un véritable cocon familial.
            </p>
          </section>

          {/* Caractéristiques principales */}
          <section className="bg-white shadow-md rounded-lg p-6">
            <h2 className="font-display text-2xl text-estate-dark mb-4">
              Caractéristiques principales
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-2">
                <span className="font-medium">Superficie:</span>
                122 m² habitables + 21 m² de balcon
              </li>
              <li className="flex gap-2">
                <span className="font-medium">Étages:</span>
                4e étage avec ascenseur dans un immeuble sécurisé avec gardien
              </li>
              <li className="flex gap-2">
                <span className="font-medium">Exposition:</span>
                Appartement en angle, orienté sud et est, garantissant une excellente luminosité
              </li>
            </ul>

            <h3 className="font-display text-xl text-estate-dark mt-6 mb-3">
              Configuration actuelle
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>3 chambres (possibilité de créer une 4e chambre)</li>
              <li>Salon et salle à manger avec sol en marbre d'une valeur estimée à 80 000 €</li>
              <li>Grande cuisine séparée, reliée à la salle à manger par un sas</li>
              <li>2 salles de bains (une grande avec baignoire, une petite attenante à une chambre avec baignoire sabot et lavabo)</li>
              <li>2 WC (dont un séparé)</li>
              <li>Nombreux rangements (placards intégrés)</li>
              <li>Longs balcons orientés sud et est, suffisamment spacieux pour installer une petite table et des chaises</li>
            </ul>
          </section>

          {/* Informations techniques */}
          <section className="bg-estate-light rounded-lg p-6">
            <h2 className="font-display text-2xl text-estate-dark mb-4">
              Informations techniques
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-2">
                <span className="font-medium">Chauffage collectif:</span>
                Au sol, invisible (aucun radiateur)
              </li>
              <li className="flex gap-2">
                <span className="font-medium">Eau chaude et froide:</span>
                Incluses dans les charges de copropriété
              </li>
              <li className="flex gap-2">
                <span className="font-medium">Gaz de ville:</span>
                Optionnel pour la cuisine
              </li>
              <li className="flex flex-col gap-2">
                <span className="font-medium">Charges de copropriété:</span>
                <p className="text-gray-700 leading-relaxed">
                  Les trois points mentionnés précédemment sont déjà inclus dans les charges de copropriété, auxquels s'ajoutent les services de qualité offerts par le gardien. Celui-ci assure l'entretien régulier de l'immeuble ainsi que des espaces verts situés à l'avant de la résidence. Par conséquent, aucune intervention extérieure ni coût supplémentaire ne sont nécessaires pour ces prestations.
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  De plus, votre facture d'électricité se limitera uniquement à votre consommation personnelle liée à vos usages quotidiens (éclairage, appareils électroniques, etc.).
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  Il est important de souligner cet aspect lors de la comparaison avec d'autres biens immobiliers. En effet, certaines personnes omettent d'inclure dans leur analyse des éléments tels que les frais d'entretien de l'immeuble, des espaces verts ou encore le coût du chauffage (notamment s'il est électrique). Lorsqu'une comparaison équitable est effectuée, le montant des charges de copropriété pour cet immeuble se situe dans la moyenne pour ce type de bien, tout en offrant l'avantage notable d'un gardien sur place.
                </p>
              </li>
            </ul>
          </section>

          {/* Annexes */}
          <section className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="font-display text-2xl text-estate-dark mb-4">
              Annexes
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-2">
                <span className="font-medium">Cave:</span>
                Grande cave incluse avec l'appartement
              </li>
              <li className="flex gap-2">
                <span className="font-medium">Garage:</span>
                En option, un garage double (places en enfilade) équipé d'une prise pour véhicule électrique
              </li>
            </ul>
          </section>

          {/* Quelques précisions */}
          <section className="bg-estate-light rounded-lg p-6">
            <h2 className="font-display text-2xl text-estate-dark mb-4">
              Quelques précisions
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Dans les informations techniques, il est mentionné que le système de chauffage est au sol. Toutefois, pour clarifier, il convient de préciser qu'au cours des années 1960, certains immeubles, dont celui-ci, ont été conçus avec un système de chauffage intégré au plafond. Ce choix architectural visait à offrir un confort thermique optimal en évitant de perturber les personnes sensibles à la chaleur au niveau des jambes. C'est également pour cette raison que des vannes de régulation sont situées en hauteur, notamment dans le placard de la salle à manger, permettant d'ajuster la température pièce par pièce.
              </p>
              <p className="leading-relaxed">
                Par ailleurs, ce type de chauffage présente un avantage notable: il est possible de recouvrir le sol en marbre (si on est pas "fan") avec le matériau de votre choix (parquet, carrelage, etc.) sans compromettre l'efficacité du système de chauffage de l'appartement.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Descriptif;