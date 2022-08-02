Feature: QA-7593 - Updating Article

    @deleteUpdatedArticle
    Scenario: #1 Updating Article Post Using API
        Given User created New Article post Using API
        And User updating Article data using API
        When User open Article deatils page: "updated"
        Then Article data should be updated