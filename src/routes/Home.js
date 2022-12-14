import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Nav from "../components/Nav";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <Nav />
      <div className={styles.wrapper}>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className={styles.grid}>
            {movies.map((movie) => (
              <Movie
                id={movie.id}
                coverImg={movie.large_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
