import PropTypes from "prop-types"
export default function UserProfile({ name, online }) {
  // const account = {
  //   name: "Alex",
  //   online: true,
  //   moviesWatched: 12,
  //   favorites: 2,
  //   badge: "Movie Lover",
  // };

  return (
    <div>
      <div>
        <span>{name.slice(0, 1)}</span>
        {online && <span className="online"></span>}
      </div>

      <span>{name}</span>
    </div>
  );
}

