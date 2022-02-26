import React from "react";
import snapMe from "./snapme.jpg"
import Typed from 'react-typed';
import Particles from "react-tsparticles";


const Home =()=>{
    const particlesInit = (main) => {
        console.log(main);
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    
    return(
        <div className="container-fluid" id="home-bg">
            <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
      
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 40,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#21E6C1",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: false,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 900,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
            <div className="row d-flex justify-content-center">
               <div className=" col md-6 p-4 m-5 " id="home-text">
                    <p id="home-intro">Hi, my name is <span className="display-5">Arjeta Allamani</span>Welcome to a Web Developer crib</p>
                    <Typed
                        className="typed-text"
                        strings={["Fun fact about me:", "I am a Web Developer", "with a Molecular Biotechnolgy degree"]}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                   />
                </div> 
                
                <div className="col md-6">
                   <img src={snapMe} className="home-snapic"/> 
                </div>
            </div>
        </div>
    )
}

export default Home;
