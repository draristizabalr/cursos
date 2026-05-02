import { useRouter } from "../hooks/useRouter";

interface RouteProps {
  path: string;
  component: React.ComponentType;
}

export function Router({ path, component: Component }: RouteProps) {
  const { currentPath } = useRouter();

  if (currentPath !== path) {
    return null;
  }

  return <Component />;
}
