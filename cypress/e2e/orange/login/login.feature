Feature: Orange website Login

    I want to test Orange website Login

    @focus
    Scenario: Test Orange website with valid login credentials
        Given I am on the home page
        Then I should be redirected to the login screen
        When I enter username
        Then I expected username field to have a value
        And I enter password
        Then I expected password field to have a value
        When I click on login button
        Then I should be redirected to my dashboard