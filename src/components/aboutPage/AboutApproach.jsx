const approaches = [
    {
        number: "01",
        title: "Thoughtful Development",
        description:
            "We begin by understanding the product, the intended market and the details that make the collection relevant to the buyer.",
    },
    {
        number: "02",
        title: "Practical Quality",
        description:
            "Materials, construction, finishing and specifications are considered together to create products that balance appearance with everyday use.",
    },
    {
        number: "03",
        title: "Flexible Partnerships",
        description:
            "We work with different requirements and product directions, including custom development and private-label opportunities.",
    },
    {
        number: "04",
        title: "Clear Communication",
        description:
            "Good product development depends on clear expectations. We value straightforward communication from initial discussion through final specifications.",
    },
];


const AboutApproach = () => {
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
                            OUR APPROACH
                        </p>


                        <h2
                            className="
                                mt-5
                                max-w-[500px]
                                font-serif
                                text-[48px]
                                leading-[0.96]
                                tracking-[-1px]
                                text-[#1F2937]
                                sm:text-[58px]
                            "
                        >
                            Built around
                            <br />
                            the details.
                        </h2>


                        <p
                            className="
                                mt-7
                                max-w-[450px]
                                text-[16px]
                                leading-8
                                text-[#596273]
                                sm:text-[17px]
                            "
                        >
                            The best textile collections are shaped by
                            understanding the small details as much as the
                            larger idea.
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

                        {approaches.map((item) => (
                            <div
                                key={item.number}
                                className="
                                    border-b
                                    border-[#D8D1C8]
                                    py-8
                                    sm:px-7
                                    sm:odd:border-r
                                "
                            >

                                <span
                                    className="
                                        font-serif
                                        text-[32px]
                                        text-[#B89565]
                                    "
                                >
                                    {item.number}
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
                                    {item.title}
                                </h3>


                                <p
                                    className="
                                        mt-4
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


export default AboutApproach;
