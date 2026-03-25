import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";

const About = () => {
  return (
    <div>
      <Logo/>
        <Navigation />
      <h1> Über uns</h1>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempore
        et debitis assumenda ullam aperiam repudiandae quos itaque recusandae
        vero iure libero atque molestiae soluta eius, quo pariatur dolore.
        Dolores impedit voluptatem praesentium adipisci nesciunt maxime
        consequatur doloribus voluptate expedita!
      </p>
      <br />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo obcaecati
        quod veritatis cumque molestias fugiat debitis, possimus dolore
        quibusdam perspiciatis cum laborum laudantium consectetur repellendus!
      </p>
    </div>
  );
};

export default About;