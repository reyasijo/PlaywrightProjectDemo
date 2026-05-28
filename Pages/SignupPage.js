export class SignupPage{
    constructor(page){
        this.page=page
        this.signupbtn=page.locator('#signin2')
        this.username=page.locator('#sign-username')
        this.password=page.locator('#sign-password')
        this.signUpbtn2=page.locator("//button[text()='Sign up']")
        this.signUpCloseBtn=page.locator("//button[text()='Close']")
            }

    async goto()
    {
        await this.page.goto('https://www.demoblaze.com/')

    }

    async signUpEnterCreds(user,pass)
    {
        await this.signupbtn.click()
        await this.username.fill(user)
        await this.password.fill(pass)
       
    }   
    
    async signUp()
    {
    await this.signUpbtn2.click()
    }

    async signUpClose()
    {
        await this.signUpCloseBtn.nth(1).click()
    }

}

 