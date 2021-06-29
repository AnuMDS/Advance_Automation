Feature: InventoryDeliveriesRecord2

#This feature file contains automated manual tests of RAVAUT-759 on Jira
#This feature file contains automated manual tests of RAVAUT-731 on Jira
@InventoryManagement
  Scenario: Verifying delivery record displayed under deliveries tab
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I open the product to verify details "BXN  Sports - Futsal"
    And I click on Product Management
    And I click on Find Product from Product Management
    And I enter Product name in search window "BXN  Sports - Futsal"
    And I click on Inventory from Product Information Panel
    And I create new supplier order
    And I click on Deliveries tab
    And I click on New Inventory Deliveries Record after right clicking on any date in the calendar
    And I select Supplier "Garmin"
    And I select Destination Warehouse "Watford/Warehouse A"
    And I enter Expected date and time "09:00"
    And I select Carrier "Air Business"
    And I click on New button to add the products
    And I select Supplier Order from dropdown
    And I select a product "BXN  Sports - Futsal" from dropdown
    And I click On OK button
    And I click on Save Record and Close Form icon 
    Then Product information should be display in delivered dates in the calendar under Deliveries tab 
