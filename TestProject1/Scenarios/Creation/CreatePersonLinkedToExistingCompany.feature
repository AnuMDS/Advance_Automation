Feature: CreatePersonLinkedToExistingCompany

#This feature file contains automated manual tests of RAVAUT-863 on Jira
@CRM 
  Scenario: Creating Person linked to existing company
    Given I am logged in Ingenta Commercial Application
    When I click on Customer Service
    And I click on New Customer from folder list
    And I enter existing customer name in the field Company "Rave"
    Then Create New Person checkbox should be checked
    And I enter Country as "United Kingdom", Type as "Private Individual",Template as "Author"
    And I enter Name type as "Name"
    And I enter Fore Name ,Middle Name ,Family Name
    And I enter Prefix "Miss"
    #And I enter Area Code
    #And I enter Number for Person
    #And I enter Account Number
    And I click on Next Button from create new customer wizard
    And I enter Job Title "Administrator"
    And Address Details page should be Disabled
    And Bottom Address Management frame should display Person name and Company name
    And I check the checkbox Open On Finish
    And I click on Finish Button from create new customer wizard
    And Identification section should not be blank
    And Name&Location section should not be blank
    And Information section should not be blank
    And Contact section should not be blank
    And Names tab should not be blank