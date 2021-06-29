Feature: InventoryDeliveryRecord

#This feature file contains automated manual tests of RAVAUT-759 on Jira
#This feature file contains automated manual tests of RAVAUT-763 on Jira
@InventoryManagement
  Scenario: Verifying delivery record displayed under All tab
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I open product to verify details "Amazing Jake and the Banana Milkshake"
    And I click on Inventory
    And I navigate to New Delivery option under Inventory tab
    And I select Supplier "Harvey"
    And I select Destination Warehouse "Watford/Warehouse A" 
    And I enter Expected date and time "09:00"
    And I select Carrier "Air Business"
    And I click on New button to add the products
    And I select Supplier Order "Testing123"
    And I select a product "Amazing Jake and the Banana Milkshake" from dropdown
    And I click On OK button
    And I click on Save Record and Close Form icon 
    Then Under all tab coloumns Destination Warehouse as "Watford Warehouse A",Supplier as "Harvey" and Carrier Role Name as "Air Business" should be displayed
    