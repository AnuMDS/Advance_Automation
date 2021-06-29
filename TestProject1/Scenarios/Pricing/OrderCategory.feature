Feature: OrderCategory

@Pricing
  Scenario: Updating value under Order category field
    Given I am logged in Ingenta Commercial Application
    When I click on Product Management
    And I click on New Prices
    And I select "Standard Price" from Price Type and tab from the field
    And I select "Standard Price" from Price Name and tab from the field
    And I select "Sale" from License Type and tab from the field
    And I select "Euro" from Currency Type dropdown list from New product prices record wizard
    And I checked Approved field checkbox
    And I enter "562" in price field from New product prices record wizard
    And I enter "100.00" in Renew Price and tab from the field
    And I checked Tax Inclusive checkbox
    And I enter Effctive To Date as Future Date
    And I enter "Custom Data" into Code field
    And I enter "Custom Data" into Description field 
    And I select product "Great Barrier reef"
    And I select "Main Market Edition" product version dropdown list
    And I select "Book- Paperback" from Product Types and tab from the field
    And I select "Sale" from License Type and tab from the field
    And I select "Bookshops" from Order Category drop-down list
    And I click on Save and Close the record from New record prices record wizard
    And I search for the product "Great Barrier reef"
    And I click on Prices tab
    Then product should be added in the list with new value in order category under active prices tab
    And I click on All Prices tab from Prices tab
    And new value order category should be display under all prices tab