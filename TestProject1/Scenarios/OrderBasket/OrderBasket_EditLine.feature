Feature: OrderBasket_EditLine

#https://jira.ingenta.com/jira/browse/RAVAUT-750
#https://jira.ingenta.com/jira/browse/RAVAUT-754
#select product sub type - Books-paperback
@Order_Basket
  Scenario: Verifying Brown Pencil and Green Circle icons from the action buttons
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I open the product to verify details "Amazing Jake and the Red Balloon"
    And I click on New Order from folder list
    And I enter customer name in Ship To field "account one"
    And I click on Red colour Arrow
    And I enter Product Name On Orders Id wizard
    And I enter P/O Reference
    And I enter Qty 2
    And I select Seller Information Sold By "Streamline Distribution"
    And I click on Add Button to displayed product in the section below with correct information
    And I click on Brown pencil icon to edit the order line
    And I change the quantity of the product in the input field Quantity 4
    Then Orders Id should be displayed top of the window
    And on top of the window Highlighted information as "Currently Editing ISBN 13 : 978-0494001110 -  - Amazing Jake and the Red Balloon - (Book- Paperback) " should be displayed
    And Fields Type,Shipping To,Billing To should be disabled
    And From Please Select a Product section Quantity and Sold By fields should be Enabled
    And From Please Select a Product section Product, P/O Ref, Inventory fields should be Disabled
    And Save button should be Enabled
    And From Product Summary section all the fields should be disabled
    And Settings tab should be display
    And "Overrides", "Notes", "Texts" tabs should be visible
    And From Configure section under Settings tab License ID, Order Category, Publisher Ref should be Enabled
    And From Valuation section Published Price, Disc, Add1 Disc, Offer Disc and Net Price fields should be Enabled
    And Published price should be displayed with Dollar icon, Disc should be displayed with Product icon
    And Add1 Disc, Offer Disc and Net Price fields should be displayed with checkbox
    And From Supply Status section Supply, Backorders, Not Supp. and Held fields should be Disabled
    And From Supply Status section checkbox Is Gratis should be Disabled 
    And From Net section only Net Value field should be Enabled and Tax Value, Supply Value should be Disabled
    And From Backorders section all the fields should be Disabled
    And From Held section all the fields should be Disabled
    And From Total section Value, Tax, Total fields should be Enabled and Received field should be Disabled
    And Checkbox Activate License should be visible at the bottom of the list
    And I click on Save button from Please Select a Product section
    And Editing page should be closed after clicking Save without any error
    And Order Qty field should be updated
    And I click on Green Circle icon from Action Buttons to check the status of Order Line
    And confirmation message should pop up stating "Details Are Complete"
    