import {expect} from '@playwright/test'
export class AlertHandler{
    constructor(page){
         this.page=page
    }
    
    async handleAlert(expectedMessage)
    {
        this.page.on('dialog', async dialog=>{
        expect(dialog.message()).toBe(expectedMessage) 
        console.log("Alert message is:", dialog.message())
        await dialog.accept()
       })
        
    }


}