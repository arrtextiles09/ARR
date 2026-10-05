const approachPoints = [
    {
        number: "01",
        title: "Market Understanding",
        description:
            "We begin by understanding where the product will be sold, who it is intended for and what the market expects.",
    },
    {
        number: "02",
        title: "Clear Specifications",
        description:
            "Dimensions, materials, construction, finishing and other product requirements are discussed clearly before development.",
    },
    {
        number: "03",
        title: "Custom Development",
        description:
            "Products can be developed around your specifications rather than relying only on standard collections.",
    },
    {
        number: "04",
        title: "Private Label",
        description:
            "We can work around private-label requirements and product directions created specifically for your brand.",
    },
    {
        number: "05",
        title: "Dependable Communication",
        description:
            "Clear communication throughout development helps keep expectations aligned from the first discussion onward.",
    },
    {
        number: "06",
        title: "Long-Term Thinking",
        description:
            "We aim to build relationships around repeat development and reliable sourcing rather than one-off transactions.",
    },
];


const ExportApproach = () => {
    return (
        <section className="bg-[#F1EEE9] py-20 lg:py-28">

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
                        OUR APPROACH
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
                            lg:text-[68px]
                        "
                    >
                        Built around
                        <br />
                        your requirements.
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
                        Every buyer has different expectations. Our
                        approach is designed to stay flexible while
                        keeping product development clear and practical.
                    </p>

                </div>


                {/* Points */}
                <div
                    className="
                        mt-16
                        grid
                        grid-cols-1
                        gap-x-10
                        md:grid-cols-2
                        lg:grid-cols-3
                    "
                >

                    {approachPoints.map((point) => (
                        <div
                            key={point.number}
                            className="
                                border-t
                                border-[#D8D1C8]
                                py-8
                            "
                        >

                            <span
                                className="
                                    font-serif
                                    text-[32px]
                                    text-[#B89565]
                                "
                            >
                                {point.number}
                            </span>


                            <h3
                                className="
                                    mt-5
                                    font-serif
                                    text-[26px]
                                    leading-tight
                                    text-[#1F2937]
                                "
                            >
                                {point.title}
                            </h3>


                            <p
                                className="
                                    mt-4
                                    text-[15px]
                                    leading-7
                                    text-[#667085]
                                "
                            >
                                {point.description}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};


export default ExportApproach;
