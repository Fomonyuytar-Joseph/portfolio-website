import { IconRepository } from '@/lib/repository/icons/icon.repository';
import Link from 'next/link';
import React from 'react';

const SocialHandles = () => {
  return (
    <div className="fixed bottom-0 left-[72px] flex flex-col items-center space-y-12 text-tertiary-lightest-slate">
      <Link
        href="https://www.linkedin.com/in/fomonyuytar-joseph"
        className="hover:text-secondary-green"
      >
        <IconRepository.LinkedInIcon />
      </Link>
      <Link
        href="https://twitter.com/FJoseph_dev"
        className="hover:text-secondary-green "
      >
        <IconRepository.TwitterIcon />
      </Link>
      <Link
        href="/https://github.com/Fomonyuytar-Joseph"
        className="hover:text-secondary-green"
      >
        <IconRepository.GithubIcon />
      </Link>
      <div className="w-px h-24 bg-tertiary-light-slate" />
    </div>
  );
};

export default SocialHandles;
