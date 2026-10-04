export default function Trending() {
  const movie = {
    img: "",
    name: "Dune: Part Two",
    rating: 8.6,
    year: 2024,
    genres: ["Sci-Fi , Adventure"],
    description:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the…",
  };
  return (
    <li>
        <img src="{movie.img}"/>
        <h3>{movie.name}</h3>
        <ul>
            <li>⭐{movie.rating}</li>
            <li>{movie.year}</li>
            <li>{movie.genres}</li>
        </ul>
        <div>
            <p>{movie.description}</p>
            <a href="#">View details</a>
        </div>
    </li>
  )
}
