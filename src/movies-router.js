const Router = require('../framework/Router');
const controller = require('./movies-controller');
const router = new Router()


//список всех фильмов
router.get('/movies', controller.getMovies)
//добавить фильм
router.post('/movie', controller.createMovies)
//показать фильм по id
router.get('/movie', controller.getOneMovie)
//изменить информацию о фильме
router.put('/movie', controller.updateMovie)
//удалить фильм
router.delete('/movie', controller.deleteMovie)
//присвоить фильму под id жанр id
router.post('/movie/genre', controller.createMoviesGenre)
//показать жанры фильма под id
router.get('/movie/genre', controller.getMovieGenre)
//удалить жанр у фильма id
router.delete('/movie/genre', controller.deleteMovieGenre)

module.exports = router