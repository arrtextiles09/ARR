const partners = [
    {
        title: "Importers",
        description:
            "For businesses sourcing textile products for established international markets.",
    },
    {
        title: "Retail Chains",
        description:
            "Collections developed around retail requirements, product positioning and customer expectations.",
    },
    {
        title: "Wholesalers",
        description:
            "Practical textile collections suited to wholesale distribution and varied product ranges.",
    },
    {
        title: "Hospitality",
        description:
            "Textile products developed for hospitality and interior-focused requirements.",
    },
    {
        title: "Interior Brands",
        description:
            "Home textile directions designed to complement interior and lifestyle collections.",
    },
    {
        title: "Private Label",
        description:
            "Custom product development created around your brand, specifications and market.",
    },
];


const ExportPartners = () => {
    return (
        <section className="bg-white py-20 lg:py-28">

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
                        WHO WE WORK WITH
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
                        Built for different
                        <br />
                        kinds of buyers.
                    </h2>


                    <p
                        className="
                            mx-auto
                            mt-7
                            max-w-[620px]
                            text-[16px]
                            leading-8
                            text-[#596273]
                            sm:text-[17px]
                        "
                    >
                        From established retailers to private-label brands,
                        we can adapt product development around different
                        sourcing models and market requirements.
                    </p>

                </div>


                {/* Partner Grid */}
                <div
                    className="
                        mt-16
                        grid
                        grid-cols-1
                        gap-5
                        md:grid-cols-2
                        lg:grid-cols-3
                    "
                >

                    {partners.map((partner) => (
                        <div
                            key={partner.title}
                            className="
                                rounded-[24px]
                                border
                                border-[#E2DDD6]
                                bg-[#F8F7F4]
                                p-8
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:shadow-lg
                            "
                        >

                            <h3
                                className="
                                    font-serif
                                    text-[27px]
                                    text-[#1F2937]
                                "
                            >
                                {partner.title}
                            </h3>


                            <p
                                className="
                                    mt-4
                                    text-[15px]
                                    leading-7
                                    text-[#667085]
                                "
                            >
                                {partner.description}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};


export default ExportPartners;
