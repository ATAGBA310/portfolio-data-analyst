import skills from "../../data/skills";
import FadeIn from "../animations/FadeIn";

function Skills() {
  return (
    <FadeIn>
      <section id="skills" className="bg-slate-950 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-400 font-semibold mb-3">Compétences</p>

            <h2 className="text-4xl font-bold mb-6">
              Technologies et outils
            </h2>

            <p className="text-slate-400 max-w-2xl mx-auto">
              Les outils que j'utilise pour explorer, analyser, visualiser et
              valoriser les données.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.name}
                  className="group bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col items-center gap-4 hover:border-blue-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
                >
                  <Icon className="text-4xl text-blue-400 group-hover:scale-110 transition-transform duration-300" />

                  <span className="font-semibold text-slate-200">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}

export default Skills;