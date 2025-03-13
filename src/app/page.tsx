import EmailHandle from "@/components/molecules/emailHandle/emailHandle.atom";
import Navbar from "@/components/molecules/navbar/navabar.molecule";
import SocialHandles from "@/components/molecules/socialHandles/socialHandles.molecule";
import AboutMeTemplate from "@/components/templates/aboutMe/AboutMe.template";
import ContactMeTemplate from "@/components/templates/contactMe/contactMe.template";
import ExperienceTemplate from "@/components/templates/experience/experience.template";
import HeroSectionTemplate from "@/components/templates/hero/heroSection.template";
import NoteWorthyProjectsTemplate from "@/components/templates/noteWorthyProjects/noteWorthyProjects.template";

export default function Home() {
  return (
    <div className="w-full bg-primary-navy relative">
      <div className="fixed top-0 left-0 px-12 w-full">
        <Navbar />
      </div>

      <div className="w-[600px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1200px] mx-auto 2xl:px-[100px] mt-[102px] h-[calc(100dvh-102px)] ">
        <HeroSectionTemplate />
      </div>

      <div className="w-[600px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1200px] mx-auto 2xl:px-[100px] mt-[102px] ">
        <AboutMeTemplate />
      </div>

      <div className="w-[600px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1200px] mx-auto 2xl:px-[100px] mt-[170px] 2xl:mr-[200px]">
        <ExperienceTemplate />
      </div>
      <div className="w-[600px] lg:w-[800px] xl:w-[1100px] 2xl:w-[1200px] mx-auto mt-[102px] ">
        <NoteWorthyProjectsTemplate />
      </div>
      <div className="w-[600px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1200px] mx-auto 2xl:px-[100px] mt-[202px] mb-[200px] ">
        <ContactMeTemplate/>
      </div>

      <SocialHandles />
      <EmailHandle />
    </div>
  );
}
