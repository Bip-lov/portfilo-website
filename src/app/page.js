"use client";
import Image from "next/image";
import Navbar from "./component/navbar";
import Link from "next/link";
import About from "./component/about";
import HomePage from "./component/home";
import Skill from "./component/skill";
import Project from "./component/project";
import Footer from "./component/footer";

export default function Home() {
  

  return (
    <div>
      <Navbar />
     <HomePage />
     <About />
     <Skill />
     <Project />
     <Footer />
    
    </div>
  );
};
