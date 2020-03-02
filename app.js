const express = require('express')
const bodyParser = require('body-parser')
const dataRouter = require('./routes/data')

const app = express()

const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use('/data', dataRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))