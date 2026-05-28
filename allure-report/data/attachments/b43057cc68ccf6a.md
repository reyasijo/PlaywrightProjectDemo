# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Logintest.spec.js >> login using incorrect usename
- Location: tests\Logintest.spec.js:46:6

# Error details

```
ReferenceError: expect is not defined
```

# Test source

```ts
  1  | export class LoginPage{
  2  |     constructor(page){
  3  |         this.page=page
  4  |         this.loginbtn1=page.locator('#login2')
  5  |         this.loginusename=page.locator('#loginusername')
  6  |         this.loginpwd=page.locator('#loginpassword')
  7  |         this.loginbtn2=page.locator("//button[@onclick='logIn()']")
  8  |     }
  9  | 
  10 |     async loginWithCreds(user,pass)
  11 |     {
  12 |         await this.loginbtn1.click()
  13 |         await this.loginusename.fill(user)
  14 |         await this.loginpwd.fill(pass)
  15 |        
  16 | 
  17 |     }
  18 |     async clickLogin()
  19 |     {
  20 |         await this.loginbtn2.click()
  21 |     }
  22 | 
  23 |      async handleAlert(dialog)
  24 |     {
  25 |         //const dialog = await waitforalert
  26 |         //const dialogemsg=dialog.message()
  27 |         console.log("Alert message is:" + dialog.message())
> 28 |         expect(dialog.message()).toBe('Wrong Password')
     |         ^ ReferenceError: expect is not defined
  29 |         await dialog.accept()
  30 |     }
  31 | 
  32 | }
```