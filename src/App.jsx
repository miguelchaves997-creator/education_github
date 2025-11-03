/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Miguel Chaves",
  title: "Full Stack Designer & UX|UI",
  email: "pontochavedesign@gmail.com",
  gitHub: "https://github.com/miguelchaves997",
  instagram: "https://www.instagram.com/pontochavedesign",
  linkedIn: "https://www.linkedin.com/in/miguel-chaves-42760a369",
  Behance: "https://www.behance.net/cursodchaves"
};

const primaryColor = "#000000ff";
const secondaryColor = "#ffffffff";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
