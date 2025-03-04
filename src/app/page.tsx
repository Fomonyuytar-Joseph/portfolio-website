import EmailHandle from "@/components/molecules/emailHandle/emailHandle.atom";
import Navbar from "@/components/molecules/navbar/navabar.molecule";
import SocialHandles from "@/components/molecules/socialHandles/socialHandles.molecule";
import AboutMeTemplate from "@/components/templates/aboutMe/AboutMe.template";
import ExperienceTemplate from "@/components/templates/experience/experience.template";
import HeroSectionTemplate from "@/components/templates/hero/heroSection.template";

export default function Home() {
  return (
    <div className="w-full bg-primary-navy relative">
      <div className="fixed top-0 left-0 px-12 w-full">
        <Navbar />
      </div>

      <div className="w-[600px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1200px] mx-auto 2xl:px-[100px] mt-[102px] h-[calc(100dvh-102px)] ">
        <HeroSectionTemplate />
      </div>

      <div className="w-[600px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1200px] mx-auto 2xl:px-[100px] mt-[102px] h-screen ">
        <AboutMeTemplate />
      </div>

      <div className="w-[600px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1200px] mx-auto 2xl:px-[100px] mt-[102px] h-screen">
        <ExperienceTemplate />
      </div>
      <SocialHandles />
      <EmailHandle />
    </div>
  );
}
