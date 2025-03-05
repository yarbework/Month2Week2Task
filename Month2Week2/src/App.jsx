import { Route, Routes } from "react-router-dom";
import Contacts from "./components/Contacts";
import Home from "./components/home";
import About from "./components/about";
// import Navigation from "./components/Navigation";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div>
      <h1>React Task 2</h1>
      {/* <Navigation /> */}
      {/* <div>
        <ul>
          <li>
            <link to="/"> Home </link>
          </li>
          <li>
            <link to="/About"> About </link>
          </li>
          <li>
            <link to="/Contacts"> Contacts </link>
          </li>
        </ul>
      </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
