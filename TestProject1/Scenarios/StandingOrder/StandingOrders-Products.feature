Feature: StandingOrders-Products

#This feature file contains automated manual tests of RAVAUT-896 on Jira
@Standing_Order
  Scenario: Testing UI components with regards to Standing Orders
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Product from Customer Services
    And I select "Book- Paperback" from Product Types
    And I enter without prefix
    And I enter Title prefix "RAVE"
    And I enter imprint "Reef Books"
    And I enter description "one line description"
    And I click on Next Button from Create new product wizard
    And I enter Author name "Authors"
    And I select Dimension Group "Standard UK Paperback"
    And I click on Apply button from dimensions group
    And I click on New icon
    And I select Type from dimension record "Unit weight" 
    And I enter value "20.00"
    And I select ONIX Unit "Grams"
    And I click on OK button
    And I click on New icon from Identifiers table
    And I select Identifier Type "ISBN 13"
    And I select range "ISBN 13 (Global)" 
    And I click on OK button
    And I enter pubdate
    And I enter copyright year "2020"
    And I select product disount type "Fiction"
    And I select fulfilment product type "publication"
    And I click on Finish button from Create new product wizard
    And I open version record from product versions tab
    And I click on Fulfilment tab
    And I click on Standing Orders Enabled checkbox
    And I enter date in correct format 
    And I enter date in standing order available date and change the date set in previous step
    And I reopen the versions record
    Then data should be match the changes made earlier
    And I Click OK to close the versions record
    And I Click on Save record from toolbar
    And I Click on View Record History from toolbar
    And history should be correctly display
    And I close history window
    And I open versions record and navigate to fulfilment tab
    And I check the checkbox Release by site
    And I select few sites from the list view display
    And I Click OK to close the versions record
    And Popup message box should be appear with message "You have made changes to the standing order releases by site table.  Clicking OK will commit these changes."     
    And I click Ok button from popup to commit
    And I Click on Save record from toolbar
    And I open versions record and navigate to fulfilment tab
    And All the details should be correctly populated and List of sites should be visible
    And I uncheck checkbox Standing Order Enabled
    And Sites list should be invisible
    And Date field should be displayed but disabled
    And I Click OK to close the versions record
    And I Click save and close record
    
    
    