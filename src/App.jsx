import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Stage from "./pages/Stage";
import Orders from "./pages/Orders";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <Router>
      <div className="pizza_back  select-none">
        <div className="w-screen h-screen bg-white bg-opacity-90 flex flex-col overflow-hidden ">
          <Navigation />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/stage" element={<Stage />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
