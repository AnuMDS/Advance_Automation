Feature: Backorders_CopyToSite

#This feature file contains automated manual tests of RAVAUT-853 on Jira
@Backorder,@Regression
  Scenario: Verifying backorders with Copy to Site process
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Product from Customer Services
    And I select "Book- Paperback" from Product Types
    And I enter without prefix to create new product
    And I enter Title prefix "title"
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
    And I click on Inventory tab from Product Information Panel
    Then Minimum One Inventory site should be present
    And I create new Inventory sites
    And I select Location "WAF3C01B" for the Watford site
    And I add Prices to the product
    And I click on save record and close form button
    And I click on New Order from folder list
    And I enter Company Name in Ship To "Account two"
    And I click on Red colour Arrow
    And I enter newly created product name On Order Id wizard
    And I enter P/O Refrence
    And I click on Add button from Order basket
    And I click on blue colour left arrow icon on the top right hand side of the window
    And I click on Checkout button
    And I Click on Orders
    And I click on Billing Wave Release button
    And I open the Invoice note from documents window
    And I Select the Order Item, in the lower grid click on the link to the Invoice
    And I click on Customer Service
    And I navigate to Order Query page
    And I check the checkbox Close Panel After Search
    And I enter newly created product name on order query page
    And I click on Search button 
    And I open the product to check the inventory sites
    And I click on Inventory tab from information panel
    And I click on Overview tab from product information panel
    And Under Allocations section Confirmed backorder should be display for "Watford" site
    And I click on save record and close form button
    And I select Backorders from Order Release dropdown
    And Edit backorder Icon should be display under Gridview
    And Cancel Icon should be display under GridView
    And Remove row from selection Icon should be display under GridView
    And I click the icon Transfer Product
    And "Watford" site should be offered in the dropdown
    And I select newly created site from Supply Site To dropdown
    And "Oxford" site should be offered in the dropdown
    And In the Transfer or Copy frame Product To link box should be display with correct value
    And Product Version link box should be disabled
    And Product Version link box should be display with correct value
    And Supply Site To link box should be display with correct value
    And Copy checkbox should be display
    And There should be buttons for Apply and Cancel
    And I check the checkbox Copy
    And I click on Apply button from backorder wizard
    And Backorder review grid should be updated
    And Delete icon should be replaced by the Undo icon
    And I click on Next button
    And I click on Finish button from Backorder Wizard
    And I click on No in the message
    And I Click on Orders
    And I click on Billing Wave Release button
    And I open the Invoice note from documents window
    And I Select the Order Item, in the lower grid click on the link to the Invoice
    And Invoice Note should be display
    And I open the product to check the Inventory
    And Physical Inventory should remain unchanged for Watford site
    And I click on Overview tab from product information panel
    And Under Allocations section Confirmed backorder should be display for "Oxford" site also
    And I click on save record and close form button
    And I uncheck the checkbox from Order Query and close the same window
    
    
    