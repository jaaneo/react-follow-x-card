import React, { useState } from 'react'
import './App.css'
import { XFollowCard } from './XFollowCard'

export function App () {

  return (
    <section className='App'>
      <XFollowCard isFollowing initialIsFolliwing userName="midudev">
        Miguel Ángel Durán
      </XFollowCard> 

      <XFollowCard isFollowing={false} userName="j_aaneo">
        Alejandro Sáez
      </XFollowCard>

      <XFollowCard isFollowing userName="dmtdomotica">
        DMT Smarhome
      </XFollowCard>   
    </section>
  )
}