Feature: ProductSearchSeriesMode

#This feature file contains automated manual tests of RAVAUT-861 on Jira
@Regression
  Scenario: Testing Product Search module
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on Find Product
    And I enter name in the search bar "series", "home"
    And I check Series Mode checkbox 
    And I click on Search 
    Then Title column should be displayed 
    And Series Name column should be displayed with search string included
    And data under title should begin with "[SN: 0]"
    And columns like "Series Primary Identifier" and "Series Name" should be displayed
  
