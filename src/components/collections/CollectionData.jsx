import kitchen from "../../assets/images/collections/kitchen.jpg";
import bath from "../../assets/images/collections/bath.jpg";
import living from "../../assets/images/collections/living.jpg";
import windowImg from "../../assets/images/collections/window.jpg";
import utility from "../../assets/images/collections/utility.jpg";
import tote from "../../assets/images/collections/tote.jpg";


const collections = [

    {
        id: 1,
        title: "Kitchen Textiles",
        slug: "kitchen-textiles",
        description:
            "Tea towels, aprons, oven mitts and table linen crafted for everyday living.",
        image: kitchen,
        size: "large",
    },

    {
        id: 2,
        title: "Bath Textiles",
        slug: "bath-textiles",
        description:
            "Soft towels and bath essentials designed for comfort.",
        image: bath,
        size: "small",
    },

    {
        id: 3,
        title: "Window Textiles",
        slug: "window-textiles",
        description:
            "Elegant curtains and drapery for contemporary interiors.",
        image: windowImg,
        size: "small",
    },

    {
        id: 4,
        title: "Living Textiles",
        slug: "living-textiles",
        description:
            "Cushions, throws and decorative home essentials.",
        image: living,
        size: "medium",
    },

    {
        id: 5,
        title: "Utility Bags",
        slug: "utility-bags",
        description:
            "Functional everyday bags with premium craftsmanship.",
        image: utility,
        size: "medium",
    },

    {
        id: 6,
        title: "Tote Bags",
        slug: "tote-bags",
        description:
            "Sustainable cotton totes for retail and lifestyle brands.",
        image: tote,
        size: "wide",
    },

];


export default collections;
