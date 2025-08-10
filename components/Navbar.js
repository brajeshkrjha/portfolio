'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Home, User, Code, Briefcase, FolderKanban, Mail, FileText } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-900 dark:text-white">Brajesh Jha</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1">
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1">
              <User className="h-4 w-4" />
              About
            </Link>
            <Link href="/skills" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1">
              <Code className="h-4 w-4" />
              Skills
            </Link>
            <Link href="/experience" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1">
              <Briefcase className="h-4 w-4" />
              Experience
            </Link>
            <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1">
              <FolderKanban className="h-4 w-4" />
              Projects
            </Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1">
              <Mail className="h-4 w-4" />
              Contact
            </Link>
            <Link href="/resume/Brajesh_Kumar_Jha_Resume.pdf" target="_blank" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1">
              <FileText className="h-4 w-4" />
              Resume
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <Menu
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                aria-hidden="true"
              />
              {/* Icon when menu is open */}
              <X
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" onClick={closeMenu} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium">
            <Home className="h-5 w-5" />
            Home
          </Link>
          <Link href="/about" onClick={closeMenu} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium">
            <User className="h-5 w-5" />
            About
          </Link>
          <Link href="/skills" onClick={closeMenu} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium">
            <Code className="h-5 w-5" />
            Skills
          </Link>
          <Link href="/experience" onClick={closeMenu} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium">
            <Briefcase className="h-5 w-5" />
            Experience
          </Link>
          <Link href="/projects" onClick={closeMenu} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium">
            <FolderKanban className="h-5 w-5" />
            Projects
          </Link>
          <Link href="/contact" onClick={closeMenu} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium">
            <Mail className="h-5 w-5" />
            Contact
          </Link>
          <Link href="/resume/Brajesh_Kumar_Jha_Resume.pdf" target="_blank" onClick={closeMenu} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium">
            <FileText className="h-5 w-5" />
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}