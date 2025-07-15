const POKEMONS_TOTAL = 151;
const PAGES_POKEMONS = 5;
const POKEMONS_LIMIT = 151;

(async () => {
  const fs = require('fs');

  const pokemonsId = Array.from({ length: POKEMONS_TOTAL }, (_, i) => i + 1);
  const pagesPokemons = Array.from({ length: PAGES_POKEMONS }, (_, i) => i + 1);


  let fileContent = pokemonsId.map((id) => `/pokemon/${id}`).join('\n');
  fileContent += '\n';
  fileContent += pagesPokemons.map((page) => `/pokemons/page/${page}`).join('\n');

  const pokemonNameList = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${POKEMONS_LIMIT}`)
    .then( (res) => res.json());

  fileContent += '\n';
  fileContent += pokemonNameList.results.map((pokemon) => `/pokemon/${pokemon.name}`).join('\n');

  fs.writeFileSync('routes.txt', fileContent);


  console.log('routes.txt generated');
})();

