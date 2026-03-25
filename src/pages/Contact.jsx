import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";

const Contact = () => {
  return (
    <div>
      <Logo/>
        <Navigation/>
      <h1>Contact</h1>
      <input type="text" />
      <input type="number" />
      <p>
        Hallo ich bin Maher Ghazzawi und ich bin 24 Jahre alt und ich komme aus
        dem Libanon.
      </p>
    </div>
  );
};

export default Contact;
