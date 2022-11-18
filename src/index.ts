import express, { Express, Request, Response } from 'express';
import {createPDF} from './create-pdf' 
const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send(`<h2>Hello World </h2>`);
});
 
app.get('/pdf', async (req: Request, res: Response) => {
    const htmlcontent = `
                                <!DOCTYPE html>
                                <html>
                                    <head>
                                        <title>HTML content</title>
                                    </head>
                                    <body>
                                        <h1>Sample</h1>
                                    </body>
                                </html>
                            `
    const pdf = await createPDF(htmlcontent)
    res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length })
	res.send(pdf)
});

app.listen(3001, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:3001`);
})