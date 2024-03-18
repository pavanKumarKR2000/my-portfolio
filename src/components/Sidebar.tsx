import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-screen bg-black md:flex items-center justify-center hidden">
      <nav>
        <ul className="p-8 flex flex-col items-center gap-3 text-white">
          <li>
            <Link href="#home" className="sidebar_link relative">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="sidebar_link relative">
              About
            </Link>
          </li>
          <li>
            <Link href="#education" className="sidebar_link relative">
              Education
            </Link>
          </li>
          <li>
            <Link href="#experience" className="sidebar_link relative">
              Experience
            </Link>
          </li>
          <li>
            <Link href="#skills" className="sidebar_link relative">
              skills
            </Link>
          </li>
          <li>
            <Link href="#projects" className="sidebar_link relative">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
