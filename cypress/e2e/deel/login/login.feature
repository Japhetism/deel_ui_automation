Feature: Deel Login

    I want to test Deel Login

    Scenario: Test Deel with invalid login credentials
        Given I am on the home page 
        When I click on log in button on the home page
        Then I should be redirected to the login page with url as "https://app.deel.com/login"
        When I enter email address as "dhdg@a.com"
        And I enter password as "password"
        Then I should see email address field value as "dhdg@a.com" and password field value as "password"
        When I click on log in button on the login page
        Then I should see an error message as "Incorrect email or password"
