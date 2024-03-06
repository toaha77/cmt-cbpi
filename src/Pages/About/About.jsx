import  { useState } from 'react';

const About = () => {
  const text = "Cox’s Bazar Polytechnic Institute is the Modern Polytechnic Institute in Bangladesh. It is the only one mid level Engineering Institution in South Chittagong. It was established in 2004 with only 29 students in the first year classes of 4 Year Diploma-In-Engineering in one technology, namely Computer Technology. The Institute now offers courses in 4 Year Diploma-In-Engineering in four technologies, with two shift namely Computer, Refrigeration & Air-conditioning, Civil , Electrical Technology & Food Technology with its Geographical importance. The main campus includes of two five storied building one of them Administrative building which are accommodating Office, Library, Prayer room, IT centre, Language centre & 300 capacities Auditorium and another one consists of class rooms, workshops & laboratories. There are Two-storied large workshop buildings which are accommodating Workshop and Laboratories. There are about One thousand and two hundred students including female and tribes studying in various departments having most qualified teachers and supporting staffs. So far, Cox’s Bazar Polytechnic Institute established its own identity over the home and abroad. As an Engineering institution Cox’s Bazar Polytechnic institute is playing significant roles in developing skilled manpower in local and national economy.";

  const [showAll, setShowAll] = useState(false);

   const words = text.split(' ');

   const displayedWords = showAll ? words : words.slice(0, 100);

  return (
    <div className="pt-6">
      <h3 className="text-center bg-green-700 text-white rounded-md text-2xl md:text-4xl mb-4">About CBPI</h3>
      <div className="card p-1 lg:card-side gap-4">
        <figure>
          <img
            src="/WhatsApp Image 2024-02-15 at 12.38.59 PM.jpeg"
            className="lg:w-[600px] h-[400px] rounded-lg md:w-1/2"
            alt="Album"
          />
        </figure>
        <div className="md:w-1/2 mx-auto ">
          <p className="text-md p-1">{displayedWords.join(' ')}</p>
          {!showAll && (
            <button onClick={() => setShowAll(true)}>... Show More</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
