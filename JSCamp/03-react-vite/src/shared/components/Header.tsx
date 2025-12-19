import { HeaderLink } from "../interfaces/header-link";
import { DevJobsAvatar } from "./DevJobsAvatar";

export function Header() {
  const headerLinks: HeaderLink[] = [
    { href: "/", label: "Inicio" },
    { href: "/search", label: "Empleos" },
  ];
  
  return (
    <header>
      <a href="/" style={{ textDecoration: "none" }}>
        <h1 style={{ color: "white" }}>
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          DevJobs
        </h1>
      </a>
      <nav>
        {headerLinks.map(({ href, label }) => (
          <a href={href}>{label}</a>
        ))}
      </nav>

      <div>
        <DevJobsAvatar />
      </div>
    </header>
  );
}
