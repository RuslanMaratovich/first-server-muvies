const db = require('../db')


const createGenre = async (req, res) => {
    const {genre_type} = req.body
    const newGenre = await db.query('INSERT INTO genre (genre_type) values ($1) RETURNING *',[genre_type])
    res.send(newGenre.rows[0])
}


const getGenres = async (req, res) => {
    const genre = await db.query('SELECT * FROM genre')
    res.send(genre.rows)
}


const getOneGenre = async(req, res) => {
    const id = req.params.id
    const genre = await db.query('SELECT * FROM genre where genreid = $1', [id])
    res.send(genre.rows[0])
}

const updateGenre = async (req, res) => {
    const {id, genre} = req.body
    const newGenre = await db.query('UPDATE genre set genre = $1 where genreid = $2 RETURNING *', [genre, id])
    res.send(newGenre.rows[0])
}


const deleteGenre = async(req, res)=>{
    const id = req.params.id
    const genre = await db.query('DELETE FROM genre where genreid = $1', [id])
    res.send(genre.rows[0])
}

const getGenreMovies = async(req, res) => {
    const genreid = req.params.id
    const genre = await db.query('SELECT DISTINCT film.name, film.year FROM genre INNER JOIN film_genre ON $1 = film_genre.genreid INNER JOIN film ON film_genre.filmid = film.filmid', [genreid])
    res.send(genre.rows)
}


module.exports = {
    createGenre,
    getGenres,
    getOneGenre,
    updateGenre,
    deleteGenre,
    getGenreMovies
}