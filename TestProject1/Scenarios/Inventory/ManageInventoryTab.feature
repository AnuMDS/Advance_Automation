Feature: ManageInventoryTab

#This feature file contains automated manual tests of RAVAUT-707 on Jira
@InventoryManagement
 Scenario: Test the Manage Inventory Tab 
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I open product to verify details "Amazing Jake and the Banana Milkshake"
    And I click on Product Management
    And I click on Find Product from Product Management
    And I enter Product name in search window "Amazing Jake and the Banana Milkshake"
    And I click on Inventory from Product Information Panel
    And I click on Manage Inventory tab
    And I select Site name "Watford"
    And I select Warehouse name "Watford Warehouse A"
    #And I select Location "Watford Warehouse A - Forward"
    And I click on Apply button under manage inventory tab
    And I drag the product and Drop under Waste 
    And I select Waste Rsn "Exhibition Waste"
    #And I enter packets 1
    And I enter Qty Loose from warehouse inventory movement 1
    And I click on Transfer button
    And I click on finish button
    Then Available Qty column from Manage Inventory tab should be changed