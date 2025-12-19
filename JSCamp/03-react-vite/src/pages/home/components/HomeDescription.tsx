import { HomeCard } from "./HomeCard";
import { HOME_CARDS } from "../constants/home-description";

interface HomeDescriptionProps {
  title: string;
  description: string;
}

export function HomeDescription({ title, description }: HomeDescriptionProps) {
  return (
    <section>
      <header>
        <h2>{title}</h2>
        <p>
          {description}
        </p>
      </header>

      <footer>
        {
          HOME_CARDS.map(({ title, description, iconName }) => (
            <HomeCard
              key={title}
              title={title}
              description={description}
              iconName={iconName}
            />
          ))
        }
      </footer>
    </section>
  );
}
