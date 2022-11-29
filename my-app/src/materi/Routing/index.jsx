import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./pembahasan/User/User";
import Home from "./pembahasan/Home/Home";
import Navigation from "./pembahasan/Navigation/Navigation";
import Contact from "./pembahasan/Contact/Contact";
import Admin from "./pembahasan/Contact/nomorAdmin";
import Teknisi from "./pembahasan/Contact/nomorTeknisi";
import Darurat from "./pembahasan/Contact/nomorDarurat";
import Post from "./pembahasan/Post";

const Routing = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/contact/*" element={<Contact />}>
            <Route path="admin" element={<Admin />} />
            <Route path="teknisi" element={<Teknisi />} />
            <Route path="darurat" element={<Darurat />} />
          </Route>
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routing;
