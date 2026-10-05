import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";
import AboutStats from "./AboutStats";


const About = () => {
    return (
        <section className="bg-[#F8F7F4] py-16 sm:py-20 lg:py-24">

            <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-10">

                <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">

                    <AboutContent />

                    <AboutImage />

                </div>


                <div className="mt-12 border-t border-[#E7E1DA] sm:mt-14 lg:mt-12" />


                <div className="mt-10 sm:mt-12">
                    <AboutStats />
                </div>

            </div>

        </section>
    );
};


export default About;
