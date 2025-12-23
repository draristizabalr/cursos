import { useRouter } from "../hooks/useRouter";

export function Link({
  href,
  children,
  ...props
}: React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>>) {
  const { navigateTo } = useRouter();

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    navigateTo(href);
  }

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
