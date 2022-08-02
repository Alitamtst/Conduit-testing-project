Feature: QA-7591 - Creating New Post

    Scenario: #1 Creating New Post from Form successfully
        Given User open New Post Page
        And User fill all required fields
        When User click Publish Article button
        Then My Articles list have the new article

    Scenario: #2 Creating New Post from using API successfully
        Given User created New Article post Using API
        When User open Profile Page
        Then My Articles list have the new article

