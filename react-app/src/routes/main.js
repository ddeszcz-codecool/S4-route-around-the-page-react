import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contacts from "../components/Contacts";


const Main = () => {
  return(
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
  )
}
export default Main