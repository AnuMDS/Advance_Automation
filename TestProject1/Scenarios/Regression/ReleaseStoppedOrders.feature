Feature: ReleaseStoppedOrders

#This feature file contains automated manual tests of RAVAUT-864 on Jira
#Select product of sub type - Book- Paperback.   
 @Regression
  Scenario:1 Creating a Held Order
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I verify product "Amazing Jake and the Green Bay Packers" to be used
    And I click on New Order button
    And I enter a company "RAVE TemporaryStop" in Ship To field
    Then The Ship To, Bill To and End User Addresses should be similar 
    And Account Number,Telephone Number and Email Address should be displayed
    And I click Order Attributes tab
    And I enter Default PO Ref and click Apply
    And I set Release Priority to "Immediate"
    And Order Date should be today, Currency Type should be "UK Sterling",and Billing Plan should be "Advance Charge"
    And I click on Red Arrow
    And P/O Ref displayed should be as entered in the Default PO Ref
    And I select the Product 
    And I click on Add button to create Order
    And I click Ok for pop up stating 'Product has been ordered in last 7 days'
    And I click on Left facing arrow
    And columns like Supply, Backordered, Held, Totals should be displayed
    And I click Checkout button
    And I click on Orders
    And I run Billing Wave Release
    And I click refresh on Documents

#Held order should exist before running the below scenario.
#Select product of sub type - Book- Paperback.  
 @Regression
  Scenario: 2 Releasing orders through Customer Record
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I verify the product "Amazing Jake and the Green Bay Packers" to be used
    And I verify the product "Amazing Jake and the Red Balloon" to be used
    And I click on Orders
    And I click on New Order
    And I enter a company "RAVE TemporaryStop" in Ship To field
    And I enter Default PO Ref "SS072" and uncheck Merge Invoices where possible checkbox
    And I click on Red Arrow
    Then P/O Ref should be displayed as entered in the Default PO Ref
    And I select transaction type "Invoice",  Sale type "Normal Sale", a Product "Amazing Jake and the Red Balloon" 
    And I enter Quantity 5 and seller "Streamline Distribution"
    And I add the order to basket
    And I click on Left facing arrow
    And I checkout
    And I run Billing Wave Release
    And I click refresh on Documents
    And I open the Advice note generated
    And I click on New Order
    And I enter a company "RAVE TemporaryStop" in Ship To field
    And I enter Default PO Ref "RR456" and uncheck Merge Invoices where possible checkbox
    And I click on Red Arrow
    And P/O Ref should be displayed as entered in the Default PO Ref
    And I select transaction type "Invoice",  Sale type "Normal Sale", a Product "Amazing Jake and the Green Bay Packers" 
    And I enter Quantity 4 and seller "Streamline Distribution"
    And I add the order to basket
    And I click on Left facing arrow
    And I checkout 
    And I run Billing Wave Release
    And I click refresh on Documents
    And I open the Advice note generated
    And I click on New Order
    And I enter a company "RAVE TemporaryStop" in Ship To field
    And I enter Default PO Ref "ZZ789" and uncheck Merge Invoices where possible checkbox
    And I click on Red Arrow
    And P/O Ref should be displayed as entered in the Default PO Ref
    And I select transaction type "Invoice",  Sale type "Normal Sale", a Product "Amazing Jake and the Green Bay Packers" 
    And I enter Quantity 4 and seller "Streamline Distribution"
    And I add the order to basket
    And I click on Left facing arrow
    And I checkout
    And I run Billing Wave Release
    And I click refresh on Documents
    And I open the Advice note generated
    And I click on New Order
    And I enter a company "RAVE TemporaryStop" in Ship To field
    And I enter Default PO Ref "PP896" and uncheck Merge Invoices where possible checkbox
    And I click on Red Arrow
    And P/O Ref should be displayed as entered in the Default PO Ref
    And I select transaction type "Invoice",  Sale type "Normal Sale", a Product "Amazing Jake and the Red Balloon" 
    And I enter Quantity 4 and seller "Streamline Distribution"
    And I add the order to basket
    And I click on Left facing arrow
    And I checkout 
    And I run Billing Wave Release 
    And I click refresh on Documents
    And I open the Advice note generated
    And I click on Customer Service
    And I open customer information panel 
    And I navigate to open account profile "Streamline Sterling"
    And I change the credit status to "Account Open"
    And I open customer information panel
    And I navigate to open account profile "Streamline Sterling"
    And I click on Stopped Orders tab
    And I select orders and click on Release Held Lines
    And I click on Orders
    And I run Billing Wave Release
    And I click refresh on Documents
    And I click Find an Order
    And I search for transactions for Customer under Order Query
    And Order Status as Completed Order should be displayed for each transaction 
    And I click on Customer Service
    And I open customer information panel 
    And I navigate to open account profile "Streamline Sterling"
    And I change the credit status to "Stop\On Hold"
   
@Regression
  Scenario:3 Releasing orders through Order Query
   Given I am logged in Ingenta Commercial Application
   When I click on Customer Service
   And I open customer information panel for "RAVE TemporaryStop"
   And I navigate to open account profile "Streamline Sterling"
   And I change the credit status to "Account Open"
   And I click on Find Orders
   And I search for transactions for Customer under Order Query
   And I uncheck all the checkboxes except Held lines and Search
   And I select a held order
   And I click on Release Held from Order Release tab
   And I click Yes to message stating 'Override Credit Status'
   And I click refresh on my pending basket until the record is displayed
   And I click on Open Basket
   And I click on Left facing arrow
   And I make payment 
   And I click Checkout button
   And I close open order query and my pending basket windows
   And I click on Orders
   And I run Billing Wave Release
   And I click refresh on Documents
   And I click on Customer Service
   And I click on Find Orders
   And I search for transactions for Customer under Order Query
   And I uncheck all the checkboxes except Held lines and Search
   And I select same held order selected above
   Then Order Status as Completed Order should be displayed for the transaction
   And I close the Order Query 
   And I click on Customer Service
   And I open customer information panel for "RAVE TemporaryStop"
   And I navigate to open account profile "Streamline Sterling"
   And I change the credit status to "Stop\On Hold"

   
    