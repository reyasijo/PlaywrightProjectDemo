# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Logintest.spec.js >> sign up as a new user
- Location: tests\Logintest.spec.js:22:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Sign up successful."
Received: "This user already exist."
```

# Test source

```ts
  1  | import {expect} from '@playwright/test'
  2  | export class AlertHandler{
  3  |     constructor(page){
  4  |          this.page=page
  5  |     }
  6  |     
  7  |     async handleAlert(dialog,expectedMessage)
  8  |     {
  9  |         //const dialog=await this.page.waitForEvent('dialog') // wait for alert
  10 |         const message=dialog.message() //get message
  11 |         console.log("Alert message is:", message)
> 12 |         await expect(message).toBe(expectedMessage)
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  13 |         await dialog.accept()
  14 |         return message
  15 |         
  16 |     }
  17 | 
  18 | 
  19 | }
```