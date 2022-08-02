Feature: QA-7592 - Open Article details page

    Scenario: #1 Open new Article details page
        Given User created New Article post Using API
        Given User open Profile Page
        Given My Articles list have the new article
        When User click on the Article text
        Then The new Article details should open