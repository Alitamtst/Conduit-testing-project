
class NewPostFormActions {

    openNewPostForm() {
        cy.visit('https://react-redux.realworld.io/#/editor?_k=9zdvqa');
        return this
    }

    typeInArticleNameInput(articleTitle: string) {
        cy.get('input[placeholder="Article Title"]').type(articleTitle)
        return this
    }

    typeInWhatArticleInput(whatIsArticle: string) {
        cy.get('input[placeholder="What\'s this article about?"]').type(whatIsArticle)
        return this
    }

    typeInArticleTestArea(theArticleText: string) {
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type(theArticleText)
        return this
    }

    typeInArticleTagsInput(theTags: string) {
        cy.get('input[placeholder="Enter tags"]').type(theTags)
        return this
    }

    clickPublishArticleButton() {
        cy.get('.btn').contains('Publish Article').should('be.visible').click()
        return this
    }

    clickOnProfilePageItemInNav() {
        cy.get('.navbar-nav').contains('conduittst').should('be.visible').click()
        return this
    }

    openArticlePostPage(articleTitle: string) {
        cy.get('h1').contains(articleTitle).should('be.visible').click()
    }

    clickOnDeleteButton() {
        cy.contains('Delete Article').should('be.exist').click();
        return this
    }

    userClickOnTag(tagName: string) {
        cy.get('.sidebar').contains(tagName).should('be.exist').click();
        return this
    }

}
export default NewPostFormActions;