Feature: InventoryMovement

#This feature file contains automated manual tests of RAVAUT-698 on Jira
#Select product of type - Books
@InventoryManagement
  Scenario: Transfer quantity from Location1 to Location2
  Given I am logged in Ingenta Commercial Application
  When I click on Inventory
  And I verify product "Amazing Jake and the Shaggy Dog" 
  And I click on Inventory Movements
  And I select a site "Watford/Warehouse A"
  And I select a valid product 
  #And I select version of product "Main Market Edition"
  And I select a From location "WABM"
  And I select a To location "WAF3ZZZ" 
  And I enter a comment "Transfer qty"
  And I enter number of loose products 1 to transfer
  And I enter number of packets 1 to transfer 
  And I click on Transfer 
  Then confirmation message should pop up stating transferred quantity from Location1 to Location2 
  And I click on Ok button for the message 
  And I click Ok button for message stating Location has less inventory
  And I click Finish to close Warehouse Inventory Movement window
  And I confirm the Inventory movement transaction
  And I open product information panel from Inventory 
  And I click on Inventory History subtab
  And Site "Watford" should be listed with location selected in Inventory History
  