import { Link } from "react-router-dom";


const CollectionCard = ({ item }) => {

    const height =
        item.size === "large"
            ? "h-[380px] sm:h-[420px] lg:h-[460px]"
            : item.size === "wide"
                ? "h-[200px] sm:h-[215px] lg:h-[230px]"
                : "h-[200px] sm:h-[215px] lg:h-[225px]";


    return (

        <Link
            to={`/collections#${item.slug}`}
            className={`
                group
                relative
                block
                overflow-hidden
                rounded-[24px]
                sm:rounded-[26px]
                ${height}
                cursor-pointer
            `}
        >

            <img
                src={item.image}
                alt={item.title}
                className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-105
                "
            />


            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/55
                    via-black/15
                    to-transparent
                "
            />


            <div
                className="
                    absolute
                    bottom-5
                    left-5
                    right-5
                    text-white
                    sm:bottom-6
                    sm:left-6
                    sm:right-6
                "
            >

                <h3
                    className="
                        font-serif
                        text-[25px]
                        leading-tight
                        sm:text-[28px]
                        lg:text-[30px]
                    "
                >
                    {item.title}
                </h3>


                <p
                    className="
                        mt-2
                        text-[13px]
                        leading-5
                        text-white/90
                        sm:text-[14px]
                        sm:leading-6
                    "
                >
                    {item.description}
                </p>


                <div
                    className="
                        mt-3
                        inline-flex
                        items-center
                        gap-2
                        text-[12px]
                        uppercase
                        tracking-[0.15em]
                        sm:mt-4
                        sm:text-[13px]
                    "
                >

                    Explore

                    <span
                        className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-2
                        "
                    >
                        →
                    </span>

                </div>

            </div>

        </Link>

    );
};


export default CollectionCard;
