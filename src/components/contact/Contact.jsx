import { Link } from "react-router-dom";
import Button from "../ui/Button";


const Contact = () => {
    return (
        <section className="bg-white py-14 sm:py-16 lg:py-28 lg:pb-6">

            <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-10">

                {/* CTA */}
                <div className="text-center">

                    <p
                        className="
                            mb-4
                            text-[13px]
                            font-medium
                            uppercase
                            tracking-[0.35em]
                            text-[#B89565]
                            sm:mb-5
                            sm:text-[16px]
                            sm:tracking-[0.4em]
                        "
                    >
                        LET'S WORK TOGETHER
                    </p>


                    <h2
                        className="
                            mx-auto
                            max-w-[800px]
                            font-serif
                            text-[42px]
                            leading-[0.98]
                            tracking-[-0.8px]
                            text-[#1F2937]
                            sm:text-[52px]
                            lg:text-[68px]
                            lg:tracking-[-1px]
                        "
                    >
                        Start a
                        <br />
                        Conversation.
                    </h2>


                    <p
                        className="
                            mx-auto
                            mt-6
                            max-w-[600px]
                            text-[15px]
                            leading-7
                            text-[#596273]
                            sm:mt-7
                            sm:text-[17px]
                            sm:leading-8
                        "
                    >
                        Tell us what you're looking to develop,
                        and let's discuss your product requirements,
                        specifications and ideas.
                    </p>


                    {/* Buttons */}
                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">

                        <Link to="/contact">
                            <Button variant="dark">
                                Discuss Your Requirements →
                            </Button>
                        </Link>

                        <Link to="/catalogue">
                            <Button variant="secondary">
                                Request Catalogue →
                            </Button>
                        </Link>

                    </div>

                </div>


                {/* FOOTER LINE */}
                <div className="mt-20 border-t border-[#D8D1C8] pt-8 pb-4 sm:mt-24 sm:pt-10 lg:mt-28 lg:pt-12">

                    <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

                        {/* Logo */}
                        <div
                            className="
                                font-serif
                                text-[36px]
                                tracking-[-2.5px]
                                text-[#1F2937]
                                sm:text-[42px]
                                sm:tracking-[-3px]
                            "
                        >
                            ARR
                        </div>


                        {/* Navigation */}
                        <nav className="flex flex-wrap gap-x-6 gap-y-3 sm:gap-x-8">

                            <Link
                                to="/collections"
                                className="
                                    text-[12px]
                                    uppercase
                                    tracking-[0.12em]
                                    text-[#596273]
                                    transition-colors
                                    duration-300
                                    hover:text-[#B89565]
                                    sm:text-[13px]
                                    sm:tracking-[0.15em]
                                "
                            >
                                Collections
                            </Link>

                            <Link
                                to="/manufacturing"
                                className="
                                    text-[12px]
                                    uppercase
                                    tracking-[0.12em]
                                    text-[#596273]
                                    transition-colors
                                    duration-300
                                    hover:text-[#B89565]
                                    sm:text-[13px]
                                    sm:tracking-[0.15em]
                                "
                            >
                                Manufacturing
                            </Link>

                            <Link
                                to="/about"
                                className="
                                    text-[12px]
                                    uppercase
                                    tracking-[0.12em]
                                    text-[#596273]
                                    transition-colors
                                    duration-300
                                    hover:text-[#B89565]
                                    sm:text-[13px]
                                    sm:tracking-[0.15em]
                                "
                            >
                                About
                            </Link>

                            <Link
                                to="/export"
                                className="
                                    text-[12px]
                                    uppercase
                                    tracking-[0.12em]
                                    text-[#596273]
                                    transition-colors
                                    duration-300
                                    hover:text-[#B89565]
                                    sm:text-[13px]
                                    sm:tracking-[0.15em]
                                "
                            >
                                Export
                            </Link>

                            <Link
                                to="/contact"
                                className="
                                    text-[12px]
                                    uppercase
                                    tracking-[0.12em]
                                    text-[#596273]
                                    transition-colors
                                    duration-300
                                    hover:text-[#B89565]
                                    sm:text-[13px]
                                    sm:tracking-[0.15em]
                                "
                            >
                                Contact
                            </Link>

                        </nav>

                    </div>


                    {/* Bottom */}
                    <div
                        className="
                            mt-7
                            flex
                            flex-col
                            gap-3
                            text-[12px]
                            text-[#7A8494]
                            sm:text-[13px]
                            lg:mt-8
                            lg:flex-row
                            lg:items-center
                            lg:justify-between
                        "
                    >

                        <p>
                            Home Textiles · Manufacturing · Private Label
                        </p>

                        <p>
                            © {new Date().getFullYear()} ARR Textiles
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};


export default Contact;
