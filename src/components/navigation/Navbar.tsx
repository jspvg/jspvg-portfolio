import Link from "next/link";
import { useRouter } from "next/router";
import ToggleTheme from "../toggles/ToggleTheme";
import ToggleLanguage from "../toggles/ToggleLanguage";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/utils/translations";
import { useState } from "react";

const Navbar = () => {
  const { asPath } = useRouter();
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[language];
  return (
    <div className="navigation">
      <ToggleLanguage />
      <div className="menu">
        <button onClick={() => setIsOpen(!isOpen)} className="menuBtn">
          {isOpen ? `${t.toggle.close}` : `${t.toggle.menu}`}
        </button>
        <nav className={isOpen ? "open" : ""}>
          <Link href="/" aria-current={asPath === "/" ? "page" : undefined}>
            {t.about.title}
          </Link>
          <Link
            href="projects"
            aria-current={asPath === "/projects" ? "page" : undefined}
          >
            {t.projects.title}
          </Link>
          <Link
            href="education"
            aria-current={asPath === "/education" ? "page" : undefined}
          >
            {t.education.title}
          </Link>
        </nav>
      </div>

      <ToggleTheme />
    </div>
  );
};

export default Navbar;
