Feature: UnconfirmTransferTransaction

#This feature file contains automated manual tests of RAVAUT-708 on Jira
@InventoryManagement
  Scenario: To cancel the pending transactions
    Given I am logged in Ingenta Commercial Application
    When I click on Inventory
    And I click on Confirm Movements
    And I enter Product "Amazing Jake and the Shaggy Dog" in Search section
    And I enter Location "WAF3ZZZ" in Search section
    And I enter Site/Warehouse "Watford/Warehouse A" in Search section
    #And I select Inc Returns checkbox
    #And I select Include Goods In checkbox
    And I click on Search button from Inventory transactions
    And I check the boxes associated with all the products to cancel pending transactions 
    And I click on Cancel button
    And I click on Ok button to acknowledge the confirmation
    And I click on Finish button
    And I click on Confirm Movements
    Then cancelled product should be cleared from the list
    