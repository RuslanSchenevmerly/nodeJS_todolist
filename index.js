const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const exphbs = require('express-handlebars')
const routes = require('./routes/router')
const connectString = require('./config')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

app.use(express.urlencoded({extended: true}))
app.use(routes)
app.use(express.static(path.join(__dirname, 'public')))

async function start() {
  try {
    await mongoose.connect(connectString, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })

    app.listen(PORT, () => {
      console.log(`Server has been started on port ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()