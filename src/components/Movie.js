import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <Link className={styles.link} to={`/movie/${id}`}>
      <div className={styles.wrapper} key={id}>
        <div className={styles.imgBox}>
          <img src={coverImg} alt={title} />
        </div>
        <div className={styles.description}>
          <h2>{title}</h2>
          <p>
            {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
          </p>
          <span>genres</span>
          <ul>
            {genres.map((genre, index) => (
              <li key={index}>•{genre}</li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
