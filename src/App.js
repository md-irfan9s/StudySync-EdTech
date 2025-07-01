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


function App() {
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
        
        }
        >
          <Route path="dashboard/my-profile" element={<MyProfile/>}/>
          <Route path="dashboard/settings" element={<Settings/>}/>
        </Route>
          

        </Routes>
      </div>
  );
}

export default App;
