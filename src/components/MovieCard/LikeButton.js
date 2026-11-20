import { Component } from "react";
import { FaHeart } from "react-icons/fa";

export default class LikeButton extends Component {

  toggleLink = (e) => {
    e.stopPropagation()
    const { movie, favoriteMoviesCouterToggle, liked } = this.props
    favoriteMoviesCouterToggle(liked ? movie.id : movie);
  };

  render() {
    const { likeBtnStyles, likeIconStyles, liked } = this.props;
    return (
      <button onClick={this.toggleLink} className={likeBtnStyles}>
          <FaHeart style={{ color: liked ? "red" : "white" }} className={likeIconStyles} />
      </button>
    );
  }
}
