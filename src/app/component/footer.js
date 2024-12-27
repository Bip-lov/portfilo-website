import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="mt-4">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-gray-300 hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-gray-300 hover:text-white"
          >
            GitHub
          </a>
          <a
            href="mailto:youremail@example.com"
            className="mx-2 text-gray-300 hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
