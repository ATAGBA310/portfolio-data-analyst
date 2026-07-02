import projects from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import FadeIn from "../animations/FadeIn";


function Projects() {
  return (
    <FadeIn>
    <section id="projects" className="bg-slate-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold mb-3">
            Projets
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Projets Data Analyst
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Une sélection de projets réalisés sur des jeux de données réels,
            avec une approche orientée analyse métier, visualisation et
            recommandations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
    </FadeIn>
  );
}

export default Projects;