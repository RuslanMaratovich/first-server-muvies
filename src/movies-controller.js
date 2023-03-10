const db = require('../db')


const createMovies = async (req, res) => {
    const {name, year} = req.body
    const newMovies = await db.query('INSERT INTO film (name, year) values ($1, $2) RETURNING *',[name, year])
    res.send(newMovies.rows[0])
}


const getMovies = async (req, res) => {
    const movies = await db.query('SELECT * FROM film')
    res.send(movies.rows)
}


const getOneMovie = async(req, res) => {
    const id = req.params.id
    const movies = await db.query('SELECT * FROM film where filmid = $1', [id])
    res.send(movies.rows[0])
}

const updateMovie = async (req, res) => {
    const {id, name, year} = req.body
    const movies = await db.query('UPDATE film set name = $1, year =$2 where film.filmid = $3 RETURNING *', [name, year, id])
    res.send(movies.rows[0])
}


 const deleteMovie = async(req, res)=>{
    const id = req.params.id
    const movies = await db.query('DELETE FROM film where filmid = $1', [id])
    res.send(movies.rows[0])
}



const createMoviesGenre = async (req, res) => {
    const {filmid, genreid} = req.body
    const newMovies = await db.query('INSERT INTO film_genre (filmid, genreid) values ($1, $2) RETURNING *',[filmid, genreid])
    res.send(newMovies.rows[0])
}


const getMovieGenre = async(req, res) => {
    const filmid = req.params.id
    const movies = await db.query('SELECT DISTINCT genre.genre_type FROM film INNER JOIN film_genre ON $1 = film_genre.filmid INNER JOIN genre ON film_genre.genreid = genre.genreid', [filmid])
    res.send(movies.rows)
}
//'SELECT * FROM film_genre where filmid = $1', [filmid])



const deleteMovieGenre = async(req, res)=>{
    const  {filmid, genreid} = req.body
    const movies = await db.query('DELETE FROM film_genre where filmid = $1 AND genreid = $2', [filmid, genreid])
    res.send(movies.rows[0])
}


module.exports = {
    getMovies,
    createMovies,
    getOneMovie,
    updateMovie,
    deleteMovie,
    createMoviesGenre,
    getMovieGenre,
    deleteMovieGenre
}


