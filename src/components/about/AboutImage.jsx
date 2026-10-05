import towels from "../../assets/images/about/towels.png";
import curtains from "../../assets/images/about/curtains.jpg";
import kitchen from "../../assets/images/about/kitchen-towels.jpg";


const AboutImage = () => {
    return (
        <div
            className="
                grid
                h-[420px]
                grid-cols-[1.25fr_0.9fr]
                gap-1
                overflow-hidden
                rounded-[26px]
                bg-white
                shadow-[0_10px_28px_rgba(0,0,0,0.08)]
                sm:h-[460px]
                lg:h-[480px]
            "
        >

            <div className="overflow-hidden">
                <img
                    src={towels}
                    alt=""
                    className="
                        h-full
                        w-full
                        object-cover
                        transition
                        duration-500
                        hover:scale-105
                    "
                />
            </div>


            <div className="grid grid-rows-[1fr_0.72fr] gap-1">


                <div className="overflow-hidden">
                    <img
                        src={curtains}
                        alt=""
                        className="
                            h-full
                            w-full
                            object-cover
                            transition
                            duration-500
                            hover:scale-105
                        "
                    />
                </div>


                <div className="overflow-hidden">
                    <img
                        src={kitchen}
                        alt=""
                        className="
                            h-full
                            w-full
                            object-cover
                            transition
                            duration-500
                            hover:scale-105
                        "
                    />
                </div>


            </div>


        </div>
    );
};


export default AboutImage;
