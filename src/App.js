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

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/events" element={<Events />} />
        <Route exact path="/feedback" element={<Feedback />} />
        <Route exact path="/view-profile" element={<ViewProfile />} />
        <Route exact path="/search-profile" element={<SearchProfile />} />
        <Route exact path="/message" element={<Message />} />
        <Route exact path="/notification" element={<Notidfication />} />
      </Routes>
    </>
  );
}

export default App;
