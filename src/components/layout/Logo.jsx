import { Link } from "react-router-dom";
import logoDark from "../../assets/logo/arr-mark-dark.png";

const Logo = () => {
    return (
        <Link to="/" className="flex items-center">
            <img
                src={logoDark}
                alt="ARR Textiles"
                className="h-25 w-auto transition-all duration-300"
            />
        </Link>
    );
};

export default Logo;
