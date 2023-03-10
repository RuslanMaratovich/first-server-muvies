const Router = require('../framework/Router');
const controller = require('./genre-controller');
const router = new Router()

//показать все жанры
router.get('/genres', controller.getGenres)
//добавить жанр
router.post('/genre', controller.createGenre)
//показать жанр под id
router.get('/genre', controller.getOneGenre)
//изменить жанр под id
router.put('/genre', controller.updateGenre)
//удалить жанр под id
router.delete('/genre', controller.deleteGenre)
//показать все фильмы жанра под id
router.get('/genre/movies', controller.getGenreMovies)

module.exports = router