Feature: GoodsIn
#Select product of type - Books
#This feature file contains automated manual tests of RAVAUT-679 on Jira
  Background: 
  Given I am logged in Ingenta Commercial Application
  When I click on Inventory
  And I click on Goods In
  
@InventoryManagement  
  Scenario:1 Verifying all the fields of Settings window
  Then Goods In window should be displayed with menu items Goods In, Stock Manager and Settings 
  And focus should be on Settings 
  And Goods In should be checked 
  And Site/Warehouse, Location, Received Date, Time stamp and Reference fields should be displayed 
  And Customer field should be displayed 
  
@InventoryManagement  
  Scenario:2 Navigating from Settings to Goods In window
  And I select a Site/Warehouse "Watford/Warehouse A" 
  And I select a before date "22/01/2020" from Received Date
  And I enter a message "customRef" in Reference
  And I click on Next button 
  Then menu items Settings, Stock Manager and Goods In should be displayed
  And focus should be on Goods In 
  And Received section with Product, Delivery date and Delivery time fields should be displayed 
  And Versions and Reference field should be disabled

@InventoryManagement 
  Scenario:3 Verifying Stock Manager window
  And I select a Site/Warehouse "Watford/Warehouse A" 
  And I select a before date "16/01/2020" from Received Date
  And I enter a message "customRef" in Reference
  And I click on Next button
  And I select a product "Great Barrier Reef" 
  And I click on Main Market Edition under product version with reference "STOCK 07/11/2012"
  And I enter Size 20
  And I enter number of packets 5
  And I enter number of loose packets 5
  And I enter Unit Weight 0.250 
  And I enter a message in the Comments "customComment"
  And I click on Add button
  And I click on Ok button for message stating Inventory exists elsewhere in a different packet size
  And I click on Next button
  Then list of products should be displayed on right side with section as "Marshalling" 
  And menu items Settings, Stock Manager and Goods In should be displayed
  And focus should be on Stock Manager 
  And toolbar buttons Other Actions, Freeze, Unfreeze, Waste, Transfer, Loose to forward, Inventory Adjustment should be displayed
  And tree view of the inventory sites should be dispalyed on Left side

@InventoryManagement  
  Scenario:4 Verifying Warehouse Inventory Movement window
  And I select a Site/Warehouse "Watford/Warehouse A" 
  And I select a before date "16/01/2020" from Received Date
  And I enter a message "customRef" in Reference
  And I click on Next button
  And I select a product "Great Barrier reef" 
  And I click on Main Market Edition under product version with reference "STOCK 07/11/2012"
  And I enter Size 0
  And I enter number of packets 0
  And I enter number of loose packets 5
  And I enter Unit Weight 0.250 
  And I enter a message in the Comments "customComment"
  And I click on Add button
  And I click on Ok button for message stating Inventory exists elsewhere in a different packet size
  And I click on Next button
  And I click on the product and drag it into Bulk sites Marshalling/Section1 or Forward site Waste
  Then Warehouse Inventory Movement window should be displayed
  #And I select a To location "WAX"
  And Waste Rsn, Packets and Qty loose fiels should be enabled
  
  
  
  