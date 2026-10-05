import partnerPoints from "./WhyPartnerData";


const WhyPartnerCards = () => {
    return (
        <div
            className="
                mx-auto
                grid
                max-w-[920px]
                grid-cols-1
                gap-x-10
                sm:grid-cols-2
                lg:gap-x-16
            "
        >

            {partnerPoints.map((point, index) => (

                <div
                    key={point.number}
                    className={`
                        py-6
                        sm:py-7
                        ${index >= 2
                            ? "border-t border-[#D8D1C8]"
                            : ""
                        }
                    `}
                >

                    <div className="flex gap-4 sm:gap-5">

                        {/* Number */}
                        <span
                            className="
                                shrink-0
                                font-serif
                                text-[29px]
                                leading-none
                                text-[#B89565]
                                sm:text-[34px]
                            "
                        >
                            {point.number}
                        </span>


                        {/* Content */}
                        <div className="pt-0.5 sm:pt-1">

                            <h3
                                className="
                                    font-serif
                                    text-[21px]
                                    leading-tight
                                    text-[#1F2937]
                                    sm:text-[25px]
                                "
                            >
                                {point.title}
                            </h3>


                            <p
                                className="
                                    mt-2
                                    text-[14px]
                                    leading-6
                                    text-[#667085]
                                    sm:mt-3
                                    sm:text-[15px]
                                    sm:leading-7
                                "
                            >
                                {point.description}
                            </p>

                        </div>

                    </div>

                </div>

            ))}

        </div>
    );
};


export default WhyPartnerCards;
