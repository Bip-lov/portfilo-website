import Image from "next/image"; 

const HomePage = () => {
  return (
    <header className="bg-gray-900 text-white w-full py-20">
    <div className="container mx-auto px-80 flex flex-col-reverse md:flex-row items-center">
      {/* Left Text Section */}
      <div className="md:w-1/2 text-center md:text-left md:pl-1">
        <h1 className="text-5xl font-extrabold tracking-tight">
          Hi, I'm <span className="text-blue-500">Biplove Poudel</span>
        </h1>
        <p className="text-xl mt-6 leading-relaxed">
          A passionate Computer Science and Information Technology student eager to explore, create, and innovate in the world of technology.
        </p>
        <a
          href="#about"
          className="mt-8 inline-block bg-blue-600 text-white text-lg font-medium px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
        >
          Learn More About Me
        </a>
      </div>
  
      {/* Right Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/profile.jpg" // Correct path
          alt="Biplove Poudel"
        />
      </div>
    </div>
  </header>
  
  );
   };

export default HomePage;
