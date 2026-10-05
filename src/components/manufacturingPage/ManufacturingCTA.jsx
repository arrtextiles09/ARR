import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";


const ManufacturingCTA = () => {

    const navigate = useNavigate();


    const handleDiscuss = () => {

        navigate("/contact#enquiry");

    };


    const handleCatalogue = () => {

        navigate("/catalogue");

    };


    return (
        <section className="bg-[#EEEAE4] py-20 lg:py-28">

            <div className="mx-auto max-w-[1000px] px-6 text-center lg:px-10">

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
                    START A PROJECT
                </p>


                <h2
                    className="
                        mt-5
                        font-serif
                        text-[50px]
                        leading-[0.96]
                        tracking-[-1px]
                        text-[#1F2937]
                        sm:text-[62px]
                        lg:text-[70px]
                    "
                >
                    Have a product
                    <br />
                    in mind?
                </h2>


                <p
                    className="
                        mx-auto
                        mt-7
                        max-w-[620px]
                        text-[16px]
                        leading-8
                        text-[#596273]
                        sm:text-[18px]
                    "
                >
                    Tell us about your requirements, product ideas,
                    specifications or collection needs. We can discuss
                    the possibilities together.
                </p>


                <div className="mt-9 flex flex-wrap justify-center gap-4">

                    {/* Discuss Requirements */}
                    <Button
                        variant="dark"
                        onClick={handleDiscuss}
                    >
                        Discuss Your Requirements →
                    </Button>


                    {/* Request Catalogue */}
                    <Button
                        variant="secondary"
                        onClick={handleCatalogue}
                    >
                        Request Catalogue →
                    </Button>

                </div>

            </div>

        </section>
    );
};


export default ManufacturingCTA;
