function ProjectCard({ project }) {
  return (
    <article className="group bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
      <div className="relative h-64 overflow-hidden bg-slate-900">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-contain p-5 group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute top-4 left-4">
          <span className="rounded-full bg-blue-600/90 px-4 py-1 text-xs font-bold tracking-wider text-white">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition">
          {project.title}
        </h3>

        <p className="text-slate-400 leading-7 mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-slate-900 border border-slate-700 text-blue-300 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-700 transition"
          >
            GitHub
          </a>

          <a
            href={project.presentation}
            className="rounded-xl border border-slate-600 px-5 py-3 font-semibold hover:border-blue-500 hover:text-blue-400 transition"
          >
            Présentation
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;