import exportImage from "../../assets/images/collections/living.jpg";


const Export = () => {
    return (
        <section className="bg-[#F7F5F2] py-14 sm:py-16 lg:py-20">

            <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-10">

                <div className="grid items-stretch gap-10 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

                    {/* LEFT CONTENT */}
                    <div className="flex flex-col justify-center">

                        <p
                            className="
                                mb-3
                                text-[13px]
                                font-medium
                                uppercase
                                tracking-[0.35em]
                                text-[#B89565]
                                sm:mb-4
                                sm:text-[16px]
                                sm:tracking-[0.4em]
                            "
                        >
                            EXPORT & PARTNERSHIPS
                        </p>


                        <h2
                            className="
                                max-w-[520px]
                                font-serif
                                text-[42px]
                                leading-[0.98]
                                tracking-[-0.7px]
                                text-[#1F2937]
                                sm:text-[50px]
                                lg:text-[58px]
                                lg:tracking-[-0.8px]
                            "
                        >
                            From India,
                            <br />
                            Built Around
                            <br />
                            Your Market.
                        </h2>


                        <p
                            className="
                                mt-6
                                max-w-[500px]
                                text-[15px]
                                leading-7
                                text-[#596273]
                                sm:mt-7
                                sm:text-[17px]
                                sm:leading-8
                            "
                        >
                            Our approach to working with buyers begins with
                            understanding their market, product requirements
                            and expectations.
                        </p>


                        <p
                            className="
                                mt-4
                                max-w-[500px]
                                text-[15px]
                                leading-7
                                text-[#596273]
                                sm:mt-5
                                sm:text-[17px]
                                sm:leading-8
                            "
                        >
                            With previous experience in textile exports, we
                            understand the importance of clear specifications,
                            thoughtful product development and dependable
                            communication.
                        </p>


                        {/* CLOSING STATEMENT */}
                        <div className="mt-8 border-t border-[#D8D1C8] pt-6 sm:mt-10 sm:pt-7">

                            <h3
                                className="
                                    font-serif
                                    text-[24px]
                                    leading-tight
                                    text-[#1F2937]
                                    sm:text-[28px]
                                "
                            >
                                Custom Development
                            </h3>


                            <p
                                className="
                                    mt-2
                                    max-w-[440px]
                                    text-[14px]
                                    leading-6
                                    text-[#667085]
                                    sm:mt-3
                                    sm:text-[15px]
                                    sm:leading-7
                                "
                            >
                                Products developed around your specifications,
                                materials, quantities and market requirements.
                            </p>

                        </div>

                    </div>


                    {/* RIGHT IMAGE */}
                    <div className="h-full">

                        <div
                            className="
                                h-[420px]
                                overflow-hidden
                                rounded-[26px]
                                sm:h-[500px]
                                sm:rounded-[30px]
                                lg:h-full
                                lg:min-h-[600px]
                            "
                        >

                            <img
                                src={exportImage}
                                alt="ARR textile collection"
                                className="
                                    h-full
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

            </div>

        </section>
    );
};


export default Export;
