Feature: StandingOrders-ProductVersionTypes

#This feature file contains automated manual tests of RAVAUT-907 on Jira

@Standing_Order
  Scenario: Testing Standing orders with product version types appropriately
    Given I am logged in Ingenta Commercial Application
    When I click on Product Lookups from folder list
    And I click on Product version types
    And I click on All product version types
    And I click on New button from all product version types
    And I enter Code "CODE"
    And I enter Description "DESCRIPTION"
    And I check Allow Multiple checkbox
    Then Focus should move to Bundle Version checkbox
    And I uncheck Allow Multiple checkbox
    And Focus should move to Bundle Version checkbox
    And I check Is Bundle Version checkbox
    And Earliest Order Date field should be mandatory
    And I select valid date in Earliest Order Date field
    And I uncheck Is Bundle Version checkbox
    And Earliest Order Date field should not be mandatory
    And Focus should move to Earliest Order Date
    And I save and close the record
    And I open the same record 
    And I click on Record History Button
    And I close the history window
    And I delete the record
    And Newly created record should be deleted from the list of all product version types
    
    
    
    
    
  