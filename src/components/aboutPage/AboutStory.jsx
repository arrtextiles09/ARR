import curtains from "../../assets/images/about/curtains.jpg";


const AboutStory = () => {
    return (
        <section className="bg-white py-20 lg:py-28">

            <div className="mx-auto max-w-[1240px] px-6 lg:px-10">

                <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">

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
                            OUR STORY
                        </p>


                        <h2
                            className="
                                mt-5
                                max-w-[600px]
                                font-serif
                                text-[48px]
                                leading-[0.96]
                                tracking-[-1px]
                                text-[#1F2937]
                                sm:text-[58px]
                                lg:text-[66px]
                            "
                        >
                            Experience that
                            <br />
                            continues forward.
                        </h2>


                        <div
                            className="
                                mt-8
                                max-w-[600px]
                                space-y-5
                                text-[16px]
                                leading-8
                                text-[#596273]
                                sm:text-[17px]
                            "
                        >

                            <p>
                                ARR is being built around a foundation of
                                long-standing textile experience and a deep
                                understanding of how textile products are
                                developed for real markets.
                            </p>


                            <p>
                                With more than 25 years of experience in the
                                textile industry, our approach has been shaped
                                by years of working with fabrics, products,
                                specifications and the practical details that
                                matter in manufacturing.
                            </p>


                            <p>
                                We have also experienced the export side of
                                the business, giving us an understanding of
                                the importance of clear communication,
                                dependable development and attention to buyer
                                requirements.
                            </p>

                        </div>

                    </div>


                    {/* Image */}
                    <div className="overflow-hidden rounded-[28px]">

                        <img
                            src={curtains}
                            alt="Textile materials and products"
                            className="
                                h-[520px]
                                w-full
                                object-cover
                                transition-transform
                                duration-700
                                hover:scale-105
                            "
                        />

                    </div>

                </div>

            </div>

        </section>
    );
};


export default AboutStory;
