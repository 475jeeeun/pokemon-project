import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectPokemonById } from '../RTK/selector'
import FavoriteButton from '../component/FavoriteButton'
import FlipCard from '../component/FlipCard'

export default function Detail() {

   const {pokemonId} = useParams()

   const pokemon =useSelector(selectPokemonById(Number
     (pokemonId)))
   
  
     
   return (
    <div className='flex flex-col justify-center items-center'>
      <div className='text-[28px] mb-[18px]'>
        {pokemon?.name}
      <FavoriteButton pokemonId={Number (pokemonId)} />
      </div>
   
      <div className='whitespace-pre-wrap text-center'>
        {pokemon?.description}</div>
        <FlipCard front={pokemon?.front} back={pokemon?.back} />
     
      
      </div>
  )
}
