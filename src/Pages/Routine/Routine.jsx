import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Routine = () => {
    return (
        <div className="mt-8">
            <div>
                <h3 className="text-3xl bg-green-700 text-white rounded-md text-center mb-4">Computer Department Class Routine </h3>
            </div>

            <div className="flex gap-2">
             <FaArrowRight className="text-2xl"></FaArrowRight>
             <a href="/public/3rd.jpg" className="font-semibold hover:underline" download='/5th.jpg' rel='noreferrer'>Class Routine of 1st Semester</a>                </div>
            <div className="flex gap-2">
             <FaArrowRight className="text-2xl"></FaArrowRight>
             <a href="/public/3rd.jpg" className="font-semibold hover:underline" download='/3rd.jpg' rel='noreferrer'>Class Routine of 3rd Semester</a>                </div>
            <div className="flex gap-2">
             <FaArrowRight className="text-2xl"></FaArrowRight>
             <a href="/public/5th.jpg" className="font-semibold hover:underline" download='/5th.jpg' rel='noreferrer'>Class Routine of 5th Semester</a>                </div>
            <div className="flex gap-2">
             <FaArrowRight className="text-2xl"></FaArrowRight>
             <a href="/public/7th.jpg" className="font-semibold hover:underline" download='/7th.jpg' rel='noreferrer'>Class Routine of 7th  Semester</a>                </div>
        </div>
    );
};

export default Routine;