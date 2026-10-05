import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Collections from "../pages/Collections";
import Manufacturing from "../pages/Manufacturing";
import Export from "../pages/Export";
import Contact from "../pages/Contact";
import Catalogue from "../pages/Catalogue";
import NotFound from "../pages/NotFound";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/about" element={<About />} />
            <Route path="/export" element={<Export />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};


export default AppRoutes;
