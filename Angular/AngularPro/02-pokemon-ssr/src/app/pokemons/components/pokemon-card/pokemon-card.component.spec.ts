import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonCardComponent } from './pokemon-card.component';
import { provideRouter, RouterLink } from '@angular/router';
import { SimplePokemon } from '../../interfaces';
import { By } from '@angular/platform-browser';

const mockPokemon: SimplePokemon = {
  id: '1',
  name: 'bulbasaur'
}

describe('PokemonCardComponent', () => {
  let fixture: ComponentFixture<PokemonCardComponent>;
  let compiled: HTMLElement;
  let component: PokemonCardComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonCardComponent],
      providers: [provideZonelessChangeDetection(), provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonCardComponent);
    fixture.componentRef.setInput('pokemon', mockPokemon);
    compiled = fixture.nativeElement as HTMLElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have the SimplePokemon signal inputValue', () => {
    expect(component.pokemon()).toEqual(mockPokemon);
  });

  it('should render the pokemon name and image correctly', () => {
    const idElement = `#${mockPokemon.name}-${mockPokemon.id}`;
    const titlePokemon = compiled.querySelector(`${idElement}-title`) as HTMLHeadElement;
    const pokemonName = titlePokemon.innerText.toLowerCase().trim();

    expect(pokemonName).toBe(mockPokemon.name);

    const pokemonCard = compiled.querySelector(`${idElement}-card`) as HTMLDivElement;
    const imagePokemon = pokemonCard.querySelector('img') as HTMLImageElement;
    const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${mockPokemon.id}.png`

    expect(imagePokemon.src).toBe(urlImage);

  });

  it('should have a routerLink pointing to the correct pokemon', () => {
    const idElement = `#${mockPokemon.name}-${mockPokemon.id}-card`;
    const pokemonCard = compiled.querySelector(idElement);

    const routerLinkDebugElement = fixture.debugElement.query(
      By.directive(RouterLink)
    );

    expect(routerLinkDebugElement).not.toBeNull();

    expect(routerLinkDebugElement.nativeElement).toBe(pokemonCard);
  });
});
