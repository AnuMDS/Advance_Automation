Feature: OrderBasket_Subscription

#This feature file contains automated manual tests of RAVAUT-839 on Jira
# select product sub type - subscription
@Order_Basket
 Scenario: Verifying Order process with Subscription Product
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I verify the details for Subscription product "SJB Subscription"
    And I click on New Order from folder list
    And I enter customer name in Ship To field "Sandman Kurala"
    Then The Ship To, Bill To, User Addresses should be populated with the same street address
    And Account Number, Telephone Number and Email Address should be correctly displayed
    And I click on Order attributes tab
    And I change the Release Priority to "Immediate"
    And Order Date should be Today's date and Order Process Type should be "Invoice"
    And Order Type should be "Normal Sale" and The Currency Type should be "UK Sterling"
    And Billing Plan should be "Advance Charge"
    And I click on the red arrow
    And I enter product on Orders Id wizard
    And I enter P/O Refrence
    And I enter Qty 1
    And I click on Add Item
    And I click on Brown pencil icon to edit the order line
    And values should be correctly displayed under Supply value and Total on Orders Id page
    And I change the quantity of the product in the input field Quantity 6
    And Settings tab should have focus
    And Frames for Configure,Valuation,Supply Status,Net,Backorders,Held,Totals should be displayed
    And I click on Save button from Please Select a Product section
    And I click on blue colour left arrow icon on the top right hand side of the window
    And There should be Columns for Values, Supply, Backordered, Held, Totals
    And I retrieve the Total Value
    And I click on Checkout button
    And I search for the customer "Sandman Kurala"
    And I click Trading tab
    And I click Account Profiles sub tab
    And I open a correct profile "Streamline Sterling"
    And I click on Ledger tab from account receivables
    And correct value should be posted to the Sterling Ledger
    And I click on Save Record and Close Form button to close the record
    And I Click on Orders
    And I click on Billing Wave Release button
    And I click on refresh button from Documents window
    And Invoice note should be present in Documents window
    And I Select the Order Item, in the lower grid click on the link to the Invoice
    And I click on Save Record and Close Form button to close the record
    