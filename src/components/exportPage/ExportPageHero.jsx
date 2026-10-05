import exportImage from "../../assets/images/collections/living.jpg";


const ExportPageHero = () => {
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
                src={exportImage}
                alt="ARR textile collection"
                className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    object-center
                    scale-[1.05]
                "
            />


            {/* Soft Overlay */}
            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-[#F1EEE9]/95
                    via-[#F1EEE9]/72
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

                <div className="max-w-[680px]">

                    <p
                        className="
                            mb-6
                            text-[13px]
                            font-medium
                            uppercase
                            tracking-[0.35em]
                            text-[#B89565]
                            sm:text-[16px]
                            sm:tracking-[0.4em]
                        "
                    >
                        EXPORT & PARTNERSHIPS
                    </p>


                    <h1
                        className="
                            font-serif
                            text-[50px]
                            leading-[0.96]
                            tracking-[-1px]
                            text-[#1F2937]
                            sm:text-[64px]
                            lg:text-[82px]
                            lg:tracking-[-1.5px]
                        "
                    >
                        From India,
                        <br />
                        built around
                        <br />
                        your market.
                    </h1>


                    <p
                        className="
                            mt-8
                            max-w-[610px]
                            text-[17px]
                            leading-8
                            text-[#596273]
                            sm:text-[19px]
                            sm:leading-8
                        "
                    >
                        A buyer-focused approach to textile development,
                        built around product requirements, market needs
                        and dependable communication.
                    </p>

                </div>

            </div>

        </section>
    );
};


export default ExportPageHero;
