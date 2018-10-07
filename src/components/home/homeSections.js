import About from "./about/About";
//import WorkContainer from "./work/WorkContainer";
// import Blog from "./blog/Blog";
//import Contact from "./contact/Contact";
import Clock from "./clock/Clock";
import E1_1 from "./e1_1/E1_1";

const SECTIONS = [
    {
        name: "about",
        component: About
    },
    {
        name: "work",
        component: null
    },
    {
        name: "blog",
        component: null
    },
    {
        name: "contact",
        component: null
    },
    {
        name: "clock",
        component: Clock
    },
     {
        name: "exercise_1",
        component: E1_1
    }
]   

export default SECTIONS;