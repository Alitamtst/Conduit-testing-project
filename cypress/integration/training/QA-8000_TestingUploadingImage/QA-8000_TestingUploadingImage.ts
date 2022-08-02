import { When, Then, Given, Before, After } from "cypress-cucumber-preprocessor/steps";
Given("User open site home page", () => {
    // cy.visit("https://www.remove.bg/upload");
    cy.visit("https://ps.uci.edu/~franklin/doc/file_upload.html");
})

When("User click on Upload Image button", () => {
    // cy.get('.btn-primary').contains('Upload Image').attachFile("justDoIt.jpg");
    // cy.get("input[type='file']").attachFile("justDoIt.jpg");
    // cy.get('.btn-primary').contains('Upload Image').click();
    cy.get("input[type='file']").attachFile("justDoIt.jpg");
})

When("User uploading image", () => {

})

Then("Image should uploaded succesfully", () => {

})