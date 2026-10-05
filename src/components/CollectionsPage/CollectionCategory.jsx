import { useNavigate } from "react-router-dom";


const CollectionCategory = ({ category }) => {

    const navigate = useNavigate();


    const handleDiscussCategory = () => {

        navigate("/contact#enquiry");

    };


    return (
        <article
            id={category.slug}
            className="
                grid
                items-center
                gap-10
                lg:grid-cols-[0.8fr_1.2fr]
                lg:gap-16
            "
        >

            {/* Content */}
            <div>

                <div className="flex items-center gap-4">

                    <span
                        className="
                            font-serif
                            text-[18px]
                            text-[#B89565]
                        "
                    >
                        {category.number}
                    </span>

                    <div className="h-px w-10 bg-[#D8D1C8]" />

                </div>


                <h2
                    className="
                        mt-5
                        font-serif
                        text-[40px]
                        leading-[0.98]
                        tracking-[-0.6px]
                        text-[#1F2937]
                        sm:text-[48px]
                        lg:text-[54px]
                    "
                >
                    {category.title}
                </h2>


                <p
                    className="
                        mt-6
                        max-w-[470px]
                        text-[16px]
                        leading-8
                        text-[#596273]
                    "
                >
                    {category.description}
                </p>


                {/* Product List */}
                <div className="mt-8">

                    <p
                        className="
                            text-[12px]
                            font-medium
                            uppercase
                            tracking-[0.25em]
                            text-[#B89565]
                        "
                    >
                        Product Formats
                    </p>


                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">

                        {category.products.map((product) => (

                            <div
                                key={product}
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    text-[15px]
                                    text-[#4B5563]
                                "
                            >

                                <span className="h-1 w-1 rounded-full bg-[#B89565]" />

                                {product}

                            </div>

                        ))}

                    </div>

                </div>


                {/* Discuss Button */}
                <button
                    type="button"
                    onClick={handleDiscussCategory}
                    className="
                        mt-9
                        inline-flex
                        items-center
                        gap-3
                        border-b
                        border-[#1F2937]
                        pb-2
                        text-[13px]
                        font-medium
                        uppercase
                        tracking-[0.15em]
                        text-[#1F2937]
                        transition-colors
                        duration-300
                        hover:border-[#B89565]
                        hover:text-[#B89565]
                    "
                >
                    Discuss This Category

                    <span>→</span>

                </button>

            </div>


            {/* Image */}
            <div
                className="
                    overflow-hidden
                    rounded-[28px]
                    bg-white
                "
            >

                <img
                    src={category.image}
                    alt={category.title}
                    className="
                        h-[380px]
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        hover:scale-105
                        sm:h-[460px]
                        lg:h-[520px]
                    "
                />

            </div>

        </article>
    );
};


export default CollectionCategory;
