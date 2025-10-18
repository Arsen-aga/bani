import express from 'express'

const PORT = 5000;

const app = express()


// Добавил, чтобы можно было с локального фронта делать запросы на локальный бэк
// CORS middleware вручную
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

// нужно, чтобы бэк принимал json фаормат
app.use(express.json())
app.get("/", (req, res) => {
  // console.log(req.query);
  res.status(200).json("Сервер работает через GET");
});


app.post('/', (req, res) => {
  console.log(req.body);
  res.status(200).json('Сервер работает')
})

app.listen(PORT, () => console.log('Server Working'))