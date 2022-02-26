import React from "react";
import Calculator from "./img/Calculator.png";
import LifeinWeek from "./img/LifeInWeeks.png";
import Lude from "./img/Ludo.png";
import MovieCabin from "./img/MovieCabin.png";
import Register from "./img/Register.png";
import Timer from "./img/timer.png";
import TipCal from "./img/TipCal.png";


function Portofolio(){
    return(
        <div className="container-fluid ">
            <h1 className="d-flex justify-content-center" id="portotext1">Portofolio</h1>
            <p className="d-flex justify-content-center" id="portotext">Here are some small projects I have worked on</p>
            <div className="row m-auto p-auto" id="first-row">
                <div className="col-md-3">
                    <a href="https://hungry-einstein-aca0a4.netlify.app/"><img className="portofoliopic" src={Calculator} width={200} height={200}></img></a> 
                    <p>A small calculator I made using HTML, CSS and JavaScript</p>
                </div>

                <div className="col-md-3">
                    <a href="https://affectionate-bardeen-d1baaa.netlify.app/"><img className="portofoliopic" src={Timer} width={200} height={200}></img></a>
                    <p>A timer I made using HTML, CSS and JavaScript</p>
                </div>

                <div className="col-md-3">
                    <a href="https://jolly-minsky-f1ab42.netlify.app/"><img className="portofoliopic" src={LifeinWeek} width={200} height={200}></img></a> 
                    <p>A site that calculates how many weeks you have to live, used HTML, CSS and JavaScript</p>
                </div>

                <div className="col-md-3">
                    <a href="https://modest-shaw-940bce.netlify.app/"><img className="portofoliopic" src={Lude} width={200} height={200}></img></a> 
                    <p>A small ludo game that I am still working to imporve it using  HTML, CSS and JavaScript</p>
                </div>
            </div>
            <div className="row m-auto p-auto" id="first-row">

                 <div className="col-md-4">
                    <a href="https://github.com/arjeta97/MovieCabin"><img className="portofoliopic" src={MovieCabin} width={200} height={200}></img></a>
                    <p>A website for movie lovers that I am still working on, using HTML, CSS, Bootstrap and PHP</p> 
                </div>

                <div className="col-md-4">
                    <a href="https://zen-fermi-5ae3b6.netlify.app/"><img className="portofoliopic" src={Register} width={200} height={200}></img></a> 
                    <p>A task I had to do, a form of register for your employers</p>
                </div>

                <div className="col-md-4">
                    <a href="https://happy-albattani-2d3565.netlify.app/?fbclid=IwAR3NoZpnc3GCuvMnikQNxBLr-EYky21BdbifvltN39zHbcW6e8QVMzlpPc8"><img className="portofoliopic" src={TipCal} width={200} height={200}></img></a> 
                    <p>You can caluclate tips you have to leave while on a restaurants, using HTML, CSS, JS</p>
                </div>
            </div> 
        </div>
    )
    
}

export default Portofolio;