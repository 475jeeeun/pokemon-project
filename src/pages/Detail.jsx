import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectPokemonById } from '../RTK/selector'

export default function Detail() {

   const {pokemonId} = useParams()

   const pokemon = useSelector(selectPokemonById(Number
     (pokemonId)))
   
  
     console.log('Pokemon ID:', pokemonId);
     console.log('Selected Pokemon:', pokemon);
   return (
    <div className='flex flex-col justify-center items-center'>
      <div className='text-[28px]'>{pokemon.name}</div>
      <div className='whitespace-pre-wrap'>{pokemon.description}</div>
      <img src ={pokemon.front} />
      
      </div>
  )
}
