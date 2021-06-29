Feature: COI_PrepaidNormalOrder(Non Taxable)

#This feature file contains automated manual tests of RAVAUT-938 on Jira
#Select product of sub type - Book- Paperback
#Requires Admin login

  Scenario: Testing order placed via Customer and Order Interface gateway (COI)
    Given I am logged into Ingenta Commercial Application as Admin
    When I set Gateway Customer Order Interface as default Dashboard
    And I click on Customer Service
    And I verify the customer "account one" to be used
    And I verify the product "Amazing Jake and the Red Balloon" to order
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
    And I check Is Pre paid
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
    And I open Invoice generated 
    And Invoice should be displayed in Ledger with correct details
    
