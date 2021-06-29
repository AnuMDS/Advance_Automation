Feature: TestAPIsOnTopBanner

#This feature file contains automated manual tests of RAVAUT-934 on Jira
@Testing_APIsOnTopBanner
  Scenario: Testing APIs on top banner of the application
    Given I am logged in Ingenta Commercial Application
    When I check the elements from folder list 
    And I verify top banner buttons for Orders
    And I verify top banner buttons for Customer Services 
    And I verify top banner buttons for Inventory 
    And I verify top banner buttons for Sales & Marketing 
    And I verify top banner buttons for Standing Order Administration