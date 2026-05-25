import {expect} from '@playwright/test'
export class AlertHandler{
    constructor(page){
         this.page=page
    }
    
    async handleAlert(dialog,expectedMessage)
    {
        //const dialog=await this.page.waitForEvent('dialog') // wait for alert
        const message=dialog.message() //get message
        //console.log("Alert message is:", message)
        await expect(message).toBe(expectedMessage)
        await dialog.accept()
        return message
        
    }


}