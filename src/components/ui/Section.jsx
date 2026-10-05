import Container from "./Container";

function Section({
    children,
    className = "",
    containerClassName = "",
}) {
    return (
        <section className={`py-20 lg:py-28 ${className}`}>
            <Container className={containerClassName}>
                {children}
            </Container>
        </section>
    );
}

export default Section;
