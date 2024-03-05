import { Link } from "react-router-dom";

 
const TeacherCard = ({teach}) => {
    const {id, name,description, education, email, home, mobile, department, photo,} = teach
     return (
        <div className="lg:w-80">
            <div key={id}>
              <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={photo}
              alt="person"
              className="rounded-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
            <div className="card-actions">
              <Link to={`/teacher/${teach.name}`}>
              <button className="btn btn-outline btn-success  ">View Details</button>
              </Link>
            </div>
          </div>
        </div>
            </div>
        </div>
    );
};

export default TeacherCard;