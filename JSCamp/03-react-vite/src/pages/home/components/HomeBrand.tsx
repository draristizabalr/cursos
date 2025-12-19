import { HomeIcons } from "./HomeIcons";

interface HomeBrandProps {
  title: string;
  description: string;
}

export function HomeBrand({ title, description }: HomeBrandProps) {
  return (
    <section>
      <img src="/images/background.webp" />
      <h1>{title}</h1>
      <p>{description}</p>
      <form role="search">
        <div>
          <HomeIcons iconName='search'/>

          <input
            type="text"
            placeholder="Buscar empleos por título, habilidad o empresa"
          />
          <button value="Buscar">Buscar</button>
        </div>
      </form>
    </section>
  );
}
