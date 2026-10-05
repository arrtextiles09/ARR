import Button from "../ui/Button";


const CatalogueCTA = () => {
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
                    HAVE A SPECIFIC REQUIREMENT?
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
                    Let's discuss
                    <br />
                    your project.
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
                    If you already know what you're looking to develop,
                    you can contact us directly and tell us about your
                    requirements.
                </p>


                <div className="mt-9">

                    <Button variant="dark">
                        Discuss Your Requirements →
                    </Button>

                </div>

            </div>

        </section>
    );
};


export default CatalogueCTA;
