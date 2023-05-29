Feature: Deel Contract Creation

    I want to test Deel Contract Creation

    Background:
        Given a logged in user with email "email" and password "password"

    Scenario: Test Deel contract creation
        Given "chaiwoo" is on the dashboard page with valid url "https://app.deel.com/"
        When I click on create a contract on the side menu
        And I click on fixed contract
        When I enter "Test Contract" as contract name
        And I select "Academic Advisor" as the role
        When I select "Canada" as the contractor's residence
        And I select "Manitoba" as province
        And I select "Mid (Individual Contributor Level 2)" as seniority level
        When I type "Test work scope" as scope of work
        And I set contract date as "05/04/1990"