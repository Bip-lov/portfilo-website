const About = ()=>
{
    return(
       
        <section id="about" className="bg-gray-900 text-white py-80 px-6 text-center w-full mt-0">
        <h2 className="text-5xl font-extrabold mb-6 tracking-tight text-gray-100">About Me</h2>
        <p className="text-xl leading-relaxed max-w-2xl mx-auto mb-6 text-blue-300 text-justify">
          I'm currently pursuing a degree in Computer Science and Information Technology. My academic journey has equipped me with a solid foundation in technology, programming, and problem-solving.
        </p>
        <p className="text-xl leading-relaxed max-w-2xl mx-auto mb-6 text-blue-300 text-justify">
          I'm deeply interested in learning and exploring:
        </p>
        <ul className="list-disc list-inside mt-6 text-left max-w-2xl mx-auto space-y-4">
          <li className="flex items-center gap-2">
            <span className="text-teal-500">&#9733;</span> Web Development
          </li>
          <li className="flex items-center gap-2">
            <span className="text-teal-500">&#9733;</span> App Development
          </li>
          <li className="flex items-center gap-2">
            <span className="text-teal-500">&#9733;</span> Exploring and mastering new technologies
          </li>
        </ul>
        <div className="mt-8">
          <button className="px-8 py-4 bg-teal-500 text-white font-semibold rounded-full shadow-md hover:bg-teal-600 transition-all duration-300">
            Learn More
          </button>
        </div>
      </section>
      
      

      
      
      
    );

};
export default About