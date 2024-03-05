import emailjs from '@emailjs/browser';
 import { useRef } from 'react';
import toast from 'react-hot-toast';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
   
      emailjs
        .sendForm('service_h4th7yz', 'template_xdkws1c', form.current, {
          publicKey: 'xf7oG-XpwmIFyNKiB',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            toast.success("Message Sent Successfully!")
          },
          (error) => {
            console.log('FAILED...', error.text);
            toast.error('FAILED...', error.text)
          },
        );
    };
  
    return (
        <div>
            
       <p className="text-center text-3xl  bg-green-700 mt-10 rounded-md text-white">
        Contact Us
      </p>
      <div className="my-8 flex flex-col md:flex-row gap-20 md:gap-0 ">
        <div className="md:w-1/2 flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className=" mb-2">Link Road, Cox's Bazar</p>
          <p className=" mb-2">Phone: (123) 456-7890</p>
          <p className="">Email: info@example.com</p>
        </div>
        <div className="w-[90%] mx-auto md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
          <form ref={form} onSubmit={sendEmail} className="max-w-md">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-700 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
         </div>
    );
};

export default Contact;