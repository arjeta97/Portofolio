import './App.css';
import Home from "./Components/home"
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/navbar';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Footer from './Components/footer';
import Portofolio from './Components/Portofolio';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Home/>
      <Routes>
        {/* <Route path='/Home' element={<Home/>}/> */}
        <Route path='/About' element={<About />}/>
        <Route path='/Portofolio' element={<Portofolio />} />
        <Route path="/ContactUs" element={<ContactUs />} />  
      </Routes>
      <Footer/>
      
      {/* <About/>
      <Portofolio/>
      <ContactUs/>
      */}
  </BrowserRouter>
    
  );
}

export default App;
