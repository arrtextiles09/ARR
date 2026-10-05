import CataloguePageHero from "../components/cataloguePage/CataloguePageHero";
import CatalogueCategories from "../components/cataloguePage/CatalogueCategories";
import CatalogueRequest from "../components/cataloguePage/CatalogueRequest";
import CatalogueCTA from "../components/cataloguePage/CatalogueCTA";


const Catalogue = () => {
    return (
        <main>

            <CataloguePageHero />

            <CatalogueCategories />

            <CatalogueRequest />

            <CatalogueCTA />

        </main>
    );
};


export default Catalogue;
