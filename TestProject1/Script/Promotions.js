var promotionCode;
var availableQuantity;
var physicalQuantity;
var codeName;
var campaignName;
var promotionName;
var totalQuantity;   
var product;
var campaignCode;
var parCampaignName;
var beginTime;

var PromotionCode = "Rave";
var randomStr3 = Math.random().toString(36).replace(/[^a-z]+/g, '');
var code = aqString.Concat(PromotionCode," "+randomStr3);

var DescriptionName = "Rave";
var randomStr1 = Math.random().toString(36).replace(/[^a-z]+/g, '');
var descriptionName = aqString.Concat(DescriptionName," "+randomStr1);

var NameCampaign = "Campaign"
var randomStr5 = Math.random().toString(36).replace(/[^a-z]+/g, '');
var CampaignName = aqString.Concat(NameCampaign," "+randomStr5);


When("I select Customer Mailing radio button", function checkCustomerMailing(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab_MailingOptions.Customer_Mailing.ClickButton();
});

When("I check Customer List checkbox for customer mailing", function checkCustomerList(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab_MailingCustomerList.chkInternal.ClickButton();
});

Then("I check Customer Classification List checkbox for customer mailing", function checkCustomerClassificationListMailing(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab_MailingCustomerClassificationList.chkInternal.ClickButton();
});

Then("I check Role List checkbox for customer mailing", function checkRoleListMailing(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab_MailingRoleList.chkInternal.ClickButton()
});

Then("I check Territory List checkbox for customer mailing", function checkTerritoryListMailing(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab_MailingTerritoryList.chkInternal.ClickButton();
});

Then("I select Classification Type {arg} for customer mailing", function selectClassificationType(classificationType){
  var txtClassificationType = Aliases.Aptify_Shell.SubTypeTemplateForm.PTPromotionListCustomerClassifications_Form.PTPromotionListCustomerClassifications_Tabs.tabMain.PTPromotionListCustomerClassifications_Tabs_General.PTPromotionListCustomerClassifications_Tabs_General.PTPromotionListCustomerClassifications_Tabs_General_ClassificationTypeID.LookupSearchCombo;

  txtClassificationType.Click();
  txtClassificationType.ClickItem(classificationType);
  txtClassificationType.Keys("[Tab]");
});


When("I click on New record", function clickNewRecord(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(9,16);
});

When("I enter promotion code", function enterPromotionCode(){
  var anysize = 3;
  var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  randomCode="";
  for( var i=0; i < anysize; i++ )
  randomCode += charset[Math.floor(Math.random() * charset.length)];
  var code = (aqString.concat("RAVE"+" ", randomCode));
  
  let txtCode = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_Form_Code.txtInner;
 
  txtCode.Click();
  txtCode.SetText(code);
  promotionCode = code;
  txtCode.Keys("[Tab]");
});

When("I enter name of the code {arg}", function enterCodeName(codeNameParam){
  let txtCodeName = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_Form_Name.txtInner;
  
  txtCodeName.SetText(codeNameParam);
  codeName = codeNameParam;
  txtCodeName.Keys("[Tab]");
});

When("I enter description of the code {arg}", function enterCodeDescription(codeDescription){
  let txtCodeDescription = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_Form_Description.txtInner;
  
  txtCodeDescription.SetText(codeDescription);
  txtCodeDescription.Keys("[Tab]");
});

When("I check Qualification List checkbox", function checkQualificationList(){
 Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_Form_IsQualificationList.chkInternal.ClickButton();
});

When("I check the chekbox Customer List", function checkCustomerListPromotion(){
 Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_Form_IsCustomerQualificationList.chkInternal.ClickButton();
});

Then("I check Customer Classification List checkbox", function checkCustomerClassificationListPromotion(){
 Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_Form_IsCustomerClassificationQualificationList.chkInternal.ClickButton();
});

Then("I check Role List checkbox", function checkRoleListPromotion(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_Form_IsRoleList.chkInternal.wState = cbChecked;
});

Then("I check Territory List checkbox", function checkTerritoryListPromotion(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_Form_IsTerritoryList.chkInternal.ClickButton();
});

When("I click on Customers tab", function clicktTabCustomers(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.ClickTab("Customers");
});

Then("customers {arg} {arg} should be displayed below", function verifyCustomersDisplayed(customer1Par, customer2Par){
  let customer1Displayed = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_Customers_Tab.PTPromotionLists_Customers_Tab.PTPromotionLists_Customers_Tab_SubType_PromoListCustomer.AptifyControlBase_Fill_Panel.flexSubType.get_Item(1, 2).OleValue;
  let customer1 = aqString.SubString(customer1Displayed, 0, 4)
  let customer2Displayed = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_Customers_Tab.PTPromotionLists_Customers_Tab.PTPromotionLists_Customers_Tab_SubType_PromoListCustomer.AptifyControlBase_Fill_Panel.flexSubType.get_Item(2, 2).OleValue;
  let customer2 = aqString.SubString(customer2Displayed, 0, 3)
  
  if( (aqObject.CompareProperty(customer1, cmpEqual, customer1Par, true, 3)) && (aqObject.CompareProperty(customer2, cmpEqual, customer2Par, true, 3)) ){
    Log.Checkpoint("Customers displayed are correct");
   }
  else{
    Log.Error("Customers displayed are incorrect");
   }
   
});

Then("Customer List checkbox should be deactivated", function verifyCustomerListCheckbox(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_Form_IsCustomerQualificationList.chkInternal, "Enabled", cmpEqual, false);
});

Then("I click on Customer Classifications tab", function clickTabCustomerClassifications(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.ClickTab("Customer Classifications");
});

Then("I enter Lookup Code Record ID {arg}", function enterLookupCodeRecordID(lookupCodeRecordID){
  let ddLookupCodeRecordID =  Aliases.Aptify_Shell.SubTypeTemplateForm.PTPromotionListCustomerClassifications_Form.PTPromotionListCustomerClassifications_Tabs.tabMain.PTPromotionListCustomerClassifications_Tabs_General.PTPromotionListCustomerClassifications_Tabs_General.PTPromotionListCustomerClassifications_Tabs_General_LookupCodeRecordID.LookupSearchCombo;
  
  ddLookupCodeRecordID.ClickItem(lookupCodeRecordID);
  ddLookupCodeRecordID.Keys("[Tab]");
});

Then("I click on OK button", function clickOK(){
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
});

Then("Classification Type {arg} should be displayed below", function verifyClassificationTypeDisplayed(classificationType){
  let classificationTypeDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_CustomerClassifications_Tab.PTPromotionLists_CustomerClassifications_Tab.PTPromotionLists_CustomerClassifications_Tab_Sub_Type_Control_1.AptifyControlBase_Fill_Panel.flexSubType.get_Item(1, 2).OleValue;
  
  if(aqObject.CompareProperty(classificationType, cmpEqual, classificationTypeDisplayed, true, 3)){
    Log.Checkpoint("Classification Type displayed is correct");
     }
  else{
    Log.Error("Classification Type displayed is incorrect");
	}
});

Then("checkbox Customer Classification List should be deactivated", function verifyCustomerClassificationListCheckbox(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_Form_IsCustomerClassificationQualificationList.chkInternal, "Enabled", cmpEqual, false);
});

Then("I click on Roles tab", function clickTabRoles(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.ClickTab("Roles");
});

Then("I enter Role Type {arg}", function enterRoleType(roleType){
  let txtRoleType = Aliases.Aptify_Shell.SubTypeTemplateForm.PTPromotionListRoles_Form.PTPromotionListRoles_Tabs.tabMain.PTPromotionListRoles_Tabs_General.PTPromotionListRoles_Tabs_General.PTPromotionListRoles_RoleTypeID.txtLink;
  
  txtRoleType.Click();
  txtRoleType.SetText(roleType);
  txtRoleType.Keys("[Tab]");
});

Then("Role Type {arg} should be displayed below", function verifyRoleTypeDisplayed(roleType){
  let roleTypeDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_Roles_Tab.PTPromotionLists_PTPromotionLists_Roles_Tab.PTPromotionLists_PTPromotionLists_Roles_Tab_RolesSubType.AptifyControlBase_Fill_Panel.flexSubType.get_Item(1, 2).OleValue;
  
  if(aqObject.CompareProperty(roleType, cmpEqual, roleTypeDisplayed, true, 3)){
    Log.Checkpoint("Role Type displayed is correct");
     }
  else{
    Log.Error("Role Type displayed is incorrect");
	}
});

Then("checkbox Role List should be deactivated", function verifyRoleTypeCheckbox(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_Form_IsRoleList.chkInternal, "Enabled", cmpEqual, false);
});

Then("I click on Territory tab", function clickTabTerritory(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.ClickTab("Territory");
});

Then("I enter a Territory {arg}", function enterTerritory(territory){
  let txtTerritory = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_Form_Territory_Tab.PTPromotionLists_Territory.PTPromotionLists_Territory_QuickTerritoryID.txtLink;
  
  txtTerritory.Click();
  txtTerritory.SetText(territory);
});

Then("I click on Add button from Promotions lists", function clickAddPromotionsLists(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_Form_Territory_Tab.PTPromotionLists_Territory.PTPromotionLists_Territory_Active_Button_1.Click();
});

Then("Territory {arg} should be displayed below", function verifyTerritoryDisplayed(territory){
  let territoryDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_Form_Territory_Tab.PTPromotionLists_Territory.PTPromotionLists_Territory_Sub_Type_Control_1.AptifyControlBase_Fill_Panel.flexSubType.get_Item(1, 3).OleValue;
  
  if(aqObject.CompareProperty(territory, cmpEqual, territoryDisplayed, true, 3)){
    Log.Checkpoint("Territory displayed is correct");
     }
  else{
    Log.Error("Territory displayed is incorrect");
	}
});

Then("checkbox Territory List should be deactivated", function verifyTerritoryListCheckbox(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_Form_IsTerritoryList.chkInternal, "Enabled", cmpEqual, false);
});

Then("I click Save Record and Close Form button", function clickSaveAndCloseForm(){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
});


When("I click on Add", function clickAddCustomers(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_Customers_Tab.PTPromotionLists_Customers_Tab.PTPromotionLists_Customers_Tab_ActiveButton_PromoListCustomers.Click();
});

Then("I click on Add", function clickAddTerritory(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_Form_Territory_Tab.PTPromotionLists_Territory.PTPromotionLists_Territory_Active_Button_1.Click();
});

When("I click on Promotion & Mailing List", function clickPromotionMailingList(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.EntityBrowser.EntityBrowser_Fill_Panel.SplitContainer1.SplitterPanel.lvwMain.DblClickItem("Promotion and Mailing Lists", 0);
});

When("I select multiple Customers {arg} , {arg}", function selectCustomers(customer1, customer2){
  let radPanel = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.switchPanel;
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;;
  let radGridView = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let txtCustomer =  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_Customers_Tab.PTPromotionLists_Customers_Tab.PTPromotionLists_Customers_Tab_QuickCustomerRoleID.txtLink;
  
  txtCustomer.Click();
  txtCustomer.SetText(customer1);
  txtCustomer.Keys("[Tab]");
  radGridView.ClickCell(0,0);
  radPanel.selectButton.ClickButton();
  
  txtSearch.Keys("^a[BS]");
  txtSearch.SetText(customer2);
  radPanel.searchButton.ClickButton();
  radGridView.ClickCell(1,0);
  radPanel.selectButton.ClickButton()
  
  radPanel.okButton.ClickButton();
});

Then("I click on New to create Customer Classifications", function clickNewCustomerClassifications(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_CustomerClassifications_Tab.PTPromotionLists_CustomerClassifications_Tab.PTPromotionLists_CustomerClassifications_Tab_Sub_Type_Control_1.zAptifyControlBase_Toolbars_Dock_Area_Top.ClickItem("SubType|New");
});

Then("I click on New to create Roles", function clickNewRoles(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_Roles_Tab.PTPromotionLists_PTPromotionLists_Roles_Tab.PTPromotionLists_PTPromotionLists_Roles_Tab_RolesSubType.zAptifyControlBase_Toolbars_Dock_Area_Top.ClickItem("SubType|New");
});

Then("Record should be saved with Code and Name entered", function verifyRecordAdded(){
  let radGridView = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  let records = radGridView.wRowCount;
  
  let codeDisplayed = radGridView.wValue(records-1, 1).OleValue;
  let nameDisplayed = radGridView.wValue(records-1, 2).OleValue;
  
  if( (aqObject.CompareProperty(codeDisplayed, cmpEqual, promotionCode, true, 3)) && (aqObject.CompareProperty(nameDisplayed, cmpEqual, codeName, true, 3)) ){
    Log.Checkpoint("Transaction should be correctly displayed in the Ledger");
   }
  else{
    Log.Error("Transaction should be correctly displayed in the Ledger");
   }
});

When("I click on Save", function clickSave(){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record");
 
});

When("I click on All Promotion & Mailing List view", function clickAllPromotionsMailingListView(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.enbBrowser.EntityBrowser_Fill_Panel.SplitContainer1.SplitterPanel.lvwMain.DblClickItem("All Promotions & Mailing List", 0);
});

Then("I enter Classification Type {arg}", function enterClassificationType(classificationType){
  let ddClassificationType =  Aliases.Aptify_Shell.SubTypeTemplateForm.PTPromotionListCustomerClassifications_Form.PTPromotionListCustomerClassifications_Tabs.tabMain.PTPromotionListCustomerClassifications_Tabs_General.PTPromotionListCustomerClassifications_Tabs_General.PTPromotionListCustomerClassifications_Tabs_General_ClassificationTypeID.LookupSearchCombo;
  
  ddClassificationType.Click();
  ddClassificationType.ClickItem(classificationType);
  ddClassificationType.Keys("[Tab]");
});


When("I click on Promotion Offer Definitions", function clickPromotionOfferDefinitions(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.EntityBrowser.EntityBrowser_Fill_Panel.SplitContainer1.SplitterPanel.lvwMain.DblClickItem("Promotion Offer Definitions", 0);
});

When("I click on Create View", function clickCreateView(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.enbBrowser.zEntityBrowser_Toolbars_Dock_Area_Top.ClickItem("List View - Main|Create View...");
});

When("I enter Name {arg}", function enterViewName(viewName){
  let txtName = Aliases.Aptify_Shell.ViewsDialog.ViewControl.TabView.TabGeneral.txtName;
  
  txtName.Click();
  txtName.SetText(viewName);
});

When("I click on Ok button to Create View", function clickOkCreateView(){
  Aliases.Aptify_Shell.ViewsDialog.btnOK.ClickButton();
});

Given("I click on New record", function clickNew(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(9, 16);
});

Given("I enter Code {arg}", function enterCode(code){
  let txtCode = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionOfferDefinitions_Main_Form.PTPromotionOfferDefinitions_Main_Form_Code.txtInner;
  
  txtCode.Click();
  txtCode.SetText(code);
});

Given("I enter Description {arg}", function enterDescription(description){
  let txtDescription = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionOfferDefinitions_Main_Form.PTPromotionOfferDefinitions_Main_Form_Description.txtInner;
  
  txtDescription.Click();
  txtDescription.SetText(description);
});

Given("I enter Definition Type {arg}", function enterDefinitionType(definitionType){
  let ddDefinitionType = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionOfferDefinitions_Main_Form.PTPromotionOfferDefinitions_Main_Form_OfferTypeID.LookupSearchCombo;
  
  ddDefinitionType.Click();
  ddDefinitionType.ClickItem(definitionType);
  
  ddDefinitionType.Keys("[Tab]");
});

Given("I enter Price {arg} under Price Offer", function enterPrice(price){
  let txtPrice = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionOfferDefinitions_Main_Form.PTPromotionOfferDefinitions_Main_Form_Price.txtInner;
  
  txtPrice.Click();
  txtPrice.SetText(price);
});

Given("I enter Currency {arg}", function enterCurrency(currency){
  let ddCurrency = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionOfferDefinitions_Main_Form.PTPromotionOfferDefinitions_Main_Form_CurrencyTypeID.LookupSearchCombo;
  
  ddCurrency.Click();
  ddCurrency.ClickItem(currency);
  
  ddCurrency.Keys("[Tab]");
});

Given("I enter Licence {arg}", function enterLicence(licence){
  let txtLicence = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionOfferDefinitions_Main_Form.PTPromotionOfferDefinitions_Main_Form_LicenseID.LookupSearchCombo;
  
  txtLicence.Click();
  txtLicence.ClickItem(licence);
  
  txtLicence.Keys("[Tab]");
});

Given("I select the Gratis Product checkbox", function checkGratisProductCheckbox(){
   Aliases.Aptify_Shell.FormTemplateForm.PTPromotionOfferDefinitions_Main_Form.PTPromotionOfferDefinitions_Main_Form_IsGratisProduct.chkInternal.ClickButton();
});

Given("I click Save Record and Close Form button", function (){
  clickSaveAndClose();
});

Then("New Promotion offer definition should be created with unique ID", function verifyNewRecordID(){
  let records = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.RowCount;
  let newOfferID = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(records-1, 0).OleValue;
  let passCount = 0;
  
  for(let i = 0 ; i < records; i++)
    {
    let offerIDs = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(i, 0).OleValue;
     if (newOfferID != offerIDs)
      {
       passCount +=1
      }
    }
    
  if ( passCount == records - 1)
  {
   Log.Checkpoint("New Promotion offer definition is created with unique ID");;
  }
  else
  {
   Log.Error("New Promotion offer definition is not created with unique ID");
  }
});

Then("record {arg} should be displayed in all promotion offer definition", function verifyNewPromotionOfferDefinition(offerCreated){
  let records = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.RowCount;
  let OfferDisplayed = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(records-1, 1).OleValue;
  
  if(aqObject.CompareProperty(offerCreated, cmpEqual, OfferDisplayed, true, 3)){
    Log.Checkpoint("Record is displayed under all promotion offer definitions");
     }
  else{
    Log.Error("Record is not displayed under all promotion offer definitions");
	}
});

Given("I select Advanced from Options", function selectAdvanced(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionOfferDefinitions_Main_Form.PTPromotionOfferDefinitions_Main_Form_Grouped_Options_1.Advanced.ClickButton();
});

Given("I enter Discount Percentage {arg} under Discount Offer", function enterDiscountPercentage(discountPercentage){
  let txtDiscountPercentage = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionOfferDefinitions_Main_Form.PTPromotionOfferDefinitions_Main_Form_DiscountPercentage.txtInner;
  
  txtDiscountPercentage.Click();
  txtDiscountPercentage.SetText(discountPercentage);
});

Given("I enter Despatch Discount {arg} under Freight Offer", function enterDespatchDiscoun(despatchDiscount){
  let txtDespatchDiscount = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionOfferDefinitions_Main_Form.PTPromotionOfferDefinitions_Main_Form_DispatchDiscount.txtInner;
  
  txtDespatchDiscount.Click();
  txtDespatchDiscount.SetText(despatchDiscount);
});

Given("I enter code Name {arg}", function enterPromotionOfferDefinitionName(codeName){
   let txtCodeName = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionOfferDefinitions_Main_Form.PTPromotionOfferDefinitions_Main_Form_Name.txtInner;
   
   txtCodeName.Click();
   txtCodeName.SetText(codeName);
});

Given("I select Discount {arg} under Discount Offer", function selectDiscount(discount){
  let ddDiscount = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionOfferDefinitions_Main_Form.PTPromotionOfferDefinitions_Main_Form_DiscountID.LookupSearchCombo;
  
  ddDiscount.Click();
  ddDiscount.ClickItem(discount);
  
  ddDiscount.Keys("[Tab]");
});


Given("I select Product Price {arg} under Price Offer", function selectProductPrice(productPrice){
 let ddProductPrice = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionOfferDefinitions_Main_Form.PTPromotionOfferDefinitions_Main_Form_ProductPriceID.LookupSearchCombo;
 
 ddProductPrice.Click();
 ddProductPrice.ClickItem(productPrice);
 
 ddProductPrice.Keys("[Tab]");

});

When("I click on All Promotion offer Definitions view", function clickAllPromotioOfferDefinitionsView(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.enbBrowser.EntityBrowser_Fill_Panel.SplitContainer1.SplitterPanel.lvwMain.DblClickItem("All", 0);
});


When("I click on Campaigns", function clickCampaigns(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.EntityBrowser.EntityBrowser_Fill_Panel.SplitContainer1.SplitterPanel.lvwMain.DblClickItem("Campaigns");
});

When("I click on All Campaigns view", function clickAllCampaignsView(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.enbBrowser.EntityBrowser_Fill_Panel.SplitContainer1.SplitterPanel.lvwMain.DblClickItem("All Campaigns");
});

When("I enter Campaign name", function enterCampaignName(){
  var anysize = 4;
  var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  randomCode="";
  for( var i=0; i < anysize; i++ )
  randomCode += charset[Math.floor(Math.random() * charset.length)];
  var name = (aqString.concat("Campaign"+" ", randomCode));
  
  let txtCampaignName = Aliases.Aptify_Shell.FormTemplateForm.PTCampaigns_Form.PTCampaigns_Form_Name.txtInner;
  
  txtCampaignName.Click();
  txtCampaignName.SetText(name);
  campaignName = name;
  txtCampaignName.Keys("[Tab]");
});

When("I enter Campaign Type {arg}", function enterCampaignType(campaignType){
  let ddCampaignType =  Aliases.Aptify_Shell.FormTemplateForm.PTCampaigns_Form.PTCampaigns_Form_CampaignTypeID.LookupSearchCombo;
  
  ddCampaignType.Click();
  ddCampaignType.ClickItem(campaignType);
  ddCampaignType.Keys("[Tab]");
});


When("I enter End date {arg}", function enterEndDate(endDate){
  let dateEnd =   Aliases.Aptify_Shell.FormTemplateForm.PTCampaigns_Form.PTCampaigns_Form_EndDate.txtInner;
  
  dateEnd.Click();
  dateEnd.SetText(endDate);
  dateEnd.Keys("[Tab]");
});

When("I select Campaign Manager {arg}", function selectCampaignsManager(campaignManager){
   let txtCampaignManager = Aliases.Aptify_Shell.FormTemplateForm.PTCampaigns_Form.PTCampaigns_Tabs.tabMain.PTCampaigns_Tabs_Comments.PTCampaigns_Tabs_Comments.PTCampaigns_Form_CampaignManagerRoleID.txtLink;
   
   txtCampaignManager.Click();
   txtCampaignManager.SetText(campaignManager);
   txtCampaignManager.Keys("[Tab]");
});

When("I click on Save Record", function clickSaveRecord(){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record");
});

When("I click on Promotions\\/Mailings tab", function clickTabPromotionsMailings(){
  Aliases.Aptify_Shell.FormTemplateForm.PTCampaigns_Form.PTCampaigns_Tabs.tabMain.ClickTab("Promotions/Mailings");
});

When("I right click on the Node with Campaign name to select Create New Promotion", function rightClickCampaignName_selectCreateNewPromotion(){
  Aliases.Aptify_Shell.FormTemplateForm.PTCampaigns_Form.PTCampaigns_Tabs.tabMain.PTCampaigns_Tabs_Promotions.PTCampaigns_Tabs_Promotions.PTCampaigns_Form_CampaignTreeViewStandard.splitContainer1.SplitterPanel.TreeViewControl.ClickItemR(campaignName);
  Aliases.Aptify_Shell.ContextMenuStrip.Keys("[Down]");
  Aliases.Aptify_Shell.ContextMenuStrip.Keys("[Down]");
  Aliases.Aptify_Shell.ContextMenuStrip.Keys("[Enter]");
});

When("I click on OK to start a New Promotion", function clickOKStartNewPromotion(){
  Aliases.Aptify_Shell.PromotionCreationRoutes.PTPromotions_PromotionCreationRoutes.PTPromotions_PromotionCreationRoutes_ActiveButtonOK.Click(34, 12);
});

When("I enter Promotion name", function enterPromotionName(){
  var anysize = 4;
  var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  randomCode="";
  for( var i=0; i < anysize; i++ )
  randomCode += charset[Math.floor(Math.random() * charset.length)];
  var name = (aqString.concat("Promotion"+" ", randomCode));
  
  let txtPromotionName = Aliases.Aptify_Shell.FormTemplateForm.PTPromotions_Form.PTPromotions_Form_TopArea.PTPromotions_Form_Name.txtInner;
  
  txtPromotionName.Click();
  txtPromotionName.SetText(name);
  promotionName = name;
  txtPromotionName.Keys("[Tab]");
});

When("I enter a Organisation {arg}", function enterOrganisation(organisation){
  let ddOrganisation = Aliases.Aptify_Shell.FormTemplateForm.PTPromotions_Form.PTPromotions_Form_TopArea.PTPromotions_Form_TopArea_OrganizationID.LookupSearchCombo;
  
  ddOrganisation.Click();
  ddOrganisation.ClickItem(organisation);
  ddOrganisation.Keys("[Tab]");
});

When("I deselect Allow Backorders checkbox", function deselectAllowBackordersCheckbox(){
 Aliases.Aptify_Shell.FormTemplateForm.PTPromotions_Form.PTPromotions_Form_TabControl.tabMain.PTPromotions_Form_Tabs_Details.PTPromotions_Form_Tabs_Details.PTPromotions_Form_Tabs_Detals_AllowBackorders.chkInternal.ClickButton();
});

When("I click on Qualification tab", function clickTabQualification(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotions_Form.PTPromotions_Form_TabControl.tabMain.ClickTab("Qualification");
});

When("I select the Product checkbox", function checkProductCheckbox(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotions_Form.PTPromotions_Form_TabControl.tabMain.PTPromotions_Form_Tabs_Qualification.PTPromotions_Form_Tabs_Qualification.PTPromotions_Form_Tabs_Qualification_ProductQualification.chkInternal.ClickButton();
});

When("I select Product Option {arg}", function selectProductOption(productOptions){
  let ddProductOptions = Aliases.Aptify_Shell.FormTemplateForm.PTPromotions_Form.PTPromotions_Form_TabControl.tabMain.PTPromotions_Form_Tabs_Qualification.PTPromotions_Form_Tabs_Qualification.PTPromotions_Form_Tabs_QualificationTabControl.tabMain.PTPromotions_Form_QualifiersTabs_Products.PTPromotions_Form_QualifiersTabs_ProductsTemplate.PTPromotions_Form_Tabs_Qualification_PromotionProductOptions.LookupSearchCombo;

  ddProductOptions.Click();
  ddProductOptions.ClickItem(productOptions);
});

When("I enter a product {arg}", function enterProduct(product){
  let txtProduct = Aliases.Aptify_Shell.FormTemplateForm.PTPromotions_Form.PTPromotions_Form_TabControl.tabMain.PTPromotions_Form_Tabs_Qualification.PTPromotions_Form_Tabs_Qualification.PTPromotions_Form_Tabs_QualificationTabControl.tabMain.PTPromotions_Form_QualifiersTabs_Products.PTPromotions_Form_QualifiersTabs_ProductsTemplate.PTPromotions_Form_QualifiersTabs_ProductsTemplate_ProductVersionControl.advancedLinkBoxProducts.txtLink;
    
  txtProduct.Click();
  txtProduct.SetText(product);
  txtProduct.Keys("[Tab]");
});

When("I right click on the Node with Campaign name to Refresh", function rightClickCampaignName_Refresh(){
  Aliases.Aptify_Shell.FormTemplateForm.PTCampaigns_Form.PTCampaigns_Tabs.tabMain.PTCampaigns_Tabs_Promotions.PTCampaigns_Tabs_Promotions.PTCampaigns_Form_CampaignTreeViewStandard.splitContainer1.SplitterPanel.TreeViewControl.ClickItemR(campaignName);

  Aliases.Aptify_Shell.ContextMenuStrip.Keys("[Down]");
  Aliases.Aptify_Shell.ContextMenuStrip.Keys("[Down]");
  Aliases.Aptify_Shell.ContextMenuStrip.Keys("[Down]");
  Aliases.Aptify_Shell.ContextMenuStrip.Keys("[Down]");
  Aliases.Aptify_Shell.ContextMenuStrip.Keys("[Enter]");
 });


Then("Campaign name should be displayed under All Campaigns view", function verifyCampaignCreated(){
  let records = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wRowCount;
  let passCount = 0;  
  for(let i = 0 ; i < records; i++)
    {
    let campaigns = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(i, 1).OleValue;
     if (campaignName != campaigns)
      {
       passCount +=1
      }
    }
    
  if ( passCount == records - 1)
  {
   Log.Checkpoint("Campaign name is displayed under All Campaigns");
  }
  else
  {
   Log.Error("Campaign name is not displayed under All Campaigns");
  }

});

Then("I go to Sales & Marketing", function clickSalesMarketing(){
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea2.DockableWindow2.aptifyTree.tvwMain.DblClickItem("advance> Home|Sales & Marketing");
});

Then("I click on Promotions", function clickPromotions(){
   Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.EntityBrowser.EntityBrowser_Fill_Panel.SplitContainer1.SplitterPanel.lvwMain.DblClickItem("Promotions"); 
});

Then("I click on All Promotions view", function clickAllPromotionsView(){
   Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.enbBrowser.EntityBrowser_Fill_Panel.SplitContainer1.SplitterPanel.lvwMain.DblClickItem("All Promotions");
});

Then("Promotion name should be displayed under All Promotions view", function verifyPromotionCreated(){
  let records = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wRowCount; 
  let passCount = 0;  
  for(let i = 0 ; i < records; i++)
    {
    let promotions = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(i, 1).OleValue;
     if (promotionName != promotions)
      {
       passCount +=1
      }
    }
    
  if ( passCount == records - 1)
  {
   Log.Checkpoint("Promotion name is displayed under All Promotions");
  }
  else
  {
   Log.Error("Promotion name is not displayed under All Promotions");
  }
});

When("I click Save Record and Close Form button", function clickSaveAndCloseButton(){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
});

           
When("I check the Product List checkbox", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab_MailingProductQualificationList.chkInternal.wState = cbChecked;
});

Then("I check the Product Classification List checkbox", function checkProductClassificationList(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab_MailingProductClassificationList.chkInternal.wState = cbChecked;
});

Then("I check the Organisation List checkbox", function checkOrganisationList(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab_MailingOrganizationList.chkInternal.wState = cbChecked;
});

When("I check the Author List checkbox", function checkAuthorList(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab_isAuthorList.chkInternal.wState = cbChecked;
});

When("I check the Sub Type List checkbox", function checkSubTypeList(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab_IsSubTypeList.chkInternal.wState = cbChecked;
});

When("I check the Audience List checkbox", function checkAudienceList(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab_IsAudienceList.chkInternal.wState = cbChecked;
});

When("I check the Version List checkbox", function checkVersionList(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab_IsVersionList.chkInternal.wState = cbChecked;
});

When("I check the Language List checkbox", function checkLanguageList(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab_IsLanguageList.chkInternal.wState = cbChecked;
});

Then("I check the Customer List checkbox", function checkMailingCustomerList(){
 Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab_MailingCustomerList.chkInternal.ClickButton();
});

When("I check the Customer Classification List checkbox", function checkMailingCustomerClassificationList(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab_MailingCustomerClassificationList.chkInternal.wState = cbChecked;
});

When("I check the Role List checkbox", function checkMailingRoleList(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab_MailingRoleList.chkInternal.wState = cbChecked;
});

When("I check the Territory List checkbox", function checkMailingTerritoryList(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab_MailingTerritoryList.chkInternal.wState = cbChecked;
});

When("I click on Products tab", function clickTabProducts(){
   Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.ClickTab("Products");
});

When("I select multiple Products {arg} , {arg}", function selectProducts(product1, product2){
 
  let radPanel = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.switchPanel;
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;;
  let radGridView = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let txtProduct = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_Products_Tab.PTPromotionLists_Products_Tab.PTPromotionLists_Products_Tab_ProductID.txtLink;
  
  txtProduct.Click();
  txtProduct.SetText(product1);
  txtProduct.Keys("[Tab]");
  radGridView.ClickCell(0,0);
  radPanel.selectButton.ClickButton();
  
  txtSearch.Keys("^a[BS]");
  txtSearch.SetText(product2);
  radPanel.searchButton.ClickButton();
  radGridView.ClickCell(1,0);
  radPanel.selectButton.ClickButton()
  
  radPanel.okButton.ClickButton();
});

When("I enter Quantity {arg}", function enterQty(quantity){
  let txtQuantity = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_Products_Tab.PTPromotionLists_Products_Tab.PTPromotionLists_Products_Tab_QuickQuantity.txtInner;
  
  txtQuantity.Click();
  txtQuantity.SetText(quantity);
});

When("I click Add button to add products", function clickAddProducts(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_Products_Tab.PTPromotionLists_Products_Tab.PTPromotionLists_Products_Tab_Active_Button_1.Click();
});

Then("Product List checkbox should be disabled", function verifyProductListCheckbox(){
  //qObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab_MailingProductQualificationList.chkInternal, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_Form_IsProductQualificationList.chkInternal, "Enabled", cmpEqual, false);
});

Then("I click on Product Classifications tab", function clickProductClassificationsTab(){
   Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.ClickTab("Product Classifications");
});

Then("I click on New to create Product Classifications", function clickNewProductClassifications(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_ProductClassifications_Tab.PTPromotionLists_ProductClassifications_Tab.PTPromotionLists_ProductClassifications_Tab_Sub_Type_Control_1.zAptifyControlBase_Toolbars_Dock_Area_Top.ClickItem("SubType|New");
});

Then("I select Classification Type {arg}", function selectPromotionClassificationType(classificationType){
  let ddClassificationType = Aliases.Aptify_Shell.SubTypeTemplateForm.PTPromotionListProductCodes_Form.PTPromotionListProductCodes_Tabs.tabMain.PTPromotionListProductCodes_Tabs_General.PTPromotionListProductCodes_Tabs_General.PTPromotionListProductCodes_Tabs_General_ProductCodeTypeID.LookupSearchCombo;

  ddClassificationType.Click();
  ddClassificationType.ClickItem(classificationType);
});

Then("I select Classification Code {arg}", function selectPromotionClassificationCode(lookUpCode){
  let ddLookUpCode = Aliases.Aptify_Shell.SubTypeTemplateForm.PTPromotionListProductCodes_Form.PTPromotionListProductCodes_Tabs.tabMain.PTPromotionListProductCodes_Tabs_General.PTPromotionListProductCodes_Tabs_General.PTPromotionListProductCodes_Tabs_General_LookupCodeRecordID.LookupSearchCombo;
  
  ddLookUpCode.Click();
  ddLookUpCode.ClickItem(lookUpCode);
});

Then("I select Offer Definition {arg}", function selectOfferDefinitionID(offerDefinition){
  let ddOfferDefinition = Aliases.Aptify_Shell.SubTypeTemplateForm.PTPromotionListProductCodes_Form.PTPromotionListProductCodes_Tabs.tabMain.PTPromotionListProductCodes_Tabs_General.PTPromotionListProductCodes_Tabs_General.PTPromotionListProductCodes_Tabs_General_OfferDefinitionID.LookupSearchCombo;

  ddOfferDefinition.Click();
  ddOfferDefinition.ClickItem(offerDefinition);
  ddOfferDefinition.Keys("[Tab]");
});

Then("I click OK button", function clickOkButton(){
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
});


Then("Product Classification List checkbox should be disabled", function verifyProductClassificationListCheckbox(){
  //aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab_MailingProductClassificationList.chkInternal, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_Form_IsProductClassificationQualificationList.chkInternal, "Enabled", cmpEqual, false);
});

Then("I click on Product Organisations tab", function clickTabProductOrganisations(){
   Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.ClickTab("Product Organizations");
});


Then("I click Add button to add Product Organisations", function clickAddProductOrganisations(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_Organizations_Tab.PTPromotionLists_Organizations_Tab.PTPromotionLists_Organizations_Tab_Active_Button_1.Click();
});

Then("list of organisations should be displayed below", function verifyOrganisations(){
  let Organizaton1 = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_Organizations_Tab.PTPromotionLists_Organizations_Tab.PTPromotionLists_Organizations_Tab_Sub_Type_Control_1.AptifyControlBase_Fill_Panel.flexSubType.get_Item(1, 2).OleValue;
  let Organizaton2 = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_Organizations_Tab.PTPromotionLists_Organizations_Tab.PTPromotionLists_Organizations_Tab_Sub_Type_Control_1.AptifyControlBase_Fill_Panel.flexSubType.get_Item(2, 2).OleValue;
  let Organizaton3 = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_Organizations_Tab.PTPromotionLists_Organizations_Tab.PTPromotionLists_Organizations_Tab_Sub_Type_Control_1.AptifyControlBase_Fill_Panel.flexSubType.get_Item(3, 2).OleValue;

  if( (aqObject.CompareProperty(Organizaton1, cmpEqual, "Streamline Distribution", true, 3)) && (aqObject.CompareProperty(Organizaton2, cmpEqual, "Wildlife Publishing", true, 3)) && (aqObject.CompareProperty(Organizaton3, cmpEqual, "Crafts Publishing", true, 3)) ){
    Log.Checkpoint("List of Organisations is displayed");
   }
  else{
    Log.Error("List of Organisations is not displayed");
   }
});
  

Then("Organization List checkbox should be disabled", function verifyOrganizationListCheckbox(){
   //aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab_MailingOrganizationList.chkInternal, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_Form_IsProductOrganizationQualificationList.chkInternal, "Enabled", cmpEqual, false);
});

Then("I click on Customers tab", function clickTabCustomers(){
   Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.ClickTab("Customers");
});

Then("I select multiple Customers {arg} , {arg}", function selectMultipleCustomers(customer1, customer2){
  let radPanel = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.switchPanel;
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;;
  let radGridView = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let txtCustomer = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_Customers_Tab.PTPromotionLists_Customers_Tab .PTPromotionLists_Customers_Tab_QuickCustomerRoleID.txtLink;
  
  txtCustomer.Click();
  txtCustomer.SetText(customer1);
  txtCustomer.Keys("[Tab]");
  radGridView.ClickCell(0,0);
  radPanel.selectButton.ClickButton();
  
  txtSearch.Keys("^a[BS]");
  txtSearch.SetText(customer2);
  radPanel.searchButton.ClickButton();
  radGridView.ClickCell(1,0);
  radPanel.selectButton.ClickButton()
  
  radPanel.okButton.ClickButton();
});

Then("I click on Add to add Customers", function clickOnAddCustomers(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_Customers_Tab.PTPromotionLists_Customers_Tab.PTPromotionLists_Customers_Tab_ActiveButton_PromoListCustomers.Click();
});

Then("Customer List checkbox should be disabled", function verifyPromotionsCustomerListCheckbox(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab_MailingCustomerList.chkInternal, "Enabled", cmpEqual, false);
});

Then("checkbox Customer Classification List should be disabled", function verifyCheckboxCustomerClassificationList(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab_MailingCustomerClassificationList.chkInternal, "Enabled", cmpEqual, false);
});

Then("checkbox Role List should be disabled", function verifyCheckboxRole(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab_MailingRoleList.chkInternal, "Enabled", cmpEqual, false);
});

Then("I click on Add to add Territory", function clickONAddTerritory(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_Form_Territory_Tab.PTPromotionLists_Territory.PTPromotionLists_Territory_Active_Button_1.Click();
});

Then("checkbox Territory List should be disabled", function verifyCheckboxTerritoryList(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab_MailingTerritoryList.chkInternal, "Enabled", cmpEqual, false);
});

When("I select Mailing radio button", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_Form_MailingPromoListGroupedOptions.Mailing.ClickButton();
});

When("I click on Mailing List tab", function clickTabMailingList(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.ClickTab("Mailing Lists");
});

Then("products {arg} {arg} should be displayed below", function verifyProductList(product1Par, product2Par){
  let product1Displayed = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_Products_Tab.PTPromotionLists_Products_Tab.PTPromotionLists_Products_Tab_Sub_Type_Control_1.AptifyControlBase_Fill_Panel.flexSubType.get_Item(1, 4).OleValue;
  let product1 = aqString.SubString(product1Displayed, 0, 13)
  let product2Displayed = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_Products_Tab.PTPromotionLists_Products_Tab.PTPromotionLists_Products_Tab_Sub_Type_Control_1.AptifyControlBase_Fill_Panel.flexSubType.get_Item(2, 4).OleValue;
  let product2 = aqString.SubString(product2Displayed, 0, 12)
  
  Log.Message(aqString.Compare(product1, product1Par, true));
  Log.Message(aqString.Compare(product2, product2Par, true));
});

Then("I check Customer Classification List checkbox in mailing", function checkCustomerClassificationList(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab_MailingCustomerClassificationList.chkInternal.ClickButton();
});

Then("product classification type {arg} should be displayed below", function verifyProductClassificationType(classificationTypePar){
  let classificationType = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_ProductClassifications_Tab.PTPromotionLists_ProductClassifications_Tab.PTPromotionLists_ProductClassifications_Tab_Sub_Type_Control_1.AptifyControlBase_Fill_Panel.flexSubType.get_Item(1, 2).OleValue;
  
  if(aqObject.CompareProperty(classificationType, cmpEqual, classificationTypePar, true, 3)){
    Log.Checkpoint("Product Classification Type displayed is correct");
     }
  else{
    Log.Error("Product Classification Type displayed is incorrect");
	}
});

Then("I select {arg} to select all Organizations", function selectOrganizations(organization){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_Organizations_Tab.PTPromotionLists_Organizations_Tab.PTPromotionLists_Organizations_Tab_Organizations.dropDownMultiSelect.Click();
  Aliases.Aptify_Shell.DropDownPopupForm.treeInner.CheckItem(organization);
  
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_Organizations_Tab.PTPromotionLists_Organizations_Tab.PTPromotionLists_Organizations_Tab_Sub_Type_Control_1.AptifyControlBase_Fill_Panel.flexSubType.Click();
});

Then("I check Role List checkbox in mailing", function checkRoleListCheckbox(){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab_MailingRoleList.chkInternal.ClickButton(); 
});

Then("I check Territory List checkbox in mailing", function checkTerritoryListCheckbox(){
 Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab_MailingTerritoryList.chkInternal.ClickButton();
});

Then("I select Product Classification Type {arg}", function selectProductClassificationType(classificationType){
  let ddClassificationType = Aliases.Aptify_Shell.SubTypeTemplateForm.PTPromotionListProductCodes_Form.PTPromotionListProductCodes_Tabs.tabMain.PTPromotionListProductCodes_Tabs_General.PTPromotionListProductCodes_Tabs_General.PTPromotionListProductCodes_Tabs_General_ProductCodeTypeID.LookupSearchCombo;

  ddClassificationType.Click();
  ddClassificationType.ClickItem(classificationType);
});


Then("I select Customer Classification Type {arg} in mailing", function selectCustomerClaasificationType(classificationType){
  let ddCustomerClassification =  Aliases.Aptify_Shell.SubTypeTemplateForm.PTPromotionListCustomerClassifications_Form.PTPromotionListCustomerClassifications_Tabs.tabMain.PTPromotionListCustomerClassifications_Tabs_General.PTPromotionListCustomerClassifications_Tabs_General.PTPromotionListCustomerClassifications_Tabs_General_ClassificationTypeID.LookupSearchCombo;

  ddCustomerClassification.Click();
  ddCustomerClassification.ClickItem(classificationType);
});


When("I click on Companies", function clickCompanies(){
 Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.EntityBrowser.EntityBrowser_Fill_Panel.SplitContainer1.SplitterPanel.lvwMain.DblClickItem("Companies", 0);
});

When("I click on Profile tab for Company", function clickTabProfile(){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.ClickTab("Profile");
});

When("I click on Marketing subtab for Company", function clickSubTabMarketing(){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_OTC_Companies_ProfileTab.PT_OTC_Companies_ProfileTab.tabMain.ClickTab("Marketing");
});

When("I check the Marketing Allowed checkbox for Company", function checkMarketingAllowedCheckbox(){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_OTC_Companies_ProfileTab.PT_OTC_Companies_ProfileTab.tabMain.PTCompanies_Marketing_Tab.PTCompanies_Marketing_Tab.PTCompanies_Marketing_TabControl.tabMain.PTCompanies_Marketing_Preferences_Tab.PTCompanies_Marketing_Preferences_Tab.PTCompanies_Marketing_Preferences_Tab_IsMarketingAllowed.chkInternal.wState = cbChecked;
});

Then("Marketing Allowed checkbox for Company should be checked", function verifyMarketingAllowedCheckbox(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_OTC_Companies_ProfileTab.PT_OTC_Companies_ProfileTab.tabMain.PTCompanies_Marketing_Tab.PTCompanies_Marketing_Tab.PTCompanies_Marketing_TabControl.tabMain.PTCompanies_Marketing_Preferences_Tab.PTCompanies_Marketing_Preferences_Tab.PTCompanies_Marketing_Preferences_Tab_IsMarketingAllowed.chkInternal, "Checked", cmpEqual, true);
});

When("I open information panel for a Company {arg}", function openCompanyInformation(company){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.HostedTextBoxBase.Keys("^f");
  let windowSearch = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams;

  windowSearch.quickSearch.quickSearchText.Click();
  windowSearch.quickSearch.quickSearchText.SetText(company);
  
  windowSearch.switchPanel.searchButton.ClickButton();
});

When("I click on Persons", function clickPersons(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.EntityBrowser.EntityBrowser_Fill_Panel.SplitContainer1.SplitterPanel.lvwMain.DblClickItem("Persons", 0);
});

When("I open information panel for a Person {arg}", function openPersonInformation(person){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.HostedTextBoxBase.Keys("^f");
  let windowSearch = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams;

  windowSearch.quickSearch.quickSearchText.Click();
  windowSearch.quickSearch.quickSearchText.SetText(person);
  
  windowSearch.switchPanel.searchButton.ClickButton();
});

When("I click on Profile tab for Person", function clickTabProfile_Persons(){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.ClickTab("Profile");
});

When("I click on Marketing subtab for Person", function clickSubTabMarketing_Persons(){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PT_OTC_Persons_Profile.PT_OTC_Persons_Profile.tabMain.ClickTab("Marketing");
});

When("I check the Marketing Allowed checkbox for Person", function checkMarketingAllowedCheckbox_Persons(){
 Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PT_OTC_Persons_Profile.PT_OTC_Persons_Profile.tabMain.PTPersons_Tabs_Marketing.Persons_PTPersons_Tabs_Marketing.PTPersons_Tabs_Marketing_TabGroup.tabMain.PTPersons_Marketing_Preferences_Tab.PTPersons_Marketing_Preferences_Tab.Persons_PTPersons_Tabs_Marketing_IsMarketingAllowed.chkInternal.wState = cbChecked;              
});

Then("Marketing Allowed checkbox for Person should be checked", function verifyMarketingAllowedCheckbox_Persons(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PT_OTC_Persons_Profile.PT_OTC_Persons_Profile.tabMain.PTPersons_Tabs_Marketing.Persons_PTPersons_Tabs_Marketing.PTPersons_Tabs_Marketing_TabGroup.tabMain.PTPersons_Marketing_Preferences_Tab.PTPersons_Marketing_Preferences_Tab.Persons_PTPersons_Tabs_Marketing_IsMarketingAllowed.chkInternal, "Checked", cmpEqual, true);
});

When("I click {arg} view", function clickView(view){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.enbBrowser.EntityBrowser_Fill_Panel.SplitContainer1.SplitterPanel.lvwMain.DblClickItem(view);
});


When("I click on Products", function clickProducts(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.EntityBrowser.EntityBrowser_Fill_Panel.SplitContainer1.SplitterPanel.lvwMain.DblClickItem("Products", 0);
});

When("I perform a Goods In transaction", function GoodsIn(){
  openGoodsIn();
  fillSetingsPage();
  ClickNextForm();
  performGoodsIn();
  ClickNextForm();
  clickFinishForm()
  clickInventoryTab();
  Sys.WaitProperty("Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain", 5000);
  Refresh();
});

Then("available quantity and physical quantity should be updated", function verifyAvailablePhysicalQty(){
  let availableQty = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 3).OleValue;
  let physicalQty = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 2).OleValue;

  if( (aqObject.CompareProperty(availableQty, cmpGreaterOrEqual, availableQuantity, true, 3)) && (aqObject.CompareProperty(physicalQty, cmpGreaterOrEqual, physicalQuantity, true, 3)) ){
    Log.Checkpoint("Available quantity and Physical quantity has been updated");
   }
  else{
    Log.Error("Available quantity and Physical quantity has not been updated");
   }
});
   
function ClickPricesTab(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Prices");
}
function ClickNew(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_Telerik_List_View_ActivePrices.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(13, 18);
}
function enterInformation(){
  let ddPriceType = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_PriceTypeID.LookupSearchCombo;
  ddPriceType.ClickItem("Standard Price");
  ddPriceType.CloseUp();
  
  let ddPriceName = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_PriceNameID.LookupSearchCombo;
  ddPriceName.ClickItem("Contract Price");
  ddPriceName.CloseUp();
  
  let ddLicense = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_LicenseID.LookupSearchCombo; 
  ddLicense.ClickItem("Sale");
  ddLicense.CloseUp();
  
  let ddCurrencyType = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_CurrencyTypeID.LookupSearchCombo;
  ddCurrencyType.ClickItem("Euro");
  ddCurrencyType.CloseUp();
  
  let txtPrice = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Price.txtInner;
  txtPrice.Click();
  txtPrice.SetText(60);
  
  let txtRenewPrice = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_RenewPrice.txtInner;
  txtRenewPrice.Click();
  txtRenewPrice.SetText(70);
  
  let txtToDate =  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_EndDate.txtInner;
  txtToDate.Click();
  txtToDate.SetText("29/12/2020");
  
  let checkboxDefault =  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_IsDefault.chkInternal;
  checkboxDefault.ClickButton();
}


function clickInventoryTab(){
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea2.DockableWindow2.aptifyTree.tvwMain.DblClickItem("advance> Home|Inventory");
 }

function clickInventoryTabPanel(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
 }

 function checkAndSetSupplyStatus(status)
{
  let gridInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let supplyStatus = gridInventory.wValue(0, 4).OleValue;
 
   if (supplyStatus != status)
  {
    gridInventory.DblClickCell(0, "Supply Status");
    let ddSiteStatus = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_SiteStatusID.LookupSearchCombo;
    ddSiteStatus.Click();
    ddSiteStatus.ClickItem(status);
    selectPickingLocation();
    clickSaveAndClose();
  }
  
}
function verifySupplyStatus(status){
  let supplyStatus = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 4).OleValue;
  
  if(aqObject.CompareProperty(status, cmpEqual, supplyStatus, true, 3)){
    Log.Checkpoint("Site status is Open");
     }
  else{
    Log.Error("Site status is not Open");
	}
}
 
function selectPickingLocation(){
  let txtPickingLocation = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_DefaultPickingLocationID.txtLink;
  txtPickingLocation.Click();
  txtPickingLocation.SetText("WAF3ZZZ");
  txtPickingLocation.Keys("[Tab]");
 } 
  
function clickSaveAndClose (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
}
 
function openGoodsIn(){
 Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Inventory");
  
 Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton3.ClickButton();
}

function fillSetingsPage(){
  let ddSiteWarehouse = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_417.PTInventoryGoodsInWizard_NewStep1.PTInventoryGoodsInWizard_NewStep1_SiteWarehouseID.LookupSearchCombo;
  ddSiteWarehouse.Click();
  ddSiteWarehouse.ClickItem("Watford/Warehouse A");
  ddSiteWarehouse.Keys("[Tab]");
  
  let txtReceivedDate = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_417.PTInventoryGoodsInWizard_NewStep1.PTInventoryGoodsInWizard_NewStep1_ReceivedDate.txtInner;
  txtReceivedDate.Click();
  txtReceivedDate.SetText("16/01/2020");
  
  let txtReference = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_417.PTInventoryGoodsInWizard_NewStep1.PTInventoryGoodsInWizard_NewStep1_Reference.txtInner;
  txtReference.Click();
  txtReference.SetText("customRef");
}
function ClickNextForm(){
 Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnNext.ClickButton();
 }
function performGoodsIn(){
  let txtProduct =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_ProductID.txtLink;
  txtProduct.Click();
  txtProduct.SetText(product);
  txtProduct.Keys("[Tab]");
  
  var txtSize = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_PacketSize.txtInner;  
  txtSize.Click();
  txtSize.Keys(5);
  txtSize.Keys("[Tab]");
  size =  aqObject.GetPropertyValue(txtSize , "text");
  
  var txtPackets = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_Packets.txtInner;
  txtPackets.Click();
  txtPackets.SetText(10);
  txtPackets.Keys("[Tab]");
  packets =  aqObject.GetPropertyValue(txtPackets , "text");
 // var checkBoxMiscellaneousGoodsIn =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_MiscellaneousGoodsIn.chkInternal;
 // checkBoxMiscellaneousGoodsIn.ClickButton();
 
 // Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
  
  let txtQtyLoose = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_LooseQty.txtInner; 
  txtQtyLoose.Click();
  txtQtyLoose.SetText(100);
  txtQtyLoose.Keys("[Tab]");
  looseQty =  aqObject.GetPropertyValue(txtQtyLoose , "text");
  
  var totalGoods = ((size*packets)+aqConvert.StrToInt(looseQty));
  totalQuantity = totalGoods;
  
  let txtUnitWeight = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_UnitWeightValue.txtInner;
  txtUnitWeight.Click();
  txtUnitWeight.SetText(0.250);
  txtUnitWeight.Keys("[Tab]");
  
  let txtComment = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_Comments.txtInner;
  txtComment.Click();
  txtComment.SetText("customComment");
  txtComment.Keys("[Tab]");
   
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_Active_Button_Add.Click();

}
function clickFinishForm(){
   Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
}

function clickProductVersionsTab()
{
   Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main.Products_Main.Products_Main_Tabs.tabMain.ClickTab("Product Versions");
}

function openVersion()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main.Products_Main.Products_Main_Tabs.tabMain.Products_Tabs_VProductVersions.Products_Tabs_VProductVersionsDetails.Products_Tabs_VProductVersionsDetails_Sub_Type_Control_ProductVersions.zAptifyControlBase_Toolbars_Dock_Area_Top.ClickItem("SubType|Open");
}

function ClickFulfilmentTab()
{
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.ClickTab("Fulfilment");
}

function checkAndSetAnswerCode(answerCode)
{
 let ddAnswerCode =  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment.PT_ProductVersions_Lookup_AnswerCode.LookupSearchCombo;
  answerCodeDisplayed = aqObject.GetPropertyValue(ddAnswerCode , "text"); 
 
 if(answerCodeDisplayed != answerCode)
  {
  ddAnswerCode.Click();
  ddAnswerCode.ClickItem(answerCode);
  ddAnswerCode.Keys("[Tab]"); 
  }

}

function verifyAnswerCode(answerCode){
  let ddAnswerCode =  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment.PT_ProductVersions_Lookup_AnswerCode.LookupSearchCombo;
  answerCodeDisplayed = aqObject.GetPropertyValue(ddAnswerCode , "text"); 

  if(aqObject.CompareProperty(answerCode, cmpEqual, answerCodeDisplayed, true, 3)){
    Log.Checkpoint("Answer Code is 'Temporarily Out of Stock'");
     }
  else{
    Log.Error("Answer Code is not 'Temporarily Out of Stock'");
	}
  
}

function checkAndCreateDefaultPriceSet()
{
  let gridPrices = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_Telerik_List_View_ActivePrices.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = gridPrices.wRowCount;
  successCount=0
  failCount =0
  let i=0;
  if(records == 0)
   {
    ClickNew();
    enterInformation();
    clickSaveAndClose();
   }
  
   if (records >= 1)
    {
   
    for(let i = 0 ; i < records; i++)
    {
    let defaultPriceSet = gridPrices.wValue(i, 13).OleValue;
    if (defaultPriceSet == true)
     {
      break
     }
    else{
      failCount +=1
      
      }
    }
 
  if ( failCount == records )
  {
   ClickNew();
   enterInformation();
   clickSaveAndClose();
  }
  else
  {
  Log.Checkpoint("Default Price Set already exists");
  }
}
}

function verifyDefaultPriceSet(){
  let defaultPriceSet = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_Telerik_List_View_ActivePrices.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 13).OleValue;
  
  if(aqObject.CompareProperty(defaultPriceSet, cmpEqual, true, true, 3)){
    Log.Checkpoint("Default Price Set exists");
     }
  else{
    Log.Error("Default Price Set does not exist");
	}
  
}

function Refresh(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.SetFocus();
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Keys("[F5][F5]");
}
function clickOk()
{
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
}

When("I click on All Products view", function clickAllProductsView(){
 Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.enbBrowser.EntityBrowser_Fill_Panel.SplitContainer1.SplitterPanel.lvwMain.DblClickItem("All Products");
});

When("I open information panel for a Product {arg}", function openProductInformation(productPar){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.HostedTextBoxBase.Keys("^f");
 
  Sys.WaitProcess("windowSearch", 5000);
  var windowSearch = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams;

  windowSearch.quickSearch.quickSearchText.Click();
  windowSearch.quickSearch.quickSearchText.SetText(productPar);
  product = productPar;
  
  windowSearch.switchPanel.searchButton.ClickButton();
});

When("I check Answer Code as Temporarily Out of Stock if not I set it to {arg}", function checkAnswerCode(answerCode){
  clickProductVersionsTab();
  openVersion();
  ClickFulfilmentTab();
  checkAndSetAnswerCode(answerCode);
  verifyAnswerCode(answerCode);
  clickOk();
});

When("I check Site Status as Open if not I set it to {arg}", function checkSiteStatus(status){
  clickInventoryTabPanel();
  checkAndSetSupplyStatus(status);
  verifySupplyStatus(status);
  retrieveQty();
});

When("I check Default Price set if not I create a Default Price set", function checkDefaultPriceSet(){
  ClickPricesTab();
  checkAndCreateDefaultPriceSet();
  verifyDefaultPriceSet();
});

Then("I click on Save Record and Close Form to save the Product", function clickSaveClose(){
  clickSaveAndClose(); 
});

When("I open the Campaign record", function openCampaignRecord (){
  let radGridViewCampaignRecord = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let Rowcount = radGridViewCampaignRecord.wRowCount;
  radGridViewCampaignRecord.ClickCell(Rowcount-1, "Name");
  radGridViewCampaignRecord.DblClickCell(Rowcount-1,"Name");
});

Then("{arg} ,{arg} should be displayed under Qualification Lists", function checkpointQualificationList (primaryIdentifier1, primaryIdentifier2){
  let radGridViewQualificationList = Aliases.Aptify_Shell.FormTemplateForm.PTPromotions_Form.PTPromotions_Form_TabControl.tabMain.PTPromotions_Form_Tabs_Qualification.PTPromotions_Form_Tabs_Qualification.PTPromotions_Form_Tabs_QualificationTabControl.tabMain.PTPromotions_Form_QualifiersTabs_Products.PTPromotions_Form_QualifiersTabs_ProductsTemplate.PTPromotions_Form_Tabs_Qualification_ProductQualGroupingControl.splitContainer.SplitterPanel2.panelBehindDetail.panel4Detail.PTPromotions_Qualification_GroupControl_Item.PTPromotions_Qualification_GroupControl_Item_ProdQuaificationListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmPrimaryIdentifier1 = radGridViewQualificationList.wValue(0, "Title").OleValue;
  if(aqObject.CompareProperty(clmPrimaryIdentifier1, cmpEqual,primaryIdentifier1, true,3))
  {
    Log.Checkpoint("Primary Identifier record has been display under Qualification Lists")
  }
  else{
  Log.Error("Primary Identifier record is not display under Qualification Lists");
  }
  
  let clmPrimaryIdentifier2 = radGridViewQualificationList.wValue(1, "Title").OleValue;
  if(aqObject.CompareProperty(clmPrimaryIdentifier2, cmpEqual, primaryIdentifier2, true, 3))
  {
    Log.Checkpoint("Primary Identifier record has been display under Qualification Lists")
  }
  else{
  Log.Error("Primary Identifier record is not display under Qualification Lists");
  }
  
});

Then("I click on Offers tab", function clickOffersTab (){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotions_Form.PTPromotions_Form_TabControl.tabMain.ClickTab("Offers");
});

Then("Offer Tab should be disabled", function checkpointOfferTabDisabled(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPromotions_Form.PTPromotions_Form_TabControl.tabMain.PTPromotions_Form_Tabs_Offers.PTPromotions_Form_Tabs_Offers.PTPromotions_Form_Tabs_Detals_OffersELV.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1, "Enabled", cmpEqual, false);
});

Then("I click on Save Record to activate Offers tab", function (){
  //Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record");
  Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("datEntity").WinFormsObject("AptifyDataControl_Fill_Panel").WinFormsObject("_AptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top").ClickItem("Data Form|Save Record");
});

Then("Offer Tab should be activated", function checkpointOffersTabActivated (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPromotions_Form.PTPromotions_Form_TabControl.tabMain.PTPromotions_Form_Tabs_Offers.PTPromotions_Form_Tabs_Offers.PTPromotions_Form_Tabs_Detals_OffersELV.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1, "Enabled", cmpEqual, true);
});


Then("I click on New Icon", function clickBtnNew (){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotions_Form.PTPromotions_Form_TabControl.tabMain.PTPromotions_Form_Tabs_Offers.PTPromotions_Form_Tabs_Offers.PTPromotions_Form_Tabs_Detals_OffersELV.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(10, 18);
});

Then("I enter Name", function (){
  let txtName = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionOffers_View.PTPromotionOffers_Form_Name.txtInner;
  txtName.SetText(descriptionName);
});

Then("I enter Offer Type {arg}", function enterOfferType (offerType){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionOffers_View.PTPromotionOffers_Form_OfferTypeID.LookupSearchCombo.ClickItem(offerType);
});

Then("I click on Details tab", function clickDetailsTab (){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionOffers_View.PTPromotionOffers_Form_TabControl.tabMain.ClickTab("Details");
});

Then("Details Tab should be activated", function checkpointDetailsTabActivated (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPromotionOffers_View.PTPromotionOffers_Form_TabControl.tabMain.PTPromotionOffers_Form_Details_Tab.PTPromotionOffers_Form_DetailsTabTemplate, "Enabled", cmpEqual, true);
});

Then("I select Product Options {arg}", function selectProductOptions (productOption){
  let ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionOffers_View.PTPromotionOffers_Form_TabControl.tabMain;
  ultraTabControl.ClickTab("Offer Products");
  ultraTabControl.PTPromotionOffers_Form_OfferProducts_Tab.PTPromotionOffers_Form_OfferProducts_Tab.PTPromotionOffers_Form_OfferProducts_Tab_OfferProductOptionID.LookupSearchCombo.ClickItem(productOption);
});

Then("I click on binocular icon in the left window box", function clickBinocularIcon (){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionOffers_View.PTPromotionOffers_Form_TabControl.tabMain.PTPromotionOffers_Form_OfferProducts_Tab.PTPromotionOffers_Form_OfferProducts_Tab.PTPromotionOffers_Form_OfferProducts_Tab_OfferProductGroupingControl.splitContainer.SplitterPanel.treeCommandBar.Click(21, 10);
});

Then("I click on Search for Product offer Lists", function clickBinocularIconOfferList (){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionOffers_View.PTPromotionOffers_Form_TabControl.tabMain.PTPromotionOffers_Form_OfferProducts_Tab.PTPromotionOffers_Form_OfferProducts_Tab.PTPromotionOffers_Form_OfferProducts_Tab_OfferProductGroupingControl.splitContainer.SplitterPanel2.panelBehindDetail.panel4Detail.PTPromotionOffers_Products_GroupControl_Search.PTPromotionOffers_Products_GroupControl_ProductPromotionListSearchBox.searchButton.ClickButton();
});

Then("I select product from list", function selectProdutFromList (){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionOffers_View.PTPromotionOffers_Form_TabControl.tabMain.PTPromotionOffers_Form_OfferProducts_Tab.PTPromotionOffers_Form_OfferProducts_Tab.PTPromotionOffers_Form_OfferProducts_Tab_OfferProductGroupingControl.splitContainer.SplitterPanel2.panelBehindDetail.panel4Detail.PTPromotionOffers_Products_GroupControl_Search.PTPromotionOffers_Products_GroupControl_Search_ProductsPromotionListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, "Name");
});

Then("I drag and drop selected product under Product offers", function dragAndDropProduct (){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionOffers_View.PTPromotionOffers_Form_TabControl.tabMain.PTPromotionOffers_Form_OfferProducts_Tab.PTPromotionOffers_Form_OfferProducts_Tab.PTPromotionOffers_Form_OfferProducts_Tab_OfferProductGroupingControl.splitContainer.SplitterPanel2.panelBehindDetail.panel4Detail.PTPromotionOffers_Products_GroupControl_Search.PTPromotionOffers_Products_GroupControl_Search_ProductsPromotionListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  radGridView.ClickCell(0, "Name");
  radGridView.Drag(99, 31, -227, -51);
  
});

Then("I click on Save Record button", function (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record");
});

Then("I enter message under Description {arg}", function enterDesciption (description){
  let txtDescription = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionOffers_View.PTPromotionOffers_Form_TabControl.tabMain.PTPromotionOffers_Form_Details_Tab.PTPromotionOffers_Form_DetailsTabTemplate.PTPromotionOffers_Form_Details_TabTemplate_Description.txtInner;
  txtDescription.SetText(description);
});

Then("I check the checkbox Auto Apply To Order", function checkCheckboxAutoApply (){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionOffers_View.PTPromotionOffers_Form_TabControl.tabMain.PTPromotionOffers_Form_Details_Tab.PTPromotionOffers_Form_DetailsTabTemplate.PTPromotionOffers_View_AutoApplyCheckBox.chkInternal.wState = cbChecked;
});


Then("Name of Promotions and Offer Type as {arg} should be displayed under Offers tab", function checkpointfirstOfferTypeUnderOffersTab (offerType){
  let radGridViewOffers = Aliases.Aptify_Shell.FormTemplateForm.PTPromotions_Form.PTPromotions_Form_TabControl.tabMain.PTPromotions_Form_Tabs_Offers.PTPromotions_Form_Tabs_Offers.PTPromotions_Form_Tabs_Detals_OffersELV.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmName = radGridViewOffers.wValue(0, "Name").OleValue;
  
  if(aqObject.CompareProperty(clmName, cmpEqual,descriptionName,true, 3))
  {
    Log.Checkpoint("Same Name has been display")
  }
  else{
  Log.Error("Different Name has been display");
  }
  
  
  let clmOfferType = radGridViewOffers.wValue(0, "Offer Type").OleValue;
  if(aqObject.CompareProperty(clmOfferType, cmpEqual,offerType,true, 3))
  {
    Log.Checkpoint("Same Offertype has been display under offers tab")
  }
  else{
  Log.Error("Different offerType has been display under offers tab");
  
  }
  
});

Then("Name of Promotions and offer type as {arg} should be displayed under Offers tab", function checkpointsecondOfferTypeUnderOffersTab (offerType){
  let radGridViewOffers = Aliases.Aptify_Shell.FormTemplateForm.PTPromotions_Form.PTPromotions_Form_TabControl.tabMain.PTPromotions_Form_Tabs_Offers.PTPromotions_Form_Tabs_Offers.PTPromotions_Form_Tabs_Detals_OffersELV.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmName = radGridViewOffers.wValue(0, "Name").OleValue;
  
  if(aqObject.CompareProperty(clmName, cmpEqual,descriptionName,true, 3))
  {
    Log.Checkpoint("Same Name has been display")
  }
  else{
  Log.Error("Different Name has been display");
  }
  
  let clmOfferType = radGridViewOffers.wValue(1, "Offer Type").OleValue;
  if(aqObject.CompareProperty(clmOfferType, cmpEqual,offerType,true, 3))
  {
    Log.Checkpoint("Same Offertype has been display under offers tab")
  }
  else{
  Log.Error("Different offerType has been display under offers tab");
  
  }
});


Then("I click on All Promotions View", function clickAllPromotions (){
  let ultraTree = Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea2.DockableWindow2.aptifyTree.tvwMain;
  ultraTree.ClickItem("advance> Home|Sales & Marketing|Promotions|All Promotions");
});


Then("I enter start Time on New Promotion Offers Record Page", function enterStartTime (){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionOffers_View.PTPromotionOffers_Form_StartTime.innerDateTimePicker.wTime = beginTime;
});

Then("I enter Offer Definition on New Promotion Offers Record page {arg}", function enterOfferDefinition (offerDefinition){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionOffers_View.PTPromotionOffers_Form_OfferDefinitionID.LookupSearchCombo.ClickItem(offerDefinition);
});

Then("I click on Save Record and Close Form button to close all the records", function clickSaveRecordAndCloseFormButton (){
  let ultraToolbarsDockArea = Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top;
  ultraToolbarsDockArea.ClickItem("Data Form|Save Record and Close Form");
  ultraToolbarsDockArea.ClickItem("Data Form|Save Record and Close Form");
});

//CampaignTypes


When("I click on Save Record and close the form button", function clickSaveRecordAndClose (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
});

Then("New record should be saved with Unique Id in list of All Campaigns record", function checkpointUniqueId (){
  Log.Message(campaignCode);
  let radGridViewCampaign = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let Rowcount = radGridViewCampaign.wRowCount;
  let clmcampaignCode = radGridViewCampaign.wValue(Rowcount-1,"Campaign Code").OleValue;
  
  if(aqObject.CompareProperty(campaignCode, cmpEqual, clmcampaignCode, true, 3))
  {
    Log.Checkpoint("Same campaign code has been display")
  }
  else{
  Log.Error("Different campaign code has been display");
  }
  let clmId = radGridViewCampaign.wValue(Rowcount-1,"Id").OleValue;
  Log.Message(clmId);
  Delay(6000);
});

When("I enter Start Date {arg}", function selectStartDate (startDate){
   let txtstartDate = Aliases.Aptify_Shell.FormTemplateForm.PTCampaigns_Form.PTCampaigns_Form_StartDate.txtInner;
   txtstartDate.SetText(startDate);
});

Then("I open the Campaign record", function opneCampaignRecord(){
  let radGridViewCamp = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let Rowcount = radGridViewCamp.wRowCount;
  radGridViewCamp.ClickCell(Rowcount-1, "Name");
  radGridViewCamp.DblClickCell(Rowcount-1,"Name");
});

Then("I click on Promotions\\/Mailings", function clickPromotionsMailings (){
  Aliases.Aptify_Shell.FormTemplateForm.PTCampaigns_Form.PTCampaigns_Tabs.tabMain.ClickTab("Promotions/Mailings");
});

Then("I click on Create New Promotion", function clickCreateNewPromotion (){
  let treeViewExtensionNewPromotion = Aliases.Aptify_Shell.FormTemplateForm.PTCampaigns_Form.PTCampaigns_Tabs.tabMain.PTCampaigns_Tabs_Promotions.PTCampaigns_Tabs_Promotions.PTCampaigns_Form_CampaignTreeViewStandard.splitContainer1.SplitterPanel.TreeViewControl;
  treeViewExtensionNewPromotion.ClickItem("|[0]");
  treeViewExtensionNewPromotion.ClickItemR("|[0]");
  treeViewExtensionNewPromotion.Keys("[Down][Down][Enter]");
});

Then("I select radio button Start New Promotion", function clickStartNewPromotion (){
  Aliases.Aptify_Shell.PromotionCreationRoutes.PTPromotions_PromotionCreationRoutes.PTPromotions_PromotionCreationRoutes_GroupRouteOptions.Start_a_new_promotion.ClickButton();
  Aliases.Aptify_Shell.PromotionCreationRoutes.PTPromotions_PromotionCreationRoutes.PTPromotions_PromotionCreationRoutes_ActiveButtonOK.Click();
});


Then("I enter name in New Promotion Record", function enterNamePromotionsRecord (){
  let aptifyTextBoxNamePromotion = Aliases.Aptify_Shell.FormTemplateForm.PTPromotions_Form.PTPromotions_Form_TopArea.PTPromotions_Form_Name.txtInner;
  aptifyTextBoxNamePromotion.SetText(descriptionName);

});

Then("I select Organisation {arg}", function selectOrganization (organisation){
  
  let txtOrganisation = Aliases.Aptify_Shell.FormTemplateForm.PTPromotions_Form.PTPromotions_Form_TopArea.PTPromotions_Form_TopArea_OrganizationID.LookupSearchCombo;
  txtOrganisation.Click();
  txtOrganisation.ClickItem(organisation);
  txtOrganisation.Keys("[Tab]");
});

Then("Qualifications Required check box should be disabled", function checkpointCheckboxDisabled (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPromotions_Form.PTPromotions_Form_TopArea.PTPromotions_Form_Tabs_Detals_IsQualificationRequired.chkInternal, "Enabled", cmpEqual, false);
  Delay(2000);
});

Then("I click on Qualification", function clickQualification (){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotions_Form.PTPromotions_Form_TabControl.tabMain.ClickTab("Qualification")
});

Then("I check the checkbox Product", function checkCheckboxProduct (){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotions_Form.PTPromotions_Form_TabControl.tabMain.PTPromotions_Form_Tabs_Qualification.PTPromotions_Form_Tabs_Qualification.PTPromotions_Form_Tabs_Qualification_ProductQualification.chkInternal.wState = cbChecked;
  //Delay(3000);
});

Then("Product tab should be Enabled", function checkpointProductTabEnabled (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPromotions_Form.PTPromotions_Form_TabControl.tabMain.PTPromotions_Form_Tabs_Qualification.PTPromotions_Form_Tabs_Qualification.PTPromotions_Form_Tabs_QualificationTabControl.tabMain, "Enabled", cmpEqual, true);
  //Delay(2000);
});

Then("All Products , Single Product and Specific Products should be displayed under Product Option", function checkpointProductOption (){
  let productOption = Aliases.Aptify_Shell.FormTemplateForm.PTPromotions_Form.PTPromotions_Form_TabControl.tabMain.PTPromotions_Form_Tabs_Qualification.PTPromotions_Form_Tabs_Qualification.PTPromotions_Form_Tabs_QualificationTabControl.tabMain.PTPromotions_Form_QualifiersTabs_Products.PTPromotions_Form_QualifiersTabs_ProductsTemplate.PTPromotions_Form_Tabs_Qualification_PromotionProductOptions.LookupSearchCombo;
  let productOption1 = productOption.wItem(1);
  
  if(aqObject.CompareProperty("Single Product", cmpEqual, productOption1, true, 3))
  {
    Log.Checkpoint("Single product has been display under product option")
  }
  else{
  Log.Error("Single product is not display under product option");
  }
  
  let productOption2 = productOption.wItem(2);
  
  
  if(aqObject.CompareProperty("Specific Products", cmpEqual, productOption2, true, 3))
  {
    Log.Checkpoint("Specific product has been display under product option")
  }
  else{
  Log.Error("Specific product is not display under product option");
  }
  
  let productOption3 = productOption.wItem(0);
  aqObject.CompareProperty("All Products", cmpEqual,productOption3, true,3);
  
  if(aqObject.CompareProperty("All Products", cmpEqual, productOption3, true, 3))
  {
    Log.Checkpoint("All product has been display under product option")
  }
  else{
  Log.Error("All product is not display under product option");
  }
});

Then("I click on Product Option", function clickProductOption (){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotions_Form.PTPromotions_Form_TabControl.tabMain.PTPromotions_Form_Tabs_Qualification.PTPromotions_Form_Tabs_Qualification.PTPromotions_Form_Tabs_QualificationTabControl.tabMain.PTPromotions_Form_QualifiersTabs_Products.PTPromotions_Form_QualifiersTabs_ProductsTemplate.PTPromotions_Form_Tabs_Qualification_PromotionProductOptions.LookupSearchCombo.DropDown();
  Delay(2000);
});

function EnterName(CampaignName)
{
  
  let txtName = Aliases.Aptify_Shell.FormTemplateForm.PTCampaigns_Form.PTCampaigns_Form_Name.txtInner.EmbeddableTextBoxWithUIPermissions;
  txtName.Click();
  txtName.SetText(CampaignName);  
  parCampaignName = CampaignName;
  txtName.Keys("[Tab]");
  
}

function selectCampaignType()
{
  let ddCampaignType = Aliases.Aptify_Shell.FormTemplateForm.PTCampaigns_Form.PTCampaigns_Form_CampaignTypeID.LookupSearchCombo;
  ddCampaignType.ClickItem("Standard (Undefined)");
}

function selectCampaignStatus()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTCampaigns_Form.PTCampaigns_Form_CampaignStatusID.LookupSearchCombo.ClickItem("Draft");
  var txtcampaignCode = Aliases.Aptify_Shell.FormTemplateForm.PTCampaigns_Form.PTCampaigns_Form_CampaignCode.txtInner.Text.OleValue;     
  campaignCode = txtcampaignCode;
  
}

function setStartDate()
{
  let startDate = aqDateTime.Today();
  startDate = aqConvert.DateTimeToStr(startDate)
  let txtstartDate = Aliases.Aptify_Shell.FormTemplateForm.PTCampaigns_Form.PTCampaigns_Form_StartDate.txtInner;
  txtstartDate.SetText(startDate);
  txtstartDate.Keys("[Tab]");
  
  let startTime = aqDateTime.Time();
  Log.Message(startTime);
  Aliases.Aptify_Shell.FormTemplateForm.PTCampaigns_Form.PTCampaigns_Form_StartTime.innerDateTimePicker.wTime = startTime;
  beginTime = startTime;
}

function setEndDate()
{
  
  let EndDate = aqDateTime.AddDays(aqDateTime.Today(),4)
  let txtendDate = Aliases.Aptify_Shell.FormTemplateForm.PTCampaigns_Form.PTCampaigns_Form_EndDate.txtInner;
  txtendDate.SetText(EndDate);
  txtendDate.Keys("[Tab]");
  let endTime = aqDateTime.AddTime(aqDateTime.Today(),4,2,5,5);
  Aliases.Aptify_Shell.FormTemplateForm.PTCampaigns_Form.PTCampaigns_Form_EndTime.innerDateTimePicker.wTime = endTime;
}

function selectCampaignManager()
{
  let txtcampaignManager = Aliases.Aptify_Shell.FormTemplateForm.PTCampaigns_Form.PTCampaigns_Tabs.tabMain.PTCampaigns_Tabs_Comments.PTCampaigns_Tabs_Comments.PTCampaigns_Form_CampaignManagerRoleID.txtLink;
  txtcampaignManager.SetText("Sue Burch");
  txtcampaignManager.Keys("[Tab]");
}

function clickCampaign()
{
  //stepDefinations_ProductQualification.listView.DblClickItem("Campaigns", 0);
  //stepDefinations_ProductQualification.panel.viewContainer.enbBrowser.EntityBrowser_Fill_Panel.SplitContainer1.SplitterPanel.lvwMain.DblClickItem("All Campaigns", 0);
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.EntityBrowser.EntityBrowser_Fill_Panel.SplitContainer1.SplitterPanel.lvwMain.DblClickItem("Campaigns", 0);
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.enbBrowser.EntityBrowser_Fill_Panel.SplitContainer1.SplitterPanel.lvwMain.DblClickItem("All Campaigns", 0);

}
  
function clickNewButton()
{
  Delay(1000);
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(7, 14);
}


When("I create Campaign Record", function createCampaignRecord (){
  clickCampaign();
  clickNewButton();
  EnterName(CampaignName);
  selectCampaignType();
  selectCampaignStatus();
  setEndDate();
  setStartDate();
  selectCampaignManager();
});

//ProductQualification


When("I click on All Promotions and Mailing List", function clickAllPromotionMailingList (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.EntityBrowser.EntityBrowser_Fill_Panel.SplitContainer1.SplitterPanel.lvwMain.DblClickItem("Promotion and Mailing Lists");
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.enbBrowser.EntityBrowser_Fill_Panel.SplitContainer1.SplitterPanel.lvwMain.DblClickItem("All Promotions & Mailing list");
});

When("I click on New button in the toolbar", function clickNewButtonInTheToolBar (){
  Delay(1000);
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(7, 14);
});
 
When("I enter abbreviation to the promotion code", function enterPromotionCodefromPromotions (){
  let txtCode = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_Form_Code.txtInner.EmbeddableTextBoxWithUIPermissions;
  txtCode.Click();
  txtCode.SetText(code);
  txtCode.Keys("[Tab]");
});

When("I enter short description of the code in Name", function enterShortDescriptionName (){
  let txtName = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_Form_Name.txtInner;
  txtName.Click();
  txtName.SetText(descriptionName);
  txtName.Keys("[Tab]");
});

When("I enter full description of the code in Description {arg}", function enterFullDescription(description){
  let txtDescription = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_Form_Description.txtInner;
  txtDescription.Click();
  txtDescription.Keys(description);
});

When("I check the radio button Promotions", function checkRadioBtnPromotions (){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_Form_MailingPromoListGroupedOptions.Promotions.ClickButton();
});

Given("I check the checkbox Qualification List", function checkCheckboxQualificationList (){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_Form_IsQualificationList.chkInternal.ClickButton();
});

Given("I check the checkbox Product List", function checkCheckboxProductList (){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_Form_IsProductQualificationList.chkInternal.wState = cbChecked;
});

Given("I select multiple products name {arg} , {arg} , {arg}", function selectMultipleProducts (product1, product2, product3){
  let ddProduct = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_Products_Tab.PTPromotionLists_Products_Tab.PTPromotionLists_Products_Tab_ProductID.txtLink;
  ddProduct.Click();
  ddProduct.SetText(product1);
  ddProduct.Keys("[Tab]");
  let splitContainer = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1;
  let radGridViewProducts = splitContainer.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  radGridViewProducts.ClickCell(1,0);
  let panel = splitContainer.SplitterPanel2.searchParameters.radPanelParams.switchPanel;
  let button = panel.selectButton;
  button.ClickButton();
  let textBox = splitContainer.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  textBox.Click();
  
  textBox.SetText(product2);
  let button2 = panel.searchButton;
  button2.ClickButton();
  radGridViewProducts.ClickCell(0,0);
  button.ClickButton();
  textBox.Keys("^a [Clear]");
  
  textBox.SetText(product3);
  button2.ClickButton();
  radGridViewProducts.ClickCell(0,0);
  button.ClickButton();
  panel.okButton.ClickButton();
});

Given("I enter Quantity {arg}", function enterQuantity (quantity){
  let txtQuantity = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_Products_Tab.PTPromotionLists_Products_Tab.PTPromotionLists_Products_Tab_QuickQuantity.txtInner;
  txtQuantity.Click();
  txtQuantity.EmbeddableTextBoxWithUIPermissions.SetText(quantity);
});

Given("I click on ADD button", function clickADDBtn (){
  let btnAdd = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_Products_Tab.PTPromotionLists_Products_Tab.PTPromotionLists_Products_Tab_Active_Button_1;
  btnAdd.Click();
});


Then("Title as {arg},{arg},{arg} should be displayed under list", function checkpointTitle (parProd1, parProd2, parProd3){
  let clmTitle = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_Products_Tab.PTPromotionLists_Products_Tab.PTPromotionLists_Products_Tab_Sub_Type_Control_1.AptifyControlBase_Fill_Panel.flexSubType;
  let Product1 = clmTitle.get_Item(1, 4).OleValue;
  let Product2 = clmTitle.get_Item(2, 4).OleValue;
  let Product3 = clmTitle.get_Item(3, 4).OleValue;
  
  if(aqObject.CompareProperty(Product1, cmpEqual, parProd1, true, 3))
  {
    Log.Checkpoint("First Title display under list")
  }
  else{
  Log.Error("Display title under list has been distinct");
  }
  
  
  if(aqObject.CompareProperty(Product2, cmpEqual, parProd2, true, 3))
  {
    Log.Checkpoint("second Title display under list")
  }
  else{
  Log.Error("Display title under list has been distinct");
  }
  
  
  if(aqObject.CompareProperty(Product3, cmpEqual, parProd3, true, 3))
  {
    Log.Checkpoint("Third Title display under list")
  }
  else{
  Log.Error("Display title under list has been distinct");
  }
  
});

Then("Product List checkbox should be disabled from Product Qualification List", function checkpointProductListCheckbox (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_Form_IsProductQualificationList.chkInternal, "Enabled", cmpEqual, false);
  Delay(1000);
});

Then("I click Product Classifications tab", function clickTabProductClassifications (){
  let tabProductClassifications = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain;
  tabProductClassifications.ClickTab("Product Classifications");
});

Then("I check the checkbox Product Classification List", function checkCheckboxProductClassifications (){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_Form_IsProductClassificationQualificationList.chkInternal.wState = cbChecked;
});

Then("I open wizard Promotion List Product Codes Record", function openProductCodeRecord (){
  let wizPromotionList = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_ProductClassifications_Tab.PTPromotionLists_ProductClassifications_Tab.PTPromotionLists_ProductClassifications_Tab_Sub_Type_Control_1.zAptifyControlBase_Toolbars_Dock_Area_Top;
  wizPromotionList.ClickItem("SubType|New");
});

Then("I enter Classification Type from Promotion List {arg}", function enterClassificationTypePromotionList(classificationType){
  let ddClassificationType = Aliases.Aptify_Shell.SubTypeTemplateForm.PTPromotionListProductCodes_Form.PTPromotionListProductCodes_Tabs.tabMain.PTPromotionListProductCodes_Tabs_General.PTPromotionListProductCodes_Tabs_General.PTPromotionListProductCodes_Tabs_General_ProductCodeTypeID.LookupSearchCombo.EmbeddableTextBoxWithUIPermissions;
  ddClassificationType.Click();
  ddClassificationType.SetText(classificationType);
  ddClassificationType.Keys("[Tab]");
});

Then("I enter Classification Code {arg}", function enterClassificationCode (classificationCode){
  let ddClassificationCode = Aliases.Aptify_Shell.SubTypeTemplateForm.PTPromotionListProductCodes_Form.PTPromotionListProductCodes_Tabs.tabMain.PTPromotionListProductCodes_Tabs_General.PTPromotionListProductCodes_Tabs_General.PTPromotionListProductCodes_Tabs_General_LookupCodeRecordID.LookupSearchCombo;
  ddClassificationCode.Click();
  ddClassificationCode.EmbeddableTextBoxWithUIPermissions.SetText(classificationCode);
  ddClassificationCode.EmbeddableTextBoxWithUIPermissions.Keys("[Tab]");
});

Then("I enter Offer Definition {arg}", function enterOfferDefinitionInPromotion (offerDefinition){
  let ddOfferDefinition = Aliases.Aptify_Shell.SubTypeTemplateForm.PTPromotionListProductCodes_Form.PTPromotionListProductCodes_Tabs.tabMain.PTPromotionListProductCodes_Tabs_General.PTPromotionListProductCodes_Tabs_General.PTPromotionListProductCodes_Tabs_General_OfferDefinitionID.LookupSearchCombo;
  ddOfferDefinition.ClickItem(offerDefinition);
  ddOfferDefinition.Keys("[Tab]");
  
});

Then("I click on Ok button", function clickOKBtn (){
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
});

Then("Classification Type as {arg} and Classification Code as {arg} should be displayed under list", function checkpointClassificationCodeAndDescription (parType, parDescription){
  let clmProductClassification = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_ProductClassifications_Tab.PTPromotionLists_ProductClassifications_Tab.PTPromotionLists_ProductClassifications_Tab_Sub_Type_Control_1.AptifyControlBase_Fill_Panel.flexSubType;
  let clmClassificationType = clmProductClassification.get_Item(1, 2).OleValue;
  let clmClassificationDescription = clmProductClassification.get_Item(1, 3).OleValue;
  Log.Message(aqString.Compare(clmClassificationDescription,parDescription,true));
  
  if(aqObject.CompareProperty(clmClassificationDescription, cmpEqual, parDescription, true, 3))
  {
    Log.Checkpoint("Classification code has been display under list")
  }
  else{
  Log.Error("Classification code is not display under list");
  }
  
  Log.Message(aqString.Compare(clmClassificationType,parType,true));
  
  if(aqObject.CompareProperty(clmClassificationType, cmpEqual, parType, true, 3))
  {
    Log.Checkpoint("Classification type has been display under list")
  }
  else{
  Log.Error("Classification type is not display under list");
  }
  
  Delay(2000);
});

Then("Product Classification List checkbox should be disabled from Product qualification List", function checkpointProdClassificationList (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_Form_IsProductClassificationQualificationList.chkInternal, "Enabled", cmpEqual, false);
  Delay(1000);
});

Then("I click on Product Organizations", function clickProductOrganizations (){
  let tabProductOrganizations = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain;
  tabProductOrganizations.ClickTab("Product Organizations");
});

Then("I check the checkbox Organisation List", function checkCheckboxOrganizationList (){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_Form_IsProductOrganizationQualificationList.chkInternal.wState = cbChecked;
});

Then("I check the checkbox Streamline Distribution", function checkboxStreamLineDistribution (){
  let radDropDownList = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_Organizations_Tab.PTPromotionLists_Organizations_Tab.PTPromotionLists_Organizations_Tab_Organizations.dropDownMultiSelect;
  radDropDownList.Click();
  Aliases.Aptify_Shell.DropDownPopupForm.treeInner.CheckItem("Streamline Distribution", true);
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_Organizations_Tab.PTPromotionLists_Organizations_Tab.PTPromotionLists_Organizations_Tab_Group_Box_1.MainGroupBox.Click();
});

Then("I click on ADD button from Product Qualification", function ClickAddBtnFromProdQualification (){
  let btnAdd = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_Organizations_Tab.PTPromotionLists_Organizations_Tab.PTPromotionLists_Organizations_Tab_Active_Button_1;
  btnAdd.Click();
});

Then("List of Organization Name as {arg} ,{arg} and  should be displayed", function checkpointOrganizationName (parOrganization1, parOrganization2){
  let clmProductOrganization = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_Organizations_Tab.PTPromotionLists_Organizations_Tab.PTPromotionLists_Organizations_Tab_Sub_Type_Control_1.AptifyControlBase_Fill_Panel.flexSubType;
  let clmOrganizationName = clmProductOrganization.get_Item(1, 2).OleValue;
  let clmOrganizationName1 = clmProductOrganization.get_Item(3, 2).OleValue;
  Log.Message(aqString.Compare(clmOrganizationName,parOrganization1,true));
  
  if(aqObject.CompareProperty(clmOrganizationName, cmpEqual, parOrganization1, true, 3))
  {
    Log.Checkpoint("Organization name has been display under list")
  }
  else{
  Log.Error("Organization name is not display under list");
  }
  
  
  Log.Message(aqString.Compare(clmOrganizationName1,parOrganization2,true));
  
  if(aqObject.CompareProperty(clmOrganizationName1, cmpEqual, parOrganization2, true, 3))
  {
    Log.Checkpoint("Organization name has been display under list")
  }
  else{
  Log.Error("Organization name is not display under list");
  }
  
  Delay(3000);
});

Then("Organization List checkbox should be disabled from Product Qualification List", function checkpointOrganizationListDisabled (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_Form_IsProductOrganizationQualificationList.chkInternal, "Enabled", cmpEqual, false);
  Delay(1000);
});

Then("I click on Save record and close the form button", function (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
});

Then("Code and Name should be displayed under All Promotions_Mailing List", function checkpointCodeAndName (){
  let radGridViewAllPromotionList = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let RowCount = radGridViewAllPromotionList.wRowCount;
  let successCount=0;
  for(let i =0;i<RowCount;i++)
  {
    
    let clmCode = radGridViewAllPromotionList.wValue(i,1).OleValue;
    let clmName = radGridViewAllPromotionList.wValue(i,2).OleValue;
    if(clmCode !=code && clmName!=descriptionName)
    {
      successCount++;
    }
    }
    if(successCount == RowCount-1)
    {
      Log.Checkpoint("Same Name/Code has been display under all promotions mailing list");
    }
     else
    {
      Log.Error("Different Name/Code has been display under all promotions mailing list");
    }
});


Given("I check the checkbox Offer List", function checkOfferList (){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_Form_IsProductOfferList.chkInternal.wState = cbChecked;
});

Given("I enter Offer Definition {arg}", function selectOfferDefinition (parOfferDefinition){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_ListUsage_PromotionLists_Tab.PTPromotionLists_Form_PT_Lookup_Search_Box_1.LookupSearchCombo.ClickItem(parOfferDefinition);
});


//SeedList



When("I check the radio button Mailing", function checkRadioBtnMailing (){
  let btnMailing = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_Form_MailingPromoListGroupedOptions.Mailing;
  btnMailing.ClickButton();
});

When("I check the radio button Seed List under Mailing Lists tab", function checkRadioBtnSeedList (){
  let tabMailingLists = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain;
  tabMailingLists.ClickTab("Mailing Lists");
  let btnSeedList = tabMailingLists.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab_MailingOptions.Seed_List;
  btnSeedList.ClickButton();
});

When("I check Customer List checkbox from customer criteria", function checkCustomerListCheckbox (){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab_MailingCustomerList.chkInternal.wState = cbChecked;
});



When("I select multiple Customers Name {arg} , {arg} , {arg}", function selectCustomerNames(customer1, customer2, customer3){
  let ddCustomer = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_Customers_Tab.PTPromotionLists_Customers_Tab.PTPromotionLists_Customers_Tab_QuickCustomerRoleID.txtLink;
  ddCustomer.Click();
  ddCustomer.SetText(customer1);
  ddCustomer.Keys("[Tab]");
  let splitContainer = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1;
  let radGridViewCustomers = splitContainer.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  radGridViewCustomers.ClickCell(0,0);
  let panel = splitContainer.SplitterPanel2.searchParameters.radPanelParams.switchPanel;
  let button = panel.selectButton;
  button.ClickButton();
  let textBox = splitContainer.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  textBox.Keys("a^ [Clear]");
  textBox.SetText(customer2);
  let button2 = panel.searchButton;
  button2.ClickButton();
  radGridViewCustomers.ClickCell(0,0);
  button.ClickButton();
  textBox.Keys("a^ [Clear]");
  textBox.SetText(customer3);
  button2.ClickButton();
  radGridViewCustomers.ClickCell(0,0);
  button.ClickButton();
  panel.okButton.ClickButton();
});

Then("Customer Name as {arg}, {arg}, {arg} should be displayed under Message Box", function checkpointCustomersNameUnderMessageBox (parCustomer1, parCustomer2, parCustomer3){
  Delay(5000);
  let clmCustomerName = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_Customers_Tab.PTPromotionLists_Customers_Tab.PTPromotionLists_Customers_Tab_SubType_PromoListCustomer.AptifyControlBase_Fill_Panel.flexSubType;
  let Customer1 = clmCustomerName.get_Item(1, 2).OleValue;
  let Customer2 = clmCustomerName.get_Item(2, 2).OleValue;
  let Customer3 = clmCustomerName.get_Item(3, 2).OleValue;
  
  if(aqObject.CompareProperty(Customer1, cmpEqual, parCustomer1, true, 3))
  {
    Log.Checkpoint("First customer name has been display under message box")
  }
  else{
  Log.Error("Different customer name has been display under message box");
  }
  

  if(aqObject.CompareProperty(Customer2, cmpEqual, parCustomer2, true, 3))
  {
    Log.Checkpoint("Second customer name has been display under message box")
  }
  else{
  Log.Error("Different customer name has been display under message box");
  }
  

  if(aqObject.CompareProperty(Customer3, cmpEqual, parCustomer3, true, 3))
  {
    Log.Checkpoint("Third customer name has been display under message box")
  }
  else{
  Log.Error("Different customer name has been display under message box");
  }
  
});

Then("Customer List Checkbox should be disabled", function checkpointCustomerListCheckbox (){
  Delay(3000);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab_MailingCustomerList.chkInternal, "Enabled", cmpEqual, false);
});

Then("Product List,Territory List and Audience List checkboxes should be disabled", function checkpointCheckboxesDisabled (){
  Delay(3000);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab_MailingTerritoryList.chkInternal, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab_IsAudienceList.chkInternal, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab_MailingProductQualificationList.chkInternal, "Enabled", cmpEqual, false);
});

Then("Seed List,Customer Mailing radio buttons should be disabled", function checkpointRadioBtnDisabled (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab_MailingOptions.Seed_List, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_ListTypeTabs.tabMain.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab.PTPromotionLists_ListUsage_MailingList_Tab_MailingOptions.Customer_Mailing, "Enabled", cmpEqual, false);
});

When("I click on ADD button", function clickAddBtn(){
  let btnAdd = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionLists_Form.PTPromotionLists_TabControl_Lists.tabMain.PTPromotionLists_Customers_Tab.PTPromotionLists_Customers_Tab.PTPromotionLists_Customers_Tab_ActiveButton_PromoListCustomers;
  btnAdd.Click();
});


//SpecificProduct


When("I click on Promotions\\/Mailings", function clickPromotionsAndmailings (){
  Aliases.Aptify_Shell.FormTemplateForm.PTCampaigns_Form.PTCampaigns_Tabs.tabMain.ClickTab("Promotions/Mailings");
});

When("I click on Create New Promotion", function clickCreateNewPromotionfromTreeView (){
  let treeViewExtensionNewPromotion = Aliases.Aptify_Shell.FormTemplateForm.PTCampaigns_Form.PTCampaigns_Tabs.tabMain.PTCampaigns_Tabs_Promotions.PTCampaigns_Tabs_Promotions.PTCampaigns_Form_CampaignTreeViewStandard.splitContainer1.SplitterPanel.TreeViewControl;
  treeViewExtensionNewPromotion.ClickItem("|[0]");
  treeViewExtensionNewPromotion.ClickItemR("|[0]");
  treeViewExtensionNewPromotion.Keys("[Down][Down][Enter]");
});

When("I select radio button Start New Promotion", function selectRadioBtnStartNewPromotion (){
  let promotionCreationRouteForm = Aliases.Aptify_Shell.PromotionCreationRoutes.PTPromotions_PromotionCreationRoutes;
  promotionCreationRouteForm.PTPromotions_PromotionCreationRoutes_GroupRouteOptions.Start_a_new_promotion.ClickButton();
  promotionCreationRouteForm.PTPromotions_PromotionCreationRoutes_ActiveButtonOK.Click();
});


When("I enter name in New Promotion Record", function enterNameInPromotionRecord (){
  let aptifyTextBoxNameNewPromotion = Aliases.Aptify_Shell.FormTemplateForm.PTPromotions_Form.PTPromotions_Form_TopArea.PTPromotions_Form_Name.txtInner;
  aptifyTextBoxNameNewPromotion.SetText(descriptionName);
  
});

When("I select Organisation {arg}", function selectOrganizationFromPromotions (organisation){
  let txtOrganisation = Aliases.Aptify_Shell.FormTemplateForm.PTPromotions_Form.PTPromotions_Form_TopArea.PTPromotions_Form_TopArea_OrganizationID.LookupSearchCombo;
  txtOrganisation.ClickItem(organisation)
  txtOrganisation.Keys("[Tab]");
});

When("I uncheck the checkbox Allow Backorders", function uncheckAllowBackorders (){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotions_Form.PTPromotions_Form_TabControl.tabMain.PTPromotions_Form_Tabs_Details.PTPromotions_Form_Tabs_Details.PTPromotions_Form_Tabs_Detals_AllowBackorders.chkInternal.wState = cbUnchecked;
});

When("I click on Qualification", function clickQualificationTab (){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotions_Form.PTPromotions_Form_TabControl.tabMain.ClickTab("Qualification");
});

When("I check the checkbox Product", function checkCheckboxProductFromCPromotions (){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotions_Form.PTPromotions_Form_TabControl.tabMain.PTPromotions_Form_Tabs_Qualification.PTPromotions_Form_Tabs_Qualification.PTPromotions_Form_Tabs_Qualification_ProductQualification.chkInternal.wState = cbChecked;
});


When("I enter Minimum Purchase Quantity {arg}", function enterMinimumPurchaseQty (minPurchaseQty){
  let txtMinPurchaseQuantity = Aliases.Aptify_Shell.FormTemplateForm.PTPromotions_Form.PTPromotions_Form_TabControl.tabMain.PTPromotions_Form_Tabs_Qualification.PTPromotions_Form_Tabs_Qualification.PTPromotions_Form_Tabs_QualificationTabControl.tabMain.PTPromotions_Form_QualifiersTabs_Products.PTPromotions_Form_QualifiersTabs_ProductsTemplate.PTPromotions_Form_Tabs_Qualification_MinimumPurchaseQuantity.txtInner;
  txtMinPurchaseQuantity.SetText(minPurchaseQty);
});

When("I click on binocular icon in the left window box", function clickBinocularIconInLeftbox (){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotions_Form.PTPromotions_Form_TabControl.tabMain.PTPromotions_Form_Tabs_Qualification.PTPromotions_Form_Tabs_Qualification.PTPromotions_Form_Tabs_QualificationTabControl.tabMain.PTPromotions_Form_QualifiersTabs_Products.PTPromotions_Form_QualifiersTabs_ProductsTemplate.PTPromotions_Form_Tabs_Qualification_ProductQualGroupingControl.splitContainer.SplitterPanel.treeCommandBar.Click(19, 19);
});

When("I click on Search for Qualification Lists", function searchQualificationList (){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotions_Form.PTPromotions_Form_TabControl.tabMain.PTPromotions_Form_Tabs_Qualification.PTPromotions_Form_Tabs_Qualification.PTPromotions_Form_Tabs_QualificationTabControl.tabMain.PTPromotions_Form_QualifiersTabs_Products.PTPromotions_Form_QualifiersTabs_ProductsTemplate.PTPromotions_Form_Tabs_Qualification_ProductQualGroupingControl.splitContainer.SplitterPanel2.panelBehindDetail.panel4Detail.PTPromotions_Qualification_GroupControl_Search.PTPromotions_Qualification_GroupControl_Search_QualificationSearchBox.searchButton.ClickButton();
});

When("I drag and drop the list on the node in left side frame box", function dragAndDropList (){
  let radGridViewDragAndDrop = Aliases.Aptify_Shell.FormTemplateForm.PTPromotions_Form.PTPromotions_Form_TabControl.tabMain.PTPromotions_Form_Tabs_Qualification.PTPromotions_Form_Tabs_Qualification.PTPromotions_Form_Tabs_QualificationTabControl.tabMain.PTPromotions_Form_QualifiersTabs_Products.PTPromotions_Form_QualifiersTabs_ProductsTemplate.PTPromotions_Form_Tabs_Qualification_ProductQualGroupingControl.splitContainer.SplitterPanel2.panelBehindDetail.panel4Detail.PTPromotions_Qualification_GroupControl_Search.PTPromotions_Qualification_GroupControl_Search_QualificationListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  radGridViewDragAndDrop.ClickCell(0, "Name");
  radGridViewDragAndDrop.Drag(73, 28, -190, -51);
});

When("I click on the added list to see the collection of products", function clickAddedList (){
  Aliases.Aptify_Shell.FormTemplateForm.PTPromotions_Form.PTPromotions_Form_TabControl.tabMain.PTPromotions_Form_Tabs_Qualification.PTPromotions_Form_Tabs_Qualification.PTPromotions_Form_Tabs_QualificationTabControl.tabMain.PTPromotions_Form_QualifiersTabs_Products.PTPromotions_Form_QualifiersTabs_ProductsTemplate.PTPromotions_Form_Tabs_Qualification_ProductQualGroupingControl.splitContainer.SplitterPanel.panel4Tree.radTreeView.ClickItem("Qualification Lists|Qualification List Product");
});

When("I click on Save Record and close the form button in the toolbar to close the promotions record", function (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
});

When("I click on Save Record and close the form button in the toolbar to close the Campaigns record", function (){
   Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
});

When("I click on All Promotions View", function clickOnAllPromotionsView (){
  let ultraTreeAllPromotionsView = Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea2.DockableWindow2.aptifyTree.tvwMain;
  ultraTreeAllPromotionsView.ExpandItem("advance> Home|Sales & Marketing|Promotions");
  ultraTreeAllPromotionsView.DblClickItem("advance> Home|Sales & Marketing|Promotions|All Promotions");
});
 
Then("Promotions record should be saved and displayed under All promotions view with Promotion Name", function checkpointPromotionName (){
  let radGridViewPromotionName = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let rowcount = radGridViewPromotionName.wRowCount;
  let successCount=0;
  for(let i =0;i<rowcount;i++)
  {
  let clmName = radGridViewPromotionName.wValue(i, "Name").OleValue;
  if(clmName != descriptionName)
  {
     successCount++;
  }
  }
    if(successCount == rowcount-1)
    {
      Log.Checkpoint("Same Promotion Name has been display under all promotions list");
    }
     else
    {
      Log.Error("Different Promotion Name has been display under all promotions list");
    }
});

Then("I click on All Campaigns View", function clickOnAllCampaignsView (){
  let ultraTreeAllCampaignView = Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea2.DockableWindow2.aptifyTree.tvwMain;
  ultraTreeAllCampaignView.ExpandItem("advance> Home|Sales & Marketing|Campaigns");
  ultraTreeAllCampaignView.DblClickItem("advance> Home|Sales & Marketing|Campaigns|All Campaigns");
});


Then("Campaign Record should be saved and displayed under All Campaign records view with Campaign Name", function checkpointCampaignsName (){
  let radGridViewCampaignName = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let Rowcount = radGridViewCampaignName.wRowCount;
  let successCount=0;
  for(let i =0;i<Rowcount;i++)
  {
  let clmName = radGridViewCampaignName.wValue(i,"Name").OleValue;
  if(clmName != CampaignName)
  {
     successCount++;
  }
  }
    if(successCount == Rowcount-1)
    {
      Log.Checkpoint("Same Campaign Name has been display under all Campaigns list");
    }
     else
    {
      Log.Error("Different Campaign Name has been display under all Campaigns list");
    }
});


When("I click on Save Record button", function clickSaveRecordForm (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record");
});


function retrieveQty(){
  let availableQty = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 3).OleValue;
  availableQuantity = availableQty;
  let physicalQty = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 2).OleValue;
  physicalQuantity = physicalQty;
}


Then("I click on Save Record and Close Form button", function (){
  Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("datEntity").WinFormsObject("AptifyDataControl_Fill_Panel").WinFormsObject("_AptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top").ClickItem("Data Form|Save Record and Close Form");
});

Then("I enter Name from New Promotion Offers Record", function enterNameOffersRecord (){
  let NameOffersRecord = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionOffers_View.PTPromotionOffers_Form_Name.txtInner;
  NameOffersRecord.SetText(descriptionName);
});

Then("I select Qualification parent", function (){
  let ultraComboQualificationParent = Aliases.Aptify_Shell.FormTemplateForm.PTPromotionOffers_View.PTPromotionOffers_Form_TabControl.tabMain.PTPromotionOffers_Form_Details_Tab.PTPromotionOffers_Form_DetailsTabTemplate.PTPromotionOffers_Form_QualificationParentID.LookupSearchCombo;
  ultraComboQualificationParent.ClickItem(descriptionName);
});


