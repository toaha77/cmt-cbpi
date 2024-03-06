import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Teacher from "../Pages/Teacher/Teacher";
 import TeacherInfo from "../Pages/Teacher/TeacherInfo";
import Gallery from "../Pages/Gallery/Gallery";
 import Login from "../Pages/Login/Login";
import Contact from "../Component/Form/Contact";
import Mission from "../Pages/Mission/Mission";
import Routine from "../Pages/Routine/Routine";
import Register from "../Pages/Register/Register";
import Student from "../Pages/Student/Student";
import PrivateRoute from "./PrivateRoute";
 
const MyCreatedRoute = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'/about',
          element: <About></About>
        },
        {
          path: '/teacher',
          element: <Teacher></Teacher>
        },
        {
          path: '/gallery',
          element: <Gallery></Gallery>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/mission',
          element: <Mission></Mission> 
        },
        {
          path: '/routine',
          element: <Routine></Routine>
        },
        {
          path: '/teacher/:name',
          element: <TeacherInfo></TeacherInfo>,
          loader: () => fetch('/data.json')
         
        },
        {
          path: '/student',
          element: <PrivateRoute><Student></Student></PrivateRoute>
          
        },
         
      ]
      

    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/register',
      element: <Register></Register>
    }
]) 

export default MyCreatedRoute;