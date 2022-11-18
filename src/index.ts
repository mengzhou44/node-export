import express, { Express, Request, Response } from 'express';
 
const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send(`<h2>Hello World </h2>`);
});
 

app.get('/pdf', (req: Request, res: Response) => {
    
});

app.listen(3001, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:3001`);
})