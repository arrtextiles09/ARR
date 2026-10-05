import { useState } from "react";
import emailjs from "@emailjs/browser";


const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        country: "",
        product: "",
        quantity: "",
        message: "",
    });

    const [isSending, setIsSending] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    const handleChange = (event) => {

        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });

        // Remove previous messages when user edits the form
        setSuccessMessage("");
        setErrorMessage("");
    };


    const handleSubmit = async (event) => {

        event.preventDefault();

        setIsSending(true);
        setSuccessMessage("");
        setErrorMessage("");


        try {

            await emailjs.send(
                "service_9fln0v6",
                "template_0hap2cm",
                formData,
                {
                    publicKey: "-SWBIz7eB_60Vk8lx",
                }
            );


            setSuccessMessage(
                "Thank you. Your enquiry has been sent successfully. We'll get back to you soon."
            );


            // Clear form after successful submission
            setFormData({
                name: "",
                company: "",
                email: "",
                country: "",
                product: "",
                quantity: "",
                message: "",
            });


        } catch (error) {

            console.error("EmailJS Error:", error);

            setErrorMessage(
                "Something went wrong while sending your enquiry. Please try again."
            );

        } finally {

            setIsSending(false);

        }

    };


    return (
        <section
            id="enquiry"
            className="bg-white py-20 lg:py-28"
        >

            <div className="mx-auto max-w-[1000px] px-6 lg:px-10">

                <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">


                    {/* LEFT INFORMATION */}
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
                            YOUR ENQUIRY
                        </p>


                        <h2
                            className="
                                mt-5
                                font-serif
                                text-[42px]
                                leading-[0.98]
                                tracking-[-0.8px]
                                text-[#1F2937]
                                sm:text-[50px]
                            "
                        >
                            Tell us what
                            <br />
                            you're looking for.
                        </h2>


                        <p
                            className="
                                mt-6
                                text-[16px]
                                leading-8
                                text-[#596273]
                            "
                        >
                            The more details you can share, the better we
                            can understand your requirements and discuss
                            the right direction for your project.
                        </p>


                        <div className="mt-10 border-t border-[#DED8D0] pt-7">

                            <p
                                className="
                                    font-serif
                                    text-[24px]
                                    text-[#1F2937]
                                "
                            >
                                Looking for a catalogue?
                            </p>


                            <p
                                className="
                                    mt-3
                                    text-[15px]
                                    leading-7
                                    text-[#667085]
                                "
                            >
                                You can also request our product catalogue
                                and share your requirements with us.
                            </p>

                        </div>

                    </div>


                    {/* FORM */}
                    <form
                        onSubmit={handleSubmit}
                        className="
                            rounded-[28px]
                            border
                            border-[#E1DDD6]
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
                                    htmlFor="name"
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
                                    id="name"
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
                                    htmlFor="company"
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
                                    id="company"
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
                                    htmlFor="email"
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
                                    id="email"
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
                                    htmlFor="country"
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
                                    id="country"
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


                        {/* Product */}
                        <div className="mt-7">

                            <label
                                htmlFor="product"
                                className="
                                    text-[13px]
                                    font-medium
                                    uppercase
                                    tracking-[0.12em]
                                    text-[#596273]
                                "
                            >
                                Product Interest
                            </label>


                            <select
                                id="product"
                                name="product"
                                value={formData.product}
                                onChange={handleChange}
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
                                    focus:border-[#B89565]
                                "
                            >

                                <option value="">
                                    Select a category
                                </option>

                                <option value="Kitchen Textiles">
                                    Kitchen Textiles
                                </option>

                                <option value="Bath Textiles">
                                    Bath Textiles
                                </option>

                                <option value="Living Textiles">
                                    Living Textiles
                                </option>

                                <option value="Window Textiles">
                                    Window Textiles
                                </option>

                                <option value="Utility Bags">
                                    Utility Bags
                                </option>

                                <option value="Tote Bags">
                                    Tote Bags
                                </option>

                                <option value="Custom / Private Label">
                                    Custom / Private Label
                                </option>

                            </select>

                        </div>


                        {/* Quantity */}
                        <div className="mt-7">

                            <label
                                htmlFor="quantity"
                                className="
                                    text-[13px]
                                    font-medium
                                    uppercase
                                    tracking-[0.12em]
                                    text-[#596273]
                                "
                            >
                                Estimated Quantity
                            </label>


                            <input
                                id="quantity"
                                name="quantity"
                                type="text"
                                value={formData.quantity}
                                onChange={handleChange}
                                placeholder="If known"
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
                                htmlFor="message"
                                className="
                                    text-[13px]
                                    font-medium
                                    uppercase
                                    tracking-[0.12em]
                                    text-[#596273]
                                "
                            >
                                Your Requirements
                            </label>


                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us about your product, specifications, materials, quantities or ideas..."
                                rows="5"
                                required
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


                        {/* Success Message */}
                        {successMessage && (

                            <div
                                className="
                                    mt-6
                                    rounded-[12px]
                                    border
                                    border-[#C9D8C0]
                                    bg-[#F3F7F0]
                                    px-5
                                    py-4
                                    text-[14px]
                                    leading-6
                                    text-[#46603B]
                                "
                            >
                                {successMessage}
                            </div>

                        )}


                        {/* Error Message */}
                        {errorMessage && (

                            <div
                                className="
                                    mt-6
                                    rounded-[12px]
                                    border
                                    border-[#E2C5C5]
                                    bg-[#FBF3F3]
                                    px-5
                                    py-4
                                    text-[14px]
                                    leading-6
                                    text-[#8A4545]
                                "
                            >
                                {errorMessage}
                            </div>

                        )}


                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isSending}
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
                                disabled:cursor-not-allowed
                                disabled:opacity-60
                                disabled:hover:translate-y-0
                                disabled:hover:bg-[#1F2937]
                            "
                        >

                            {isSending
                                ? "Sending..."
                                : "Send Enquiry"
                            }

                            <span>
                                →
                            </span>

                        </button>

                    </form>

                </div>

            </div>

        </section>
    );
};


export default ContactForm;
