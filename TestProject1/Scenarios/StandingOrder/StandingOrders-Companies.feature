Feature: StandingOrders-Companies

#This feature file contains automated manual tests of RAVAUT-895 on Jira
@Standing_Order
Scenario: Testing UI components of Customer wizard  with regards to Standing Orders
             Given I am logged in Ingenta Commercial Application
             When I click on Customer Service
             And I click on New Customer button
             And I select the Create New Company check box
             And I select a Country "United Kingdom" 
             And I select a Type of Company "Bookseller" 
             And I enter a Company name from create new customre record
            #And I select a Website Type "Old"
            #And I enter the Website 
             And I enter Email address in Email field
            #And I enter Area Code 01234
            #And I enter Company Number 
            #And I enter an Ext 981
             And I click on Next button
            #And I select a Job Title "Sales Assistant"
             And I enter Business Name "Ingenta" 
             And I enter House No 29
             And I enter Floor "4th Floor"
             And I enter Building name "Shard"
             And I enter Street name "Abbey"
             And I enter District "Brent"
             And I enter Town "South Bank"
             And I enter County "Kent"
             And I enter Postcode 
             And I click on Refresh button
             And I click on Open on Finish checkbox
             And I click on Finish Button
             And I click on Emails tab from company record
             And I click on New button from Emails tab from company record
             And I select Email Type "Sales" from company record
             And I enter Email for company record
             And I click on Profile from Companies 
             And I click on Marketing tab
             And I click Interests tab 
             And I click on the new button in the list view from Companies Id wizard
             Then General , Criteria , Overrides , Releases tabs should be display
             And There should be interest type frame
             And Company Id field should be disabled and populated with details of the company the record is opened from
             And Interest Type field should be mandatory with selection control and clear and list
             And Name field should be disabled and populated with edit box
             And Standing order reference should be disabled and populated with edit box
             And There should be standing orders and alerts frame
             And Email field should be disabled with selection control , clear and list
             And Quantity should be disabled and populated with edit box
             And Always supply checkbox should be disabled
             And Customer Reference should be disabled and populated with edit box
             And Valid from field should be disabled with calendar control
             And Valid To field should be disabled with calendar control
             And Is Cancelled checkbox field should be disabled
             And Suspended checkbox field should be disabled
             And Cancel or suspended reason field should be disabled with selection control , clear and list
             And Cancelled or suspended date field should be disabled
             And Cancelled or suspend end date field should be disabled
             And Gratis reason field should be disabled
             And There should be frame for order overrides
             And Promotion code field should be diplay with edit box
             And Order category should be display as clear and list with not selected
             And Override Discount checkbox should be display
             And Discount field should be disabled with selection control , clear and list
             And Discount % field should be disabled
             And Override currency checkbox should be display
             And Currency field should be disabled with selection control , clear and list
             And Override release day checkbox should be display
             And fields for the days of the week should be disabled 
             And Do not merge checkbox should be display
             And I select Interest Type "Standing Order Sale"
             And I click on Criteria tab
             And There should be detail section frame
             And Publisher field should be display with selection control , clear and list 
             And Imprint field should be display with selection control , clear and list
             And Product Series field should be display with selection control , clear and list
             And Product List field should be display with selection control , clear and list
             And Product sub type field should be display with selection control , clear and list
             And Version Type field should be display with selection control , clear and list
             And Author field should be display with selection control , clear and list
             And Audience Type field should be display with selection control , clear and list
             And Language field should be display with selection control , clear and list
             And There should be Classification frame with radio buttons
             And AND all classification below radio button should be selected by default
             And OR any classification below radio button should be display
             And There should be list view with the following column headings
             And Classification Type , Lookup Code , Classification Description column headings should be display
             And I click on Overrides tab
             And There should be Ship To frame
             And Override Ship To Address with Address Control should be disabled
             And There should be Bill To frame
             And Override Bill To Address with Address Control should be disabled
             And There should be End User frame
             And Override End user with Address Control should be disabled
             And I click on Releases tab
             And There should be grid with columns for Released on Date,Product,Product Version,S/O Ref,Quantity,Non supply,Is Catchup,Site,POD Site,Id
             And There should be no data
             
           

             

