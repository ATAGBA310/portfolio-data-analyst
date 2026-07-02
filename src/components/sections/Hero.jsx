function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 pt-24">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_40%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-blue-300 text-sm font-medium mb-8">
            Portfolio Data Analyst
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-tight mb-6">
            Abidé <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              TAGBA
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-8">
            Data Analyst | Python | Power BI | SQL
          </h2>

          <p className="max-w-2xl text-xl leading-9 text-slate-400 mb-12">
            Transformer les données en informations exploitables pour aider les
            entreprises à mieux comprendre leurs performances, leurs clients et
            leurs opportunités de croissance.
          </p>

          <div className="flex flex-wrap gap-5">
            <a
              href="#projects"
              className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
            >
              Découvrir mes projets →
            </a>

            <a
              href="https://github.com/ATAGBA310"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-700 px-8 py-4 text-lg font-semibold hover:border-blue-500 hover:text-blue-400 hover:-translate-y-1 transition-all duration-300"
            >
              Voir GitHub
            </a>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="relative bg-slate-900/70 border border-slate-700 rounded-3xl p-8 shadow-2xl shadow-blue-500/10">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800 rounded-2xl p-6">
                <p className="text-4xl font-black text-blue-400">2</p>
                <p className="text-slate-400 mt-2">Projets Data publiés</p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-6">
                <p className="text-4xl font-black text-blue-400">307K+</p>
                <p className="text-slate-400 mt-2">
                  Demandes de crédit analysées
                </p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-6">
                <p className="text-4xl font-black text-blue-400">700K</p>
                <p className="text-slate-400 mt-2">
                  Événements e-commerce analysés
                </p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-6">
                <p className="text-4xl font-black text-blue-400">11</p>
                <p className="text-slate-400 mt-2">Technologies & outils</p>
              </div>
            </div>

            <div className="mt-6 bg-blue-600/10 border border-blue-500/20 rounded-2xl p-6">
              <p className="text-slate-300 leading-7">
                Analyse exploratoire, visualisation, storytelling data et
                recommandations métier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;