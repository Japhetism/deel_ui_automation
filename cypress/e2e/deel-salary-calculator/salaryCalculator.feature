Feature: Deel Salary Calculator

    I want to test Deel Salary Calaculator

    Scenario: Test Deel Salary Calaculator
        Given I am on Deel salary calculator page
        When I filled all the required details
        | country | currency | grossSalary |
        | Belgium | USD | 3000 |
        And I click on calculate button
        Then I should see "Belgium" below the screen after calculation