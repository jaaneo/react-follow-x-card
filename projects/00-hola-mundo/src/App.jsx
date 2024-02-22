import React from 'react'
import './App.css'
import { XFollowCard } from './XFollowCard'

export function App () {
  const formatUserName = (userName) => `@${userName}`


  return (
    <section className='App'>
      <XFollowCard 
        formatUserName={formatUserName}
        isFollowing 
        userName="midudev"
        name="Alejandro Sáez" />
  
      <XFollowCard
        formatUserName={formatUserName}
        isFollowing={false}
        userName="j_aaneo"
        name="Alejandro Sáez" />
  
      <XFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="dmtdomotica"
        name="DMT Smarhome" />
    </section>
  )
}