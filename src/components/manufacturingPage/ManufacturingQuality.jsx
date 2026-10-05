import manufacturingImage from "../../assets/images/manufacturing/manufacturing.jpg";

const ManufacturingQuality = () => {
    return (
        <section className="bg-white py-20 lg:py-28">

            <div className="mx-auto max-w-[1240px] px-6 lg:px-10">

                <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">

                    {/* Image */}
                    <div
                        className="
                            overflow-hidden
                            rounded-[28px]
                        "
                    >
                        <img
                            src={manufacturingImage}
                            alt="Textile manufacturing"
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

                    {/* Content */}
                    <div className="lg:pl-8">

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
                            QUALITY & CONSISTENCY
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
                            "
                        >
                            Details matter
                            <br />
                            at every stage.
                        </h2>

                        <p
                            className="
                                mt-7
                                text-[16px]
                                leading-8
                                text-[#596273]
                            "
                        >
                            Textile manufacturing is not only about making
                            a product. It is about maintaining the details
                            established during development through to the
                            finished collection.
                        </p>

                        <p
                            className="
                                mt-5
                                text-[16px]
                                leading-8
                                text-[#596273]
                            "
                        >
                            We focus on clear specifications, considered
                            materials, consistent construction and careful
                            finishing to help ensure the final product
                            reflects the agreed requirements.
                        </p>

                        <div className="mt-9 border-t border-[#DED8D0] pt-7">

                            <p
                                className="
                                    font-serif
                                    text-[25px]
                                    text-[#1F2937]
                                "
                            >
                                Built around your specifications.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default ManufacturingQuality;
