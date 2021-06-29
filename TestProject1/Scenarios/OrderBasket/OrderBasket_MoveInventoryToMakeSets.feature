Feature: OrderBasket_MoveInventoryToMakeSets

#This feature file contains automated manual tests of RAVAUT-827 on Jira
# select product sub type - set -stock from set
@Sets_MakeAndBreak,@Order_Basket
  Scenario: Move Inventory to make sets
    Given I am logged in Ingenta Commercial Application
    When I click on Inventory
    And I open set product "BXN Sports Set - Stock from Set"
    And I click on Sets Make & Break button
    And I select set product
    And I check the checkbox Move Inventory to Make Sets
    And I select product in the frame 
    And I click on Next button from Inventory Sets Make and Break window
    And I check the checkboxs beside the product name in the frame right side
    And I click on Next button from Inventory Sets Make and Break window
    And I check the checkboxes to select
    And I click on Finish to close the wizard
    Then Inventory Movement should be successfully done
    And I search for the set product
    And I click on Inventory tab from Product Information Panel
    And Inventory should be displayed under Set Product matching transaction