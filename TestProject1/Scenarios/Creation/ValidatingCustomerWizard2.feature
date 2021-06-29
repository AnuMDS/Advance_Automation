Feature: ValidatingCustomerWizard2
Background:
           
           Given I am logged in Ingenta Commercial Application
           When I click on Customer Service
           And I click on new button
           And I click on Create new company
           And I select "United Kingdom" from country dropdown list
           And I select "Bookseller" from Type dropdown list

@CRM 
Scenario:1 Verifying CRM prefrence templates record
           And I click on Template link
           Then CRM prefrence templates record should be opened
           
@CRM 
Scenario:2 Close CRM prefrence functionality
           And I click on Template link
           And I click on 'x' at top right
           Then CRM prefrence window should be closed
           
@CRM  
Scenario:3 Verifying Role Type details
           And I tab on Template field
           Then The focus should be on role type 
           
@CRM     
Scenario:4 Valid companies and default role  
           And I click on Role Type link
           Then valid companies and default company role checkboxes should be checked by default in Role Type window

@CRM    
Scenario:5 Close Role type functionality
           And I click on Role Type link
           And I click on 'x' at top right
           Then Role type window should be closed

@CRM     
Scenario:6 Verifying company name 
           And I enter company name in Company Name field
           Then data should be accepted and focus should be on next field

@CRM           
Scenario:7 Verifying company name type
           And I select "Consortia Name" from Name Type dropdown list
           Then The  label should be changed to "Consortia Name"

@CRM       
Scenario:8 Verifying reverse company name type
           And I select "College Name" from Name Type dropdown list         
           And I select "Company Name" from Name Type dropdown list
           Then The  label should be changed to "Company Name"

@CRM       
Scenario:9 Verifying website type field
           And I tab on Name Type
           And I enter company name in Company Name field             
           Then the focus should be on Website Type
@CRM      
Scenario:10 Checking website type field
            And I enter company name in Company Name field
            And I click on Website Type
            And I select "Old" from website type dropdown list
            And I tab on website type 
            Then The data should be accepted and focus should be on website field ,which should be enabled

@CRM          
Scenario:11 Enter website name to verify email field
            And I enter company name in Company Name field
            And I select "Old" from website type dropdown list
            And I tab on website type 
            And I enter "Google.com" in website field and tab from the website field
            Then focus should be on Email

@CRM      
Scenario:12 Validating Company name with more than hundred characters
            And I enter more than hundred characters company name
            Then company name should be accepted upto hundred characters

@CRM         
Scenario:13 Validating Ext Number with more than ten numbers
            And I click on Ext field
            And I enter more than ten digits in Ext field
            Then The Ext number should be accepted upto ten characters

@CRM             
Scenario:14 Verifying Ext Number by entering four digits 
            And I click on Ext field
            And I enter "1234" in Ext field
            And I tab on Ext field
            Then Focus should be on Reset button

@CRM           
Scenario:15 Verifying that Reset button works properly
            And I click on Reset Button
            Then All of the fields in company frame should be disabled

@CRM           
Scenario:16 Verifying some frames and buttons present on Address details page
            And I enter company name in Company Name field
            And I enter "1234" in Ext field
            And I select "Old" from website type dropdown list
            And I enter "Google.com" in website field and tab from the website field
            And I enter Number for company
            And I enter Area code for company
            And I click on Next button
            Then Address,Display Address As and Address Management frames should be displayed on Address details page
            And Help button should be disabled on Address details page
            And Next button should be disabled on Address details page
            And Cancel , Back and Finish button should be displayed on Address details page

@CRM           
Scenario:17 Verifying some fields present on Address frame
            And I enter company name in Company Name field
            And I enter "1234" in Ext field
            And I select "Old" from website type dropdown list
            And I enter "Google.com" in website field and tab from the website field
            And I enter Number for company
            And I enter Area code for company
            And I click on Next button  
            Then By default Country code should be "United Kingdom"
            And The Business Name,House No,Floor,Building,Street Name,District,Town,country and Postcode fields should be displayed on Address frame  
            And The Reset button should be displayed on Address frame
            And The QAS Button should be displayed on Address frame

@CRM           
Scenario:18 Clear the country code field by clicking 'x' to the right of it
            And I enter company name in Company Name field
            And I enter "1234" in Ext field
            And I select "Old" from website type dropdown list
            And I enter "Google.com" in website field and tab from the website field
            And I enter Number for company
            And I enter Area code for company
            And I click on Next button  
            And I click on 'x' to the right of country code field
            Then country code field should be blanked

@CRM          
Scenario:19 Verifying that popup message has been coming or not for not entering country code field
            And I enter company name in Company Name field
            And I enter "1234" in Ext field
            And I select "Old" from website type dropdown list
            And I enter "Google.com" in website field and tab from the website field
            And I enter Number for company
            And I enter Area code for company
            And I click on Next button  
            And I click on 'x' to the right of country code field
            And I click on House No
            Then On screen there should be popup message stating that country code field cannot be blanked 

@CRM         
Scenario:20 Enter country code field to verify House No field
            And I enter company name in Company Name field
            And I enter "1234" in Ext field
            And I select "Old" from website type dropdown list
            And I enter "Google.com" in website field and tab from the website field
            And I enter Number for company
            And I enter Area code for company
            And I click on Next button
            And I tab on country code field
            Then The data should be accepted and focus should be on House No field

@CRM       
Scenario:21 Validating House No with more than fifty characters
            And I enter company name in Company Name field
            And I enter "1234" in Ext field
            And I select "Old" from website type dropdown list
            And I enter "Google.com" in website field and tab from the website field
            And I enter Number for company
            And I enter Area code for company
            And I click on Next button
            And I enter more than fifty characters in House No field
            Then House No should be accepted upto fifty characters

@CRM     
Scenario:22 Verifying House No by entering two digits 
            And I enter company name in Company Name field
            And I enter "1234" in Ext field
            And I select "Old" from website type dropdown list
            And I enter "Google.com" in website field and tab from the website field
            And I enter Number for company
            And I enter Area code for company
            And I click on Next button
            And I enter "12" in House No field and tab on House No
            Then data should be accepted and focus should be on Floor

@CRM          
Scenario:23 Validating Floor No with more than fifty characters
            And I enter company name in Company Name field
            And I enter "1234" in Ext field
            And I select "Old" from website type dropdown list
            And I enter "Google.com" in website field and tab from the website field
            And I enter Number for company
            And I enter Area code for company
            And I click on Next button
            And I enter more than fifty characters in Floor No field 
            Then Floor No should be accepted upto fifty characters

@CRM           
Scenario:24 Validating District field with more than fifty characters
            And I enter company name in Company Name field
            And I enter "1234" in Ext field
            And I select "Old" from website type dropdown list
            And I enter "Google.com" in website field and tab from the website field
            And I enter Number for company
            And I enter Area code for company
            And I click on Next button
            And I enter more than fifty characters in District field
            Then District field should be accepted upto fifty characters

@CRM          
Scenario:25 Validating District field by entering valid alphabetical string
            And I enter company name in Company Name field
            And I enter "1234" in Ext field
            And I select "Old" from website type dropdown list
            And I enter "Google.com" in website field and tab from the website field
            And I enter Number for company
            And I enter Area code for company
            And I click on Next button
            And I enter "Central District" in District field and tab away
            Then The data should be accepted and focus should be on Town field

@CRM         
Scenario:26 Reselecting the district field 
            And I enter company name in Company Name field
            And I enter "1234" in Ext field
            And I select "Old" from website type dropdown list
            And I enter "Google.com" in website field and tab from the website field
            And I enter Number for company
            And I enter Area code for company
            And I click on Next button
            And I enter "Central District" in District field and tab away
            And I reselect and clear the district field and tab away
            Then The data should be accepted and focus should be on Town field

@CRM             
Scenario:27 Validating Town field with more than fifty characters
            And I enter company name in Company Name field
            And I enter "1234" in Ext field
            And I select "Old" from website type dropdown list
            And I enter "Google.com" in website field and tab from the website field
            And I enter Number for company
            And I enter Area code for company
            And I click on Next button
            And I enter more than fifty characters in Town field
            Then Town field should be accepted upto fifty characters

@CRM          
Scenario:28 Validating Town field by entering valid alphabetical string
            And I enter company name in Company Name field
            And I enter "1234" in Ext field
            And I select "Old" from website type dropdown list
            And I enter "Google.com" in website field and tab from the website field
            And I enter Number for company
            And I enter Area code for company
            And I click on Next button
            And I enter "Bigtown" in Town field and tab away
            Then The data should be accepted and focus should be on County field

@CRM         
Scenario:29 Validating County field with more than hundred characters
            And I enter company name in Company Name field
            And I enter "1234" in Ext field
            And I select "Old" from website type dropdown list
            And I enter "Google.com" in website field and tab from the website field
            And I enter Number for company
            And I enter Area code for company
            And I click on Next button
            And I enter more than hundred characters in County field
            Then County field should be accepted upto hundred characters

@CRM      
Scenario:30 Validating County field by entering valid alphabetical string
            And I enter company name in Company Name field
            And I enter "1234" in Ext field
            And I select "Old" from website type dropdown list
            And I enter "Google.com" in website field and tab from the website field
            And I enter Number for company
            And I enter Area code for company
            And I click on Next button
            And I enter "Countyshire" in County field and tab away
            Then The data should be accepted and focus should be on Postcode field

@CRM              
Scenario:31 Select the manual edit checkbox to verify that the editable form is open and refresh button is disabled
            And I enter company name in Company Name field
            And I enter "1234" in Ext field
            And I select "Old" from website type dropdown list
            And I enter "Google.com" in website field and tab from the website field
            And I enter Number for company
            And I enter Area code for company
            And I click on Next button
            And I enter "12" in House No field
            And I enter "shakin street" in street Name field
            And I enter "Bigtown" in Town field
            And I enter "Countyshire" in County field
            And I enter "OZ99CP" in Postcode field
            And I click on Refresh Button
            And I click on manual edit checkbox
            Then There should be editable form with 10 fields 
            And Address should be displayed in the top 4 fields
            And Refresh button should be disabled

@CRM          
Scenario:32 Verifying that popup message has been coming or not when we again click on manual edit checkbox     
            And I enter company name in Company Name field
            And I enter "1234" in Ext field
            And I select "Old" from website type dropdown list
            And I enter "Google.com" in website field and tab from the website field
            And I enter Number for company
            And I enter Area code for company
            And I click on Next button
            And I enter "12" in House No field
            And I enter "shakin street" in street Name field
            And I enter "Bigtown" in Town field
            And I enter "Countyshire" in County field
            And I enter "OZ99CP" in Postcode field
            And I click on Refresh Button
            And I click on manual edit checkbox 
            Then There should be popup message stating that Manual Edited changes will be lost.OK to continue?
            And There should be Ok and Cancel button
            And I click on Cancel button from popup

@CRM          
Scenario:33 Click on OK button 
            And I enter company name in Company Name field
            And I enter "1234" in Ext field
            And I select "Old" from website type dropdown list
            And I enter "Google.com" in website field and tab from the website field
            And I enter Number for company
            And I enter Area code for company
            And I click on Next button
            And I enter "12" in House No field
            And I enter "shakin street" in street Name field
            And I enter "Bigtown" in Town field
            And I enter "Countyshire" in County field
            And I enter "OZ99CP" in Postcode field
            And I click on Refresh Button
            And I check the Manual edit checkbox
            And I enter address in fifth field
            And I click on manual edit checkbox 
            And I click on Ok button
            Then The address should be displayed over four lines
            And The address added in fifth field should not be shown

@CRM  
Scenario:34 Verifying that whenever we enter new address in ediatable field from display address as frame that should be possible         
            And I enter company name in Company Name field
            And I enter "1234" in Ext field
            And I select "Old" from website type dropdown list
            And I enter "Google.com" in website field and tab from the website field
            And I enter Number for company
            And I enter Area code for company
            And I click on Next button
            And I enter "12" in House No field
            And I enter "shakin street" in street Name field
            And I enter "Bigtown" in Town field
            And I enter "Countyshire" in County field
            And I enter "OZ99CP" in Postcode field
            And I click on Refresh Button
            And I click on manual edit checkbox 
            And I enter address in fifth field
            Then The entered new address should be accepted

@CRM           
Scenario:35 Verifying some fields present on Address Management frame
            And I enter company name in Company Name field
            And I enter "1234" in Ext field
            And I select "Old" from website type dropdown list
            And I enter "Google.com" in website field and tab from the website field
            And I enter Number for company
            And I enter Area code for company
            And I click on Next button
            Then Contact name field should be blank,disabled and no label to that field
            And Type field should be disabled, it should be clear and list,defaulted to Not Selected 
            And Open on Finish check box field should be disabled
            And Company Name field should be populated as value enter in previous company name field and it should be disabled with no label
            And Type field should be defaulted to "Street Address" 
            And There should be Open on Finish checkbox present 
            And Departments field should be defaulted to Not selected 
            And Add Additional Addresses checkbox should be present on Address Management frame
             
@CRM   
Scenario:37 Verifying that we can add an additional address for occasions where the delivery address is different from the billing address
            And I enter company name in Company Name field
            And I enter "1234" in Ext field
            And I select "Old" from website type dropdown list
            And I enter "Google.com" in website field and tab from the website field
            And I enter Number for company
            And I enter Area code for company
            And I click on Next button
            And I enter "12" in House No field
            And I enter "peter street" in street Name field
            And I enter "Bigtown" in Town field
            And I enter "OZ999CP1" in Postcode field
            And I click on Refresh Button
            And I click on Add Additional Addresses checkbox
            And I click on Next button
            And I again enter "29" in House Number field
            And I again enter "shakin street" in street Name field
            And I again enter "Oxford" in Town field
            And I again  enter "OX291 9ZZ" in Postcode field
            And I select "Billing Address" form second Type field
            And I click on Refresh Button
            And I click on Open on Finish checkbox
            And I click on Finish Buton
            Then Street address and Billing address should be displayed on Companies Id wizard
             
@CRM 
Scenario:38 Verifying that All addresses must have a Type and whenever we select particular type for one address that type is not visible for second address
            And I enter company name in Company Name field
            And I enter "1234" in Ext field
            And I select "Old" from website type dropdown list
            And I enter "Google.com" in website field and tab from the website field
            And I enter Number for company
            And I enter Area code for company
            And I click on Next button
            And I enter "12" in House No field
            And I enter "peter street" in street Name field
            And I enter "Bigtown" in Town field
            And I enter "OZ99CP" in Postcode field
            And I select "Ship To Address" from Type dropdown list
            And I click on Refresh Button
            And I click on Add Additional Addresses checkbox
            And I click on Next button 
            And I enter "56" in House No field
            And I enter "shakin street" in street Name field
            And I enter "oxford" in Town field
            And I enter "0pz56 op" in Postcode field
            And I again click on Address Type dropdown list
            Then "Ship To Address" from Type dropdown list should not be visible in that dropdown list

             