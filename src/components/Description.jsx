import FadeInOut from "../animation/FadeInOut";

export default function Description() {
  return (
    <div className="p-14">
      <FadeInOut>
        <div className="text-center py-4">
          <img src="/traditionnellecooking.jpg" alt="traditionnellecooking" />
          <h1 className="pt-8 text-2xl font-bold">Une cuisine familiale</h1>
          <p className="py-4">
            Découvrez les saveurs authentiques du Sud-Est asiatique dans notre
            restaurant, où nous mettons en valeur le savoir-faire familial et
            artisanal de notre cuisine cambodgienne et thaïlandaise. Notre menu
            propose une variété de plats traditionnels préparés avec des
            recettes transmises de génération en génération et des ingrédients
            frais.
          </p>
        </div>
      </FadeInOut>
      <FadeInOut>
        <div className="text-center py-4">
          <img src="/produitfrais.jpg" alt="produitfrais" />
          <h1 className="pt-8 text-2xl font-bold">Des produits frais</h1>
          <p className="py-4">
            Nous utilisons une gamme de produits frais asiatiques pour créer des
            plats délicieux et authentiques. Parmi nos ingrédients phares,
            citons le riz thaïlandais, les nouilles de riz, les crevettes, le
            poulet, le porc, les légumes frais tels que les carottes, les
            poivrons et les champignons, ainsi que des épices et des sauces
            authentiques telles que le curry rouge, le curry vert et le nuoc
            mam.
          </p>
        </div>
      </FadeInOut>
      <FadeInOut>
        <div className="text-center py-4">
          <img src="/takeaway.jpg" alt="takeaway" />
          <h1 className="pt-8 text-2xl font-bold">Uniquement à emporter</h1>
          <p className="py-4">
            Chez nous, chaque plat est une œuvre d'art, préparé avec passion et
            attention aux détails. Notre équipe de chefs expérimentés maîtrise
            les techniques traditionnelles de cuisson et de préparation, ce qui
            se reflète dans chaque bouchée que vous dégusterez. Profitez de nos
            délicieux plats à emporter et transportez-vous dans un voyage
            culinaire à travers le Sud-Est asiatique, grâce à des produits frais
            et authentiques.
          </p>
        </div>
      </FadeInOut>
    </div>
  );
}
