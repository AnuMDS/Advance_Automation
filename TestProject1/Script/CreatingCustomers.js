var companyName;
var country, companyType, validEmail;
var areaCode, number, floor, building, street, postCode;
var personName, accountNumber, personFamilyName;
var jobTitle;
var parCompanyName
var lnkCompanyName;
var txtPrefix;
var parFamilyName;
var parMiddleName;
var parForename;

let numberOfCharacters = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    {
    for(let i=0; i < 105; i++ )
    numberOfCharacters += possible.charAt(Math.floor(Math.random() * possible.length));
     }

When("I click on New Customer button", function clickNewCustomer(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton.ClickButton();
 });

Then("Create New Person checkbox should be visible", function verifyCreateNewPersonCheckbox(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CreateNewPerson.chkInternal, "Visible", cmpEqual, true);
});

Then("Create New Company checkbox should be visible", function verifyCreateNewCompanyCheckbox(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CreateNewCompany.chkInternal, "Visible", cmpEqual, true);
});

Then("Company Details frame should be visible", function verifyCompanyDetailsFrame(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_CompanyGroupBox.MainGroupBox, "Visible", cmpEqual, true);
});

Then("Person Details frame should be displayed", function verifyPersonFrame(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_ContactGroupBox.MainGroupBox, "WndCaption", cmpEqual, "Person");
});

Then("Help ,Back, Next, Finish buttons should be disabled", function verifyButtons(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnHelp, "Enabled", cmpEqual, false);
  
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnBack, "Enabled", cmpEqual, false);
  
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnNext, "Enabled", cmpEqual, false);
  
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish, "Enabled", cmpEqual, false);
});

Then("Cancel button should be enabled", function verifyCancelBtn(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnCancel, "Enabled", cmpEqual, true);
});


Then("Reset button should be visible", function verifyResetBtn(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_CompanyClear, "Visible", cmpEqual, true);
});

Given("I select the Create New Company check box", function checkCreateNewCompanyCheckbox(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CreateNewCompany.chkInternal.ClickButton();
});

Then("the Country field should be enabled", function verifyCountryField(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CompanyCountryID.LookupSearchCombo, "Enabled", cmpEqual, true);
});

Given("press tab from Country field", function tabCountryField(){
 Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CompanyCountryID.LookupSearchCombo.Keys("[Tab]");
});

Then("a message stating that Country cannot be blank should be displayed", function verifyCountryFieldMsg(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.MessagePopup.messagePanel.message, "WndCaption", cmpEqual, "Country cannot be blank", true);
});


Then("the data should be accepted and Type field should be enabled", function verifyCompanyType(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_CompanyTypeID.LookupSearchCombo, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CompanyCountryID.LookupSearchCombo, "WndCaption", cmpEqual, country);
});


Given("Role type will be default to Customer and I press tab from the role field", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CompanyRoleTypeID.LookupSearchCombo, "WndCaption", cmpEqual, "Customer");
});

Given("Role type will be default to Customer", function verifyRoleType(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CompanyRoleTypeID.LookupSearchCombo, "WndCaption", cmpEqual, "Customer");     
});


Then("message stating that Name Type cannot be empty should be displayed", function verifyNameTypeFieldMsg(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.MessagePopup.messagePanel.message, "WndCaption", cmpEqual, "Name Type cannot be empty", false);
});

Given("I press tab from the role field and focus will be in Name Type field which will default to Company Name and clear the field", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CompanyNameTypeID.LookupSearchCombo, "WndCaption", cmpEqual, "Company Name");
});

Then("selecting a Name Type again should be possible", function selectNameType(){
 Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CompanyNameTypeID.LookupSearchCombo.ClickItem("Company Name");
 aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CompanyNameTypeID.LookupSearchCombo, "WndCaption", cmpEqual, "Company Name");
});

Then("Click on the link to Name Type, Name Types record will be displayed and Valid Companies and Default Company Name Type should be checked", function clickNameTypeLink(){

  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CompanyNameTypeID.comboLinkLabel.ClickLink("Name Type");
  
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTLookupNameTypes_Form.PTLookupNameTypes_Tabs.tabMain.PTLookupNameTypes_Tabs_General.PTLookupNameTypes_Tabs_General.PTLookupNameTypes_ValidCompanies.chkInternal, "Checked", cmpEqual, true);

  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTLookupNameTypes_Form.PTLookupNameTypes_Tabs.tabMain.PTLookupNameTypes_Tabs_General.PTLookupNameTypes_Tabs_General.PTLookupNameTypes_IsDefaultCompanyNameType.chkInternal, "Checked", cmpEqual, true);
});

Then("Name Type record should be closed by clicking the {arg} at top right", function closeAndVerifyNameType(param1){
  Aliases.Aptify_Shell.FormTemplateForm.Close();
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm, "WndCaption", cmpEqual, "Create a new customer");
});


Given("Role type should be default to Customer", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CompanyRoleTypeID.LookupSearchCombo, "WndCaption", cmpEqual, "Customer");
});

Given("I press tab from the Name Type field", function tabNameTypeField(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CompanyNameTypeID.LookupSearchCombo.Keys("[Tab]");
});

Then("focus should be on Company Name field", function verifyCompanyNameField(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_1.CompanyCustomerWizard.CompanyCustomerWizard_PT_Group_Box_1.PTCompanyNamesCustomerWizard.PTCompanyNamesCustomerWizard_FirstName.txtInner.EmbeddableTextBoxWithUIPermissions, "Focused", cmpEqual, true);
});

Then("there should be a message stating that the field is mandatory", function verifyNameFieldMsg(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.MessagePopup.messagePanel.message, "WndCaption", cmpEqual, "Name cannot be empty", true);
});

Then("Name Type field should default to Company Name", function verifyNameType(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CompanyNameTypeID.LookupSearchCombo, "WndCaption", cmpEqual, "Company Name");
});

Given("I press tab from the role field and Name Type field is default to Company Name", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CompanyRoleTypeID.LookupSearchCombo.Keys("[Tab]");
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CompanyNameTypeID.LookupSearchCombo, "WndCaption", cmpEqual, "Company Name");
});


Given("I press tab from Country field", function tabCountry(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CompanyCountryID.LookupSearchCombo.Keys("[Tab]");
});

Given("I select a Country {arg}", function selectCompanyCountry(countryPar){
  let ddCountry = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CompanyCountryID.LookupSearchCombo;

  ddCountry.Click();
  ddCountry.ClickItem(countryPar);
  country = countryPar;
  ddCountry.Keys("[Tab]");
});

Given("I select a Type of Company {arg}", function selectCompanyType(companyTypePar){
  let ddCompanyType = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_CompanyTypeID.LookupSearchCombo;
  
  ddCompanyType.Click();
  ddCompanyType.ClickItem(companyTypePar);
  companyType = companyTypePar;
  ddCompanyType.Keys("[Tab]");
});

Given("I press tab from Company Type field", function tabCompanyTypeField(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CompanyNameTypeID.LookupSearchCombo.Keys("[Tab]");
});

Then("data should be accepted and Template field should not be empty", function verifyTemplateField(){  
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_CompanyTypeID.LookupSearchCombo, "WndCaption", cmpEqual, companyType, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_CompanyTemplateID.LookupSearchCombo, "WndCaption", cmpNotEqual, EmptyVariant, true);
});

Then("rest of the fields in the Company frame should be enabled", function verifyCompanyFrameFields(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_6.PTCompanyEmailAddressesCustomerWizard.PTCompanyEmailAddressesCustomerWizard_Email.txtInner, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_AreaCode.txtInner, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_Phone.txtInner, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_PhoneExtension.txtInner, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_1.CompanyCustomerWizard.CompanyCustomerWizard_PT_Group_Box_1.PTCompanyNamesCustomerWizard.PTCompanyNamesCustomerWizard_FirstName.txtInner, "Enabled", cmpEqual, true);
});

Then("Website should be disabled", function verifyWebsiteField(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_2.PTCustomerWizardWebSite.PTCustomerWizardWebSite_PTCompanyWebSites_Website.txtInner, "Enabled", cmpEqual, false);
});

Given("I clear the Name Type", function clearNameType(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CompanyNameTypeID.LookupSearchCombo.Keys("^a[BS]");
});

Given("I click on Company Name field", function clickOnCompanyName(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_1.CompanyCustomerWizard.CompanyCustomerWizard_PT_Group_Box_1.PTCompanyNamesCustomerWizard.PTCompanyNamesCustomerWizard_FirstName.txtInner.Click();
});

Given("I press Tab from the Company Name field", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_1.CompanyCustomerWizard.CompanyCustomerWizard_PT_Group_Box_1.PTCompanyNamesCustomerWizard.PTCompanyNamesCustomerWizard_FirstName.txtInner.Keys("[Tab]");
});

Then("there should be a message stating that Name cannot be empty", function verifyInvalidNameMsg(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.MessagePopup.messagePanel.message, "WndCaption", cmpEqual, "Name cannot be empty", false);
});

Then("there should be a message stating The Email Address is invalid. Please enter a valid Email Address", function verifyInvalidEmailMsg(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.MessagePopup.messagePanel.message, "WndCaption", cmpEqual, "The Email Address is invalid. Please enter a valid Email Address.", true);
});

Given("I press tab from Email", function tabEmail(){
 Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_6.PTCompanyEmailAddressesCustomerWizard.PTCompanyEmailAddressesCustomerWizard_Email.txtInner.Keys("[Tab]");
});

Then("data should be accepted", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_AreaCode.txtInner, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_6.PTCompanyEmailAddressesCustomerWizard.PTCompanyEmailAddressesCustomerWizard_Email.txtInner, "Text", cmpEqual, validEmail);
});

Given("I enter an Area Code {arg}", function (areaCodePar){
  let txtAreaCode =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_AreaCode.txtInner;
  
  txtAreaCode.Click();
  txtAreaCode.SetText(areaCodePar);
  areaCode = areaCodePar;
  txtAreaCode.Keys("[Tab]");
});

Then("area code of only five digits should be accepted", function verifyInvalidAreaCode(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_AreaCode.txtInner, "MaxLength", cmpEqual, 5);
});


Given("I press tab from area code", function tabAreaCode(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_AreaCode.txtInner.Keys("[Tab]");
});

Then("data should be accepted and Number field should have focus", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_Phone.txtInner.EmbeddableTextBoxWithUIPermissions, "Focused", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_AreaCode.txtInner, "Value", cmpEqual, areaCode);
});

Then("invalid number should not be accepted", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_Phone.txtInner, "MaxLength", cmpEqual, 20);
});

Given("I press tab from Number field", function tabNumberField(){
 Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_Phone.txtInner.Keys("[Tab]");
});

Then("Number should be accepted", function (){  
 aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_Phone.txtInner, "Text", cmpEqual, number);
});

Given("I enter an Email address of more than two fifty characters", function enterInvalidEmail(){
  let invalidEmailId = "MoreThan250CharactersMoreThan250CharactersMoreThan250CharactersMoreThan250CharactersMoreThan250CharactersMoreThan250CharactersMoreThan250CharactersMoreThan250CharactersMoreThan250CharactersMoreThan250CharactersrsMoreThan250CharacteMoreThan250CharacterMoreThan250Character";
  
  let txtEmail = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_6.PTCompanyEmailAddressesCustomerWizard.PTCompanyEmailAddressesCustomerWizard_Email.txtInner;
  txtEmail.SetText(invalidEmailId);
  txtEmail.Keys("[Tab]");
});

Given("I enter an Email address", function enterValidEmail(){
  let randomNumber =  aqConvert.FloatToStr(Math.floor((Math.random() * 100) + 1));
  let email = aqString.concat(randomNumber,"@gmail.com") ;
  
  let randomEmail = aqString.Concat(aqString.ToLower(aqString.Remove(companyName, 4, 1)), email);
  
  let txtEmail = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_6.PTCompanyEmailAddressesCustomerWizard.PTCompanyEmailAddressesCustomerWizard_Email.txtInner;
  txtEmail.Click();
  txtEmail.SetText(randomEmail);
  txtEmail.Keys("[Tab]");
});


Given("I enter a Number of more than twenty digits", function enterInvalidNumber(){
  let invalidNumber = 01234567890123456789;
  let txtNumber = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_Phone.txtInner;
  
  txtNumber.SetText(invalidNumber);
  txtNumber.Keys("[Tab]");
});

Given("I enter Number", function (){
  let txtNumber = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_Phone.txtInner;
  let randomNumber = aqConvert.FloatToStr(Math.floor((Math.random() * 10000000000) + 1));
  txtNumber.Click();
  txtNumber.SetText(randomNumber);
  number = randomNumber;
  txtNumber.Keys("[Tab]");
});


Given("I clear the Name Type field and press tab", function clearNameTypeAndTab(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CompanyNameTypeID.LookupSearchCombo.Keys("^a[BS]");
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CompanyNameTypeID.LookupSearchCombo.Keys("[Tab]");
});

Then("Name Type field should be cleared", function verifyNameTypeField(){
 aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CompanyNameTypeID.LookupSearchCombo.EmbeddableTextBoxWithUIPermissions, "WndCaption", cmpEqual, "");
});


Given("I click on Floor field", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBox1Floor.Click();
});

Given("I enter Floor {arg}", function (floorPar){
  let txtFloor = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBox1Floor.txtInner; 
  
  txtFloor.Click();
  txtFloor.SetText(floorPar);
  floor = floorPar;
  txtFloor.Keys("[Tab]");
});

Given("I press tab from floor field", function tabFloorField(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBox1Floor.Keys("[Tab]");
});

Then("data should be accepted, focus should be in the Building field", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseName.txtInner.EmbeddableTextBoxWithUIPermissions , "Focused", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBox1Floor.txtInner, "Text", cmpEqual, floor);
});

Given("I re-select and clear the Floor field", function clearFloorField(){
 Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBox1Floor.txtInner.Keys("^a [Clear]");
});

Then("focus should be in the Building field", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseName.txtInner.EmbeddableTextBoxWithUIPermissions , "Focused", cmpEqual, true);
});

Given("I click on Building field", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseName.Click();
});

Given("I enter a building name of more than fifty characters", function enterInvalidBuilding(){
  let invalidString = "MoreThan50CharactersMoreThan50CharactersMoreThan50CharactersMoreThan50Characters";
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseName.txtInner.SetText(invalidString);
});

Given("I press tab from building field", function tabBuildingField(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseName.Keys("[Tab]");
});

Then("building name of upto fifty characters should only be accepted", function verifyInvalidBuildingName(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseName.txtInner, "MaxLength", cmpEqual, 50);
});

Given("I enter Building name {arg}", function (buildingPar){
  let txtBuilding =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseName.txtInner;
  
  txtBuilding.Click();
  txtBuilding.SetText(buildingPar);
  building = buildingPar;
  txtBuilding.Keys("[Tab]");
});

Then("data should be accepted, focus should be on Street Name", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxStreet.txtInner.EmbeddableTextBoxWithUIPermissions , "Focused", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseName.txtInner, "textValue", cmpEqual, building);
});

Given("I re-select and clear the building field", function clearBuildingField(){
 Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseName.txtInner.Keys("^a [Clear]");
});

Then("focus should be on Street Name", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxStreet.txtInner.EmbeddableTextBoxWithUIPermissions, "Focused", cmpEqual, true);
});

Given("I click on Street name field", function (){
 Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxStreet.txtInner.Click();
});

Given("I enter more than fifty characters in the Street Name field", function enterInvalidStreetName(){
  let invalidString = "MoreThan50CharactersMoreThan50CharactersMoreThan50CharactersMoreThan50Characters";
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxStreet.txtInner.SetText(invalidString);
});

Given("I press tab from Street name field", function tabStreetField(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxStreet.Keys("[Tab]");
});

Then("street name of upto fifty characters should only be accepted", function verifyInvalidStreetName(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxStreet.txtInner, "MaxLength", cmpEqual, 50);
});

Given("I enter an alphabetical string {arg} the Street Name field", function enterStreetName(validStreet){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxStreet.txtInner.SetText(validStreet);
});

Then("data should be accepted, focus should be in District field", function (){ 
 aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxDistrict.txtInner.EmbeddableTextBoxWithUIPermissions, "Focused", cmpEqual, true);
 aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxStreet.txtInner, "Text", cmpEqual, street);
});

Given("I enter Street name {arg}", function (streetPar){ 
  let txtStreet = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxStreet.txtInner;
  
  txtStreet.Click();
  txtStreet.SetText(streetPar);
  street = streetPar;
  txtStreet.Keys("[Tab]");
});

Given("I enter Postcode", function (){
  let randomPostcode =  aqConvert.FloatToStr(Math.floor((Math.random() * 100000) + 1));
  let txtPostcode = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxPostalCode.txtInner;
  
  txtPostcode.Click();
  txtPostcode.Keys(randomPostcode);
  postCode = randomPostcode;
  txtPostcode.Keys("[Tab]");
});

Given("I press tab from Postcode field", function tabPostcodeField(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxPostalCode.txtInner.Keys("[Tab]");
});

Then("data should be accepted, focus should be on QAS button", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.buttonCustomerWizardVerifyAddress, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxPostalCode.txtInner, "Value", cmpEqual, postCode);
});

Given("I re-select the Postcode, enter a correctly formatted UK postcode {arg}", function enterUkPostcode(postcodeUkPar){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxPostalCode.txtInner.SetText(postcodeUkPar);
  postCode = postcodeUkPar;
});

Given("I enter House No {arg}", function (houseNo){
  let txtHouseNo = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseNo.txtInner;  
  
  txtHouseNo.Click();
  txtHouseNo.SetText(houseNo);
  txtHouseNo.Keys("[Tab]");
});

Given("I enter Town {arg}", function (town){
  let txtTown = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxTown.txtInner; 
  
  txtTown.Click();
  txtTown.SetText(town);
  txtTown.Keys("[Tab]");
});

Given("I enter County {arg}", function (county){
  let txtCounty = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxCounty.txtInner;
  txtCounty.Click();
  txtCounty.SetText(county);
  txtCounty.Keys("[Tab]");
});

Given("I click on Reset button", function clickResetBtn(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressResetButton.Click();
});

Given("I click on Reset Button", function (){
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_CompanyClear.Click();
});

Then("all the fields in the Address frame should be cleared", function verifyAddressFrame(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseName.txtInner, "WndCaption", cmpEqual, "");
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxStreet.txtInner, "WndCaption", cmpEqual, "");
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxTown.txtInner, "WndCaption", cmpEqual, "");
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxCounty.txtInner, "WndCaption", cmpEqual, "");
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxStreet.txtInner, "WndCaption", cmpEqual, "");
});

Then("in the Display Address frame Refresh button should be visible", function verifyRefreshBtn(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox2.aptifyActiveButtonRefresh, "Visible", cmpEqual, true);
});

Then("Manual Edit check box should be visible", function verifyManualEditCheckbox(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox2.aptifyCheckBoxManualEdit.chkInternal, "Visible", cmpEqual, true);
});

Given("I click on Refresh button", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox2.aptifyActiveButtonRefresh.Click();
});

Then("Address entered should be displayed in the Display Address frame", function verifyCompanyAddress(){
  let addressControlFrame = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl;
 
  let txtBusinessName = addressControlFrame.groupBox1.aptifyTextBoxBusinessName.txtInner.Text.OleValue;
  let txtHouseNo = addressControlFrame.groupBox1.aptifyTextBoxHouseNo.txtInner.Text.OleValue;
  let txtFloor =  addressControlFrame.groupBox1.aptifyTextBox1Floor.txtInner.Text.OleValue;
  let txtBuilding =  addressControlFrame.groupBox1.aptifyTextBoxHouseName.txtInner.Text.OleValue;
  let txtStreetName = addressControlFrame.groupBox1.aptifyTextBoxStreet.txtInner.Text.OleValue;
  let txtDistrict = addressControlFrame.groupBox1.aptifyTextBoxDistrict.txtInner.Text.OleValue;
  let txtTown = addressControlFrame.groupBox1.aptifyTextBoxTown.txtInner.Text.OleValue;
  let txtCounty = addressControlFrame.groupBox1.aptifyTextBoxCounty.txtInner.Text.OleValue;
  let txtPostCode = addressControlFrame.groupBox1.aptifyTextBoxPostalCode.txtInner.Text.OleValue;
  
  let lblLineBusiness = addressControlFrame.groupBox2.cultureLabelBusinessName.Text.OleValue;
  let lblLine1 = addressControlFrame.groupBox2.cultureLabelLine1.Text.OleValue;
  let lblLine2 = addressControlFrame.groupBox2.cultureLabelLine2.Text.OleValue;
  let lblLine3 = addressControlFrame.groupBox2.cultureLabelLine3.Text.OleValue;
  let lblLine4 = addressControlFrame.groupBox2.cultureLabelLine4.Text.OleValue;
  let lblLine5 = addressControlFrame.groupBox2.cultureLabelLine5.Text.OleValue;
   
  if( (aqObject.CompareProperty(lblLine1, cmpEqual, aqString.Concat(aqString.Concat(txtBuilding," "),txtFloor), true, 3)) && (aqObject.CompareProperty(lblLine2, cmpEqual, aqString.Concat(aqString.Concat(txtHouseNo," "),txtStreetName), true, 3)) && (aqObject.CompareProperty(lblLine3, cmpEqual, aqString.Concat(aqString.Concat(txtDistrict," "),txtTown), true, 3)) && (aqObject.CompareProperty(lblLine4, cmpEqual, txtCounty, true, 3)) && (aqObject.CompareProperty(lblLine5, cmpEqual, txtPostCode, true, 3)) && (aqObject.CompareProperty(txtBusinessName, cmpEqual, lblLineBusiness, true, 3)) ){
    Log.Checkpoint("Address entered is correctly displayed in the Display Address frame");
  }
  else{
    Log.Error("Address entered is incorrectly displayed in the Display Address frame");
  }
});


Given("I enter a Ext {arg}", function (ext){
  let txtExt =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_PhoneExtension.txtInner;

  txtExt.Click();  
  txtExt.SetText(ext);
  txtExt.Keys("[Tab]");
});


Given("I enter a Company name", function (){
  let anysize = 4;
  let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  randomCompanyName="";
  for( let i=0; i < anysize; i++ ){
  randomCompanyName += charset[Math.floor(Math.random() * charset.length)];
  }
  
  let company = (aqString.concat("RAVE"+" ", randomCompanyName));
  let txtCompanyName = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_1.CompanyCustomerWizard.CompanyCustomerWizard_PT_Group_Box_1.PTCompanyNamesCustomerWizard.PTCompanyNamesCustomerWizard_FirstName.txtInner;
  txtCompanyName.Click();
  txtCompanyName.EmbeddableTextBoxWithUIPermissions.SetText(company);
  companyName = company;
  txtCompanyName.Keys("[Tab]");
});


Given("I enter District {arg}", function (district){
  let txtDistrict = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxDistrict.txtInner;
  
  txtDistrict.Click();
  txtDistrict.SetText(district);
  txtDistrict.Keys("[Tab]");
});

Then("I check Open on Finish checkbox", function checkOpenOnFinish_Company(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_CompanyDisplay.chkInternal.wState = cbChecked;
});

Given("I enter Email address", function enterEmailAddress(){
  let validEmailId = "NameSurname@gmail.com";
  
  let txtEmail = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_6.PTCompanyEmailAddressesCustomerWizard.PTCompanyEmailAddressesCustomerWizard_Email.txtInner;
  txtEmail.SetText(validEmailId);
  validEmail = validEmailId;
  txtEmail.Keys("[Tab]");
});

When("I select a Job Title {arg}", function (jobTitle){
  let ddJobTitle = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_JobTitleID.LookupSearchCombo;
  
  ddJobTitle.Click();
  ddJobTitle.ClickItem(jobTitle);
  ddJobTitle.Keys("[Tab]");
});

Given("I select a Job Title {arg}", function selectJob(jobTitle){
  let ddJobTitle = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_JobTitleID.LookupSearchCombo;
  
  ddJobTitle.Click();
  ddJobTitle.ClickItem(jobTitle);
  ddJobTitle.Keys("[Tab]");
});


When("I enter a Person {arg}", function enterPersonName(personPar){
  let txtPerson = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_PersonID.txtLink.EmbeddableTextBoxWithUIPermissions;
  
  txtPerson.Click();
  txtPerson.SetText(personPar);
  personName = personPar;
  txtPerson.Keys("[Tab]");
});

Then("Create New Company checkbox should be checked", function createCompanyCheckbox(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CreateNewCompany.chkInternal, "Checked", cmpEqual, true);
});

Then("I select a Country {arg}", function selectCountry(country){
  let ddCountry = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CompanyCountryID.LookupSearchCombo;
  
  ddCountry.Click();
  ddCountry.ClickItem(country);
  ddCountry.Keys("[Tab]");
});

Then("I select a Type of Company {arg}", function selectCompanyTypeID(companyType){
  let ddCompanyType = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_CompanyTypeID.LookupSearchCombo;
  
  ddCompanyType.Click();
  ddCompanyType.ClickItem(companyType);
  ddCompanyType.Keys("[Tab]");
});

Then("I enter a Company name", function (){
  let anysize = 4;
  let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  randomCompanyName="";
  for( let i=0; i < anysize; i++ ){
  randomCompanyName += charset[Math.floor(Math.random() * charset.length)];
  }
  
  let company = (aqString.concat("RAVE"+" ", randomCompanyName));
  let txtCompanyName = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_1.CompanyCustomerWizard.CompanyCustomerWizard_PT_Group_Box_1.PTCompanyNamesCustomerWizard.PTCompanyNamesCustomerWizard_FirstName.txtInner;
  txtCompanyName.Click();
  txtCompanyName.EmbeddableTextBoxWithUIPermissions.SetText(company);
  companyName = company;
  txtCompanyName.Keys("[Tab]");
});

Then("I select a Website Type {arg}", function enterWebsiteType(websiteType){
  let ddWebsiteType = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_2.PTCustomerWizardWebSite.PTCustomerWizardWebSite_PTCompanyWebSites_WebsiteTypeID.LookupSearchCombo;
  
  ddWebsiteType.Click();
  ddWebsiteType.ClickItem(websiteType);
  ddWebsiteType.Keys("[Tab]");
});

Then("I enter the Website", function enterWebsite(){
  let string1 = "WWW." ;
  let string2 = ".COM"
  let website = aqString.Concat(string1,(aqString.concat(aqString.Remove(companyName, 4, 1),string2))); 
  
  let txtWebsite = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_2.PTCustomerWizardWebSite.PTCustomerWizardWebSite_PTCompanyWebSites_Website.txtInner;
  txtWebsite.Click();
  txtWebsite.Keys(website);
  txtWebsite.Keys("[Tab]");
});


Then("I select a Job Title {arg}", function selectJobTitle(jobTitlePar){
  let ddJobTitle = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_JobTitleID.LookupSearchCombo;
  
  ddJobTitle.Click();
  ddJobTitle.ClickItem(jobTitlePar);
  jobTitle = jobTitlePar;
  ddJobTitle.Keys("[Tab]");
});

Then("I enter House No {arg}", function enterHouseNo(houseNo){
  let txtHouseNo = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseNo.txtInner;
  
  txtHouseNo.Click();
  txtHouseNo.SetText(houseNo);
});

Then("I enter Floor {arg}", function enterFloor(floor){
  let txtFloor = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBox1Floor.txtInner;
  
  txtFloor.Click();
  txtFloor.SetText(floor);
});

Then("I enter Building name {arg}", function enterBuilding(building){
  let txtBuilding =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseName.txtInner;
  
  txtBuilding.Click();
  txtBuilding.SetText(building);
});

Then("I enter Street name {arg}", function enterStreet(street){
  let txtStreet = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxStreet.txtInner;
  
  txtStreet.Click();
  txtStreet.SetText(street);
});

Then("I enter Town {arg}", function enterTown(town){
  let txtTown = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxTown.txtInner;
  
  txtTown.Click();
  txtTown.SetText(town);
});

Then("I enter County {arg}", function enterCounty(county){
  let txtCounty = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxCounty.txtInner;
  
  txtCounty.Click();
  txtCounty.SetText(county);
});

Then("I enter Postcode", function enterPostcode(){
  let randomPostcode =  aqConvert.FloatToStr(Math.floor((Math.random() * 100000) + 1));
  let txtPostcode = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxPostalCode.txtInner;
  
  txtPostcode.Click();
  txtPostcode.Keys(randomPostcode);
  postCode = randomPostcode;
  txtPostcode.Keys("[Tab]");
});

Then("I click on Refresh button", function clickRefresh(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox2.aptifyActiveButtonRefresh.Click();
});

Then("I check the Manual Edit Checkbox", function manualEditCheckBox(){
 Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox2.aptifyCheckBoxManualEdit.chkInternal.ClickButton();
});

Then("the fields shoud be editable", function verifyDisplayAddressFields(){
  let wdwDisplayAddress = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox2;
  if( (aqObject.CheckProperty(wdwDisplayAddress.aptifyTextBoxLine1.txtInner, "Enabled", cmpEqual, true)) && (aqObject.CheckProperty(wdwDisplayAddress.aptifyTextBoxLine2.txtInner, "Enabled", cmpEqual, true)) && (aqObject.CheckProperty(wdwDisplayAddress.aptifyTextBoxLine3.txtInner, "Enabled", cmpEqual, true)) && (aqObject.CheckProperty(wdwDisplayAddress.aptifyTextBoxLine4.txtInner, "Enabled", cmpEqual, true)) && (aqObject.CheckProperty(wdwDisplayAddress.aptifyTextBoxLine5.txtInner, "Enabled", cmpEqual, true)) ){
    Log.Checkpoint("Fields in Display Address are Editable");
     }
    else{
    Log.Error("Fields in Display Address are Disabled");
    }
});

Then("I check the Open on Finish Checkbox", function openOnFinishCheckbox(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_CompanyDisplay.chkInternal.ClickButton();
});

Then("I select a Type {arg}", function selectAddressType(addressType){
 let ddAddressType = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_CompanyAddressType.LookupSearchCombo;
 
 ddAddressType.Click();
 ddAddressType.ClickItem(addressType);
 ddAddressType.Keys("[Tab]");
});

Then("I select departments {arg}, {arg}", function selectDepartments(dept1, dept2){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_CompanyDepartmentIDs.dropDownMultiSelect.Click();
  
  Aliases.Aptify_Shell.DropDownPopupForm.treeInner.CheckItem(dept1, true);
  Aliases.Aptify_Shell.DropDownPopupForm.treeInner.CheckItem(dept2, true);
});

Then("Address Management frame should display Person name and Company name", function verifyAddressManagementFrame(){
 let personNameDisplayed =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_PersonName.txtInner.get_Text();
 let companyNameDisplayed = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_CompanyName.txtInner.get_Text();
 
    if(aqObject.CompareProperty(personNameDisplayed, cmpNotEqual, EmptyVariant, true, 3)){
    Log.Checkpoint("Person Name is displayed in Address Management frame");
     }
    else{
    Log.Error("Person Name is not displayed in Address Management frame");
    }
    
    if(aqObject.CompareProperty(companyName, cmpEqual, companyNameDisplayed, true, 3)){
    Log.Checkpoint("Company Name is displayed in Address Management frame");
     }
    else{
    Log.Error("Company Name is not displayed in Address Management frame");
    }
});

Then("I enter an Email address", function enterEmail(){
  let randomNumber =  aqConvert.FloatToStr(Math.floor((Math.random() * 100) + 1));
  let email = aqString.concat(randomNumber,"@gmail.com") ;
  let randomEmail = aqString.Concat(aqString.ToLower(aqString.Remove(companyName, 4, 1)), email);
  
  let txtEmail = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_6.PTCompanyEmailAddressesCustomerWizard.PTCompanyEmailAddressesCustomerWizard_Email.txtInner;
  txtEmail.Click();
  txtEmail.SetText(randomEmail);
  txtEmail.Keys("[Tab]");
});

Then("I click Ok for the message stating {arg}", function msgPersonLinkedToCompany(param1){
  let msgBox = Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo;
  if( msgBox.Exists ){
    msgBox.ClickButton();
  }
});

Then("all the mandatory fields should not be blank", function verifyCompanyRecord(){
  verifyIdentificationSection();
  verifyCompanySection();
  verifyInformationSection();
  verifyCompanyFrame();
});

function verifyIdentificationSection(){
  //AccountNumber
  let accountNo = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_Companies_Companies_TopArea.PT_Companies_Companies_PrimaryIDType.txtInner.get_Text(); 
  if(aqObject.CompareProperty(accountNo, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Account Number is Displayed");
  }
  else{
    Log.Error("Account Number is Blank");
  }
  
  //PrimaryRole
  let primaryRole = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_Companies_Companies_TopArea.PT_Companies_Companies_PrimaryRole.txtInner.get_Text(); 
  if(aqObject.CompareProperty(primaryRole, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Primary Role is Displayed");
  }
  else{
    Log.Error("Primary Role is Blank");
  }
}

function verifyCompanySection(){
  //CompanyName
   let companyName = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_Companies_Companies_TopArea.PT_Companies_Companies_TopArea_FullName.txtInner.get_Text(); 
   if(aqObject.CompareProperty(companyName, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Company name is Displayed");
  }
  else{
    Log.Error("Company name is Blank");
  }

  //City
  let city = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_Companies_Companies_TopArea.PT_Companies_Company_TopArea_City.txtInner.get_Text(); 
  if(aqObject.CompareProperty(city, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("City is Displayed");
  }
  else{
    Log.Error("City is Blank");
  }
  
  //Postcode
  let postocde = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_Companies_Companies_TopArea.PT_Companies_Companies_TopArea_PostCode.txtInner.get_Text(); 
  if(aqObject.CompareProperty(postocde, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Postocde is Displayed");
  }
  else{
    Log.Error("Postcode is Blank");
  }
}

function verifyInformationSection(){
  //Status
  let status = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_Companies_Companies_TopArea.PT_Companies_Companies_TopArea_StatusID.LookupSearchCombo.get_Text(); 
  if(aqObject.CompareProperty(status, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Status is Displayed");
  }
  else{
    Log.Error("Status is Blank");
  }
  
  //Type
  let customerType = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_Companies_Companies_TopArea.PT_Companies_Companies_TopArea_CustomerTypeID.LookupSearchCombo.get_Text();   
  if(aqObject.CompareProperty(customerType, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Customer Type is Displayed");
  }
  else{
    Log.Error("Customer Type is Blank");
  }
}

function verifyCompanyFrame(){
  let companyNameAddress = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_Companies_Companies_Form_NewContact_Tab.PT_Companies_Companies_NewContact.Companies_Contact_PTPrimaryContact_PrimaryContact.PanelNameAndAddress.LabelName.get_Text();
  let companyNames = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_Companies_Companies_Form_NewContact_Tab.PT_Companies_Companies_NewContact.PT_Companies_Contact_TopLeft_TabControl.tabMain.Companies_Contact_Names.Companies_Contact_Names.Companies_Contact_Names_CompanyNames.AptifyControlBase_Fill_Panel.flexSubType;
  let companyAddresses = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_Companies_Companies_Form_NewContact_Tab.PT_Companies_Companies_NewContact.PTCompany_Contact_SubTabs.tabMain.PTCompany_Contact_SubTabs_Address.PTCompany_Contact_SubTypes_Addresses.PT_Companies_Contact_Addresses_CompanyAddresses.AptifyControlBase_Fill_Panel.flexSubType;

  //companyNameAddress
  if(aqObject.CompareProperty(companyNameAddress, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Company Name and Address is Displayed");
  }
  else{
    Log.Error("Company Name and Address is Blank");
  }
  
  //companyNames
  if(aqObject.CheckProperty(companyNames, "Row", cmpNotEqual, 0))
  {
    Log.Checkpoint("Company Names grid is Not Empty");
  }
  else{
    Log.Error("Company Names grid is Blank");
  }

  //companyAddresses
  if(aqObject.CheckProperty(companyAddresses, "Row", cmpNotEqual, 0))
  {
    Log.Checkpoint("Company Addresses grid is Not Empty");
  }
  else{
    Log.Error("Company Addresses grid is Blank");
  }
  
}

Then("I click Finish", function clickFinish(){
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
});

Then("I enter an Area Code {arg}", function enterAreaCode(areaCode){
  let txtAreaCode =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_AreaCode.txtInner;
  
  txtAreaCode.Click();
  txtAreaCode.SetText(areaCode);
  txtAreaCode.Keys("[Tab]");
});


Then("I enter a Ext {arg}", function enterExt(ext){
  let txtExt =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_PhoneExtension.txtInner;

  txtExt.Click();  
  txtExt.SetText(ext);
  txtExt.Keys("[Tab]");
});

Then("I enter Number", function enterNumber(){
  let txtNumber = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_Phone.txtInner;
  let randomNumber = aqConvert.FloatToStr(Math.floor((Math.random() * 10000000000) + 1));
  txtNumber.Click();
  txtNumber.SetText(randomNumber);
  number = randomNumber;
  txtNumber.Keys("[Tab]");
});

Then("I enter District {arg}", function enterDistrict(district){
  let txtDistrict = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxDistrict.txtInner;
  
  txtDistrict.Click();
  txtDistrict.SetText(district);
  txtDistrict.Keys("[Tab]");
});


When("I select the Country {arg}", function selectCountry_Person(country){
  let ddCountry = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Country.LookupSearchCombo;
  
  ddCountry.Click();
  ddCountry.ClickItem(country);
  ddCountry.Keys("[Tab]");
});

When("I select a Type of Person {arg}", function selectPersonType(personType){
  let ddPersonType = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_PersonTypeID.LookupSearchCombo;

  ddPersonType.Click();
  ddPersonType.ClickItem(personType);
  ddPersonType.Keys("[Tab]");
});

When("I enter Forename {arg}", function enterPersonForename(forename){
  let txtFirstName = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Contact.PersonCustomerWizard.PersonCustomerWizard_PT_Group_Box_1.PTPersonNamesCustomerWizard.PTPersonNamesCustomerWizard_FirstName.txtInner;
  
  txtFirstName.Click();
  txtFirstName.EmbeddableTextBoxWithUIPermissions.SetText(forename);
  personName = forename;
  txtFirstName.Keys("[Tab]");
});

When("I enter Family Name", function enterFamilyName(){
  let anysize = 4;
  let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  randomFamilyName="";
  for( let i=0; i < anysize; i++ ){
  randomFamilyName += charset[Math.floor(Math.random() * charset.length)];
  }
  let txtFamilyName = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Contact.PersonCustomerWizard.PersonCustomerWizard_PT_Group_Box_1.PTPersonNamesCustomerWizard.PTPersonNamesCustomerWizard_FamilyName.txtInner;

  txtFamilyName.Click();
  txtFamilyName.EmbeddableTextBoxWithUIPermissions.SetText(randomFamilyName);
  personFamilyName = randomFamilyName;
  txtFamilyName.Keys("[Tab]");
});

When("I enter an Email address", function enterPersonEmail(){
  let randomNumber =  aqConvert.FloatToStr(Math.floor((Math.random() * 100) + 1));
  let email = aqString.concat(randomNumber,"@gmail.com") ;
  let randomEmail = aqString.Concat(aqString.ToLower(personName),(aqString.concat(aqString.ToLower(personFamilyName),email)));
  let txtEmail = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_3.PTEmailAddressesCustomerWizard.PTEmailAddressesCustomerWizard_Email.txtInner;
  
  txtEmail.Click();
  txtEmail.SetText(randomEmail);
});

When("I enter an Area Code {arg}", function enterPersonAreaCode(areaCode){
  let txtAreaCode = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_4.PTPersonPhoneNumbersCustomerWizard.PTPersonPhoneNumbersCustomerWizard_AreaCode.txtInner;
  
  txtAreaCode.Click();
  txtAreaCode.SetText(areaCode);
});

When("I enter Number", function enterPersonNumber(){
  let randomNumber = aqConvert.FloatToStr(Math.floor((Math.random() * 10000000000) + 1));
  let txtNumber = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_4.PTPersonPhoneNumbersCustomerWizard.PTPersonPhoneNumbersCustomerWizard_Phone.txtInner;

  txtNumber.Click();
  txtNumber.SetText(randomNumber);
});

When("I enter a Ext {arg}", function enterPersonExt(ext){
  let txtExt = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_4.PTPersonPhoneNumbersCustomerWizard.PTPersonPhoneNumbersCustomerWizard_PhoneExtension.txtInner;

  txtExt.Click();
  txtExt.SetText(ext);
});

When("I enter Account No", function enterAccountNumber(){
  let randomAccNumber = aqConvert.FloatToStr(Math.floor((Math.random() * 10000000000) + 1));
  let txtAccountNo = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PersonPrimaryIdentifier.txtInner;
  
  txtAccountNo.Click();
  txtAccountNo.Keys(randomAccNumber);
  accountNumber = randomAccNumber;
  txtAccountNo.Keys("[Tab]");
});

When("I enter House No {arg}", function enterPersonHouse(houseNo){
  let txtHouseNo = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseNo.txtInner;  
  
  txtHouseNo.Click();
  txtHouseNo.SetText(houseNo);
  txtHouseNo.Keys("[Tab]");
});

When("I enter Floor {arg}", function enterPersonFloor(floorPar){
  let txtFloor = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBox1Floor.txtInner; 
  
  txtFloor.Click();
  txtFloor.SetText(floorPar);
  floor = floorPar;
  txtFloor.Keys("[Tab]");
});

When("I enter Building name {arg}", function enterPersonBuilding(buildingPar){
  let txtBuilding =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseName.txtInner;
  
  txtBuilding.Click();
  txtBuilding.SetText(buildingPar);
  building = buildingPar;
  txtBuilding.Keys("[Tab]");
});

When("I enter Street name {arg}", function enterPersonStreet(streetPar){
  let txtStreet = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxStreet.txtInner;
  
  txtStreet.Click();
  txtStreet.SetText(streetPar);
  street = streetPar;
  txtStreet.Keys("[Tab]");
});

When("I enter District {arg}", function enterPersonDistrict(district){
  let txtDistrict = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxDistrict.txtInner;
  
  txtDistrict.Click();
  txtDistrict.SetText(district);
  txtDistrict.Keys("[Tab]");
});

When("I enter Town {arg}", function enterPersonTown(town){
  let txtTown = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxTown.txtInner; 
  
  txtTown.Click();
  txtTown.SetText(town);
  txtTown.Keys("[Tab]");
});

When("I enter County {arg}", function enterPersonCounty(county){
  let txtCounty = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxCounty.txtInner;
  txtCounty.Click();
  txtCounty.SetText(county);
  txtCounty.Keys("[Tab]");
});

When("I enter Postcode", function enterPersonPostcode(){
  let randomPostcode =  aqConvert.FloatToStr(Math.floor((Math.random() * 100000) + 1));
  let txtPostcode = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxPostalCode.txtInner;
  
  txtPostcode.Click();
  txtPostcode.Keys(randomPostcode);
  postCode = randomPostcode;
  txtPostcode.Keys("[Tab]");
});

When("I click on Refresh button", function clickRefreshAddress(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox2.aptifyActiveButtonRefresh.Click();
});

When("I check the Create New Person checkbox", function checkCreateNewPersonCheckbox(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CreateNewPerson.chkInternal.wState = cbChecked;
});

When("I click on Next button", function clickNext(){
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnNext.ClickButton();
});

Then("I check Open on Finish checkbox for Person", function checkOpenOnFinishPerson(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_PersonDisplay.chkInternal.wState = cbChecked
});

Then("Address should be displayed in the Display Address frame", function verifyPersonAddress(){
  let addressControlFrame = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl;
 
  let txtBusinessName = addressControlFrame.groupBox1.aptifyTextBoxBusinessName.txtInner.Text.OleValue;
  let txtHouseNo = addressControlFrame.groupBox1.aptifyTextBoxHouseNo.txtInner.Text.OleValue;
  let txtFloor =  addressControlFrame.groupBox1.aptifyTextBox1Floor.txtInner.Text.OleValue;
  let txtBuilding =  addressControlFrame.groupBox1.aptifyTextBoxHouseName.txtInner.Text.OleValue;
  let txtStreetName = addressControlFrame.groupBox1.aptifyTextBoxStreet.txtInner.Text.OleValue;
  let txtDistrict = addressControlFrame.groupBox1.aptifyTextBoxDistrict.txtInner.Text.OleValue;
  let txtTown = addressControlFrame.groupBox1.aptifyTextBoxTown.txtInner.Text.OleValue;
  let txtCounty = addressControlFrame.groupBox1.aptifyTextBoxCounty.txtInner.Text.OleValue;
  let txtPostCode = addressControlFrame.groupBox1.aptifyTextBoxPostalCode.txtInner.Text.OleValue;

  let lblLineBusiness = addressControlFrame.groupBox2.cultureLabelBusinessName.Text.OleValue;
  let lblLine1 = addressControlFrame.groupBox2.cultureLabelLine1.Text.OleValue;
  let lblLine2 = addressControlFrame.groupBox2.cultureLabelLine2.Text.OleValue;
  let lblLine3 = addressControlFrame.groupBox2.cultureLabelLine3.Text.OleValue;
  let lblLine4 = addressControlFrame.groupBox2.cultureLabelLine4.Text.OleValue;
  let lblLine5 = addressControlFrame.groupBox2.cultureLabelLine5.Text.OleValue;
   
  if( (aqObject.CompareProperty(lblLine1, cmpEqual, aqString.Concat(aqString.Concat(txtBuilding," "),txtFloor), true, 3)) && (aqObject.CompareProperty(lblLine2, cmpEqual, aqString.Concat(aqString.Concat(txtHouseNo," "),txtStreetName), true, 3)) && (aqObject.CompareProperty(lblLine3, cmpEqual, aqString.Concat(aqString.Concat(txtDistrict," "),txtTown), true, 3)) && (aqObject.CompareProperty(lblLine4, cmpEqual, txtCounty, true, 3)) && (aqObject.CompareProperty(lblLine5, cmpEqual, txtPostCode, true, 3)) && (aqObject.CompareProperty(txtBusinessName, cmpEqual, lblLineBusiness, true, 3)) ){
    Log.Checkpoint("Address entered is correctly displayed in the Display Address frame");
  }
  else{
    Log.Error("Address entered is incorrectly displayed in the Display Address frame");
  }
});

Then("Name and Account Number displayed in information panel should be correct", function verifyPersonNameAndAccNo(){
  let nameDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_Persons_TopArea.Persons_TopArea_FullName.txtInner.get_Text();
  let accountNumDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_Persons_TopArea.Persons_TopArea_PrimaryID.txtInner.get_Text();
  let fullName = aqString.concat(personName, " "+personFamilyName);

  if( (aqObject.CompareProperty(nameDisplayed, cmpEqual, fullName, true, 3)) ) {
    Log.Checkpoint("Person Name and Account Number displayed is correct");
   }
  else{
    Log.Error("Person Name and Account Number displayed is incorrect");
   }
});

Then("Company name displayed in information panel should be correct", function verifyCompanyName(){
  let companyNameDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_Companies_Companies_TopArea.PT_Companies_Companies_TopArea_FullName.txtInner.get_Text();
  
  if(aqObject.CompareProperty(companyNameDisplayed, cmpEqual, companyName, true, 3)){
    Log.Checkpoint("Company Name displayed is correct");
   }
  else{
    Log.Error("Company Name displayed is incorrect");
   }
});


When("I create a New Person", function createNewPerson(){
  
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CreateNewPerson.chkInternal.wState = cbChecked;
  
  let ddCountry = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Country.LookupSearchCombo;
  ddCountry.ClickItem("United Kingdom");
  ddCountry.Keys("[Tab]");
  
  let ddCompanyType = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_PersonTypeID.LookupSearchCombo;
  ddCompanyType.ClickItem("Academic Individual");
  ddCompanyType.Keys("[Tab]");
  
  let txtFirstName = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Contact.PersonCustomerWizard.PersonCustomerWizard_PT_Group_Box_1.PTPersonNamesCustomerWizard.PTPersonNamesCustomerWizard_FirstName.txtInner;
  txtFirstName.Click();
  txtFirstName.EmbeddableTextBoxWithUIPermissions.SetText("RAVE");
  personName = "RAVE";
  
  let anysize = 4;
  let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  randomPersonName="";{}
  for( let i=0; i < anysize; i++ ){
  randomPersonName += charset[Math.floor(Math.random() * charset.length)];
  }
  let txtFamilyName =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Contact.PersonCustomerWizard.PersonCustomerWizard_PT_Group_Box_1.PTPersonNamesCustomerWizard.PTPersonNamesCustomerWizard_FamilyName.txtInner;
  txtFamilyName.Click();
  txtFamilyName.EmbeddableTextBoxWithUIPermissions.SetText(randomPersonName);
  personFamilyName = randomPersonName;
  
  let randomNumber =  aqConvert.FloatToStr(Math.floor((Math.random() * 100) + 1));
  let email = aqString.concat(randomNumber,"@gmail.com") ;
  let randomEmail = aqString.Concat(aqString.ToLower(personName),(aqString.concat(aqString.ToLower(personFamilyName),email)));
  let txtEmail = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_3.PTEmailAddressesCustomerWizard.PTEmailAddressesCustomerWizard_Email.txtInner;
  txtEmail.Click();
  txtEmail.SetText(randomEmail);
 
  let txtAreaCode = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_4.PTPersonPhoneNumbersCustomerWizard.PTPersonPhoneNumbersCustomerWizard_AreaCode.txtInner;
  txtAreaCode.Click();
  txtAreaCode.SetText(1234);
  
  let randomPhoneNumber = aqConvert.FloatToStr(Math.floor((Math.random() * 10000000000) + 1));
  let txtNumber = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_4.PTPersonPhoneNumbersCustomerWizard.PTPersonPhoneNumbersCustomerWizard_Phone.txtInner;
  txtNumber.Click();
  txtNumber.SetText(randomPhoneNumber);
  
  let txtExt = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_4.PTPersonPhoneNumbersCustomerWizard.PTPersonPhoneNumbersCustomerWizard_PhoneExtension.txtInner;
  txtExt.Click();
  txtExt.SetText(987);
  
  //let randomAccNumber = aqConvert.FloatToStr(Math.floor((Math.random() * 10000000000) + 1));
  //let txtAccountNo = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PersonPrimaryIdentifier.txtInner;
  //txtAccountNo.Click();
  //txtAccountNo.Keys(randomAccNumber);
  //txtAccountNo.Keys("[Tab]");
  
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnNext.ClickButton();
  
  let txtHouseNumber = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseNo.txtInner;
  txtHouseNumber.Click();
  txtHouseNumber.SetText(29);
  txtHouseNumber.Keys("[Tab]");
  
  let txtFloor =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBox1Floor.txtInner;
  txtFloor.SetText("5th Floor");
  txtFloor.Keys("[Tab]");
  
  let txtBuilding =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseName.txtInner;
  txtBuilding.SetText("The Shard");
  txtBuilding.Keys("[Tab]");
  
  let txtStreetName =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxStreet.txtInner;
  txtStreetName.SetText("Abbey");
  txtStreetName.Keys("[Tab]");
  
  let txtDistrict = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxDistrict.txtInner;
  txtDistrict.SetText("Brent");
  txtDistrict.Keys("[Tab]");
  
  let txtTown = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxTown.txtInner;
  txtTown.SetText("Oxford");
  txtTown.Keys("[Tab]");
  
  let txtCounty =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxCounty.txtInner;
  txtCounty.SetText("Shropshire");
  txtCounty.Keys("[Tab]");
  
  let randomStr1 =  aqConvert.FloatToStr(Math.floor((Math.random() * 100000) + 1));
  let txtPostcode = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxPostalCode.txtInner;
  txtPostcode.SetText(randomStr1);
  
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox2.aptifyActiveButtonRefresh.Click();
  
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_PersonDisplay.chkInternal.wState = cbChecked;

  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();  
  
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
});

When("I select the Person created which is not already associated with another Company", function selectPersonCreated(){
  let txtPerson = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_PersonID.txtLink.EmbeddableTextBoxWithUIPermissions;
  let personFullName = aqString.concat(personName, " "+personFamilyName);
  txtPerson.Click();
  txtPerson.SetText(personFullName);
});

When("I select a Country {arg}", function selectPersonCountry(countryPar){
  let ddCountry = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CompanyCountryID.LookupSearchCombo;

  ddCountry.Click();
  ddCountry.ClickItem(countryPar);
  country = countryPar;
  ddCountry.Keys("[Tab]");
});

When("I select a Type of Company {arg}", function (companyType){
  let ddCompanyType = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_CompanyTypeID.LookupSearchCombo;
  
  ddCompanyType.Click();
  ddCompanyType.ClickItem(companyType);
  ddCompanyType.Keys("[Tab]");;
});

When("I enter a Company name", function (){
  let anysize = 4;
  let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  randomCompanyName="";
  for( let i=0; i < anysize; i++ ){
  randomCompanyName += charset[Math.floor(Math.random() * charset.length)];
  }
  
  let company = (aqString.concat("RAVE"+" ", randomCompanyName));
  let txtCompanyName = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_1.CompanyCustomerWizard.CompanyCustomerWizard_PT_Group_Box_1.PTCompanyNamesCustomerWizard.PTCompanyNamesCustomerWizard_FirstName.txtInner;
  txtCompanyName.Click();
  txtCompanyName.EmbeddableTextBoxWithUIPermissions.SetText(company);
  companyName = company;
  txtCompanyName.Keys("[Tab]");
});

When("I click on Departments option and select a number of Departments", function (){
 Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_CompanyDepartmentIDs.dropDownMultiSelect.Click(196, 12);

 Aliases.Aptify_Shell.DropDownPopupForm.treeInner.CheckItem("Sales");
 Aliases.Aptify_Shell.DropDownPopupForm.treeInner.CheckItem("Finance",skShift);
 Aliases.Aptify_Shell.DropDownPopupForm.treeInner.CheckItem("Marketing",skCtrl);
});

When("I check the Open on Finish Checkbox", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_CompanyDisplay.chkInternal.wState = cbChecked;
});

When("I click on Finish button", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
});

Then("there should be two Contact Cards with Role Type of Customer", function verifyCustomerRoleTypes(){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_Companies_Companies_Form_NewContact_Tab.PT_Companies_Companies_NewContact.PTCompany_Contact_SubTabs.tabMain.PTCompany_Contact_SubTabs_ContactCards.PTCompanies_Contact_SubTabs_ContactCards.PTCompanies_Contact_SubTabs_ContactCards_Telerik_List_View_ContactCards.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let ccCompany = radGridView.wValue(0, 2).OleValue;
  let ccPerson = radGridView.wValue(1, 2).OleValue;

  if( (aqObject.CompareProperty(ccCompany, cmpEqual, "Customer", true, 3)) && (aqObject.CompareProperty(ccPerson, cmpEqual, "Customer", true, 3)) ){
    Log.Checkpoint("Contact cards with Role Type as Customer are displayed");
   }
  else{
    Log.Error("Contact cards with Role Type as Customer are not displayed");
   }
}); 

Then("person should be associated with the Company created", function verifyCompanyPersonAssociation(){
  let toAssociate = aqString.concat(companyName, " (Customer)"); 
  let personFullName = aqString.concat(personName, " "+personFamilyName); 
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_OTC_Companies_Profile_Overview_TabGroup.PT_OTC_Companies_Profile_Overview_TabGroup.tabMain.PT_Companies_Relationships_Tab.PT_Companies_Relationships_Tab.PT_Companies_Relationships_Tab_Telerik_List_View_Child.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let customer = radGridView.wChildView(0).wValue(0, 1).OleValue;
  let customerRelatedTo = radGridView.wChildView(0).wValue(0, 4).OleValue;
    
  if( (aqObject.CompareProperty(toAssociate, cmpEqual, customer, true, 3)) && (aqObject.CompareProperty(personFullName, cmpEqual, customerRelatedTo, true, 3)) ){
    Log.Checkpoint("Person is associated with the Company created");
  }
  else{
    Log.Error("Person is not associated with the Company created");
  }
});

Given("click on the New Customer button", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton.ClickButton();
});

Then("Create New Customer Wizard should open", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm , "WndCaption", cmpEqual, "Create a new customer");
});

When("I select the Create New Company check box", function checkCreateCompanyCheckbox(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CreateNewCompany.chkInternal.wState = cbChecked;
});


Then("all the selected Departments should be displayed", function verifyDepartments(){
  let departmentsSelected = aqString.Concat("Finance",(aqString.concat("_Sales" ,"_Marketing")));
  
  let C1FlexGrid = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_Companies_Companies_Form_NewContact_Tab.PT_Companies_Companies_NewContact.PT_Companies_Contact_TopLeft_TabControl.tabMain.Companies_Form_Departments_Tab.Companies_Departments.Companies_Departments_Sub_Type_Control_Departments.AptifyControlBase_Fill_Panel.flexSubType;
  
  let deptName = C1FlexGrid.get_Item(1,1).OleValue;
  let deptName1 = C1FlexGrid.get_Item(2,1).OleValue;
  let deptName2 = C1FlexGrid.get_Item(3,1).OleValue;
  let departmentsDisplayed = aqString.Concat(deptName,(aqString.concat("_"+deptName1,"_"+deptName2)));

  if(aqObject.CompareProperty(departmentsDisplayed, cmpEqual, departmentsSelected, true, 3)){
    Log.Checkpoint("Departments selected are displayed in information panel");
     }
  else{
    Log.Error("Departments selected are not displayed in information panel");
	}
  
});

When("I click on Contact Cards tab", function clickTabContactCards(){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_Companies_Companies_Form_NewContact_Tab.PT_Companies_Companies_NewContact.PTCompany_Contact_SubTabs.tabMain.ClickTab("Contact Cards");
});

Then("Job title should be populated with the Job title selected", function verifyJobTitle(){
 aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTContactCard_Form.PTContactCard_Tabs.tabMain.PTContactCard_Tabs_General.PTContactCard_Tabs_General.PTContactCard_Tabs_General_JobTitleID.LookupSearchCombo, "WndCaption", cmpEqual, jobTitle);
});

Then("I open Contact Card for the Person", function openContactCardPerson(){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_Companies_Companies_Form_NewContact_Tab.PT_Companies_Companies_NewContact.PTCompany_Contact_SubTabs.tabMain.PTCompany_Contact_SubTabs_ContactCards.PTCompanies_Contact_SubTabs_ContactCards.PTCompanies_Contact_SubTabs_ContactCards_Telerik_List_View_ContactCards.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(1, "Contact Card Name");
});

Then("I click on Overview tab", function clickTabOverview(){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.ClickTab("Overview");
});

Then("I click on Departments sub tab", function clickTabDepartments(){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.ClickTab("Contact");
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_Companies_Companies_Form_NewContact_Tab.PT_Companies_Companies_NewContact.PT_Companies_Contact_TopLeft_TabControl.tabMain.ClickTab("Departments");
});

Then("I close the records", function closeRecord(){
  Aliases.Aptify_Shell.FormTemplateForm.Close();
});

Then("click on the New Customer button", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton.ClickButton();
});

Then("I click on Child grid arrow in Relationships tab", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_OTC_Companies_Profile_Overview_TabGroup.PT_OTC_Companies_Profile_Overview_TabGroup.tabMain.PT_Companies_Relationships_Tab.PT_Companies_Relationships_Tab.PT_Companies_Relationships_Tab_Telerik_List_View_Child.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.Expand(0);
});

Given("I enter Business Name {arg}", function enterCompanyBusinessName(businessName){
  let txtBusinessName = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxBusinessName.txtInner;
  
  txtBusinessName.Click();
  txtBusinessName.SetText(businessName);
});

When("I enter Business Name {arg}", function enterPersonBusinessName(businessName){
  let txtBusinessName = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxBusinessName.txtInner;
  
  txtBusinessName.Click();
  txtBusinessName.SetText(businessName);
});



When("I click on new button", function clickBtnNew (){
  let btnNewCustomer = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton;
  btnNewCustomer.ClickButton();
});

When("I click on Create new company", function checkCheckbox (){
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CreateNewCompany.chkInternal.wState = cbChecked;
});

When("I select {arg} from Type dropdown list", function selectType (Type){
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_CompanyTypeID.LookupSearchCombo.ClickItem(Type);
});

Given("I click on Template link", function clickTemplateLink (){
  let lnkTemplate =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_CompanyTemplateID.comboLinkLabel
  lnkTemplate.ClickLink("Template");
});

Then("CRM prefrence templates record should be opened", function checkpointCRMRecord (){  
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpEqual, "CRM Preference Templates ID: 1");
}); 
  

Given("I click on {arg} at top right", function (btnClose){
  Aliases.Aptify_Shell.FormTemplateForm.Close();
});

Then("CRM prefrence window should be closed", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm, "WndCaption", cmpEqual, "Create a new customer");
});

Given("I tab on Template field", function tabTemplateField (){
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_CompanyTemplateID.LookupSearchCombo.Click();
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_CompanyTemplateID.LookupSearchCombo.Keys("[Tab]");
});

Then("The focus should be on role type", function checkpointRoleTypeFocus (){
  aqObject.CheckProperty( Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CompanyRoleTypeID, "Text", cmpEqual, "Customer");
  
});

Given("I click on Role Type link", function clickRoleTypeLink (){
  let lnkRoleType =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CompanyRoleTypeID.comboLinkLabel
  lnkRoleType.ClickLink("Role Type");
  
});

Then("Role type window should be closed", function checkpointRoleTypeWindowClosed (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm, "WndCaption", cmpEqual, "Create a new customer");
});

When("I select {arg} from country dropdown list", function selectCompanyCountryID(Country){
    Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CompanyCountryID.LookupSearchCombo.ClickItem(Country);
});


Then("data should be accepted and focus should be on next field", function checkpointwebsiteTypeFocus (){  
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_2.PTCustomerWizardWebSite.PTCustomerWizardWebSite_PTCompanyWebSites_WebsiteTypeID.LookupSearchCombo.EmbeddableTextBoxWithUIPermissions, "Focused", cmpEqual, true);
});


Given("I tab on Name Type", function tabNameType (){
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CompanyNameTypeID.LookupSearchCombo.Click();
});



Then("the focus should be on Website Type", function checkpointWebsiteTypeFocus (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_2.PTCustomerWizardWebSite.PTCustomerWizardWebSite_PTCompanyWebSites_WebsiteTypeID.LookupSearchCombo.EmbeddableTextBoxWithUIPermissions, "Focused", cmpEqual, true);
});

Given("I tab on website type", function tabWebsiteType (){
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_2.PTCustomerWizardWebSite.PTCustomerWizardWebSite_PTCompanyWebSites_WebsiteTypeID.LookupSearchCombo.Keys("[Tab]");

});

Then("focus should be on Email", function checkpointFocusEmail (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_6.PTCompanyEmailAddressesCustomerWizard.PTCompanyEmailAddressesCustomerWizard_Email.txtInner.EmbeddableTextBoxWithUIPermissions, "Focused", cmpEqual, true);
});



Given("I click on Website Type", function clickWebsiteType (){
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_2.PTCustomerWizardWebSite.PTCustomerWizardWebSite_PTCompanyWebSites_WebsiteTypeID.LookupSearchCombo.Click();
});

Given("I select {arg} from Name Type dropdown list", function selectNameTypecreatecompany (NameType){
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CompanyNameTypeID.LookupSearchCombo.ClickItem(NameType);
});

Given("I select {arg} from website type dropdown list", function selectWebsiteTypecreateCompany(dropdownWebsiteType){
    Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_2.PTCustomerWizardWebSite.PTCustomerWizardWebSite_PTCompanyWebSites_WebsiteTypeID.LookupSearchCombo.ClickItem(dropdownWebsiteType);
    Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_2.PTCustomerWizardWebSite.PTCustomerWizardWebSite_PTCompanyWebSites_WebsiteTypeID.LookupSearchCombo.Keys("[Tab]");
});



Given("I enter {arg} in website field and tab from the website field", function (txtWebsite){
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_2.PTCustomerWizardWebSite.PTCustomerWizardWebSite_PTCompanyWebSites_Website.txtInner.SetText(txtWebsite);
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_2.PTCustomerWizardWebSite.PTCustomerWizardWebSite_PTCompanyWebSites_Website.txtInner.Keys("[Tab]");
});

Then("valid companies and default company role checkboxes should be checked by default in Role Type window", function checkpointVerifyRoleTypeWindow (){
  Aliases.Aptify_Shell.FormTemplateForm.Maximize();
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PT_PTRoleTypes_Form.PT_PTRoleTypes_Tabs.tabMain.PT_PTRoleTypes_Tabs_General.PT_PTRoleTypes_Tabs_General.PT_PTRoleTypes_Tabs_General_ValidCompanies.chkInternal, "Checked", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PT_PTRoleTypes_Form.PT_PTRoleTypes_Tabs.tabMain.PT_PTRoleTypes_Tabs_General.PT_PTRoleTypes_Tabs_General.PT_PTRoleTypes_Tabs_General_IsDefaultCompanyRole.chkInternal, "Checked", cmpEqual, true);
});

Given("I click on Ext field", function (){
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_PhoneExtension.txtInner.Click();
});

Then("The Ext number should be accepted upto ten characters", function (){
  aqObject.CheckProperty( Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_PhoneExtension, "MaxLength", cmpEqual, 10);
  
});

Given("I tab on Ext field", function (){
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_PhoneExtension.txtInner.Keys("[Tab]");
});

Then("Focus should be on Reset button", function (){
  aqObject.CheckProperty( Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_CompanyClear, "Focused", cmpEqual, true);
  });



Then("All the fields in company frames should be blank and disabled", function (){
  aqObject.CheckProperty( Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_CompanyGroupBox.MainGroupBox,"Enabled", cmpEqual, true);
});

Given("I click on Next button", function clickBtnNext (){
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnNext.Click();
});


Then("The  label should be changed to {arg}", function checkpointLableChanged (NameType){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_1.CompanyCustomerWizard.CompanyCustomerWizard_PT_Group_Box_1.PTCompanyNamesCustomerWizard.PTCompanyNamesCustomerWizard_FirstName.lblInner, "WndCaption", cmpEqual, NameType);
});


Then("The data should be accepted and focus should be on website field ,which should be enabled", function (){
   aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_2.PTCustomerWizardWebSite.PTCustomerWizardWebSite_PTCompanyWebSites_Website.txtInner.EmbeddableTextBoxWithUIPermissions, "Focused", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_2.PTCustomerWizardWebSite.PTCustomerWizardWebSite_PTCompanyWebSites_Website.txtInner, "Enabled", cmpEqual, true);
  
});

Given("I enter more than hundred characters company name", function (){
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_1.CompanyCustomerWizard.CompanyCustomerWizard_PT_Group_Box_1.PTCompanyNamesCustomerWizard.PTCompanyNamesCustomerWizard_FirstName.txtInner.Click();
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_1.CompanyCustomerWizard.CompanyCustomerWizard_PT_Group_Box_1.PTCompanyNamesCustomerWizard.PTCompanyNamesCustomerWizard_FirstName.txtInner.Keys(numberOfCharacters);
});

Given("I enter more than ten digits in Ext field", function (){
    let extNo = "";
    let possible = "0123456789";
    {
    for(let i=0; i < 15 ; i++ )
    extNo += possible.charAt(Math.floor(Math.random() * possible.length));
     }
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_PhoneExtension.txtInner.SetText(extNo);
});

Given("I enter {arg} in Ext field", function enterEXTNumberCreateCompany (ExtNumber){
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_PhoneExtension.txtInner.SetText(ExtNumber);
});

Then("Help button should be disabled on Address details page", function (){
  
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnHelp, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnHelp, "WndCaption", cmpEqual, "&Help");
});

Then("Next button should be disabled on Address details page", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnNext, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnNext, "WndCaption", cmpEqual, "&Next");
});

Then("Address,Display Address As and Address Management frames should be displayed on Address details page", function checkpointAddressDetailsPageVerify (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1, "WndCaption", cmpEqual, "Address");
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox2, "WndCaption", cmpEqual, "Display Address As");
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_Group_Box_2.MainGroupBox, "WndCaption", cmpEqual, "Address Management");
});

Then("Cancel , Back and Finish button should be displayed on Address details page", function checkpointDisplayBtnOnAddressDetailsPage (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnCancel, "WndCaption", cmpEqual, "&Cancel");
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnBack, "WndCaption", cmpEqual, "&Back");
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish, "WndCaption", cmpEqual, "&Finish");
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnBack, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnCancel, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish, "Visible", cmpEqual, true);
  
});

Then("All of the fields in company frame should be disabled", function checkpointCompanyFrameDisabled (){
  aqObject.CheckProperty( Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CompanyCountryID, "Enabled", cmpEqual, false);

  aqObject.CheckProperty( Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_CompanyTypeID.comboLinkLabel, "Enabled", cmpEqual, false);
  
  aqObject.CheckProperty( Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CompanyNameTypeID, "Enabled", cmpEqual, false);

});

Then("The Reset button should be displayed on Address frame", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressResetButton, "Visible", cmpEqual, true);
});

Then("The QAS Button should be displayed on Address frame", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.buttonCustomerWizardVerifyAddress, "Visible", cmpEqual, true);
});

Then("The Business Name,House No,Floor,Building,Street Name,District,Town,country and Postcode fields should be displayed on Address frame", function checkpointAddressFrameVerify (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxBusinessName, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseNo, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBox1Floor, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseName, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxStreet, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxDistrict, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxTown, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxCounty, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxPostalCode, "Visible", cmpEqual, true);
});

Then("company name should be accepted upto hundred characters", function (){
  aqObject.CheckProperty( Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_1.CompanyCustomerWizard.CompanyCustomerWizard_PT_Group_Box_1.PTCompanyNamesCustomerWizard.PTCompanyNamesCustomerWizard_FirstName.txtInner, "MaxLength", cmpEqual, 100);
});

Given("I click on {arg} to the right of country code field", function (param1){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.lookupSearchBoxCountries.LookupSearchCombo.Keys("^a [BS]");
  //Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.lookupSearchBoxCountries.LookupSearchCombo(1).Child().Click();
  
});

Then("country code field should be blanked", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.lookupSearchBoxCountries, "Text", cmpEqual, "");
  });

Given("I tab on country code field", function (){
   
  let groupBoxAddressManagement = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1;
  let ultraComboCountryCode = groupBoxAddressManagement.lookupSearchBoxCountries.LookupSearchCombo;
  ultraComboCountryCode.Keys("[Tab]");
  groupBoxAddressManagement.aptifyTextBoxBusinessName.txtInner.Keys("[Tab]");
});

Then("On screen there should be popup message stating that country code field cannot be blanked", function (){
  
  aqObject.CheckProperty(Aliases.Aptify_Shell.LocalizedMsgBox, "WndCaption", cmpEqual, "Information");
  aqObject.CheckProperty(Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.txtMessage, "Text", cmpEqual, "Country cannot be blank");
});

Then("The data should be accepted and focus should be on House No field", function (){
  //aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseNo.txtInner, "Focused", cmpEqual, true);
 // Aliases.Aptify_Shell.GenericWizardForm.GWPictureBox.Click(96, 27)
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseNo.txtInner.EmbeddableTextBoxWithUIPermissions, "Focused", cmpEqual, true);

});

Given("I enter more than fifty characters in House No field", function (){
Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.lookupSearchBoxCountries.LookupSearchCombo.Keys("[Tab]");  
Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseNo.txtInner.Keys(numberOfCharacters);
});
;
Then("House No should be accepted upto fifty characters", function (){
 aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseNo.txtInner, "MaxLength", cmpEqual, 50);
});

Given("I enter {arg} in House No field and tab on House No", function (HouseNumber){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.lookupSearchBoxCountries.LookupSearchCombo.Keys("[Tab]");
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseNo.txtInner.SetText(HouseNumber);
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseNo.txtInner.Keys("[Tab]");
  
});

Then("data should be accepted and focus should be on Floor", function checkpointFocusFloor (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBox1Floor.txtInner.EmbeddableTextBoxWithUIPermissions, "Focused", cmpEqual, true);
});

Given("I enter more than fifty characters in Floor No field", function (){
 Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.lookupSearchBoxCountries.LookupSearchCombo.Keys("[Tab]"); 
 Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseNo.txtInner.Keys("[Tab]");
 Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBox1Floor.txtInner.Keys(numberOfCharacters);
});

Then("Floor No should be accepted upto fifty characters", function checkpointFloorNoWithFiftyCharacters (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBox1Floor.txtInner.EmbeddableTextBoxWithUIPermissions, "wLimit", cmpEqual, 50);
});

Then("By default Country code should be {arg}", function checkpointCountryCode (CountryCode){

  let countryCode = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.lookupSearchBoxCountries.Text.OleValue;
  
  if(aqObject.CompareProperty(countryCode, cmpEqual, CountryCode, true, 3))
  {
    Log.Checkpoint("Same country code has been display")
  }
  else{
  Log.Error("Different country code has been display")
  }
});


Given("I enter more than fifty characters in District field", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxDistrict.txtInner.Click();
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxDistrict.txtInner.Keys(numberOfCharacters);
});

Then("District field should be accepted upto fifty characters", function (){
  
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxDistrict.txtInner, "MaxLength", cmpEqual, 50);
});

Given("I enter {arg} in District field and tab away", function enterDistrictField (txtDistrict){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxDistrict.txtInner.Click();
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxDistrict.txtInner.SetText(txtDistrict);
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxDistrict.txtInner.Keys("[Tab]");
});

Then("The data should be accepted and focus should be on Town field", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxTown.txtInner.EmbeddableTextBoxWithUIPermissions, "Focused", cmpEqual, true);
});

Given("I reselect and clear the district field and tab away", function (){
 Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxDistrict.txtInner.Click();
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxDistrict.txtInner.Keys("^a [Clear]");
 Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxDistrict.txtInner.Keys("[Tab]");
});

Given("I enter more than fifty characters in Town field", function (){
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxTown.txtInner.Click();
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxTown.txtInner.Keys(numberOfCharacters);
  
});

Then("Town field should be accepted upto fifty characters", function verifyTownFieldWithFiftyCharacters (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxTown.txtInner, "MaxLength", cmpEqual, 50);
  
});

Given("I enter {arg} in Town field and tab away", function enterTownFieldCreateCompany (txtTown){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxTown.txtInner.Click();
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxTown.txtInner.SetText(txtTown)
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxTown.txtInner.Keys("[Tab]");
})

Then("The data should be accepted and focus should be on County field", function checkpointFocusCounty(){
 aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxCounty.txtInner.EmbeddableTextBoxWithUIPermissions,"Focused", cmpEqual, true);
});

Given("I enter more than hundred characters in County field", function enterMoreThanHundredCounty (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxCounty.txtInner.Click();
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxCounty.txtInner.Keys(numberOfCharacters);
});

Then("County field should be accepted upto hundred characters", function checkpointCountyHundredCharacters (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxCounty.txtInner, "MaxLength", cmpEqual, 100);
});

Given("I enter {arg} in County field and tab away", function emterCountryNameCreateCompany(txtCounty){
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxCounty.txtInner.Click();
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxCounty.txtInner.SetText(txtCounty);
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxCounty.txtInner.Keys("[Tab]");
  
});

Then("The data should be accepted and focus should be on Postcode field", function checkpointFocusPostCode (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxPostalCode.txtInner.EmbeddableTextBoxWithUIPermissions, "Focused", cmpEqual, true);
}); 

Given("I enter {arg} in House No field", function enterHouseNumber(txtHouseNumber){
  //Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.lookupSearchBoxCountries.LookupSearchCombo.Keys("[Tab]");
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseNo.txtInner.Click();
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseNo.txtInner.Keys(txtHouseNumber);
});

Given("I enter {arg} in street Name field", function (txtStreet){
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxStreet.txtInner.click();
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxStreet.txtInner.SetText(txtStreet);
});

Given("I enter {arg} in Town field", function (txtTown){
  //Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxTown.txtInner.Click();
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxTown.txtInner.Keys(txtTown)
});

Given("I enter {arg} in County field", function (txtCounty){
 Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxCounty.txtInner.Click();
 Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxCounty.txtInner.SetText(txtCounty);
});

Given("I enter {arg} in Postcode field", function (txtPostcode){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxPostalCode.txtInner.Click();
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxPostalCode.txtInner.Keys(txtPostcode);
});

Then("There should be editable form with {arg} fields", function checkpointEditableForm (param1){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox2.aptifyTextBoxLine1.txtInner, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox2.aptifyTextBoxLine10.txtInner, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox2.aptifyTextBoxLine1.txtInner, "Enabled", cmpEqual, true);
});

Then("Address should be displayed in the top {arg} fields", function checkpointAddressDisplayOnFourLines (param1){
  let firstLine = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox2.aptifyTextBoxLine1.txtInner.Text.OleValue;
  let secondLine = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox2.aptifyTextBoxLine2.txtInner.Text.OleValue;
  let thirdLine = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox2.aptifyTextBoxLine3.txtInner.Text.OleValue;
  let fourthLine = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox2.aptifyTextBoxLine4.txtInner.Text.OleValue;
  

  if(aqObject.CompareProperty(firstLine, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Address has been display in first line")
  }
  else{
  Log.Error("first line is Empty");
  }
  if(aqObject.CompareProperty(secondLine, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Address has been display in second line")
  }
  else{
  Log.Error("second line is Empty");
  }
  if(aqObject.CompareProperty(thirdLine, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Address has been display in third line")
  }
  else{
  Log.Error("third line is Empty");
  }
  if(aqObject.CompareProperty(fourthLine, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Address has been display in fourth line")
  }
  else{
  Log.Error("fourth line is Empty");
  }
  
});

Given("I click on Refresh Button", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox2.aptifyActiveButtonRefresh.Click();
  
});

Given("I check the Manual edit checkbox", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox2.aptifyCheckBoxManualEdit.chkInternal.wState = cbChecked;
});

Given("I click on manual edit checkbox", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox2.aptifyCheckBoxManualEdit.chkInternal.wState = cbChecked;
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox2.aptifyCheckBoxManualEdit.chkInternal.ClickButton();
  
});

Then("Refresh button should be disabled", function checkpointRefreshBtnDisabled (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox2.aptifyActiveButtonRefresh, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox2.aptifyActiveButtonRefresh, "WndCaption", cmpEqual, "Refresh");
});



Then("There should be popup message stating that Manual Edited changes will be lost.OK to continue?", function checkpointPopupMsg (){
  
  aqObject.CheckProperty(Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.txtMessage, "Text", cmpEqual, "Manual Edited changes will be lost. OK to Continue?");
  
});

Then("There should be Ok and Cancel button", function checkpointOKCancelBtn (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo, "WndCaption", cmpEqual, "&OK");
  aqObject.CheckProperty(Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne, "WndCaption", cmpEqual, "&Cancel");
});

Given("I enter address in fifth field", function enterAddressFifthField (){
  let addressFifth = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    {
    for(let i=0; i < 15; i++ )
    addressFifth += possible.charAt(Math.floor(Math.random() * possible.length));
     }

  
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox2.aptifyTextBoxLine5.txtInner.Click();
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox2.aptifyTextBoxLine5.txtInner.SetText(addressFifth);
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox2.aptifyTextBoxLine5.txtInner.Keys("[Tab]");
});

Given("I click on Ok button", function (){
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
});



//string code
Then("The address should be displayed over four lines", function checkpointAddressDislayOverFourLine (){
  let firstLine = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox2.aptifyTextBoxLine1.txtInner.Text.OleValue;
  let secondLine = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox2.aptifyTextBoxLine2.txtInner.Text.OleValue;
  let thirdLine = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox2.aptifyTextBoxLine3.txtInner.Text.OleValue;
  let fourthLine = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox2.aptifyTextBoxLine4.txtInner.Text.OleValue;
  

  if(aqObject.CompareProperty(firstLine, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Address has been display in first line")
  }
  else{
  Log.Error("first line is Empty");
  }
  if(aqObject.CompareProperty(secondLine, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Address has been display in second line")
  }
  else{
  Log.Error("second line is Empty");
  }
  if(aqObject.CompareProperty(thirdLine, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Address has been display in third line")
  }
  else{
  Log.Error("third line is Empty");
  }
  if(aqObject.CompareProperty(fourthLine, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Address has been display in fourth line")
  }
  else{
  Log.Error("fourth line is Empty");
  }
});

Then("The address added in fifth field should not be shown", function checkpointAddressAddedFifthField (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox2.cultureLabelLine5, "WndCaption", cmpEqual, "");
});

Then("Contact name field should be blank,disabled and no label to that field", function checkpointVerifyContactName (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_PersonName.txtInner, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_PersonName.txtInner, "textValue", cmpEqual, "");
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_PersonName.txtInner, "Nullable", cmpEqual, true);
  
});

Then("Type field should be disabled, it should be clear and list,defaulted to Not Selected", function checkpointVerifyTypeField (){
  
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_PersonAddressType, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_PersonAddressType.LookupSearchCombo, "NullText", cmpEqual, "Not Selected");
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_PersonAddressType, "WndCaption", cmpEqual, "");
});

Then("Open on Finish check box field should be disabled", function checkpointChecboxDisabed (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_PersonDisplay.chkInternal, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_PersonDisplay.chkInternal, "WndCaption", cmpEqual, "Open on Finish");
});

Then("Company Name field should be populated as value enter in previous company name field and it should be disabled with no label", function verifyingCompanyName (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_CompanyName.txtInner, "Enabled", cmpEqual, false);
  let compName = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_CompanyName.txtInner.Text.OleValue;
  if(aqObject.CompareProperty(compName, cmpEqual, parCompanyName, true, 3))
  {
    Log.Checkpoint("Previously enter company name and display company name is same")
  }
  else{
  Log.Error("Previously enter company name and display company name is different");
  }
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_CompanyName.txtInner, "Nullable", cmpEqual, true);
  
});



Then("There should be Open on Finish checkbox present", function checkpointOpenOnFinishCheckbox (){
  
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_CompanyDisplay.chkInternal, "WndCaption", cmpEqual, "Open on Finish");
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_CompanyDisplay.chkInternal, "CheckState", cmpEqual, "Unchecked");
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_CompanyDisplay.chkInternal, "Visible", cmpEqual, true);
  
});

Then("Departments field should be defaulted to Not selected", function checkpointDepartmentDefaultedText (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_CompanyDepartmentIDs.dropDownMultiSelect, "Text", cmpEqual, "Not Selected");
  
});

Then("Add Additional Addresses checkbox should be present on Address Management frame", function checkpointAdditionalAddressCheckbox (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_AdditionalAddresses.chkInternal, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_AdditionalAddresses.chkInternal, "WndCaption", cmpEqual, "Add Additional Addresses");
});

Given("I tab on country code fields", function tabCountryCode (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.lookupSearchBoxCountries.LookupSearchCombo.Keys("[Tab]");
});

Given("I click on House No", function clickHouseNo (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseNo.txtInner.Click();
});


Given("I enter {arg} in Area Code field", function enterAreaCodeCreateCompany (txtAreaCode){
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_AreaCode.txtInner.SetText(txtAreaCode);
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_AreaCode.txtInner.Keys("[Tab]");
});

Given("I enter {arg} in Number field", function enterNumberCreateCompany (txtNumber){
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_Phone.txtInner.SetText(txtNumber);
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_Phone.txtInner.Keys("[Tab]");
});

Given("I enter {arg} in floor field", function enterFloorCreateCompany (txtFloor){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBox1Floor.txtInner.SetText(txtFloor);
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBox1Floor.txtInner.Keys("[Tab]");
});

Given("I enter {arg} in Building  field", function enterBuildingCreateCompany (txtBuilding){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseName.txtInner.SetText(txtBuilding);
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseName.txtInner.Keys("[Tab]");
});

Given("I enter {arg} in District field", function enterDistrictCreateCompany (txtDistrict){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxDistrict.txtInner.SetText(txtDistrict);
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxDistrict.txtInner.Keys("[Tab]");
});

Then("Type field should be defaulted to {arg}", function checkpointDefaultTypeField (dropdownType){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_CompanyAddressType.LookupSearchCombo, "WndCaption", cmpEqual, dropdownType);
});

Then("The entered new address should be accepted", function checkpointEnterNewAddressAccepted (){
  let fifthLine = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox2.aptifyTextBoxLine5.txtInner.Text.OleValue;
  
  if(aqObject.CompareProperty(fifthLine, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Enter new address has been accepted")
  }
  else{
  Log.Error("Enter new address is not accepted");
  }
});

Given("I click on Add Additional Addresses checkbox", function clickAdditionalAddress (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_AdditionalAddresses.chkInternal.wState = cbChecked;
});

Then("The Next button should be  enabled", function checkpointNextBtnEnabled (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnNext, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnNext, "WndCaption", cmpEqual, "&Next");
});

Then("The Finish button should be disabled", function checkpointFinishBtnDisabled (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish, "WndCaption", cmpEqual, "&Finish");
});

Then("Only the Cancel and Back buttons should be enabled", function checkpointBtnEnabled (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnCancel, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnCancel, "WndCaption", cmpEqual, "&Cancel");
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnBack, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnBack, "WndCaption", cmpEqual, "&Back");
});

Then("Only the second Type field should be display Not Selected and enabled", function checkpointVerifyNewTypeField (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_CompanyAddressType, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_CompanyAddressType, "WndCaption", cmpEqual, "Not Selected");
});

Given("I select {arg} form second Type field", function selectSecondTypefield (dropdownsecondtype){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_CompanyAddressType.LookupSearchCombo.DropDown();
 
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_CompanyAddressType.LookupSearchCombo.ClickItem(dropdownsecondtype);
});

Given("I again enter {arg} in House Number field", function enterHouseNOCreateCompany (txtHouseNumber){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseNo.txtInner.Click();
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseNo.txtInner.SetText(txtHouseNumber);
});

Given("I again enter {arg} in street Name field", function enterStreetCreateCompany (txtStreet){
 Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxStreet.txtInner.click();
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxStreet.txtInner.SetText(txtStreet);
});

Given("I again enter {arg} in Town field", function enterTownCreateCompany (txtTown){
 Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxTown.txtInner.Click();
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxTown.txtInner.SetText(txtTown)
});

Given("I again  enter {arg} in Postcode field", function enterPostCodeCreateCompany (txtPostcode){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxPostalCode.txtInner.Click();
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxPostalCode.txtInner.SetText(txtPostcode);
});

Given("I click on Open on Finish checkbox", function clickBtnOpenOnFinish(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_CompanyDisplay.chkInternal.wState = cbChecked;
});

Given("I click on Finish Buton", function clickBtnFinish(){
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
});

Then("Street address and Billing address should be displayed on Companies Id wizard", function checkpointAddressTypeVerify (){
  let c1FlexGridCompaniesId = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_Companies_Companies_Form_NewContact_Tab.PT_Companies_Companies_NewContact.PTCompany_Contact_SubTabs.tabMain.PTCompany_Contact_SubTabs_Address.PTCompany_Contact_SubTypes_Addresses.PT_Companies_Contact_Addresses_CompanyAddresses.AptifyControlBase_Fill_Panel.flexSubType;
  let clmName1 = c1FlexGridCompaniesId.get_Item(1, 1).OleValue;
  let clmName2 = c1FlexGridCompaniesId.get_Item(2, 1).OleValue; 
  if(aqObject.CompareProperty(clmName1, cmpEqual, "Street Address", true, 3))
  {
    Log.Checkpoint("Street Address has been dislay")
  }
  else{
  Log.Error("Street address is not display");
  }
  if(aqObject.CompareProperty(clmName2, cmpEqual, "Billing Address", true, 3))
  {
    Log.Checkpoint("Billing Address has been display")
  }
  else{
  Log.Error("Billing Address is not display");
  }
  
});


Given("I enter company name in Company Name field", function enterCompanyName (){
   let companyName = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    {
    for(let i=0; i < 9; i++ )
    companyName += possible.charAt(Math.floor(Math.random() * possible.length));
     }
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_1.CompanyCustomerWizard.CompanyCustomerWizard_PT_Group_Box_1.PTCompanyNamesCustomerWizard.PTCompanyNamesCustomerWizard_FirstName.txtInner.SetText(companyName);
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_1.CompanyCustomerWizard.CompanyCustomerWizard_PT_Group_Box_1.PTCompanyNamesCustomerWizard.PTCompanyNamesCustomerWizard_FirstName.txtInner.Keys("[Tab]")
   parCompanyName = companyName
});

Given("I select {arg} from Type dropdown list", function (addressType){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_CompanyAddressType.LookupSearchCombo.ClickItem(addressType);
});

Given("I again click on Address Type dropdown list", function clickAddressTypeDropDown (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_CompanyAddressType.LookupSearchCombo.DropDown();
});

Then("{arg} from Type dropdown list should not be visible in that dropdown list", function checkpointTypeNotDisplayInList (addressType){
 aqObject.CheckProperty(Aliases.Aptify_Shell.DropDownForm.ComboDropDownControl, "VisibleOnScreen", cmpNotEqual,addressType, true);
 Delay(8000);
});

Given("I enter Number for company", function enterNumberForCompany (){
  let number = "";
    let possible = "0123456789";
    {
    for(let i=0; i < 9; i++ )
    number += possible.charAt(Math.floor(Math.random() * possible.length));
     }
  let txtNumber = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_Phone.txtInner;
  txtNumber.Keys(number);
});

Given("I enter Area code for company", function(){
  
    let areaCode = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    {
    for(let i=0; i < 6; i++ )
    areaCode += possible.charAt(Math.floor(Math.random() * possible.length));
     }
  let txtAreaCode = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_AreaCode.txtInner;
  txtAreaCode.Keys(areaCode);
  
});

Then("I click on Cancel button from popup", function clickBtnCancel (){
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
});


//CreatePersonLinkedToCompany


When("I click on New Customer from folder list", function clickNewCustomerAPI (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton.ClickButton();
});

When("I enter existing customer name in the field Company {arg}", function enterCompanyNameToCreateLinked (companyName){
  let lnkCompany = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_CompanyID.txtLink;
  lnkCompany.SetText(companyName);
  lnkCompany.Keys("[Tab]");
  let radGridViewCompany = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  {
  radGridViewCompany.DblClickCell(0, "Primary ID");
  }
  let compName = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_CompanyID.txtLink.Text.OleValue;
  lnkCompanyName = compName
});

Then("Create New Person checkbox should be checked", function checkpointNewPersonCheckbox (){
 aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CreateNewPerson.chkInternal, "Checked", cmpEqual, true);
});

Then("I enter Country as {arg}, Type as {arg},Template as {arg}", function selectCountryTypeTemplate (Country, Type, Template){
  
  let lnkCountry = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Country.LookupSearchCombo;
  lnkCountry.ClickItem(Country);
  
  let lnkType = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_PersonTypeID.LookupSearchCombo;
  lnkType.ClickItem(Type);
  
  let lnkTemplate = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_PersonTemplateID.LookupSearchCombo;
  lnkTemplate.ClickItem(Template);
});

Then("I enter Fore Name ,Middle Name ,Family Name", function enterNameofPerson (){
    
    let possible = "abcdefghijklmnopqrstuvwxyz";
    {
    let foreName = "";
    {
    {
    for(let i=0; i < 6; i++ )
    foreName += possible.charAt(Math.floor(Math.random() * possible.length));
     }
     
  let txtForeName = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Contact.PersonCustomerWizard.PersonCustomerWizard_PT_Group_Box_1.PTPersonNamesCustomerWizard.PTPersonNamesCustomerWizard_FirstName.txtInner;
  txtForeName.SetText(foreName);
  txtForeName.Keys("[Tab]");
  parForename = foreName;
    }
    
    let middleName = "";
    {
    {
    for(let i=0; i < 6; i++ )
    middleName += possible.charAt(Math.floor(Math.random() * possible.length));
     }
     
  let txtMiddleName  = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Contact.PersonCustomerWizard.PersonCustomerWizard_PT_Group_Box_1.PTPersonNamesCustomerWizard.PTPersonNamesCustomerWizard_MiddleName.txtInner;
  txtMiddleName.SetText(middleName);
  txtMiddleName.Keys("[Tab]");
  parMiddleName = middleName;
    }
    let familyName = "";
    {
    {
    for(let i=0; i < 6; i++ )
    familyName += possible.charAt(Math.floor(Math.random() * possible.length));
     }
     }
  let txtFamilyName = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Contact.PersonCustomerWizard.PersonCustomerWizard_PT_Group_Box_1.PTPersonNamesCustomerWizard.PTPersonNamesCustomerWizard_FamilyName.txtInner;
  txtFamilyName.SetText(familyName);
  txtFamilyName.Keys("[Tab]");
  parFamilyName = familyName
  }
});


Then("I enter Job Title {arg}", function (jobTitle){
  let ddJoTitle = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_JobTitleID.LookupSearchCombo;
  ddJoTitle.Keys(jobTitle);
  ddJoTitle.Keys("[Tab]");
  
});

Then("Address Details page should be Disabled", function checkpointVerifyAddressDetailsPage (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBox1Floor, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox2.aptifyActiveButtonRefresh, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_AdditionalAddresses.chkInternal, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressResetButton, "Enabled", cmpEqual, false);
});

Then("Bottom Address Management frame should display Person name and Company name", function checkpointVerifyAddressManagementFrame (){
    let string1 = txtPrefix + " "
    let string2 = parForename + " "
    let string3 = parMiddleName + " "
    let string4 = parFamilyName
    let name  = aqString.Concat(string1,string2);
    let name1 = aqString.Concat(string3,string4);
    let personName = aqString.Concat(name,name1);
  
  let txtPersonName = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_PersonName.txtInner.Text.OleValue;
  let txtCompanyName = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_CompanyName.txtInner.Text.OleValue;
  
  if(aqObject.CompareProperty(txtPersonName, cmpEqual, personName, true, 3))
  {
    Log.Checkpoint("Person Name is displayed in Address Management frame");
     }
    else{
    Log.Error("Person Name is not displayed in Address Management frame");
    }
    
  if(aqObject.CompareProperty(txtCompanyName, cmpEqual, lnkCompanyName, true, 3))
  {
    Log.Checkpoint("Company Name is display")
  }
  else{
  Log.Error("Company Name is not display");
  }
  
  
});

Then("I check the checkbox Open On Finish", function checkCheckboxOpenOnFinish (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_PersonDisplay.chkInternal.wState = cbChecked;
});

Then("I click on Finish Button from create new customer wizard", function clickGenericWizardFormFinish (){
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
  if(Aliases.Aptify_Shell.LocalizedMsgBox.Exists)
  {
    Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
  }
});


  
Then("Identification section should not be blank", function checkpointVerifyIdentification (){
  let txtAccountNo = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_Persons_TopArea.Persons_TopArea_PrimaryID.txtInner.Text.OleValue;
  let txtPrimaryRole = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_Persons_TopArea.Persons_TopArea_PrimaryRole.txtInner.Text.OleValue;
  if(aqObject.CompareProperty(txtAccountNo, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Account No field is not blank")
  }
  else{
  Log.Error("Account No field is blank");
  }
  
  if(aqObject.CompareProperty(txtPrimaryRole, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Primary Role field is not blank")
  }
  else{
  Log.Error("Primary Role field is blank");
  }
});

Then("Name&Location section should not be blank", function checkpointVerifyNameLocation (){
 
  let txtFullName = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_Persons_TopArea.Persons_TopArea_FullName.txtInner.Text.OleValue;
  let txtCity = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_Persons_TopArea.Persons_TopArea_City.txtInner.Text.OleValue;
  let txtCompanyId = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_Persons_TopArea.PT_Persons_TopArea_CompanyID.txtInner.Text.OleValue;
  let txtPOstCode = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_Persons_TopArea.Persons_TopArea_Postcode.txtInner.Text.OleValue;
  
  if(aqObject.CompareProperty(txtFullName, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Full Name field is not blank")
  }
  else{
  Log.Error("Full Name field is blank");
  }
  if(aqObject.CompareProperty(txtCity, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("City field is not blank")
  }
  else{
  Log.Error("City field is blank");
  }
  if(aqObject.CompareProperty(txtCompanyId, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Company Name field is not blank")
  }
  else{
  Log.Error("Company Name field is blank");
  }
  if(aqObject.CompareProperty(txtPOstCode, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("PostCode field is not blank")
  }
  else{
  Log.Error("PostCode field is blank");
  }
  
});

Then("Information section should not be blank", function checkpointVerifyInformationSection (){
  
  let ddStatus = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_Persons_TopArea.PT_Persons_TopArea_StatusID.Text.OleValue;
  let ddType = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_Persons_TopArea.Persons_TopArea_CustomerTypeID.Text.OleValue;
  
  if(aqObject.CompareProperty(ddStatus, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Status field is not blank")
  }
  else{
  Log.Error("Status field is blank");
  }
  if(aqObject.CompareProperty(ddType, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Type field is not blank")
  }
  else{
  Log.Error("Type field is blank");
  }
  
});

Then("Contact section should not be blank", function checkpointVerifyContactSection (){
  
  let PersonNameAddress = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Contact_Tab.PTPersons_Contact_Tab.Persons_Contact_PTPrimaryContact_PrimaryContact.PanelNameAndAddress.LabelName.Text.OleValue;

  if(aqObject.CompareProperty(PersonNameAddress, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Contact section is not blank")
  }
  else{
  Log.Error("Contact Section is blank");
  
  }
  
  
});

Then("Names tab should not be blank", function checkpointVerifyNamestab (){
  //var formTemplateLayout = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Contact_Tab.PTPersons_Contact_Tab;
  let PersonNames = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Contact_Tab.PTPersons_Contact_Tab.PT_Persons_Contact_TopLeft_TabControl.tabMain.Persons_Contact_Names.Persons_Contact_Names.Persons_Contact_Names_PersonNames.AptifyControlBase_Fill_Panel.flexSubType;
  if(aqObject.CheckProperty(PersonNames, "Row", cmpNotEqual, 0))
  {
    Log.Checkpoint("Person Names grid is Not Empty");
  }
  else{
    Log.Error("Person Names grid is Blank");
  }
});






Then("I enter Name type as {arg}", function enterNameType (NameType){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PersonNameTypeID.LookupSearchCombo.ClickItem(NameType);
});

Then("I enter Prefix {arg}", function enterPrefix (Prefix){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Contact.PersonCustomerWizard.PersonCustomerWizard_PT_Group_Box_1.PTPersonNamesCustomerWizard.PTPersonNamesCustomerWizard_PrefixID.LookupSearchCombo.ClickItem(Prefix);
  txtPrefix = Prefix;

});





Then("I enter Area Code", function enterAreaCodeCreatePerson (){
  let areaC = "AreaC";
  let randomStr2 =  aqConvert.FloatToStr(Math.floor((Math.random() * 100) + 1))
  let areaCode = aqString.Concat(areaC," "+randomStr2);
  let txtAreaCode = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_4.PTPersonPhoneNumbersCustomerWizard.PTPersonPhoneNumbersCustomerWizard_AreaCode.txtInner;
  txtAreaCode.SetText(areaCode);
  txtAreaCode.Keys("[Tab]");
});

Then("I click on Next Button from create new customer wizard", function clickNextBtnCreateNewCustomer (){
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnNext.ClickButton();
});

Then("I enter Number for Person", function enterNumberCreatePerson (){
   let number = "";
    let possible = "0123456789";
    {
    for(let i=0; i < 9; i++ )
    number += possible.charAt(Math.floor(Math.random() * possible.length));
     }
  let txtNumber = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_4.PTPersonPhoneNumbersCustomerWizard.PTPersonPhoneNumbersCustomerWizard_Phone.txtInner;
  txtNumber.Keys(number);
  
});

Then("I enter Account Number", function enterAccountNumberCreatePerson (){
  
    let accountNumber = "";
    let possible = "0123456789";
    {
    for(let i=0; i < 9; i++ )
    accountNumber += possible.charAt(Math.floor(Math.random() * possible.length));
     }
  let txtAccountNumber = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PersonPrimaryIdentifier.txtInner;
  txtAccountNumber.Keys(accountNumber);
  txtAccountNumber.Keys("[Tab]");
});


When("I select a Website Type {arg}", function (websiteType){
  let txtWebsiteType = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_2.PTCustomerWizardWebSite.PTCustomerWizardWebSite_PTCompanyWebSites_WebsiteTypeID.LookupSearchCombo;
  
  txtWebsiteType.Click();
  txtWebsiteType.ClickItem(websiteType);
  txtWebsiteType.Keys("[Tab]");
});

When("I enter the Website", function (){
  let string1 = "WWW." ;
  let string2 = ".COM"
  let website = aqString.Concat(string1,(aqString.concat(aqString.Remove(companyName, 4, 1),string2))); 
  
  let txtWebsite = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_2.PTCustomerWizardWebSite.PTCustomerWizardWebSite_PTCompanyWebSites_Website.txtInner;
  txtWebsite.Click();
  txtWebsite.Keys(website);
  txtWebsite.Keys("[Tab]");
});

//Then("I click on Finish Button", function (){
  //Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
//});

Then("I click on Next button", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnNext.Click();
});

When("I enter Email address", function (){
  let randomNumber =  aqConvert.FloatToStr(Math.floor((Math.random() * 100) + 1));
  let email = aqString.concat(randomNumber,"@gmail.com") ;
  let randomEmail = aqString.Concat(aqString.ToLower(aqString.Remove(companyName, 4, 1)), email);
  
  let txtEmail = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_6.PTCompanyEmailAddressesCustomerWizard.PTCompanyEmailAddressesCustomerWizard_Email.txtInner;
  txtEmail.Click();
  txtEmail.SetText(randomEmail);
  txtEmail.Keys("[Tab]");
});


When("I enter Area Code {arg}", function (areaCodePar){
  let txtAreaCode =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_AreaCode.txtInner;
  
  txtAreaCode.Click();
  txtAreaCode.SetText(areaCodePar);
  areaCode = areaCodePar;
  txtAreaCode.Keys("[Tab]");
});

When("I enter Company Number", function (){
  let txtNumber = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_Phone.txtInner;
  let randomNumber = aqConvert.FloatToStr(Math.floor((Math.random() * 10000000000) + 1));
  txtNumber.Click();
  txtNumber.SetText(randomNumber);
  number = randomNumber;
  txtNumber.Keys("[Tab]");
});

When("I enter an Ext {arg}", function (ext){
  let txtExt =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_PhoneExtension.txtInner;
  txtExt.Click();  
  txtExt.SetText(ext);
  txtExt.Keys("[Tab]");
});

Then("I click on Save Record and Close Form", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTContactCard_Form.PTContactCard_Tabs.tabMain.PTContactCard_Tabs_General.PTContactCard_Tabs_General.Click();
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
});



When("I enter Family Name {arg}", function (familyName){
  let txtFamilyName = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Contact.PersonCustomerWizard.PersonCustomerWizard_PT_Group_Box_1.PTPersonNamesCustomerWizard.PTPersonNamesCustomerWizard_FamilyName.txtInner;

  txtFamilyName.Click();
  txtFamilyName.EmbeddableTextBoxWithUIPermissions.SetText(familyName);
  personFamilyName = familyName;
  txtFamilyName.Keys("[Tab]");
});

When("I enter Customer details", function (){
  let randomNumber =  aqConvert.FloatToStr(Math.floor((Math.random() * 100) + 1));
  let email = aqString.concat(randomNumber,"@gmail.com") ;
  let randomEmail = aqString.Concat(aqString.ToLower(personName),(aqString.concat(aqString.ToLower(aqString.Replace(personFamilyName, " ", "")),email)));
  let txtEmail = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_3.PTEmailAddressesCustomerWizard.PTEmailAddressesCustomerWizard_Email.txtInner; 
  txtEmail.Click();
  txtEmail.SetText(randomEmail);
  
/*  let txtAreaCode = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_4.PTPersonPhoneNumbersCustomerWizard.PTPersonPhoneNumbersCustomerWizard_AreaCode.txtInner;
  txtAreaCode.Click();
  txtAreaCode.SetText(01623);
  
  let number = aqConvert.FloatToStr(Math.floor((Math.random() * 10000000000) + 1));
  let txtNumber = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_4.PTPersonPhoneNumbersCustomerWizard.PTPersonPhoneNumbersCustomerWizard_Phone.txtInner;
  txtNumber.Click();
  txtNumber.SetText(07911123456);
  
  let txtExt = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_4.PTPersonPhoneNumbersCustomerWizard.PTPersonPhoneNumbersCustomerWizard_PhoneExtension.txtInner;
  txtExt.Click();
  txtExt.SetText(45);  */
});

When("I click on Finish", function (){
 Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
});

Then("all the mandatory fields should be populated", function (){
 verifyingPersonIdentificationSection();
 verifyingNameAndLocation();
 verifyingInformationSection();
});

Then("I add Organisations records", function (){
  clickTradingTab();
  addOrganizations();
});

Then("I add Freight Forwarder {arg}", function (freightForwarder){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.PTPersons_TradingSettings_Tab.PTPersons_TradingSettings_Tab.Persons_Trading_TabGroup.tabMain.pagetabDispatchMethods.Click();
  
  let txtFreightForwarder = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.PTPersons_TradingSettings_Tab.PTPersons_TradingSettings_Tab.Persons_Trading_TabGroup.tabMain.Persons_Tabs_PTPersonDispatchMethods.Persons_Trading_DispatchMethods_Tab.Persons_Trading_DispatchMethods_Tab_FreightForwarderRoleID.txtLink;
  txtFreightForwarder.Click();
  txtFreightForwarder.SetText(freightForwarder);
  txtFreightForwarder.Keys("[Tab]");
});

function clickTradingTab(){
  if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.Exists){
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.ClickTab("Trading");
  }
  else{
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.ClickTab("Trading");
  }
}
function check()
{
  let ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.PTPersons_TradingSettings_Tab.PTPersons_TradingSettings_Tab.Persons_Trading_TabGroup.tabMain;
  ultraTabControl.pagetabDispatchMethods.Click();
  let ultraTextEditor = ultraTabControl.Persons_Tabs_PTPersonDispatchMethods.Persons_Trading_DispatchMethods_Tab.Persons_Trading_DispatchMethods_Tab_FreightForwarderRoleID.txtLink;
  ultraTextEditor.edit.Click(141, 9);
  let embeddableTextBoxWithUIPermissions = ultraTextEditor.EmbeddableTextBoxWithUIPermissions;
  embeddableTextBoxWithUIPermissions.SetText("euro");
  embeddableTextBoxWithUIPermissions.Keys("[Tab]");
}
function addOrganizations(){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.PTPersons_TradingSettings_Tab.PTPersons_TradingSettings_Tab.Persons_Trading_Tab_Sub_Type_Control_1.zAptifyControlBase_Toolbars_Dock_Area_Top.toolbar.buttonNew.ClickButton();

  let ddOrganization = Aliases.Aptify_Shell.SubTypeTemplateForm.PTPersonTradingProfiles_Tabs_General.PTPersonTradingProfiles_OrganizationID.txtLink.EmbeddableTextBoxWithUIPermissions;
  ddOrganization.Click();
  ddOrganization.Keys("Alpha Books");
  ddOrganization.Keys("[Tab]");
  
  let ddTradingProfile = Aliases.Aptify_Shell.SubTypeTemplateForm.PTPersonTradingProfiles_Tabs_General.PTPersonTradingProfiles_OrganizationTradingProfileID.LookupSearchCombo;
  ddTradingProfile.Click();
  ddTradingProfile.ClickItem("Private Individual");
  ddTradingProfile.Keys("[Tab]");
  
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
  
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Trading_TabGroup.PTPersons_Trading_TabGroup.tabMain.PTPersons_TradingSettings_Tab.PTPersons_TradingSettings_Tab.Persons_Trading_Tab_Sub_Type_Control_1.zAptifyControlBase_Toolbars_Dock_Area_Top.toolbar.buttonNew.ClickButton();

  ddOrganization.Click();
  ddOrganization.SetText("Reef Books");
  ddOrganization.Keys("[Tab]");
  
  ddTradingProfile.Click();
  ddTradingProfile.ClickItem("Private Individual");
  ddTradingProfile.Keys("[Tab]");
  
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
}

function verifyingPersonIdentificationSection()
{
  //AccountNumber
  let accountNo = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_Persons_TopArea.Persons_TopArea_PrimaryID.txtInner.get_Text(); 
  if(aqObject.CompareProperty(accountNo, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Account Number is Displayed");
  }
  else{
    Log.Error("Account Number is Blank");
  }
  
  //PrimaryRole
  let primaryRole = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_Persons_TopArea.Persons_TopArea_PrimaryRole.txtInner.get_Text(); 
  if(aqObject.CompareProperty(primaryRole, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Primary Role is Displayed");
  }
  else{
    Log.Error("Primary Role is Blank");
  }
}

function verifyingNameAndLocation()
{
//CompanyName
   let Name = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_Persons_TopArea.Persons_TopArea_FullName.txtInner.get_Text(); 
   if(aqObject.CompareProperty(Name, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Person name is Displayed");
  }
  else{
    Log.Error("Person name is Blank");
  }

  //City
  let city = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_Persons_TopArea.Persons_TopArea_City.txtInner.get_Text(); 
  if(aqObject.CompareProperty(city, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("City is Displayed");
  }
  else{
    Log.Error("City is Blank");
  }
  
  //Postcode
  let postocde = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_Persons_TopArea.Persons_TopArea_Postcode.txtInner.get_Text(); 
  if(aqObject.CompareProperty(postocde, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Postocde is Displayed");
  }
  else{
    Log.Error("Postcode is Blank");
  }   
}

function verifyingInformationSection()
{
  //Status
  let status = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_Persons_TopArea.PT_Persons_TopArea_StatusID.LookupSearchCombo.get_Text(); 
  if(aqObject.CompareProperty(status, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Status is Displayed");
  }
  else{
    Log.Error("Status is Blank");
  }
  
  //Type
  let customerType = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_Persons_TopArea.Persons_TopArea_CustomerTypeID.LookupSearchCombo.get_Text();   
  if(aqObject.CompareProperty(customerType, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Type is Displayed");
  }
  else{
    Log.Error("Type is Blank");
  }  
}

When("I enter the Address", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnNext.ClickButton();
  
  let txtHouseNumber = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseNo.txtInner;
  txtHouseNumber.Click();
  txtHouseNumber.SetText(29);
  txtHouseNumber.Keys("[Tab]");
  
  let txtFloor =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBox1Floor.txtInner;
  txtFloor.SetText("5th Floor");
  txtFloor.Keys("[Tab]");
  
  let txtBuilding =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseName.txtInner;
  txtBuilding.SetText("The Shard");
  txtBuilding.Keys("[Tab]");
  
  let txtStreetName =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxStreet.txtInner;
  txtStreetName.SetText("Abbey");
  txtStreetName.Keys("[Tab]");
  
  let txtDistrict = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxDistrict.txtInner;
  txtDistrict.SetText("Brent");
  txtDistrict.Keys("[Tab]");
  
  let txtTown = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxTown.txtInner;
  txtTown.SetText("Oxford");
  txtTown.Keys("[Tab]");
  
  let txtCounty =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxCounty.txtInner;
  txtCounty.SetText("Shropshire");
  txtCounty.Keys("[Tab]");
  
  let randomStr1 =  aqConvert.FloatToStr(Math.floor((Math.random() * 100000) + 1));
  let txtPostcode = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxPostalCode.txtInner;
  txtPostcode.SetText(randomStr1);
  
    if(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_PersonDisplay.chkInternal.Exists){
      Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_PersonDisplay.chkInternal.wState = cbChecked;  
    }
    else{
    Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_CompanyDisplay.chkInternal.wState = cbChecked;
    }
});

When("I click on Tax Area", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.buttonVerifyTaxArea.ClickButton();
});

Then("I click on taxation", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.pagetabTaxation.Click();
});

Then("I select Tax Country {arg}", function (taxCountry){
  let ddTaxCountry = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.Companies_Form_Taxation_Tab.Companies_Taxation.Companies_Taxation_VATCountryID.LookupSearchCombo;
  ddTaxCountry.Keys(taxCountry);
  ddTaxCountry.Keys("[Tab]");
});

Then("I click on New button from Tax Registrations and Exemptions", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_TradingSettings_Tab.PTCompanies_TradingSettings_Tab.Companies_Trading_TabGroup.tabMain.Companies_Form_Taxation_Tab.Companies_Taxation.Companies_Taxation_Sub_Type_Control_1.zAptifyControlBase_Toolbars_Dock_Area_Top.toolbar.buttonNew.ClickButton();
});

Then("I enter same tax country", function (){
  let ddTaxCountry = Aliases.Aptify_Shell.SubTypeTemplateForm.PT_PTCompanyVATRegistrations_Form.PT_PTCompanyVATRegistrations_Tabs.tabMain.PT_PTCompanyVATRegistrations_Tabs_General.PT_PTCompanyVATRegistrations_Tabs_General.PT_PTCompanyVATRegistrations_VATCountryID.txtLink;
  ddTaxCountry.Keys(country);
  ddTaxCountry.Keys("[Tab]");
});

Then("I enter Number {arg} and click on Ok to create Tax Registrations and Exemptions Record", function (number){
  
  let txtNumber = Aliases.Aptify_Shell.SubTypeTemplateForm.PT_PTCompanyVATRegistrations_Form.PT_PTCompanyVATRegistrations_Tabs.tabMain.PT_PTCompanyVATRegistrations_Tabs_General.PT_PTCompanyVATRegistrations_Tabs_General.PT_PTCompanyVATRegistrations_VATNumber.txtInner;
  txtNumber.Keys(number);
  txtNumber.Keys("[Tab]");
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
  
});

Then("I create {arg} ledger", function (ledger){
  
  let tabAccountProfiles = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain;
  tabAccountProfiles.ClickTab("Account Profiles");
  
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PTCompanies_Trading_TabGroup.PTCompanies_Trading_TabGroup.tabMain.PTCompanies_AR_TabControl.PTCompanies_AR_TabControl.tabMain.PT_Companies_Companies_AccountProfile.Account_Profiles.Account_Profiles.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.diagramCommandbarnew.Click(10, 16);
  
  let ddLedger = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_363.PT_AccountsReceivableWizard.PT_AccountReceivableWizard_LedgerTypeID.LookupSearchCombo;
  ddLedger.Keys(ledger);
  ddLedger.Keys("[Tab]");
  
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
  
});

When("I enter the Website in Website field", function (){
  let string1 = "WWW." ;
  let string2 = ".COM";
  let string3 = aqString.Concat(string1,country);
  let website = aqString.Concat(string3 , string2);
  let txtWebsite = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_2.PTCustomerWizardWebSite.PTCustomerWizardWebSite_PTCompanyWebSites_Website.txtInner;
  txtWebsite.Click();
  txtWebsite.Keys(website);
  txtWebsite.Keys("[Tab]");
});
