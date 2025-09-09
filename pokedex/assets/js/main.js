function converterPokemonToLi(pokemon) {
    console.log(pokemon)
    const types = pokemon.types.map(type => `<li class="type">${type.type.name}</li>`).join('')

    return `
    <li class="pokemon">
        <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">${types}</ol>
            <img src="${pokemon.sprites.other.dream_world.front_default}" alt="Pokemon ${pokemon.name} stands in a neutral pose. Types: ${pokemon.types.map(type => type.type.name).join(', ')}. Number ${pokemon.id.toString().padStart(3, '0')} and name ${pokemon.name} are displayed. The environment is a digital card layout with a calm tone." />
        </div>
    </li>
    `
//map(type => `<li class="type">${type.type.name}</li>`)
}

const pokemonList = document.getElementById('pokemonList')
pokeApi.getPokemons(0, 10).then((pokemons => {
    const newHtml = pokemons.map(converterPokemonToLi).join('')
    pokemonList.innerHTML += newHtml
}))