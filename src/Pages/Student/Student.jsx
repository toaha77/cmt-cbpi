import {  useState } from "react";
import { HiOutlineInformationCircle } from "react-icons/hi";
const initialStudentData = [
    { id: 593377, registration: 1502161416,  name: 'Mohammad Toaha Alfeth', father_name : 'Sha Alam', mother_name: 'Joynab Begum', session: "2020-2021", semester: '7th Semester', tech: 'Computer Technology'},
    { id: 593408, name: 'Yeasrif Rashid Tamim', registration: 1502161418,   father_name : 'Harun ur Rashid', mother_name: 'Yeasmin Akther', session: "2020-2021", semester: '7th Semester', tech: 'Computer Technology' },
    {  id: 593318, name: 'Sadid Rahin Nohan', registration: 1502161428,   father_name : 'Harun ur Rashid', mother_name: 'Yeasmin Akther', session: "2020-2021", semester: '7th Semester', tech: 'Computer Technology'  },
    // Add more student data as needed
  ];


const Student = () => {
 

const [searchTerm, setSearchTerm] = useState('');
const [students, setStudents] = useState(initialStudentData);
const [foundStudent, setFoundStudent] = useState(null);

const handleSearchChange = (event) => {
  setSearchTerm(event.target.value);
};

const handleFilter = () => {
  // Find the student with the provided ID
  const found = students.find(student => student.id.toString() === searchTerm.trim());
  setFoundStudent(found);
};

  return (
    <div className="mt-8">
      <h3 className="bg-green-600 text-center text-white text-4xl uppercase rounded-md">
        student verification
      </h3>

      <div className="mt-4">
        <h2 className="font-semibold mb-2"> Student ID or Board Roll </h2>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input type="text" className="grow" value={searchTerm} onChange={handleSearchChange} placeholder=" Student ID or Board Roll " />
        </label>
      </div>
      <div className="mt-4">
        <button onClick={handleFilter} className="btn bg-green-600 text-white hover:bg-green-600 uppercase text-white w-full">Verify Student</button>
      </div>
      {foundStudent ? (
        <div className="mt-6">
        <div>
         <div className="flex items-center justify-center">
         <HiOutlineInformationCircle className="text-3xl"></HiOutlineInformationCircle>
        <h2 className="text-xl font-semibold">Student Information</h2>
         </div>
        </div>
      

 
    <div className="overflow-x-auto">
    <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
        <thead>
           
        </thead>
        <tbody>
            <tr className="hover:bg-gray-50 border-b transition duration-300">
              
                <td className="py-4 px-6 border-b text-base text-center font-medium uppercase">student id </td>
                <td className="py-4 px-6 border-b text-lg text-center  font-medium uppercase">:  </td>
                <td className="py-4 px-6 border-b text-base text-center  font-medium uppercase">{foundStudent.id} </td>
                 
            </tr>
            <tr className="hover:bg-gray-50 border-b transition duration-300">
                
            <td className="py-4 px-6 border-b text-base text-center font-medium uppercase">Registration  </td>
                <td className="py-4 px-6 border-b text-base text-center  font-medium uppercase">:  </td>
                <td className="py-4 px-6 border-b text-base text-center  font-medium uppercase">{foundStudent.registration} </td>
            </tr>
            <tr className="hover:bg-gray-50 border-b transition duration-300">
            <td className="py-4 px-6 border-b text-base text-center font-medium uppercase">name</td>
                <td className="py-4 px-6 border-b text-lg text-center  font-medium uppercase">:  </td>
                <td className="py-4 px-6 border-b text-base text-center  font-medium uppercase">{foundStudent.name} </td>
            </tr>
            <tr className="hover:bg-gray-50 border-b transition duration-300">
            <td className="py-4 px-6 border-b text-base text-center font-medium uppercase">father name</td>
                <td className="py-4 px-6 border-b text-lg text-center  font-medium uppercase">:  </td>
                <td className="py-4 px-6 border-b text-base text-center  font-medium uppercase">{foundStudent.father_name} </td>
            </tr>
            <tr className="hover:bg-gray-50 border-b transition duration-300">
            <td className="py-4 px-6 border-b text-base text-center font-medium uppercase">mother name</td>
                <td className="py-4 px-6 border-b text-lg text-center  font-medium uppercase">:  </td>
                <td className="py-4 px-6 border-b text-base text-center  font-medium uppercase">{foundStudent.mother_name} </td>
            </tr>
            <tr className="hover:bg-gray-50 border-b transition duration-300">
            <td className="py-4 px-6 border-b text-base text-center font-medium uppercase">academic session </td>
                <td className="py-4 px-6 border-b text-lg text-center  font-medium uppercase">:  </td>
                <td className="py-4 px-6 border-b text-base text-center  font-medium uppercase">{foundStudent.session} </td>
            </tr>
            <tr className="hover:bg-gray-50 border-b transition duration-300">
            <td className="py-4 px-6 border-b text-base text-center font-medium uppercase">current semester  </td>
                <td className="py-4 px-6 border-b text-lg text-center  font-medium uppercase">:  </td>
                <td className="py-4 px-6 border-b text-base text-center  font-medium uppercase">{foundStudent.semester} </td>
            </tr>
            <tr className="hover:bg-gray-50 border-b transition duration-300">
            <td className="py-4 px-6 border-b text-base text-center font-medium uppercase">academic technology  </td>
                <td className="py-4 px-6 border-b text-lg text-center  font-medium uppercase">:  </td>
                <td className="py-4 px-6 border-b text-base text-center  font-medium uppercase">{foundStudent.tech} (66) </td>
            </tr>
            
        </tbody>
    </table>
</div>

  

        </div>
      ) : (
        <p  className="text-red-500 font-medium">No student found with the provided ID.</p>
      )}
    </div>
  );
};

export default Student;
