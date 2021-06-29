Feature: MoveBulkToForward

#This feature file contains automated manual tests of RAVAUT-709 on Jira
#Select product of type - Books

  Background:
  Given I am logged in Ingenta Commercial Application
  When I click on Inventory
  And I verify the product "Amazing Jake and the Red Balloon" to use 
  And I click on Inventory Movements
  And I select a site "Watford/Warehouse A"
  And I select a valid product 
  #And I select version of product "Main Market Edition"
  And I select a From location "WABM"

  @InventoryManagement  
  Scenario:1 Transfer goods to location with no previous stock of this product
  And I check the Empty Location Only checkbox
  And I select a Site "Watford" to filter To locations  
  And I select a Warehouse "Warehouse A" to filter To locations  
  And I select a Location Type "Forward" to filter To locations  
  And I select a Section "Section 3 Racks" to filter To locations
  And I select a To location "WAF3ZZZ" 
  And I enter a comment "BulkToForward"
  And I enter number of loose products 2 to transfer
  And I enter number of packets 2 to transfer 
  And I click on Transfer 
  Then confirmation message should pop up stating transferred quantity from Location1 to Location2  
  And I click on Ok button for the message 
  And I click Ok button for message stating Location has less inventory
  And I click Finish to close Warehouse Inventory Movement window
  And I confirm the Inventory movement transaction
  And I open product information panel from Inventory 
  And I click on Inventory History subtab
  And Total quantity should be updated in the Inventory History tab 

  @InventoryManagement
  Scenario:2 Transfer goods to location with this product already in stock
  And I check the Existing Product Locations Only checkbox
  And I select a Site "Watford" to filter To locations  
  And I select a Warehouse "Warehouse A" to filter To locations  
  And I select a Location Type "Forward" to filter To locations  
  And I select a Section "Section 3 Racks" to filter To locations
  And I select a To location "WAF3ZZZ" 
  And I enter a comment "custom"
  And I enter number of loose products 1 to transfer
  And I enter number of packets 2 to transfer 
  And I click on Transfer 
  Then confirmation message should pop up stating transferred quantity from Location1 to Location2  
  And I click on Ok button for the message 
  And I click Ok button for message stating Location has less inventory
  And I click Finish to close Warehouse Inventory Movement window
  And I confirm the Inventory movement transaction
  And I open product information panel from Inventory 
  And I click on Inventory History subtab 
  And Total quantity should be updated in the Inventory History tab 