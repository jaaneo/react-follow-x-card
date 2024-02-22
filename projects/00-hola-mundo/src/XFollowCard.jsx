export function XFollowCard ({ children, userName, isFollowing }){
  console.log(isFollowing)

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
        <button className='x-followCard-button'>
          Seguir
        </button>
      </aside>
    </article>
  )
}