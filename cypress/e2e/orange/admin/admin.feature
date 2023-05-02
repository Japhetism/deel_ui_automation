Feature: Orange website Admin

    I want to test Orange website admin page

    Scenario: Test Orange website admin creation
        Given I am on the dashboard page
        When I click on admin
        Then I should be redirected to admin page
        When I enter admin search input
        #Then I expected admin search field to have a value
        When I click on search button
        Then I should see my result