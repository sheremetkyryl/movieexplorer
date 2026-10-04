import PropTypes from "prop-types";
export default function Hero({ movie }) {
  // const movie = {
  //   name: "Interstellar",
  //   rating: 8.7,
  //   release: 2014,
  //   genre: ["Sci-Fi", "Adventure", "Drama"],
  //   description:
  //     "Explorers travel through a wormhole in space in an attempt toensure humanity's survival.",
  //   id: 1024,
  // };

  return (
    <section>
      <span>Featured Movie</span>
      <h1>{movie.name}</h1>
      <div>
        <span>{movie.rating}</span> <br/>
        <span>{movie.release}</span>
        <ul>
            {movie.genre.lenght > 0 
            ? movie.genre.map(item => <li>{item}</li>) 
            : "genre is not found"}
        </ul>
      </div>

      <p>{movie.description}</p>
      <button>Watch Trailer</button>
      <button>Add to Favorites</button>
    </section>
  );
}

Hero.propTypes = {
  movie: PropTypes.object
}