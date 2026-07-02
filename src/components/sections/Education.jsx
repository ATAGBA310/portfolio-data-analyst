import FadeIn from "../animations/FadeIn";

function Education() {
  const education = [
    {
      period: "2024 - 2026",
      title: "Master Systèmes d’Information & Management de la Data",
      school: "EFFICOM, Lille",
      description:
        "Formation orientée data management, analyse de données, systèmes d’information, reporting et aide à la décision.",
    },
    {
      period: "2023 - 2024",
      title: "Cycle Ingénieur Informatique",
      school: "UTBM, Belfort",
      description:
        "Renforcement des compétences en informatique, programmation, bases de données et systèmes numériques.",
    },
    {
      period: "2021 - 2022",
      title: "Licence Professionnelle Développement Web",
      school: "IPNET, Lomé",
      description:
        "Formation en développement web, bases de données et conception d’applications.",
    },
    {
      period: "2015 - 2020",
      title: "Licence Mathématiques Appliquées à l’Informatique",
      school: "Université de Kara",
      description:
        "Formation en mathématiques, algorithmique, informatique et raisonnement analytique.",
    },
  ];

  return (
    <FadeIn>
      <section id="education" className="bg-slate-900 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-400 font-semibold mb-3">Formation</p>

            <h2 className="text-4xl font-bold mb-6">
              Parcours académique
            </h2>

            <p className="text-slate-400 max-w-2xl mx-auto">
              Un parcours construit autour des systèmes d’information, de
              l’informatique, de l’analyse de données et de la gestion de projets.
            </p>
          </div>

          <div className="relative border-l border-slate-700 ml-4">
            {education.map((item) => (
              <div key={item.title} className="mb-10 ml-8">
                <div className="absolute -left-2.5 h-5 w-5 rounded-full bg-blue-500 border-4 border-slate-900"></div>

                <p className="text-blue-400 font-semibold mb-2">
                  {item.period}
                </p>

                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-blue-500 transition">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>

                  <p className="text-slate-300 font-medium mb-3">
                    {item.school}
                  </p>

                  <p className="text-slate-400 leading-7">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}

export default Education;