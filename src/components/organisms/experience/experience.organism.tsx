"use client";
import HeadingBannerAtom from "@/components/atoms/headingBanner/headingBanner.atom";
import ListItem from "@/components/atoms/listItem/listItem.atom";
import TabPanel from "@/components/molecules/tabPanel/tabPanel.molecule";
import WorkHeader from "@/components/molecules/workHeader/workHeader.molecule";
import React, { useState } from "react";

const ExperienceOrganism = () => {
  const [activeIndex, setaActiveIndex] = useState(0);
  const experience = [
    {
      company: "Camsol",
      role: "Software Engineer",
      duration: "05/2023 - Present",
      duty: [
        "Collaborated with the frontend team at camsol.io, utilizing Next.js, Tailwind CSS, Sass,and Redux Toolkit to develop a robust payment gateway",
        "Spearheaded the development of payment functionalities, enabling users to make payments and facilitate money transfers and transactions",
        "Implemented new features and enhancements to improve the website's performance and accessibility.",
        "Implemented dashboards for admin, validators, initiators, and super admin dashboards, ensuring seamless navigation and efficient management of user transactions and data",
      ],
    },
    {
      company: "Digital Renter",
      role: "Software Intern",
      duration: "06/2022 - 01/2023",
      duty: [
        "contributed in the development of a Customer Relationship Management System using TypeScript, Redux Toolkit, Bootstrap, and Next.js, improving client interaction and data management efficiency",
        "Implemented a video upload feature in the React Native mobile app, enabling agents  to upload videos of vacant houses, enhancing the viewing experience for potential  tenants",
        "Leveraged deep linking technology to seamlessly integrate the application with  external links related to property listings, ensuring a smooth transition from web to  app for enhanced user engagement",
      ],
    },
    {
      company: "Nkwa",
      role: "Frontend Developer",
      duration: "01/2023 - 05/2023",
      duty: [
        "Spearheaded the development of the company's new website utilizing cutting-edge  technologies including TypeScript, Next.js, React, and Framer Motion to enhance user  engagement and attract a wider audience to the application",
        "Collaborated with the design team to create user-friendly interfaces and design systems.",
        "Contributed to the development and testing of Version 2 of the company's application  using React Native , focusing on feature enhancements and bug fixes to deliver a  seamless user experience.",
      ],
    },
  ];
  return (
    <div>
      <HeadingBannerAtom text="Where I’ve Worked" />
      <div className="w-full flex flex-col  md:flex-row gap-9 md:gap-4">
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
