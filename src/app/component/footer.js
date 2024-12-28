import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-40 mt-0">
    <div className="container mx-auto text-center">
      {/* Footer Top Section: Contact & Social Links */}
      <div className="mb-12">
        <p className="text-lg mb-4 text-gray-400">Let's connect! I'm always open to new opportunities and collaborations.</p>
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white text-2xl"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white text-2xl"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
          <a
            href="mailto:youremail@example.com"
            className="text-gray-300 hover:text-white text-2xl"
          >
            <i className="fas fa-envelope"></i> Email
          </a>
        </div>
      </div>
  
      {/* Footer Middle Section: Quick Links */}
      <div className="mb-12">
        <h4 className="text-xl font-semibold text-gray-200 mb-4">Quick Links</h4>
        <ul className="flex justify-center gap-12 text-lg text-gray-400">
          <li><a href="/#home" className="hover:text-white">Home</a></li>
          <li><a href="/#about" className="hover:text-white">About</a></li>
          <li><a href="/#projects" className="hover:text-white">Projects</a></li>
          <li><a href="/#contact" className="hover:text-white">Contact</a></li>
        </ul>
      </div>
  
      {/* Footer Bottom Section: Copyright and Description */}
      <div className="text-gray-400">
        <p className="text-sm mb-4">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p className="text-sm">Building innovative solutions and always eager to learn and grow.</p>
      </div>
    </div>
  </footer>
  
  
  );
};

export default Footer;
