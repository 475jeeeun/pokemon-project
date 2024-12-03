import React from 'react'
import { useSelector } from 'react-redux'
import { selectFavoritePokemons } from '../RTK/selector'
import { Card } from '../component/Card'

export default function Favorite() {
 const pokemon = useSelector(selectFavoritePokemons)
  return (
    <div>
      {pokemon.map( (el =>
        <Card key={el.id} pokemon={el} />
      ))}
    </div>
    
  )
}
