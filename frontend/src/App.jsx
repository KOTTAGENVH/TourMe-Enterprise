
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/Authentication/SignUp";
import SignIn from "./Pages/Authentication/SignIn";
import ForgetPassword from "./Pages/Authentication/ForgetPassword";
import Home from "./Pages/Destination/Home";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

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
    <div className={handleCss()}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/forgot" element={<ForgetPassword />} />
      <Route path="/signup" element={<SignUp />} />
      {loggedUser.role === "destination" && (
            <>
      <Route path="/home" element={<Home />} />
      </>
          )}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
