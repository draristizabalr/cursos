import { HomeBrand } from "./components/HomeBrand";
import { HomeDescription } from "./components/HomeDescription";

export function HomePage() {
  const brandTitle = 'Encuentra el trabajo de tus sueños';
  const brandDescription = 'Únete a la comunidad más grande de desarrolladores y encuentra tu próxima oportunidad';

  const descriptionTitle = "¿Por qué DevJobs?";
  const descriptionDescription =
    "DevJobs es la principal plataforma de búsqueda de empleo para desarrolladores. Conectamos a los mejores talentos con las empresas más innovadoras.";

  return (
    <main>
      <HomeBrand
        title={brandTitle}
        description={brandDescription}
      />

      <HomeDescription title={descriptionTitle} description={descriptionDescription} />
    </main>
  );
}
