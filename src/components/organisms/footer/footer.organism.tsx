import React from 'react'
import { IconRepository } from "@/lib/repository/icons/icon.repository";
import Link from "next/link";

const FooterOrganism = () => {
  return (
    <div className="">
      <div className="lg:hidden flex items-center justify-center gap-5 text-tertiary-lightest-slate">
        <Link
          href="https://linkedin.com/in/fomonyuytar-joseph-56b323228"
          className="hover:text-secondary-green"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconRepository.LinkedInIcon />
        </Link>
        <Link
          href="https://twitter.com/FJoseph_dev"
          className="hover:text-secondary-green"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconRepository.TwitterIcon />
        </Link>
        <Link
          href="https://github.com/Fomonyuytar-Joseph"
          className="hover:text-secondary-green"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconRepository.GithubIcon />
        </Link>
      </div>

      <div className="mt-3 text-center font-mono text-xs text-tertiary-light-slate">
        <p>Built by Fomonyuytar Joseph &copy; {new Date().getFullYear()}</p>
        <p className="mt-2">
          credits to Brittany Chiang for the design inspiration
        </p>
      </div>
    </div>
  );
}

export default FooterOrganism;