Feature: TerritoryPrices

#This feature file contains automated manual tests of RAVAUT-564 on Jira
#This feature file contains automated manual tests of RAVAUT-692 on Jira
@Pricing
  Scenario: Updating value under territory prices field 
    Given I am logged in Ingenta Commercial Application
    When I click on Product Management
    And I click on New Prices
    And I select "Standard Price" from Price Type and tab from the field
    And I select "Standard Price" from Price Name and tab from the field
    And I select "Us Dollar" from Currency Type dropdown list from New product prices record wizard
    And I checked Approved field checkbox
    And I enter "562" in price field from New product prices record wizard
    And I enter "100.00" in Renew Price and tab from the field
    And I checked Tax Inclusive checkbox
    And I enter Effctive To Date as Future Date
    And I enter "Custom Data" into Code field
    And I enter "Custom Data" into Description field 
    And I select product "Colours of The Reef"
    And I select "Main Market Edition" product version dropdown list
    And I select "Book- Paperback" from Product Types and tab from the field
    And I select "Sale" from License Type and tab from the field
    And I select "United States" from Territory drop-down 
    And I click on Save and Close the record from New record prices record wizard
    And I search for the product "Colours of The Reef"
    And I click on Prices tab
    Then product should be added in the list view with new value in territory under active prices tab
    And I click on All Prices tab from Prices tab
    And New value in territory should be dispay under all prices tab
             
              