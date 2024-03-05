 
const SingleTeacher = ({teacher}) => {
     return (
        <div className="mt-6">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 bg-base-100 shadow-xl p-1">
  <figure><img className="w-80 rounded-full p-4" src={teacher.photo} alt={teacher.name}/></figure>
  <div className="">
    <h2 className="text-4xl font-semibold mb-1">{teacher.name}</h2>
    <div className="">
    <p className="font-normal text-xl mb-2">Designation : <span className="text-base font-medium">{teacher.description}</span></p>
    <p className="font-medium text-xl"> Department : <span className="text-base font-medium">{teacher.department}</span></p>
    <p className="font-medium text-xl"> Home District : <span className="text-base font-medium">{teacher.home}</span></p>
    <p className="font-medium text-xl"> Education : <span className="text-base font-normal">{teacher.education}</span></p>
    <p className="font-medium text-xl"> Mobile : <span className="text-base font-medium">{teacher.mobile}</span></p>
    <p className="font-medium text-xl"> Email : <span className="text-base font-normal">{teacher.email}</span></p>
    </div>
 
     
  </div>
</div>
        </div>
    );
};

export default SingleTeacher;