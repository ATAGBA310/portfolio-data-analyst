function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold">
            Abidé <span className="text-blue-500">TAGBA</span>
          </h3>
          <p className="text-slate-400 mt-2">
            Data Analyst | Python | Power BI | SQL
          </p>
        </div>

        <div className="flex gap-6 text-slate-400">
          <a href="#about" className="hover:text-blue-400 transition">
            À propos
          </a>
          <a href="#projects" className="hover:text-blue-400 transition">
            Projets
          </a>
          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>
        </div>

        <p className="text-slate-500 text-sm">
          © 2026 Abidé TAGBA. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;