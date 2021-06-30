import React from 'react'

// Card de un pokemon
// export default function Pokemon(props) {
//   return (
//     <figure>
//       <img src={props.avatar} alt={props.name}></img>
//       <figcaption>{props.name}</figcaption>
//     </figure>
//   )
// }

// Usando destructuracion
export default function Pokemon({ avatar, name }) {
  return (
    <figure>
      <img src={avatar} alt={name}></img>
      <figcaption>{name}</figcaption>
    </figure>
  )
}
