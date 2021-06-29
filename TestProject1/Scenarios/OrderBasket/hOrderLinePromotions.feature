Feature: hOrderLinePromotions	

#This feature file contains automated manual tests of RAVAUT-753 on Jira
#Select product of sub type - Book- Hardcover
 @Order_Basket
  Scenario: Adding promotions and discounts to order line in order basket
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I verify the product "MXC Sports - Football" to be used
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
    And I click on Left facing arrow 
    And I click on Promotions 
    And I enter a Promotion Code "P10565"
    And I click on Search button for promotions
    And I select a promotion code
    And I click on Apply Promotion button
    And I click on Yes button to Confirmation message
    And I click on Right facing arrow
    And I click on Order Line Promotions icon
    Then Promotion code submitted should be displayed
    And I click OK button for pop up stating 'Following order line promotion applied'
    And I click on Left facing arrow
    And Check out page should be displayed to confirm and place the order

    
    
    
   