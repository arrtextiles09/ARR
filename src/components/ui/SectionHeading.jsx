function SectionHeading({
    eyebrow,
    title,
    description,
    align = "left",
}) {
    return (
        <div
            className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""
                }`}
        >
            {eyebrow && (
                <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#6B7280]">
                    {eyebrow}
                </p>
            )}

            <h2
                className="font-serif text-4xl leading-tight text-[#1F2937] md:text-5xl"
                style={{ fontFamily: "Cormorant Garamond" }}
            >
                {title}
            </h2>

            {description && (
                <p className="mt-6 text-lg leading-8 text-[#6B7280]">
                    {description}
                </p>
            )}
        </div>
    );
}

export default SectionHeading;
