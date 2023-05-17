/// <reference types="cypress-xpath"/>
import { Before,Given,When,And,Then } from "cypress-cucumber-preprocessor/steps";
// T.C.005
Given('Open the browser and navigate to the product Page',()=>{
    cy.visit("https://www.myntra.com/tshirts/the-souled-store/the-souled-store-men-maroon-marvel-comic-lover-placement-print-oversized-t-shirt/15248394/buy", { headers: { "Accept-Encoding": "gzip, deflate" } });

})
When('Select size',()=>{
cy.xpath("//p[text()='S']").click()
})
When('Click on Add to bag button',()=>{
 cy.xpath("//div[normalize-space()='ADD TO BAG']").click()
 })
 When('Click on the Go to Bag button',()=>{
 cy.xpath("//span[normalize-space()='GO TO BAG']").click()
 })
 When('click on alert',()=>{
    cy.get('.itemComponents-base-invisibleBackDrop').click()
    cy.on('window:alert',(msg)=>{
        expect(msg).to.be.equal('Select items that you want to buy now and proceed.Remaining items will stay in your bag.')
    })
 })
 When('click on the Remove button',()=>{
    cy.xpath("(//button[normalize-space()='REMOVE'])[1]").click()
    cy.wait(1000)
    cy.xpath("(//button[normalize-space()='REMOVE'])[2]").click()
    })
    When('click on the logo of Myntra',()=>{
        cy.xpath("//a[@class='linkClean']").click()
       
        })
Then('Similar product should be added to the bag',()=>{
cy.get('.itemContainer-base-itemLink').should('have.text','Men Maroon Marvel Comic Lover Placement Print Oversized T-Shirt')
})

// T.C.006
Then('The details of added product should be mentioned at the product page',()=>{
    cy.xpath("(//div[@class='itemContainer-base-item ']//div)[5]//div").should('be.visible')
    cy.screenshot()

})
// T.C.007
Then('The order payment details of added product should be mentioned at the cart page',()=>{
   cy.xpath("//div[@class='desktop-base-right']").should('be.visible')
   cy.xpath("//span[contains(text(),'974')]").should('have.text','974')
   cy.screenshot()
})
// T.C.008

Then('The product should be removed from the cart page',()=>{
    cy.xpath("//div[@class='emptyCart-base-emptyDesc']").contains('There is nothing in your bag')
   
 })
 // T.C.009
 Then('The user should be redirected to homepage',()=>{
   cy.url().should('eq','https://www.myntra.com/')
   
   
 })

