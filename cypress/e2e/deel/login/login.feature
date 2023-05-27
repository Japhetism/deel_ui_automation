Feature: Deel Login

    I want to test Deel Login

    Scenario: Test Deel with valid login credentials
        Given I am on the home page 
        When I click on log in button on the home page
        Then I should be redirected to the login page with url as "https://app.deel.com/login"
        When I enter email address as "<your email here>"
        And I enter password as "<your password here>"
        Then I should see email address field value as "<your email here>" and password field value as "<your password here>"
        When I click on log in button on the login page
        Then I should see a modal for otp
        When I enter otp from browser prompt
        Then I should see complete login button enabled
        And I click on complete login button
        Then I should be redirected to my dashboard with greetings to include my name as "<your name here>" and url as "https://app.deel.com/"
        
    Scenario: Test Deel with invalid login credentials
        Given I am on the home page 
        When I click on log in button on the home page
        Then I should be redirected to the login page with url as "https://app.deel.com/login"
        When I enter email address as "<your email here>"
        And I enter password as "<your password here>"
        Then I should see email address field value as "<your email here>" and password field value as "<your password here>"
        When I click on log in button on the login page
        Then I should see an error message as "Incorrect email or password"

    Scenario: Test Deel Google Authentication
        Given I am on the home page 
        When I click on log in button on the home page
        Then I should be redirected to the login page with url as "https://app.deel.com/login"
        When I click on login with Google button with email as "<your email here>" and password as "<your password here>"
