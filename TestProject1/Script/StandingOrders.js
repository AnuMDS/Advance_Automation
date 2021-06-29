var CreatingProduct = require("CreatingProduct");
var productSeries, author, productType, imprint, audienceType, classificationType, standingOrderRef, docInvoice, TotalvalueOnCheckout, PoRef;
var productSubType, imprint, productName, backorderValue, supplyValue, backOrderedProduct, suppliedProduct, availableInventory;
var despatchCharge, documentReference1, documentReference2, company, product1SupplyValue, product2SupplyValue, totalOrderValue
var customer,productTitle,txtProductName,documentRef,customerName;
var productVersionCode , productVersionDescription
var sFolder = "\\C:\\RavAuto\\Invoice\\";

function handleProductsGrid(){
  let gridProducts = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }
}


When("I click on Criteria Tab", function clickCriteriaTab(){
  if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.Exists){
    Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.pagetabCriteria.Click();
   }
  else{
    Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.pagetabCriteria.Click();
  }  
});

When("I select Interest Classification Type {arg}", function selectInterestClassificationType(classificationType){
  let ddClassificationType = Aliases.Aptify_Shell.SubTypeTemplateForm.PTInterestClassifications_Form.PTInterestClassifications_Tabs.tabMain.PTInterestClassifications_Tabs_General.PTInterestClassifications_Tabs_General.PTInterestClassifications_Tabs_General_ProductCodeTypes.LookupSearchCombo;
  
  ddClassificationType.Click();
  ddClassificationType.EmbeddableTextBoxWithUIPermissions.Keys(classificationType);
  ddClassificationType.Keys("[Tab]");
});


When("I enter date in standing order available date and change the date set in previous step", function (){
  var date = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment_StandingOrderAvailableDate.txtInner;
  date.Keys(aqDateTime.AddDays(aqDateTime.Today(),6));
  enterDate = aqDateTime.AddDays(aqDateTime.Today(),6);
  date.keys("[Tab]");
  
});



Then("history should be correctly display", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.EntityRecordHistoryForm, "WndCaption", cmpContains, "History of Products Record ID");
  
  let windowTitle =  aqObject.GetPropertyValue(Aliases.Aptify_Shell.EntityRecordHistoryForm, "WndCaption");
  let productTitleDisplay = ( aqString.SubString(windowTitle , 38, 9) ); 
  
  if(aqObject.CompareProperty(productTitleDisplay, cmpEqual,productTitle))
  {
   Log.Checkpoint("History should be correctly display for newly craeted product")
  }
  else{
    Log.Error("history is not display for newly created product")
  }
  
  var totalrowcountHistoryOfProducts =  Aliases.Aptify_Shell.EntityRecordHistoryForm.ugHistory.wRowCount;
  var toolbarHistory = Aliases.Aptify_Shell.EntityRecordHistoryForm.ugHistory.wValue(totalrowcountHistoryOfProducts-1,"Changes")
   
  
  if(aqObject.CompareProperty(toolbarHistory, cmpEqual,"Record created"))
  {
   Log.Checkpoint("History should be correctly display")
  }
  else{
    Log.Error("history is not display")
  }
  
});


When("I open a company information panel for {arg}", function(customerName){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton11.Click();
 
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText(customerName);
  customer = customerName;
  
  clickSearchBtn();
  handleProductsGrid();
});

function clickSearchBtn(){
  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
}

When("I click on Profile Tab", function clickProfileTab(){
  if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.Exists){
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.ClickTab("Profile");
   }
  else{
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.ClickTab("Profile");
  }
});

When("I click on Marketing Tab", function clickMarketingTab(){
   if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.Exists){
     Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_OTC_Companies_ProfileTab.PT_OTC_Companies_ProfileTab.tabMain.ClickTab("Marketing");
   }
   else{
     Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PT_OTC_Persons_Profile.PT_OTC_Persons_Profile.tabMain.ClickTab("Marketing");
   }
});

When("I click on Interests Tab", function clickInterestsTab(){
   if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.Exists){
     Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_OTC_Companies_ProfileTab.PT_OTC_Companies_ProfileTab.tabMain.PTCompanies_Marketing_Tab.PTCompanies_Marketing_Tab.PTCompanies_Marketing_TabControl.tabMain.ClickTab("Interests");
   }
   else{
     Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PT_OTC_Persons_Profile.PT_OTC_Persons_Profile.tabMain.PTPersons_Tabs_Marketing.Persons_PTPersons_Tabs_Marketing.PTPersons_Tabs_Marketing_TabGroup.tabMain.ClickTab("Interests");
   }
});

When("I click on New to open New Companies Interests Record", function openNewInterestRecord(){
  if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.Exists){
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_OTC_Companies_ProfileTab.PT_OTC_Companies_ProfileTab.tabMain.PTCompanies_Marketing_Tab.PTCompanies_Marketing_Tab.PTCompanies_Marketing_TabControl.tabMain.WinFormsObject("PTCompanies.Marketing.Interests.Tab").WinFormsObject("PTCompanies.Marketing.Interests.Tab").WinFormsObject("PTCompanies.Marketing.Interests.Tab.CompanyInterestsView").WinFormsObject("outerPanel").WinFormsObject("previewSplitContainer").WinFormsObject("SplitterPanel", "").WinFormsObject("radCommandBar1").Click(16, 17);
  }
  else{
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PT_OTC_Persons_Profile.PT_OTC_Persons_Profile.tabMain.PTPersons_Tabs_Marketing.Persons_PTPersons_Tabs_Marketing.PTPersons_Tabs_Marketing_TabGroup.tabMain.WinFormsObject("PTPersons.Marketing.Interests.Tab").WinFormsObject("PTPersons.Marketing.Interests.Tab").WinFormsObject("PTPersons.Marketing.Interests.Tab.PersonInterestsView").WinFormsObject("outerPanel").WinFormsObject("previewSplitContainer").WinFormsObject("SplitterPanel", "").WinFormsObject("radCommandBar1").Click(8, 13);
  }
});

When("I select Interest Type {arg}", function selectInterestType(interestType){ 
  if(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.Exists){
    let txtInterestTypeCompany = Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General_InterestTypeID.LookupSearchCombo;
    txtInterestTypeCompany.ClickItem(interestType);
    txtInterestTypeCompany.Keys("[Tab]");
  }
  else{
    let txtInterestTypePerson = Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General_InterestTypeID.LookupSearchCombo;
    txtInterestTypePerson.ClickItem(interestType);
    txtInterestTypePerson.Keys("[Tab]");
  }
});

When("I check the Always Supply checkbox", function checkAlwaysSupplyCheckbox(){
  if(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.Exists){
   Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General_AlwaysSupply.chkInternal.wState = cbChecked;
  }
  else{
    Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General_AlwaysSupply.chkInternal.wState = cbChecked;
  }
});

When("I enter Customer Reference {arg}", function enterCustomerReference(customerReference){
  if(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.Exists){
    let txtCustomerReference = Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_CustomerReference.txtInner;
    
    txtCustomerReference.SetText(customerReference);    
  }
  else{
    let txtCustomerReference = Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_CustomerReference.txtInner;
    
    txtCustomerReference.SetText(customerReference);
  }
});

When("I enter Valid From Today's date", function enterTodaysDate(){
  if(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.Exists){
    let dateFrom = Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_ValidFromDate.txtInner;
    
    dateFrom.SetText(aqDateTime.Today());
  }
  else{
    let dateFrom = Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_ValidFromDate.txtInner;

    dateFrom.SetText(aqDateTime.Today());    
  }
});

When("I enter Product Series {arg}", function enterProductSeries(productSeriesPar){
  if(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.Exists){
    let ddProductSeries = Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_ProductSeriesID.txtLink;
    ddProductSeries.SetText(productSeriesPar);
    productSeries = productSeriesPar;
    ddProductSeries.Keys("[Tab]");
  }
  else{
    let ddProductSeries = Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria_ProductSeriesID.txtLink;
    ddProductSeries.SetText(productSeriesPar);
    productSeries = productSeriesPar;
    ddProductSeries.Keys("[Tab]");
  }
});

When("I click on General tab", function clickGeneralTab(){
  if(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.Exists){
    Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.pagetabGeneral.Click();  
  }
  else{
    Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.pagetabGeneral.Click();
  }
});

When("I click Save and Close Form", function (){
  retieveSORef();
  if(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.Exists){
    Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").PageTab("General").Click();
    Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("datEntity").WinFormsObject("AptifyDataControl_Fill_Panel").WinFormsObject("_AptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top").ToolBar("Toolbar").Button("Save Record and Close Form").Click();
  }
  else{
    Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTPersonInterests.Form").WinFormsObject("PTPersonInterests.Tabs").WinFormsObject("tabMain").PageTab("General").Click();
    Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("datEntity").WinFormsObject("AptifyDataControl_Fill_Panel").WinFormsObject("_AptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top").ToolBar("Toolbar").Button("Save Record and Close Form").Click();   
  }

});

function retieveSORef()
{  
  if(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.Exists){
    Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").PageTab("General").Click();
    Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("datEntity").WinFormsObject("AptifyDataControl_Fill_Panel").WinFormsObject("_AptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top").ToolBar("Toolbar").Button("Save Record").Click();
    let orderRef = Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General_StandingOrderReference.txtInner.get_Text();
    standingOrderRef = orderRef;
  }
  else{
    Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTPersonInterests.Form").WinFormsObject("PTPersonInterests.Tabs").WinFormsObject("tabMain").PageTab("General").Click();
    Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("datEntity").WinFormsObject("AptifyDataControl_Fill_Panel").WinFormsObject("_AptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top").ToolBar("Toolbar").Button("Save Record").Click();
    let orderRef = Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General_StandingOrderReference.txtInner.get_Text();
    standingOrderRef = orderRef;    
  }
}

When("I open the Series record", function openSeriesRecord(){
if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.Exists){
  let radGridView = Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PT.OTC.Companies").WinFormsObject("PT.OTC.Companies.Companies.TabControl").WinFormsObject("tabMain").WinFormsObject("PT.OTC.Companies.ProfileTab").WinFormsObject("PT.OTC.Companies.ProfileTab").WinFormsObject("tabMain").WinFormsObject("PTCompanies.Marketing.Tab").WinFormsObject("PTCompanies.Marketing.Tab").WinFormsObject("PTCompanies.Marketing.TabControl").WinFormsObject("tabMain").WinFormsObject("PTCompanies.Marketing.Interests.Tab").WinFormsObject("PTCompanies.Marketing.Interests.Tab").WinFormsObject("PTCompanies.Marketing.Interests.Tab.CompanyInterestsView").WinFormsObject("outerPanel").WinFormsObject("previewSplitContainer").WinFormsObject("SplitterPanel", "").WinFormsObject("panel4CaptionAndGrid").WinFormsObject("radGridView1");
  let records = radGridView.wRowCount;
  let i = 0;
  for(i;i<records;i++){
    let name = radGridView.wValue(i,5).OleValue;
    if(aqString.StrMatches("Ser:", name)){
      radGridView.DblClickRowIndicator(i);
    }
  }
}
else{
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PT_OTC_Persons_Profile.PT_OTC_Persons_Profile.tabMain.PTPersons_Tabs_Marketing.Persons_PTPersons_Tabs_Marketing.PTPersons_Tabs_Marketing_TabGroup.tabMain.WinFormsObject("PTPersons.Marketing.Interests.Tab").WinFormsObject("PTPersons.Marketing.Interests.Tab").WinFormsObject("PTPersons.Marketing.Interests.Tab.PersonInterestsView").WinFormsObject("outerPanel").WinFormsObject("previewSplitContainer").WinFormsObject("SplitterPanel", "").WinFormsObject("panel4CaptionAndGrid").WinFormsObject("radGridView1");
  let records = radGridView.wRowCount;
  let i = 0;
  for(i;i<records;i++){
    let name = radGridView.wValue(i,5).OleValue;
    if(aqString.StrMatches("Ser:", name)){
      radGridView.DblClickRowIndicator(i);
    }
  }  
}
});

Then("Name frame should display the product series starting with Ser:", function verifyNameField(){
  if(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.Exists){
    var name =  Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Name.txtInner.get_Text();
  }
  else{
    var name =  Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Name.txtInner.get_Text();
  }
  
   if((aqObject.CompareProperty(name, cmpContains, productSeries, true, 3))  &&  (aqObject.CompareProperty(name, cmpContains, "Ser:", true, 3))){
    Log.Checkpoint("Product Series displayed under Name frame is Correct");
    }
  else{
   Log.Error("Product Series displayed under Name frame is Incorrect");
   }
});


Then("I click Save and Close Form", function (){
  if(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.Exists){
    Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.pagetabGeneral.Click();  
  }
  else{
    Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.pagetabGeneral.Click();
  }
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
});

Then("I click on New to open New Companies Interests Record", function (){
  if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.Exists){
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_OTC_Companies_ProfileTab.PT_OTC_Companies_ProfileTab.tabMain.PTCompanies_Marketing_Tab.PTCompanies_Marketing_Tab.PTCompanies_Marketing_TabControl.tabMain.WinFormsObject("PTCompanies.Marketing.Interests.Tab").WinFormsObject("PTCompanies.Marketing.Interests.Tab").WinFormsObject("PTCompanies.Marketing.Interests.Tab.CompanyInterestsView").WinFormsObject("outerPanel").WinFormsObject("previewSplitContainer").WinFormsObject("SplitterPanel", "").WinFormsObject("radCommandBar1").Click(16, 17);
  }
  else{
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PT_OTC_Persons_Profile.PT_OTC_Persons_Profile.tabMain.PTPersons_Tabs_Marketing.Persons_PTPersons_Tabs_Marketing.PTPersons_Tabs_Marketing_TabGroup.tabMain.WinFormsObject("PTPersons.Marketing.Interests.Tab").WinFormsObject("PTPersons.Marketing.Interests.Tab").WinFormsObject("PTPersons.Marketing.Interests.Tab.PersonInterestsView").WinFormsObject("outerPanel").WinFormsObject("previewSplitContainer").WinFormsObject("SplitterPanel", "").WinFormsObject("radCommandBar1").Click(8, 13);
  }
});



Then("I click on Criteria Tab", function (){
  if(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.Exists){
    Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").ClickTab("Criteria");
  }
  else{
    Aliases.Aptify_Shell.FormTemplateForm.WinFormsObject("PTPersonInterests.Form").WinFormsObject("PTPersonInterests.Tabs").WinFormsObject("tabMain").ClickTab("Criteria");
  }
});

Then("I enter an Author {arg}", function enterAuthor(authorPar){
if(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.Exists){
  let txtAuthor = Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_AuthorID.txtLink;
  
  txtAuthor.SetText(authorPar);
  author = authorPar;
  txtAuthor.Keys("[Tab]");
} 
else{
  let txtAuthor = Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria_AuthorID.txtLink;
  
  txtAuthor.SetText(authorPar);
  author = authorPar;
  txtAuthor.Keys("[Tab]"); 
}
});

Then("I click on new Interest Classifications Record", function clickNewInterestClassificationsRecord(){
 if(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.Exists){ 
  Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_Sub_Type_Control_1.zAptifyControlBase_Toolbars_Dock_Area_Top.toolbar.buttonNew.ClickButton();
 }
 else{
  Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria_Sub_Type_Control_1.zAptifyControlBase_Toolbars_Dock_Area_Top.toolbar.buttonNew.ClickButton();
 }
  
});

Then("I select Interest Classification Type {arg}", function (classificationType){
  let ddClassificationType = Aliases.Aptify_Shell.SubTypeTemplateForm.PTInterestClassifications_Form.PTInterestClassifications_Tabs.tabMain.PTInterestClassifications_Tabs_General.PTInterestClassifications_Tabs_General.PTInterestClassifications_Tabs_General_ProductCodeTypes.LookupSearchCombo;
  
  ddClassificationType.Click();
  ddClassificationType.EmbeddableTextBoxWithUIPermissions.Keys(classificationType);
  ddClassificationType.Keys("[Tab]");
});

Then("I enter Interest Classification Code {arg}", function enterClassificationCode(classificationCode){
  let ddClassificationCode = Aliases.Aptify_Shell.SubTypeTemplateForm.PTInterestClassifications_Form.PTInterestClassifications_Tabs.tabMain.PTInterestClassifications_Tabs_General.PTInterestClassifications_Tabs_General.PTInterestClassifications_Tabs_General_LookupTree.LookupSearchCombo;
  
  ddClassificationCode.Click();
  ddClassificationCode.Keys(classificationCode);
  ddClassificationCode.Keys("[Tab]");
});

Then("I click Ok", function (){
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
});

Then("I open the Author record", function openAuthoreRecord(){
 if(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.Exists){  
  let radGridView = Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PT.OTC.Companies").WinFormsObject("PT.OTC.Companies.Companies.TabControl").WinFormsObject("tabMain").WinFormsObject("PT.OTC.Companies.ProfileTab").WinFormsObject("PT.OTC.Companies.ProfileTab").WinFormsObject("tabMain").WinFormsObject("PTCompanies.Marketing.Tab").WinFormsObject("PTCompanies.Marketing.Tab").WinFormsObject("PTCompanies.Marketing.TabControl").WinFormsObject("tabMain").WinFormsObject("PTCompanies.Marketing.Interests.Tab").WinFormsObject("PTCompanies.Marketing.Interests.Tab").WinFormsObject("PTCompanies.Marketing.Interests.Tab.CompanyInterestsView").WinFormsObject("outerPanel").WinFormsObject("previewSplitContainer").WinFormsObject("SplitterPanel", "").WinFormsObject("panel4CaptionAndGrid").WinFormsObject("radGridView1");
  let records = radGridView.wRowCount;
  let i = 0;
  for(i;i<records;i++){
    let name = radGridView.wValue(i,5).OleValue;
    if(aqString.StrMatches("Aut:", name)){
      radGridView.DblClickRowIndicator(i);
    }
  }
 }
 else{
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PT_OTC_Persons_Profile.PT_OTC_Persons_Profile.tabMain.PTPersons_Tabs_Marketing.Persons_PTPersons_Tabs_Marketing.PTPersons_Tabs_Marketing_TabGroup.tabMain.WinFormsObject("PTPersons.Marketing.Interests.Tab").WinFormsObject("PTPersons.Marketing.Interests.Tab").WinFormsObject("PTPersons.Marketing.Interests.Tab.PersonInterestsView").WinFormsObject("outerPanel").WinFormsObject("previewSplitContainer").WinFormsObject("SplitterPanel", "").WinFormsObject("panel4CaptionAndGrid").WinFormsObject("radGridView1");
  let records = radGridView.wRowCount;
  let i = 0;
  for(i;i<records;i++){
    let name = radGridView.wValue(i,5).OleValue;
    if(aqString.StrMatches("Aut:", name)){
      radGridView.DblClickRowIndicator(i);
    }
  }   
 }
});

Then("Name frame should display the author name starting with Aut:", function verifyNameFrame(){
  if(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.Exists){
    var name =  Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Name.txtInner.get_Text();
  }
  else{
    var name =  Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Name.txtInner.get_Text();
  }
 
  if((aqObject.CompareProperty(name, cmpContains, author, true, 3))  &&  (aqObject.CompareProperty(name, cmpContains, "Aut:", true, 3))){
    Log.Checkpoint("Author displayed under Name frame is Correct");
    }
  else{
   Log.Error("Author displayed under Name frame is Incorrect");
   }
});

When("I enter Standing Orders Quantity {arg}", function enterStandingOrderQty(qty){
  if(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.Exists){
    let txtQuantity = Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Quantity.txtInner;

    txtQuantity.SetText(qty);
  }
  else{
    let txtQuantity = Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Quantity.txtInner;

    txtQuantity.SetText(qty); 
  }
});

When("I click on Save Form", function (){
  if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.Exists){
    Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.pagetabCriteria.Click();
   }
  else{
    Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.pagetabCriteria.Click();
  }
  Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("datEntity").WinFormsObject("AptifyDataControl_Fill_Panel").WinFormsObject("_AptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top").ClickItem("Data Form|Save Record");
});


Then("I enter Standing Orders Quantity {arg}", function (qty){
  if(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.Exists){
    let txtQuantity = Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Quantity.txtInner;
 
    txtQuantity.SetText(qty);
  }
  else{
    let txtQuantity = Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Quantity.txtInner;

    txtQuantity.SetText(qty);   
  }
});


When("I enter Imprint {arg}", function enterImprint(imprintPar){
if(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.Exists){  
  let ddImprint = Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_OrganizationID.LookupSearchCombo;
  
  ddImprint.Click();
  ddImprint.ClickItem(imprintPar);
  imprint = imprintPar;
  ddImprint.Keys("[Tab]");
}
else{
   let ddImprint = Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria_OrganizationID.LookupSearchCombo;
  
  ddImprint.Click();
  ddImprint.ClickItem(imprintPar);
  imprint = imprintPar;
  ddImprint.Keys("[Tab]");
}
});


When("I enter Interest Classification Code {arg}", function (classificationCode){
  let ddClassificationCode = Aliases.Aptify_Shell.SubTypeTemplateForm.PTInterestClassifications_Form.PTInterestClassifications_Tabs.tabMain.PTInterestClassifications_Tabs_General.PTInterestClassifications_Tabs_General.PTInterestClassifications_Tabs_General_LookupCode.LookupSearchCombo;

  ddClassificationCode.Click();
  ddClassificationCode.Keys(classificationCode);
  ddClassificationCode.Keys("[Tab]");
  
  let classificationDescription = Aliases.Aptify_Shell.SubTypeTemplateForm.PTInterestClassifications_Form.PTInterestClassifications_Tabs.tabMain.PTInterestClassifications_Tabs_General.PTInterestClassifications_Tabs_General.PTInterestClassifications_Tabs_General_Description.txtInner.get_Text();
  classificationType = classificationDescription;
});


When("I click Ok", function (){
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
});

Then("Name frame should display the selection criteria correctly", function (){
  if(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.Exists){
    var name =  Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Name.txtInner.get_Text();
  }
  else{
    var name =  Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General_StandingOrderReference.txtInner.get_Text();
  } 

   if( (aqObject.CompareProperty(name, cmpContains, author, true, 3)) && (aqObject.CompareProperty(name, cmpContains, imprint, true, 3)) && (aqObject.CompareProperty(name, cmpContains, productType, true, 3)) && (aqObject.CompareProperty(name, cmpContains, audienceType, true, 3)) && (aqObject.CompareProperty(name, cmpContains, classificationType, true, 3))){
    Log.Checkpoint("Selection Criteria displayed under Name frame is Correct");
   }
   else{
    Log.Error("Selection Criteria displayed under Name frame is Incorrect");
   }
});

When("I click on new Interest Classifications Record", function clickNewInterestClassificationRecord(){
 if(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.Exists){ 
  Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_Sub_Type_Control_1.zAptifyControlBase_Toolbars_Dock_Area_Top.toolbar.buttonNew.ClickButton();
 }
 else{
  Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria_Sub_Type_Control_1.zAptifyControlBase_Toolbars_Dock_Area_Top.toolbar.buttonNew.ClickButton();
 }
});

When("I enter Author {arg}", function (authorPar){
if(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.Exists){
  let txtAuthor = Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_AuthorID.txtLink;

  txtAuthor.Keys(authorPar);
  author = authorPar;
  txtAuthor.Keys("[Tab]");
} 
else{
  let txtAuthor = Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria_AuthorID.txtLink;

  txtAuthor.Keys(authorPar);
  author = authorPar;
  txtAuthor.Keys("[Tab]"); 
}
});

When("I select Product Sub type {arg}", function selectProductSubType(productTypePar){
if(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.Exists){  
  let ddProductSubType = Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_SubTypeID.LookupSearchCombo;
  
  ddProductSubType.Click();
  ddProductSubType.ClickItem(productTypePar);
  productType = productTypePar;
  ddProductSubType.Keys("[Tab]");
}
else{
  let ddProductSubType = Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria_SubTypeID.LookupSearchCombo;
  
  ddProductSubType.Click();
  ddProductSubType.ClickItem(productTypePar);
  productType = productTypePar;
  ddProductSubType.Keys("[Tab]");  
}
});

When("I select Audience Type {arg}", function selectAudienceType(audienceTypePar){
if(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.Exists){  
  let ddAudienceType = Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_AudienceTypeID.LookupSearchCombo;
  
  ddAudienceType.Click();
  ddAudienceType.ClickItem(audienceTypePar);
  audienceType = audienceTypePar;
  ddAudienceType.Keys("[Tab]");
}
else{
  let ddAudienceType = Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria_AudienceTypeID.LookupSearchCombo;
  
  ddAudienceType.Click();
  ddAudienceType.ClickItem(audienceTypePar);
  audienceType = audienceTypePar;
  ddAudienceType.Keys("[Tab]");  
}
});

When("I enter Valid From a Date Last Year", function enterLastYearDate(){
if(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.Exists){  
  let dateFrom = Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").WinFormsObject("PTCompanyInterests.Tabs.General").WinFormsObject("PTCompanyInterests.Tabs.General").WinFormsObject("PTCompanyInterests.ValidFromDate").WinFormsObject("txtInner");
  let date = aqDateTime.AddDays(aqDateTime.Today(), 5);
  dateFrom.Click();
  dateFrom.SetText(aqDateTime.AddMonths(date, -12));
  dateFrom.Keys("[Tab]");
}
else{
  let dateFrom = Aliases.Aptify_Shell.FormTemplateForm.WinFormsObject("PTPersonInterests.Form").WinFormsObject("PTPersonInterests.Tabs").WinFormsObject("tabMain").WinFormsObject("PTPersonInterests.Tabs.General").WinFormsObject("PTPersonInterests.Tabs.General").WinFormsObject("PTPersonInterests.ValidFromDate").WinFormsObject("txtInner");
  let date = aqDateTime.AddDays(aqDateTime.Today(), 5);
  dateFrom.Click();
  dateFrom.SetText(aqDateTime.AddMonths(date, -12));
  dateFrom.Keys("[Tab]");
} 
});

When("I enter Valid To Yesterday", function enterYeterdayDate(){
if(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.Exists){    
  let dateTo = Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").WinFormsObject("PTCompanyInterests.Tabs.General").WinFormsObject("PTCompanyInterests.Tabs.General").WinFormsObject("PTCompanyInterests.ValidToDate").WinFormsObject("txtInner");
  
  dateTo.Click();
  dateTo.SetText(aqDateTime.AddDays(aqDateTime.Today(), -1));
  dateTo.Keys("[Tab]");
}
else{
  let dateTo = Aliases.Aptify_Shell.FormTemplateForm.WinFormsObject("PTPersonInterests.Form").WinFormsObject("PTPersonInterests.Tabs").WinFormsObject("tabMain").WinFormsObject("PTPersonInterests.Tabs.General").WinFormsObject("PTPersonInterests.Tabs.General").WinFormsObject("PTPersonInterests.ValidToDate").WinFormsObject("txtInner");
  
  dateTo.Click();
  dateTo.SetText(aqDateTime.AddDays(aqDateTime.Today(), -1));
  dateTo.Keys("[Tab]");  
}
});

When("I open the record", function openInterestClassificationRecord(){
  
if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.Exists){  
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_OTC_Companies_ProfileTab.PT_OTC_Companies_ProfileTab.tabMain.PTCompanies_Marketing_Tab.PTCompanies_Marketing_Tab.PTCompanies_Marketing_TabControl.tabMain.PTCompanies_Marketing_Interests_Tab.PTCompanies_Marketing_Interests_Tab.PTCompanies_Marketing_Interests_Tab_CompanyInterestsView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.diagramCommandbarmoreactions.Click(54, 15);
  Aliases.Aptify_Shell.RadDropDownMenu_new.menuitemRefresh.Click();  
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_OTC_Companies_ProfileTab.PT_OTC_Companies_ProfileTab.tabMain.PTCompanies_Marketing_Tab.PTCompanies_Marketing_Tab.PTCompanies_Marketing_TabControl.tabMain.WinFormsObject("PTCompanies.Marketing.Interests.Tab").WinFormsObject("PTCompanies.Marketing.Interests.Tab").WinFormsObject("PTCompanies.Marketing.Interests.Tab.CompanyInterestsView").WinFormsObject("outerPanel").WinFormsObject("previewSplitContainer").WinFormsObject("SplitterPanel", "").WinFormsObject("panel4CaptionAndGrid").WinFormsObject("radGridView1");

  let records = radGridView.wRowCount;
  var i = 0;
  
  for(i;i<records;i++){
    if(radGridView.wValue(i,0).OleValue == standingOrderRef){
      radGridView.DblClickRowIndicator(i);
    }
  }
}
else{
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PT_OTC_Persons_Profile.PT_OTC_Persons_Profile.tabMain.PTPersons_Tabs_Marketing.Persons_PTPersons_Tabs_Marketing.PTPersons_Tabs_Marketing_TabGroup.tabMain.PTPersons_Marketing_Interests_Tab.PTPersons_Marketing_Interests_Tab.PTPersons_Marketing_Interests_Tab_PersonInterestsView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.diagramCommandbarmoreactions.Click(51, 18);
  Aliases.Aptify_Shell.RadDropDownMenu_new.menuitemRefresh.Click();
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PT_OTC_Persons_Profile.PT_OTC_Persons_Profile.tabMain.PTPersons_Tabs_Marketing.Persons_PTPersons_Tabs_Marketing.PTPersons_Tabs_Marketing_TabGroup.tabMain.WinFormsObject("PTPersons.Marketing.Interests.Tab").WinFormsObject("PTPersons.Marketing.Interests.Tab").WinFormsObject("PTPersons.Marketing.Interests.Tab.PersonInterestsView").WinFormsObject("outerPanel").WinFormsObject("previewSplitContainer").WinFormsObject("SplitterPanel", "").WinFormsObject("panel4CaptionAndGrid").WinFormsObject("radGridView1");

  let records = radGridView.wRowCount;
  var i = 0;
  
  for(i;i<records;i++){
    if(radGridView.wValue(i,0).OleValue == standingOrderRef){
      radGridView.DblClickRowIndicator(i);

    }
  }
}
});

When("I enter Valid From a Date in Future", function enterFromFutureDate(){
if(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.Exists){  
  let dateFrom = Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.WinFormsObject("PTCompanyInterests.ValidFromDate").WinFormsObject("txtInner");

  let date = aqDateTime.AddDays(aqDateTime.Today(), 1);
  dateFrom.Click();
  dateFrom.SetText(date);
}
else{
  let dateFrom = Aliases.Aptify_Shell.FormTemplateForm.WinFormsObject("PTPersonInterests.Form").WinFormsObject("PTPersonInterests.Tabs").WinFormsObject("tabMain").WinFormsObject("PTPersonInterests.Tabs.General").WinFormsObject("PTPersonInterests.Tabs.General").WinFormsObject("PTPersonInterests.ValidFromDate").WinFormsObject("txtInner");

  let date = aqDateTime.AddDays(aqDateTime.Today(), 1);
  dateFrom.Click();
  dateFrom.SetText(date); 
}
});

When("I enter Valid To a Date in Future", function enterToFutureDate(){
if(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.Exists){    
  let dateTo = Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.WinFormsObject("PTCompanyInterests.ValidToDate").WinFormsObject("txtInner");

  dateTo.Click();
  dateTo.SetText(aqDateTime.AddDays(aqDateTime.Today(), 10));
  dateTo.Keys("[Tab]");
}
else{
  let dateTo = Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_ValidToDate.txtInner;

  dateTo.Click();
  dateTo.SetText(aqDateTime.AddDays(aqDateTime.Today(), 10));
  dateTo.Keys("[Tab]");
}  
});

Then("I check the Always Supply checkbox", function(){
  if(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.Exists){
    Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General_AlwaysSupply.chkInternal.wState = cbChecked;
  }
  else{
    Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General_AlwaysSupply.chkInternal.wState = cbChecked;
  }
});

Then("I enter Customer Reference {arg}", function(customerReference){
  if(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.Exists){
    let txtCustomerReference = Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_CustomerReference.txtInner;

    txtCustomerReference.SetText(customerReference);    
  }
  else{
    let txtCustomerReference = Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_CustomerReference.txtInner;

    txtCustomerReference.SetText(customerReference);
  }
});

Then("I enter Valid From Today's date", function (){
  if(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.Exists){
    let dateFrom = Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_ValidFromDate.txtInner;

    dateFrom.SetText(aqDateTime.Today());

  }
  else{
    let dateFrom = Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_ValidFromDate.txtInner;

    dateFrom.SetText(aqDateTime.Today());
    
  }
});

Then("I click on Save Form", function clickSaveForm(){
  if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.Exists){
    Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").PageTab("General").Click();
   }
  else{
    Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTPersonInterests.Form").WinFormsObject("PTPersonInterests.Tabs").WinFormsObject("tabMain").PageTab("General").Click();
  }
  Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("datEntity").WinFormsObject("AptifyDataControl_Fill_Panel").WinFormsObject("_AptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top").ClickItem("Data Form|Save Record");
});

Then("I click on General tab", function (){
  if(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.Exists){
    Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.pagetabGeneral.Click();  
  }
  else{
    Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.pagetabGeneral.Click();
  }
});


When("I create a new product", function creatingNewProduct(){
  clickNewProduct();
  selectProductType();
  enterTitleWithoutPrefix();
  selectImprint();
  clickNext();
  selectDimension();
  selectIdentifer();
  enterPubDateCopyrightYear();
  clickFinish();
  selectClassification();
  getProductName();
  setSupplyStatus();
  enableStandingOrders();
  clickSaveAndClose();
  GoodsIn();
  moveBulkToForward();
  confirmTransactions();
  
});

function confirmTransactions(){
 Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton5.ClickButton();
  let radGridView = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_188.PTInventoryConfirmTransactions_Tabs_General.PTInventoryConfirmTransactions_Tabs_General_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  let i = 0;
  if(records > 0)
  {
   for (i; i<records; i++)
    {
      if(radGridView.wValue(i,3).OleValue == productName){
        radGridView.ClickCell(i,0);
      }
    }
    Aliases.Aptify_Shell.GenericWizardForm.WizPanels_188.PTInventoryConfirmTransactions_Tabs_General.PTInventoryConfirmTransactions_Tabs_General_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(125, 17);
    Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
    Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();  
  }
  else
  {
    Log.Checkpoint("No pending transactions found");
  }  
}

function moveBulkToForward(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.Drag(12, 26, -232, 215);

 enterToLocation();
 enterInventory();
 clickTransferButton();
 clickFinishButton();  
}

function enterToLocation(){
  let txtToLocation = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_LinkedLocationItemID.txtLink;
  
  txtToLocation.Click();
  txtToLocation.SetText("WAF2B01A");
  txtToLocation.Keys("[Tab]");
}


function enterInventory(){
   let txtQtyLoose = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_TransactionQuantityLoose.txtInner; 
   txtQtyLoose.SetText(1000);
   txtQtyLoose.Keys("[Tab]");
}

function clickTransferButton(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_Active_Button_Transfer.Click();
  if(Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.Exists){
   Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton(); 
  }
  if(Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.Exists)
  {
    Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
  }
}


function clickFinishButton(){
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
}



function clickNewProduct(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton9.ClickButton();
}
function selectProductType(){
  let ddProductType = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_Details_ProductDetails_ProductSubTypeID.LookupSearchCombo;
 
 ddProductType.Click();
 ddProductType.ClickItem("Book- Paperback");

 let productType = aqObject.GetPropertyValue(ddProductType , "text");
 productSubType = productType;
}
function enterTitleWithoutPrefix(){
  let txtTitlePrefix = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_PT_Products_Toparea_TitlePrefix.txtInner;
  txtTitlePrefix.Click();
  txtTitlePrefix.SetText("RAVE");
  titlePrefix = "RAVE";
  
  let anysize = 3;
  let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  randomWithoutPrefix="";
  for( let i=0; i < anysize; i++ ){
  randomWithoutPrefix += charset[Math.floor(Math.random() * charset.length)];
  }  
  
  let txtWithoutPrefix = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_PT_Products_Toparea_TitleWithoutPrefix.txtInner;
  txtWithoutPrefix.Click();
  txtWithoutPrefix.Keys(randomWithoutPrefix);
  withoutPrefix = randomWithoutPrefix;
}
function selectImprint(){
  let txtImprint = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProducts_Wizard_Organizations.txtLink;
  txtImprint.Click();
  txtImprint.Keys("Reef Books");
  txtImprint.Keys("[Tab]");
  
  let organization = aqObject.GetPropertyValue(txtImprint, "text");
  imprint = organization;
}
function clickNext(){
  Aliases.Aptify_Shell.PTProductWizard.WizMain.btnNext.ClickButton();
}
function selectDimension(){
  Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Product_Dimensions_SubtypeView.zAptifyControlBase_Toolbars_Dock_Area_Top.ClickItem("SubType|New");
  
  let ddDimensionType = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductDimensions_Form.PTProductDimensions_Tabs.tabMain.PTProductDimensions_Tabs_General.PTProductDimensions_Tabs_General.PTProductDimensions_TypeID.LookupSearchCombo;
  ddDimensionType.ClickItem("Unit weight");
  ddDimensionType.Keys("[Tab]");
  
  let txtDimensionValue = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductDimensions_Form.PTProductDimensions_Tabs.tabMain.PTProductDimensions_Tabs_General.PTProductDimensions_Tabs_General.PTProductDimensions_Value.txtInner;
  txtDimensionValue.Click();
  txtDimensionValue.SetText(1);
  
  let ddDimensionUnit = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductDimensions_Form.PTProductDimensions_Tabs.tabMain.PTProductDimensions_Tabs_General.PTProductDimensions_Tabs_General.PTProductDimensions_ONIXUnitID.LookupSearchCombo;
  ddDimensionUnit.ClickItem("Kilograms");
  ddDimensionUnit.Keys("[Tab]");
  
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
}
function selectIdentifer(){
  Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Products_SubtypesData_Sub_Type_Control_1.zAptifyControlBase_Toolbars_Dock_Area_Top.ClickItem("SubType|New");
  
  let ddIdentifierType = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductIdentifiers_Form.PTProductIdentifiers_Tabs.tabMain.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_IdentifierTypeID.LookupSearchCombo;
  ddIdentifierType.ClickItem("ISBN 13"); 
  ddIdentifierType.Keys("[Tab]");
  
  let ddRange = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductIdentifiers_Form.PTProductIdentifiers_Tabs.tabMain.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_OrganizationCodeAllocationsID.LookupSearchCombo;
  ddRange.ClickItem("ISBN 13 (Global)"); 
  ddIdentifierType.Keys("[Tab]");
  
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
}
function enterPubDateCopyrightYear(){
  let datePub = Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Products_SubtypesData_PublicationDate.txtInner;
  datePub.Click();
  datePub.SetText(aqDateTime.AddDays(aqDateTime.Today(), -5));
  
  let txtCopyrightYear = Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Products_SubtypesData_xCopyrightYear.txtInner;  
  txtCopyrightYear.Click();
  txtCopyrightYear.SetText(2020);
}
function clickFinish(){
  Aliases.Aptify_Shell.PTProductWizard.WizMain.btnFinish.ClickButton();
}
function setSupplyStatus(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
  
  let gridInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let supplyStatus = gridInventory.wValue(0, 4).OleValue;
 
    gridInventory.DblClickCell(0, "Supply Status");
    let ddSiteStatus = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_SiteStatusID.LookupSearchCombo;
    ddSiteStatus.Click();
    ddSiteStatus.ClickItem("Open");
    selectPickingLocation();
    clickSaveAndClose();
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
function enableStandingOrders()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Details");

  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main.Products_Main.Products_Main_Tabs.tabMain.ClickTab("Product Versions");
 
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main.Products_Main.Products_Main_Tabs.tabMain.Products_Tabs_VProductVersions.Products_Tabs_VProductVersionsDetails.Products_Tabs_VProductVersionsDetails_Sub_Type_Control_ProductVersions.zAptifyControlBase_Toolbars_Dock_Area_Top.ClickItem("SubType|Open");

  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.ClickTab("Fulfilment");
  
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment.WinFormsObject("PTProductVersions.OTC.Tabs.Fulfilment.StandingOrderEnabled").WinFormsObject("chkInternal").wState = cbChecked;
  
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment.WinFormsObject("PTProductVersions.OTC.Tabs.Fulfilment.StandingOrderAvailableDate").WinFormsObject("txtInner").SetText(aqDateTime.Today());
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment.WinFormsObject("PTProductVersions.OTC.Tabs.Fulfilment.StandingOrderAvailableDate").WinFormsObject("txtInner").Keys("[Tab]");
  
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
}
function getProductName()
{
  let title = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_Title.txtInner.get_Text();
  productName = title;
}
function selectClassification(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Classifications");
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_Classification.Products_Classification.Products_Classification_Tabs.tabMain.WinFormsObject("Products Form - Product Codes Tab").WinFormsObject("Products Product Codes").WinFormsObject("PTProductCodes.Subtypeview").WinFormsObject("_AptifyControlBase_Toolbars_Dock_Area_Top").ClickItem("SubType|New");

  let ddClassificationType = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductCodes_Form.PTProductCodes_Tabs.tabMain.PTProductCodes_Tabs_General.PTProductCodes_Tabs_General.PTProductclassifications_ProductCodeTypes.LookupSearchCombo.EmbeddableTextBoxWithUIPermissions;
  ddClassificationType.SetText("Barcode Indicator");
  ddClassificationType.Keys("[Tab]");
  
  let ddClassificationCode = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductCodes_Form.PTProductCodes_Tabs.tabMain.PTProductCodes_Tabs_General.PTProductCodes_Tabs_General.LookupTree.LookupSearchCombo;
  ddClassificationCode.ClickItem("Barcoded, scheme unspecified");
  ddClassificationCode.Keys("[Tab]");
  
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
}
function GoodsIn(){
  clickInventory();
  openGoodsIn();
  selectSite();
  ClickNextForm();
  performGoodsIn();
  ClickNextForm();
}  
function selectSite(){
  let ddSiteWarehouse = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_417.PTInventoryGoodsInWizard_NewStep1.PTInventoryGoodsInWizard_NewStep1_SiteWarehouseID.LookupSearchCombo;
  
  ddSiteWarehouse.Click();
  ddSiteWarehouse.ClickItem("Watford/Warehouse A");
  ddSiteWarehouse.Keys("[Tab]");
}
function clickInventory()
{
   Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.ClickItem("advance> Home|Inventory");
}
function openGoodsIn()
{
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton3.ClickButton();
}
function ClickNextForm(){
 Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnNext.ClickButton();
}
function clickFinishForm(){
   Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
} 
function performGoodsIn(){
  let txtProduct =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_ProductID.txtLink;
  txtProduct.SetText(productName);
  txtProduct.Keys("[Tab]");

  let txtQtyLoose = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_LooseQty.txtInner; 
  txtQtyLoose.SetText(1000);
  txtQtyLoose.Keys("[Tab]");
  
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_Active_Button_Add.Click();
}
When("I create a new customer", function creatingNewCompany(){
 clickNewCustomer();
 checkCreateCompanyCheckbox();
 enterCompanyDetails();
 enterAddress();
 checkOpenFinishCompany();
 clickFinishForm();
});

function clickNewCustomer(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton.ClickButton();
}
When("I navigate to the Interests tab", function openInterestTab(){
  if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.Exists){
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.ClickTab("Profile");
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PT_OTC_Persons_Profile.PT_OTC_Persons_Profile.tabMain.ClickTab("Marketing");
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PT_OTC_Persons_Profile.PT_OTC_Persons_Profile.tabMain.PTPersons_Tabs_Marketing.Persons_PTPersons_Tabs_Marketing.PTPersons_Tabs_Marketing_TabGroup.tabMain.ClickTab("Interests");
  }
  else{
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.ClickTab("Profile");
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_OTC_Companies_ProfileTab.PT_OTC_Companies_ProfileTab.tabMain.ClickTab("Marketing");
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_OTC_Companies_ProfileTab.PT_OTC_Companies_ProfileTab.tabMain.PTCompanies_Marketing_Tab.PTCompanies_Marketing_Tab.PTCompanies_Marketing_TabControl.tabMain.ClickTab("Interests");
  }
});

When("I click on New Interests Record", function (){
  if(Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.Exists){
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PT_OTC_Persons_Profile.PT_OTC_Persons_Profile.tabMain.PTPersons_Tabs_Marketing.Persons_PTPersons_Tabs_Marketing.PTPersons_Tabs_Marketing_TabGroup.tabMain.WinFormsObject("PTPersons.Marketing.Interests.Tab").WinFormsObject("PTPersons.Marketing.Interests.Tab").WinFormsObject("PTPersons.Marketing.Interests.Tab.PersonInterestsView").WinFormsObject("outerPanel").WinFormsObject("previewSplitContainer").WinFormsObject("SplitterPanel", "").WinFormsObject("radCommandBar1").Click(8, 13);
  }
  else{
    Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_OTC_Companies_ProfileTab.PT_OTC_Companies_ProfileTab.tabMain.PTCompanies_Marketing_Tab.PTCompanies_Marketing_Tab.PTCompanies_Marketing_TabControl.tabMain.WinFormsObject("PTCompanies.Marketing.Interests.Tab").WinFormsObject("PTCompanies.Marketing.Interests.Tab").WinFormsObject("PTCompanies.Marketing.Interests.Tab.CompanyInterestsView").WinFormsObject("outerPanel").WinFormsObject("previewSplitContainer").WinFormsObject("SplitterPanel", "").WinFormsObject("radCommandBar1").Click(16, 17);
  }
});

When("I select Criteria and classification", function selectCriteriaAndClassfication(){
  dropdownImprint();
  selectSubType();
  selectVersion();
  clickOR();
  selectClassifications();
  closeInterestRecord();
 // clickSaveAndClose();
});

function closeInterestRecord(){
if(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.Exists){   
  Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").ClickTab("General");
}
else{
   Aliases.Aptify_Shell.FormTemplateForm.WinFormsObject("PTPersonInterests.Form").WinFormsObject("PTPersonInterests.Tabs").WinFormsObject("tabMain").ClickTab("General");
}

  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
}
function dropdownImprint(){
if(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.Exists){  
  let ddImprint = Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").WinFormsObject("PTCompanyInterests.Tabs.Criteria").WinFormsObject("PTCompanyInterests.Tabs.Criteria").WinFormsObject("PTCompanyInterests.Tabs.Criteria.OrganizationID").WinFormsObject("LookupSearchCombo");
  
  ddImprint.Click();
  ddImprint.ClickItem("Reef Books");
  imprint = "Reef Books";
  ddImprint.Keys("[Tab]");
}
else{
   let ddImprint = Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria_OrganizationID.LookupSearchCombo;
  
  ddImprint.Click();
  ddImprint.ClickItem("Reef Books");
  imprint = "Reef Books";
  ddImprint.Keys("[Tab]");
}
}
function selectSubType(){
if(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.Exists){  
  let ddProductSubType = Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTCompanyInterests.Form").WinFormsObject("PTCompanyInterests.Tabs").WinFormsObject("tabMain").WinFormsObject("PTCompanyInterests.Tabs.Criteria").WinFormsObject("PTCompanyInterests.Tabs.Criteria").WinFormsObject("PTCompanyInterests.Tabs.Criteria.SubTypeID").WinFormsObject("LookupSearchCombo");
  
  ddProductSubType.Click();
  ddProductSubType.ClickItem("Book- HardCover");
  productType = "Book- HardCover";
  ddProductSubType.Keys("[Tab]");
}
else{
  let ddProductSubType = Aliases.Aptify_Shell.FormTemplateForm.WinFormsObject("PTPersonInterests.Form").WinFormsObject("PTPersonInterests.Tabs").WinFormsObject("tabMain").WinFormsObject("PTPersonInterests.Tabs.Criteria").WinFormsObject("PTPersonInterests.Tabs.Criteria").WinFormsObject("PTPersonInterests.Tabs.Criteria.SubTypeID").WinFormsObject("LookupSearchCombo");
  
  ddProductSubType.Click();
  ddProductSubType.ClickItem("Book- HardCover");
  productType = "Book- HardCover";
  ddProductSubType.Keys("[Tab]");  
}
}
function selectVersion(){
if(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.Exists){   
  let ddVersion = Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.WinFormsObject("PTCompanyInterests.Tabs.Criteria.VersionTypeID").WinFormsObject("LookupSearchCombo");
  ddVersion.ClickItem("Main Market Edition");
  ddVersion.Keys("[Tab]");
}
else{
  let ddVersion =  Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria_VersionTypeID.LookupSearchCombo;
  ddVersion.ClickItem("Main Market Edition");
  ddVersion.Keys("[Tab]");  

}
}

function clickOR(){
if(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.Exists){   
  Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.WinFormsObject("PTCompanyInterests.Tabs.Criteria.Grouped Options.Classifications").WinFormsObject("OR any classifications below").ClickButton();
  
}
else{
 Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria_Grouped_Options_Classifications.OR_any_classifications_below.ClickButton();
}
}

function selectClassifications(){
 if(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.Exists){ 
  Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_Sub_Type_Control_1.zAptifyControlBase_Toolbars_Dock_Area_Top.toolbar.buttonNew.ClickButton();
 }
 else{
  Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria_Sub_Type_Control_1.zAptifyControlBase_Toolbars_Dock_Area_Top.toolbar.buttonNew.ClickButton();
 }
 
 let ddClassificationType = Aliases.Aptify_Shell.SubTypeTemplateForm.PTInterestClassifications_Form.PTInterestClassifications_Tabs.tabMain.PTInterestClassifications_Tabs_General.PTInterestClassifications_Tabs_General.PTInterestClassifications_Tabs_General_ProductCodeTypes.LookupSearchCombo;
  
  ddClassificationType.Click();
  ddClassificationType.EmbeddableTextBoxWithUIPermissions.Keys("Barcode Indicator");
  ddClassificationType.Keys("[Tab]");
  
  let ddClassificationCode = Aliases.Aptify_Shell.SubTypeTemplateForm.PTInterestClassifications_Form.PTInterestClassifications_Tabs.tabMain.PTInterestClassifications_Tabs_General.PTInterestClassifications_Tabs_General.PTInterestClassifications_Tabs_General_LookupCode.LookupSearchCombo;

  ddClassificationCode.Click();
  ddClassificationCode.Keys("01");
  ddClassificationCode.Keys("[Tab]");
  
  let classificationDescription = Aliases.Aptify_Shell.SubTypeTemplateForm.PTInterestClassifications_Form.PTInterestClassifications_Tabs.tabMain.PTInterestClassifications_Tabs_General.PTInterestClassifications_Tabs_General.PTInterestClassifications_Tabs_General_Description.txtInner.get_Text();
  classificationType = classificationDescription;
  
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();  
}

When("I open Standing Orders Future Releases dashboard and refresh till the customer records are visible", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.dropdownActions.ClickItem("Standing Orders - Future releases");

  let radGridView = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.WinFormsObject("panel1").WinFormsObject("ViewContainer").WinFormsObject("PTEntityListView").WinFormsObject("outerPanel").WinFormsObject("previewSplitContainer").WinFormsObject("SplitterPanel", "", 1).WinFormsObject("panel4CaptionAndGrid").WinFormsObject("radGridView1");
  var records = radGridView.wRowCount;

  do{
    Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.WinFormsObject("refreshButton").ClickButton(); 
    Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.WinFormsObject("refreshButton").ClickButton();       
  }while(records == 1)
});

Then("table with column headers as Ship To,Bill To,Interest Type,Product Version should be displayed", function (){
 let radGridView = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.WinFormsObject("panel1").WinFormsObject("ViewContainer").WinFormsObject("PTEntityListView").WinFormsObject("outerPanel").WinFormsObject("previewSplitContainer").WinFormsObject("SplitterPanel", "", 1).WinFormsObject("panel4CaptionAndGrid").WinFormsObject("radGridView1");

 let shipTo = radGridView.wColumn(0);
 let billTo = radGridView.wColumn(1);
 let interestType = radGridView.wColumn(2);
 let product = radGridView.wColumn(3);
 let productVersion = radGridView.wColumn(4);
 let quantity = radGridView.wColumn(5);
 let currency = radGridView.wColumn(6);
 let nonSupply = radGridView.wColumn(7);
 let supplyInformation = radGridView.wColumn(8);
 let standingOrderReference = radGridView.wColumn(9);
 let promotionCode = radGridView.wColumn(10);
 let campaignCode = radGridView.wColumn(11);
 let site = radGridView.wColumn(12);
 let PODSite = radGridView.wColumn(13);
 let releasedOnDate = radGridView.wColumn(14);

 if( (aqObject.CompareProperty(shipTo, cmpEqual, "Ship To", true, 3)) && (aqObject.CompareProperty(billTo, cmpEqual, "Bill To", true, 3)) && (aqObject.CompareProperty(interestType, cmpEqual, "Interest Type", true, 3)) && (aqObject.CompareProperty(product, cmpEqual, "Product", true, 3)) && (aqObject.CompareProperty(productVersion, cmpEqual, "Product Version", true, 3))){
   Log.Checkpoint(shipTo+", "+billTo+", "+interestType+", "+product+", "+productVersion + " columns are displayed");
 }
 else{
   Log.Error(shipTo+", "+billTo+", "+interestType+", "+product+", "+productVersion + " columns are not displayed");
 }

 if( (aqObject.CompareProperty(quantity, cmpEqual, "Quantity", true, 3)) && (aqObject.CompareProperty(currency, cmpEqual, "Currency Type", true, 3)) && (aqObject.CompareProperty(nonSupply, cmpEqual, "Non Supply", true, 3)) && (aqObject.CompareProperty(supplyInformation, cmpEqual, "Supply Information", true, 3)) && (aqObject.CompareProperty(standingOrderReference, cmpEqual, "S/O Ref", true, 3))){
   Log.Checkpoint(quantity+", "+currency+", "+nonSupply+", "+supplyInformation+", "+standingOrderReference + " columns are displayed");
 }
 else{
   Log.Error(quantity+", "+currency+", "+nonSupply+", "+supplyInformation+", "+standingOrderReference + " columns are not displayed");
 } 

 if( (aqObject.CompareProperty(promotionCode, cmpEqual, "Promotion Code", true, 3)) && (aqObject.CompareProperty(campaignCode, cmpEqual, "Campaign Code", true, 3)) && (aqObject.CompareProperty(site, cmpEqual, "Site", true, 3)) && (aqObject.CompareProperty(PODSite, cmpEqual, "POD Site", true, 3)) && (aqObject.CompareProperty(releasedOnDate, cmpEqual, "Released On Date", true, 3))){
   Log.Checkpoint(promotionCode+", "+campaignCode+", "+site+", "+PODSite+", "+releasedOnDate + " columns are displayed");
 }
 else{
   Log.Error(promotionCode+", "+campaignCode+", "+site+", "+PODSite+", "+releasedOnDate + " columns are not displayed");
 }   
 
});




Then("Product should not be displayed in Standing Orders Future Releases", function verifyStandingOrdersFutureReleases(){
  let radGridView = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.WinFormsObject("panel1").WinFormsObject("ViewContainer").WinFormsObject("PTEntityListView").WinFormsObject("outerPanel").WinFormsObject("previewSplitContainer").WinFormsObject("SplitterPanel", "", 1).WinFormsObject("panel4CaptionAndGrid").WinFormsObject("radGridView1");
  let records = radGridView.wRowCount;
  var i = 0;
  var passCount = 0;
  for(i;i<records;i++){
    if(radGridView.wValue(i,3).OleValue != productName){
      passCount += 1;
    }
  }
  
 if(passCount == records){
   Log.Checkpoint("Product is not displayed in Standing Orders Future Releases");
 }
 else{
    Log.Error("Product is displayed in Standing Orders Future Releases");
}
  
});

Then("Standing Orders Released should display the product used", function verifyStandingOrdersReleased(){
  Sys.WaitProcess("Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions", 8000);
  let radGridView = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.WinFormsObject("panel1").WinFormsObject("ViewContainer").WinFormsObject("PTEntityListView").WinFormsObject("outerPanel").WinFormsObject("previewSplitContainer").WinFormsObject("SplitterPanel", "", 1).WinFormsObject("panel4CaptionAndGrid").WinFormsObject("radGridView1");
  let records = radGridView.wRowCount;
  var i = 0;
  var passCount = 0;
   for(i;i<records;i++){
    let product = radGridView.wValue(i, 3).OleValue;
    if(product == productName){
      passCount += 1;
    }
   }
  if(passCount >=1){
    Log.Checkpoint("Product used is displayed under Standing Orders Released");
  }
  else{
    Log.Error("Product used is not displayed under Standing Orders Released");
	} 
});

Then("I run the Billing Wave", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_BillingWaveRelease.buttonImage.ClickButton();
  if(Aliases.Aptify_Shell.LocalizedMsgBox.Exists){
    Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
  }
});

Then("I open the product information panel", function (){
  clickFindProductBtn();
  searchProduct(productName);
  clickSearchBtn();
  handleProductsGrid();
});
function searchProduct(productName){
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText(productName);
}

function clickFindProductBtn(){
   Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.Click();
}

Then("I navigate to Fulfilment tab", function openFulfillmentTab(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main.Products_Main.Products_Main_Tabs.tabMain.ClickTab("Product Versions");
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main.Products_Main.Products_Main_Tabs.tabMain.Products_Tabs_VProductVersions.Products_Tabs_VProductVersionsDetails.Products_Tabs_VProductVersionsDetails_Sub_Type_Control_ProductVersions.zAptifyControlBase_Toolbars_Dock_Area_Top.ClickItem("SubType|Open");
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.ClickTab("Fulfilment");
});

Then("Standing Order Released on Date should be displayed and disabled", function verifyStandingOrderReleasedOnDate(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment.WinFormsObject("PTProductVersions.OTC.Tabs.Fulfilment.StandingOrderEnabled").WinFormsObject("chkInternal"), "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment.WinFormsObject("PTProductVersions.OTC.Tabs.Fulfilment.StandingOrderReleasedOnDate").WinFormsObject("txtInner"), "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment.WinFormsObject("PTProductVersions.OTC.Tabs.Fulfilment.StandingOrderReleasedOnDate").WinFormsObject("txtInner"), "Text", cmpNotEqual, EmptyVariant);
});

Then("I open Standing Orders Future Releases", function openStandingOrdersFutureReleases(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.dropdownActions.ClickItem("Standing Orders - Future releases");
});

Then("I open Standing Orders Released", function openStandingOrdersReleased(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.dropdownActions.ClickItem("Standing Orders - Released");
});
function checkCreateCompanyCheckbox(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CreateNewCompany.chkInternal.wState = cbChecked;
}
function enterCompanyDetails(companyNamePar){
  var anysize = 4;
  var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  randomCompanyName="";
  for( var i=0; i < anysize; i++ )
  randomCompanyName += charset[Math.floor(Math.random() * charset.length)];
  
  let ddCountry = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_CompanyCountryID.LookupSearchCombo;
  ddCountry.Click();
  ddCountry.ClickItem("United Kingdom");
  ddCountry.Keys("[Tab]");
  
  let ddCompanyType = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_CompanyTypeID.LookupSearchCombo;
  ddCompanyType.Click();
  ddCompanyType.ClickItem("Bookseller");
  ddCompanyType.Keys("[Tab]");
  
  var companyName= (aqString.concat("COMPANY"+" ", randomCompanyName))
  let txtCompanyName = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_1.CompanyCustomerWizard.CompanyCustomerWizard_PT_Group_Box_1.PTCompanyNamesCustomerWizard.PTCompanyNamesCustomerWizard_FirstName.txtInner;
  txtCompanyName.Click();
  txtCompanyName.EmbeddableTextBoxWithUIPermissions.SetText(companyName);
  customerName = companyName;
  txtCompanyName.Keys("[Tab]");
  
  let ddWebsiteType = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_2.PTCustomerWizardWebSite.PTCustomerWizardWebSite_PTCompanyWebSites_WebsiteTypeID.LookupSearchCombo;
  ddWebsiteType.Click();
  ddWebsiteType.ClickItem("Old");
  ddWebsiteType.Keys("[Tab]");
  
  var str1 = "www." ;
  var str2 = ".com"
  var website = aqString.Concat(str1,(aqString.concat(aqString.ToLower(randomCompanyName),str2))); 
  
  let txtWebsite = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_2.PTCustomerWizardWebSite.PTCustomerWizardWebSite_PTCompanyWebSites_Website.txtInner;
  txtWebsite.Click();
  txtWebsite.Keys(website);
  txtWebsite.Keys("[Tab]");
  
  var randomNumber =  aqConvert.FloatToStr(Math.floor((Math.random() * 100) + 1));
  var email = aqString.concat(randomNumber,"@gmail.com") ;
  var randomEmail = aqString.Concat(aqString.ToLower(randomCompanyName), email);
  
  let txtEmail = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_6.PTCompanyEmailAddressesCustomerWizard.PTCompanyEmailAddressesCustomerWizard_Email.txtInner.EmbeddableTextBoxWithUIPermissions;
  txtEmail.Click();
  txtEmail.SetText(randomEmail);
  txtEmail.Keys("[Tab]");
  
  var txtAreaCode =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_AreaCode.txtInner;
  txtAreaCode.SetText(000113);
  txtAreaCode.Keys("[Tab]");
  
  var txtExt =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_5.PTCompanyPhoneNumbersCustomerWizard.PTCompanyPhoneNumbersCustomerWizard_PhoneExtension.txtInner;
  txtExt.SetText(789);
  txtExt.Keys("[Tab]");
  
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnNext.ClickButton();
}

function enterAddress(){
  let txtHouseNo = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseNo.txtInner;  
  txtHouseNo.Click();
  txtHouseNo.SetText(3);
  
  let txtFloor = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBox1Floor.txtInner; 
  txtFloor.Click();
  txtFloor.SetText("7th floor");
  
  let txtBuilding =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxHouseName.txtInner;
  txtBuilding.Click();
  txtBuilding.SetText("Empires");
  
  let txtStreet = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxStreet.txtInner;
  txtStreet.Click();
  txtStreet.SetText("High street");
  
  let txtTown = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxTown.txtInner; 
  txtTown.Click();
  txtTown.SetText("Islington");
  
  let txtCounty = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxCounty.txtInner;
  txtCounty.Click();
  txtCounty.SetText("Shropshire");
  
  var randomStr1 =  aqConvert.FloatToStr(Math.floor((Math.random() * 100000) + 1));
  let txtPostcode = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressControl.AddressCustomerWizard.AddressCustomerWizard_AddressControl.groupBox1.aptifyTextBoxPostalCode.txtInner;
  txtPostcode.Click();
  txtPostcode.SetText(randomStr1);
}

function checkOpenFinishCompany(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_CompanyDisplay.chkInternal.wState = cbChecked;
}

Then("I refresh the Standing Orders Future Releases dashboard", function refershStandingOrdersFutureReleases(){
 let radGridView = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.WinFormsObject("panel1").WinFormsObject("ViewContainer").WinFormsObject("PTEntityListView").WinFormsObject("outerPanel").WinFormsObject("previewSplitContainer").WinFormsObject("SplitterPanel", "", 1).WinFormsObject("panel4CaptionAndGrid").WinFormsObject("radGridView1");
  var records = radGridView.wRowCount;
  var i = 0;
  var passCount = 0;
   do{
      
      Sys.WaitProcess("Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.refreshButton", 3000);  
        for(i;i<records;i++){
         Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.WinFormsObject("refreshButton").ClickButton();    
         let product = radGridView.wValue(i, 3).OleValue;
         if(product == productName){
         passCount += 1;
         }
        }
  }while (passCount >= 1);
});

Then("I refresh the Standing Orders Released dashboard", function refreshStandingOrdersReleased(){
  Sys.WaitProcess("Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.refreshButton", 10000);

  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.WinFormsObject("refreshButton").ClickButton();   
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.WinFormsObject("refreshButton").ClickButton();   
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.WinFormsObject("refreshButton").ClickButton();   
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.WinFormsObject("refreshButton").ClickButton();   
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.WinFormsObject("refreshButton").ClickButton();
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.WinFormsObject("refreshButton").ClickButton();  
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.WinFormsObject("refreshButton").ClickButton();
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.WinFormsObject("refreshButton").ClickButton();
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.WinFormsObject("refreshButton").ClickButton(); 
});

   
When("I open version record from product versions tab", function openVersionRecord (){
  var title = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_Title.txtInner.Text.OleValue;
  productTitle = title;
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab(1);
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main.Products_Main.Products_Main_Tabs.tabMain.ClickTab("Product Versions");
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main.Products_Main.Products_Main_Tabs.tabMain.ClickTab(8);
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main.Products_Main.Products_Main_Tabs.tabMain.Products_Tabs_VProductVersions.Products_Tabs_VProductVersionsDetails.Products_Tabs_VProductVersionsDetails_Sub_Type_Control_ProductVersions.AptifyControlBase_Fill_Panel.flexSubType.DblClick(75, 27);
});

When("I click on Fulfilment tab", function clickFulfilmentTab (){
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.ClickTab("Fulfilment");
});

When("I click on Standing Orders Enabled checkbox", function clickSOEnabledCheckbox (){
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment_StandingOrderEnabled.chkInternal.wState = cbChecked;
});

When("I enter date in correct format", function enterSODate (){
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment_StandingOrderAvailableDate.txtInner.Keys(aqDateTime.AddDays(aqDateTime.Today(),3));
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment_StandingOrderAvailableDate.txtInner.Keys("^a [Clear]")
});


When("I reopen the versions record", function (){
  var subTypeTemplateForm = Aliases.Aptify_Shell.SubTypeTemplateForm;
  subTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab(1);
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main.Products_Main.Products_Main_Tabs.tabMain.ClickTab(8);
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main.Products_Main.Products_Main_Tabs.tabMain.Products_Tabs_VProductVersions.Products_Tabs_VProductVersionsDetails.Products_Tabs_VProductVersionsDetails_Sub_Type_Control_ProductVersions.AptifyControlBase_Fill_Panel.flexSubType.DblClick(51, 29);
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.ClickTab("Fulfilment");
});


Then("data should be match the changes made earlier", function checkpointDataMatchWithChange (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment_StandingOrderEnabled.chkInternal, "Checked", cmpEqual, true);
  var date1 = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment_StandingOrderAvailableDate.txtInner.Text.OleValue;
  if(aqObject.CompareProperty(enterDate, cmpEqual,date1))
  {
   Log.Checkpoint("Changes are saved")
  }
  else{
    Log.Error("changes are not saved")
  }
});

Then("I Click on Save record from toolbar", function (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record");
});

Then("I Click on View Record History from toolbar", function clickViewRecordHistory (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|View Record History");
});

Then("I close history window", function (){
  Aliases.Aptify_Shell.EntityRecordHistoryForm.cmdClose.ClickButton();
});

Then("I open versions record and navigate to fulfilment tab", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab(1);
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main.Products_Main.Products_Main_Tabs.tabMain.ClickTab("Product Versions");
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main.Products_Main.Products_Main_Tabs.tabMain.Products_Tabs_VProductVersions.Products_Tabs_VProductVersionsDetails.Products_Tabs_VProductVersionsDetails_Sub_Type_Control_ProductVersions.AptifyControlBase_Fill_Panel.flexSubType.DblClick(51, 29);
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.ClickTab("Fulfilment");
});

Then("I check the checkbox Release by site", function checkSOCheckboxReleaseBySite (){
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment_StandingOrderReleaseBySite.chkInternal.wState = cbChecked;
});

Then("I select few sites from the list view display", function selectFewSites (){
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.ClickTab(3);
  var radGridViewReleaseBySite = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment_ReleasesBySite.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  radGridViewReleaseBySite.Click(238, 26);
  radGridViewReleaseBySite.Click(238, 48);
  radGridViewReleaseBySite.Click(242, 61);
  radGridViewReleaseBySite.Click(239, 73);
  radGridViewReleaseBySite.Click(239, 91);
  radGridViewReleaseBySite.Click(239, 111);
});

Then("Popup message box should be appear with message {arg}", function checkpointPopupMsg (param1){
  aqObject.CheckProperty(Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.txtMessage, "Text", cmpEqual, "You have made changes to the standing order releases by site table.  Clicking OK will commit these changes.");
});

Then("I click Ok button from popup to commit", function (){
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
});

Then("I uncheck checkbox Standing Order Enabled", function uncheckCheckboxSOEnabled (){
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment_StandingOrderEnabled.chkInternal.wState = cbUnchecked;
});

Then("Sites list should be blank", function checkpointSiteListBlank (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment_ReleasesBySite.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1, "Visible", cmpEqual, false);
});

Then("Date field should be displayed but disabled", function checkpointDateFieldEnabled (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment_StandingOrderAvailableDate, "Enabled", cmpEqual, false);
});

Then("I Click OK to close the versions record", function (){
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
});

Then("I Click save and close record", function (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
});


Then("All the details should be correctly populated and List of sites should be visible", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment_StandingOrderReleaseBySite.chkInternal, "Checked", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment_ReleasesBySite.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1, "wColumnCount", cmpEqual, 8);
  aqObject.CheckProperty(Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment_ReleasesBySite.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1, "wRowCount", cmpEqual, 11);
});

Then("Sites list should be invisible", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment_ReleasesBySite.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1, "Visible", cmpEqual, false);
});

//Companies

Given("I click on Profile from Companies", function clickProfileTabCompanies (){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.Click(190, 10);
});
 
Given("I click on Marketing tab", function clickMarketingTabCompanies (){
  var ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain;
  ultraTabControl.ClickTab(2);
  ultraTabControl.PT_OTC_Companies_ProfileTab.PT_OTC_Companies_ProfileTab.tabMain.Click(123, 9);
});

Given("I click Interests tab", function clickInterestTabCompanies (){
  var ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain;
  ultraTabControl.ClickTab(2);
  var ultraTabControl2 = ultraTabControl.PT_OTC_Companies_ProfileTab.PT_OTC_Companies_ProfileTab.tabMain;
  ultraTabControl2.ClickTab(1);
  ultraTabControl2.PTCompanies_Marketing_Tab.PTCompanies_Marketing_Tab.PTCompanies_Marketing_TabControl.tabMain.ClickTab("Interests");
});

Given("I click on the new button in the list view", function clickNewBtnListViewCS (){
  var ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain;
  ultraTabControl.ClickTab(2);
  var ultraTabControl2 = ultraTabControl.PT_OTC_Companies_ProfileTab.PT_OTC_Companies_ProfileTab.tabMain;
  ultraTabControl2.ClickTab(1);
  ultraTabControl = ultraTabControl2.PTCompanies_Marketing_Tab.PTCompanies_Marketing_Tab.PTCompanies_Marketing_TabControl.tabMain;
  ultraTabControl.ClickTab(1);
  ultraTabControl.PTCompanies_Marketing_Interests_Tab.PTCompanies_Marketing_Interests_Tab.PTCompanies_Marketing_Interests_Tab_CompanyInterestsView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(12, 13);
});

Then("General , Criteria , Overrides , Releases tabs should be display", function checkpointTabCs (){
  var ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain;
  
  var tabGeneral = ultraTabControl.wTabCaption(0);
  var tabCriteria = ultraTabControl.wTabCaption(1);
  var tabOverrides = ultraTabControl.wTabCaption(2);
  var tabCatchups = ultraTabControl.wTabCaption(3);
  var tabReleases = ultraTabControl.wTabCaption(4);
  
  if(aqObject.CompareProperty(tabGeneral, cmpEqual, "General")&&(aqObject.CompareProperty(tabCriteria, cmpEqual, "Criteria"))&&(aqObject.CompareProperty(tabOverrides, cmpEqual, "Overrides")&&(tabCatchups, cmpEqual, "Catchups"))&&(aqObject.CompareProperty(tabReleases, cmpEqual, "Releases")))
  {
    Log.Checkpoint("All tabs has been display")
  }
  else{
  Log.Error("Tabs are not display");
  }
});

Then("There should be interest type frame", function checkpointInterestTypeFrame (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General_Group_Box_1.MainGroupBox.Interest_Type, "Text", cmpEqual, "Interest Type");
});

Then("Company Id field should be disabled and populated with details of the company the record is opened from", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General_CompanyID.txtLink, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General_CompanyID.txtLink, "Text", cmpEqual, companyName );
});

Then("Interest Type field should be mandatory with selection control and clear and list", function checkpointInterestTypeCS (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General_InterestTypeID.LookupSearchCombo, "NullText", cmpEqual, "Please enter");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General_InterestTypeID.LookupSearchCombo, "Text", cmpEqual, "");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General_InterestTypeID.LookupSearchCombo, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General_InterestTypeID.LookupSearchCombo, "wSelectedItem", cmpEqual, -1);
});

Then("Name field should be disabled and populated with edit box", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Name.txtInner, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Name.txtInner, "Multiline", cmpEqual, true);
});

Then("Standing order reference should be disabled and populated with edit box", function checkpointDisabledSOReference (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General_StandingOrderReference.txtInner, "Enabled", cmpEqual, true);
});

Then("There should be standing orders and alerts frame", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General_Group_Box_2.MainGroupBox, "Text", cmpEqual, "Standing Orders and Alerts");
});

Then("Email field should be disabled with selection control , clear and list", function checkpointEmailCS (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General_EmailAddressID.LookupSearchCombo, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General_EmailAddressID.LookupSearchCombo, "NullText", cmpEqual, "Not Selected");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General_EmailAddressID.LookupSearchCombo, "wSelectedItem", cmpEqual, -1);
});

Then("Quantity should be disabled and populated with edit box", function checkpointQuantityDisabledCS (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Quantity.txtInner, "Enabled", cmpEqual, false);
});

Then("Always supply checkbox should be disabled", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General_AlwaysSupply.chkInternal, "Enabled", cmpEqual, false);
});

Then("Customer Reference should be disabled and populated with edit box", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_CustomerReference.txtInner, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_CustomerReference.txtInner, "Text", cmpEqual, "");
});

Then("Valid from field should be disabled with calendar control", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_ValidFromDate.txtInner, "Enabled", cmpEqual, false);
});

Then("Valid To field should be disabled with calendar control", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_ValidToDate.txtInner, "Enabled", cmpEqual, false);
});

Then("Is Cancelled checkbox field should be disabled", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_IsCancelled.chkInternal, "Enabled", cmpEqual, false);
});

Then("Suspended checkbox field should be disabled", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_IsSuspended.chkInternal, "Enabled", cmpEqual, false);
});

Then("Cancel or suspended reason field should be disabled with selection control , clear and list", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General_CancelSuspendReasonID.LookupSearchCombo, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General_CancelSuspendReasonID.LookupSearchCombo, "nullTextValue", cmpEqual, "Not Selected");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General_CancelSuspendReasonID.LookupSearchCombo, "wSelectedItem", cmpEqual, -1);
});

Then("Cancelled or suspended date field should be disabled", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_CancelledSuspendedDate, "Enabled", cmpEqual, false);
});

Then("Cancelled or suspend end date field should be disabled", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_SuspendEndDate, "Enabled", cmpEqual, false);
});

Then("Gratis reason field should be disabled", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General_GratisReasonID, "Enabled", cmpEqual, false);
});

Then("There should be frame for order overrides", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_Overrides_Group_Box_1.MainGroupBox, "WndCaption", cmpEqual, "Order Overrides");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_Overrides_Group_Box_1.MainGroupBox, "Text", cmpEqual, "Order Overrides");
});

Then("Promotion code field should be diplay with edit box", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General_Group_Box_2.MainGroupBox.MouseWheel(-4);
});

Then("Order category should be display as clear and list with not selected", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_Overrides_OrderCategory, "DefaultNotSelectedMessage", cmpEqual, "Not Selected");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_Overrides_OrderCategory.LookupSearchCombo, "wSelectedItem", cmpEqual, -1);
});

Then("Override Discount checkbox should be display", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_OverrideDiscount.chkInternal, "Visible", cmpEqual, true);
});

Then("Discount field should be disabled with selection control , clear and list", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_Overrides_DiscountID.LookupSearchCombo, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_Overrides_DiscountID.LookupSearchCombo, "NullText", cmpEqual, "Not Selected");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_Overrides_DiscountID.LookupSearchCombo, "wSelectedItem", cmpEqual, -1);
});

Then("Discount % field should be disabled", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General_DiscountPercentage.txtInner, "Enabled", cmpEqual, false);
});

Then("Override currency checkbox should be display", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General_OverrideCurrency.chkInternal, "Visible", cmpEqual, true);
});

Then("Currency field should be disabled with selection control , clear and list", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General_CurrencyID.LookupSearchCombo, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General_CurrencyID.LookupSearchCombo, "NullText", cmpEqual, "Not Selected");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General_CurrencyID.LookupSearchCombo, "wItemCount", cmpEqual, 0);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General_CurrencyID.LookupSearchCombo, "wSelectedItem", cmpEqual, -1);
});

Then("Override release day checkbox should be display", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_OverrideReleaseDay.chkInternal, "Visible", cmpEqual, true);
});

Then("fields for the days of the week should be disabled", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_ReleaseDayMonday.chkInternal, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_ReleaseDayTuesday.chkInternal, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_ReleaseDayWednesday.chkInternal, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_ReleaseDayThursday.chkInternal, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_ReleaseDayFriday.chkInternal, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_ReleaseDaySaturday.chkInternal, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_ReleaseDaySunday.chkInternal, "Enabled", cmpEqual, false);
  
  
});


Then("Do not merge checkbox should be display", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_DoNotMerge.chkInternal, "Visible", cmpEqual, true);
});

Then("There should be detail section frame", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_Group_Box_1.MainGroupBox, "WndCaption", cmpEqual, "Detail Selection");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_Group_Box_1.MainGroupBox, "Text", cmpEqual, "Detail Selection");
});

Then("Publisher field should be display with selection control , clear and list", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_PublisherID.LookupSearchCombo, "NullText", cmpEqual, "Not Selected");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_PublisherID.LookupSearchCombo, "wItemCount", cmpEqual, 0);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_PublisherID.LookupSearchCombo, "wSelectedItem", cmpEqual, -1);
});

Then("Imprint field should be display with selection control , clear and list", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_OrganizationID.LookupSearchCombo, "NullText", cmpEqual, "Not Selected");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_OrganizationID.LookupSearchCombo, "wItemCount", cmpEqual, 0);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_OrganizationID.LookupSearchCombo, "wSelectedItem", cmpEqual, -1);
});

Then("Product Series field should be display with selection control , clear and list", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_ProductSeriesID.txtLink, "CanSelect", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_ProductSeriesID.txtLink, "WndCaption", cmpEqual, "");
});

Then("Product List field should be display with selection control , clear and list", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_ProductListID.LookupSearchCombo, "NullText", cmpEqual, "Not Selected");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_ProductListID.LookupSearchCombo, "wItemCount", cmpEqual, 0);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_ProductListID.LookupSearchCombo, "wSelectedItem", cmpEqual, -1);
});

Then("Product sub type field should be display with selection control , clear and list", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_SubTypeID.LookupSearchCombo, "NullText", cmpEqual, "Not Selected");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_SubTypeID.LookupSearchCombo, "wItemCount", cmpEqual, 0);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_SubTypeID.LookupSearchCombo, "wSelectedItem", cmpEqual, -1);
});

Then("Version Type field should be display with selection control , clear and list", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_VersionTypeID.LookupSearchCombo, "NullText", cmpEqual, "Not Selected");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_VersionTypeID.LookupSearchCombo, "wItemCount", cmpEqual, 0);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_VersionTypeID.LookupSearchCombo, "wSelectedItem", cmpEqual, -1);
});

Then("Author field should be display with selection control , clear and list", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_AuthorID, "CanSelect", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_AuthorID, "WndCaption", cmpEqual, "");
});

Then("Audience Type field should be display with selection control , clear and list", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_AudienceTypeID.LookupSearchCombo, "NullText", cmpEqual, "Not Selected");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_AudienceTypeID.LookupSearchCombo, "wItemCount", cmpEqual, 0);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_AudienceTypeID.LookupSearchCombo, "wSelectedItem", cmpEqual, -1);
});

Then("Language field should be display with selection control , clear and list", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_LanguageID.LookupSearchCombo, "NullText", cmpEqual, "Not Selected");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_LanguageID.LookupSearchCombo, "wItemCount", cmpEqual, 0);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_LanguageID.LookupSearchCombo, "wSelectedItem", cmpEqual, -1);
});

Then("There should be Classification frame with radio buttons", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_Grouped_Options_Classifications, "WndCaption", cmpEqual, "Classifications");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_Grouped_Options_Classifications, "Text", cmpEqual, "Classifications");
});

Then("AND all classification below radio button should be selected by default", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_Grouped_Options_Classifications.AND_all_classifications_below, "WndCaption", cmpEqual, "AND all classifications below");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_Grouped_Options_Classifications.AND_all_classifications_below, "wChecked", cmpEqual, true);
});

Then("OR any classification below radio button should be display", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_Grouped_Options_Classifications.OR_any_classifications_below, "Visible", cmpEqual, true);
});

Then("There should be list view with the following column headings", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_Sub_Type_Control_1.AptifyControlBase_Fill_Panel.flexSubType, "SelectionMode", cmpEqual, "ListBox");
});

Then("Classification Type , Lookup Code , Classification Description column headings should be display", function checkpointCriteriaTabColumnsHeadingsCS (){
  var C1FlexGridColumnsHeadings = Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_Sub_Type_Control_1.AptifyControlBase_Fill_Panel.flexSubType;
  var clmClassificationType = C1FlexGridColumnsHeadings.get_Item(0, 1).OleValue;
  var clmLookupCode = C1FlexGridColumnsHeadings.get_Item(0, 2).OleValue;
  var clmClassificationDescription = C1FlexGridColumnsHeadings.get_Item(0, 3).OleValue;
  
  if(aqObject.CompareProperty(clmClassificationType, cmpEqual, "Classification Type")&&(aqObject.CompareProperty(clmLookupCode, cmpEqual, "Lookup Code"))&&(aqObject.CompareProperty(clmClassificationDescription, cmpEqual, "Classification Description")))
  {
    Log.Checkpoint("Grid with column headings has been display")
  }
  else{
  Log.Error("Grid with column haedings are not display");
  }
  
});

Then("There should be Ship To frame", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Overrides.PTCompanyInterests_Tabs_Overrides.PTCompanyInterests_Tabs_Overrides_Group_Box_2.MainGroupBox, "Text", cmpEqual, "Ship To");
});

Then("Override Ship To Address with Address Control should be disabled", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Overrides.PTCompanyInterests_Tabs_Overrides.PTCompanyInterests_OverrideShipToAddress.chkInternal, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Overrides.PTCompanyInterests_Tabs_Overrides.PTCompanyInterests_ShipToRoleID.txtLink, "Enabled", cmpEqual, false);
});

Then("There should be Bill To frame", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Overrides.PTCompanyInterests_Tabs_Overrides.PTCompanyInterests_Tabs_Overrides_Group_Box_3.MainGroupBox, "Text", cmpEqual, "Bill To");
  
});

Then("Override Bill To Address with Address Control should be disabled", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Overrides.PTCompanyInterests_Tabs_Overrides.PTCompanyInterests_OverrideBillToAddress.chkInternal, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Overrides.PTCompanyInterests_Tabs_Overrides.PTCompanyInterests_BillToRoleID.txtLink, "Enabled", cmpEqual, false);
});

Then("There should be End User frame", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Overrides.PTCompanyInterests_Tabs_Overrides.PTCompanyInterests_Tabs_Overrides_Group_Box_4.MainGroupBox, "Text", cmpEqual, "End User");
});

Then("Override End user with Address Control should be disabled", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Overrides.PTCompanyInterests_Tabs_Overrides.PTCompanyInterests_Tabs_Overrides_OverrideEndUser.chkInternal, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Overrides.PTCompanyInterests_Tabs_Overrides.PTCompanyInterests_Tabs_Overrides_LicenseeRoleID.txtLink, "Enabled", cmpEqual, false);
});

Then("There should be grid with columns for Released on Date,Product,Product Version,S\\/O Ref,Quantity,Non supply,Is Catchup,Site,POD Site,Id", function (){
  var radgridviewTabReleases = Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Form_Releases_Tab.PTCompanyInterests_Releases.PTCompanyInterests_Releases_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var clmReleasedOnDate = radgridviewTabReleases.wColumn(0);
  var clmProduct = radgridviewTabReleases.wColumn(1);
  var clmProductVersion = radgridviewTabReleases.wColumn(2);
  var clmSORef = radgridviewTabReleases.wColumn(3);
  var clmQuantity = radgridviewTabReleases.wColumn(4);
  var clmNonSupply = radgridviewTabReleases.wColumn(5);
  var clmSupplyInformation = radgridviewTabReleases.wColumn(6);
  var clmIsCatchup = radgridviewTabReleases.wColumn(7);
  var clmSite = radgridviewTabReleases.wColumn(8);
  var clmPODSite = radgridviewTabReleases.wColumn(9);
  var clmId = radgridviewTabReleases.wColumn(10);
  
  if(aqObject.CompareProperty(clmReleasedOnDate, cmpEqual, "Released On Date")&&(aqObject.CompareProperty(clmProduct, cmpEqual, "Product"))&&(aqObject.CompareProperty(clmProductVersion, cmpEqual, "Product Version")&&(clmSORef, cmpEqual, "S/O Ref"))&&(aqObject.CompareProperty(clmPODSite, cmpEqual, "POD Site"))&&(aqObject.CompareProperty(clmId, cmpEqual, "ID")))
  {
    Log.Checkpoint("Grid with column names has been display")
  }
  else{
  Log.Error("Grid with column names are not display");
  }
  
  if(aqObject.CompareProperty(clmQuantity, cmpEqual, "Quantity")&&(aqObject.CompareProperty(clmNonSupply, cmpEqual, "Non Supply"))&&(aqObject.CompareProperty(clmSupplyInformation, cmpEqual, "Supply Information")&&(clmIsCatchup, cmpEqual, "Is Catchup"))&&(aqObject.CompareProperty(clmSite, cmpEqual, "Site")))
  {
    Log.Checkpoint("Grid with column names has been display")
  }
  else{
  Log.Error("Grid with column names are not display");
  }
});

Then("There should be no data", function (){
  var radgridviewTabReleases = Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Form_Releases_Tab.PTCompanyInterests_Releases.PTCompanyInterests_Releases_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var totalRowCount = radgridviewTabReleases.wRowCount;
  if(aqObject.CompareProperty(totalRowCount, cmpEqual, 0))
  {
    Log.Checkpoint("Releases tab should be blank")
  }
  else{
  Log.Error("Releases tab should not be blank");
  }
});

Given("I click on Emails tab", function clickEmailsTabCS (){
  var ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain;
  ultraTabControl.ClickTab(0);
  ultraTabControl.PT_Companies_Companies_Form_NewContact_Tab.PT_Companies_Companies_NewContact.PT_Companies_Contact_TopLeft_TabControl.tabMain.Click(184, 12);
});

Given("I click on New button from Emails tab", function clickNewBtnEmailsCS (){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_Companies_Companies_Form_NewContact_Tab.PT_Companies_Companies_NewContact.PT_Companies_Contact_TopLeft_TabControl.tabMain.Companies_Contact_EmailAddresses.Companies_Contact_EmailAddresses.Companies_Contact_EmailAddresses_CompanyEmails.zAptifyControlBase_Toolbars_Dock_Area_Top.ClickItem("SubType|New");
});

Given("I select Email Type {arg}", function selectEmailTypeCS (emailType){
  var ultraTabControl = Aliases.Aptify_Shell.SubTypeTemplateForm.PTCompanyEmailAddresses_Form.PTCompanyEmailAddresses_Tabs.tabMain;
  ultraTabControl.PTCompanyEmailAddresses_Tabs_General.PTCompanyEmailAddresses_Tabs_General.PTCompanyEmailAddresses_Tabs_General_EmailTypeID.LookupSearchCombo.ClickItem(emailType);
});

Given("I enter Email", function (){
  var subTypeTemplateForm = Aliases.Aptify_Shell.SubTypeTemplateForm;
  var ultraTabControl = subTypeTemplateForm.PTCompanyEmailAddresses_Form.PTCompanyEmailAddresses_Tabs.tabMain;
  ultraTabControl.ClickTab(0);
  ultraTabControl.PTCompanyEmailAddresses_Tabs_General.PTCompanyEmailAddresses_Tabs_General.PTCompanyEmailAddresses_Email.txtInner.Keys("lionel.clement@ingenta.com");
  
});

Then("I select Interest Type {arg}", function (interestType){ 
  if(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.Exists){
    let txtInterestTypeCompany = Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General_InterestTypeID.LookupSearchCombo;
    txtInterestTypeCompany.ClickItem(interestType);
    txtInterestTypeCompany.Keys("[Tab]");
  }
  else{
    let txtInterestTypePerson = Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General_InterestTypeID.LookupSearchCombo;
    txtInterestTypePerson.ClickItem(interestType);
    txtInterestTypePerson.Keys("[Tab]");
  }
});


Then("I click on Overrides tab", function clickOverridesTabCS (){
  Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.ClickTab("Overrides");
});

Then("I click on Releases tab", function clickREleasesTabCS (){
  Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.ClickTab("Releases");
});

Given("I enter company name", function enterCompanyName (){
  var companyName = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    {
    for(var i=0; i < 9; i++)
    companyName += possible.charAt(Math.floor(Math.random() * possible.length));
     }
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_1.CompanyCustomerWizard.CompanyCustomerWizard_PT_Group_Box_1.PTCompanyNamesCustomerWizard.PTCompanyNamesCustomerWizard_FirstName.txtInner.Keys(companyName);
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_1.CompanyCustomerWizard.CompanyCustomerWizard_PT_Group_Box_1.PTCompanyNamesCustomerWizard.PTCompanyNamesCustomerWizard_FirstName.txtInner.Keys("[Tab]")
   parCompanyName = companyName
});

//dashboard


Then("There should be buttons for Standing Order Release, Standing Order \\(Calc) ,Standing Order Catchups ,Billing Wave Release ,Find Customer ,Find Product,Find Orders", function checkpointVerifySODashboard (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea3.DashCtrlWrapper.ButtonBar.UltraButton6, "WndCaption", cmpEqual, "Standing Order Release");
  aqObject.CheckProperty(Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea2_new.DashCtrlWrapper.ButtonBar.UltraButton3, "WndCaption", cmpEqual, "Standing Order (Calc)");
  aqObject.CheckProperty(Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea3.DashCtrlWrapper.ButtonBar.UltraButton7, "WndCaption", cmpEqual, "Standing Order Catchups");
  aqObject.CheckProperty(Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea3.DashCtrlWrapper.ButtonBar.UltraButton8, "WndCaption", cmpEqual, "Standing Order Reprocess Orders");
  aqObject.CheckProperty(Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea3.DashCtrlWrapper.ButtonBar.UltraButton9, "WndCaption", cmpEqual, "Find Customer");
  aqObject.CheckProperty(Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea3.DashCtrlWrapper.ButtonBar.UltraButton3, "WndCaption", cmpEqual, "Find Product");
  aqObject.CheckProperty(Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea3.DashCtrlWrapper.ButtonBar.UltraButton10, "WndCaption", cmpEqual, "Find Orders");
});

Then("There should be a field for Report Type \\(list) with buttons for Refresh , Save", function (){

  aqObject.CheckProperty(Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.refreshButton, "WinFormsControlName", cmpEqual, "refreshButton");
  aqObject.CheckProperty(Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.saveButton, "WinFormsControlName", cmpEqual, "saveButton");
  aqObject.CheckProperty(Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.label, "WndCaption", cmpEqual, "Report Type");
});

Then("I drop the Report Type list and select {arg}", function selectReportTypeListSO (reportType){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.dropdownActions.ClickItem(reportType);
});



Then("There should be columns for Start Date,Run Duration,No. Of Invoices,No. Of Proformas,No. Of Quotations,No. Of Failures,Gateway transfer ID,Process flow Run Number,Last Message,ID", function checkpointVerifySORuns (){
  var radGridViewStandingOrderRuns = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.panel1.ViewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1
  var clmStartDate = radGridViewStandingOrderRuns.wColumn(0);
  var clmRunDuration = radGridViewStandingOrderRuns.wColumn(1);
  var clmInvoicesNumber = radGridViewStandingOrderRuns.wColumn(2);
  var clmProformasNumber = radGridViewStandingOrderRuns.wColumn(3);
  var clmQuotationsNumber = radGridViewStandingOrderRuns.wColumn(4);
  var clmFailureNumber = radGridViewStandingOrderRuns.wColumn(5);
  var clmGatewayTransferId = radGridViewStandingOrderRuns.wColumn(6);
  var clmProcessFlowRunNumber = radGridViewStandingOrderRuns.wColumn(7);
  var clmLastMessage = radGridViewStandingOrderRuns.wColumn(8);
  var clmId = radGridViewStandingOrderRuns.wColumn(9);
  
  if(aqObject.CompareProperty(clmStartDate, cmpEqual, "Start Date")&&(aqObject.CompareProperty(clmRunDuration, cmpEqual, "Run Duration"))&&(aqObject.CompareProperty(clmInvoicesNumber, cmpEqual, "No. Of Invoices")&&(clmProformasNumber, cmpEqual, "No. Of Proformas"))&&(aqObject.CompareProperty(clmQuotationsNumber, cmpEqual, "No. Of Quotations"))&&(aqObject.CompareProperty(clmId, cmpEqual, "ID")))
  {
    Log.Checkpoint("Grid with column names has been display")
  }
  else{
  Log.Error("Grid with column names are not display");
  }
  
  if(aqObject.CompareProperty(clmFailureNumber , cmpEqual ,"No. Of Failures")&&(aqObject.CompareProperty(clmGatewayTransferId, cmpEqual, "Gateway Transfer ID"))&&(aqObject.CompareProperty(clmProcessFlowRunNumber, cmpEqual, "Process Flow Run Number"))&&(aqObject.CompareProperty(clmLastMessage, cmpEqual, "Last Message")))
  {
    Log.Checkpoint("Grid with column names has been display")
  }
  else{
  Log.Error("Grid with column names are not display");
  
  }
  
});

Then("There should be columns for Ship To,Bill To,Interest Type,Product,Product Version,Quantity,Currency Type,Non Supply,Supply Information,S\\/O Ref,Site,POD Site,Released On Date and ID", function checkpointVerifySOFutureReleases (){
 // var panel = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.panel1.ViewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var radgridviewStandingOrders =  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.panel1.ViewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1
  
  var clmShipTo = radgridviewStandingOrders.wColumn(0);
  var clmBillTo = radgridviewStandingOrders.wColumn(1);
  var clmProduct = radgridviewStandingOrders.wColumn(3);
  var clmProductVersion = radgridviewStandingOrders.wColumn(4);
  var clmSORef = radgridviewStandingOrders.wColumn(9);
  var clmQuantity = radgridviewStandingOrders.wColumn(5);
  var clmNonSupply = radgridviewStandingOrders.wColumn(7);
  var clmSupplyInformation = radgridviewStandingOrders.wColumn(8);
  var clmInterestType = radgridviewStandingOrders.wColumn(2);
  var clmSite = radgridviewStandingOrders.wColumn(12);
  var clmPODSite = radgridviewStandingOrders.wColumn(13);
  var clmId = radgridviewStandingOrders.wColumn(15);
  var clmReleasedOnDate = radgridviewStandingOrders.wColumn(14)
  var clmCurrencyType = radgridviewStandingOrders.wColumn(6);
  
  if(aqObject.CompareProperty(clmReleasedOnDate, cmpEqual, "Released On Date")&&(aqObject.CompareProperty(clmProduct, cmpEqual, "Product"))&&(aqObject.CompareProperty(clmProductVersion, cmpEqual, "Product Version")&&(clmSORef, cmpEqual, "S/O Ref"))&&(aqObject.CompareProperty(clmPODSite, cmpEqual, "POD Site"))&&(aqObject.CompareProperty(clmId, cmpEqual, "ID"))&&(aqObject.CompareProperty(clmBillTo, cmpEqual, "Bill To")))
  {
    Log.Checkpoint("Grid with column names has been display")
  }
  else{
  Log.Error("Grid with column names are not display");
  }
  
  if(aqObject.CompareProperty(clmQuantity, cmpEqual, "Quantity")&&(aqObject.CompareProperty(clmNonSupply, cmpEqual, "Non Supply"))&&(aqObject.CompareProperty(clmSupplyInformation, cmpEqual, "Supply Information")&&(clmShipTo, cmpEqual, "Ship To"))&&(aqObject.CompareProperty(clmSite, cmpEqual, "Site"))&&(aqObject.CompareProperty(clmInterestType, cmpEqual, "Interest Type"))&&(aqObject.CompareProperty(clmCurrencyType, cmpEqual, "Currency Type")))
  {
    Log.Checkpoint("Grid with column names has been display")
  }
  else{
  Log.Error("Grid with column names are not display");
  }
  
});

Then("In catchups list there should be columns for Ship To,Bill To,Interest Type,Product,Product Version,Quantity,Currency Type,Non Supply,Supply Information,S\\/O Ref,Site,POD Site,Released On Date and ID", function checkpointVerifySOCatchups (){
  var radgridviewStandingOrders =  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.panel1.ViewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1
  var clmShipTo = radgridviewStandingOrders.wColumn(0);
  var clmBillTo = radgridviewStandingOrders.wColumn(1);
  var clmProduct = radgridviewStandingOrders.wColumn(3);
  var clmProductVersion = radgridviewStandingOrders.wColumn(4);
  var clmSORef = radgridviewStandingOrders.wColumn(9);
  var clmQuantity = radgridviewStandingOrders.wColumn(5);
  var clmNonSupply = radgridviewStandingOrders.wColumn(7);
  var clmSupplyInformation = radgridviewStandingOrders.wColumn(8);
  var clmInterestType = radgridviewStandingOrders.wColumn(2);
  var clmSite = radgridviewStandingOrders.wColumn(10);
  var clmPODSite = radgridviewStandingOrders.wColumn(11);
  var clmId = radgridviewStandingOrders.wColumn(13);
  var clmReleasedOnDate = radgridviewStandingOrders.wColumn(12)
  var clmCurrencyType = radgridviewStandingOrders.wColumn(6);
  
  if(aqObject.CompareProperty(clmReleasedOnDate, cmpEqual, "Released On Date")&&(aqObject.CompareProperty(clmProduct, cmpEqual, "Product"))&&(aqObject.CompareProperty(clmProductVersion, cmpEqual, "Product Version")&&(clmSORef, cmpEqual, "S/O Ref"))&&(aqObject.CompareProperty(clmPODSite, cmpEqual, "POD Site"))&&(aqObject.CompareProperty(clmId, cmpEqual, "ID"))&&(aqObject.CompareProperty(clmBillTo, cmpEqual, "Bill To")))
  {
    Log.Checkpoint("Grid with column names has been display")
  }
  else{
  Log.Error("Grid with column names are not display");
  }
  
  if(aqObject.CompareProperty(clmQuantity, cmpEqual, "Quantity")&&(aqObject.CompareProperty(clmNonSupply, cmpEqual, "Non Supply"))&&(aqObject.CompareProperty(clmSupplyInformation, cmpEqual, "Supply Information")&&(clmShipTo, cmpEqual, "Ship To"))&&(aqObject.CompareProperty(clmSite, cmpEqual, "Site"))&&(aqObject.CompareProperty(clmInterestType, cmpEqual, "Interest Type"))&&(aqObject.CompareProperty(clmCurrencyType, cmpEqual, "Currency")))
  {
    Log.Checkpoint("Grid with column names has been display")
  }
  else{
  Log.Error("Grid with column names are not display");
  }
});

Then("Standing Orders dashboard should be displayed", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.pnlToolBar.lblTitle, "WndCaption", cmpEqual, "Standing Orders");
});

//Persons

When("I click on Emails tab", function clickPersonsEmailsTab (){
  var ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain;
  ultraTabControl.PTPersons_Contact_Tab.PTPersons_Contact_Tab.PT_Persons_Contact_TopLeft_TabControl.tabMain.ClickTab("Emails");
});

When("I click on New button from Emails tab", function clickNewBtnEmailsPersons (){
  var ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain;
  
  var ultraTabControl2 = ultraTabControl.PTPersons_Contact_Tab.PTPersons_Contact_Tab.PT_Persons_Contact_TopLeft_TabControl.tabMain;
  
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.PTPersons_Contact_Tab.PTPersons_Contact_Tab.PT_Persons_Contact_TopLeft_TabControl.tabMain.Persons_Contact_EmailAddresses.Persons_Contact_EmailAddresses.Persons_Contact_EmailAddresses_PersonEmails.zAptifyControlBase_Toolbars_Dock_Area_Top.ClickItem("SubType|New");
});

When("I select Email Type {arg}", function selectEmailTypePersons (emailType){
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTPersonEmailAddresses_Form.PTPersonEmailAddresses_Tabs.tabMain.PTPersonEmailAddresses_Tabs_General.PTPersonEmailAddresses_Tabs_General.PTPersonEmailAddresses_Tabs_General_EmailTypeID.LookupSearchCombo.ClickItem(emailType);
});

When("I enter Email", function (){
  subTypeTemplateForm = Aliases.Aptify_Shell.SubTypeTemplateForm;
  ultraTextEditor = subTypeTemplateForm.PTPersonEmailAddresses_Form.PTPersonEmailAddresses_Tabs.tabMain.PTPersonEmailAddresses_Tabs_General.PTPersonEmailAddresses_Tabs_General.PTPersonEmailAddresses_Email.txtInner;
  ultraTextEditor.Click(79, 9);
  ultraTextEditor.EmbeddableTextBoxWithUIPermissions.Keys("lionel.clement@ingenta.com");
  subTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
  
});

When("I click on Profile from Perosons Id Wizard", function clickProfileTabPersons (){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain.ClickTab("Profile");
});

When("I click on Marketing tab from Persons Id wizard", function clickMarketingTabPersons (){
  var ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain;
  ultraTabControl.PT_OTC_Persons_Profile.PT_OTC_Persons_Profile.tabMain.ClickTab("Marketing");
});

When("I click Interests tab from Persons Id wizard", function clickInterestTabPersons (){
  var ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Persons_Form.PT_OTC_Persons_Tabs.tabMain;
  
  var ultraTabControl2 = ultraTabControl.PT_OTC_Persons_Profile.PT_OTC_Persons_Profile.tabMain;
  
  ultraTabControl2.PTPersons_Tabs_Marketing.Persons_PTPersons_Tabs_Marketing.PTPersons_Tabs_Marketing_TabGroup.tabMain.ClickTab("Interests");
});



Then("Perosn Id field should be disabled and populated with details of the Person the record is opened from", function (){
  var personId = personFamilyName+", "+personName;
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General_PersonID.txtLink, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General_PersonID.txtLink, "Text", cmpEqual, personId);
  
});



When("I click on Open on Finish checkbox", function clickCheckboxOpenOnFinish (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_CompanyDisplay.chkInternal.wState = cbChecked;
});



Then("General , Criteria , Overrides , Releases tabs should be display under New Perosons Interest Record wizard", function checkpointTabsFromNewPersonsInterestRecord (){
  var ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain;
  var tabGeneral = ultraTabControl.wTabCaption(0);
  var tabCriteria = ultraTabControl.wTabCaption(1);
  var tabOverrides = ultraTabControl.wTabCaption(2);
  var tabCatchups = ultraTabControl.wTabCaption(3);
  var tabReleases = ultraTabControl.wTabCaption(4);
  
  if(aqObject.CompareProperty(tabGeneral, cmpEqual, "General")&&(aqObject.CompareProperty(tabCriteria, cmpEqual, "Criteria"))&&(aqObject.CompareProperty(tabOverrides, cmpEqual, "Overrides")&&(tabCatchups, cmpEqual, "Catchups"))&&(aqObject.CompareProperty(tabReleases, cmpEqual, "Releases")))
  {
    Log.Checkpoint("All tabs has been display")
  }
  else{
  Log.Error("Tabs are not display");
  }
});

Then("Interest type frame should be display", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General_Group_Box_1.MainGroupBox, "Text", cmpEqual, "Interest Type");
});


Then("Interest Type field should be mandatory with selection control and clear and list under New Perosons Interest Record wizard", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General_InterestTypeID.LookupSearchCombo, "NullText", cmpEqual, "Please enter");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General_InterestTypeID.LookupSearchCombo, "Text", cmpEqual, "");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General_InterestTypeID.LookupSearchCombo, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General_InterestTypeID.LookupSearchCombo, "wSelectedItem", cmpEqual, -1);
});

Then("Name field should be disabled and populated with edit box under New Perosons Interest Record wizard", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Name.txtInner, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Name.txtInner, "Multiline", cmpEqual, true);
});

Then("Standing order reference should be disabled and populated with edit box under New Perosons Interest Record wizard", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General_StandingOrderReference.txtInner, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General_StandingOrderReference, "Edit", cmpEqual, true);
});
function aa()
{
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General_StandingOrderReference, "Edit", cmpEqual, false);
}


Then("There should be standing orders and alerts frame under New Perosons Interest Record wizard", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General_Group_Box_2.MainGroupBox, "Text", cmpEqual, "Standing Orders and Alerts");
  
});

Then("Email field should be disabled with selection control , clear and list under New Perosons Interest Record wizard", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General_EmailAddressID.LookupSearchCombo, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General_EmailAddressID.LookupSearchCombo, "NullText", cmpEqual, "Not Selected");
 
});



Then("Quantity should be disabled and populated with edit box under New Perosons Interest Record wizard", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Quantity.txtInner, "Enabled", cmpEqual, false);
});

Then("Always supply checkbox should be disabled under New Perosons Interest Record wizard", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General_AlwaysSupply.chkInternal, "Enabled", cmpEqual, false);
});

Then("Customer Reference should be disabled and populated with edit box under New Perosons Interest Record wizard", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_CustomerReference.txtInner, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_CustomerReference.txtInner, "Text", cmpEqual, "");
});

Then("Valid from field should be disabled with calendar control under New Perosons Interest Record wizard", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_ValidFromDate.txtInner, "Enabled", cmpEqual, false);
});

Then("Valid To field should be disabled with calendar control under New Perosons Interest Record wizard", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_ValidToDate.txtInner, "Enabled", cmpEqual, false);
});

Then("Is Cancelled checkbox field should be disabled under New Perosons Interest Record wizard", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_IsCancelled.chkInternal, "Enabled", cmpEqual, false);
});

Then("Suspended checkbox field should be disabled under New Perosons Interest Record wizard", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_IsSuspended.chkInternal, "Enabled", cmpEqual, false);
});


Then("Cancel or suspended reason field should be disabled with selection control , clear and list under New Perosons Interest Record wizard", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General_CancelSuspendReasonID.LookupSearchCombo, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General_CancelSuspendReasonID.LookupSearchCombo, "nullTextValue", cmpEqual, "Not Selected");
});


Then("Cancelled or suspended date field should be disabled under New Perosons Interest Record wizard", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_CancelledSuspendedDate, "Enabled", cmpEqual, false);
});

Then("Cancelled or suspend end date field should be disabled under New Perosons Interest Record wizard", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_SuspendEndDate, "Enabled", cmpEqual, false);
});

Then("Gratis reason field should be disabled under New Perosons Interest Record wizard", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General_GratisReasonID, "Enabled", cmpEqual, false);
});

Then("There should be frame for order overrides under New Perosons Interest Record wizard", function (){
    aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_Overrides_Group_Box_2.MainGroupBox, "Text", cmpEqual, "Order Overrides");
});

Then("Promotion code field should be diplay with edit box under New Perosons Interest Record wizard", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General_StandingOrderPromotionID, "Edit", cmpEqual, true);
});

Then("Order category should be display as clear and list with not selected under New Perosons Interest Record wizard", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_Overrides_OrderCategory, "DefaultNotSelectedMessage", cmpEqual, "Not Selected");

  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_Overrides_OrderCategory, "CanSelect", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_Overrides_OrderCategory, "WndCaption", cmpEqual, "");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_Overrides_OrderCategory.LookupSearchCombo, "wSelectedItem", cmpEqual, -1);
});

Then("Override Discount checkbox should be display under New Perosons Interest Record wizard", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_OverrideDiscount.chkInternal, "Visible", cmpEqual, true);
});

Then("Discount field should be disabled with selection control , clear and list under New Perosons Interest Record wizard", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_Overrides_DiscountID.LookupSearchCombo, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_Overrides_DiscountID.LookupSearchCombo, "NullText", cmpEqual, "Not Selected");
  //aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_Overrides_DiscountID.LookupSearchCombo, "wSelectedItem", cmpEqual, -1);
});

Then("Discount % field should be disabled under New Perosons Interest Record wizard", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General_DiscountPercentage.txtInner, "Enabled", cmpEqual, false);
});

Then("Override currency checkbox should be display under New Perosons Interest Record wizard", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General_OverrideCurrency.chkInternal, "Visible", cmpEqual, true);
});

Then("Currency field should be disabled with selection control , clear and list under New Perosons Interest Record wizard", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General_CurrencyID.LookupSearchCombo, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General_CurrencyID.LookupSearchCombo, "NullText", cmpEqual, "Not Selected");
});

Then("Override release day checkbox should be display under New Perosons Interest Record wizard", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_OverrideReleaseDay.chkInternal, "Visible", cmpEqual, true);
});

Then("fields for the days of the week should be disabled under New Perosons Interest Record wizard", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_ReleaseDayMonday.chkInternal, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_ReleaseDayTuesday.chkInternal, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_ReleaseDayWednesday.chkInternal, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_ReleaseDayThursday.chkInternal, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_ReleaseDayFriday.chkInternal, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_ReleaseDaySaturday.chkInternal, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_ReleaseDaySunday.chkInternal, "Enabled", cmpEqual, false);
  
  
});

Then("Do not merge checkbox should be display under New Perosons Interest Record wizard", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_DoNotMerge.chkInternal, "Visible", cmpEqual, true);
});



Then("I click on Criteria tab under New Perosons Interest Record wizard", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.ClickTab("Criteria");
});

Then("There should be detail section frame under New Perosons Interest Record wizard", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria_Group_Box_1.MainGroupBox.Detail_Selection, "Text", cmpEqual, "Detail Selection");
});

Then("There should be Publisher,Imprint,Product Series,Product List,Product Sub Type,Version Type,Author,Audience Type and Language fields with selection control , clear and list", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria_PublisherID.LookupSearchCombo, "NullText", cmpEqual, "Not Selected");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria_OrganizationID.LookupSearchCombo, "NullText", cmpEqual, "Not Selected");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria_ProductListID.LookupSearchCombo, "NullText", cmpEqual, "Not Selected");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria_SubTypeID.LookupSearchCombo, "NullText", cmpEqual, "Not Selected");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria_VersionTypeID.LookupSearchCombo, "NullText", cmpEqual, "Not Selected");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria_AudienceTypeID.LookupSearchCombo, "NullText", cmpEqual, "Not Selected");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria_LanguageID.LookupSearchCombo, "NullText", cmpEqual, "Not Selected");
});

Then("There should be Classification frame with radio buttons under New Perosons Interest Record wizard", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria_Grouped_Options_Classifications, "WndCaption", cmpEqual, "Classifications");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria_Grouped_Options_Classifications, "Text", cmpEqual, "Classifications");
});

Then("AND all classification below radio button should be selected by default under New Perosons Interest Record wizard", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria_Grouped_Options_Classifications.AND_all_classifications_below, "WndCaption", cmpEqual, "AND all classifications below");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria_Grouped_Options_Classifications.AND_all_classifications_below, "wChecked", cmpEqual, true);
});

Then("OR any classification below radio button should be display under New Perosons Interest Record wizard", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria_Grouped_Options_Classifications.OR_any_classifications_below, "Visible", cmpEqual, true);
});


Then("List view with the column headings Classification Type , Lookup Code , Classification Description  should be display", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria_Sub_Type_Control_1.AptifyControlBase_Fill_Panel.flexSubType, "SelectionMode", cmpEqual, "ListBox");
    
  var C1FlexGridColumnsHeadings = Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria_Sub_Type_Control_1.AptifyControlBase_Fill_Panel.flexSubType;
  var clmClassificationType = C1FlexGridColumnsHeadings.get_Item(0, 1).OleValue;
  var clmLookupCode = C1FlexGridColumnsHeadings.get_Item(0, 2).OleValue;
  var clmClassificationDescription = C1FlexGridColumnsHeadings.get_Item(0, 3).OleValue;
  
  if(aqObject.CompareProperty(clmClassificationType, cmpEqual, "Classification Type")&&(aqObject.CompareProperty(clmLookupCode, cmpEqual, "Lookup Code"))&&(aqObject.CompareProperty(clmClassificationDescription, cmpEqual, "Classification Description")))
  {
    Log.Checkpoint("Grid with column headings has been display")
  }
  else{
  Log.Error("Grid with column haedings are not display");
  
  }
});


Then("I click on Overrides tab under New Perosons Interest Record wizard", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.ClickTab("Overrides");
});

Then("Ship To frame with Override Ship To Address with Address Control should be enabled", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Overrides.PTPersonInterests_Tabs_Overrides.PTPersonInterests_OverrideShipToAddress.chkInternal, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Overrides.PTPersonInterests_Tabs_Overrides.PTPersonInterests_Tabs_Overrides_Group_Box_3.MainGroupBox, "Text", cmpEqual, "Ship To");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Overrides.PTPersonInterests_Tabs_Overrides.PTPersonInterests_ShipToRoleID.txtLink, "Enabled", cmpEqual, false);
});

Then("Bill To frame with Override Bill To Address with Address Control should be enabled", function (){
  
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Overrides.PTPersonInterests_Tabs_Overrides.PTPersonInterests_Tabs_Overrides_Group_Box_1.MainGroupBox, "Text", cmpEqual, "Bill To");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Overrides.PTPersonInterests_Tabs_Overrides.PTPersonInterests_OverrideBillToAddress.chkInternal, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Overrides.PTPersonInterests_Tabs_Overrides.PTPersonInterests_BillToRoleID.txtLink, "Enabled", cmpEqual, false);
});

Then("End User frame with Override End user with Address Control should be enabled", function (){
  
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Overrides.PTPersonInterests_Tabs_Overrides.PTPersonInterests_Tabs_Overrides_Group_Box_4.MainGroupBox, "Text", cmpEqual, "End User");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Overrides.PTPersonInterests_Tabs_Overrides.PTPersonInterests_Tabs_Overrides_OverrideEndUser.chkInternal, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Overrides.PTPersonInterests_Tabs_Overrides.PTPersonInterests_LicenseeRoleID.txtLink, "Enabled", cmpEqual, false);
});

Then("I click on Releases tab under New Perosons Interest Record wizard", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.ClickTab("Releases");
});

Then("There should be grid with columns for Released on Date,Product,Product Version,S\\/O Ref,Quantity,Non supply,Is Catchup,Site,POD Site,Id under New Perosons Interest Record wizard", function (){
  var radgridviewTabReleases = Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Form_Releases_Tab.PTPersonInterests_Releases.PTPersonInterests_Releases_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var clmReleasedOnDate = radgridviewTabReleases.wColumn(0);
  var clmProduct = radgridviewTabReleases.wColumn(1);
  var clmProductVersion = radgridviewTabReleases.wColumn(2);
  var clmSORef = radgridviewTabReleases.wColumn(3);
  var clmQuantity = radgridviewTabReleases.wColumn(4);
  var clmNonSupply = radgridviewTabReleases.wColumn(5);
  var clmSupplyInformation = radgridviewTabReleases.wColumn(6);
  var clmIsCatchup = radgridviewTabReleases.wColumn(7);
  var clmSite = radgridviewTabReleases.wColumn(8);
  var clmPODSite = radgridviewTabReleases.wColumn(9);
  var clmId = radgridviewTabReleases.wColumn(10);
  
  if(aqObject.CompareProperty(clmReleasedOnDate, cmpEqual, "Released On Date")&&(aqObject.CompareProperty(clmProduct, cmpEqual, "Product"))&&(aqObject.CompareProperty(clmProductVersion, cmpEqual, "Product Version")&&(clmSORef, cmpEqual, "S/O Ref"))&&(aqObject.CompareProperty(clmPODSite, cmpEqual, "POD Site"))&&(aqObject.CompareProperty(clmId, cmpEqual, "ID")))
  {
    Log.Checkpoint("Grid with column names has been display")
  }
  else{
  Log.Error("Grid with column names are not display");
  }
  
  if(aqObject.CompareProperty(clmQuantity, cmpEqual, "Quantity")&&(aqObject.CompareProperty(clmNonSupply, cmpEqual, "Non Supply"))&&(aqObject.CompareProperty(clmSupplyInformation, cmpEqual, "Supply Information")&&(clmIsCatchup, cmpEqual, "Is Catchup"))&&(aqObject.CompareProperty(clmSite, cmpEqual, "Site")))
  {
    Log.Checkpoint("Grid with column names has been display")
  }
  else{
  Log.Error("Grid with column names are not display");
  
  }
});

Then("There should be no data under Releases tab grid", function (){
  var radgridviewTabReleases = Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Form_Releases_Tab.PTPersonInterests_Releases.PTPersonInterests_Releases_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;

  var totalRowCount = radgridviewTabReleases.wRowCount;
  if(aqObject.CompareProperty(totalRowCount, cmpEqual, 0))
  {
    Log.Checkpoint("Releases tab should be blank")
  }
  else{
  Log.Error("Releases tab should not be blank");
  
  }
});

//ProductVersionType
When("I click on Product version types", function clickProductVersionTypesFromProductLookups (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.EntityBrowser.EntityBrowser_Fill_Panel.SplitContainer1.SplitterPanel.lvwMain.DblClickItem("Product Version Types", 0);
});

When("I click on All product version types", function clickAllProductVersionTypesProductLookups (){
  
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.enbBrowser.EntityBrowser_Fill_Panel.SplitContainer1.SplitterPanel.lvwMain.DblClickItem("All Product Version Types", 0);
});

When("I click on New button from all product version types", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(11, 21);
});

When("I enter Code {arg}", function enterCodeProductVersionTypes (code){
  
  var txtCode = Aliases.Aptify_Shell.FormTemplateForm.PT_PTLookupProductVersionTypes_Form.PT_PTLookupProductVersionTypes_Tabs.tabMain.PT_PTLookupProductVersionTypes_Tabs_General.PT_PTLookupProductVersionTypes_Tabs_General.PT_PTLookupProductVersionTypes_Code.txtInner;
  txtCode.Keys(code);
  txtCode.Keys("[Tab]");
  productVersionCode = code;
});

When("I enter Description {arg}", function enterDescriptionProductVersionTypes (description){
  
  var txtDescription = Aliases.Aptify_Shell.FormTemplateForm.PT_PTLookupProductVersionTypes_Form.PT_PTLookupProductVersionTypes_Tabs.tabMain.PT_PTLookupProductVersionTypes_Tabs_General.PT_PTLookupProductVersionTypes_Tabs_General.PT_PTLookupProductVersionTypes_Description.txtInner;
  txtDescription.Keys(description);
  productVersionDescription = description;
});

When("I check Allow Multiple checkbox", function checkCheckboxAllowMultipleCheckbox (){
  let checkBox = Aliases.Aptify_Shell.FormTemplateForm.PT_PTLookupProductVersionTypes_Form.PT_PTLookupProductVersionTypes_Tabs.tabMain.PT_PTLookupProductVersionTypes_Tabs_General.PT_PTLookupProductVersionTypes_Tabs_General.PT_PTLookupProductVersionTypes_Tabs_General_AllowMultiple.chkInternal;
  checkBox.wState = cbChecked;
  checkBox.Keys("[Tab]");
});

Then("I uncheck Allow Multiple checkbox", function uncheckAllowMultipleCheckbox (){
  
  let checkBox = Aliases.Aptify_Shell.FormTemplateForm.PT_PTLookupProductVersionTypes_Form.PT_PTLookupProductVersionTypes_Tabs.tabMain.PT_PTLookupProductVersionTypes_Tabs_General.PT_PTLookupProductVersionTypes_Tabs_General.PT_PTLookupProductVersionTypes_Tabs_General_AllowMultiple.chkInternal;
  checkBox.wState = cbUnchecked;
  checkBox.Keys("[Tab]");
});

Then("I check Is Bundle Version checkbox", function checkboxCheckIsBundleVersion (){

  let formTemplateLayout = Aliases.Aptify_Shell.FormTemplateForm.PT_PTLookupProductVersionTypes_Form.PT_PTLookupProductVersionTypes_Tabs.tabMain.PT_PTLookupProductVersionTypes_Tabs_General.PT_PTLookupProductVersionTypes_Tabs_General;
  let checkBox = formTemplateLayout.PT_PTLookupProductVersionTypes_Tabs_General_IsBundleVersion.chkInternal;
  checkBox.wState = cbChecked;
  checkBox.Keys("[Tab]");
  Aliases.Aptify_Shell.FormTemplateForm.PT_PTLookupProductVersionTypes_Form.PT_PTLookupProductVersionTypes_Tabs.tabMain.PT_PTLookupProductVersionTypes_Tabs_General.PT_PTLookupProductVersionTypes_Tabs_General.PT_PTLookupProductVersionTypes_Tabs_General_IsBundleVersion.chkInternal.ClickButton();
  
});

Then("I uncheck Is Bundle Version checkbox", function uncheckCheckboxIsBundleVersion (){
  
  Aliases.Aptify_Shell.FormTemplateForm.PT_PTLookupProductVersionTypes_Form.PT_PTLookupProductVersionTypes_Tabs.tabMain.PT_PTLookupProductVersionTypes_Tabs_General.PT_PTLookupProductVersionTypes_Tabs_General.PT_PTLookupProductVersionTypes_Tabs_General_IsBundleVersion.chkInternal.ClickButton();
  Aliases.Aptify_Shell.FormTemplateForm.PT_PTLookupProductVersionTypes_Form.PT_PTLookupProductVersionTypes_Tabs.tabMain.PT_PTLookupProductVersionTypes_Tabs_General.PT_PTLookupProductVersionTypes_Tabs_General.PT_PTLookupProductVersionTypes_Tabs_General_IsBundleVersion.chkInternal.Keys("[Tab]");
});

Then("I select valid date in Earliest Order Date field", function selectValidDateInEarliestOrderDate (){
  
  var txtEarliestOrderDate = Aliases.Aptify_Shell.FormTemplateForm.PT_PTLookupProductVersionTypes_Form.PT_PTLookupProductVersionTypes_Tabs.tabMain.PT_PTLookupProductVersionTypes_Tabs_General.PT_PTLookupProductVersionTypes_Tabs_General.PT_PTLookupProductVersionTypes_Tabs_General_EarliestOrderDate.txtInner;
  txtEarliestOrderDate.SetText(aqDateTime.Today());
});

Then("I save and close the record", function (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
});

Then("I open the same record", function openSameProductVersionTypeRecord (){
  var radGridViewProductVersionTypes = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var totalRows = radGridViewProductVersionTypes.wRowCount;
  for(var i = 0; i< totalRows; i++)
  {
    var clmCode = radGridViewProductVersionTypes.wValue(i,"Code").OleValue;
    var clmDescription = radGridViewProductVersionTypes.wValue(i,"Description").OleValue;
    if(clmCode == productVersionCode && clmDescription == productVersionDescription)
    {
      radGridViewProductVersionTypes.DblClickCell(i,"Code");
    }
  }
});

Then("I click on Record History Button", function (){

  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|View Record History");
  
});

Then("I delete the record", function deleteProductVersionTypeRecord (){
  
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Delete this Record");
  var button = Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo;
  button.ClickButton();
  Aliases.Aptify_Shell.FormTemplateForm.Close();
  button.ClickButton();
});

Then("Newly created record should be deleted from the list of all product version types", function checkpointProductVersionNewlyCretedRecordDeleted (){
  var radGridViewProductVersionTypes = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var totalRows = radGridViewProductVersionTypes.wRowCount;
  for(var i = 0; i< totalRows; i++)
  {
    var clmCode = radGridViewProductVersionTypes.wValue(i,"Code").OleValue;
    var clmDescription = radGridViewProductVersionTypes.wValue(i,"Description").OleValue;
    if(clmCode != productVersionCode && clmDescription != productVersionDescription)
    {
    {
      Log.Checkpoint("Record should be successfully deleted");
      break;
    }
    
    {
      Log.Error("Record has been display in the product version type list")
      break;
    }
    }
  }
});



Then("I close the history window", function (){
  Aliases.Aptify_Shell.EntityRecordHistoryForm.cmdClose.ClickButton();
});

Then("Focus should move to Bundle Version checkbox", function checkpointFocusMoveBundleVersion (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PT_PTLookupProductVersionTypes_Form.PT_PTLookupProductVersionTypes_Tabs.tabMain.PT_PTLookupProductVersionTypes_Tabs_General.PT_PTLookupProductVersionTypes_Tabs_General.PT_PTLookupProductVersionTypes_Tabs_General_IsBundleVersion.chkInternal, "Focused", cmpEqual, true);
});


Then("Earliest Order Date field should be mandatory", function checkpointEarliestOrderDateRequired (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.MessagePopup.messagePanel.message, "WndCaption", cmpEqual, "Earliest Order Date is required");
});

Then("Earliest Order Date field should not be mandatory", function checkpointEarliestOrderDateNotRequired (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PT_PTLookupProductVersionTypes_Form.PT_PTLookupProductVersionTypes_Tabs.tabMain.PT_PTLookupProductVersionTypes_Tabs_General.PT_PTLookupProductVersionTypes_Tabs_General.PT_PTLookupProductVersionTypes_Tabs_General_EarliestOrderDate, "Required", cmpEqual, false);
  
});

Then("Focus should move to Earliest Order Date", function checkpointFocusMoveEarliestOrderDate (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PT_PTLookupProductVersionTypes_Form.PT_PTLookupProductVersionTypes_Tabs.tabMain.PT_PTLookupProductVersionTypes_Tabs_General.PT_PTLookupProductVersionTypes_Tabs_General.PT_PTLookupProductVersionTypes_Tabs_General_EarliestOrderDate.txtInner.EmbeddableTextBoxWithUIPermissions, "Focused", cmpEqual, true);
});


//Proforma

var baseProduct;

When("I enter Todays date in standing order available date", function enterTodaysDateINSOAvailableDate (){
  
  var txtDate = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment_StandingOrderAvailableDate.txtInner;
  txtDate.Keys(aqDateTime.Today());
  txtDate.Keys("[Tab]");
});

When("I click on Classifications tab", function clikClassificationTabSO (){
  var name = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_Title.txtInner.Text.OleValue;
  var txtProductName = name;
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Classifications");
});


When("I click on New button from classifications tab", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_Classification.Products_Classification.Products_Classification_Tabs.tabMain.Products_Form_Product_Codes_Tab.Products_Product_Codes.PTProductCodes_Subtypeview.zAptifyControlBase_Toolbars_Dock_Area_Top.ClickItem("SubType|New");
});

When("I select classification code type id {arg}", function enterSOClassificationCodeTypeId (classificationCodeType){
  
  var productCodeLayout = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductCodes_Form.PTProductCodes_Tabs.tabMain.PTProductCodes_Tabs_General.PTProductCodes_Tabs_General;
  productCodeLayout.PTProductclassifications_ProductCodeTypes.LookupSearchCombo.ClickItem(classificationCodeType);
  
});

When("I select classification code {arg}", function selectClassificationCodeSO (classificationCode){
  
  var productCodeLayout = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductCodes_Form.PTProductCodes_Tabs.tabMain.PTProductCodes_Tabs_General.PTProductCodes_Tabs_General;
  productCodeLayout.LookupTree.LookupSearchCombo.ClickItem(classificationCode);
});

When("I click on Ok button from Product Classification Record window", function (){
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
});

When("I add prices to the product", function (){
  var ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain;
  ultraTabControl.ClickTab("Prices");
  var formTemplateLayout = ultraTabControl.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices;
  var productActivePriceLayout = formTemplateLayout.PTProducts_ActivePrices_PT_Group_Box_1.PTProductPrices_ActivePrices;
  
  var ddCurrencyType = productActivePriceLayout.PTProductPrices_ActivePrices_CurrencyTypeID.LookupSearchCombo;
  ddCurrencyType.ClickItem("UK Sterling");
  ddCurrencyType.Keys("[Tab]");
  var txtPrice = productActivePriceLayout.PTProductPrices_ActivePrices_Price.txtInner;
  txtPrice.Keys("£10.00");
  productActivePriceLayout.PTProductPrices_ActivePrices_Active_Button_Add.Click();
});

When("I perform Goods In for the product", function (){
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Inventory");
  clickGoodsIn();
  selectSiteWarehouse();
  clickBtnNext();
  selectProductGoodsIn(withoutPrefix);
  enterSizeGoodsIn();
  enterQtyLooseGoodsIn();
  clickAddBtnGoodsIn();
  clickBtnFinish();
});

function clickGoodsIn()
{
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton3.ClickButton();
}
function selectSiteWarehouse()
{
  var ddWarehouse = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_417.PTInventoryGoodsInWizard_NewStep1.PTInventoryGoodsInWizard_NewStep1_SiteWarehouseID.LookupSearchCombo;
  ddWarehouse.DropDown();
  ddWarehouse.ClickItem("Watford/Warehouse A");
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_417.PTInventoryGoodsInWizard_NewStep1.PTInventoryGoodsInWizard_NewStep1_Group_Box_2.MainGroupBox.Click();
}
function clickBtnNext()
{
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnNext.Click();
}
function selectProductGoodsIn()
{
  let aptify_Shell = Aliases.Aptify_Shell;
  let embeddableTextBoxWithUIPermissions = aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_ProductID.txtLink.EmbeddableTextBoxWithUIPermissions;
  embeddableTextBoxWithUIPermissions.SetText(productName);
  embeddableTextBoxWithUIPermissions.Keys("[Tab]");
  if(aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.Exists)
  {
    aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(0, "Title");
  }
  
}
function enterSizeGoodsIn()
{
  var txtSize = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_PacketSize.txtInner;
  txtSize.Click();
  txtSize.Keys("100");
  txtSize.Keys("[Tab]");
}
function enterQtyLooseGoodsIn()
{
  var txtqtyLoose = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_LooseQty.txtInner;
  txtqtyLoose.Keys("200");
  txtqtyLoose.Keys("[Tab]");
}
function clickAddBtnGoodsIn()
{
  btnAdd = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_Active_Button_Add;
  btnAdd.Click();
}
function clickBtnFinish()
{
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
}

When("I click on Inventory tab to change the supply status", function (){
  var aptify_Shell = Aliases.Aptify_Shell;
  var formTemplateForm = Aliases.Aptify_Shell.FormTemplateForm;
  var ultraTabControl = formTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain;
  ultraTabControl.ClickTab("Inventory");
  
  var ultraTabControl2 = ultraTabControl.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain;
  
  ultraTabControl2.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(0, "Versions");
  ultraTabControl = formTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain;
  
  var inventorySiteLayout = ultraTabControl.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General;
  inventorySiteLayout.PTInventorySites_Tabs_General_SiteStatusID.LookupSearchCombo.ClickItem("Open");
  
  var defaultPickingLocation = inventorySiteLayout.PTInventorySites_Tabs_General_DefaultPickingLocationID.txtLink;
  defaultPickingLocation.Keys("WAF3C01B");
  defaultPickingLocation.Keys("[Tab]");
  
  formTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
});


When("I save and close the product record", function (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
});

When("I open customer record {arg}", function (customerName1){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton11.ClickButton();
  let splitContainer = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1;
  let textBox = splitContainer.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  textBox.SetText(customerName1);
  customerName = customerName1;
  textBox.Keys("[Enter]");
  if(splitContainer.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.Exists)
  {
      splitContainer.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(0, "Name");
  }

});

When("I click on criteria tab", function (){
  if(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.Exists)
  {
    Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.ClickTab("Criteria");
  }
  else
  {
    Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.ClickTab("Criteria");
  }
  
});


When("I select same Imprint {arg}", function enterSameImprintSOClassificatioTab (imprint){
  if(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria.Exists)
  {
    Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria_OrganizationID.LookupSearchCombo.ClickItem(imprint);
  }
  else
  {
    Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_OrganizationID.LookupSearchCombo.ClickItem(imprint)
  }
  
});



When("I select Version Type {arg}", function enterSameVersionTypeSOClassificatioTab (versionType){
  if(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria.Exists)
  {
    Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria_VersionTypeID.LookupSearchCombo.ClickItem(versionType);
  }
  else
  {
    Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_VersionTypeID.LookupSearchCombo.ClickItem(versionType);
  }
});

When("I select OR Any Classification Below", function checkORAnyClassificationRadioBtn (){
  if(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria.Exists)
  {
    Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria_Grouped_Options_Classifications.OR_any_classifications_below.ClickButton();
  }
  else{
  Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_Grouped_Options_Classifications.OR_any_classifications_below.ClickButton();
  }
});

When("I select same classification Type {arg}", function selectSameClassificationTypeSO (classificationType){
  if(Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria.Exists)
  {
  Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria.PTPersonInterests_Tabs_Criteria_Sub_Type_Control_1.zAptifyControlBase_Toolbars_Dock_Area_Top.ClickItem("SubType|New");
  var interestClassificationsLayout = Aliases.Aptify_Shell.SubTypeTemplateForm.PTInterestClassifications_Form.PTInterestClassifications_Tabs.tabMain.PTInterestClassifications_Tabs_General.PTInterestClassifications_Tabs_General;
  interestClassificationsLayout.PTInterestClassifications_Tabs_General_ProductCodeTypes.LookupSearchCombo.ClickItem(classificationType);
  }
  else
  {
    Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria.PTCompanyInterests_Tabs_Criteria_Sub_Type_Control_1.zAptifyControlBase_Toolbars_Dock_Area_Top.ClickItem("SubType|New");
    Aliases.Aptify_Shell.SubTypeTemplateForm.PTInterestClassifications_Form.PTInterestClassifications_Tabs.tabMain.PTInterestClassifications_Tabs_General.PTInterestClassifications_Tabs_General.PTInterestClassifications_Tabs_General_ProductCodeTypes.LookupSearchCombo.ClickItem(classificationType);
  }
});

When("I select same Lookup Code {arg}", function selectSameLookUPCodeSO (lookupCode){
  interestClassificationsLayout = Aliases.Aptify_Shell.SubTypeTemplateForm.PTInterestClassifications_Form.PTInterestClassifications_Tabs.tabMain.PTInterestClassifications_Tabs_General.PTInterestClassifications_Tabs_General;
  interestClassificationsLayout.PTInterestClassifications_Tabs_General_LookupCode.LookupSearchCombo.ClickItem(lookupCode);
});

When("I click on Ok button from Interest classifications record", function (){
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
});

When("I save and close the customer record", function (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
});

When("I click on Standing Order Calc", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea2_new.DashCtrlWrapper.ButtonBar.UltraButton3.ClickButton();
});

When("I drop the Report Type list and select {arg}", function (reportType){
  var dashboardActions = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions;
  dashboardActions.dropdownActions.ClickItem(reportType);
  
});

Then("I click on Refresh till customer record is visible in list", function (){
  Delay(3000);
  var button = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.refreshButton;
  button.ClickButton();
  Delay(3000);
  var button = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.refreshButton;
  button.ClickButton();
  Delay(3000);
  var button = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.refreshButton;
  button.ClickButton();
});



Then("I click on Standing Order Release", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea3.DashCtrlWrapper.ButtonBar.WinFormsObject("UltraButton", "Standing Order Release").ClickButton();
});

Then("Standing Order Administration dashboard under Report type Standing Orders - Future Releases should display no results", function (){
  Sys.WaitProcess("Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions", 8000);
  var radGridViewStandingOrderFutureRelease = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.panel1.ViewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var rowcountFutureRelease = radGridViewStandingOrderFutureRelease.wRowCount;
  var count = 0;
  for(var i = 0;i<rowcountFutureRelease;i++){
  var clmProduct = radGridViewStandingOrderFutureRelease.wValue(i,3).OleValue;
  if(clmProduct != productName)
  {
    
    count++;
  }
  }
  if(count == rowcountFutureRelease)
  {
    Log.Checkpoint("Record under Report type Standing Orders - Future Releases is not display")
    
  }
  else{
    Log.Error("Record still display under Standing Orders - Future Releases")
  }
  
});

Then("Standing Order Administration dashboard under Report type Standing Orders - Released should show matching results to product used", function (){
  Sys.WaitProcess("Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions", 8000);
  let radGridView = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.WinFormsObject("panel1").WinFormsObject("ViewContainer").WinFormsObject("PTEntityListView").WinFormsObject("outerPanel").WinFormsObject("previewSplitContainer").WinFormsObject("SplitterPanel", "", 1).WinFormsObject("panel4CaptionAndGrid").WinFormsObject("radGridView1");
  let records = radGridView.wRowCount;
  var i = 0;
  var count = 0;
   for(i;i<records;i++){
    let product = radGridView.wValue(i, 3).OleValue;

    if(product == productName){
      count += 1;
    }
   }
  if(count >=1){
    Log.Checkpoint("Product and Customer used is displayed under Standing Orders Released");
  }
  else{
    Log.Error("Product and Customer used is not displayed under Standing Orders Released");
	} 
});


Then("I run the billing wave", function (){
  Delay(2000);
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_BillingWaveRelease.buttonImage.ClickButton();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
});

Then("I open product information panel to check Standing Order Released On Date", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.ClickButton();
  splitContainer = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1;
  let textBox = splitContainer.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  textBox.SetText(productName);
  textBox.Keys("[Enter]");
  if(splitContainer.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.Exists)
  {
    splitContainer.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(0, "Title");
  }
  
});

Then("Standing Order Released On Date under fulfilment tab should be displayed and disabled", function checkpointSOReleasedDateDisabled (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment_StandingOrderReleasedOnDate.txtInner, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment.PTProductVersions_OTC_Tabs_Fulfilment_StandingOrderReleasedOnDate.txtInner, "Visible", cmpEqual, true);
});


Then("I refresh the documents window", function (){
  Delay(70000);
  var aptify_Shell = Aliases.Aptify_Shell;
  aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(68, 16);
  aptify_Shell.RadDropDownMenu.Click(67, 184);
  var radGridViewDocumentsWindow = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  var docRef = radGridViewDocumentsWindow.wValue(0, "Document Reference").OleValue;
  documentRef = docRef;
});

When("I create product record", function (){
  
  clickNewProduct();
  selectProductType();
  enterTitleWithoutPrefix();
  selectImprint();
  clickNext();
  selectDimension();
  selectIdentifer();
  enterPubDateCopyrightYear();
  clickFinish();
  getProductName();
  
});

//Then("I open the Invoice", function (){
/*
  var radGridView = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  
  var DocumentReference = radGridView.wValue(0, 2).OleValue;
  var sFile = sFolder + DocumentReference
   aqFileSystem.CreateFolder(sFile);
   
  radGridView.DblClickCell(0, 2);
  Delay(7000);
  var referenceInvoice = Sys.Desktop.Picture();
  referenceInvoice.SaveToFile(sFile + "\\" + "FirstPage.jpg");
   
  Sys.Keys("[PageDown]");
   
  referenceInvoice.SaveToFile(sFile + "\\" + "SecondPage.jpg");
   */ 
//});

Then("I open the Order Proforma", function openProformaDocument (){
  var radGridView = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea5.DashCtrlWrapper.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  
  var DocumentReference = radGridView.wValue(2, 2).OleValue;
  var sFile = sFolder + DocumentReference
   aqFileSystem.CreateFolder(sFile);
   
  radGridView.DblClickCell(2, 2);
  Delay(7000);
  var referenceInvoice = Sys.Desktop.Picture();
  referenceInvoice.SaveToFile(sFile + "\\" + "FirstPage.jpg");
   
  Sys.Keys("[PageDown]");
   
  referenceInvoice.SaveToFile(sFile + "\\" + "SecondPage.jpg");
    
});

When("I click on Profile from Companies", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.ClickTab("Profile");
});

When("I click on Marketing tab", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_OTC_Companies_ProfileTab.PT_OTC_Companies_ProfileTab.tabMain.ClickTab("Marketing");
});

When("I click Interests tab", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_OTC_Companies_ProfileTab.PT_OTC_Companies_ProfileTab.tabMain.PTCompanies_Marketing_Tab.PTCompanies_Marketing_Tab.PTCompanies_Marketing_TabControl.tabMain.ClickTab("Interests");
});

Then("I click on Criteria tab", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.ClickTab("Criteria");
});

When("I click on Emails tab from company record", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_Companies_Companies_Form_NewContact_Tab.PT_Companies_Companies_NewContact.PT_Companies_Contact_TopLeft_TabControl.tabMain.ClickTab("Emails");
});

When("I click on New button from Emails tab from company record", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_Companies_Companies_Form_NewContact_Tab.PT_Companies_Companies_NewContact.PT_Companies_Contact_TopLeft_TabControl.tabMain.Companies_Contact_EmailAddresses.Companies_Contact_EmailAddresses.Companies_Contact_EmailAddresses_CompanyEmails.zAptifyControlBase_Toolbars_Dock_Area_Top.ClickItem("SubType|New");
});

When("I select Email Type {arg} from company record", function (param1){
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTCompanyEmailAddresses_Form.PTCompanyEmailAddresses_Tabs.tabMain.PTCompanyEmailAddresses_Tabs_General.PTCompanyEmailAddresses_Tabs_General.PTCompanyEmailAddresses_Tabs_General_EmailTypeID.LookupSearchCombo.ClickItem("Sales");
});

When("I enter Email for company record", function (){
  
  let txtEmail = Aliases.Aptify_Shell.SubTypeTemplateForm.PTCompanyEmailAddresses_Form.PTCompanyEmailAddresses_Tabs.tabMain.PTCompanyEmailAddresses_Tabs_General.PTCompanyEmailAddresses_Tabs_General.PTCompanyEmailAddresses_Email.txtInner;
  
  txtEmail.SetText("lionel.clement@ingenta.com");
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
  
});

When("I click on the new button in the list view from Companies Id wizard", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PT_OTC_Companies.PT_OTC_Companies_Companies_TabControl.tabMain.PT_OTC_Companies_ProfileTab.PT_OTC_Companies_ProfileTab.tabMain.PTCompanies_Marketing_Tab.PTCompanies_Marketing_Tab.PTCompanies_Marketing_TabControl.tabMain.PTCompanies_Marketing_Interests_Tab.PTCompanies_Marketing_Interests_Tab.PTCompanies_Marketing_Interests_Tab_CompanyInterestsView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(6, 21);
});

When("I enter a Company name from create new customre record", function (){
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

When("I enter Email address in Email field", function (){
  var email = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    {
    for(var i=0; i < 4; i++)
    email += possible.charAt(Math.floor(Math.random() * possible.length));
     }
  var email1 = "tnadella2020" + "+"
  var email11 = email;
  var email12 = "@" + "gmail.com"
  var txtEmail13 = aqString.Concat(email1 , email11)
  
  var txtEmail1  = aqString.Concat(txtEmail13 , email12);
  
  let txtEmail = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Tabs_General_PT_Group_Box_6.PTCompanyEmailAddressesCustomerWizard.PTCompanyEmailAddressesCustomerWizard_Email.txtInner;
  txtEmail.Click();
  txtEmail.SetText(txtEmail1);
  txtEmail.Keys("[Tab]");
});

Then("I select Interest Type under New Perosons Interest Record wizard {arg}", function (interestType){
  Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General_InterestTypeID.LookupSearchCombo.ClickItem(interestType);
});

When("I enter persons Forename {arg}", function (forename){
  let txtFirstName = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_Contact.PersonCustomerWizard.PersonCustomerWizard_PT_Group_Box_1.PTPersonNamesCustomerWizard.PTPersonNamesCustomerWizard_FirstName.txtInner;
  
  txtFirstName.Click();
  txtFirstName.EmbeddableTextBoxWithUIPermissions.SetText(forename);
  personName = forename;
  txtFirstName.Keys("[Tab]");
});

When("I enter persons Family Name", function  (){
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

When("I click OK to close Product versions record", function  (){
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
});

Then("I click on refresh button", function clickSORefreshBtnFromDashboard(){
  Delay(3000);
  var button = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.refreshButton;
  button.ClickButton();
  Delay(3000);
  var button = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.refreshButton;
  button.ClickButton();
  Delay(3000);
  var button = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.refreshButton;
  button.ClickButton();
  Delay(3000);
  var button = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.refreshButton;
  button.ClickButton();
});

Then("I click on Standing Order Release button from dashboard", function clickSOReleaseBtnFromDashboard (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea3.DashCtrlWrapper.ButtonBar.UltraButton6.ClickButton();
  var button = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.DashboardActions.refreshButton;
  button.ClickButton();
  button.ClickButton();
});

Then("I check Always Supply checkbox", function (){
  if(Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.Exists){
    Aliases.Aptify_Shell.FormTemplateForm.PTCompanyInterests_Form.PTCompanyInterests_Tabs.tabMain.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General.PTCompanyInterests_Tabs_General_AlwaysSupply.chkInternal.wState = cbChecked;
    
  }
  else{
    Aliases.Aptify_Shell.FormTemplateForm.PTPersonInterests_Form.PTPersonInterests_Tabs.tabMain.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General.PTPersonInterests_Tabs_General_AlwaysSupply.chkInternal.wState = cbChecked;
  }
});

When("I click on Open on Finish checkbox for person", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_431.PTCustomerWizard_AddressInformation.PTCustomerWizard_AddressInformation_PersonDisplay.chkInternal.wState = cbChecked;
});

