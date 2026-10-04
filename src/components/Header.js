export default function Header ({ children }) {
    const links = ["Home", "Movies", "Favorites"]
    return(
        <header>
            <a href="/">MovieExplorer</a>
            <ul>
                {links.length > 0 && links.map((link, index) => <li key={index}>{link}</li>)}
            </ul>
            <input type="search" placeholder="Search movies..."></input>
            {children}
        </header>

    )
}