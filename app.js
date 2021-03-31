//imports
const express = require("express");
const app = express();
const port = 3000;


//Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/images', express.static(__dirname + 'public/images'))

//views - for html files
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

// app.get('/creds', (req, res) => {
//     res.sendFile(__dirname + '/views/getCreds.html')
// })

//views - for ejs files
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/about', (req, res) => {
    res.render('about', {text: 'This is about page'})
})

app.get('/creds', (req, res) => {
    res.render('getCreds')
})

app.get('/uploads', (req, res) => {
    res.render('uploads3')
})

app.get('/qs', (req,res) => {
    res.render('quicksight-analyse')
})

//listen
app.listen(port, ()=>{
    console.info("Server has started at " + `${port}`)
})
