import  pdf, {CreateOptions} from 'html-pdf'

export async function createPDF(htmlContent: string): Promise<Buffer> {
   try {

     const options: CreateOptions = {
          format: "A3",
          orientation: "portrait",
          border: "10mm",
          header: {
              height: "45mm"
          },
          footer: {
              height: "28mm"
          }
      };
      
      return new Promise((resolve, reject)=> {
          pdf.create(htmlContent, options).toBuffer((err,buffer)=> {
                  if (err) {
                     console.log(err)
                     reject(err)
                  }
                  resolve(buffer)
          })
      })
       
   } catch(err) {
        console.log('Error occured when creating PDF file')
        throw err
   }      
  
}
 