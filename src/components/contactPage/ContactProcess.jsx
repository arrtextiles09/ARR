const steps = [
    {
        number: "01",
        title: "Share Your Requirements",
        description:
            "Tell us about your product, market, specifications and what you are looking to develop.",
    },
    {
        number: "02",
        title: "Discuss the Project",
        description:
            "We review your requirements and discuss the product direction, materials and development possibilities.",
    },
    {
        number: "03",
        title: "Develop Together",
        description:
            "Once the direction is clear, we can move toward product development and the next steps for your collection.",
    },
];


const ContactProcess = () => {
    return (
        <section className="bg-[#F1EEE9] py-20 lg:py-28">

            <div className="mx-auto max-w-[1240px] px-6 lg:px-10">

                <div className="text-center">

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
                        WHAT HAPPENS NEXT
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
                        A simple way
                        <br />
                        to get started.
                    </h2>

                </div>


                <div
                    className="
                        mt-14
                        grid
                        grid-cols-1
                        gap-6
                        md:grid-cols-3
                    "
                >

                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="
                                rounded-[24px]
                                border
                                border-[#D8D1C8]
                                bg-[#F8F7F4]
                                p-8
                            "
                        >

                            <span
                                className="
                                    font-serif
                                    text-[34px]
                                    text-[#B89565]
                                "
                            >
                                {step.number}
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


export default ContactProcess;
