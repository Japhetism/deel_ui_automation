Feature: Orange website Leave

    I want to test Orange website leave page

    Scenario: Test Orange website leave date range search
        Given I am on the dashboard page
        When I click on leave
        Then I should be redirected to the leave page
        When I select from date
        Then I should see the selected from date
        When I select to date
        Then I should see the selected to date
        