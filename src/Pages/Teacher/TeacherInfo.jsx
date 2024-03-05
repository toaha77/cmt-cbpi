import { useEffect, useState } from "react";
import {  useLoaderData, useParams } from "react-router-dom";
import SingleTeacher from "./SingleTeacher";
 
 
const TeacherInfo = () => {
    const [teacher, setTeacher] = useState([]);

  const { name } = useParams();

  const teachers = useLoaderData();
   useEffect(() => {

    
    const findPhone = teachers?.find((teacher) => teacher.name === name);
     setTeacher(findPhone);
  }, [name, teachers]);
    return (
        <div>
           <SingleTeacher teacher={teacher}></SingleTeacher>
        </div>
    );
};

export default TeacherInfo;