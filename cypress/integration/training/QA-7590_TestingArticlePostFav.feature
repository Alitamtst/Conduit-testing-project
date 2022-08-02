Feature: QA-7590 - Testing Setting Article Post as Fav using API

    Scenario: #1 Setting Article Post as Fav using API
        Given User created New Article post Using API
        And User Click On Article Fav Button using API
        When User open Profile Page
        Then Article Should Be Set As Fav