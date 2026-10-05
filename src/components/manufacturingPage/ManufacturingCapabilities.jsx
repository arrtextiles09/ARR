const capabilities = [
    {
        title: "Kitchen Textiles",
        description:
            "Tea towels, aprons, oven mitts, table linen and other everyday kitchen textile products.",
    },
    {
        title: "Living Textiles",
        description:
            "Cushions, throws and decorative textile products developed for contemporary interiors.",
    },
    {
        title: "Bath Textiles",
        description:
            "Towels and bath essentials developed around quality, comfort and practical everyday use.",
    },
    {
        title: "Window Textiles",
        description:
            "Curtains, panels and drapery products developed according to dimensions, fabrics and finishing requirements.",
    },
    {
        title: "Utility Bags",
        description:
            "Functional textile bags designed for everyday use, retail requirements and private-label collections.",
    },
    {
        title: "Tote Bags",
        description:
            "Reusable cotton and textile totes developed around size, construction, branding and market requirements.",
    },
];

const ManufacturingCapabilities = () => {
    return (
        <section className="bg-[#F1EEE9] py-20 lg:py-28">

            <div className="mx-auto max-w-[1240px] px-6 lg:px-10">

                <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

                    {/* Left */}
                    <div>

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
                            OUR CAPABILITIES
                        </p>

                        <h2
                            className="
                                mt-5
                                max-w-[480px]
                                font-serif
                                text-[48px]
                                leading-[0.96]
                                tracking-[-1px]
                                text-[#1F2937]
                                sm:text-[58px]
                            "
                        >
                            Developed around
                            <br />
                            your requirements.
                        </h2>

                        <p
                            className="
                                mt-7
                                max-w-[450px]
                                text-[16px]
                                leading-8
                                text-[#596273]
                            "
                        >
                            Our manufacturing approach allows flexibility
                            across different textile categories, materials,
                            dimensions, quantities and finishing requirements.
                        </p>

                    </div>

                    {/* Right */}
                    <div
                        className="
                            grid
                            grid-cols-1
                            border-t
                            border-[#D8D1C8]
                            sm:grid-cols-2
                        "
                    >

                        {capabilities.map((item) => (
                            <div
                                key={item.title}
                                className="
                                    border-b
                                    border-[#D8D1C8]
                                    py-8
                                    sm:px-7
                                    sm:odd:border-r
                                "
                            >

                                <h3
                                    className="
                                        font-serif
                                        text-[25px]
                                        text-[#1F2937]
                                    "
                                >
                                    {item.title}
                                </h3>

                                <p
                                    className="
                                        mt-3
                                        text-[15px]
                                        leading-7
                                        text-[#667085]
                                    "
                                >
                                    {item.description}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
};

export default ManufacturingCapabilities;
