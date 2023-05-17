/// <reference types="cypress-xpath"/>
import { Before,Given,When,And,Then } from "cypress-cucumber-preprocessor/steps";
Given('Open the browser and navigate to the Login Page',()=>{
    cy.visit("https://www.myntra.com/", { headers: { "Accept-Encoding": "gzip, deflate" } });
  

})
When('click on profile',()=>{
    cy.xpath("//span[normalize-space()='Profile']").trigger('mouseover')
    cy.contains('login / Signup').click({force:true})
    cy.title().should('eq','Myntra')
})
When('enter the mobile number',()=>{
    cy.xpath(" //input[@type='tel']").type(8305441285)
})
When('click on continue button',()=>{
    
    cy.xpath("//div[@class='submitBottomOption']").click({force:true})
})
Then('user should be logged in',()=>{
cy.screenshot()
})