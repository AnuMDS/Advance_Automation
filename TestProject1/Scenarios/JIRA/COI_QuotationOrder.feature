Feature: COI_QuotationOrder

#This feature file contains automated manual tests of RAVAUT-943 on Jira
#Select product of sub type - Book- Paperback
#Requires Admin login

  Scenario: This ticket tests quotation order placed via customer and order interface gateway (COI)
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
    And I enter Transaction Type "QUOT"
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
    And I enter Publisher Reference
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
    And Quotation should be generated with correct details
    And on order query the order status should be Completed order and order type should be Quotation
    And I click Release Quotes from order release
    And I click refresh on my pending basket 
    And Open basket button should be enabled
    And I click on Open Basket
    And Order Type should be Invoice and Order Type should be Normal Sale
    And Customer, Product, Quantity and Supply Value should be correct
    And I click on Left facing arrow
    And I retrieve order value
    And I click on Checkout button
    And I click on Billing Wave Release button
    And I click on refresh button from Documents window
    And I open Invoice generated 
    And On order query the order status should be completed order and order type should be normal sale
    And Order line status should be supply and correct supply quantity
    And I click on Customer Service
    And On customer AR invoice document type entries should get added with correct details