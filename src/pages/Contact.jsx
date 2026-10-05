import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ContactPageHero from "../components/contactPage/ContactPageHero";
import ContactForm from "../components/contactPage/ContactForm";
import ContactProcess from "../components/contactPage/ContactProcess";
import ContactCTA from "../components/contactPage/ContactCTA";


const Contact = () => {

    const location = useLocation();


    useEffect(() => {

        if (location.hash === "#enquiry") {

            setTimeout(() => {

                const enquirySection =
                    document.getElementById("enquiry");

                if (enquirySection) {

                    const navbarHeight = 90;

                    const sectionPosition =
                        enquirySection.getBoundingClientRect().top +
                        window.scrollY -
                        navbarHeight;

                    window.scrollTo({
                        top: sectionPosition,
                        behavior: "smooth",
                    });

                }

            }, 100);

        }

    }, [location.hash]);


    return (
        <main>

            <ContactPageHero />

            <ContactForm />

            <ContactProcess />

            <ContactCTA />

        </main>
    );
};


export default Contact;
