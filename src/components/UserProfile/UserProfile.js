import PropTypes from "prop-types";
import styles from "./UserProfile.module.css";
import { Component } from "react";

// export default function Profile({ name, online }) {
//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.profile}>
//         <span>{name.slice(0, 1)}</span>
//         {online && <span className={styles.online}></span>}
//       </div>
//       <span className={styles.name}>{name}</span>
//     </div>
//   )
// }

// Profile.propTypes = {
//   name: PropTypes.string.isRequired,
//   online: PropTypes.bool.isRequired
// }

export default class Profile extends Component {

  // constructor(props) {
  //   super(props)
  //   // this.state = {}
  // }

  // const { name, online} = this.props
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.profile}>
          <span>{this.props.name.slice(0, 1)}</span>
          {this.props.online && <span className={styles.online}></span>}
        </div>
        <span className={styles.name}>{this.props.name}</span>
      </div>
    );
  }
}
