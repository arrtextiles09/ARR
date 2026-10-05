import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero/hero-banner.png";
import Button from "../ui/Button";

const Hero = () => {
    return (
        <section className="relative h-screen min-h-[700px] w-full overflow-hidden">


            {/* Background Image */}
            <img
                src={heroImage}
                alt="ARR Textiles"
                className="
                    absolute
                    inset-0
                    z-0
                    h-full
                    w-full
                    object-cover
                    object-center
                "
            />

            {/* Overlay */}
            <div className="absolute inset-0 z-0 bg-black/30"></div>


            {/* Hero Content */}
            <div
                className="
                    relative
                    z-10
                    mx-auto
                    flex
                    h-full
                    max-w-[1440px]
                    items-center
                    px-6
                    pt-20
                    sm:px-8
                    lg:px-16
                    lg:pt-20
                "
            >

                <div className="max-w-[650px]">

                    <h1
                        className="
                            font-serif
                            text-[46px]
                            leading-[0.98]
                            tracking-[-1px]
                            text-white
                            sm:text-[56px]
                            md:text-[68px]
                            lg:text-[80px]
                            lg:tracking-[-1.5px]
                        "
                    >
                        Crafted in India.
                        <br />
                        Designed for
                        <br />
                        the World.
                    </h1>


                    <p
                        className="
                            mt-6
                            max-w-[560px]
                            text-[17px]
                            leading-7
                            text-white/90
                            sm:mt-8
                            sm:text-[19px]
                            sm:leading-8
                            lg:text-[22px]
                            lg:leading-9
                        "
                    >
                        Premium home textiles thoughtfully designed and
                        meticulously crafted for global living.
                    </p>


                    <div
                        className="
                            mt-9
                            flex
                            flex-col
                            gap-4
                            sm:mt-12
                            sm:flex-row
                            sm:flex-wrap
                            sm:gap-6
                            lg:mt-14
                        "
                    >

                        <Link to="/collections">
                            <Button variant="primary">
                                Explore Collections →
                            </Button>
                        </Link>


                        <Link to="/catalogue">
                            <Button variant="secondary">
                                Request Catalogue →
                            </Button>
                        </Link>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Hero;
