const steps = [
    {
        number: "01",
        title: "Requirement",
        description:
            "We begin by understanding your product requirements, target market, quantities, materials, dimensions and finishing expectations.",
    },
    {
        number: "02",
        title: "Development",
        description:
            "Your requirements are translated into practical textile specifications, designs and product directions suitable for your market.",
    },
    {
        number: "03",
        title: "Sampling",
        description:
            "Samples are developed to evaluate construction, fabric, dimensions, appearance and finishing before moving toward production.",
    },
    {
        number: "04",
        title: "Production",
        description:
            "Once specifications are finalized, production is planned around the agreed requirements with attention to consistency and quality.",
    },
    {
        number: "05",
        title: "Finishing",
        description:
            "Products are carefully finished, checked and prepared according to the specifications established during development.",
    },
    {
        number: "06",
        title: "Ready for Market",
        description:
            "The finished collection is prepared for your market requirements, whether for retail, hospitality, wholesale or private-label use.",
    },
];

const ManufacturingProcess = () => {
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
                        HOW WE WORK
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
                        A considered process,
                        <br />
                        from first idea to production.
                    </h2>

                    <p
                        className="
                            mt-7
                            max-w-[620px]
                            text-[16px]
                            leading-8
                            text-[#596273]
                            sm:text-[18px]
                        "
                    >
                        Every project begins with understanding what you
                        need. From initial requirements through product
                        development and production, we work around the
                        details that matter to your business.
                    </p>

                </div>

                {/* Steps */}
                <div
                    className="
                        mt-16
                        grid
                        grid-cols-1
                        gap-x-10
                        gap-y-0
                        md:grid-cols-2
                        lg:grid-cols-3
                    "
                >

                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="
                                border-t
                                border-[#DED8D0]
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
                                {step.number}
                            </span>

                            <h3
                                className="
                                    mt-5
                                    font-serif
                                    text-[27px]
                                    text-[#1F2937]
                                "
                            >
                                {step.title}
                            </h3>

                            <p
                                className="
                                    mt-4
                                    text-[15px]
                                    leading-7
                                    text-[#667085]
                                "
                            >
                                {step.description}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default ManufacturingProcess;
