function converterPokemonToLi(pokemon) {
    const types = pokemon.types.map(type => `<li class"type">${type.types.name}</li>`).join('')

    return `
    <li class="pokemon">
        <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
        <span class="name">${pokemon.name}}</span>
        <div class="detail">
            <ol clas="types">${types}</ol>
            <img src="${pokemon.sorites.other.dream_world.front_default}" alt="${pokemon.name}" />
        </div>
    </li>
    `

}

const pokemonList = document.getElementById('pokemonList')
pokeApi.getPokemons(0, 10).then((pokemons => {
    const newHtml = pokemons.map(converterPokemonToLi).join('')
    pokemonList.innerHTML += newHtml
}))