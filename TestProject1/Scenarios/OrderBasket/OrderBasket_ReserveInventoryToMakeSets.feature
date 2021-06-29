Feature: OrderBasket_ReserveInventoryToMakeSets

#This feature file contains automated manual tests of RAVAUT-691 on Jira
# select product sub type - set -stock from set
@Sets_MakeAndBreak,@Order_Basket
  Scenario: Verifying set product and paperback product to Reserve Inventory to make sets with Stock from Sets
    Given I am logged in Ingenta Commercial Application
    When I click on Inventory
    And I open set product "BXN Sports Set - Stock from Set"
    And I click on Sets Make & Break button
    And I select set product
    And I check the checkbox Reserve Inventory To Make Sets
    And I enter Sets Required 10
    And I click on Finish Button
    And I click on OK button from popup window
    And I search for the first paperBack Product 
    And I click on Inventory tab from Product Information Panel
    Then Available Inventory should be less than the Physical Inventory
    And I click on Overview tab from product information panel
    And Awating Set Made-up should be displayed
    And I close the Product Information Panel
    And I search for the second paperBack Product  
    And I click on Inventory tab from Product Information Panel
    And Available Inventory should be less than the Physical Inventory
    And I close the Product Information Panel
    And I search for the set product
    And I click on Inventory tab from Product Information Panel
    And Inventory should be displayed under Set Product matching transaction
     