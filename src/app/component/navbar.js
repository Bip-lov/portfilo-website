import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="text-2xl font-bold tracking-wide">
          <Link href="/" className="hover:text-gray-300 transition">
            Biplove Poudel
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-8 text-lg">
          <li>
            <Link href="/#about" className="hover:text-gray-300 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/#skills" className="hover:text-gray-300 transition">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/#projects" className="hover:text-gray-300 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Optional Call-to-Action Button */}
        <div>
          <Link href="/get-started" className="bg-blue-600 px-4 py-2 rounded-lg shadow hover:bg-blue-500 transition">
            Download CV
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
