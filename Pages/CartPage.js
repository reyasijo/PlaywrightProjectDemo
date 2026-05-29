import { expect } from "@playwright/test"
//import { userData } from "../TestData/userData"
//const userData = require('../Utils/testdata.json')
import dataset from '../Utils/testdata.json'

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
            await this.name.fill(dataset.userdetails.name)
            await this.country.fill(dataset.userdetails.country)
            await this.city.fill(dataset.userdetails.city)
            await this.creditcard.fill(dataset.userdetails.creditcard)
            await this.month.fill(dataset.userdetails.month)
            await this.year.fill(dataset.userdetails.year)
            await this.page.locator("//button[text()='Purchase']").click()
            //console.log(this.orderconfirmation)
            return await this.orderconfirmation.textContent()  


        }  
        }
        