import { TestBed } from "@angular/core/testing";
import { routes } from "./app.routes";
import { provideRouter, Router } from "@angular/router";
import { Location } from "@angular/common";
import { provideZonelessChangeDetection } from "@angular/core";

describe('App Routes', () => {
  let router: Router;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes), provideZonelessChangeDetection()]
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

  });

  it('should navigate to "about" redirects to "/about"', async () => {
    await router.navigate(['about']);
    expect(location.path()).toBe('/about');
  });

  it('should navigate to "pricing" redirects to "/pricing"', async () => {
    await router.navigate(['pricing']);
    expect(location.path()).toBe('/pricing');
  });

  it('should navigate to "contact" redirects to "/contact"', async () => {
    await router.navigate(['contact']);
    expect(location.path()).toBe('/contact');
  });

  it('should navigate to "pokemons/page/1" redirects to "/pokemons/page/1"', async () => {
    await router.navigate(['pokemons', 'page', '1']);
    expect(location.path()).toBe('/pokemons/page/1');
  });

  it('should navigate to "unknwon-page" redirects to "/pokemons/page/1"', async () => {
    await router.navigate(['unknwon-page']);
    expect(location.path()).toBe('/pokemons/page/1');
  });

  it('should load the proper component', async () => {
    const aboutRoute = routes.find(( route ) => route.path === 'about')!;
    expect(aboutRoute).toBeDefined();

    const aboutComponent = await aboutRoute.loadComponent!() as any;
    expect(aboutComponent.default.name).toBe('AboutPageComponent2');

    const pokemonsRoute = routes.find((route) => route.path === 'pokemons/page/:page')!;
    expect(pokemonsRoute).toBeDefined();

    const pokemonsComponent = await pokemonsRoute.loadComponent!() as any;
    expect(pokemonsComponent.default.name).toBe('PokemonsPageComponent2');
  });
});
