import type { HomeCard } from "../interfaces";
import { HomeIcons } from "./HomeIcons";

export function HomeCard({ title, description, iconName }: HomeCard) {
  return (
    <article>
      <HomeIcons iconName={iconName}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
