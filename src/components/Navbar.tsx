import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const { asPath } = useRouter();
  return (
    <nav>
      <Link href="/" aria-current={asPath === "/" ? "page" : undefined}>
        about me
      </Link>
      <Link
        href="projects"
        aria-current={asPath === "/projects" ? "page" : undefined}
      >
        projects
      </Link>
      <Link
        href="education"
        aria-current={asPath === "/education" ? "page" : undefined}
      >
        education
      </Link>
    </nav>
  );
};

export default Navbar;
