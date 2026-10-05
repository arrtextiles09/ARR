const AboutExperience = () => {
    return (
        <section className="bg-[#EEEAE4] py-20 lg:py-28">

            <div className="mx-auto max-w-[1240px] px-6 lg:px-10">

                <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

                    {/* Large Number */}
                    <div>

                        <div
                            className="
                                font-serif
                                text-[110px]
                                leading-none
                                tracking-[-5px]
                                text-[#1F2937]
                                sm:text-[150px]
                                lg:text-[180px]
                            "
                        >
                            25+
                        </div>


                        <p
                            className="
                                mt-2
                                text-[14px]
                                font-medium
                                uppercase
                                tracking-[0.25em]
                                text-[#B89565]
                            "
                        >
                            YEARS OF TEXTILE EXPERIENCE
                        </p>

                    </div>


                    {/* Content */}
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
                            EXPERIENCE
                        </p>


                        <h2
                            className="
                                mt-5
                                font-serif
                                text-[46px]
                                leading-[0.98]
                                tracking-[-1px]
                                text-[#1F2937]
                                sm:text-[56px]
                            "
                        >
                            Knowledge built
                            <br />
                            through textiles.
                        </h2>


                        <p
                            className="
                                mt-7
                                max-w-[600px]
                                text-[16px]
                                leading-8
                                text-[#596273]
                                sm:text-[17px]
                            "
                        >
                            More than two decades of textile experience
                            provide a practical understanding of fabrics,
                            construction, product development and the
                            expectations that come with textile sourcing.
                        </p>


                        <div
                            className="
                                mt-9
                                grid
                                grid-cols-1
                                gap-6
                                sm:grid-cols-3
                            "
                        >

                            <div>
                                <p className="font-serif text-[28px] text-[#1F2937]">
                                    Product
                                </p>
                                <p className="mt-1 text-[14px] text-[#667085]">
                                    Development
                                </p>
                            </div>


                            <div>
                                <p className="font-serif text-[28px] text-[#1F2937]">
                                    Textile
                                </p>
                                <p className="mt-1 text-[14px] text-[#667085]">
                                    Expertise
                                </p>
                            </div>


                            <div>
                                <p className="font-serif text-[28px] text-[#1F2937]">
                                    Export
                                </p>
                                <p className="mt-1 text-[14px] text-[#667085]">
                                    Experience
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};


export default AboutExperience;
