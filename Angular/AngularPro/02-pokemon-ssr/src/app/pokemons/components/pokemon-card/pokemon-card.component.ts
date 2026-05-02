import { Component, computed, effect, input } from '@angular/core';
import { SimplePokemon } from '../../interfaces';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'pokemon-card',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './pokemon-card.component.html',
})
export class PokemonCardComponent {
  // Inputs
  pokemon = input.required<SimplePokemon>();

  // Computed
  readonly pokemonImage = computed(
    () =>
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemon().id}.png`,
  );

  // constructor() {
  //   effect(() => {
  //     console.log('PokemonCard: ', this.pokemon());
  //   });
  // }
}
