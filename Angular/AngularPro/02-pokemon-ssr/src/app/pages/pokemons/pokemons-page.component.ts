import {
  ApplicationRef,
  Component,
  computed,
  inject,
  OnInit,
} from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { PokemonListSkeletonComponent } from './UI/pokemon-list-skeleton/pokemon-list-skeleton.component';
import { PokemonListComponent } from 'src/app/pokemons/components/pokemon-list/pokemon-list.component';
import { PokemonsService } from 'src/app/pokemons/services/pokemons.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-pokemons-page',
  imports: [
    // PokemonListSkeletonComponent,
    PokemonListComponent,
    PokemonListSkeletonComponent
],
  templateUrl: `./pokemons-page.component.html`,
})
export default class PokemonsPageComponent implements OnInit {
  // Injects
  private pokemonsService = inject<PokemonsService>(PokemonsService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  // Signals
  currentPage = toSignal(
    this.route.params.pipe(
      map((params) => params['page'] ?? '1'),
      map((page) => (isNaN(+page) ? 1 : +page)),
      map((page) => Math.max(1, page)),
    ),
  );

  // Resources
  pokemonsResources = rxResource({
    params: () => ({ page: this.currentPage() ?? 1 }),
    stream: ({ params }) => this.pokemonsService.loadPage(params.page),
  });

  // Computed
  pokemons = computed(() => this.pokemonsResources.value() ?? []);
  isLoading = computed(() => this.pokemonsResources.isLoading());

  // private appRef = inject(ApplicationRef);
  // private $appState = this.appRef.isStable.subscribe( isStable => {
  //   console.log({ isStable });
  // })

  ngOnInit(): void {
    // this.loadPokemons();
    // setTimeout(() => {
    //   this.isLoading.set(false);
    // }, 5000);
  }

  loadPokemons(page = 0) {
    let pageToLoad = this.currentPage()! + page;

    if (pageToLoad < 1) {
      this.router.navigate(['/pokemons', 'page', 1]);
      pageToLoad = 1;
    }

    this.router.navigate(['/pokemons', 'page', pageToLoad]);
  }
}
