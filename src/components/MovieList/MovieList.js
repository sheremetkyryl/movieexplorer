// import MovieCard from "./MovieCard/MovieCard";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";
import ModalWindow from "../Modal/ModalWindow";
import { Component } from "react";

// export default function MovieList({ movies, favoriteMoviesCouterToggle }) {
//     return (
//         <>
//         <div>
//             <ul className={styles.list}>
//                 {movies.length > 0 && movies
//                     .map((movie, index) => {
//                         return <MovieCard favoriteMoviesCouterToggle={favoriteMoviesCouterToggle}
//                         card={movie}
//                         key={index} />
//                     })}
//             </ul>
//             </div>
//             <ModalWindow/>
//         </>
//     )
// }

export default class MovieList extends Component {
  state = {
    selectedMovie: null,
  };

  openModal = (movie) => {
    this.setState({ selectedMovie: movie });
  };
  closeModal = () => {
    this.setState({ selectedMovie: null });
  };
  render() {
    const { movies, favoriteMoviesCouterToggle, favoriteMoviesIds = [] } = this.props;
    return (
      <>
        <div>
          <ul className={styles.list}>
            {movies.length > 0 &&
              movies.map((movie, index) => {
                return (
                  <MovieCard
                    favoriteMoviesCouterToggle={favoriteMoviesCouterToggle}
                    card={movie}
                    isFavorite={favoriteMoviesIds.includes(movie.id)}
                    key={index}
                    onOpenMovie={this.openModal}
                  />
                );
              })}
          </ul>
        </div>
        {this.state.selectedMovie && (
          <ModalWindow
            {...this.state.selectedMovie}
            onClose={this.closeModal}
          />
        )}
      </>
    );
  }
}
