

const express = require('express')
const app = express() 
const puerto = 8091
const path = require('path') 
const hbs = require('hbs')
app.use(express.static('public'))   

app.set('views', path.join(__dirname+'/public/vistas'))
app.set('view engine', 'hbs')


app.get('/aprendices', (req, res) => {
    res.render('aprendices', {

        title: 'Aprendices 🏬',
        modulo: 'Aprendices'
    })
})

app.get('/aprendiz_crear', (req, res) => {
    res.render('aprendiz_crear', {

        title: 'Crear aprendiz 🏬',
        modulo: 'aprendiz',
        boton_crear: 'Crear aprendiz',
        datagrid: 'aprendices'

    })
})


app.listen(puerto, () => {

    console.log(`escuchando  ${puerto}`)
    
})