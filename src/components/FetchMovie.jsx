import React, { useEffect } from "react";
import MovieCard from "./MovieCard";

function FetchMovie(props) {
  const [result, setResult] = React.useState([]);
  const apiKey = "api_key=70541933629b1511bec0382c91a59424";
  const { id, category, q } = props;

  const getMovies = (event) => {
    fetch(event)
      .then((response) => response.json())
      .then((result) => {
        setResult(result.results);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    const categories = {
      popular: "https://api.themoviedb.org/3/movie/popular?",
      search: "https://api.themoviedb.org/3/search/movie?"
    };
    switch (category) {
      case "popular":
        getMovies([categories.popular, apiKey].join(""));
        break;
      case "search":
        getMovies([categories.search, apiKey, q].join(""));
        break;
      default:
        break;
    }
  }, [id, category, q]);

  return (
    <div className="text-dark">
      {result.length > 0 ? (
        <MovieCard result={result} />
      ) : (
        <h1>Sonuç bulunamadı</h1>
      )}
    </div>
  );
}

export default FetchMovie;
