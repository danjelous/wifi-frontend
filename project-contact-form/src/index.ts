import express from 'express';

import bodyParser from 'body-parser';
import fs from 'fs/promises';
import path from 'path';

import { engine } from 'express-handlebars';

const app = express();

// Set Handlebars engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '../views/'));

// Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

// Routes
app.get('/', (req, res) => res.send("Hello WIFI 👋"));

app.post('/', async (req, res) => {
  const { name } = req.body;
  console.log(`Name is ${name}`);

  // Write rendered HTML in opublic folder
  res.render('form', { name }, async (err, html) => {
    if(err) {
      console.log(err)
      return;
    }

    await fs.writeFile(path.join(__dirname, `../public/${name}.html`), html);
  });
});

const PORT = process.env.PORT ?? 3001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));