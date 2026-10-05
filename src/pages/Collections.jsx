import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import CollectionsPageHero from "../components/collectionsPage/CollectionsPageHero";
import CollectionCategory from "../components/collectionsPage/CollectionCategory";
import CollectionsCTA from "../components/collectionsPage/CollectionsCTA";

import kitchen from "../assets/images/collections/kitchen.jpg";
import bath from "../assets/images/collections/bath.jpg";
import living from "../assets/images/collections/living.jpg";
import windowImg from "../assets/images/collections/window.jpg";
import utility from "../assets/images/collections/utility.jpg";
import tote from "../assets/images/collections/tote.jpg";


const collectionCategories = [
    {
        id: "kitchen-textiles",
        number: "01",
        title: "Kitchen Textiles",
        description:
            "Textile essentials developed for everyday kitchens, retail collections and private-label programs.",
        products: [
            "Tea Towels",
            "Aprons",
            "Oven Mitts",
            "Pot Holders",
            "Table Linen",
        ],
        image: kitchen,
    },
    {
        id: "bath-textiles",
        number: "02",
        title: "Bath Textiles",
        description:
            "Soft, practical textile formats designed around comfort, quality and everyday use.",
        products: [
            "Bath Towels",
            "Hand Towels",
            "Face Towels",
            "Bath Mats",
        ],
        image: bath,
    },
    {
        id: "living-textiles",
        number: "03",
        title: "Living Textiles",
        description:
            "Decorative and functional textiles created to complement contemporary living spaces.",
        products: [
            "Cushions",
            "Throws",
            "Decorative Textiles",
        ],
        image: living,
    },
    {
        id: "window-textiles",
        number: "04",
        title: "Window Textiles",
        description:
            "Window textile formats developed with attention to proportion, fabric and interior aesthetics.",
        products: [
            "Curtains",
            "Panels",
            "Custom Window Textiles",
        ],
        image: windowImg,
    },
    {
        id: "utility-bags",
        number: "05",
        title: "Utility Bags",
        description:
            "Practical textile bags developed around everyday functionality and brand requirements.",
        products: [
            "Storage Bags",
            "Utility Bags",
            "Custom Bag Formats",
        ],
        image: utility,
    },
    {
        id: "tote-bags",
        number: "06",
        title: "Tote Bags",
        description:
            "Reusable textile totes developed for retail, lifestyle and private-label applications.",
        products: [
            "Cotton Totes",
            "Retail Bags",
            "Custom Totes",
        ],
        image: tote,
    },
];


const Collections = () => {

    const location = useLocation();

    useEffect(() => {

        if (location.hash) {

            const sectionId = location.hash.substring(1);

            setTimeout(() => {

                const element = document.getElementById(sectionId);

                if (element) {
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }

            }, 100);

        } else {

            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

        }

    }, [location]);


    return (
        <main>

            <CollectionsPageHero />

            <section className="bg-[#F8F7F4] py-20 lg:py-28">

                <div className="mx-auto max-w-[1240px] px-6 lg:px-10">

                    <div className="space-y-20 lg:space-y-28">

                        {collectionCategories.map((category) => (

                            <div
                                key={category.id}
                                id={category.id}
                                className="scroll-mt-8"
                            >

                                <CollectionCategory
                                    category={category}
                                />

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            <CollectionsCTA />

        </main>
    );
};


export default Collections;
