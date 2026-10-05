function Button({
    children,
    variant = "primary",
    className = "",
    ...props
}) {
    const base =
        "inline-flex items-center justify-center rounded-full px-8 py-3.5 text-[15px] font-medium uppercase tracking-[0.12em] transition-all duration-300";

    const variants = {
        primary:
            "bg-[#C9B8A7] text-[#1F2937] border border-transparent hover:bg-[#1F2937] hover:text-white hover:border-[#1F2937] hover:shadow-xl active:scale-[0.98]",

        secondary:
            "border border-[#1F2937] text-[#1F2937] hover:bg-[#1F2937] hover:text-white hover:shadow-lg active:scale-[0.98]",

        dark:
            "bg-[#1F2937] text-white hover:bg-[#2A3748] hover:shadow-xl active:scale-[0.98]",

        light:
            "bg-white text-[#1F2937] hover:bg-[#F5F2EF] active:scale-[0.98]",
    };

    return (
        <button
            className={`${base} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
