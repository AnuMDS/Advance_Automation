Feature: OverDeliveries

#This feature file contains automated manual tests of RAVAUT-823 on Jira
@InventoryManagement
  Scenario: Verifying goods into sites with receiving quantity more than the expected quantity
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I verify the supplier order and delivery record for "Amazing Jake and the Therapist"
    And I click on Inventory
    And I click on Goods In
    And I select a Site/Warehouse "Watford/Warehouse A"
    And I enter a message "customRef" in Reference
    And I click on Next button
    And I select a product to perform goodsIn "Amazing Jake and the Therapist"
    And I select one of the Supplier Name in the Received section with details populated
    And I enter Size 20 in Received section from Goods In wizard
    And I enter number of packets more than the number mentioned in Expected quantity
    And I enter number of loose packets 1
    And I enter a message in the Comments "customComment"
    And I click on Add Button from Inventory goodsIn
    Then Pop-up window should be appeared  with alert message as Received Quantity has exceeded Expected Quantity
    And I click On Ok button from Popup
    And I click on Next button
    And product should be displayed in stock manager window with updated Available Qty
    And I perform Inventory movement bulk to forward locations and confirm pending transactions
    And I click on Finish Button to close confirm movements wizard