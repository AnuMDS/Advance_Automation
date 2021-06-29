Feature: OrderBasket_Order with one product

#This feature file contains automated manual tests of RAVAUT-746 on Jira

#select product sub type - Books-paperback
@Order_Basket
  Scenario: Verifying Order with one product in basket
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I open the product to verify details "Amazing Jake and the Red Balloon"
    And I click on New Order from folder list
    And I enter customer name in Ship To field "account one"
    And I click on Red colour Arrow
    And I enter Product Name On Orders Id wizard
    And I enter P/O Refrence
    And I enter Qty 4
    And I select Seller Information Sold By "Streamline Distribution"
    And I click on Add Button to displayed product in the section below with correct information
    And I click on Brown pencil icon to edit the order line
    And I change the quantity of the product in the input field Quantity 5
    And I click on Save button from Please Select a Product section
    And I click on blue colour left arrow icon on the top right hand side of the window
    And I select Payment Type "On account"
    And I click on Checkout button
    And I click on Orders
    And I click on Refresh button from the action list icon in the window My Open Basket
    Then Record should be deleted from the My Open Baskets window
    And I click on Refresh button from the action list icon in the window Recent Orders
    And current order with Order Qty as 5, Bill to Name as "account one" should be displayed in the recent orders
    And I click on Billing Wave Release button
    And I click on Refresh button from the action list icon in the window Documents
    And Document Produced and Document Attached both the columns should be checked to generate relevant documents
    And Invoice note should be present in Documents window