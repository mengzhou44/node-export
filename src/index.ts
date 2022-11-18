import pdf from "html-pdf";
const html = `
                <!DOCTYPE html>
                <html>
                    <head>
                        <meta charset="utf-8" />
                         <style>
                           .list {
                              color: red; 
                              border: 1px solid green;
                           }

                           .container {
                              display: flex; 
                              justify-content: flex-start; 
                           }

                           .item {
                              margin: 20px; 
                              border: 1px solid blue;
                           }
                         </style>
                    </head>
                    <body>
                        <h1 class='list'>USER LISTS BY PROGRAMMERTS.IO</h1>
                        <div class='container'>
                            <div class='item'>
                                <p>Name: David </p>
                                <p>Age: 26 </p>
                            </div>

                            <div class='item'>
                                <p>Name: Mark </p>
                                <p>Age: 31 </p>
                            </div>
                        </div>
                    </body>
                </html>
            `
const options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm",
    header: {
        height: "45mm",
        contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
    },
    footer: {
        height: "28mm",
        contents: {
            first: 'Cover page',
            2: 'Second page', // Any page number is working. 1-based index
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            last: 'Last Page'
        }
    }
};

  pdf
  .create(html, options as any).toFile('./output.pdf', ()=> {
     console.log('done!')
  })
 