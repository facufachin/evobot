import express, { Request, Response } from 'express';

const server = express();

server.all('/', (req: Request, res: Response) => {
  res.send('OK');
});

function keepAlive() {
  server.listen(3000, () => {
    console.log('Server is Ready!! ' + Date.now());
  });
}

export default keepAlive;
