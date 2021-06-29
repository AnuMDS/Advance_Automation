Feature: CreateCreditNote

#This feature file contains automated manual tests of RAVAUT-890 on Jira
#Select product of sub type - Book- Paperback

  Scenario: Placing an Order and Crediting Back 
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I verify the product "RAVE ROCKET Big Book" to be used
    And I click on Orders 
    And I click on New Order 
    And I enter a customer "Sandman Kurala" in Ship To field
    And I place an Order for the product "RAVE ROCKET Big Book"
    And I click Billing Wave Release
    And I click refresh on Documents
    And I open Invoice generated 
    And I click on Find an Order
    And I enter Document Reference and Search
    And I click on the transaction 
    Then This Transaction and Order Line Summary Value should be equal to Net Value  
    And I click on Credit from Order Actions
    And Credit Order Type window should be displayed
    And I select Credit Order Type as "Normal Credit"
    And I click refresh on my pending basket 
    And I click Open Basket
    And Type should be Credit Note and Order Type as Normal Credit
    And Customer, Product, Quantity, P/O ref should be correct 
    And Amount should be negative  
    And I click on Left facing arrow
    And I click Checkout button
    And Order should not be displayed in My Pending Basket
    And I click Billing Wave Release
    And I click refresh on Documents
    And I open the Credit Note generated
    And I enter Document Reference to Search
    And I click on the transaction
    And Order Type as Normal Credit and Order status as Completed Order should be displayed
    And Qty and Supply under This transaction should be negative
    And Doc Ref should be of format 0000000271C Credit Note
    And I click on Customer Service
    And Inventory should be reverted back to the product inventory
    And Credit and Invoice document types should be displayed in Ledger

   

