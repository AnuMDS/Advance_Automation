Feature: Amend_CloningOfCancelledSubscriptionOrders

#This feature file contains automated manual tests of RAVAUT-937 on Jira
#Subscription product use in this test

  Scenario: This ticket tests cancelled subscription orders and amend/cloning of cancelled subscription orders
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I create subscription product
    And I open customer record for "account one" to verify profile "Streamline Sterling"
    And I click on Orders
    And I click on New Order
    And I enter a customer "account one" in Ship To field
    And I click on Red Arrow
    And I select Product Name On Orders Id wizard
    And I enter P/O Reference, Quantity 1
    And I click on Add Button to displayed product in the section below with correct information
    And I retrieve product name
    And I click on Left facing arrow
    And I click on Checkout button
    And I click on Billing Wave Release button
    And I click on refresh button from Documents window
    Then Invoice note should be present in Documents window
    And I retrieve the document reference from orders dashboard
    And I Select the Order Item, in the lower grid click on the link to the Invoice
    And I open order query to select radio button Subscriptions/Trials/IC and enter document reference number
    And I select the order line and click on Preview
    And Order status should be Active Subscription
    And I click on order overrides tab
    And I select Cancel Reason "Lapsed"
    And I enter Cancel Reference and click on Cancel Subscription
    And Publisher's message window should appear with message Organization Only Rule and click on Ok
    And Order status should be updated to Lapsed
    And I go to order actions and select Amend/Clone
    And I click refresh on my pending basket 
    And Open basket button should be enabled
    And I click on Open Basket
    And Order Type should be Invoice and Order Type should be Normal Sale
    And Customer, Product, Quantity, P/O ref details should be correct
    And I click on Left facing arrow
    And I retrieve order value
    And I click on Checkout button
    And I click on Billing Wave Release button
    And I click on refresh button from Documents window
    And Two documents should be generated invoice and credit note
    And credit note document number should have suffix C
    And I retrieve both the document ref number
    And I open the documents generated
    And I click on Customer Service
    And Credit and Invoice document type entries should display with correct details

