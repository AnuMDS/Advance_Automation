Feature: Partial returns of Same Product

#This feature file contains automated manual tests of RAVAUT-927 on Jira
#Select product of sub type - Book- Paperback


  Scenario: Partial returns of Same Product
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I open the product to verify details "Amazing Jake and the Red Balloon"
    And I click on Orders
    And I click on New Order
    And I enter customer name in Ship To field "account one"
    And I click on Red Arrow
    And I enter Product Name On Orders Id wizard
    And I select a transaction type "Invoice"
    And I select a Sale type "Normal Sale" 
    And I enter P/O Reference, Quantity 5, seller "Streamline Distribution" 
    And I click on Add Button to displayed product in the section below with correct information
    And I retrieve product name
    And I click on Left facing arrow
    And I click on Checkout button
    And I click on Billing Wave Release button
    And I click on refresh button from Documents window
    And I open Invoice generated
    Then Invoice note should be present in Documents window
    And I retrieve the document reference from orders dashboard
    And I Open Order Query and enter the document reference number
    And I Select the transaction and click on Returns from Order actions
    And I click on Apply and Confirm Returns
    And Returns Authorisation number (RAN) should be generated
    And I retrieve RAN number
    And I open Returns wizard from Inventory and enter RAN number
    And I select product and qty
    And I click on Add and Finish and Release
    And I click on Returns Auto Credit
    And I Click on Orders
    And I click on Billing Wave Release button
    And I click on refresh button from Documents window
    And Credit note should be generated
    And Credit amount should be display
    And I open the Credit Note generated
    And I repeat the procedure three times
    And I open order query to check credit amount
    And Every credit note should have same amount credited
    
    
    
    