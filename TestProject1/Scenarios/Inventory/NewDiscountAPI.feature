Feature: NewDiscountAPI

#This feature file contains automated manual tests of RAVAUT-779 on Jira
@InventoryManagement
  Scenario: Creating discount for product
    Given I am logged in Ingenta Commercial Application
    When I click on Product Management
    And I click on New Discount
    And I select Discount "Product Specific"
    And I enter a Name 
    And I enter a Description "Discount on products"
    And I enter a Start Date "09/06/2013"
    And I enter a End Date "10/06/2013"
    And I select the Top of List checkbox
    And I select the Allow Historical Purchases checkbox
    And I select the Allow Self Combination checkbox
    And I select product for creating discount "Amazing Jake and the Lost Weekend"
    And I click on New button in Discount section
    And I enter Break Quantity 1  
    And I enter Discount Percentage 10  
    And I enter Renewal Discount Percentage 20
    And I click Ok button     
    And I click Save Record and Close Form button
    And I open product information panel from Product Management
    And I click on Prices
    And I click on Discounts subtab
    Then Discount % and Renewal Discount % should be displayed
    And new discount record should have a unique ID
    
    