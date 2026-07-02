function Experience() {
  return (
    <section id="experience" className="bg-slate-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold mb-3">Expérience</p>
          <h2 className="text-4xl font-bold mb-6">Parcours professionnel</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Expériences orientées analyse de données, reporting, gestion de
            l'information et support à la décision.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
            <p className="text-blue-400 font-semibold mb-2">2026</p>
            <h3 className="text-2xl font-bold mb-3">
              Projets Data Analyst — Portfolio
            </h3>
            <p className="text-slate-400 leading-7">
              Réalisation de projets d'analyse de données sur des datasets réels :
              analyse exploratoire, visualisations, interprétations métier,
              recommandations et documentation GitHub.
            </p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
            <p className="text-blue-400 font-semibold mb-2">2025 - 2026</p>
            <h3 className="text-2xl font-bold mb-3">
              Formation Data & Systèmes d'Information
            </h3>
            <p className="text-slate-400 leading-7">
              Développement de compétences en Python, SQL, Power BI, analyse
              de données, visualisation, reporting et gestion de projets Data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;