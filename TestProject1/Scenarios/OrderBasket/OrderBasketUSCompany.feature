Feature: OrderBasketUSCompany

#This feature file contains automated manual tests of RAVAUT-833 on Jira
@Order_Basket
  Scenario:1 Creating US Company
  Given I am logged in Ingenta Commercial Application
  When I click on Customer Service
  And I click on New Customer button
  And I select the Create New Company check box
  And I select a Country "United States" 
  And I select a Type of Company "Bookseller" 
  And I enter Company name "RAVE USA"
  And I enter Company details
  And I enter Address details
  Then all the mandatory fields should not be blank
  And I click Save Record and Close Form button

#Select product of sub type - Book- Paperback  
 @Order_Basket
  Scenario:2 Testing order behaviour with US company
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I verify the product "Amazing Jake and the Red Balloon" to be used
    And I click on New Order button
    And I enter a company "RAVE USA" in Ship To field
    Then The Ship To, Bill To and End User Addresses should be similar 
    And Account Number,Telephone Number and Email Address should be displayed
    And I click Order Attributes tab
    And I set Release Priority to "Immediate"
    And Order Date should be today, Order Process Type should be "Invoice",
    And Order Type should be "Normal Sale", Currency Type should be "US Dollar", Billing Plan should be "Advance Charge"
    And I click on Red Arrow
    And I select transaction type "Invoice", Sale type "Normal Sale", and the Product 
    And I enter P/O Reference, Quantity 3, seller "Streamline Distribution"  
    And I click on Add button to create Order
    And I click Ok for pop up stating 'Product has been ordered in last 7 days'
    And I click on Edit Line icon
    And I enter Quantity 1 to Order
    And Configuration, Valuation, Supply Status, Net, sections should be displayed
    And Backorders, Held, Totals sections should be displayed
    And I click Save button
    And I click on Left facing arrow
    And I retrieve the Total Value
    And I click Checkout button
    And I click on Orders
    And I click Billing Wave Release
    And I click on Customer Service
    And I open customer information panel
    And I click Trading tab
    And I click Account Profiles sub tab
    And I open a correct profile "Streamline US Dollars"
    And I click on Ledger tab
    And I refresh the page
    And I click on recent Order
    And Order details should be correctly displayed
    And I click on the link to Invoice
    And I click Save Record and Close Form button
    And I click Save Record and Close Form button
    And I open product information panel
    And available quantity should be decreased
    And I click Save Record and Close Form button
    
    