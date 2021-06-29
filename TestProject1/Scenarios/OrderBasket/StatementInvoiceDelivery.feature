Feature: StatementInvoiceDelivery

#This feature file contains automated manual tests of RAVAUT-831 on Jira
#Select products of sub type - Book- Paperback
@Order_Basket

Scenario:1 Creating Company RAVE General
  Given I am logged in Ingenta Commercial Application
  When I click on Customer Service
  And I click on New Customer button
  And I select the Create New Company check box
  And I select a Country "United Kingdom" 
  And I select a Type of Company "Bookseller" 
  And I enter Company name "RAVE General"
  And I enter Company details
  And I enter Address
  Then all the mandatory fields should not be blank 
  And I click Save Record and Close Form button

@Order_Basket 
Scenario:2 Creating Company RAVE Invoice
  Given I am logged in Ingenta Commercial Application
  When I click on Customer Service
  And I click on New Customer button
  And I select the Create New Company check box
  And I select a Country "United Kingdom" 
  And I select a Type of Company "Bookseller" 
  And I enter Company name "RAVE Invoice"
  And I enter Company details
  And I enter Address
  Then all the mandatory fields should not be blank 
  And I click Save Record and Close Form button 
  
 @Order_Basket
  Scenario:3 Testing statements, invoice and delivery records related to orders
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I verify the product "Amazing Jake and the Red Balloon" to be used
    And I verify the product "Amazing Jake and the Shaggy Dog" to be used
    And I open customer information panel for "account one"
    And I click Trading tab from companies record
    And I uncheck the Orders Allowed checkbox
    And I click Save Record and Close Form button
    And I click on New Order button
    And I enter a company "account one" in Ship To field
    Then message stating 'Orders Are Not Allowed For This Account' should be displayed
    And I enter a company "RAVE Invoice" in Ship To field
    And I click Order Attributes tab
    And I set Release Priority to "Immediate"
    And I click on Red Arrow
    And I select transaction type "Invoice", Sale type "Normal Sale", first Product "Amazing Jake and the Red Balloon" 
    And I enter P/O Reference, Quantity 1, seller "Streamline Distribution" for first product 
    And I click on Add button to create Order
    And I click Ok for pop up stating 'Product has been ordered in last 7 days'
    And I click on Edit Line icon
    And Configuration, Valuation, Supply Status, Net, sections should be displayed
    And Backorders, Held, Totals sections should be displayed
    And I click Save button
    And I click on Left facing arrow
    And I retrieve the Total Value for first product
    And I click Checkout button
    And I click on New Order button
    And I enter a company "RAVE General" in Ship To field
    And I click Order Attributes tab
    And I set Release Priority to "Immediate"
    And I click on Red Arrow
    And I select transaction type "Invoice", Sale type "Normal Sale" and a second Product "Amazing Jake and the Shaggy Dog" 
    And I enter P/O Reference, Quantity 1, seller "Streamline Distribution" for second product  
    And I click on Add button to create Order
    And I click Ok for pop up stating 'Product has been ordered in last 7 days'
    And I click on Left facing arrow
    And I retrieve the Total Value for second product
    And I click Checkout button
    And I click on Orders
    And I click Billing Wave Release
    And I click on Customer Service
    And I open customer information panel for "RAVE Invoice"
    And I click Trading tab
    And I click Account Profiles sub tab
    And I open a correct profile "Streamline Sterling"
    And I click on Ledger tab
    And I refresh the page
    And I click on recent Order
    And Order details should be correctly displayed for first product
    And I click on the link to Invoice
    And I click Save Record and Close Form button
    And I click Save Record and Close Form button
    And I open product information panel for product "Amazing Jake and the Red Balloon"
    And available quantity should be decreased for first product
    And I click Save Record and Close Form button
    And I open customer information panel for "RAVE General"
    And I click Trading tab
    And I click Account Profiles sub tab
    And I open a correct profile "Streamline Sterling"
    And I click on Ledger tab
    And I refresh the page
    And I click on recent Order
    And Order details should be correctly displayed for second product
    And I click on the link to Invoice
    And I click Save Record and Close Form button
    And I click Save Record and Close Form button
    And I open product information panel for product "Amazing Jake and the Shaggy Dog"
    And available quantity should be decreased for second product
    And I click Save Record and Close Form button
    And I open customer information panel for "account one"
    And I click Trading tab
    And I Check the Order Allowed checkbox
    And I click Save Record and Close Form button