# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Signuptest.spec.js >> 1. sign up as a new user
- Location: tests\Signuptest.spec.js:8:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Sign up successful."
Received: "This user already exist."
```

```
ReferenceError: expect is not defined
```

# Test source

```ts
  1  | export class SignupPage{
  2  |     constructor(page){
  3  |         this.page=page
  4  |         this.signupbtn=page.locator('#signin2')
  5  |         this.username=page.locator('#sign-username')
  6  |         this.password=page.locator('#sign-password')
  7  |         this.signUpbtn2=page.locator("//button[text()='Sign up']")
  8  |         this.signUpCloseBtn=page.locator("//button[text()='Close']")
  9  |             }
  10 | 
  11 |     async goto()
  12 |     {
  13 |         await this.page.goto('https://www.demoblaze.com/')
  14 | 
  15 |     }
  16 | 
  17 |     async signUpEnterCreds(user,pass)
  18 |     {
  19 |         await this.signupbtn.click()
  20 |         await this.username.fill(user)
  21 |         await this.password.fill(pass)
  22 |        
  23 |     }   
  24 |     
  25 |     async signUp()
  26 |     {
  27 |     await this.signUpbtn2.click()
  28 |     
> 29 |     await expect(this.page.locator("//div[@class='modal-body']")).toBeVisible()
     |     ^ ReferenceError: expect is not defined
  30 | 
  31 |     }
  32 | 
  33 |     async signUpClose()
  34 |     {
  35 |         await this.signUpCloseBtn.nth(1).click()
  36 |         const title=await this.page.title()
  37 |         console.log("Title after close is:", title)
  38 |         return title
  39 |     }
  40 | 
  41 | }
  42 | 
  43 |  
```