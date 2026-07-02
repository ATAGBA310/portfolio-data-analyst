function Contact() {
  const contacts = [
    {
      label: "Email",
      value: "abide.tagb@gmail.com",
      href: "mailto:abide.tagb@gmail.com",
    },
    {
      label: "GitHub",
      value: "github.com/ATAGBA310",
      href: "https://github.com/ATAGBA310",
    },
    {
      label: "LinkedIn",
      value: "Profil LinkedIn",
      href: "https://www.linkedin.com/in/abid%C3%A9-tagba-982319234/",
    },
    {
      label: "Localisation",
      value: "France entière",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="bg-slate-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold mb-3">Contact</p>
          <h2 className="text-4xl font-bold mb-6">Travaillons ensemble</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Disponible pour des opportunités en Data Analysis, Business
            Intelligence, reporting et projets orientés aide à la décision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : "_self"}
              rel="noreferrer"
              className="bg-slate-900 border border-slate-800 rounded-3xl p-7 hover:border-blue-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 font-bold">
                {item.label.charAt(0)}
              </div>

              <p className="text-slate-400 text-sm mb-2">{item.label}</p>

              <p className="text-white font-semibold break-words">
                {item.value}
              </p>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
          >
            Télécharger mon CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;