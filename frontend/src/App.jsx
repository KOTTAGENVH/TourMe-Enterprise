import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/Authentication/SignUp";
import SignIn from "./Pages/Authentication/SignIn";
import ForgetPassword from "./Pages/Authentication/ForgetPassword";
import Home from "./Pages/Destination/Home";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import lighbackground from "../src/Resources/TourMeBackground2.jpeg";
import darkbackground from "../src/Resources/TourMeBackgroundDark.jpeg";
import Checkpassword from "./Pages/Destination/Components/AdminAccess/checkpasswordAdd";
import AddDestination from "./Pages/Destination/AddDestination";
import ViewAllDestination from "./Pages/Destination/ViewAllDestination";
import ViewOneDestination from "./Pages/Destination/viewOneDestination";
import "swiper/css";
import "swiper/css/pagination";
import UpdateDestination from "./Pages/Destination/updateDestination";
function App() {
  const loggedUser = useSelector((state) => state.auth.loggedUser);
  const darkmode = useSelector((state) => state.darkmode.darkmode);

  const handleCss = () => {
    if (darkmode) {
      return "AppDarkmode";
    } else {
      return "App";
    }
  };
  return (
    <div
      style={{
        backgroundImage: `url(${darkmode ? darkbackground : lighbackground})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        margin: "0",
        padding: "0",
        boxSizing: "border-box",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/forgot" element={<ForgetPassword />} />
          <Route path="/signup" element={<SignUp />} />
          {loggedUser.role === "destination" && (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/viewall" element={<ViewAllDestination />} />
              <Route path="/adminaccess/:pass" element={<Checkpassword />} />
              <Route path="/addDestination" element={<AddDestination />} />
              <Route path="/viewOne" element={<ViewOneDestination />} />
              <Route path="/update" element={<UpdateDestination />} />
            </>
          )}
          {loggedUser.role === "hotel" && (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/viewall" element={<ViewAllDestination />} />
              <Route path="/adminaccess/:pass" element={<Checkpassword />} />
              <Route path="/addDestination" element={<AddDestination />} />
              <Route path="/viewOne" element={<ViewOneDestination />} />
              <Route path="/update" element={<UpdateDestination />} />
            </>
          )}
          {loggedUser.role === "souvnier" && (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/viewall" element={<ViewAllDestination />} />
              <Route path="/adminaccess/:pass" element={<Checkpassword />} />
              <Route path="/addDestination" element={<AddDestination />} />
              <Route path="/viewOne" element={<ViewOneDestination />} />
              <Route path="/update" element={<UpdateDestination />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
