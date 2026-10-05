import manufacturingSteps from "./manufacturingData";


const ManufacturingSteps = () => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">

            {manufacturingSteps.map((step) => (
                <div
                    key={step.number}
                    className="
                        group
                        rounded-[20px]
                        border
                        border-[#E8E3DD]
                        bg-white
                        p-6
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-lg
                        sm:rounded-[22px]
                        sm:p-8
                    "
                >

                    <span
                        className="
                            text-[13px]
                            font-medium
                            tracking-[0.2em]
                            text-[#B89565]
                            sm:text-[14px]
                        "
                    >
                        {step.number}
                    </span>


                    <h3
                        className="
                            mt-3
                            font-serif
                            text-[21px]
                            leading-tight
                            text-[#1F2937]
                            sm:mt-4
                            sm:text-[24px]
                        "
                    >
                        {step.title}
                    </h3>


                    <p
                        className="
                            mt-3
                            max-w-[500px]
                            text-[14px]
                            leading-6
                            text-[#667085]
                            sm:mt-4
                            sm:text-[15px]
                            sm:leading-7
                        "
                    >
                        {step.description}
                    </p>

                </div>
            ))}

        </div>
    );
};


export default ManufacturingSteps;
