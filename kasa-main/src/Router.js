import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Lodgings from './pages/Lodgings/Lodgings';
import About from './pages/About/About';
import Notfound from './pages/Notfound/Notfound';
import { element } from "prop-types";

function Router() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/lodgings/:id" element={<Lodgings />} />
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<Notfound />} />   
      </Routes>
    </div>
  );
}



export default Router;
