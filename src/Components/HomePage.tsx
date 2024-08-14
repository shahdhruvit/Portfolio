import About from "./About";
import Header from "./Header";
import Mail from "./Mail";
import Social from "./Social";
import Projects from "./Projects";
import Skill from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
import { Loader } from "./Loader";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

const HomePage = ()=>{
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 5000)
    }, [])
    return <div className={`min-h-[100vh] ${loading?"flex":""} items-center overflow-hidden justify-center`}>
        { loading !== true?<>
        <Toaster/>
        <Header/>
        <About/>
        <Projects/>
        <Skill/>
        <Experience/>
        <Contact/>
        <Footer/>
        <Mail/>
        <Social/>
        </>:
        <Loader/>}
        </div>
   
};
export default HomePage;