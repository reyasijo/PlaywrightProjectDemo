# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Logintest.spec.js >> 4. login using incorrect usename
- Location: tests\Logintest.spec.js:35:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "User does not existee."
Received: "User does not exist."
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
  9  |         this.page.on('dialog', async dialog=>{
> 10 |         expect(dialog.message()).toBe(expectedMessage) 
     |                                  ^ Error: expect(received).toBe(expected) // Object.is equality
  11 |         console.log("Alert message is:", dialog.message())
  12 |         await dialog.accept()
  13 |        })
  14 |         
  15 |     }
  16 | 
  17 | 
  18 | }
```