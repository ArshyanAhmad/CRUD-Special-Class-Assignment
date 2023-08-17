import app from './app.js'

const PORT = process.env.PORT | 8000;

app.listen(() => {
    console.log(`App listening on port at ${PORT}`);
})