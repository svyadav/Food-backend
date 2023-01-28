
const express = require('express')
const app = express()
const mongoDB=require('./db')
var cors = require('cors')
const port = 5000

mongoDB()

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use(cors())
app.use(express.json())
app.use('/api',require('./Routes/CreateUser'))
app.use('/api',require('./Routes/DisplayData'))
app.use('/api',require('./Routes/OrderData'))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})