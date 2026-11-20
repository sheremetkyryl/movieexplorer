import PropTypes from "prop-types";
import styled from "styled-components";
import styles from './Hero.module.css'
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

  const FeaturedSpan = styled.span`
    font-family: "Outfit", sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 133%;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #a78bfa;
    border: 1px solid rgba(167, 139, 250, 0.3);
    border-radius: 33554400px;
    padding: 4px 12px;
    background: rgba(124, 58, 237, 0.1);
  `;

  const Button = styled.button`
  border-radius: 12px;
  padding: 12px 24px;
font-family: "Outfit", sans-serif;
font-weight: 600;
font-size: 14px;
line-height: 143%;
text-align: center;
color: #fff;
background: ${props => props.$primary ? 'linear-gradient(105.6deg, #7c3aed 0.07%, #3b82f6 99.93%);' : 'rgba(255, 255, 255, 0.1);'};
box-shadow: ${(props) => (props.$primary ? "0 8px 24px 0 rgba(124, 58, 237, 0.4);" : "none")};
border: ${(props) => (props.$primary ? "none" : "1px solid rgba(255, 255, 255, 0.1);")};  
display: flex;
align-items: center;
gap: 4px;
cursor: pointer;
`;
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
      <FeaturedSpan>✦ Featured Movie</FeaturedSpan>
      <h1 className={styles.title}>{movie.name}</h1>
      <div className={styles.wrapper}>
        <span className={styles.rating}>⭐{movie.rating}</span> <br />
        <div className={styles.dot}/>
        <span className={styles.release}>{movie.release}</span>
        <div className={styles.dot}/>
        <ul className={styles.list}>
          {movie.genre.length > 0
            ? movie.genre.map((item) => <li className={styles.genre}>{item}</li>)
            : "genre is not found"}
        </ul>
      </div>

      <p className={styles.description}>{movie.description}</p>
      <div className={styles.wrapper}>
      <Button $primary>▶ Watch Trailer</Button>
      <Button>＋Add to Favorites</Button>
      </div>
      </div>
    </section>
  );
}

Hero.propTypes = {
  movie: PropTypes.object,
};
