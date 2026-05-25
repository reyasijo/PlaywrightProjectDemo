export class LoginPage{
    constructor(page){
        this.page=page
        this.loginbtn1=page.locator('#login2')
        this.loginusename=page.locator('#loginusername')
        this.loginpwd=page.locator('#loginpassword')
        this.loginbtn2=page.locator("//button[@onclick='logIn()']")
    }

    async loginWithCreds(user,pass)
    {
        await this.loginbtn1.click()
        await this.loginusename.fill(user)
        await this.loginpwd.fill(pass)
       

    }
    async clickLogin()
    {
        await this.loginbtn2.click()
    }

     }