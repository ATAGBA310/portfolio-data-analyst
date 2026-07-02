import FadeIn from "../animations/FadeIn";

function About() {
  return (
    <FadeIn>
      <section id="about" className="px-6 py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-400 font-semibold mb-3">À propos</p>

            <h2 className="text-4xl font-bold mb-6">
              Transformer les données en décisions.
            </h2>

            <p className="text-slate-300 leading-8 mb-6">
              Je suis Abidé TAGBA, Data Analyst orientée analyse métier,
              visualisation de données et aide à la décision.
            </p>

            <p className="text-slate-400 leading-8">
              Mon objectif est de comprendre les problématiques business,
              explorer les données, identifier les tendances importantes et
              produire des recommandations claires et exploitables.
            </p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Domaines d’intérêt</h3>

            <div className="space-y-4 text-slate-300">
              <p>Analyse exploratoire des données</p>
              <p>Visualisation et reporting</p>
              <p>Analyse métier et recommandations</p>
              <p>Python, SQL et Power BI</p>
              <p>Machine Learning appliqué au scoring</p>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}

export default About;