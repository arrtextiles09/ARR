const ContactPageHero = () => {
    return (
        <section className="bg-[#F1EEE9] pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">

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
                    GET IN TOUCH
                </p>


                <h1
                    className="
                        mt-6
                        font-serif
                        text-[50px]
                        leading-[0.96]
                        tracking-[-1px]
                        text-[#1F2937]
                        sm:text-[62px]
                        lg:text-[76px]
                    "
                >
                    Let's start
                    <br />
                    a conversation.
                </h1>


                <p
                    className="
                        mx-auto
                        mt-7
                        max-w-[650px]
                        text-[16px]
                        leading-8
                        text-[#596273]
                        sm:text-[18px]
                    "
                >
                    Tell us about your product requirements, collection
                    ideas or sourcing needs. We'll take it from there.
                </p>

            </div>

        </section>
    );
};


export default ContactPageHero;
