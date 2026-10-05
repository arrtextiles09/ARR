import manufacturingImage from "../../assets/images/manufacturing/manufacturing.jpg";

const ManufacturingPageHero = () => {
    return (
        <section
            className="
                relative
                min-h-[720px]
                overflow-hidden
                bg-[#F1EEE9]
                pt-28
                sm:pt-32
                lg:min-h-[760px]
                lg:pt-28
            "
        >

            {/* Background Image */}
            <img
                src={manufacturingImage}
                alt="ARR textile manufacturing"
                className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    object-center
                    scale-[1.04]
                "
            />

            {/* Overlay */}
            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-[#1F2937]/85
                    via-[#1F2937]/45
                    to-transparent
                "
            />

            {/* Content */}
            <div
                className="
                    relative
                    z-10
                    mx-auto
                    flex
                    min-h-[600px]
                    max-w-[1240px]
                    items-center
                    px-6
                    lg:px-10
                "
            >

                <div className="max-w-[700px]">

                    <p
                        className="
                            mb-6
                            text-[13px]
                            font-medium
                            uppercase
                            tracking-[0.35em]
                            text-[#D6B98A]
                            sm:text-[16px]
                            sm:tracking-[0.4em]
                        "
                    >
                        MANUFACTURING
                    </p>

                    <h1
                        className="
                            font-serif
                            text-[50px]
                            leading-[0.96]
                            tracking-[-1px]
                            text-white
                            sm:text-[64px]
                            lg:text-[82px]
                            lg:tracking-[-1.5px]
                        "
                    >
                        From concept
                        <br />
                        to finished
                        <br />
                        collection.
                    </h1>

                    <p
                        className="
                            mt-8
                            max-w-[610px]
                            text-[17px]
                            leading-8
                            text-white/85
                            sm:text-[19px]
                            sm:leading-8
                        "
                    >
                        Thoughtful textile development built around your
                        specifications, product requirements and market
                        expectations.
                    </p>

                </div>

            </div>

        </section>
    );
};

export default ManufacturingPageHero;
