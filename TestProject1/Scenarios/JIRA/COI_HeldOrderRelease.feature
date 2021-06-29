Feature: COI_HeldOrderRelease(Non Taxable)

#This feature file contains automated manual tests of RAVAUT-940 on Jira
#Select product of sub type - Book- Paperback
#Requires Admin login

  Scenario: Testing held order placed and released via Customer and Order Interface gateway (COI)
    Given I am logged into Ingenta Commercial Application as Admin
    When I set Gateway Customer Order Interface as default Dashboard
    And I click on Customer Service
    And I verify the customer "account one" with Account status as On Hold
    And I verify the product "Amazing Jake and the Red Balloon" to order
    And I click on Gateway Administration
    And I click Customer and Order Interface Gateway and Create/Go to View
    And I click on New Record
    And I enter Interface Action "T"
    And I enter Transaction Source "EXCELORD"
    And I enter Transaction Reference
    And I enter Product Identifier
    And I enter Quantity
    And I enter Sale License "Sale"
    And I enter Customer Reference
    And I enter Currency "GBP"
    And I enter Price
    And I enter Discount
    And I enter Net Value
    And I enter Tax Value
    And I enter Order Despatch Charge
    And I enter Dispatch Tax Value
    And I uncheck Is Pre paid
    And I uncheck Is AllowBackorders
    And I enter Payment Reference
    And I enter Payment Method "C"
    And I enter Payment Value
    And I enter Payment Currency "GBP"
    And I enter the Customer Identifier under Ship To tab
    And I enter Bill To Identifier under Bill To tab
    And I click on Save and Close
    And I click on Run Customer Order Interface and Enter Gateway ID 36 
    And I click on Gateway Administration
    And I click on Customer and Order Interface Gateway and Create/Go to View
    And I open the Record  
    Then I verify the Process tab of the COI record
    And I click on Save and Close
    And I click on Orders 
    And I run the Billing Wave
    And I click refresh on Documents
    And I open Advice Note generated   
    And I change account status to Open
    And I Click on Find an Order
    And I enter the Advice Note Reference and Search
    And I click on the transaction 
    And I click on Release Held from Order Release tab
    And I click Yes to message stating 'Override Credit Status'
    And I click refresh on my pending basket 
    And I click Open Basket
    And Order Release Type should be Invoice and Order Type should be Normal Sale
    And Customer, Product, Quantity and Supply Value should be correct
    And I click on Left facing arrow
    And I click Checkout button
    And Order should not be displayed in My Pending Basket
    And I click Billing Wave Release
    And I click refresh on Documents
    And I open Invoice generated 
    And I enter the Invoice Reference and Search
    And Line /item Status should be Supply
    And I click on the transaction
    And Held quantity should be negative and Supply quantity should be correct
    And I click on Customer Service
    And Order details displayed should be correct in the customer AR
