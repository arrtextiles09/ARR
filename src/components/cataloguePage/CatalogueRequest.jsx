import { useState } from "react";


const CatalogueRequest = () => {

    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        country: "",
        interests: "",
        message: "",
    });


    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };


    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Catalogue request:", formData);
    };


    return (
        <section className="bg-[#F1EEE9] py-20 lg:py-28">

            <div className="mx-auto max-w-[1100px] px-6 lg:px-10">

                <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

                    {/* LEFT */}
                    <div>

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
                            REQUEST CATALOGUE
                        </p>


                        <h2
                            className="
                                mt-5
                                font-serif
                                text-[44px]
                                leading-[0.98]
                                tracking-[-0.8px]
                                text-[#1F2937]
                                sm:text-[52px]
                            "
                        >
                            Tell us where
                            <br />
                            to send it.
                        </h2>


                        <p
                            className="
                                mt-6
                                max-w-[430px]
                                text-[16px]
                                leading-8
                                text-[#596273]
                            "
                        >
                            Share your details and the product categories
                            you're interested in. We'll use this information
                            to understand your requirements.
                        </p>


                        <div className="mt-10 border-t border-[#D8D1C8] pt-7">

                            <p
                                className="
                                    font-serif
                                    text-[24px]
                                    text-[#1F2937]
                                "
                            >
                                Looking for something specific?
                            </p>


                            <p
                                className="
                                    mt-3
                                    text-[15px]
                                    leading-7
                                    text-[#667085]
                                "
                            >
                                Mention it in your message and we can discuss
                                custom development or private-label options.
                            </p>

                        </div>

                    </div>


                    {/* FORM */}
                    <form
                        onSubmit={handleSubmit}
                        className="
                            rounded-[28px]
                            border
                            border-[#DCD6CE]
                            bg-[#F8F7F4]
                            p-7
                            sm:p-9
                            lg:p-10
                        "
                    >

                        {/* Name + Company */}
                        <div className="grid gap-6 sm:grid-cols-2">

                            <div>

                                <label
                                    htmlFor="catalogue-name"
                                    className="
                                        text-[13px]
                                        font-medium
                                        uppercase
                                        tracking-[0.12em]
                                        text-[#596273]
                                    "
                                >
                                    Your Name
                                </label>


                                <input
                                    id="catalogue-name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    required
                                    className="
                                        mt-3
                                        w-full
                                        border-b
                                        border-[#CFC8BF]
                                        bg-transparent
                                        px-0
                                        py-3
                                        text-[15px]
                                        text-[#1F2937]
                                        outline-none
                                        placeholder:text-[#9AA1AA]
                                        focus:border-[#B89565]
                                    "
                                />

                            </div>


                            <div>

                                <label
                                    htmlFor="catalogue-company"
                                    className="
                                        text-[13px]
                                        font-medium
                                        uppercase
                                        tracking-[0.12em]
                                        text-[#596273]
                                    "
                                >
                                    Company
                                </label>


                                <input
                                    id="catalogue-company"
                                    name="company"
                                    type="text"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Company name"
                                    className="
                                        mt-3
                                        w-full
                                        border-b
                                        border-[#CFC8BF]
                                        bg-transparent
                                        px-0
                                        py-3
                                        text-[15px]
                                        text-[#1F2937]
                                        outline-none
                                        placeholder:text-[#9AA1AA]
                                        focus:border-[#B89565]
                                    "
                                />

                            </div>

                        </div>


                        {/* Email + Country */}
                        <div className="mt-7 grid gap-6 sm:grid-cols-2">

                            <div>

                                <label
                                    htmlFor="catalogue-email"
                                    className="
                                        text-[13px]
                                        font-medium
                                        uppercase
                                        tracking-[0.12em]
                                        text-[#596273]
                                    "
                                >
                                    Email
                                </label>


                                <input
                                    id="catalogue-email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@company.com"
                                    required
                                    className="
                                        mt-3
                                        w-full
                                        border-b
                                        border-[#CFC8BF]
                                        bg-transparent
                                        px-0
                                        py-3
                                        text-[15px]
                                        text-[#1F2937]
                                        outline-none
                                        placeholder:text-[#9AA1AA]
                                        focus:border-[#B89565]
                                    "
                                />

                            </div>


                            <div>

                                <label
                                    htmlFor="catalogue-country"
                                    className="
                                        text-[13px]
                                        font-medium
                                        uppercase
                                        tracking-[0.12em]
                                        text-[#596273]
                                    "
                                >
                                    Country
                                </label>


                                <input
                                    id="catalogue-country"
                                    name="country"
                                    type="text"
                                    value={formData.country}
                                    onChange={handleChange}
                                    placeholder="Your country"
                                    className="
                                        mt-3
                                        w-full
                                        border-b
                                        border-[#CFC8BF]
                                        bg-transparent
                                        px-0
                                        py-3
                                        text-[15px]
                                        text-[#1F2937]
                                        outline-none
                                        placeholder:text-[#9AA1AA]
                                        focus:border-[#B89565]
                                    "
                                />

                            </div>

                        </div>


                        {/* Interests */}
                        <div className="mt-7">

                            <label
                                htmlFor="catalogue-interests"
                                className="
                                    text-[13px]
                                    font-medium
                                    uppercase
                                    tracking-[0.12em]
                                    text-[#596273]
                                "
                            >
                                Product Interests
                            </label>


                            <input
                                id="catalogue-interests"
                                name="interests"
                                type="text"
                                value={formData.interests}
                                onChange={handleChange}
                                placeholder="Kitchen, Bath, Living, Bags..."
                                className="
                                    mt-3
                                    w-full
                                    border-b
                                    border-[#CFC8BF]
                                    bg-transparent
                                    px-0
                                    py-3
                                    text-[15px]
                                    text-[#1F2937]
                                    outline-none
                                    placeholder:text-[#9AA1AA]
                                    focus:border-[#B89565]
                                "
                            />

                        </div>


                        {/* Message */}
                        <div className="mt-7">

                            <label
                                htmlFor="catalogue-message"
                                className="
                                    text-[13px]
                                    font-medium
                                    uppercase
                                    tracking-[0.12em]
                                    text-[#596273]
                                "
                            >
                                Message
                            </label>


                            <textarea
                                id="catalogue-message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us about your requirements..."
                                rows="4"
                                className="
                                    mt-3
                                    w-full
                                    resize-none
                                    border-b
                                    border-[#CFC8BF]
                                    bg-transparent
                                    px-0
                                    py-3
                                    text-[15px]
                                    leading-7
                                    text-[#1F2937]
                                    outline-none
                                    placeholder:text-[#9AA1AA]
                                    focus:border-[#B89565]
                                "
                            />

                        </div>


                        {/* Button */}
                        <button
                            type="submit"
                            className="
                                mt-9
                                inline-flex
                                items-center
                                justify-center
                                gap-3
                                rounded-full
                                bg-[#1F2937]
                                px-8
                                py-4
                                text-[13px]
                                font-medium
                                uppercase
                                tracking-[0.15em]
                                text-white
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:bg-[#B89565]
                            "
                        >
                            Request Catalogue
                            <span>→</span>
                        </button>

                    </form>

                </div>

            </div>

        </section>
    );
};


export default CatalogueRequest;
