import React, { useEffect } from 'react';
import Particles from 'react-tsparticles';
import '../App.css';
// import { Button } from './Button';
import './HeroSection.css';
import AOS from 'aos';
import "aos/dist/aos.css"

function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  return (
    <div className='hero-container'>
      <img src="images/MainBackground.jpg" alt="" />
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 200,
                duration: 2,
                opacity: 0.6,
                size: 140,
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
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 100,
              enable: true,
              opacity: 0.6,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: true,
              speed: 1.5,
              straight: true,
            },
            number: {
              density: {
                enable: true,
                value_area: 900,
              },
              value: 100,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 3.5,
            },
          },
          detectRetina: true,
        }}


      />

      {/* <video src='videos/video-3.mp4' autoPlay loop muted /> */}
      {/* <h1>Trident Digitals</h1> */}

      <h1 data-aos='fade-down' className="gradient-text">Welcome To Trident Digitals</h1>
      {/* <p>What are you waiting for?</p> */}
      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'

        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div> */}
    </div>
  );
}

export default HeroSection;
