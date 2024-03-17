import { useState } from 'react'

export function XFollowCard ({ children, userName, initialIsFolliwing }){
  const [isFollowing, setIsFollowing] = useState(initialIsFolliwing)

  console.log('Render with userName: ', userName)
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
    ? 'x-followCard-button is-following'
    : 'x-followCard-button'

  const handClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='x-followCard'>
      <header className='x-followCard-header'>
        <img
          className='x-followCard-avatar'
          alt="El avatar de midudev"
          src={`https://unavatar.io/${userName}`} />
        <div className='x-followCard-info'>
          <strong>{children}</strong>
          <span 
          className='x-followCard-infoUsername'>@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handClick}>
          {text}
        </button>
      </aside>
    </article>
  )
}
