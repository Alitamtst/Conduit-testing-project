import { NewArticlePost, } from "@support/createDataType";
import { When, Then, Given, Before, After } from "cypress-cucumber-preprocessor/steps";
import SharedDataUtils from "C:/Users/Mr Computer/Documents/cypress-test-repo/cypress/shared/dataUtils";
import NewPostFormActions from "C:/Users/Mr Computer/Documents/cypress-test-repo/cypress/integration/pageObjects/newPostForm/actions";
import NewPostFormAssertions from "C:/Users/Mr Computer/Documents/cypress-test-repo/cypress/integration/pageObjects/newPostForm/assertions";

const newPostFormActions = new NewPostFormActions();
const newPostFormAssertions = new NewPostFormAssertions();
const sharedDataUtils = new SharedDataUtils();

const articlePropereties: NewArticlePost = {
    articleTitle: `New Article Title QA-7592`,
    whatIsArticle: "Test Articlnlnle",
    theArticleText: "It is my test article",
    theTags: "Test"
};


before(() => {
    cy.SignIn();
    sharedDataUtils.deleteArticlePost(articlePropereties.articleTitle);
})

Given("User created New Article post Using API", () => {
    sharedDataUtils.createArticlePost(articlePropereties);
})

Given("User open Profile Page", () => {
    newPostFormActions.clickOnProfilePageItemInNav();
})

Given("My Articles list have the new article", () => {
    newPostFormAssertions.checkArticlePostContainsValue(articlePropereties.articleTitle);
})

When("User click on the Article text", () => {
    newPostFormActions.openArticlePostPage(articlePropereties.articleTitle);
})

Then("The new Article details should open", () => {
    newPostFormAssertions.checkIfArticleDetailsPageOpen();
})

after(() => {
    sharedDataUtils.deleteArticlePost(articlePropereties.articleTitle);
})