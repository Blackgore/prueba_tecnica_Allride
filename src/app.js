import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
import allride from './allRide/allRide.routes';
import ordenBy from './ordenBy/ordenBy.routes';
const app = express();

app.set('pkg', pkg);

app.use(morgan('dev'));

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    name: app.get('pkg').name,
    author: app.get('pkg').name,
    description: app.get('pkg').description,
    version: app.get('pkg').version,
  });
});

app.use('/api/allride', allride);
app.use('/api/ordenBy', ordenBy);

export default app;
