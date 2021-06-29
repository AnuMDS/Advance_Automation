Feature: GoodsInMiscellaneouswithSupplierOrder_InventoryDeliveryRecord

#This feature file contains automated manual tests of RAVAUT-704 on Jira
#Select product of type - Books
@InventoryManagement
  Scenario: Updating inventory with goods in transaction with supplier order and inventory delivery record 
  Given I am logged in Ingenta Commercial Application
  When I click on Inventory
  And I verify the product "Amazing Jake and the Shaggy Dog" to Goods In
  And I click on Goods In
  And I select a Site/Warehouse "Watford/Warehouse A" 
  And I select a before date "16/01/2020" from Received Date
  And I enter a message "customRef" in Reference
  And I click on Next button
  And I select the product in Received section 
  And I click on Supplier "TypeFace Printers" with delivery record with reference "999"
  And I select a delivery record
  And I enter a Delivery date "25/03/2020"
  And I enter Size 21
  And I enter number of packets 5
  And I enter number of loose packets 5
  And I enter Unit Weight 0.250 
  And I enter a message in the Comments "customComment"
  And I click on Add Button from Inventory goodsIn
  And I click on Ok button for message stating Inventory exists elsewhere in a different packet size
  And I click on Next button
  Then product should be displayed in the Stock manager page 
  And I click on Finish button to close Goods In wizard
  And I open product information panel from Inventory 
  And I click on Inventory History subtab 
  And product should be updated with Total quantity in the Inventory History tab 