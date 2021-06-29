Feature: EndToEnd( Quotation )

#This feature file contains automated manual tests of RAVAUT-911 on Jira
@Standing_Order
  Scenario: Creating and Releasing Standing Order as Quotation
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I create a new product
    And I click on Customer Service
    And I create a new customer
    #And I open a company information panel for "RAVE Sole Trader"
    And I navigate to the Interests tab
    And I click on New Interests Record
    And I select Interest Type "Standing Order Quotation"
    And I enter Standing Orders Quantity 1
    And I enter Customer Reference "7.0.1.3"
    And I enter Valid From Today's date
    And I enter Valid To a Date in Future 
    And I click on Criteria Tab 
    And I select Criteria and classification
    And I click on Standing Order Administration
    And I click on Standing Order Calc
    And I open Standing Orders Future Releases dashboard and refresh till the customer records are visible 
    Then table with column headers as Ship To,Bill To,Interest Type,Product Version should be displayed
    And I click on Standing Order Release
    And I open Standing Orders Released
    And I refresh the Standing Orders Released dashboard
    And Standing Orders Released should display the product used
    And I open Standing Orders Future Releases
    And I refresh the Standing Orders Future Releases dashboard
    And Product should not be displayed in Standing Orders Future Releases 
    And I click on Orders 
    And I run the Billing Wave
    And I click refresh on Documents
    And I click on Customer Service
    And I open the product information panel
    And I navigate to Fulfilment tab
    And Standing Order Released on Date should be displayed and disabled

   