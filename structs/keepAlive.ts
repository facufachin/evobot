import express, { Request, Response } from 'express';

const server = express();

server.all('/', (req: Request, res: Response) => {
  res.send('OK');
});

function keepAlive() {
  server.listen(3000, () => {
    console.log('Server is Ready!! ' + Date.now());
  });

  server.on('error', (err: Error) => {
    console.error('Server error:', err.message);
    setTimeout(() => {
      server.listen(3000, () => {
        console.log('Server is Ready!! ' + Date.now());
      });
    }, 5000);
  });
}


export default keepAlive;
