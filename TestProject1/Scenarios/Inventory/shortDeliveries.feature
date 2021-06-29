Feature: ShortDeliveries

#This feature file contains automated manual tests of RAVAUT-760 on Jira
#This feature file contains automated manual tests of RAVAUT-764 on Jira
@InventoryManagement
  Scenario: Verifying goods into sites with receiving quantity less than the expected quantity Also Verifying Recent transaction is listed in the receipts tab
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I verify the supplier order and delivery record for "Product Air version"
    And I click on Inventory
    And I click on Goods In
    And I select a Site/Warehouse "Watford/Warehouse A"
    And I enter a message "customRef" in Reference
    And I click on Next button
    And I select a product to perform goodsIn "Product Air version"
    And I click on Supplier Name in the Received section with details populated
    #And I enter number same as expected packet size in the Size
    And I enter Size 20 in Received section from Goods In wizard
    And I enter number of packets less than the number mentioned in Expected quantity
    And I enter number of loose packets 1
    And I enter a message in the Comments "customComment"
    And I click on Add Button from Inventory goodsIn
    And I click on Next button
    Then product should be displayed in stock manager window with updated Available Qty
    And I perform Inventory movement bulk to forward locations and confirm pending transactions
    And I click on Finish Button to close confirm movements wizard
    
    
    ##DeliveryReceipts
    
    And I click on Inventory from Product Information Panel 
    And I click on Suppliers Orders tab from Product Information Panel
    And I select recent transaction with the help of reference  
    And I click on Receipts tab
    And Past Transaction should be display in panel
    And Recent transaction with Today's Date should be displayed under Receipts tab
    And I click on Close Form button
