import React, { Component } from 'react'
import Pokemon from '../pokemons/Pokemon'

// Consumir una API
export default class Api extends Component {
  // Declaracion de propiedades (property initilizer)
  state = {
    pokemons: []
  }

  componentDidMount() {
    let url = 'https://pokeapi.co/api/v2/pokemon'

    fetch(url)
      .then(res => res.json())
      .then(json => {
        // console.log(json)
        json.results.forEach(pokemon => {
          fetch(pokemon.url)
            .then(res => res.json())
            .then(json => {
              console.log(json)
              let pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default
              }

              let pokemons = [...this.state.pokemons, pokemon]
              this.setState({
                pokemons
              })
            })
        })
      })
  }

  render() {
    return (
      <div>
        {
          this.state.pokemons.map(pokemon => (
            <Pokemon key={pokemon.id} name={pokemon.name} avatar={pokemon.avatar}/>
          ))
        }
      </div>
    )
  }
}
