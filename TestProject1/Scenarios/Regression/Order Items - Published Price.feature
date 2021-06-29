Feature: Order Items - Published Price

#This feature file contains automated manual tests of RAVAUT-848 on Jira
@Ledger,@Regression
  Scenario: Verfying order process with order items including Published Price
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I verify the details for product "SJB Paperback"
    And I click on New Order from folder list
    And I enter customer name in Ship To field "account one"
    Then The Ship To, Bill To, User Addresses should be populated with the same street address
    And Account Number, Telephone Number and Email Address should be correctly displayed
    And I click on Order attributes tab
    And Order Date should be Today's date and Order Process Type should be "Invoice"
    And Order Type should be "Normal Sale" and The Currency Type should be "UK Sterling"
    And Billing Plan should be "Advance Charge"
    And I change the Release Priority to "Immediate"
    And I click on the red arrow
    And I enter product on Orders Id wizard
    And I enter P/O Refrence
    And I enter Qty 1
    And I click on Add Item 
    And I click on Brown pencil icon to edit the order line
    And on top of the window highlighted information as "Currently Editing ISBN 13 : 978-0112111696 -  - SJB Paperback - (Book- Paperback) " should be displayed
    And correct values should be displayed under Supply value and Total on Orders Id page
    And I change the quantity of the product in the input field Quantity 6
    And Settings tab should have focus
    And Frames for Configure,Valuation,Supply Status,Net,Backorders,Held,Totals should be displayed
    And I click on Save button from Please Select a Product section
    And I click on blue colour left arrow icon on the top right hand side of the window
    And There should be Columns for Values, Supply, Backordered, Held, Totals
    And values should be correctly display in the supply column and Totals should be correct
    And I click on Checkout button
    And I Click on Orders
    And I click on Billing Wave Release button
    And I click on Customer Service
    And I click on Find Order from Customer services tab
    And I enter Customer Name "account one"
    And I click on Search button  
    And Order Status should be display "Completed Order"
    And I click on Transactions tab
    And Under Transactions tab Line Item status should be display as "Supply"
    And I click on Refresh button from transactions tab
    And I click on the link to the Advice Note
    And I search for the customer "account one"
    And I click Trading tab
    And I click Account Profiles sub tab
    And I open a correct profile "Streamline Sterling"
    And I click on Ledger tab
    And Correct value should be display under Ledger tab
    And I close the records 
    And I open the product record
    And I click on Inventory tab from Product Information Panel
    And Available Inventory should be decreased
    And I click on save record and close form button 
    