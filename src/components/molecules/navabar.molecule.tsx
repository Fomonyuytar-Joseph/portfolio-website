import React from "react";
import Button from "../atoms/button.atom";
import styles from "./navbar.module.css";
import Link from "next/link";
import LogoAtom from "../atoms/logo.atom";

const Navbar = () => {
  return (
    <nav
      className={`flex justify-between items-center py-4 px-6  rounded-full ${styles.navbar} `}
      role="navigation"
    >
    <LogoAtom/>
      <div className="">
        <ul className="flex items-center gap-20 text-tertiary-lightest-slate w-full font-fira text-[13px] ">
          <li>
            <Link href={"#/about"} className="hover:text-secondary-green transition ease-custom duration-custom">
              About
            </Link>
          </li>
          <li>
            <Link href={"#/experience"} className="hover:text-secondary-green">
              Experience
            </Link>
          </li>
          <li>
            <Link href={"#/work"} className="hover:text-secondary-green">
              Work
            </Link>
          </li>
          <li>
            <Link href={"#/contact"}>Contact</Link>
          </li>
        </ul>
      </div>

      <Button />
    </nav>
  );
};

export default Navbar;
