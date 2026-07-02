import FadeIn from "../animations/FadeIn";

function Stats() {
  const stats = [
    {
      value: "307K+",
      label: "Demandes de crédit analysées",
    },
    {
      value: "700K",
      label: "Événements e-commerce analysés",
    },
    {
      value: "2",
      label: "Projets Data publiés",
    },
    {
      value: "11",
      label: "Technologies maîtrisées",
    },
  ];

  return (
    <FadeIn>
      <section className="bg-slate-950 py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {stats.map((stat) => (

              <div
                key={stat.label}
                className="
                  bg-slate-900
                  border
                  border-slate-800
                  rounded-3xl
                  p-8

                  hover:border-blue-500
                  hover:-translate-y-2
                  hover:shadow-xl
                  hover:shadow-blue-500/10

                  transition-all
                  duration-300
                "
              >

                <h2 className="text-5xl font-black text-blue-400 mb-4">
                  {stat.value}
                </h2>

                <p className="text-slate-400 leading-7">
                  {stat.label}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>
    </FadeIn>
  );
}

export default Stats;