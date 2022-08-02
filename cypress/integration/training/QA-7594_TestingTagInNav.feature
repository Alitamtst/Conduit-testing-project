Feature: QA-7594 - Clicking on tag
    @refreshAfter
    Scenario Outline: #5 Click on tag to show tag in nav
        When User click on "<tag>" tag
        Then "<tag>" tag should show up in nav

        Examples:
            | tag             |
            | welcome         |
            | implementations |
            | introduction    |
            | codebaseShow    |
