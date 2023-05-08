import Events from "./components/Events";
import Feedback from "./components/Feedback";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import SearchProfile from "./components/SearchProfile";
import Message from "./components/Message";
import { Route, Routes } from "react-router-dom";
import ViewProfile from "./components/ViewProfile";
import Notidfication from "./components/Notidfication";
import Main from "./components/Main";
import ForgetPassword from "./components/ForgetPassword";
import Drawer from "./components/Drawar";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
    <ToastContainer/>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/events" element={<Events />} />
        <Route exact path="/feedback" element={<Feedback />} />
        <Route exact path="/view-profile" element={<ViewProfile />} />
        <Route exact path="/search-profile" element={<SearchProfile />} />
        <Route exact path="/message" element={<Message />} />
        <Route exact path="/notification" element={<Notidfication />} />
        <Route exact path="/forget-password" element={<ForgetPassword />} />
        <Route exact path="/drower" element={<Drawer/>} />
      </Routes>
    </>
  );
}

export default App;
