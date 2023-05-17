/// <reference types="cypress-xpath"/>
import { Before,Given,When,And,Then } from "cypress-cucumber-preprocessor/steps";
// T.C.001
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
 cy.screenshot()
 })
 When('click on alert',()=>{
    cy.get('.itemComponents-base-invisibleBackDrop').click()
    cy.on('window:alert',(msg)=>{
        expect(msg).to.be.equal('Select items that you want to buy now and proceed.Remaining items will stay in your bag.')
    })
 })
Then('Respected product should be added to the bag',()=>{
cy.get('.itemContainer-base-itemLink').should('have.text','Men Maroon Marvel Comic Lover Placement Print Oversized T-Shirt')
})
// T.C.002
Then('UI of the bag icon should be changed from 0 to 1',()=>{
    cy.get('.notify-thumbnail-text').should('be.visible')
    cy.get('.desktop-badge').should('have.text',1)
    cy.screenshot()

})
// T.C.003
Then('UI of the Add to bag button should be changed to Go to bag button',()=>{
cy.xpath("//span[normalize-space()='GO TO BAG']").should('have.text','GO TO BAG')
})
//T.C.004
Then('user should be able to navigate to cart page',()=>{
cy.title().should('eq','SHOPPING BAG')
cy.url().should('include','cart')

})