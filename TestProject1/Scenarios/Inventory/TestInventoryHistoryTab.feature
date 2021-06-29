Feature: TestInventoryHistoryTab

#This feature file contains automated manual tests of RAVAUT-710 on Jira
@InventoryManagement
  Scenario: Verifying Inventory History tab
  Given I am logged in Ingenta Commercial Application
  When I click on Inventory
  And I click Find Product
  And I open product information panel for "SJB Paperback"
  And I click on Inventory tab 
  And I click on Inventory History Tab
  And I enter Version filter "Main Market Edition" 
  And I enter Site filter "New York"
  And I click on Apply button to apply filters
  Then transactions with Site selected should be displayed
