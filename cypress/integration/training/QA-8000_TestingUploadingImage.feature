Feature: QA-8000_Testing Uploading Image

    Scenario: #1 Check uploading image succesfully
        Given User open site home page
        When User click on Upload Image button
        And User uploading image
        Then Image should uploaded succesfully
