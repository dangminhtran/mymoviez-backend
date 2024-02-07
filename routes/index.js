var express = require('express');
var router = express.Router();
const fetch = require('node-fetch')

const TMDB_API_KEY = process.env.TMDB_API_KEY;

router.get('/movies', (req, res) => {
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}`)
 .then(response => response.json())
 .then(data => {
   res.json({ movies: data.results });
 });
});

// curl --request GET \
//   --url 'https://api.themoviedb.org/3/movie/76341' \
//   --header 'Authorization: Bearer <<access_token>>' \
//   --header 'Content-Type: application/json;charset=utf-8'

module.exports = router;
