import ProjectCard from "@/components/elements/ProjectCard";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/utils/translations";

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div className="page">
      {t.projects.project.map((p) => (
        <ProjectCard
          key={p.title}
          title={p.title}
          githubUrl={p.github}
          demoUrl={p.demo}
          list={p.list}
          description={p.description}
          cta={t.projects.cta}
        />
      ))}
    </div>
  );
};

export default Projects;
