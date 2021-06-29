Feature: aOrderBasketUItest

#This feature file contains automated manual tests of RAVAUT-745 on Jira
#Select product of sub type - Book- Paperback
@Order_Basket

  Scenario:Testing Order basket UI
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I verify the product "Amazing Jake and the Red Balloon" to be used
    And I click on New Order button
    And I enter a company "account one" in Ship To field
    And I click on Red Arrow
    And I select a transaction type "Invoice"
    And I select a Sale type "Normal Sale"
    And I select the Product to Order
    And I enter P/O Reference
    And I enter Quantity 2 to Order
    And I select a seller "Streamline Distribution" in Sold By field
    And I click on Add button to create Order
    And I click Ok for pop up stating 'Product has been ordered in last 7 days'
    Then product should be displayed below with all the information submitted
    And Orders ID should be displayed with unique value on top of the page
    And buttons like Edit Line, Delete Line, Add/Edit Sundry Charge to Order Line should be displayed 
    And buttons like Order Line Promotions, Order Line OK should be displayed  
    


    
    
    