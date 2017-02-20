const express    = require('express');
const port       = process.env.PORT || 3000;
const secret     = process.env.SECRET || 'gosh this is so secret... shhh...';
const app        = express();
const dest       = `${__dirname}/public`;
const cors       = require('cors');
const expressJWT = require('express-jwt');


app.use(express.static(dest));

app.use('/api', expressJWT({ secret: secret })
  .unless({
    path: [
      { url: '/api/login', methods: ['POST'] },
      { url: '/api/register', methods: ['POST'] }
    ]
  }));
app.use(jwtErrorHandler);

function jwtErrorHandler(err, req, res, next){
  if (err.name !== 'UnauthorizedError') return next();
  return res.status(401).json({ message: 'Unauthorized request.' });
}


app.get('/*', (req, res) => res.sendFile(`${dest}/index.html`));

app.listen(port, () => console.log(`Express has started on port: ${port}`));
