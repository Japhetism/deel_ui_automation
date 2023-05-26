Feature: Orange website Leave

    I want to test Orange website leave page

    Scenario: Test Orange website leave date range search
        Given I am on the dashboard page
        When I click on leave
        Then I should be redirected to the leave page
        When I select from date as "1990-01-03" from the date picker
        Then I should see "1990-01-03" as the selected from date
        When I select to date as "2023-05-20" from the date picker
        Then I should see "2023-05-20" as the selected to date
        