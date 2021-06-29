Feature: AddingMultipleProductsInOrder

#This feature file contains automated manual tests of RAVAUT-931 on Jira
@Order_Basket
  Scenario: Adding multiple products through Add Selected button in New Order
    Given I am logged in Ingenta Commercial Application
    When I click on Orders 
    And I click on New Order
    And I enter a company "account one" in Ship To field
    And I click Order Attributes tab
    And I enter Default PO Ref and click Apply
    And I click on Red Arrow
    And I enter partial name of the Products "Amazing Jake"
    And I click on Add Selected
    Then all products selected should be displayed in the Order Basket