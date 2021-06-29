Feature: OrderBasket_PendingBasket

#This feature file contains automated manual tests of RAVAUT-755 on Jira
#select product sub type - Books-paperback
@Order_Basket
  Scenario: Verifying My open basket window under Orders homepage
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service 
    And I open the product to verify details "Amazing Jake and the Red Balloon"
    And I click on New Order from folder list
    And I enter customer name in Ship To field "Sandman Kurala"
    And I click on Red colour Arrow
    And I enter Product Name On Orders Id wizard
    And I enter P/O Refrence
    And I enter Qty 4
    And I select Seller Information Sold By "Streamline Distribution"
    And I click on Add Button to displayed product in the section below with correct information
    And I click on Brown pencil icon to edit the order line
    And I change the quantity of the product in the input field Quantity 10
    And I click on Save button from Please Select a Product section
    And I close the window
    And I navigate to Orders Homepage
    And I click on Refresh button from the action list icon in the window My Open Basket
    Then current order with Order Qty as 10, Bill to Name as "Sandman Kurala" should be displayed in the result page
    And I double click the order details
    And Order Basket window should be reopened and Enabled
    And I click on red cross icon to delete the order line
    And confirmation message should Pop up stating "Are you sure you want to delete this record?"
    And I click Yes in the pop up warning messsage window
    And record should be deleted from Orders Id wizard
    And I close the window
    And Pop up message should be displayed as "There are no items in this basket. Do you want to discard it?" 
    And I click Yes in the pop up warning messsage to close the window
    And I navigate to Orders Homepage
    And I click on Refresh button from the action list icon in the window My Open Basket
    And Record should be deleted from the My Open Baskets window
    