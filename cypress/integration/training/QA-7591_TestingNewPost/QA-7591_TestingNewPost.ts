import { NewArticlePost, } from "@support/createDataType";
import { When, Then, Given, Before, After } from "cypress-cucumber-preprocessor/steps";
import SharedDataUtils from "C:/Users/Mr Computer/Documents/cypress-test-repo/cypress/shared/dataUtils";
import NewPostFormActions from "C:/Users/Mr Computer/Documents/cypress-test-repo/cypress/integration/pageObjects/newPostForm/actions";
import NewPostFormAssertions from "C:/Users/Mr Computer/Documents/cypress-test-repo/cypress/integration/pageObjects/newPostForm/assertions";

const newPostFormActions = new NewPostFormActions();
const newPostFormAssertions = new NewPostFormAssertions();
const sharedDataUtils = new SharedDataUtils();

const articlePropereties: NewArticlePost = {
    articleTitle: `New Article Title QA-7591`,
    whatIsArticle: "Test Articlnlnle",
    theArticleText: "It is my test article",
    theTags: "Test"
};

const newArticleProperetie: NewArticlePost = {
    ...articlePropereties,
    articleTitle: "Updated Titile QA-7591",
    theArticleText: "Updatted the Article body text",
};


beforeEach(() => {
    cy.SignIn();
    sharedDataUtils.deleteArticlePost(articlePropereties.articleTitle);
})

Given("User open New Post Page", () => {
    newPostFormActions.openNewPostForm();

})

Given("User fill all required fields", () => {
    newPostFormActions.typeInArticleNameInput(articlePropereties.articleTitle)
        .typeInWhatArticleInput(articlePropereties.whatIsArticle)
        .typeInArticleTestArea(articlePropereties.theArticleText)
        .typeInArticleTagsInput(articlePropereties.theTags);
})

When("User click Publish Article button", () => {
    newPostFormActions.clickPublishArticleButton();
})

Then("My Articles list have the new article", () => {
    newPostFormAssertions.checkArticlePostContainsValue(articlePropereties.articleTitle);
})

Given("User created New Article post Using API", () => {
    sharedDataUtils.createArticlePost(articlePropereties);
})

When("User open Profile Page", () => {
    newPostFormActions.clickOnProfilePageItemInNav();
})


afterEach(() => {
    sharedDataUtils.deleteArticlePost(articlePropereties.articleTitle);
})
