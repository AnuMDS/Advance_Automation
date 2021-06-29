Feature: CreditIntoAdjustments

#This feature file contains automated manual tests of RAVAUT-849 on Jira
#Select product of sub type - Book- Paperback
@Ledger,@Regression
   Scenario: 1 Creating an Order
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I verify product "Amazing Jake and the Shaggy Dog" to be used
    And I click on New Order button
    And I enter a company "account one" in Ship To field
    Then The Ship To, Bill To and End User Addresses should be similar 
    And Account Number,Telephone Number and Email Address should be displayed
    And I click Order Attributes tab
    And I set Release Priority to "Immediate"
    And I click on Red Arrow
    And I select transaction type "Invoice", Sale type "Normal Sale", and Product
    And I enter P/O Reference, Quantity 10, seller "Streamline Distribution"  
    And I click on Add button to create Order
    And I click Ok for pop up stating 'Product has been ordered in last 7 days'
    And I click on Left facing arrow
    And I click Checkout button
    And I click on Orders
    And I run Billing Wave Release
    And I click refresh on Documents

#Select product of sub type - Book- Paperback    
@Ledger,@Regression 
  Scenario: 2 Testing order process with Order Process Type as Credit Note 
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I verify product "Amazing Jake and the Shaggy Dog" to be used
    And I click on New Order button
    And I enter a company "account one" in Ship To field
    Then The Ship To, Bill To and End User Addresses should be similar 
    And Account Number,Telephone Number and Email Address should be displayed
    And I click Order Attributes tab
    And I enter Default PO Ref and click Apply
    And I select Order Process Type as "Credit Note" and Order Type as "Credit Into Adjustments"
    And I set Release Priority to "Immediate"
    And Order Date should be today, Currency Type should be "UK Sterling",and Billing Plan should be "Advance Charge"
    And I click on Red Arrow
    And P/O Ref displayed should be as entered in the Default PO Ref
    And I select the Product to credit quantity 1
    And I click Ok for pop up stating 'Product has been ordered in last 7 days'
    And I click on Edit Line icon
    And Configuration, Valuation, Supply Status, Net, sections should be displayed
    And Backorders, Held, Totals sections should be displayed
    And I enter Quantity 1 to credit
    And I click Save button
    And I click on Left facing arrow
    And I retrieve the Net Value
    And I click Checkout button
    And I click on Orders
    And I run Billing Wave Release
    And I click on Customer Service
    And I open customer information panel 
    And I click Trading tab
    And I click Account Profiles sub tab
    And I open a correct profile "Streamline Sterling"
    And I click on Ledger tab
    And I refresh the page
    And I click on recent Order
    And Product name and Amount should be correctly displayed
    