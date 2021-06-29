Feature: Orders with Stopped Account

#This feature file contains automated manual tests of RAVAUT-845 on Jira
Scenario:1 Creating a new Company
  Given I am logged in Ingenta Commercial Application
  When I click on Customer Service
  And I click on New Customer button
  And I select the Create New Company check box
  And I select a Country "United Kingdom" 
  And I select a Type of Company "Bookseller" 
  And I enter a Company name "Total Stop"
  And I select a Website Type "Old"
  And I enter the Website 
  And I enter Email address
  And I enter Area Code 01234
  And I enter Company Number 
  And I enter an Ext 981
  And I click on Next button
  #And I select a Job Title "Sales Assistant"
  And I enter Business Name "Chameleon Books" 
  And I enter House No 29
  And I enter Floor "4th Floor"
  And I enter Building name "Shard"
  And I enter Street name "Abbey"
  And I enter District "Brent"
  And I enter Town "South Bank"
  And I enter County "Kent"
  And I enter Postcode 
  And I click on Refresh button
  Then Address entered should be displayed in the Display Address frame
  And I check Open on Finish checkbox
  And I click on Finish Button
  And Company name displayed in information panel should be correct 
  And I click Trading tab
  And I click Account Profiles sub tab
  And I change the credit status "Total Stop"
  
  
@Regression
  Scenario:2 Verifying billing/order process with account that is stopped
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I verify the details for product "Amazing Jake and the Red Balloon"
    And I click on New Order from folder list
    And I enter customer name in Ship To field "Total stop"
    And I click on Order Attributes tab
    And I click on Red colour right arrow icon
    And I enter Product Name On Orders Id wizard
    And I enter P/O Refrence
    Then Pop-up message should be displayed as "Account Not Open"
    And I click on Ok button from popup
    And I close the Order basket
    And Pop up message should be displayed as "There are no items in this basket. Do you want to discard it?" 
    And I click Yes in the pop up warning messsage to close the window
    