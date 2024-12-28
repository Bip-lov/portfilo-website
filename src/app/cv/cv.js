// pages/index.js
import React from 'react';
import Link from 'next/link'; // Importing Link for navigation

 
const CV = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header Section */}
      <header className="bg-gray-900 text-white py-10 text-center relative">
        <Link
          href="/"
          className="absolute left-4 top-4 text-teal-500 hover:text-teal-400 text-2xl"
        >
          &#8592;
        </Link>
        <h1 className="text-4xl font-bold">Biplove Poudel</h1>
        <p className="mt-2 text-lg text-gray-400">
          Aspiring Web Developer | App Developer | BSC CSIT Student
        </p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        {/* Education Section */}
        <section id="education" className="mb-10">
          <h2 className="text-3xl font-semibold text-teal-500 mb-4">Education</h2>
          <ul className="space-y-4">
            <li className="text-lg text-gray-400">
              <strong>BSC CSIT</strong> - Prithvi Narayan Campus
              <br />
              Currently pursuing.
            </li>
            <li className="text-lg text-gray-400">
              <strong>+2 in Science</strong> - Prakash Higher Secondary School
              <br />
              Completed in [Year].
            </li>
            <li className="text-lg text-gray-400">
              <strong>SEE</strong> - Beni Boarding Secondary School
              <br />
              Completed in [Year].
            </li>
          </ul>
        </section>

        {/* Skills & Interests Section */}
        <section id="skills" className="mb-10">
          <h2 className="text-3xl font-semibold text-teal-500 mb-4">
            Skills & Interests
          </h2>
          <ul className="space-y-4 text-lg text-gray-400">
            <li>Web Development (HTML, CSS, JavaScript, React, Next.js)</li>
            <li>App Development (Mobile & Web)</li>
            <li>MERN Stack (MongoDB, Express, React, Node.js)</li>
            <li>Learning new technologies and techniques</li>
            <li>Football, Futsal, Cricket, Basketball</li>
            <li>Good Singer</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-10">
          <h2 className="text-3xl font-semibold text-teal-500 mb-4">Contact</h2>
          <ul className="space-y-4 text-lg text-gray-400">
            <li>
              <strong>Email:</strong> your-email@example.com
            </li>
            <li>
              <strong>Phone:</strong> 9474734
            </li>
            <li>
              <strong>Address:</strong> Your Address Here
            </li>
          </ul>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-black text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Biplove Poudel. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CV;


