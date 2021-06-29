Feature: CreateCustomerOrderBasket

#This feature file contains automated manual tests of RAVAUT-843 on Jira
#Select product of sub type - Book- Paperback
@Ledger, @Regression
  Scenario: Creating new customer in order basket
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I verify product "Amazing Jake and the Green Bay Packers" to be used
    And I click on New Order button
    And I click on icon to the left of Ship To field 
    Then Create New Customer Wizard should be displayed 
    And I check the Create New Person checkbox
    And I select a Country "United Kingdom" and Type "Academic Individual"
    And I enter Person name "Flynn" 
    And I click Next button
    And Address Details page should be displayed
    And I enter 29 in the House No, "4th Floor" in Floor, "Main Building" in the Building field, "Main Street" in the Street Name
    And I enter "Bigtown" in the Town, "Countyshire" in the County and a Postcode
    And I check the Open on Finish checkbox
    And I click Finish button  
    And I click on Identifiers tab
    And Account Number should have been allocated
    And I click on Trading tab and set the Preferred Currency to "UK Sterling"
    And I click on Taxation sub tab and select the Country as "United Kingdom"
    And I create a new Account Profile as "Streamline Sterling"
    And I click Save Record and Close Form button
    And I click Save Record and Close Form button
    And new Company record should populate the Ship To, Bill To and End User Addresses 
    And I click Order Attributes tab
    And I set Release Priority to "Immediate"
    And I click on Red Arrow
    And I select transaction type "Invoice", Sale type "Normal Sale", and Product
    And I enter P/O Reference, Quantity 4, seller "Streamline Distribution" 
    And I click on Add button to create Order
    And I click Ok for pop up stating 'Product has been ordered in last 7 days'
    And I click on Left facing arrow 
    And I retrieve the Total Value
    And I click Checkout button
    And I click on Orders
    And I click Billing Wave Release
    And I click on Customer Service
    And I open the customer information panel
    And I click Trading tab
    And I click Account Profiles sub tab
    And I open a correct profile "Streamline Sterling" 
    And I click on Ledger tab
    And I refresh the page
    And I click on recent Order
    And Order details displayed should be correct
    And I click on the link to Invoice
    And I click Save Record and Close Form button
    And I click Save Record and Close Form button
    And I open product information 
    And available quantity should be decreased
    And I click Save Record and Close Form button