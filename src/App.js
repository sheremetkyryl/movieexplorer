import Header from "./components/Header";
import Hero from "./components/Hero";
import MovieCard from "./components/MovieCard";
import Trending from "./components/Trending";
import data from "./data/data.json"
import UserProfile from "./components/UserProfile";



function App() {
  const randomMovie = data.movies[Math.floor(Math.random() * data.movies.length)]

  const account = { name: "Alex", online: true };
  return (
    <>
      <Header>
        <UserProfile {...account}/>
      </Header>
      <Hero movie={randomMovie}/>
      <ul>
        {data.movies.length > 0 && data.movies.map((movie, index) => {
          return (
            <MovieCard card={movie} key={index}/>
          )
        })}
      </ul>
      <Trending />
    </>
  );
}

export default App;
