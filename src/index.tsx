import express, { Express, Request, Response } from 'express';
import {createPDF} from './create-pdf' 
import reactdomServer from 'react-dom/server'
import React from 'react'
import Users from './Users';

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
                                        <style>
                                           .users {
                                             border: 1px solid blue; 
                                           }   

                                           .user {
                                              margin: 20px; 
                                              border: 1px solid green; 
                                           }
                                        </style>
                                    </head>
                                    <body>
                                        <h1>Sample</h1>
                                        <div class='users'>
                                          ${reactdomServer.renderToString(<Users />)}
                                        </div>
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


