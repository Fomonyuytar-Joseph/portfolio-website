import { IconRepository } from '@/lib/repository/icons/icon.repository';
import Link from 'next/link';
import React from 'react';

const SocialHandles = () => {
  return (
    <div className="fixed bottom-0 left-auto flex flex-col items-center space-y-6">
      <Link href="https://www.linkedin.com/in/fomonyuytar-joseph">
        <IconRepository.LinkedInIcon />
      </Link>
      <Link href="https://twitter.com/FJoseph_dev">
        <IconRepository.TwitterIcon />
      </Link>
      <Link href="/https://github.com/Fomonyuytar-Joseph">
        <IconRepository.GithubIcon />
      </Link>
      <div className="w-px h-24 bg-tertiary-light-slate" />
    </div>
  );
};

export default SocialHandles;
