Feature: ProformaPayment

#This feature file contains automated manual tests of RAVAUT-866 on Jira
    Background:
    Given I am logged in Ingenta Commercial Application
    
@Regression
    Scenario:1 Creating Proforma 
    When I click on Customer Service
    And I click on New Order from folder list
    And I enter Company Name in Ship To "account one"
    Then The Ship To, Bill To, User Addresses should be populated with the same street address
    And Account Number, Telephone Number and Email Address should be correctly displayed
    And I click on Order attributes tab
    And I enter default P/O ref
    And I click on Apply button
    And I select Order Process Type "Proforma" 
    And I click on the red arrow
    And I enter Product Name On Order Id wizard "Amazing Jake and the Red Balloon"
    And I enter Qty 1
    And I click on Add Item
    And I click on blue colour left arrow icon on the top right hand side of the window
    And I click on Checkout button
    And I Click on Orders
    And I click on Billing Wave Release button
    And I click on Refresh button from the action list icon in the window documents
 
@Regression  
    Scenario:2 Verifying Order Type - Proforma
    When I click on Customer Service
    And I click on Find Order to open Order Query window
    And I select Customer Name "account one"
    And I click on Search button
    And I select Order Process Type from Order Query window "Proforma"
    And I select Order Type from order query window "Proforma"
    And I click on Search button
    And I close the search criteria field
    And I click on Order Actions
    Then Popup window should be named as "Order Amend"
    And Change from Proforma to Invoice checkbox Should be checked
    And ShipTo, BillTo and End user fields should be duly filled
    And I click on OK button from order Amend window
    And I click on Refresh button from popup window until the record is displayed 
    And Popup window name should be displayed as "My Open Baksket"
    And Open Basket button should be enabled once row should be populated
    And I click on Open Basket button from My Open Basket window
    And I click on left side blue colour arrow
    And I select Payment mode "Check/Cheque"
    And I enter Cheque number "ABC45667"
    And I select bank "ABN"
    And I click on Apply button from checkout window
    And I click on Checkout button
    And I close My Open Basket window
    And I close Order Query window
    And I Click on Orders
    And I click on Billing Wave Release button
    And I click on Find Order to open Order Query window
    And I select Customer Name "account one"
    And I click on Search button
    And I select Order Process Type from order query window "Proforma"
    And I select Order Type from order query window "Proforma"
    And I click on Search button
    And I select order from gridView
    And Order status should be display as "Converted To Invoice"
    And I Clear filters applied on Order Query
    And I click on Search button
    And I select first row
    And Order status should be display as "Completed Order"
    And I click on Transactions tab
    And Transactions tab should be display Original proforma record and invoice record in the frame
    And Order value should be match the Total Order Value on the checkout page of order basket
    And I close all the open windows
    
    
    
    