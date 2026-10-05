import { Link, useLocation } from "react-router-dom";


const links = [
    { name: "Collections", path: "/collections" },
    { name: "Manufacturing", path: "/manufacturing" },
    { name: "About", path: "/about" },
    { name: "Export", path: "/export" },
    { name: "Contact", path: "/contact" },
];


const NavLinks = () => {

    const location = useLocation();

    const isHome = location.pathname === "/";

    return (
        <ul className="hidden lg:flex items-center gap-14">

            {links.map((link) => (

                <li key={link.name}>

                    <Link
                        to={link.path}
                        className={`
                            relative
                            py-2
                            text-[14px]
                            font-normal
                            uppercase
                            tracking-[0.12em]
                            transition-all
                            duration-300

                            ${isHome
                                ? "text-white hover:text-[#C9B8A7]"
                                : "text-[#1F2937] hover:text-[#B89565]"
                            }

                            after:absolute
                            after:left-1/2
                            after:-bottom-1
                            after:h-[1px]
                            after:w-0
                            after:transition-all
                            after:duration-300

                            ${isHome
                                ? "after:bg-[#C9B8A7]"
                                : "after:bg-[#B89565]"
                            }

                            hover:after:left-0
                            hover:after:w-full
                        `}
                    >
                        {link.name}
                    </Link>

                </li>

            ))}

        </ul>
    );
};


export default NavLinks;
