import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "../src/components/core/HomePages/common/Navbar"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OpenRoute from "./components/core/Auth/OpenRoute";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePass from "./pages/UpdatePass";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import MyProfile from "./components/core/Dashboard/MyProfile";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/core/Auth/ProtectedRoute"
import Settings from "./components/core/Dashboard/Settings";
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
import Error from "./pages/Error"
import Cart from "./components/core/Dashboard/cart";
import { ACCOUNT_TYPE } from "./utils/constants";
import { useSelector } from "react-redux";
import AddCourse from "./components/core/Dashboard/AddCourse";
import MyCourses from "./components/core/Dashboard/MyCourses";


function App() {
  const {user} = useSelector((state) => state.profile)
  return (
      <div className="w-screen min-h-screen bg-richblack-900 font-inter flex flex-col">

        <Navbar />
        <Routes>

          <Route path="/" element={<Home/>}/>


          <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
    <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePass />
            </OpenRoute>
          }
        />

        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />

        {/* <Route
          path="about"
          element={
            <OpenRoute>
              <About />
            </OpenRoute>
          }
        /> */}

          <Route path="/about" element={<About/>}/>

        {/* <Route
          path="contact"
          element={
            <OpenRoute>
              <ContactUs />
            </OpenRoute>
          }
        /> */}
          <Route path="/contact" element={<ContactUs/>}/>

          <Route element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
        
        } >
          <Route path="dashboard/my-profile" element={<MyProfile/>}/>
          <Route path="dashboard/settings" element={<Settings/>}/>


          {
            user?.accountType === ACCOUNT_TYPE.STUDENT && 

            (
              <>
                <Route path="dashboard/enrolled-courses" element={<EnrolledCourses/>}/>
                <Route path="dashboard/cart" element={<Cart/>}/>
              </>
            )
          }

          {
            user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && 
            (
              <>
              <Route path="dashboard/add-course" element={<AddCourse/>}/>
              </>
            )
          }

          {
            user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
              <>
                <Route path="dashboard/my-courses" element={<MyCourses/>} />
              </>
            )
          }
        </Route>
          
        <Route path="*" element={<Error/>} />

        </Routes>
      </div>
  );
}

export default App;
