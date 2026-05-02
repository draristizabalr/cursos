const { http } = require('../plugins')

const getPokemonById = async (id: number) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const result = await http.get(url)

  console.log(result.name);
};

getPokemonById(4);

module.exports = {
  getPokemonById
}