import ManufacturingPageHero from "../components/manufacturingPage/ManufacturingPageHero";
import ManufacturingProcess from "../components/manufacturingPage/ManufacturingProcess";
import ManufacturingCapabilities from "../components/manufacturingPage/ManufacturingCapabilities";
import ManufacturingQuality from "../components/manufacturingPage/ManufacturingQuality";
import ManufacturingCTA from "../components/manufacturingPage/ManufacturingCTA";

const Manufacturing = () => {
    return (
        <main>

            <ManufacturingPageHero />

            <ManufacturingProcess />

            <ManufacturingCapabilities />

            <ManufacturingQuality />

            <ManufacturingCTA />

        </main>
    );
};

export default Manufacturing;
