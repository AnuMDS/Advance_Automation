Feature: MultipleDeliveries

#This feature file contains automated manual tests of RAVAUT-701 on Jira
#This feature file contains automated manual tests of RAVAUT-765 on Jira
@InventoryManagement
  Scenario: Multiple Deliveries with one supply order
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I verify the supplier order and delivery record for "Amazing Jake and the Red Balloon"
    And I click on Inventory
    And I click on Goods In
    And I select a Site/Warehouse "Watford/Warehouse A"
    And I enter a message "customRef" in Reference
    And I click on Next button
    And I select a product to perform goodsIn "Amazing Jake and the Red Balloon"
    And I select one of the supplier order from the list
    And I enter Size 10 in Received section from Goods In wizard
    And I enter number of packets 1
    And I enter number of loose packets 1
    And I enter a message in the Comments "customComment"
    And I click on Add Button from Inventory goodsIn
    And I select a product to perform goodsIn "Amazing Jake and the Red Balloon"
    And I select one of the supplier order from the list
    And I enter Size 10 in Received section from Goods In wizard
    And I enter number of packets 1
    And I enter number of loose packets 1
    And I enter a message in the Comments "customComment"
    And I click on Add Button from Inventory goodsIn
    And I click on Next button
    Then product should be displayed in stock manager window with updated Available Qty
    And I perform Inventory movement bulk to forward locations and confirm pending transactions
    And I click on Finish Button to close confirm movements wizard
    And GoodsIn wizard closes successfully with updated inventory details in Product Information panel
    
    
    
    