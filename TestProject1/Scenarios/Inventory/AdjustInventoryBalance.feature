Feature: AdjustInventoryBalance

#This feature file contains automated manual tests of RAVAUT-768 on Jira
#This feature file contains automated manual tests of RAVAUT-769 on Jira
#Select product of type - Books
@InventoryManagement
Scenario: Updating inventory
  Given I am logged in Ingenta Commercial Application
  When I click on Inventory
  And I verify the product "Great Barrier reef" with Suppliers
  And I click on Goods In
  And I select a Site/Warehouse "Watford/Warehouse A" 
  And I select a before date "16/10/2020" from Received Date
  And I enter a message "customRef" in Reference
  And I click on Next 
  And I select the product in Received section 
  And I click on Main Market Edition under product version with reference "10003"
  And I enter Size 20
  And I enter number of packets to adjust inventory balance 5
  And I enter number of loose packets 2
  And I enter Unit Weight 0.250 
  And I enter a message in the Comments "adjust inventory"
  And I click on Add Button from Inventory goodsIn
  And I click on Ok button for message stating Inventory exists elsewhere in a different packet size
  And I click on Next 
  And I select the product to adjust inventory balance 
  And I click on Inventory Adjustment button
  And I enter a random Size 
  And I click on Apply button
  Then message should pop-up with Balance, Size, Packets, Loose updated successfully
  And I click Ok button for message stating Inventory adjusted successfully
  And I click on Finish button for Inventory Adjustment
  And I click on Finish button to close Goods In wizard


