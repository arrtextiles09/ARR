import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";


const CollectionsCTA = () => {

    const navigate = useNavigate();


    const handleDiscuss = () => {

        navigate("/contact#enquiry");

    };


    const handleCatalogue = () => {

        navigate("/catalogue");

    };


    return (

        <section className="bg-[#EEEAE4] py-20 sm:py-24 lg:py-28">

            <div className="mx-auto max-w-[900px] px-6 text-center lg:px-10">

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
                    CUSTOM DEVELOPMENT
                </p>


                <h2
                    className="
                        mt-5
                        font-serif
                        text-[42px]
                        leading-[0.98]
                        tracking-[-0.7px]
                        text-[#1F2937]
                        sm:text-[52px]
                        lg:text-[62px]
                    "
                >
                    Looking for something
                    <br />
                    specific?
                </h2>


                <p
                    className="
                        mx-auto
                        mt-6
                        max-w-[600px]
                        text-[16px]
                        leading-8
                        text-[#596273]
                        sm:text-[17px]
                    "
                >
                    Share your product requirements, materials,
                    specifications or ideas with us. We can discuss
                    how the collection can be developed around your
                    market and brand.
                </p>


                <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

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


export default CollectionsCTA;
