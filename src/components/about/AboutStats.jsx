const stats = [
    {
        title: "25+",
        subtitle: "Years Experience",
    },
    {
        title: "Custom",
        subtitle: "Manufacturing",
    },
    {
        title: "Export",
        subtitle: "Focused Production",
    },
    {
        title: "Premium",
        subtitle: "Home Textile Collections",
    },
];


const AboutStats = () => {
    return (
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-x-8">

            {stats.map((item) => (

                <div
                    key={item.title}
                    className="border-l border-[#E8E2DA] pl-5 sm:pl-6"
                >

                    <h3
                        className="
                            font-serif
                            text-[32px]
                            leading-none
                            text-[#1F2937]
                            sm:text-[36px]
                            lg:text-[40px]
                        "
                    >
                        {item.title}
                    </h3>

                    <p
                        className="
                            mt-3
                            max-w-[150px]
                            whitespace-pre-line
                            text-[14px]
                            leading-6
                            text-[#667085]
                            sm:text-[15px]
                            sm:leading-7
                        "
                    >
                        {item.subtitle}
                    </p>

                </div>

            ))}

        </div>
    );
};


export default AboutStats;
