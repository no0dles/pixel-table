import * as express from "express";
import * as nunjucks from "nunjucks";

const app = express();

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.use('/client', express.static('dist/client'));
app.use('/', express.static('static'));

app.get('/', (req, res, next) => {
  res.render('index.html');
});

app.get('/app', (req, res, next) => {
  const renderer = req.query.renderer;
  const name = req.query.name;

  res.render('app.html', {
    renderer: renderer,
    name: name
  })
});

app.listen(3000);