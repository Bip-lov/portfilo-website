"use client";
import Image from "next/image";
import Navbar from "./component/navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ExampleComponent from "./component/exampleComponent";

export default function Home() {
  const router = useRouter(); // Correctly calling useRouter as a function

  // Navigation function using useRouter hook
  const navigate = (path) => {
    router.push(path); // Using the router.push method to navigate to the specified path
  };

  return (
    <div>
      <Navbar />
      {/* Navigation using Next.js `Link` component */}
      <Link href="/about/bilove">
        Go to about page {/* No need for <a> tag here */}
      </Link>

      {/* Navigation using a button with onClick event */}
      <button onClick={() => navigate("/about")}>Go to about</button> 
      {/* The onClick handler triggers the navigate function which uses router.push */}
      
      {/* Navigation back to home using the router */}
      <button onClick={() => navigate("/")}>Go to Home</button> 
      {/* The navigate function will redirect to the home page */}
      <ExampleComponent />
    </div>
  );
}
