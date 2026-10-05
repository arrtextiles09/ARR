import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";


const ContactCTA = () => {

    const navigate = useNavigate();


    const handleCatalogue = () => {

        navigate("/catalogue");

    };


    return (
        <section className="bg-white py-20 lg:py-28">

            <div className="mx-auto max-w-[950px] px-6 text-center lg:px-10">

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
                    PREFER A CATALOGUE?
                </p>


                <h2
                    className="
                        mt-5
                        font-serif
                        text-[48px]
                        leading-[0.96]
                        tracking-[-1px]
                        text-[#1F2937]
                        sm:text-[60px]
                    "
                >
                    Explore our
                    <br />
                    product range.
                </h2>


                <p
                    className="
                        mx-auto
                        mt-7
                        max-w-[600px]
                        text-[16px]
                        leading-8
                        text-[#596273]
                        sm:text-[17px]
                    "
                >
                    If you would like to see the categories and product
                    directions we work with, request our catalogue and
                    we'll take it from there.
                </p>


                <div className="mt-9">

                    <Button
                        variant="dark"
                        onClick={handleCatalogue}
                    >
                        Request Catalogue →
                    </Button>

                </div>

            </div>

        </section>
    );
};


export default ContactCTA;
