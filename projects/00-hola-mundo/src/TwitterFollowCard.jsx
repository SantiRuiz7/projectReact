export function TwitterFollowCard({ children, userName ,isFollowing }) {
    const imageSrc = `https://unavatar.io/${userName}`

    console.log(isFollowing)
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                alt= "El avatar de midudev"
                src= {imageSrc} />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infouserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}