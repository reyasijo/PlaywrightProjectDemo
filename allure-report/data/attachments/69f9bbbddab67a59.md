# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Logintest.spec.js >> sign up as a new user
- Location: tests\Logintest.spec.js:19:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Sign up successful."
Received: "This user already exist."
```

# Test source

```ts
  1  | import { SignupPage } from "../Pages/SignupPage"
  2  | import { LoginPage } from "../Pages/LoginPage"
  3  | import{test,expect} from '@playwright/test'
  4  | import { userData } from "../TestData/userData"
  5  | import { ProductStorePage } from "../Pages/ProductStorePage"
  6  | let signuppage
  7  | let loginpage
  8  | let productstorepage
  9  | 
  10 | test.beforeEach(async ({ page }) => {
  11 | 
  12 |     signuppage = new SignupPage(page)
  13 |     loginpage = new LoginPage(page)
  14 |     productstorepage=new ProductStorePage(page)
  15 |     await signuppage.goto()
  16 | 
  17 | })
  18 | 
  19 | test('sign up as a new user', async({page})=>
  20 | {
  21 |    // signuppage=new SignupPage(page)
  22 |    // await signuppage.goto()
  23 |     await signuppage.signUpEnterCreds(userData.signupusername,userData.signuppassword)
  24 |     //Handling the alert on Signup action
  25 |     const waitforalert = page.waitForEvent('dialog') //waitis for alert
  26 |     await signuppage.signUp()
  27 |     const dialog = await waitforalert //wait until alert appears
  28 |     console.log("Alert message is:", dialog.message())
> 29 |     expect(dialog.message()).toBe('Sign up successful.')
     |                              ^ Error: expect(received).toBe(expected) // Object.is equality
  30 |     await dialog.accept()
  31 | })
  32 | /*
  33 | test('sign up enter creds and close',async({page})=>
  34 | {
  35 |     const signuppage=new LoginPage(page)
  36 |     await signuppage.goto()
  37 |     await signuppage.signUpEnterCreds(userData.username,userData.password)
  38 |     await signuppage.signUpClose()
  39 | }
  40 | )*/
  41 | test('login using valid credentials', async({page})=>
  42 | {
  43 |  await loginpage.loginWithCreds(userData.signupusername,userData.signuppassword)
  44 |  await expect(productstorepage.welcometext).toContainText('Welcome')
  45 | }
  46 | 
  47 | )
```