import { useRouter } from "@shared/hooks/useRouter";
import { HomeIcons } from "./HomeIcons";

interface HomeBrandProps {
  title: string;
  description: string;
}

export function HomeBrand({ title, description }: HomeBrandProps) {
  const { navigateTo } = useRouter();

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const searchTerm = formData.get("search");

    const url = searchTerm ? `/search?term=${searchTerm}` : "/search";
    navigateTo(url);
  }

  return (
    <section>
      <img src="/images/background.webp" />
      <h1>{title}</h1>
      <p>{description}</p>
      <form role="search" onSubmit={handleSearch}>
        <div>
          <HomeIcons iconName="search" />

          <input
            type="text"
            placeholder="Buscar empleos por título, habilidad o empresa"
            name="search"
          />
          <button value="Buscar">Buscar</button>
        </div>
      </form>
    </section>
  );
}
