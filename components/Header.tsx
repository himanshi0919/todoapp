import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <span className="flex title-font font-medium items-center text-white mb-4 md:mb-0 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">TodoList</span>
          </span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <Link href="/">
            <span className="mr-5 hover:text-white cursor-pointer">Add Todo</span>
          </Link>
          <Link href="/about">
            <span className="mr-5 hover:text-white cursor-pointer">About</span>
          </Link>
          <Link href="/todos">
            <span className="mr-5 hover:text-white cursor-pointer">My Todos</span>
          </Link>
          <Link href="/contact">
            <span className="mr-5 hover:text-white cursor-pointer">Contact Us</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
