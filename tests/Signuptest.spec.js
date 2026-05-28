import { SignupPage } from "../Pages/SignupPage"
import{test,expect} from '@playwright/test'
import { userData } from "../TestData/userData"
import { AlertHandler } from "../Utils/AlertHandler"    
let signuppage
let alerthandler
test('1. sign up as a new user', async({page})=>
{   
        
        signuppage = new SignupPage(page)
        alerthandler=new AlertHandler(page)
        await signuppage.goto()
        await signuppage.signUpEnterCreds(userData.signupusername,userData.signuppassword)
        await alerthandler.handleAlert('Sign up successful.')
        await signuppage.signUp()
})

test('2. sign up enter creds and close',async({page})=>
{
    const signuppage=new SignupPage(page)
    await signuppage.goto()
    await signuppage.signUpEnterCreds(userData.loginvalidusername,userData.loginvalidpassword)
    await signuppage.signUpClose()
})


