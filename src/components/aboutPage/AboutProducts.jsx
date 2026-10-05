import towels from "../../assets/images/about/towels.png";
import curtains from "../../assets/images/about/curtains.jpg";
import kitchen from "../../assets/images/about/kitchen-towels.jpg";


const products = [
    {
        title: "Living Textiles",
        description: "Cushions, throws and decorative home textiles.",
        image: towels,
    },
    {
        title: "Window Textiles",
        description: "Curtains and drapery for contemporary interiors.",
        image: curtains,
    },
    {
        title: "Kitchen Textiles",
        description: "Everyday kitchen textiles developed for practical use.",
        image: kitchen,
    },
];


const AboutProducts = () => {
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
                        WHAT WE DEVELOP
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
                        Textile products
                        <br />
                        for everyday spaces.
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
                        Our product direction spans multiple areas of the
                        home, allowing collections to be developed around
                        different markets, customer preferences and private
                        label requirements.
                    </p>

                </div>


                {/* Product Grid */}
                <div
                    className="
                        mt-14
                        grid
                        grid-cols-1
                        gap-5
                        md:grid-cols-3
                    "
                >

                    {products.map((product) => (
                        <div
                            key={product.title}
                            className="
                                group
                                overflow-hidden
                                rounded-[26px]
                                bg-[#F1EEE9]
                            "
                        >

                            <div className="h-[360px] overflow-hidden">

                                <img
                                    src={product.image}
                                    alt={product.title}
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
                                        text-[#1F2937]
                                    "
                                >
                                    {product.title}
                                </h3>


                                <p
                                    className="
                                        mt-3
                                        text-[15px]
                                        leading-7
                                        text-[#667085]
                                    "
                                >
                                    {product.description}
                                </p>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};


export default AboutProducts;
