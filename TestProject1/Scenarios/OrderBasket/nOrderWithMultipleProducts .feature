Feature: nOrderWithMultipleProducts 

#This feature file contains automated manual tests of RAVAUT-747 on Jira
#Select products of sub type - Book- Paperback

 @Order_Basket
  Scenario:  Transaction process with multiple products to place order
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I verify the product "Amazing Jake and the Red Balloon" to be used
    And I verify the product "Amazing Jake and the Shaggy Dog" to be used
    And I verify the product "Amazing Jake and the Green Bay Packers" to be used
    And I click on Orders
    And I click on New Order 
    And I enter a company "account one" in Ship To field
    And I click on Red Arrow
    And I select transaction type "Invoice", Sale type "Normal Sale", a Product "Amazing Jake and the Red Balloon" 
    And I enter P/O Reference, Quantity 2, seller "Streamline Distribution"  
    And I click on Add button to create Order
    And I click Ok for pop up stating 'Product has been ordered in last 7 days'
    And I click on Add/ Edit Sundry Charge to Order Line icon
    And I select a Sundry Charge Type "Author Rights", Invoice Group "Streamline Distribution", Organisation "Streamline Distribution" 
    And I enter a Charge Value 2
    And I click Save button
    And I select transaction type "Invoice", Sale type "Normal Sale", a Product "Amazing Jake and the Shaggy Dog" 
    And I enter Quantity 3, seller "Streamline Distribution"  
    And I click on Add button to create Order
    And I click Ok for pop up stating 'Product has been ordered in last 7 days'
    And I click on Add/ Edit Sundry Charge to Order Line icon
    And I select a Sundry Charge Type "Author Rights", Invoice Group "Streamline Distribution", Organisation "Streamline Distribution" 
    And I enter a Charge Value 3
    And I click Save button
    And I select transaction type "Invoice", Sale type "Normal Sale", a Product "Amazing Jake and the Green Bay Packers" 
    And I enter Quantity 4, seller "Streamline Distribution"  
    And I click on Add button to create Order
    And I click Ok for pop up stating 'Product has been ordered in last 7 days'
    And I click on Add/ Edit Sundry Charge to Order Line icon
    And I select a Sundry Charge Type "Author Rights", Invoice Group "Streamline Distribution", Organisation "Streamline Distribution" 
    And I enter a Charge Value 4
    And I click Save button
    And I click on Left facing arrow
    And I select a Payment type "On Account"
    And I click Checkout button
    And I click Billing Wave Release
    And I click refresh on My open basket
    Then order should not be displayed in open basket
    And I click refresh on Recent Orders
    And order should be displayed under Recent Orders window
    And I click refresh on Documents
    And Invoice note should be displayed in Documents window
    And I open the Invoice generated
    
  
    