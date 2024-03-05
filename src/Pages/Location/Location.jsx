import { CiLollipop } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
const Location = () => {
    return (
        <div className="mt-8 bg-base-100 shadow-xl">
           <div className="flex flex-col lg:flex-row items-center justify-center">
           <div className="lg:w-1/2 lg:pl-12">
                <img className="w-20 md:w-28 lg:w-24 " src="/logo-1c5fad08-removebg-preview(1).png" alt="" />
                <h3 className="uppercase  text-2xl font-semibold">Cox's Bazar <br />polytechnic institute</h3>

                <p className="mt-4 font-medium">Link Road, Cox's Bazar</p>
                <p className="flex gap-1"> <CiLollipop className="text-2xl"></CiLollipop> 4700</p>
                <p className="flex gap-1"> <FaPhone className="text-2xl"></FaPhone> 01885-355651</p>
                <p className="flex gap-1"> <IoIosMail className="text-2xl"></IoIosMail> 4700</p>
            </div>
            <div className="lg:w-1/2">
            <div className="width: 100%"><iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Teknaf%20Highway,%20Cox'sBazar%20Polytechnic%20Institue+(Cox's%20Bazar%20polytechnic%20institute)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe></div>
            </div>
           </div>
        </div>
    );
};

export default Location;