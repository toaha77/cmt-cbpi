import { useEffect } from "react";
import { useState } from "react";
import TeacherCard from "./TeacherCard";

const Teacher = () => {
  const [teacher, setTeacher] = useState([])
  const url = '/data.json'
   useEffect(()=>{
     fetch(url)
     .then(res => res.json())
     .then(data => setTeacher(data))

   },[])
  return (
    <div className="pt-6">
      <h3 className="text-center bg-green-700 rounded-md text-white text-2xl md:text-4xl mb-6">
        Computer Department Teacher Information
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          teacher.map(teach=> <TeacherCard teach={teach}
          key={teach.id}
          ></TeacherCard>)
        }
      </div>
    </div>
  );
};

export default Teacher;
