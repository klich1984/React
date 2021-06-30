import React, { Component } from 'react'
import data from '../DB/data.json'

export default class Listas extends Component {
  constructor(props){
    super(props)
    this.state = {
      seasons: ['Primavera', 'Verano', 'Otoño', 'Invierno']
    }
  }

  render () {
    return(
      <div>
        <hr />
        <h2>Listas y Keys</h2>
        <h3>Estaciones</h3>
        <ol>
          {this.state.seasons.map((el, index)=> (
              <li key={index}>{el}</li>
          ))}
        </ol>
        <h3>Framework JavaScript</h3>
        <ul>
          {
            data.frameworks.map(el=>(
            <li key={el.id}>
              <a
                href={el.web} target='_blanck'
                className='App-link'
                rel='noopener noreferrer'>
                <img
                  src={el.logo}
                  alt={el.name}
                  width='32'
                  height='auto'/>
                {el.name}
              </a>
            </li>
            ))
          }
        </ul>
      </div>
    )
  }
}