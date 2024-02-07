import Link from "next/link";
import { useRouter } from "next/router";
import ToggleTheme from "./ToggleTheme";
import ToggleLanguage from "./ToggleLanguage";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/utils/translations";

const Navbar = () => {
  const { asPath } = useRouter();
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div className="navigation">
      <ToggleLanguage />
      <nav>
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
      <ToggleTheme />
    </div>
  );
};

export default Navbar;
