import { expect } from "@playwright/test"
import { userData } from "../TestData/userData"
export class CartPage{
    constructor(page){
        this.page=page
        this.cart=page.locator("//a[text()='Cart']")
        this.btnplaceorder=page.locator("//button[text()='Place Order']")
        this.name=page.locator('#name')
        this.country=page.locator('#country')
        this.city=page.locator('#city')
        this.creditcard=page.locator('#card')
        this.month=page.locator('#month')
        this.year=page.locator('#year')
        this.orderconfirmation=page.locator('.sweet-alert h2')
        //this.itemincart=this.page.locator(`//td[text()='${itemname}']`)

            }

        async placeorder(itemname) {
            await this.cart.click()
            //this.itemincart = this.page.locator(`//td[text()='${itemname}']`)
            //await expect(this.itemincart).toBeVisible()
            await this.btnplaceorder.click()
            await this.name.fill(userData.Name)
            await this.country.fill(userData.Country)
            await this.city.fill(userData.City)
            await this.creditcard.fill(userData.Creditcard)
            await this.month.fill(userData.Month)
            await this.year.fill(userData.Year)
            await this.page.locator("//button[text()='Purchase']").click()
            await expect(this.orderconfirmation).toHaveText('Thank you for your purchase!')


        }  
        }