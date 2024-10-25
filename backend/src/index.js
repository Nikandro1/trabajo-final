const express = require('express')
const db = require('./models')
const app = express()
const PORT = 3001

app.use(express.json())
app.listen(PORT, async ()=>{
    console.log(`Aplicacion iniciada en el puerto ${PORT}`)
    db.sequelize.sync({force:true})
})