import { Component } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import styles from "./ModalWIndow.module.css";
import { FaStar } from "react-icons/fa";
import breakIcon from "../../assets/images/brokenimage.png";

export default class ModalWindow extends Component {
  render() {
    const {
      card,
      name,
      description,
      release,
      genre,
      rating,
      image,
      type,
      onClose,
    } = this.props;
    return (
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          {image && (
            <img
              className={styles.image}
              src={image}
              alt={name}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = breakIcon;
              }}
            />
          )}

          <div className={styles.content}>
            {type && (
              <span className={styles.type}>
                [type === "cartoon" ? "мультфільм" : "фільм"]
              </span>
            )}
            {name && <h3 className={styles.title}>{name}</h3>}
            <div className={styles.meta}>
              {rating && (
                <span className={styles.rating}>
                  <FaStar className={styles.star} /> {rating}
                </span>
              )}
              {release && <span className={styles.release}>{release}</span>}
            </div>
            <ul className={styles.genres}>
              {genre &&
                genre.map((item, index) => (
                  <li className={styles.genre} key={index}>
                    {item}
                  </li>
                ))}
            </ul>

            {description && <p className={styles.description}>{description}</p>}
          </div>

          <button onClick={onClose} className={styles.close}>
            <IoMdCloseCircleOutline />
          </button>
        </div>
      </div>
    );
  }
}
