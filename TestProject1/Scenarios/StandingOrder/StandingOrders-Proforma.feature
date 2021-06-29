Feature: StandingOrders-Proforma

#This feature file contains automated manual tests of RAVAUT-910 on Jira 
@Standing_Order
 Scenario: Tests releasing standing order for proforma
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I create a new product
    And I click on Customer Service
    And I create a new customer
    And I navigate to the Interests tab
    And I click on New Interests Record
    And I select Interest Type "Standing Order Proforma"
    And I enter Standing Orders Quantity 1
    And I enter Customer Reference "8.0.1.6"
    And I enter Valid From Today's date
    And I enter Valid To a Date in Future 
    And I click on Criteria Tab 
    And I select Criteria and classification
    And I click on Standing Order Administration
    And I click on Standing Order Calc
    And I drop the Report Type list and select "Standing Orders - Future Releases"
    Then There should be columns for Ship To,Bill To,Interest Type,Product,Product Version,Quantity,Currency Type,Non Supply,Supply Information,S/O Ref,Site,POD Site,Released On Date and ID
    And I click on Refresh till customer record is visible in list
    And I click on Standing Order Release button from dashboard
    And I click on refresh button
    And Standing Order Administration dashboard under Report type Standing Orders - Future Releases should display no results
    And I drop the Report Type list and select "Standing Orders - Released" 
    And I click on refresh button
    And Standing Order Administration dashboard under Report type Standing Orders - Released should show matching results to product used
    And I Click on Orders
    And I run the billing wave
    And I refresh the documents window
    And I open the Order Proforma
    And I click on Customer Service
    And I open product information panel to check Standing Order Released On Date
    And I open versions record and navigate to fulfilment tab
    And Standing Order Released On Date under fulfilment tab should be displayed and disabled
    
    
  