const express = require('express')
const nunjucks = require('nunjucks')
const videos = require('./data')

const server = express()

// usar o arquivo njk e não especificar ele
server.set('view engine', 'njk')

// pega apasta public e deixa na home
server.use(express.static('public'))

// atrelando o servidor express com o nunjucks
nunjucks.configure('views', {
    express: server,
    noCache: true
})


// minhas paginas web
server.get('/', (req, res) => {
    res.render('home')
})


server.get('/about', (req, res) => {
    res.render('about')
})

server.get('/portfolio', (req, res) => {
    res.render('portfolio', { items: videos })
})

server.get('/video', (req, res) => {
    const id = req.query.id

    const video = videos.find(showVideo => { return showVideo.id == id })


    res.render('video', { items: video })
})




// funcao 404
server.use((req, res) => {
    res.status(404).render('not-found')
})



// porta do servidor
server.listen(5000, () => {
    console.log('Servidor ligado!')
})