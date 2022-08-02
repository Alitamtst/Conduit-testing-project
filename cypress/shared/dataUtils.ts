import { NewArticlePost } from "@support/createDataType";
import { ArticlePostModleBody } from "@support/types";

class SharedDataUtils {

    createArticlePost = (newArticlePost: NewArticlePost): Cypress.Chainable<ArticlePostModleBody> => {
        return cy.request({
            method: "POST", url: "https://api.realworld.io/api/articles", body: {
                article: {
                    title: newArticlePost.articleTitle, description: newArticlePost.whatIsArticle,
                    body: newArticlePost.theArticleText, tagList: newArticlePost.theTags
                }
            },
            headers: {
                authorization: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNvbmR1aXRhY2N0c3RAb3V0bG9vay5jb20iLCJ1c2VybmFtZSI6ImNvbmR1aXR0c3QiLCJpYXQiOjE2NTQwOTI3MjAsImV4cCI6MTY1OTI3NjcyMH0.W2E4sDqlHyJkhIgdwbwHlcBERgJ2QxLwkEvo0b1DAfg"
            }

        }).then(res => res.body.article)
    }

    deleteArticlePost = (articlePostName: string) => {
        this.getArticlePost(articlePostName).then(articlePost => {
            if (articlePost) {
                cy.request({
                    method: "Delete", url: `https://api.realworld.io/api/articles/${articlePost.slug}`, body: {}, headers: {
                        authorization: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNvbmR1aXRhY2N0c3RAb3V0bG9vay5jb20iLCJ1c2VybmFtZSI6ImNvbmR1aXR0c3QiLCJpYXQiOjE2NTQwOTI3MjAsImV4cCI6MTY1OTI3NjcyMH0.W2E4sDqlHyJkhIgdwbwHlcBERgJ2QxLwkEvo0b1DAfg"
                    }
                })
            }

        })
    }

    getAllArticlePosts = (): Cypress.Chainable<ArticlePostModleBody[]> => {
        return cy.request({
            method: "GET", url: "https://api.realworld.io/api/articles?author=conduittst&limit=5&offset=0", headers: {
                authorization: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNvbmR1aXRhY2N0c3RAb3V0bG9vay5jb20iLCJ1c2VybmFtZSI6ImNvbmR1aXR0c3QiLCJpYXQiOjE2NTQwOTI3MjAsImV4cCI6MTY1OTI3NjcyMH0.W2E4sDqlHyJkhIgdwbwHlcBERgJ2QxLwkEvo0b1DAfg"
            }, body:
                "author=conduittst&limit=5&offset=0"
        }).then(res => res.body.articles);
    }

    getArticlePost = (articlePostName: string): Cypress.Chainable<ArticlePostModleBody> => {
        return this.getAllArticlePosts().then(
            (articles) =>
                articles.find((article) => article.title == articlePostName) || null
        )
    }

    setAnArticleAsFav = (article: NewArticlePost) => {
        this.getArticlePost(article.articleTitle).then(articlePost => {
            cy.request({
                method: "POST", url: `https://api.realworld.io/api/articles/${articlePost.slug}/favorite`, body: {
                    article: {
                        article: { ...articlePost, favorited: true, favoritesCount: 1 }
                    }
                },
                headers: {
                    authorization: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNvbmR1aXRhY2N0c3RAb3V0bG9vay5jb20iLCJ1c2VybmFtZSI6ImNvbmR1aXR0c3QiLCJpYXQiOjE2NTQwOTI3MjAsImV4cCI6MTY1OTI3NjcyMH0.W2E4sDqlHyJkhIgdwbwHlcBERgJ2QxLwkEvo0b1DAfg"
                }

            })
        })
    }

    updatingArticlePost = (oldArticle: NewArticlePost, updateArticle: NewArticlePost,) => {
        this.getArticlePost(oldArticle.articleTitle).then(articlePost => {
            cy.request({
                method: "PUT", url: `https://api.realworld.io/api/articles/${articlePost.slug}`, body: {
                    article: {
                        ...articlePost,
                        title: updateArticle.articleTitle || articlePost.title,
                        description: updateArticle.whatIsArticle || articlePost.description,
                        body: updateArticle.theArticleText || articlePost.body,
                        tagList: updateArticle.theTags || articlePost.tagList
                    }
                },
                headers: {
                    authorization: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNvbmR1aXRhY2N0c3RAb3V0bG9vay5jb20iLCJ1c2VybmFtZSI6ImNvbmR1aXR0c3QiLCJpYXQiOjE2NTQwOTI3MjAsImV4cCI6MTY1OTI3NjcyMH0.W2E4sDqlHyJkhIgdwbwHlcBERgJ2QxLwkEvo0b1DAfg"
                }

            })
        })
    }

}
export default SharedDataUtils;