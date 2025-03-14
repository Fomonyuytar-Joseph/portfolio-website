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
      <Navbar />

      <div className="w-full flex flex-col items-center mt-[120px]">
        <section id="home" className="section">
          <HeroSectionTemplate />
        </section>

        <section id="about" className="section">
          <AboutMeTemplate />
        </section>

        <section id="experience" className="section">
          <ExperienceTemplate />
        </section>

        <section id="work" className="section">
          <NoteWorthyProjectsTemplate />
        </section>

        <section id="contact" className="section">
          <ContactMeTemplate />
        </section>
      </div>

      <SocialHandles />
      <EmailHandle />
    </div>
  );
}
