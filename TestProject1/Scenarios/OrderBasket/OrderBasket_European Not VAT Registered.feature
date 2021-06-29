Feature: OrderBasket_European Not VAT Registered

#This feature file contains automated manual tests of RAVAUT-835 on Jira
# select product sub type - dvd product
@Order_Basket
  Scenario:1 Creating a new European NOt Vat Registered Person
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Customer button
    And I check the Create New Person checkbox
    And I select the Country "United Kingdom" 
    And I select a Type of Person "Standard"
    And I enter Forename "RAVE"
    And I enter Family Name "EuropeanNotVatRegistered"
    And I enter an Email address
    #And I enter an Area Code 01234
    #And I enter Number 
    #And I enter a Ext 981
    #And I enter Account No
    And I click on Next button
    #And I select a Job Title "Sales Assistant"
    And I enter Business Name "Ingenta"
    And I enter House No 29
    And I enter Floor "4th Floor"
    And I enter Building name "Shard"
    And I enter Street name "Abbey"
    And I enter District "Barnet"
    And I enter Town "South Bank"
    And I enter County "Kent"
    And I enter Postcode 
    And I click on Refresh button
    Then Address should be displayed in the Display Address frame
    And I check Open on Finish checkbox for Person
    And I click on Finish Button
    
@Order_Basket    
  Scenario:2 Verifying European Non Vat Registered company
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I open the product to verify details for dvd product "RAVE ROCKET DVD"
    And I click on New Order from folder list
    And I enter customer name in Ship To field "Mr. Louis SJB Clement"
    Then The Ship To, Bill To, User Addresses should be populated with the same street address
    And Account Number, Telephone Number and Email Address should be correctly displayed
    And I click on Order attributes tab
    And I change the Release Priority to "Immediate"
    And Order Date should be Today's date and Order Process Type should be "Invoice"
    And Order Type should be "Normal Sale" and The Currency Type should be "Euro"
    And Billing Plan should be "Advance Charge"
    And I click on the red arrow
    And I enter product on Orders Id wizard
    And I enter P/O Refrence
    And I enter Qty 1
    And I click on Add Item
    And I click on Brown pencil icon to edit the order line
    And I change the quantity of the product in the input field Quantity 4
    And Settings tab should have focus
    And Frames for Configure,Valuation,Supply Status,Net,Backorders,Held,Totals should be displayed
    And I click on Save button from Please Select a Product section
    And I click on blue colour left arrow icon on the top right hand side of the window
    And There should be Columns for Values, Supply, Backordered, Held, Totals
    And I retrieve the Total Value
    And I click on Checkout button
    And I search for the customer "Mr. Louis SJB Clement"
    And I click Trading tab
    And I click Account Profiles sub tab
    And I open a correct profile "Streamline Euro"
    And I click on Ledger tab from account receivables
    And value should be displayed under Euro Ledger
    And Vat should be displayed under Ledger tab
    And I click on Save Record and Close Form button to close the record
    And I click on Customer Service
    And I open the product record 
    And I click on Inventory tab from Product Information Panel
    And Inventory should be correctly downgraded
    And I close all the records 
    And I Click on Orders
    And I click on Billing Wave Release button
    And I click on refresh button from Documents window
    And Invoice note should be present in Documents window
    And I Select the Order Item, in the lower grid click on the link to the Invoice
    
    
    
    
    
    
  