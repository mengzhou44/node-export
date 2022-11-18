import  puppeteer from 'puppeteer';

export async function createPDF(htmlContent: string): Promise<Buffer> {
   try {

        const browser = await puppeteer.launch();        
        
        const page = await browser.newPage();
        await page.setContent(htmlContent,  {waitUntil: 'domcontentloaded'})
        await page.emulateMediaType('screen');
        
        const pdf = await page.pdf({
            path: 'result.pdf',
            margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
            printBackground: true,
            format: 'A4',
        });
        
        await browser.close()

        return pdf
   } catch(err) {
        console.log('Error occured when creating PDF file')
        throw err
   }      
  
}
 