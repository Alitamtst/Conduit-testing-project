import { NewArticlePost, } from "@support/createDataType";
import { When, Then, Given, Before, After } from "cypress-cucumber-preprocessor/steps";
import SharedDataUtils from "C:/Users/Mr Computer/Documents/cypress-test-repo/cypress/shared/dataUtils";
import NewPostFormActions from "C:/Users/Mr Computer/Documents/cypress-test-repo/cypress/integration/pageObjects/newPostForm/actions";
import NewPostFormAssertions from "C:/Users/Mr Computer/Documents/cypress-test-repo/cypress/integration/pageObjects/newPostForm/assertions";

const newPostFormActions = new NewPostFormActions();
const newPostFormAssertions = new NewPostFormAssertions();
const sharedDataUtils = new SharedDataUtils();

const articlePropereties: NewArticlePost = {
    articleTitle: `New Article Title QA-7593`,
    whatIsArticle: "Test Articlnlnle",
    theArticleText: "It is my test article",
    theTags: "Test"
};

const newArticleProperetie: NewArticlePost = {
    ...articlePropereties,
    articleTitle: "Updated Titile QA-7593",
    theArticleText: "Updatted the Article body text",
};


before(() => {
    cy.SignIn();
    sharedDataUtils.deleteArticlePost(articlePropereties.articleTitle);
})

Before({ tags: "@deleteUpdatedArticle" }, () => {
    sharedDataUtils.deleteArticlePost(newArticleProperetie.articleTitle);

})

Given("User created New Article post Using API", () => {
    sharedDataUtils.createArticlePost(articlePropereties);
})

Given("User updating Article data using API", () => {
    sharedDataUtils.updatingArticlePost(articlePropereties, newArticleProperetie);
    cy.wait(9000)
})

When("User open Article deatils page: {string}", (pageName) => {
    newPostFormActions.clickOnProfilePageItemInNav();
    newPostFormActions.openArticlePostPage(pageName === "updated" ? newArticleProperetie.articleTitle : articlePropereties.articleTitle);
})

Then("Article data should be updated", () => {
    [newArticleProperetie.theArticleText, newArticleProperetie.articleTitle].forEach(value => {
        newPostFormAssertions.checkArticlePostContainsValue(value);
    })
})

