Feature: Login functionality

  Scenario: Successful login
    Given I launch the app
    When I enter a valid username and password
    And I click on the login button
    Then I should see the welcome message
    Then I logout from the iOS application

  Scenario: Unsuccessful login with invalid credentials
    Given I launch the app
    When I enter an invalid username and password
    And I click on the login button
    Then I should not see the welcome message
