Feature: Backorder
 
#This feature file contains automated manual tests of RAVAUT-851 on Jira
 @Order_Basket
  Scenario:1 Creating a backorder
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I verify the product "BXN  Sports - Football" to backorder
    And I click on New Order button
    And I enter a company "account one" in Ship To field
    And I click on Red Arrow
    And I select a transaction type "Invoice"
    And I select a Sale type "Normal Sale"
    And I select the Product to Order
    And I enter P/O Reference 
    And I enter Quantity 2 to Order
    And I click on Add button to create Order
    And I click Ok for pop up stating 'Product has been ordered in last 7 days'
    And I click on Left facing arrow
    And I click Checkout button
    And I click on Orders
    And I click Billing Wave Release
    And I click refresh on Documents
 
@Order_Basket
  Scenario:2 Releasing Backorders
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on Manage Backorders
    And I select a Product "BXN  Sports - Football" to release
    And I click on Blue plus icon to add Product
    And I select a Customer "account one" to release
    And I click on Blue plus icon to add Customer 
    #And I enter a Reference "US" to release
    #And I click on Blue plus icon to add Reference
    #And I enter a Customer Type "Bookseller" to release
    #And I click on Blue plus icon to add Customer Type
    #And I select Summary By Customer radio button
    #And I enter a Order Date from "12/07/2020" and To "12/07/2020"
    #And I enter a Inv Date From "06/07/2020" and To "07/07/2020"
    #And I enter a Qty From "100" and To "98"
    #And I select a Order Type "Invoice"
    #And I check the Include Gratis checkbox
    #And I select Supply site "Watford"
    And I click Next button 
    And I click Next button 
    And I click Next button 
    And I check Release checkbox
    And I check Override Product Supply Status checkbox
    And I click Next button 
    And I check Release to separate Billing wave checkbox
    And I click Finish button
    And I click OK for pop up stating 'Process flow has been submitted for processing'
    And I click No to Close the wizard
    And I click on Orders
    And I click Billing Wave Release
    And I click refresh on Documents
    And I click on Customer Service
    And I click on Find Orders
    And I enter Product 
    And I enter Customer
    And I click on Search button to search order
    And I click on the record for Summary
    Then Order Type as "AdviceNote" and Order Status as "Open Order" should be displayed 
    
    
    
    