import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Collections from "../components/collections/Collections";
import Manufacturing from "../components/manufacturing/Manufacturing";
import WhyPartner from "../components/whyPartner/WhyPartner";
import Export from "../components/export/Export";
import Contact from "../components/contact/Contact";


const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Collections />
            <Manufacturing />
            <WhyPartner />
            <Export />
            <Contact />
        </>
    );
};


export default Home;
