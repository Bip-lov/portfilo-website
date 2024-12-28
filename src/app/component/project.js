const Project = ()=>
    {
        return(
<div>
  {/* Projects Section */}
  <section id="projects" className="bg-gray-900 text-white py-16 px-6 text-center min-h-screen flex flex-col justify-center">
    <h2 className="text-4xl font-extrabold mb-6 tracking-tight text-gray-100">Projects</h2>
    <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-6 text-gray-400">
      I'm currently working on several exciting projects to showcase my skills. Stay tuned for updates!
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-xl font-semibold text-teal-500">Project 1</h3>
        <p className="mt-4 text-gray-300">
          This is a web application built using React and Node.js. It allows users to manage tasks efficiently and collaborate in real-time.
        </p>
      </div>
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-xl font-semibold text-teal-500">Project 2</h3>
        <p className="mt-4 text-gray-300">
          A mobile app that helps users track their fitness goals, monitor progress, and stay motivated through personalized workout plans.
        </p>
      </div>
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-xl font-semibold text-teal-500">Project 3</h3>
        <p className="mt-4 text-gray-300">
          An e-commerce platform that integrates with various payment gateways and provides a seamless shopping experience for customers.
        </p>
      </div>
    </div>
  </section>
  </div>
  )
    };


    export default Project