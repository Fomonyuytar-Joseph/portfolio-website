import FolderIcon from '@/icons/folder.icon';
import React from 'react';

const HeroSectionOrganism = () => {
  return (
    <div>
      <h1 className="text-secondary-green font-normal text-base mb-8 ">
        Hi ,my name is
      </h1>
      <h2 className="text-tertiary-lightest-slate font-semibold text-6xl ">
        Fomonyuytar Joseph
      </h2>
      <h3 className="text-tertiary-slate mt-5 text-6xl font-semibold ">
        Frontend Developer
      </h3>
      <p className="mt-5 max-w-[600px] text-tertiary-slate text-xl font-normal">
        I’m a passionate software engineer dedicated to crafting clean,
        accessible, and user-centered digital experiences. I specialize in
        building seamless, high-performance applications and take pride in
        creating web solutions that combine innovation, simplicity, and
        creativity.
      </p>
      <FolderIcon/>
    </div>
  );
};

export default HeroSectionOrganism;
