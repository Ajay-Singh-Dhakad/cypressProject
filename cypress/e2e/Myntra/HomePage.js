/// <reference types="cypress-xpath"/>
import { Before,Given,When,And,Then } from "cypress-cucumber-preprocessor/steps";
Given('Open the browser and navigate to the Home Page',()=>{
    cy.visit("https://www.myntra.com/", { headers: { "Accept-Encoding": "gzip, deflate" } });
})
When('Hover over Profile',()=>{
    cy.xpath("//span[normalize-space()='Profile']").trigger('mouseover')
    cy.xpath("//div[normalize-space()='Orders']").click({force:true})
})
Then('The user should be able to see dropdown',()=>{
    cy.url().should('eq','https://www.myntra.com/login?referer=https%3A%2F%2Fwww.myntra.com%2Fmy%2Forders')
cy.screenshot()
})