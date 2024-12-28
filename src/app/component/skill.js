const Skill = () =>
     {
    return (
        <div>
        <section id="skills" className="bg-gray-900 text-white w-full py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-extrabold mb-8 text-gray-100">Interests & Skills</h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto text-gray-400 mb-8">
              My passion lies in building robust and user-friendly applications that solve real-world problems. I'm always eager to learn about emerging technologies and expand my expertise.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-teal-500">Web Development</h3>
                <p className="mt-4 text-gray-300">
                  Crafting modern, responsive, and user-friendly websites.
                </p>
              </div>
              <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-teal-500">App Development</h3>
                <p className="mt-4 text-gray-300">
                  Building intuitive and feature-rich mobile applications.
                </p>
              </div>
              <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-teal-500">Learning</h3>
                <p className="mt-4 text-gray-300">
                  Exploring new technologies and staying updated with trends.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
    )
};

export default Skill;
