import React from 'react'
import Image, { StaticImageData } from 'next/image';
import ProjectInfo from '../projectInfo/projectInfo.molecule';


interface RightOrientationProjectCardProps {
  title: string;
  description: string;
  github?: string;
  externalLink?: string;
  tools: string[];
  image: StaticImageData;
}

const RightOrientationProjectCard:React.FC<RightOrientationProjectCardProps> = ({
    title,
  description,
  github,
  externalLink,
  tools,
  image
}) => {
  return (
    <div className="relative w-full">
      <div className="">
        {/* Image Wrapper */}
        <div className="relative w-[520px]  overflow-hidden transition-transform duration-300 ">
          {/* Original Image */}
          <Image
            src={image}
            alt={image.src}
            objectFit="cover"
            className="transition duration-300 "
          />

          {/* Green Overlay */}
          <div className="absolute inset-0 bg-secondary-green mix-blend-multiply transition-opacity duration-300 opacity-100 group-hover:opacity-0 "></div>
        </div>
      </div>
      <div className="absolute top-0 right-[-120px] ">
        <ProjectInfo
          title={title}
          description={description}
          externalLink={externalLink}
          github={github}
          tools={tools}
        />
      </div>
    </div>
  );
}

export default RightOrientationProjectCard