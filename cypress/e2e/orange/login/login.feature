Feature: Orange website Login

    I want to test Orange website Login

    Scenario: Test Orange website with valid login credentials
        Given I am on the home page
        Then I should be redirected to the login screen
        When I enter username
        Then I expected username field to have a value
        And I enter password
        Then I expected password field to have a value
        When I click on login button
        Then I should be redirected to my dashboard

    Scenario: Test Orange website with invalid username login credentials
        Given I am on the home page
        Then I should be redirected to the login screen
        When I enter invalid username
        Then I expected username field to have an invalid username value
        And I enter password
        Then I expected password field to have a value
        When I click on login button
        Then I should see Invalid credentials error message

    Scenario: Test Orange website with invalid password login credentials
        Given I am on the home page
        Then I should be redirected to the login screen
        When I enter username
        Then I expected username field to have a value
        And I enter invalid password
        Then I expected password field to have an invalid password value
        When I click on login button
        Then I should see Invalid credentials error message

    Scenario: Test Orange website with invalid login credentials
        Given I am on the home page
        Then I should be redirected to the login screen
        When I enter invalid username
        Then I expected username field to have an invalid username value
        And I enter invalid password
        Then I expected password field to have an invalid password value
        When I click on login button
        Then I should see Invalid credentials error message