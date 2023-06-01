Feature: Deel Register

    I want to test Deel create an account

    Scenario: Test Deel with valid create an account credentials
        Given I am on the home page 
        When I click on log in button on the home page
        Then I should be redirected to the login page with url as "https://app.deel.com/login"
        When I click on sign up
        Then I should be redirected to the sign up page with url as "https://app.deel.com/signup"
        And I select "I’m A Contractor"
        Then I should see "Sign up as a contractor to"
        And I click on "Next" button
        Then I should be redirected to a page with url with url path as "create-profile?user-type=contractor"
        When I enter all the sign up details
        | firstName | lastName | email | password | howYouHearAboutUs |
        | James | Doe | jamesdoe2023@gmail.com | P@ssword2023 | Employee/Contractor |
        Then I should see Create Your Deel Account button enabled
        When I click on "Create Your Deel Account"
        Then I should be redirected to contractor type page with url path as "contractor-type"
        When I select "I’m an individual" on contractor page
        And I click on "Next" button
        Then I should be redirected to confirmation page with url as "https://app.deel.com/confirmation"