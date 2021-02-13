const express = require('express')
const app = express()
const port = 3000

app.use(express.static('./dist', {
  index: "index.html"
}))

app.get('/blog', (req, res) => {
  res.json({ creator: 'catherine' })
})

app.get('*',(req, res) => {
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
