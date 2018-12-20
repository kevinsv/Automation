Feature:
    In order to keep my product stable
    As a developer or product manager
    I want to make sure that everything works as expected

    Scenario: Check title of website after search
        Given I open the url "http://google.com"
        When I set "WebdriverIO" to the inputfield ".gLFyf"
        And I press "Enter"
        Then I expect that the title is "WebdriverIO - Buscar con Google"
