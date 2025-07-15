import { NgOptimizedImage } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { Pokemon } from 'src/app/pokemons/interfaces';
import { PokemonsService } from 'src/app/pokemons/services/pokemons.service';

@Component({
  selector: 'pokemon-page',
  imports: [NgOptimizedImage],
  templateUrl: './pokemon-page.component.html',
})
export default class PokemonPageComponent {
  // Inject
  private pokemonsService = inject(PokemonsService);
  private route = inject(ActivatedRoute);
  private title = inject(Title);
  private meta = inject(Meta);

  // Resources
  pokemonResource = rxResource({
    params: () => ({ id: this.route.snapshot.paramMap.get('id') }),
    stream: ({ params }) => this.pokemonsService.loadPokemon(params.id ?? ''),
  });

  // Computed
  pokemon = computed(() => this.pokemonResource.value());
  isLoading = computed(() => this.pokemonResource.isLoading());
  hasValue = computed(() => this.pokemonResource.hasValue());
}
