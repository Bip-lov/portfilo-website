"use client";
import Image from "next/image";
import Navbar from "./component/navbar";
import Link from "next/link";
import About from "./component/about";

export default function Home() {
  

  return (
    <div>
      <Navbar />
      <About />
     
    </div>
  );
};
