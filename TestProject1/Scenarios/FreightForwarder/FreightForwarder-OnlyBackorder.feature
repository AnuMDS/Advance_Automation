Feature: FreightForwarder-OnlyBackorder

#This feature file contains automated manual tests of RAVAUT-913 on Jira
#Select product of sub type - Book- HardCover
@FreightForwarder
  Scenario: Verifying Freight Forwarder with backorder products
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I open backorder product to verify details "BXN Sports - Tennis"
    And I open backorder product to verify details "BXN Sports - Football"
    And I click on Orders
    And I click on New Order
    And I enter customer name in Ship To field "RAVE Freight forwarder"
    And I click Order Attributes tab
    And I enter Default PO Reference and click Apply
    And I click on red colour arrow
    And I enter backorder product "BXN Sports - Tennis"
    And I click On Add button
    And I enter backorder product "BXN Sports - Football"
    And I click On Add button
    And I click on blue colour arrow
    And I click on shipping charges icon
    And I select charge from the list offered on the checkout page
    And I click Apply after selecting charge 
    And I click on Return To Checkout 
    And I select Payment Type "Check/Cheque"
    And I enter Cheque number "ABC456671"
    And I select bank "ABN"
    And I click on Apply button from checkout window
    And I click on Checkout button
    And I click on Billing Wave Release button
    And I click on refresh button from Documents window
    And I open the Invoice note
    And I click on Find Orders from Orders homepage
    And I enter document reference 
    And I enter customer name
    And I click on search button
    Then Line Item status should be Backorder 
    And Order value should be correct
    And I release backorder for both the products
    And I close Order Query window
    And I click on Billing Wave Release button
    And I click refresh on Documents
    And I open the invoice for first backorder product
    And I open the invoice for second backorder product
    And I click on Find Orders to enter document reference and click on search button
    And Order status should be Completed order after release from backorders
    
    
    
    
    
    
    
   
    
    
    
    
    
    
    
    
    
    