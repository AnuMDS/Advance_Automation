 Feature: InventoryLocation

 #This feature file contains automated manual tests of RAVAUT-711 on Jira
@InventoryManagement
  Scenario: Creation of New Inventory Location record
    Given I am logged in Ingenta Commercial Application
    When I click on Inventory Location tab under Inventory
    And I click on New icon from toolbar 
    And I select Site "Watford"
    And I select Warehouse "Watford Warehouse A"
    And I select Location Type "Watford Warehouse A - Bulk"
    And I select Section "Watford A Bulk - Section 1"
    And I select Aisle "Location A"
    And I select Position "Watford Bulk A01"
    And I select Level "A"
    And I enter a message in the Description "Description data"
    And I select Size "Consolidation"
    And I select Status "Available"
    And I check the Mixed Products Allowed checkbox 
    And I check the Is Pickable checkbox
    And I click on Save record and close the form button
    Then Under Inventoy Location tab site as "Watford" ,warehouse as "Watford Warehouse A" and Description should be displayed 