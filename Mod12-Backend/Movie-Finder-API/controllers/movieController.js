import axios from "axios";

export const searchMovies = async (req, res) => {
  const searchTitle = req.query.title;

  if (!searchTitle) {
    return res.status(400).json({ error: "Title query parameter is required" });
  }

  try {
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        s: searchTitle,
        apikey: process.env.OMDB_API_KEY,
      },
    });

    if (response.data.Response === "False") {
      return res.status(404).json({ error: response.data.Error || "Movie not found." });
    }

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching movie data:", error.message);
    res.status(500).json({ error: "An error occurred while fetching movie data" });
  }
};

export const getMovieDetails = async (req, res) => {
  const imdbID = req.params.id;

  try {
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        i: imdbID,
        apikey: process.env.OMDB_API_KEY,
      },
    });

    if (response.data.Response === "False") {
      return res.status(404).json({ error: response.data.Error || "Movie details not found." });
    }

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching movie details:", error.message);
    res.status(500).json({ error: "An error occurred while fetching movie details" });
  }
};