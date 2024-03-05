import { Toaster } from "react-hot-toast";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Location/Location";
import Teacher from "../Teacher/Teacher";

 
const Home = () => {
    return (
        <div className="max-w-[1200px] mx-auto">
            <Banner></Banner>
            <About></About>
            <Teacher></Teacher>
            <Contact></Contact>
         </div>
    );
};

export default Home;