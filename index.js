const PORT = process.env.PORT || 5000;
const Application = require('./framework/Application');
const moviesRouter = require('./src/movies-router');
const genreRouter = require('./src/genre-router');
const jsonParser = require('./framework/parseJson');
const parseUrl = require('./framework/parseUrl');


const app = new Application()

app.use(jsonParser);
app.use(parseUrl('http://localhost:5000'));

app.addRouter(moviesRouter);
app.addRouter(genreRouter);



app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
