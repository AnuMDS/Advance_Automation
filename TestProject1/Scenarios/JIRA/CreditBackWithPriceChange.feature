Feature: CreditBackWithPriceChange

#This feature file contains automated manual tests of RAVAUT-891 on Jira
#Select product of sub type - Book- Paperback

  Scenario: Testing order placed and credited back with price change
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I verify the product "Rave Rocket  and the Red Balloon" to be used
    And I click on Orders
    And I click on New Order 
    And I enter a customer "account one" in Ship To field
    And I place an order for the product "Rave Rocket  and the Red Balloon"
    And I click Billing Wave Release
    And I click refresh on Documents
    And I open Invoice generated 
    And I click on Customer Service
    And I go to Prices tab of the product information
    And I change the value in Price field 
    And I click on Orders 
    And I click on Find an Order
    And I enter Document Reference and Search
    And I click on the transaction 
    And I click on Credit from Order Actions
    Then Credit Order Type window should be displayed
    And I select Credit Order Type as "Normal Credit"
    And I click refresh on my pending basket 
    And I click Open Basket
    And Type should be Credit Note and Order Type as Normal Credit
    And Customer, Product, Quantity, P/O reference should be correct 
    And Amount should be negative
    And I click on Left facing arrow
    And I click Checkout button
    And Order should not be displayed in My Pending Basket
    And I click Billing Wave Release
    And I click refresh on Documents
    And I open the Credit Note generated
    And I click on Customer Service
    And Inventory should be reverted back to the product inventory
    And Credit and Invoice document types should be displayed in Ledger
    And Credit details displayed should be correct
    And values of the original invoice should be displayed and not the updated/changed price
