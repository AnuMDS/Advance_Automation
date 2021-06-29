Feature: StandingOrdersValidFromTo

#This feature file contains automated manual tests of RAVAUT-901 on Jira
@Standing_Order
  Scenario: Testing From and To Date fields 
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    #And I open a company information panel for "RAVE Sole Trader"
    And I create a new customer
    And I click on Profile Tab
    And I click on Marketing Tab
    And I click on Interests Tab 
    And I click on New to open New Companies Interests Record
    And I select Interest Type "Standing Order Sale"
    And I enter Standing Orders Quantity 1
    And I enter Customer Reference "3.0.1.9"
    And I enter Valid From a Date Last Year
    And I enter Valid To Yesterday
    And I click on Criteria Tab
    And I enter Author "Steven Street"
    And I select Product Sub type "Book- HardCover"
    And I select Audience Type "Adult education"
    And I enter Imprint "Reef Books"
    And I click on new Interest Classifications Record
    And I select Interest Classification Type "Publishers Subject Code"
    And I enter Interest Classification Code "5"
    And I click Ok
    And I click Save and Close Form
    And I open the record
    Then Name frame should display the selection criteria correctly