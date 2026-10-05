import { Link } from "react-router-dom";

import Button from "../ui/Button";


const AboutContent = () => {
    return (
        <div>

            <p
                className="
                    mb-4
                    text-[14px]
                    font-medium
                    uppercase
                    tracking-[0.35em]
                    text-[#B89565]
                    sm:mb-5
                    sm:text-[16px]
                    sm:tracking-[0.4em]
                "
            >
                ABOUT ARR
            </p>


            <h2
                className="
                    max-w-[460px]
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
                Craftsmanship
                <br />
                Built Over
                <br />
                Generations.
            </h2>


            <div
                className="
                    mt-7
                    max-w-[450px]
                    space-y-5
                    text-[15px]
                    leading-7
                    text-[#4B5563]
                    sm:mt-8
                    sm:space-y-6
                    sm:text-[16px]
                    sm:leading-8
                "
            >
                <p>
                    Every collection begins with an understanding of how
                    people live.
                </p>


                <p>
                    From kitchen textiles and towels to cushions,
                    curtains, utility bags and bedding, ARR develops
                    thoughtfully crafted home textiles for retailers,
                    wholesalers and private-label brands across global
                    markets.
                </p>


                <p>
                    Backed by more than 25 years of textile expertise,
                    every product reflects dependable quality,
                    timeless design and meticulous craftsmanship.
                </p>
            </div>


            <Link to="/collections">
                <Button
                    variant="dark"
                    className="mt-8 px-8 py-3.5 sm:mt-10"
                >
                    Explore Collections →
                </Button>
            </Link>

        </div>
    );
};


export default AboutContent;
