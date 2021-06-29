Feature: ProductsForMarketing

#This feature file contains automated manual tests of RAVAUT-798 on Jira
@PromotionsAndDiscounts
  Scenario: Editing products for marketing
   Given I am logged in Ingenta Commercial Application
    When I click on Product Management
    And I click on Products
    And I click on All Products view
    And I open information panel for a Product "ProductToUse"
    And I check Answer Code as Temporarily Out of Stock if not I set it to "Temporarily Out of Stock"
    And I check Site Status as Open if not I set it to "Open"
    And I check Default Price set if not I create a Default Price set
    And I perform a Goods In transaction
    Then available quantity and physical quantity should be updated
    And I click on Save Record and Close Form to save the Product 
    
    
   
    