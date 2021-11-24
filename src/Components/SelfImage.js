import React from 'react';
import TextTransition, { presets } from "react-text-transition";


const TEXTS = [
  "UI Designer",
  "UI Developer"
];

const SelfImage =()=>{

  const [index, setIndex] = React.useState(0);
 
  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return(
        <section id="hero" className="d-flex flex-column justify-content-center">
        <div className="container" data-aos="zoom-in" data-aos-delay="100">
          <h1>V S K KALIDAS</h1>
          <p>I'm <span className="typed"> <TextTransition className="typed" text={ TEXTS[index % TEXTS.length] } springConfig={ presets.wobbly } /></span>
          </p>
          <div className="social-links">
            
            <a href="https://www.facebook.com/VSKKalidas" className="facebook"><i className="bx bxl-facebook"></i></a>
   
            <a href="https://www.linkedin.com/in/vsk-kalidas-36b14414/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
          </div>
        </div>
      </section>
    )
}

export default SelfImage;