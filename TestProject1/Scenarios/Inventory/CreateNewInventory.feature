Feature: CreateNewInventory

#This feature file contains automated manual tests of RAVAUT-772 on Jira
@InventoryManagement
  Scenario: Creation of new inventory site record
    Given I am logged in Ingenta Commercial Application
    When I click on Inventory
    And I click on Find Product tab
    And I enter Product name in search window "flora of the reefs"
    And I click on Inventory from Product Information Panel
    And I click on New button from Inventory
    And I select site "New York"
    And I select version "Main Market Edition"
    And I select Supply Status "Open"
    And I enter Current Packet Size 5
    And I enter Low Inventory Qty 2
    And I select Default Picking Location "New York"
    And I enter Min Pick Location Qty 1
    And I enter Location Maximum Qty 5
    And I enter Location Replenishment Qty 1
    And I checked the checkbox POD Enabled
    And I select POD Site "Bloggins POD Supplier"
    And I enter In Stock Date "20/10/2020"
    And I enter Out Of Stock Date "27/03/2023"
    And I enter Expected Availability "25/03/2020"
    And I enter Date Stock Replenished "29/03/2020"
    And I enter Date Stock Available "23/03/2021"
    And I enter Date Stock Unavailable "23/05/2021"
    And I enter No Stock Alert Date "10/05/2021"
    And I enter Low Stock Alert Date "01/05/2021"
    And I click on Save record and close form button in New Inventory Site Record window Toolbar
    Then New Inventory site should be created with "New York" as site and "Open" as SupplyStatus
    
##Unique Site has been required as same site is not acceptable