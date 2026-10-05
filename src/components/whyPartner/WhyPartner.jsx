import WhyPartnerCards from "./WhyPartnerCards";


const WhyPartner = () => {
    return (
        <section className="bg-[#EEEAE4] py-12 sm:pt-14 sm:pb-14 lg:pt-16 lg:pb-16">

            <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-10">

                <div className="grid gap-10 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">

                    {/* Left Content */}
                    <div>

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
                            WHY PARTNER WITH ARR
                        </p>


                        <h2
                            className="
                                max-w-[480px]
                                font-serif
                                text-[42px]
                                leading-[0.98]
                                tracking-[-0.7px]
                                text-[#1F2937]
                                sm:text-[48px]
                                lg:text-[54px]
                                lg:tracking-[-0.8px]
                            "
                        >
                            Built for
                            <br />
                            Long-Term
                            <br />
                            Partnerships.
                        </h2>


                        <p
                            className="
                                mt-5
                                max-w-[440px]
                                text-[15px]
                                leading-7
                                text-[#596273]
                                sm:mt-6
                                sm:text-[16px]
                                sm:leading-8
                            "
                        >
                            A thoughtful approach to textile development,
                            built around flexibility, reliability and lasting
                            relationships with global buyers.
                        </p>

                    </div>


                    {/* Right Points */}
                    <div className="lg:-mt-6">
                        <WhyPartnerCards />
                    </div>

                </div>

            </div>

        </section>
    );
};


export default WhyPartner;
