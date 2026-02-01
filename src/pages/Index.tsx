import HeroSection from "@/components/resume/HeroSection";
import ExperienceSection from "@/components/resume/ExperienceSection";
import SkillsSection from "@/components/resume/SkillsSection";
import ProjectsSection from "@/components/resume/ProjectsSection";
import EducationSection from "@/components/resume/EducationSection";
import AboutSection from "@/components/resume/AboutSection";
import FooterSection from "@/components/resume/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <AboutSection />
      <FooterSection />
    </div>
  );
};

export default Index;