function converterPokemonToLi(pokemon) {
    console.log(pokemon)
    const types = pokemon.types.map(type => `<li class="type">${type.type.name}</li>`).join('')

    return `
    <li class="pokemon">
    <div class="detail">
            <ol class="types">
                <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
                <span class="name">${pokemon.name}</span>
                
            </ol>
            <img src="${pokemon.sprites.other.dream_world.front_default}" alt="Pokemon ${pokemon.name} stands in a neutral pose. Types: ${pokemon.types.map(type => type.type.name)
                .join(', ')}. Number ${pokemon.id.toString().padStart(3, '0')} and name ${pokemon.name} are displayed. The environment is a digital card layout with a calm tone." />
        </div>
    </li>
    `

}

const pokemonList = document.getElementById('pokemonList')
pokeApi.getPokemons(0, 10).then((pokemons => {
    const newHtml = pokemons.map(converterPokemonToLi).join('')
    pokemonList.innerHTML = newHtml
    
    const pokemonItems = document.querySelectorAll('.pokemon')
    pokemonItems.forEach((item , index) => {
        item.addEventListener('click', () => {
            showPokemonDetails(pokemons[index])
        })

    })
}))


function showPokemonDetails(pokemon) {
    const types = pokemon.types.map(type => `<span class="tag ${type.name}">${type.name}</span>`).join('')
    const abilities = pokemon.abilities.map(a => `<li>${a.ability.name}</li>`).join('')

    const cardHtml = `
        <div class="card">
            <div class="card-top">
                <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}" class="poke-img">
                </div>
                <h2>${pokemon.name} <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span> </h2>
                <h3>Habilidades</h3>
                <ul>${abilities}</ul>
            <div class="card-bottom"></div>
        </div>
        `
        document.getElementById('pokemonDetails').innerHTML = cardHtml
}
