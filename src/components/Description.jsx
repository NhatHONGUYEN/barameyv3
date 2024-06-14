import FadeInOut from "../animation/FadeInOut";

export default function Description() {
  return (
    <div className="p-14 2xl:grid 2xl:grid-cols-3 2xl:gap-4">
      <FadeInOut>
        <div className="text-center py-4 lg:flex lg:items-center 2xl:flex-col ">
          <img
            className="mx-auto md:w-2/3 lg:w-1/2 lg:mr-8 2xl:mx-auto 2xl:w-[500px] 2xl:h-96"
            src="/traditionnellecooking.jpg"
            alt="traditionnellecooking"
          />
          <div className="lg:w-1/2 2xl:w-3/4">
            <h1 className="pt-8 text-2xl md:text-4xl font-bold">
              Une cuisine familiale
            </h1>
            <p className="py-4 md:text-2xl md:mx-10 2xl:mx-0">
              Découvrez les saveurs authentiques du Sud-Est asiatique dans notre
              restaurant, où nous mettons en valeur le savoir-faire familial et
              artisanal de notre cuisine cambodgienne et thaïlandaise. Notre
              menu propose une variété de plats traditionnels préparés avec des
              recettes transmises de génération en génération et des ingrédients
              frais.
            </p>
          </div>
        </div>
      </FadeInOut>
      <FadeInOut>
        <div className="text-center py-4 lg:flex lg:items-center 2xl:flex-col ">
          <img
            className="mx-auto md:w-2/3 lg:w-1/2 lg:mr-8 2xl:mx-auto 2xl:w-[500px] 2xl:h-96"
            src="/produitfrais.jpg"
            alt="produitfrais"
          />
          <div className="lg:w-1/2 2xl:w-3/4">
            <h1 className="pt-8 text-2xl md:text-4xl font-bold">
              Des produits frais
            </h1>
            <p className="py-4 md:text-2xl md:mx-10 2xl:mx-0">
              Nous utilisons une gamme de produits frais asiatiques pour créer
              des plats délicieux et authentiques. Parmi nos ingrédients phares,
              citons le riz thaïlandais, les nouilles de riz, les crevettes, le
              poulet, le porc, les légumes frais tels que les carottes, les
              poivrons et les champignons, ainsi que des épices et des sauces
              authentiques telles que le curry rouge, le curry vert et le nuoc
              mam.
            </p>
          </div>
        </div>
      </FadeInOut>
      <FadeInOut>
        <div className="text-center py-4 lg:flex lg:items-center 2xl:flex-col ">
          <img
            className="mx-auto md:w-2/3 lg:w-1/2 lg:mr-8 2xl:mx-auto 2xl:w-[500px] 2xl:h-96"
            src="/takeaway.jpg"
            alt="takeaway"
          />
          <div className="lg:w-1/2 2xl:w-3/4">
            <h1 className="pt-8 text-2xl md:text-4xl font-bold">
              Uniquement à emporter
            </h1>
            <p className="py-4 md:text-2xl md:mx-10 2xl:mx-0">
              Chez nous, chaque plat est une œuvre d'art, préparé avec passion
              et attention aux détails. Notre équipe de chefs expérimentés
              maîtrise les techniques traditionnelles de cuisson et de
              préparation, ce qui se reflète dans chaque bouchée que vous
              dégusterez. Profitez de nos délicieux plats à emporter et
              transportez-vous dans un voyage culinaire à travers le Sud-Est
              asiatique, grâce à des produits frais et authentiques.
            </p>
          </div>
        </div>
      </FadeInOut>
    </div>
  );
}
