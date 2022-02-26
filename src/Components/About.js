import React from "react";
import Mine from "./me.jpg"

function About(){
    return(
        <div className="container-fluid" id="About">
            
            <h1 className=" text-center p-4" id="titleAbout">About me</h1> 

            <div className="d-flex justify-content-center p-4">
                <img className="photoAbout"src={Mine} width={200} height={200}></img>
            </div>

            <div className="row" id="about">
                    <div className="col-md-12" id="about-p">
                        <p className="text-center p-4">
                        I started learning about coding and programming around six months ago. 
                        Ever since I have tried to build different projects and to practice almost every day. 
                        I am very eager to learn more about it and to gain new knowledge related to this. 
                        Currently, I am learning and progressing my skills at React.  
                        About myself, I can say that I am a sociable, communicative and optimistic person. 
                        I am dedicated, hardworking, and always on time. 
                        </p>
                    </div>
                    <div className="row m-auto p-auto" id="about-resume">
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <h2 className="about-title">Skills</h2>
                    <ul>
                        <li><span id="skill">HTML</span>-ADVANCED</li>
                        <li><span id="skill">CSS</span>-ADVANCED</li>
                        <li><span id="skill">JAVASCRIPT</span>-INTERMEDIATE</li>
                        <li><span id="skill">BOOTSTRAP</span>-INTERMEDIATE</li>
                        <li><span id="skill">REACT</span>-INTERMEDIATE</li>
                        <li><span id="skill">PHP</span>-BEGINNER</li>
                        <li><span id="skill">MYSQL</span>-BEGINNER</li>
                    </ul>
                </div>

                <div className="col-md-4 col-sm-6 col-xs-12">
                    <h2 className="about-title">Experience</h2>
                    <ul>
                        <li>Intern, Beer Technologist at King Pils</li>
                        <i>From March, 2021- May, 2021</i>
                        <li>Freelancer, Medical writer</li>
                        <i>From April, 2021-June, 2021</i>
                    </ul>
                </div>

                <div className="col-md-4 col-sm-6 col-xs-12">
                    <h2 className="about-title">Education</h2>
                    <ul>
                        <li>Web Developer-Digital Jobs Albania</li>
                        <i>From December, 2021-On going</i>
                        <li>Msc.Molecular and Industrial Biotechnology-Faculty of Natural Sciences</li>
                        <i>From October, 2019-October, 2021</i>
                        <li>Biotechnology-Faculty of Natural Sciences</li>
                        <i>From October, 2016-October, 2019</i>
                    </ul>
                </div>
            </div> 
            </div>   
        </div>
    )
};

export default About;