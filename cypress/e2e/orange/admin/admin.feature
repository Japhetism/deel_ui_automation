Feature: Orange website Admin

    I want to test Orange website admin page

    Scenario: Test Orange website admin username search
        Given I am on the dashboard page
        When I click on admin
        Then I should be redirected to admin page
        When I enter "Admin" in the username search input
        Then I expected to see "Admin" in the username search input
        When I click on search button
        Then I should see result with a column as "Admin"

    Scenario: Test Orange website admin user role search
        Given I am on the dashboard page
        When I click on admin
        Then I should be redirected to admin page
        When I select "Admin" as user role
        Then I expect "Admin" as the user role field value
        And I click on search button
        Then I should see result with a column as "Admin"

    Scenario: Test Orange website admin employee name search
        Given I am on the dashboard page
        When I click on admin
        Then I should be redirected to admin page
        When I enter employee hint name as "Jo" and select "John K Simmons" from employee dropdown
        Then I expect employee name field to have a value of "John K Simmons"
        And I click on search button
        Then I should see result with a column as "John Simmons"

    Scenario: Test Orange website admin status search
        Given I am on the dashboard page
        When I click on admin
        Then I should be redirected to admin page
        When I select an admin status as "Enabled"
        Then I expect admin status field to have a value of "Enabled"
        And I click on search button
        Then I should see result with a column as "Enabled"