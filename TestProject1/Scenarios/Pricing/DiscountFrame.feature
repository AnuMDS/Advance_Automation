Feature: DiscountFrame

@Pricing
  Scenario: Updating value for order Quantity field under Discount tab 
    Given I am logged in Ingenta Commercial Application
    When I click on Product Management
    And I click on New Prices
    And I select a Price Type "Standard Price"
    And I select a Price Name "Standard Price"
    And I select "Sale" from License Type and tab from the field
    And I select "Euro" from Currency Type dropdown list from New product prices record wizard
    And I checked Approved field checkbox
    And I enter "678" in price field from New product prices record wizard
    And I enter "100.00" in Renew Price and tab from the field
    And I enter Effctive To Date as Future Date
    And I enter "Custom Data" into Code field
    And I enter "Custom Data" into Description field 
    And I select "Absolute Break" radio button
    And I select product "Flora of the reefs"
    And I select "Main Market Edition" product version dropdown list
    And I select "Book- Paperback" from Product Types and tab from the field
    And I select "Sale" from License Type and tab from the field
    And I click on Price Breaks tab
    And I right click on display box and click on New option to open Product Price Breaks record
    And I enter "9" in Break Quantity
    And I enter price "100.00" and click on Ok button
    And I select Discount Type "Concurrency"
    And I enter "Custom Data" into Name field
    And I enter "Custom Data" into Description textbox
    And I right click on display box below to select New option from Discounts tab
    And I enter "10" in Break Quanity from Discount Breaks record window
    And I enter "92" in Discount Percentage field 
    And I edit auto filled value in Renewal Discount Percentage to "8" and click on Ok button
    And I click on Save and Close the record from New record prices record wizard
    And I search for the product "Flora of the Reefs"
    And I click on Prices tab
    Then product should be added in the list with same licence type and price name under active prices tab
    And I click on All Prices tab from Prices tab
    And product should be display with same licence type and price name under all prices tab
    And I click on Discounts tab from product information panel 
    And product should be display under discounts tab with discount percentage and break quantity
    