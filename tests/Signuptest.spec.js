import { SignupPage } from "../Pages/SignupPage"
import{test,expect} from '@playwright/test'
import { AlertHandler } from "../Utils/AlertHandler" 
import dataset from "../Utils/testdata.json"

let signuppage
let alerthandler
test('1. sign up as a new user', async({page})=>
    {   
        signuppage = new SignupPage(page)
        alerthandler=new AlertHandler(page)
        await signuppage.goto()
        await signuppage.signUpEnterCreds(dataset.signup.username,dataset.signup.password)
        await alerthandler.handleAlert(dataset.signup.alertmessage)   
        await signuppage.signUp()
})

test.only('2. sign up enter creds and close',async({page})=>
{
    const signuppage=new SignupPage(page)
    await signuppage.goto()
    await signuppage.signUpEnterCreds(dataset.signup.username,dataset.signup.password)
    await signuppage.signUpClose()
    await expect(page).toHaveTitle(dataset.signup.signuppagetitle)
})


