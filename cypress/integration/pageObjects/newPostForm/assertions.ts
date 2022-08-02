import { NewArticlePost } from "@support/createDataType";
import { should } from "chai";
import { find } from "cypress/types/lodash";

class NewPostFormAssertions {
    checkArticlePostContainsValue(value: string, contains: boolean = true) {
        cy.contains(value).should(contains ? "be.exist" : "not.be.exist");
        return this
    }

    checkIfArticleDetailsPageOpen() {
        cy.contains('Delete Article').should('be.exist');
        return this
    }

    checkArticlePostFavIconIsClicked(articlename: string, isClicked: boolean) {
        cy.contains("h1", articlename).parentsUntil(".article-preview").parent().find("button").contains(isClicked ? '1' : '0').should("be.exist");
        return this
    }

    checkIfTagInNav(tagName: string) {
        cy.get('.nav-pills').contains(tagName).should('be.exist');
        return this
    }

}
export default NewPostFormAssertions;