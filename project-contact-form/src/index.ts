import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.set('view engine', '')

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => res.send("YO!"));

app.post('/', (req, res) => {
  res.json(req.body);
});

const PORT = process.env.PORT ?? 3001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));