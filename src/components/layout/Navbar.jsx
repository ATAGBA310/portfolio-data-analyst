import { useState, useEffect } from "react";

function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const links = [
    { label: "À propos", href: "#about" },
    { label: "Compétences", href: "#skills" },
    { label: "Projets", href: "#projects" },
    { label: "Expérience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  return (

    <header
      className={`
      fixed
      top-0
      left-0
      w-full
      z-50
      transition-all
      duration-500

      ${
        scrolled
          ? "bg-slate-950/85 backdrop-blur-xl border-b border-slate-800 shadow-xl"
          : "bg-transparent"
      }
      `}
    >

      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-8">

        <a
          href="#"
          className="text-2xl font-black tracking-wide"
        >
          <span className="text-white">
            Abidé
          </span>

          <span className="text-blue-500">
            {" "}TAGBA
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">

          {links.map((item) => (

            <a
              key={item.label}
              href={item.href}
              className="
              relative
              text-slate-300
              hover:text-white
              transition

              after:absolute
              after:left-0
              after:-bottom-2
              after:h-[2px]
              after:w-0
              after:bg-blue-500
              hover:after:w-full
              after:transition-all
              after:duration-300
              "
            >
              {item.label}
            </a>

          ))}

        </nav>

        <a
            href="/documents/cv-abide-tagba.pdf"
            target="_blank"
            rel="noreferrer"
            className="
              hidden
              md:flex
              bg-blue-600
              hover:bg-blue-700
              px-5
              py-3
              rounded-xl
              transition
              font-semibold
            "
        >
  Télécharger CV
</a>

      </div>

    </header>

  );

}

export default Navbar;