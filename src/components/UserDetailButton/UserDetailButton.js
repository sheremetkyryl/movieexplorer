import { act } from "react"
import UserProfile from '../UserProfile/UserProfile'
import styles from './UserDetailButton.module.css'

export default function UserDetailButton({ favoriteMoviesCount }) {
    const account = {
        name: 'Alex',
        online: true,
        watchedMovies: 12,
        favoritesMovies: favoriteMoviesCount,
        status: 'Movie Lover'
    }
    console.log(account.favoritesMovies)
    return (
        <button className={styles.button}>
            <UserProfile name={account.name} online={account.online}></UserProfile>
            {/* {account.watchedMovies > 0 ?  */}
            <div>
            <span className={styles.info}>🎬 {account.watchedMovies} movies watched</span> <br/>
            <span className={styles.info}>❤️ {account.favoritesMovies} favorites</span>
            <span>{account.status}</span>
            </div>
        </button>
    )
}