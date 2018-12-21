# UI E2E Test 

UI E2E tests based on [WebdriverIO](http://webdriver.io/) and [Cucumber](https://cucumber.io/).

Instead of writing complicated test code that only developers can understand, Cucumber maps an ordinary language to code and allows to start with the test process in the early stages of your product development.

# How to write a test

Tests are written in [Gherkin syntax](http://docs.behat.org/en/latest/guides/1.gherkin.html#gherkin-syntax)
that means that you write down what's supposed to happen in a real language. All test files are located in
`./features/*` and have the file ending `.feature`. You will already find some test files in that
directory. They should demonstrate, how tests could look like. Just create a new file and write your first
test.

_myFirstTest.feature_
gherkin
Feature:
    In order to keep my product stable
    As a developer or product manager
    I want to make sure that everything works as expected

Scenario: Check title of website after search
    Given I open the url "http://google.com"
    When I set "WebdriverIO" to the inputfield "#gbqfq"
    And I press "Enter"
    Then I expect that the title is "WebdriverIO - Google Search"

Scenario: Another test
    Given ...



WebStorm supports integration with the Cucumber.js test framework. WebStorm recognizes features written in the Gherkin language 
(see https://www.jetbrains.com/help/webstorm/cucumber-js.html#nav).

This test opens the browser and navigates them to google.com to check if the title contains the search
query after doing a search. As you can see, it is pretty simple and understandable for everyone.

# How to run the local test in BrowserStack
$ npm run test:local -- --spec ./features/FeatureFileName.feature
# To run tests with CI config
$ npm run test:ci -- --spec ./features/FeatureFileName.feature
# To run tests with local selenium server config
$ npm run test:standalone -- --spec ./features/FeatureFileName.feature


_please note_ The WDIO runner uses the configuration file `wdio.conf.js` by default.

The predefined snippets allow you to do a lot of common things but you might need extra snippets which
are better aligned with your aims. To do so you will find all step definitions in `./modules/steps`. They
are separated in `given`, `when` and `then`. 

You define your snippet using regular expressions. This is pretty powerful as it allows you to create complex
sentences with multiple options. Everything that's within `"([^"]*)?"` gets captured and appended to the
callback. The last argument is always a callback function that you need to call when your step is done.
You can access the browser and your WebdriverIO instance with `browser`.

To assert values this boilerplate project comes with a [Chai](http://chaijs.com/) integration.

# Comments

You can add additional descriptive comments in your feature files.

gherkin
###
  This is a
  block comment
###
Feature: As a bystander
    I can watch bottles falling from a wall
    So that I can be mildly amused

# This is a single line comment
Scenario: check if username is present
    Given I login as "roboter" with password "test123"
    Then the username "roboter" should be present in the header
```