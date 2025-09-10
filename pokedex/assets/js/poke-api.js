 const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

  return fetch(url)
    .then(response => response.json())
    .then(jsonBody => jsonBody.results)
    .then(pokemonList => Promise.all(
      pokemonList.map(pokemon => fetch(pokemon.url).then(res => res.json()))
    ))
}


/*
 const pokeApi = {}

  pokeApi.getPokemons = async (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    const response = await fetch(url)
    const jsonBody = await response.json()
    const pokemonList = jsonBody.results
    return await Promise.all(
      pokemonList.map(pokemon => fetch(pokemon.url).then(res => res.json()))
    )
}


*/