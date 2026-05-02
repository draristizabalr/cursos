import { useRouter } from "../hooks/useRouter";
import style from "../css/link.module.css";

export function Link({
  href,
  children,
  activeAnimation = true,
  ...props
}: React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>> & {
  activeAnimation?: boolean;
}) {
  const { navigateTo, currentPath } = useRouter();

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    navigateTo(href);
  }

  const isActive =
    currentPath === href && activeAnimation ? style["link-active"] : "";

  return (
    <a href={href} onClick={handleClick} {...props} className={isActive}>
      {children}
    </a>
  );
}
