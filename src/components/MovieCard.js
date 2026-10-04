import PropTypes from "prop-types"
export default function MovieCard ({ card }) {
    // const card = {img: '', name: 'Interstellar', rating: 8.7, genres: ["Sci-Fi , Drama"], popular: true, isFavorite: true}
    return (
         <li>
            <img src={card.image} alt={card.name}/>
            <h2>{card.name}</h2>
            <span>{card.rating}</span>
            <span>{card.genre}</span>
            <span>{card.popular}</span>
            {card.popular && <span>popular</span>}
            {card.isFavorite && <span>❤️</span>}
        </li>
    )
}

MovieCard.propTypes = {
    card: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string, 
        name: PropTypes.string, 
        rating: PropTypes.number, 
        genre: PropTypes.arrayOf(PropTypes.string).isRequired,
        popular: PropTypes.bool, 
        isFavorite: PropTypes.bool
    })
}