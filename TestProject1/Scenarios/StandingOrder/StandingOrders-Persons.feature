Feature: StandingOrders-Persons

#This feature file contains automated manual tests of RAVAUT-894 on Jira

@Standing_Order
  Scenario: Testing UI components of Customer wizard  with regards to Standing Orders
             Given I am logged in Ingenta Commercial Application
             When I click on Customer Service
             And I click on new button
             And I check the Create New Person checkbox
             And I select the Country "United Kingdom" 
             And I select a Type of Person "Standard"
             And I enter persons Forename "RAVE" 
             And I enter persons Family Name 
             And I enter an Email address
             #And I enter an Area Code 01237
             #And I enter Number 
             And I click on Next button
             And I enter Business Name "Ingenta"
             And I enter House No 29
             And I enter Floor "9th Floor"
             And I enter Building name "Flora"
             And I enter Street name "Shakin"
             And I enter District "Central"
             And I enter Town "Oxford"
             And I enter County "CountyShire"
             And I enter Postcode 
             And I click on Refresh button
             And I click on Open on Finish checkbox for person
             And I click on finish button
             And I click on Emails tab
             And I click on New button from Emails tab
             And I select Email Type "Work"
             And I enter Email
             And I click on Profile from Perosons Id Wizard
             And I click on Marketing tab from Persons Id wizard
             And I click Interests tab from Persons Id wizard
             And I click on New Interests Record
             Then General , Criteria , Overrides , Releases tabs should be display under New Perosons Interest Record wizard
             And Interest type frame should be display
             And Perosn Id field should be disabled and populated with details of the Person the record is opened from
             And Interest Type field should be mandatory with selection control and clear and list under New Perosons Interest Record wizard
             And Name field should be disabled and populated with edit box under New Perosons Interest Record wizard
             And Standing order reference should be disabled and populated with edit box under New Perosons Interest Record wizard
             And There should be standing orders and alerts frame under New Perosons Interest Record wizard
             And Email field should be disabled with selection control , clear and list under New Perosons Interest Record wizard
             And Quantity should be disabled and populated with edit box under New Perosons Interest Record wizard
             And Always supply checkbox should be disabled under New Perosons Interest Record wizard
             And Customer Reference should be disabled and populated with edit box under New Perosons Interest Record wizard
             And Valid from field should be disabled with calendar control under New Perosons Interest Record wizard
             And Valid To field should be disabled with calendar control under New Perosons Interest Record wizard
             And Is Cancelled checkbox field should be disabled under New Perosons Interest Record wizard
             And Suspended checkbox field should be disabled under New Perosons Interest Record wizard
             And Cancel or suspended reason field should be disabled with selection control , clear and list under New Perosons Interest Record wizard
             And Cancelled or suspended date field should be disabled under New Perosons Interest Record wizard
             And Cancelled or suspend end date field should be disabled under New Perosons Interest Record wizard
             And Gratis reason field should be disabled under New Perosons Interest Record wizard
             And There should be frame for order overrides under New Perosons Interest Record wizard
             And Promotion code field should be diplay with edit box under New Perosons Interest Record wizard
             And Order category should be display as clear and list with not selected under New Perosons Interest Record wizard
             And Override Discount checkbox should be display under New Perosons Interest Record wizard
             And Discount field should be disabled with selection control , clear and list under New Perosons Interest Record wizard
             And Discount % field should be disabled under New Perosons Interest Record wizard
             And Override currency checkbox should be display under New Perosons Interest Record wizard
             And Currency field should be disabled with selection control , clear and list under New Perosons Interest Record wizard
             And Override release day checkbox should be display under New Perosons Interest Record wizard
             And fields for the days of the week should be disabled under New Perosons Interest Record wizard
             And Do not merge checkbox should be display under New Perosons Interest Record wizard
             And I select Interest Type under New Perosons Interest Record wizard "Standing Order Sale"
             And I click on Criteria tab under New Perosons Interest Record wizard
             And There should be detail section frame under New Perosons Interest Record wizard
             And There should be Publisher,Imprint,Product Series,Product List,Product Sub Type,Version Type,Author,Audience Type and Language fields with selection control , clear and list
             And There should be Classification frame with radio buttons under New Perosons Interest Record wizard
             And AND all classification below radio button should be selected by default under New Perosons Interest Record wizard
             And OR any classification below radio button should be display under New Perosons Interest Record wizard
             And List view with the column headings Classification Type , Lookup Code , Classification Description  should be display
             And I click on Overrides tab under New Perosons Interest Record wizard
             And Ship To frame with Override Ship To Address with Address Control should be enabled
             And Bill To frame with Override Bill To Address with Address Control should be enabled
             And End User frame with Override End user with Address Control should be enabled
             And I click on Releases tab under New Perosons Interest Record wizard
             And There should be grid with columns for Released on Date,Product,Product Version,S/O Ref,Quantity,Non supply,Is Catchup,Site,POD Site,Id under New Perosons Interest Record wizard
             And There should be no data under Releases tab grid
             

