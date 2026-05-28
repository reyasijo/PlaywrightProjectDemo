# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Logintest.spec.js >> 1. sign up as a new user
- Location: tests\Logintest.spec.js:22:6

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
  7  |     async handleAlert(expectedMessage)
  8  |     {
  9  |         /*
  10 |         //const dialog=await this.page.waitForEvent('dialog') // wait for alert
  11 |         const message=dialog.message() //get message
  12 |         //console.log("Alert message is:", message)
  13 |         await expect(message).toBe(expectedMessage)
  14 |         await dialog.accept()
  15 |         return message */
  16 | 
  17 |         this.page.on('dialog', async dialog=>{
> 18 |         expect(dialog.message()).toBe(expectedMessage) 
     |                                  ^ Error: expect(received).toBe(expected) // Object.is equality
  19 |         await dialog.accept()
  20 |        })
  21 |         
  22 |     }
  23 | 
  24 | 
  25 | }
```