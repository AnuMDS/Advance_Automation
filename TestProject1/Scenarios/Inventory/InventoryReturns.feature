Feature: InventoryReturns

#This feature file contains automated manual tests of RAVAUT-690 on Jira
@InventoryManagement
  Scenario:  Managing returns of products from customers
    Given I am logged in Ingenta Commercial Application
    When I click on Inventory
    And I click on Returns
    And I select a Customer "Smalls McCoy"
    And I select a Product from Inventory returns "Amazing Jake and the Red Balloon"
    And I select a Version "Main Market Edition"
    And I enter Qty loose 1 to return
    And I enter Packets 2 to return
    And I enter Size 5 of packets
    And I enter Received Date "21/04/2020"
    And I enter a Comment "Generating return" 
    And I select a Return Reason "Received damaged"
    And I select a Waste Rsn "Damage due to bad packing or mishandling"
    And I click Add button
    Then reference number should be generated
    And I click Finish and Release button
    