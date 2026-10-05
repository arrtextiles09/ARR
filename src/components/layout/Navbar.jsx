import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

import Container from "../ui/Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import Button from "../ui/Button";


const Navbar = () => {

    const location = useLocation();

    const isHome = location.pathname === "/";

    const [showNavbar, setShowNavbar] = useState(true);


    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY === 0) {
                setShowNavbar(true);
            } else {
                setShowNavbar(false);
            }

        };


        window.addEventListener("scroll", handleScroll);

        handleScroll();


        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);


    return (
        <header
            className={`
                fixed
                top-0
                left-0
                w-full
                z-50
                transition-transform
                duration-300
                ${showNavbar
                    ? "translate-y-0"
                    : "-translate-y-full"
                }
                ${isHome
                    ? "bg-transparent"
                    : "bg-[#F7F5F2]/95 backdrop-blur-sm"
                }
            `}
        >

            <Container>

                <nav className="flex h-20 items-center">

                    <Logo />


                    <div className="ml-16">
                        <NavLinks />
                    </div>


                    <div className="ml-auto hidden lg:block translate-y-[2px]">

                        <Link to="/catalogue">

                            <Button
                                variant="secondary"
                                className="px-8 py-3.5"
                            >
                                Request Catalogue →
                            </Button>

                        </Link>

                    </div>


                    <MobileMenu />

                </nav>

            </Container>

        </header>
    );
};


export default Navbar;
