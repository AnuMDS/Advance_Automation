Feature: Orders with Over Limit Account

#This feature file contains automated manual tests of RAVAUT-846 on Jira
  Scenario: Creating a new Company
  Given I am logged in Ingenta Commercial Application
  When I click on Customer Service
  And I click on New Customer button
  And I select the Create New Company check box
  And I select a Country "United Kingdom" 
  And I select a Type of Company "Bookseller" 
  And I enter a Company name "Over Limit Account"
  And I select a Website Type "Old"
  #And I enter Email address
  And I enter Area Code 01234
  And I enter Company Number 
  And I enter an Ext 981
  And I click on Next button
  #And I select a Job Title "Sales Assistant"
  And I enter Business Name "Ingenta" 
  And I enter House No 29
  And I enter Floor "4th Floor"
  And I enter Building name "Shard"
  And I enter Street name "Abbey"
  And I enter District "Brent"
  And I enter Town "South Bank"
  And I enter County "Kent"
  And I enter Postcode 
  And I click on Refresh button
  Then Address entered should be displayed in the Display Address frame
  And I check Open on Finish checkbox
  And I click on Finish Button
  And Company name displayed in information panel should be correct 
  And I click Trading tab
  And I click Account Profiles sub tab
  And I set credit limit of "0"
  
@Regression
  Scenario: Verifying Order process with account that has over limit
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I open the product to verify details "Amazing Jake and the Red Balloon"
    And I open the Zero price product to verify details "RAVE ROCKET and the Big Fat Wood Pigeon"
    And I open the Gratis product to verify details "The Tallest Bridge"
    And I click on New Order from folder list
    And I enter customer name in Ship To field "Over Limit Account"
    And I click on Red colour right arrow icon
    And I select book-Paperback product "Amazing Jake and the Red Balloon"
    And I enter P/O Refrence
    And I click on Add Item
    And I click on blue colour left arrow icon on the top right hand side of the window
    And I click on Checkout button
    And I Click on Orders
    And I click on Billing Wave Release button
    And I click on Customer Service
    And I click on Find Order from Customer services tab
    And I enter Customer Name "Over Limit Account"
    And I click on Search button  
    Then Order Status should be display "Held Order"
    And I click on Transactions tab
    And Under Transactions tab Line Item status should be display as "Hold"
    And I click on Refresh button from transactions tab
    And I click on the link to the Advice Note
    And I close Order Query page 
    And I click on Customer Service
    And I click on New Order from folder list
    And I enter Company Name in Ship To "Over Limit Account"
    And I click on Red colour right arrow icon
    And I select Zero Price Product "RAVE ROCKET and the Big Fat Wood Pigeon"
    And I enter P/O Refrence
    And I click on Add Item
    And I click on blue colour left arrow icon on the top right hand side of the window
    And I click on Checkout button 
    And I Click on Orders
    And I click on Billing Wave Release button
    And I click on Customer Service
    And I click on Find Order from Customer services tab
    And I enter Customer Name "Over Limit Account"
    And I click on Search button  
    And Order Status should be display "Held Order"
    And I click on Transactions tab
    And Under Transactions tab Line Item status should be display as "Hold"
    And I click on Refresh button from transactions tab
    And I click on the link to the Advice Note
    And I close Order Query page 
    And I click on New Order from folder list
    And I enter Company Name in Ship To "Over Limit Account"
    And I click on Order attributes tab
    And I enter Order Type "Gratis Item"
    And I click on Red colour right arrow icon
    And I select Gratis Product "The Tallest Bridge"
    And I enter P/O Refrence
    And I click on Add Item
    And I click on blue colour left arrow icon on the top right hand side of the window
    And I click on Checkout button 
    And I Click on Orders
    And I click on Billing Wave Release button
    And I click on Customer Service
    And I click on Find Order from Customer services tab
    And I enter Customer Name "Over Limit Account"
    And I click on Search button  
    And Order Status should be display "Completed Order" 
    And I click on Transactions tab
    And Under Transactions tab Line Item status should be display as "Supply"
    And I click on Refresh button from transactions tab
    And I click on the link to the Invoice
    And I close Order Query page 