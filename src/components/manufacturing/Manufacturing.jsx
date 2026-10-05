import { Link } from "react-router-dom";

import manufacturingImage from "../../assets/images/manufacturing/manufacturing.jpg";
import ManufacturingSteps from "./ManufacturingSteps";
import Button from "../ui/Button";


const Manufacturing = () => {
    return (
        <section className="bg-[#F7F5F2] py-16 sm:py-20 lg:py-24">

            <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">

                <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2">

                    {/* Left Content */}
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
                            HOW WE WORK
                        </p>


                        <h2
                            className="
                                mt-4
                                max-w-[580px]
                                font-serif
                                text-[42px]
                                leading-[1.02]
                                tracking-[-0.8px]
                                text-[#1F2937]
                                sm:mt-5
                                sm:text-[50px]
                                lg:text-[62px]
                                lg:tracking-[-1px]
                            "
                        >
                            From Your Idea
                            <br />
                            To Your Collection.
                        </h2>


                        <p
                            className="
                                mt-6
                                max-w-[550px]
                                text-[15px]
                                leading-7
                                text-[#596273]
                                sm:mt-7
                                sm:text-[17px]
                                sm:leading-8
                            "
                        >
                            We work closely with buyers to transform product
                            requirements into thoughtfully developed textile
                            collections, with flexibility for custom and
                            private-label requirements.
                        </p>


                        <div className="mt-8 sm:mt-9">

                            <Link to="/contact">
                                <Button variant="secondary">
                                    Discuss Your Requirements →
                                </Button>
                            </Link>

                        </div>

                    </div>


                    {/* Right Image */}
                    <div>

                        <img
                            src={manufacturingImage}
                            alt="Textile manufacturing"
                            className="
                                h-[360px]
                                w-full
                                rounded-[26px]
                                object-cover
                                sm:h-[400px]
                                sm:rounded-[28px]
                                lg:h-[430px]
                            "
                        />

                    </div>

                </div>


                {/* Process Steps */}
                <div className="mt-10 sm:mt-12 lg:mt-14">

                    <ManufacturingSteps />

                </div>

            </div>

        </section>
    );
};


export default Manufacturing;
