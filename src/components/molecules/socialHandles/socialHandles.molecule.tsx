import { IconRepository } from '@/lib/repository/icons/icon.repository';
import Link from 'next/link';
import React from 'react';

const SocialHandles = () => {
  return (
    <div className="hidden fixed bottom-0 left-[72px] xl:left-[51px] 2xl:left-[72px] lg:flex flex-col items-center space-y-12 text-tertiary-lightest-slate">
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
      <div className="w-px h-24 bg-tertiary-light-slate" />
    </div>
  );
};

export default SocialHandles;
