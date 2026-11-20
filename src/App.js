import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import MovieCard from "./components/MovieCard/MovieCard";
import Trending from "./components/Trending";
import data from "./data/data.json";
import UserProfile from "./components/UserProfile/UserProfile";
import SectionMovies from "./components/SectionMovies/SectionMovies";
import MovieList from "./components/MovieList/MovieList";
import SearchInput from "./components/Input/SearchInput";
import UserDetailButton from "./components/UserDetailButton/UserDetailButton";
import Footer from "./components/Footer/Footer"

import "./css/style.css";
import "./scss/style.scss";
import { Component } from "react";
import { type } from "@testing-library/user-event/dist/type";

// function App() {
//   const randomMovie =
//     data.movies[Math.floor(Math.random() * data.movies.length)];

//   const account = { name: "Alex", online: true };
//   return (
//     <div className="layout">
//       <>
//         <Header>
//           <div className="wrapper">
//           <SearchInput></SearchInput>
//           <UserProfile {...account} />
//           </div>
//         </Header>
//         <Hero movie={randomMovie} />
//         <SectionMovies title="Popular Movies" link={{ href: "#", text: "View all" }}>
//           <MovieList movies={data.movies}></MovieList>
//           </SectionMovies>

//         <Trending />
//       </>
//     </div>
//   );
// }

class App extends Component {
  //СТан компонента, тепер коли оновлюватимемо стан буде відбуватись ререндеринг з актуальними
  // змінами
  state = {
    account: {
      name: "Alex",
      online: true,
    },
    randomMovie: data.movies[Math.floor(Math.random() * data.movies.length)],
    favoriteMoviesCounter: [],
    movies: data.movies,
  };

  favoriteMoviesCouterToggle = (value) => {
    // this.setState({
    //   favoriteMoviesCounter: this.state.favoriteMoviesCounter + nextLike
    // })
    // if (typeof value === "number") {
    //   const deleteMovie = this.state.movies.filter(item => {
    //     return item.id === value
    //   })
    //   console.log(deleteMovie)
    // } else {
    // this.setState({
    //   favoriteMoviesCouter: [...this.state.favoriteMoviesCounter, value]
    // })
    // }
    this.setState((prevState) => {
      const favoriteMoviesCounter =
        typeof value === "number"
          ? prevState.favoriteMoviesCounter.filter(
              (movie) => movie.id !== value,
            )
          : [...prevState.favoriteMoviesCounter, value];
              console.log(favoriteMoviesCounter)
      return { favoriteMoviesCounter };
    });

  };

  render() {
    const favoriteMoviesIds = this.state.favoriteMoviesCounter.map((movie) => movie.id)
    return (
      <div className="layout">
        <>
          <Header>
            <div className="wrapper">
              <SearchInput></SearchInput>
              <UserProfile {...this.state.account} />
            </div>
          </Header>
          <Hero movie={this.state.randomMovie} />
          <SectionMovies
            title="Popular Movies"
            link={{ href: "#", text: "View all" }}
          >
            <MovieList
              favoriteMoviesCouterToggle={this.favoriteMoviesCouterToggle}
              movies={this.state.movies}
              favoriteMoviesIds={favoriteMoviesIds}
            ></MovieList>
          </SectionMovies>

          <Trending />
          <SectionMovies
            title="Your Favorites"
            description="Movies you've saved for later"
          >
            <MovieList
              favoriteMoviesCouterToggle={this.favoriteMoviesCouterToggle}
              movies={this.state.favoriteMoviesCounter}
            ></MovieList>
          </SectionMovies>
          <UserDetailButton
            favoriteMoviesCount={this.state.favoriteMoviesCounter.length}
          />
        </>

        <Footer></Footer>
      </div>
    );
  }
}

export default App;
