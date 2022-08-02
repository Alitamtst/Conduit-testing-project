import { When, Then, Given, Before, After } from "cypress-cucumber-preprocessor/steps";
import NewPostFormActions from "C:/Users/Mr Computer/Documents/cypress-test-repo/cypress/integration/pageObjects/newPostForm/actions";
import NewPostFormAssertions from "C:/Users/Mr Computer/Documents/cypress-test-repo/cypress/integration/pageObjects/newPostForm/assertions";

const newPostFormActions = new NewPostFormActions();
const newPostFormAssertions = new NewPostFormAssertions();

beforeEach(() => {
    cy.SignIn();
})

When("User click on {string} tag", (tagName) => {
    newPostFormActions.userClickOnTag(tagName);
})

Then("{string} tag should show up in nav", (tagName) => {
    newPostFormAssertions.checkIfTagInNav(tagName);
})

After({ tags: "@refreshAfter" }, () => {
    cy.reload();
})