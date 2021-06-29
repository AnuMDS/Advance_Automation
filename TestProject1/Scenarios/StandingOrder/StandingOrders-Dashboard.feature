Feature: StandingOrders-Dashboard

#This feature file contains automated manual tests of RAVAUT-908 on Jira
@Standing_Order
  Scenario: Tests Standing orders dashboard appropriately
    Given I am logged in Ingenta Commercial Application
    When I click on Standing Order Administration from folder list
    Then Standing Orders dashboard should be displayed
    And There should be buttons for Standing Order Release, Standing Order (Calc) ,Standing Order Catchups ,Billing Wave Release ,Find Customer ,Find Product,Find Orders
    And There should be a field for Report Type (list) with buttons for Refresh , Save
    
    And I drop the Report Type list and select "Standing Order Runs"
    And There should be columns for Start Date,Run Duration,No. Of Invoices,No. Of Proformas,No. Of Quotations,No. Of Failures,Gateway transfer ID,Process flow Run Number,Last Message,ID
    
    And I drop the Report Type list and select "Standing Orders - Released"
    And There should be columns for Ship To,Bill To,Interest Type,Product,Product Version,Quantity,Currency Type,Non Supply,Supply Information,S/O Ref,Site,POD Site,Released On Date and ID
    
    And I drop the Report Type list and select "Standing Orders - Future Releases"
    And There should be columns for Ship To,Bill To,Interest Type,Product,Product Version,Quantity,Currency Type,Non Supply,Supply Information,S/O Ref,Site,POD Site,Released On Date and ID
     
    And I drop the Report Type list and select "Standing Orders - Catchups"
    And In catchups list there should be columns for Ship To,Bill To,Interest Type,Product,Product Version,Quantity,Currency Type,Non Supply,Supply Information,S/O Ref,Site,POD Site,Released On Date and ID
   
    
    
    
    
    
    
    
   