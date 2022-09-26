const express = require('express');
const app = express();
const path = require('path')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
app.use(express.static("style"));

app.get('/', (req, res) => {
    res.render('Home');
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`serving on port ${port}`)
})