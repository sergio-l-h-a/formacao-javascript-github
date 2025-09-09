 const pokeApi = {}

// pokeApi.getPokemons = (offset = 0, limit = 10) => {
//        const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

//        return fetch(url)
//                 .then((response) => response.json())
//                 .then((jsonBody) => jsonBody.results)
//                 .then((pokemons) => pokemons.map(pokemon => fetch(pokemon.url)
//                 .then((res => res.json()))
//                 .catch((error) => console.error('Erro ao buscar pokemon: ', error))))
// }

pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

  return fetch(url)
    .then(response => response.json())
    .then(jsonBody => jsonBody.results)
    .then(pokemonList => Promise.all(
      pokemonList.map(pokemon => fetch(pokemon.url).then(res => res.json()))
    ))
}
