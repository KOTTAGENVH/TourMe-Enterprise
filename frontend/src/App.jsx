import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/Authentication/SignUp";
import SignIn from "./Pages/Authentication/SignIn";
import ForgetPassword from "./Pages/Authentication/ForgetPassword";
import Home from "./Pages/Destination/Home";
import SouvenierHome from "./Pages/Souvenier/Home";
import HotelHome from "./Pages/Hotel/Home";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import lighbackground from "../src/Resources/TourMeBackground2.jpeg";
import darkbackground from "../src/Resources/TourMeBackgroundDark.jpeg";
import Checkpassword from "./Pages/Destination/Components/AdminAccess/checkpasswordAdd";
import AddDestination from "./Pages/Destination/AddDestination";
import ViewAllDestination from "./Pages/Destination/ViewAllDestination";
import ViewOneDestination from "./Pages/Destination/viewOneDestination";
import "swiper/css";
import "swiper/css/pagination";
import UpdateDestination from "./Pages/Destination/updateDestination";
import AddSouvenier from "./Pages/Souvenier/addsouvenier";
import ViewAllSouvenier from "./Pages/Souvenier/viewallsouvenier";
import ViewOneSouvenier from "./Pages/Souvenier/viewonesouvenier";
import UpdateSouvenier from "./Pages/Souvenier/updatesouvenier";
import AddHotel from "./Pages/Hotel/AddHotel";
import ViewAllHotels from "./Pages/Hotel/viewallhotel";
import UpdateHotel from "./Pages/Hotel/updatehotel";
import ViewOneHotel from "./Pages/Hotel/viewonehotel";
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
              <Route path="/addItem" element={<AddDestination />} />
              <Route path="/viewOne" element={<ViewOneDestination />} />
              <Route path="/update" element={<UpdateDestination />} />
            </>
          )}
          {loggedUser.role === "hotel" && (
            <>
              <Route path="/home" element={<HotelHome />} />
              <Route path="/viewall" element={<ViewAllHotels />} />
              <Route path="/adminaccess/:pass" element={<Checkpassword />} />
              <Route path="/addItem" element={<AddHotel />} />
              <Route path="/viewOne" element={<ViewOneHotel />} />
              <Route path="/update" element={<UpdateHotel />} />
            </>
          )}
          {loggedUser.role === "souvnier" && (
            <>
              <Route path="/home" element={<SouvenierHome />} />
              <Route path="/viewall" element={<ViewAllSouvenier />} />
              <Route path="/adminaccess/:pass" element={<Checkpassword />} />
              <Route path="/addItem" element={<AddSouvenier />} />
              <Route path="/viewOne" element={<ViewOneSouvenier />} />
              <Route path="/update" element={<UpdateSouvenier />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
