import collectionsHero from "../../assets/images/collections/collections-hero.png";

const CollectionsPageHero = () => {
    return (
        <section
            className="
                relative
                min-h-[720px]
                overflow-hidden
                bg-[#F1EEE9]
                pt-28
                pb-20
                sm:pt-32
                sm:pb-24
                lg:min-h-[760px]
                lg:pt-28
                lg:pb-28
            "
        >

            {/* Background Image */}
            <img
                src={collectionsHero}
                alt=""
                className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    object-center
                    scale-[1.12]
                "
            />

            {/* Soft Overlay */}
            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-[#F1EEE9]/95
                    via-[#F1EEE9]/75
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
                    min-h-[560px]
                    max-w-[1240px]
                    items-center
                    px-6
                    lg:px-10
                "
            >

                <div className="max-w-[650px]">

                    {/* Label */}
                    <p
                        className="
                            mb-5
                            text-[13px]
                            font-medium
                            uppercase
                            tracking-[0.35em]
                            text-[#B89565]
                            sm:text-[16px]
                            sm:tracking-[0.4em]
                        "
                    >
                        OUR COLLECTIONS
                    </p>

                    {/* Heading */}
                    <h1
                        className="
                            font-serif
                            text-[48px]
                            leading-[0.96]
                            tracking-[-1px]
                            text-[#1F2937]
                            sm:text-[60px]
                            lg:text-[76px]
                            lg:tracking-[-1.5px]
                        "
                    >
                        Textile collections
                        <br />
                        developed around
                        <br />
                        your market.
                    </h1>

                    {/* Description */}
                    <p
                        className="
                            mt-8
                            max-w-[620px]
                            text-[16px]
                            leading-7
                            text-[#596273]
                            sm:text-[18px]
                            sm:leading-8
                        "
                    >
                        Explore the product categories we can develop
                        across kitchen, bath, living, window and utility
                        textiles, with flexibility for custom and
                        private-label requirements.
                    </p>

                </div>

            </div>

        </section>
    );
};

export default CollectionsPageHero;
