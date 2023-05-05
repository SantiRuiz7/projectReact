import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    return (
        <section className='App'>
          <TwitterFollowCard isFollowing userName="midudev" name="Miguel Angel Durán">
            <h1>Miguel</h1>

          </TwitterFollowCard>


          <TwitterFollowCard isFollowing userName="pheralb">
            <h1>Santi</h1>
            </TwitterFollowCard>
        </section>
    )
}

/* NO EXISTE NEGAR EL ISFOLLOWING CON !, HAY QUE PONER {FALSE}*/