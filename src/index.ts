import { PrismaClient } from '@prisma/client';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import route from './routes';
export const prisma = new PrismaClient();
const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());

app.use((req, res, next) => {
  const origin = req.get('origin');
  res.header('Access-Control-Expose-Headers', 'total-record');
  res.header('Access-Control-Allow-Origin', origin);
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,POST,HEAD,OPTIONS,PUT,PATCH,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma, Access-Control-Request-Method, Access-Control-Allow-Headers, Access-Control-Request-Headers',
  );

  if (req.method === 'OPTIONS') {
    const optionStatus = 204;
    res.sendStatus(optionStatus);
  } else {
    next();
  }
});

app.use('/api/', route);

const corsOption = {
  origin: ['hungpn256.click', 'localhost:5173'],
  methods: 'GET,POST,HEAD,OPTIONS,PUT,PATCH,DELETE',
  credentials: true,
};

app.use(cors(corsOption));
const port = 3333;

const connect = async () => {
  await prisma.$connect();
  app.listen(port, async () => {
    // eslint-disable-next-line no-console
    console.log(`Example app listening on port ${port}`);
  });
};

connect();
