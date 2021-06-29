Feature: GOODSInMultipleProducts

#This feature file contains automated manual tests of RAVAUT-728 on Jira
#This feature file contains automated manual tests of RAVAUT-729 on Jira
#This feature file contains automated manual tests of RAVAUT-730 on Jira
#Select product of type - Books

@InventoryManagement
  Scenario:1 Create Supplier orders for products
  Given I am logged in Ingenta Commercial Application
  When I click on Inventory
  And I click on New Supplier Order
  And I enter Order Date "18/09/2020"
  And I select Order Type "Customer"
  #And I enter Order Reference code 
  And I select Currency Type "Euro"
  And I select Requisitioner "Sue Burch"
  #And I select Origin Warehouse "Watford/Warehouse A"
  And I select a Supplier "Garmin"
  And I select the checkbox Authorised
  And I enter Authorised Date "18/07/2020"
  And I click on New button to create Inventory Supplier Order
  And I select a Product "Amazing Jake and the Shaggy Dog", and enter Order Qty "1", Packet Size "10" 
  And I enter Advance Qty "15", unit cost "20", and Comment "1stProduct"
  And I click on Ok and New button
  And I select a Product "Amazing Jake and the Red Balloon", and enter Order Qty "2", Packet Size "20" 
  And I enter Advance Qty "25", unit cost "40", and Comment "2ndProduct"
  And I click on Ok and New button
  And I select a Product "Amazing Jake and the Green Bay Packers", and enter Order Qty "3", Packet Size "30"
  And I enter Advance Qty "35", unit cost "60", and Comment "3rdProduct" 
  And I click on Ok 
  And I click Save Record and Close Form button
  Then window should be closed without any Errors
  And I select "Supplier Orders" from My Options
  And products "Amazing Jake and the Red Balloon", "Amazing Jake and the Shaggy Dog", "Amazing Jake and the Green Bay Packers" should be displayed in all Supplier Orders

@InventoryManagement  
  Scenario:2  Adding & Moving Products
  Given I am logged in Ingenta Commercial Application
  When I click on Inventory
  And I click on Goods In
  And I select a Site/Warehouse "Watford/Warehouse A" 
  And I select a before date "16/01/2020" from Received Date
  And I enter a message "customRef" in Reference
  And I click on Next button
  And I select a product "Amazing Jake and the Shaggy Dog" in Received section
  And I select the Miscellaneous Goods In checkbox
  And I click Yes button to pop up message
  And I enter number of loose packets 2, Unit Weight 0.250 and Comment "customComment1"
  And I click on Add Button from Inventory goodsIn
  And I select a product "Amazing Jake and the Red Balloon" in Received section
  And I select the Miscellaneous Goods In checkbox
  And I click Yes button to pop up message
  And I enter number of loose packets 4, Unit Weight 0.250 and Comment "customComment2"
  And I click on Add Button from Inventory goodsIn
  And I select a product "Amazing Jake and the Green Bay Packers" in Received section
  And I select the Miscellaneous Goods In checkbox
  And I click Yes button to pop up message
  And I enter number of loose packets 6, Unit Weight 0.250 and Comment "customComment3"
  And I click on Add Button from Inventory goodsIn
  And I click on Cancel button next to  product "Amazing Jake and the Green Bay Packers" to cancel it
  And click Ok to confirm cancellation
  And I select a product "Amazing Jake and the Green Bay Packers" in Received section
  And I select the Miscellaneous Goods In checkbox
  And I click Yes button to pop up message
  And I enter number of loose packets 6, Unit Weight 0.250 and Comment "customComment3"
  And I click on Add Button from Inventory goodsIn
  Then number of records should be equal to records present
  And I click on Next button 
  And I drag first product into Watford/Warehouse A/Bulk/Section1
  And I retrieve From Location and Size
  And I select a To location "WAB1A04E" 
  And I enter number of loose products 1 to transfer
  And I enter number of packets 1 to transfer 
  And I click on Transfer button
  And confirmation message should pop up stating transferred quantity from Location1 to Location2
  And I click on Ok button for the message 
  And I click Ok button for message stating Location has less inventory
  And I click on Finish to close Warehouse Inventory Movement window
  And I drag second product into Watford/Warehouse A/Bulk/Section1
  And I retrieve From Location and Size
  And I select a To location "WAB1A02D" 
  And I enter number of loose products 1 to transfer
  And I enter number of packets 1 to transfer 
  And I click on Transfer button
  And confirmation message should pop up stating transferred quantity from Location1 to Location2
  And I click on Ok button for the message 
  And I click Ok button for message stating Location has less inventory
  And I click on Finish to close Warehouse Inventory Movement window
  And I drag third product into Watford/Warehouse A/Bulk/Section1
  And I retrieve From Location and Size
  And I select a To location "WAB1B10E" 
  And I enter number of loose products 1 to transfer
  And I enter number of packets 1 to transfer 
  And I click on Transfer button
  And confirmation message should pop up stating transferred quantity from Location1 to Location2
  And I click on Ok button for the message 
  And I click Ok button for message stating Location has less inventory
  And I click on Finish to close Warehouse Inventory Movement window
  And I click on Finish to close Goods In Wizard
 
  
   
  