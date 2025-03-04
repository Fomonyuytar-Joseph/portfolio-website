"use client";
import HeadingBannerAtom from "@/components/atoms/headingBanner/headingBanner.atom";
import ListItem from "@/components/atoms/listItem/listItem.atom";
import TabPanel from "@/components/molecules/tabPanel/tabPanel.molecule";
import WorkHeader from "@/components/molecules/workHeader/workHeader.molecule";
import React, {useState} from "react";

const ExperienceOrganism = () => {
  const [activeIndex, setaActiveIndex] = useState(0);
  const experience = [
    {
      company: "Camsol",
      role: "Software Engineer",
      duration: "2022 - Present",
      duty: [
        "Developed and maintained the company's website using React.js, Next.js, and Tailwind CSS.",
        "Collaborated with the design team to create user-friendly interfaces and design systems.",
        "Implemented new features and enhancements to improve the website's performance and accessibility.",
        "Worked with the backend team to integrate APIs and manage data flow between the client and server.",
      ],
    },
    {
      company: "Nkwa",
      role: "Frontend Developer",
      duration: "2022 - 2023",
      duty: [
        "Developed and maintained the company's website using React.js, Next.js, and Tailwind CSS.",
        "Collaborated with the design team to create user-friendly interfaces and design systems.",
        "Implemented new features and enhancements to improve the website's performance and accessibility.",
        "Worked with the backend team to integrate APIs and manage data flow between the client and server.",
      ],
    },
    {
      company: "Digital Renter",
      role: "Software Intern",
      duration: "2022 - 2023",
      duty: [
        "Developed and maintained the company's website using React.js, Next.js, and Tailwind CSS.",
        "Collaborated with the design team to create user-friendly interfaces and design systems.",
        "Implemented new features and enhancements to improve the website's performance and accessibility.",
        "Worked with the backend team to integrate APIs and manage data flow between the client and server.",
      ],
    },
  ];
  return (
    <div>
      <HeadingBannerAtom text="Where I’ve Worked" />
      <div className="w-full flex gap-4">
        <TabPanel activeIndex={activeIndex} setActiveIndex={setaActiveIndex} />
        <div>
          <div>
            <WorkHeader
              position={experience[activeIndex].role}
              company={experience[activeIndex].company}
              duration={experience[activeIndex].duration}
            />
            <ul>
              {experience[activeIndex].duty.map((duty, index) => (
                <ListItem key={index} label={duty} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceOrganism;
