Feature: ConfirmPendingTransactions

#This feature file contains automated manual tests of RAVAUT-689 on Jira
@InventoryManagement
  Scenario: To confirm all the pending and unconfirmed transactions
    Given I am logged in Ingenta Commercial Application
    When I click on Inventory
    And I click on Confirm Movements
    And I check the boxes associated with all the products in the list
    And I click on Confirm button
    And I click on Ok button to acknowledge the confirmation
    And I click on Finish button
    And I click on Confirm Movements
    Then confirmed products should be cleared from the list