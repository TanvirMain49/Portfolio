import React from "react";
import Navbar from "./Section/Navbar";
import Hero from "./Section/Hero";
import About from "./Section/About";
import Experience from "./Section/Experience";
import Project from "./Section/Projects";
import ContactMe from "./Section/ContactMe";

export default function App() {


  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Project />
      <ContactMe />
    </div>
  );
}
