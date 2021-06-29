Feature: TestingAndSettingDefaultDashboards

#This feature file contains automated manual tests of RAVAUT-935 on Jira
@Testing_DefaultDashboards
  Scenario:1 Testing and setting Customer Services dashboard
    Given I am logged in Ingenta Commercial Application
    When I check the elements from folder list
    And I check if Customer Services has default dashboard or set to default dashboard
    
  Scenario:2 Testing and setting Orders dashboard
    Given I am logged in Ingenta Commercial Application
    When I check if Orders has default dashboard or set to default dashboard
    
  Scenario:3 Testing and setting Inventory dashboard
    Given I am logged in Ingenta Commercial Application
    When I check if Inventory has default dashboard or set to default dashboard
    
  Scenario:4 Testing and setting Sales & Marketing dashboard
    Given I am logged in Ingenta Commercial Application
    When I check if Sales & Marketing has default dashboard or set to default dashboard
    
  Scenario:5 Testing and setting Standing Order Administration dashboard
    Given I am logged in Ingenta Commercial Application
    When I check if Standing Order Administration has default dashboard or set to default dashboard
    
