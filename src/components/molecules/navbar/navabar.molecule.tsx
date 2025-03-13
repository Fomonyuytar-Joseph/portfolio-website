import React from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';

import { IconRepository } from '@/lib/repository/icons/icon.repository';
import Button from '@/components/atoms/button/button.atom';
import LogoAtom from '@/components/atoms/logo/logo.atom';

const Navbar = () => {
  return (
    <nav
      className={`flex justify-between items-center py-4 px-6  rounded-full ${styles.navbar} `}
      role="navigation"
    >
      <LogoAtom />
      <div className="max-lg:hidden">
        <ul className="flex items-center gap-20 text-tertiary-lightest-slate w-full font-fira text-[13px]  ">
          <li>
            <Link
              href={'#/about'}
              className="hover:text-secondary-green transition ease-custom duration-custom"
            >
              About
            </Link>
          </li>
          <li>
            <Link href={'#/experience'} className="hover:text-secondary-green">
              Experience
            </Link>
          </li>
          <li>
            <Link href={'#/work'} className="hover:text-secondary-green">
              Work
            </Link>
          </li>
          <li>
            <Link href={'#/contact'} className="hover:text-secondary-green">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <Button className="max-lg:hidden" text="Resume" />
      <IconRepository.HamburgerIcon className="lg:hidden cursor-pointer" />
    </nav>
  );
};

export default Navbar;
