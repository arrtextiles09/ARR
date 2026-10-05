import kitchen from "../../assets/images/about/kitchen-towels.jpg";
import towels from "../../assets/images/about/towels.png";
import living from "../../assets/images/collections/living.jpg";
import curtains from "../../assets/images/about/curtains.jpg";


const categories = [
    {
        title: "Kitchen Textiles",
        description:
            "Tea towels, aprons, oven mitts, table linen and other kitchen-focused textile products.",
        image: kitchen,
    },
    {
        title: "Bath Textiles",
        description:
            "Towels and bath essentials developed around comfort, quality and everyday use.",
        image: towels,
    },
    {
        title: "Living Textiles",
        description:
            "Cushions, throws and decorative textiles designed for contemporary living spaces.",
        image: living,
    },
    {
        title: "Window Textiles",
        description:
            "Curtains and drapery products developed around dimensions, fabrics and finishing requirements.",
        image: curtains,
    },
    {
        title: "Tote Bags",
        description:
            "Reusable textile bags developed around size, construction, branding and market requirements.",
        image: living,
    },
    {
        title: "Utility Bags",
        description:
            "Functional textile bags designed around practical everyday applications and private-label needs.",
        image: kitchen,
    },
];


const CatalogueCategories = () => {
    return (
        <section className="bg-white py-20 lg:py-28">

            <div className="mx-auto max-w-[1240px] px-6 lg:px-10">

                {/* Header */}
                <div className="max-w-[700px]">

                    <p
                        className="
                            text-[13px]
                            font-medium
                            uppercase
                            tracking-[0.35em]
                            text-[#B89565]
                            sm:text-[16px]
                            sm:tracking-[0.4em]
                        "
                    >
                        COLLECTIONS
                    </p>


                    <h2
                        className="
                            mt-5
                            font-serif
                            text-[48px]
                            leading-[0.96]
                            tracking-[-1px]
                            text-[#1F2937]
                            sm:text-[58px]
                            lg:text-[66px]
                        "
                    >
                        A range built
                        <br />
                        around the home.
                    </h2>


                    <p
                        className="
                            mt-7
                            max-w-[620px]
                            text-[16px]
                            leading-8
                            text-[#596273]
                            sm:text-[17px]
                        "
                    >
                        Browse the categories we work across. Products can
                        be developed around your specifications, materials,
                        quantities and market requirements.
                    </p>

                </div>


                {/* Category Grid */}
                <div
                    className="
                        mt-14
                        grid
                        grid-cols-1
                        gap-5
                        sm:grid-cols-2
                        lg:grid-cols-3
                    "
                >

                    {categories.map((category) => (
                        <div
                            key={category.title}
                            className="
                                group
                                overflow-hidden
                                rounded-[26px]
                                bg-[#F8F7F4]
                            "
                        >

                            <div className="h-[300px] overflow-hidden">

                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="
                                        h-full
                                        w-full
                                        object-cover
                                        transition-transform
                                        duration-700
                                        group-hover:scale-105
                                    "
                                />

                            </div>


                            <div className="p-7">

                                <h3
                                    className="
                                        font-serif
                                        text-[27px]
                                        leading-tight
                                        text-[#1F2937]
                                    "
                                >
                                    {category.title}
                                </h3>


                                <p
                                    className="
                                        mt-3
                                        text-[15px]
                                        leading-7
                                        text-[#667085]
                                    "
                                >
                                    {category.description}
                                </p>


                                <div
                                    className="
                                        mt-5
                                        inline-flex
                                        items-center
                                        gap-2
                                        text-[12px]
                                        font-medium
                                        uppercase
                                        tracking-[0.15em]
                                        text-[#596273]
                                    "
                                >
                                    Discuss This Category

                                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};


export default CatalogueCategories;
