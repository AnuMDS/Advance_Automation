var productprices , productrenewprices ,dropdownTerritory ,parCode ,txtpubdate,licenceType
var dropdownCurrencyType, searchProduct,price,priceCategory,orderCategory,discountPercentage,breakQty
var price, renewPrice, fromDate;
var code, prodVersion, product;
var rowCount, breakQuantity, license;
var highestBreakQuantity, highestPrice, highestRenewPrice;
var priceType, priceName, priceId;
var classificationType, classificationDescription;

When("I select Cumulative Break", function checkCumulativeBreakCheckbox(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_Grouped_Options_Options.Cumulative_Break.ClickButton();
});

Then("Cumulative Break should be checked", function verifyCumulativeBreakCheckbox(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_Grouped_Options_Options.Cumulative_Break , "wChecked", cmpEqual, true);
});

When("I right click on Customer Classification Types and select New", function clickNewCustomerClassificationType(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo_ProductPriceClassifications.AptifyControlBase_Fill_Panel.flexSubType.ClickR();
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo_ProductPriceClassifications.AptifyControlBase_Fill_Panel.flexSubType.PopupMenu.Click("New");
});

When("I select a Classification Type {arg}", function selectClassificationType(classificationTypePar){
  let ddClassificationType =  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductPriceCRMClassifications_Form.PTProductPriceCRMClassifications_Tabs.tabMain.PTProductPriceCRMClassifications_Tabs_General.PTProductPriceCRMClassifications_Tabs_General.PTProductPriceCRMClassifications_Tabs_General_ClassificationTypeID.LookupSearchCombo;
  
  ddClassificationType.Click();
  ddClassificationType.ClickItem(classificationTypePar);
  classificationType = classificationTypePar;
  ddClassificationType.Keys("[Tab]");
});

When("I select a Classification Description {arg}", function selectClassificationDescription(classificationDescriptionPar){
  let ddClassificationDescription = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductPriceCRMClassifications_Form.PTProductPriceCRMClassifications_Tabs.tabMain.PTProductPriceCRMClassifications_Tabs_General.PTProductPriceCRMClassifications_Tabs_General.PTProductPriceCRMClassifications_Tabs_General_LookupCodeRecordID.LookupSearchCombo;
   
  ddClassificationDescription.Click();
  ddClassificationDescription.ClickItem(classificationDescriptionPar);
  classificationDescription = classificationDescriptionPar;
  ddClassificationDescription.Keys("[Tab]");
});

When("I click on Save button for Product Price record", function clickSave(){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record");
});

Then("classification Type and Classification Description should be displayed in the Customer Classification column of Prices tab", function verifyClassificationTypeClassificationDescription(){
 let lookupCode = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo_ProductPriceClassifications.AptifyControlBase_Fill_Panel.flexSubType.get_Item(1, 2).OleValue;
 let rowNum  =  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_Telerik_List_View_ActivePrices.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.get_RowCount();

 let displayedType = (aqString.SubString(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_Telerik_List_View_ActivePrices.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(rowNum-1, 12).OleValue, 0, 10)); 
 let displayedDescription = (aqString.SubString(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_Telerik_List_View_ActivePrices.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(rowNum-1, 12).OleValue, 14, 5)); 
 

 if( (aqObject.CompareProperty(classificationType, cmpEqual, displayedType, true,3)) && (aqObject.CompareProperty(displayedDescription, cmpEqual, lookupCode, true,3)) ){
    Log.Checkpoint("Classification Type and Classification Description displayed is Correct");
     }
  else{
    Log.Error("Classification Type and Classification Description displayed is Incorrect");
	}
   
});

When("I select Single Level", function checkSingleLevelCheckbox(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_Grouped_Options_Options.Single_Level.ClickButton();
});


When("I click on OK", function (){
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
});


When("I click on Save and Close Record button for Product Price record", function clickSaveAndClose(){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record");
});


When("I enter data into Code {arg} and Description {arg}", function enterCodeDescription(codePar, description){
  let txtCode = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_Code.txtInner;
  txtCode.Click();
  txtCode.SetText(codePar);
  code = codePar;
  
  let txtDescription =  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_Description.txtInner;
  txtDescription.Click();
  txtDescription.SetText(description);
});

When("I select product version {arg}", function selectProductVersion(prodVersionPar){
  let ddProductVersion = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo_ProductVersionID.LookupSearchCombo;

  ddProductVersion.Click();
  ddProductVersion.ClickItem(prodVersionPar);
  prodVersion = prodVersionPar;
});

When("I select a Product Sub-Type {arg}", function selectProductSubType(prodSubType){
  let ddProductSubType = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo_ProductSubTypeID.LookupSearchCombo;

  ddProductSubType.Click();
  ddProductSubType.ClickItem(prodSubType);
  ddProductSubType.Keys("[Tab]");
});

When("I select Absolute Break", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_Grouped_Options_Options.Absolute_Break.ClickButton();
});

Given("I click on Price Breaks tab", function clickTabPriceBreaks(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.ClickTab("Price Breaks");
});

Given("I right click in the list view and select New", function clickNew(){
   Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks_ProductPriceBreaks.AptifyControlBase_Fill_Panel.flexSubType.ClickR();
   Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks_ProductPriceBreaks.AptifyControlBase_Fill_Panel.flexSubType.PopupMenu.Click("New");
});

Given("I enter a Break Quantity {arg}, Price {arg}, a Renew Price {arg}", function enterBreakQtyPriceRenewPrice(breakQuantityPar, pricePar, renewPricePar){
  let txtBreakQuantity = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductPriceBreaks_Form.PTProductPriceBreaks_Tabs.tabMain.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_BreakQuantity.txtInner;
  txtBreakQuantity.Click();
  txtBreakQuantity.SetText(breakQuantityPar);
  breakQuantity = breakQuantityPar;
  
  let txtPrice = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductPriceBreaks_Form.PTProductPriceBreaks_Tabs.tabMain.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_Price.txtInner;
  txtPrice.Click();
  txtPrice.SetText(pricePar);
  price = pricePar;
  
  let txtRenewPrice = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductPriceBreaks_Form.PTProductPriceBreaks_Tabs.tabMain.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_RenewPrice.txtInner;
  txtRenewPrice.Click();
  txtRenewPrice.SetText(renewPricePar);
  renewPrice = renewPricePar;

  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
});

Given("I click on Save and Close Record button for Product Price record", function (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
});


Then("product information panel should be updated with all the information submitted", function verifyProductInformation(){
 let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_Telerik_List_View_ActivePrices.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
 let rowNum  =  radGridView.get_RowCount();
  let i = 0;
  let array = [];
  for(i; i<rowNum; i++)
  {
    let arr = radGridView.wValue(i, 23).OleValue;
    array.push(arr);     
    let largest = Math.max.apply(Math, array);    
    var pos = array.indexOf(largest);
  } 
     let displayedPriceType = radGridView.wValue(pos, 4).OleValue;
     let displayedPriceName = radGridView.wValue(pos, 5).OleValue;
     let displayedLicense = radGridView.wValue(pos, 6).OleValue;
     let displayedCode = radGridView.wValue(pos, 22).OleValue;
     let displayedVersion = radGridView.wValue(pos, 19).OleValue;
   
    if( (aqObject.CompareProperty(displayedLicense, cmpEqual, license, true,3)) && (aqObject.CompareProperty(displayedPriceType, cmpEqual, priceType, true,3)) && (aqObject.CompareProperty(displayedPriceName, cmpEqual, priceName, true,3)) && (aqObject.CompareProperty(displayedCode, cmpEqual, code, true,3)) && (aqObject.CompareProperty(displayedVersion, cmpEqual, prodVersion, true,3)) ){
     Log.Checkpoint("Product Information Panel is updated with all the Information submitted");
    }
    else{
     Log.Error("Product Information Panel is not updated with all the Information submitted");
    }   
});


When("I enter an Effective To date", function enterToDate(){
 let txtToDate =  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_EndDate.txtInner;
  
 txtToDate.Click();
 txtToDate.SetText(aqDateTime.AddDays( aqDateTime.Today() , 5));
 txtToDate.Keys("[Tab]");
});

Given("I select Order Quantity", function selectOrderQty(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks_BreakQuantityType.Order_Quantity.ClickButton();
});

Given("I select Multiply By Concurrency checkbox", function checkMultiplyByConcurrencyCheckbox(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks_ConcurrencyMultiplier.chkInternal.wState = cbChecked;
});


Given("I select Band Break", function checkBandBreakCheckbox(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_Grouped_Options_Options.Band_Break.ClickButton();
});

Given("I select License Concurrency", function checkLicenseConcurrencyCheckbox(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks_BreakQuantityType.License_Concurrency.ClickButton();
});

Given("I select Multiply By Quantity checkbox", function checkMultiplyByQuantityCheckbox(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks_QuantityMultiplier.chkInternal.wState = cbChecked;
});


When("I click on New Prices", function clickNewPrices(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea3.DashCtrlWrapper.ButtonBar.UltraButton.ClickButton();
});

When("I select a product {arg}", function selectProduct(productPar){
 let txtProduct = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo_ProductID.txtLink;  
   txtProduct.Click();
   txtProduct.SetText(productPar);
   product = productPar;
   txtProduct.Keys("[Tab]");
   if( Aliases.Aptify_Shell.SearchForm.Exists )
   {
    Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(0, "Title");
   }
});

Given("I select Price Breaks tab", function clickPriceBreaksTab(){
 Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.ClickTab("Price Breaks");
});

Given("I click on Prices tab", function clickTabPrices(){
 Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Prices");
});

Given("I select Cumulative Break", function checkCumulativeBreak(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_Grouped_Options_Options.Cumulative_Break.ClickButton();
});

When("I open Product Information Panel", function openProductInformation(){
 clickFindProduct();
 searchForProduct(product);
 clickSearchBtn();
 handleProductsGrid(); 
});

function clickFindProduct(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea3.DashCtrlWrapper.ButtonBar.UltraButton3.Click();
}

function searchForProduct(product){
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText(product);
}

function clickSearchBtn(){
  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
}

function handleProductsGrid(){
  let gridProducts = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }
}

When("I enter a From date", function enterFromDate(){
 let txtFromDate = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_StartDate.txtInner;

  txtFromDate.Click();
  txtFromDate.SetText(aqDateTime.AddDays( aqDateTime.Today() , 5));
  fromDate = aqDateTime.AddDays( aqDateTime.Today() , 5);
});


Then("I click on Future Prices tab", function clickTabFuturePrices(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.ClickTab("Future Prices");
});

Then("product should be updated with all the information submitted", function verifyPriceInformation(){
  let rowCount = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_FuturePrices.PTProducts_FuturePrices.PTProducts_FuturePrices_Telerik_List_View_FuturePrice.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.get_RowCount();
  
  let productName = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_FuturePrices.PTProducts_FuturePrices.PTProducts_FuturePrices_Telerik_List_View_FuturePrice.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(rowCount - 1, 23).OleValue;
  let displayedPriceType = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_FuturePrices.PTProducts_FuturePrices.PTProducts_FuturePrices_Telerik_List_View_FuturePrice.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(rowCount - 1, 4).OleValue;
  let displayedPriceName = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_FuturePrices.PTProducts_FuturePrices.PTProducts_FuturePrices_Telerik_List_View_FuturePrice.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(rowCount - 1, 5).OleValue;
  let displayedLicense = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_FuturePrices.PTProducts_FuturePrices.PTProducts_FuturePrices_Telerik_List_View_FuturePrice.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(rowCount - 1, 6).OleValue;
  let displayedCode = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_FuturePrices.PTProducts_FuturePrices.PTProducts_FuturePrices_Telerik_List_View_FuturePrice.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(rowCount - 1, 22).OleValue;
  let displayedVersion = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_FuturePrices.PTProducts_FuturePrices.PTProducts_FuturePrices_Telerik_List_View_FuturePrice.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(rowCount - 1, 19).OleValue;
  
  if( (aqObject.CompareProperty(product, cmpEqual, productName, true,3)) && (aqObject.CompareProperty(displayedLicense, cmpEqual, license, true,3)) && (aqObject.CompareProperty(displayedPriceType, cmpEqual, priceType, true,3)) && (aqObject.CompareProperty(displayedPriceName, cmpEqual, priceName, true,3)) && (aqObject.CompareProperty(displayedCode, cmpEqual, code, true,3)) && (aqObject.CompareProperty(displayedVersion, cmpEqual,  prodVersion, true,3)) ){
    Log.Checkpoint("Product is updated with all the Information submitted");
   }
  else{
    Log.Error("Product is not updated with all the Information submitted");
   }
});

Given("I click on All Prices tab", function clickTabAllPrices(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.ClickTab("All Prices");
});

Then("Product should be displayed under All Prices", function (){
 let rowCount = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_Prices.PTProducts_Prices.Products_Prices_Entity_List_View_ProductPrices.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.get_RowCount();
 
 let productNameDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_Prices.PTProducts_Prices.Products_Prices_Entity_List_View_ProductPrices.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(rowCount - 1, 24).OleValue;
 
  if(aqObject.CompareProperty(product, cmpEqual, productNameDisplayed, true,3)){
    Log.Checkpoint("Product is displayed under All Prices");
     }
  else{
    Log.Error("Product is not displayed under All Prices");
	}
});

Given("I open product information panel from Product Management", function (){
  clickFindProduct();
  searchForProduct(product);
  clickSearchBtn();
  handleProductsGrid();
});


When("I click on New button", function clickNewButton(){
   Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_Telerik_List_View_ActivePrices.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(13, 18);
});

When("I select a Price Type {arg}", function selectPriceType(priceTypePar){
 let ddPriceType = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_PriceTypeID.LookupSearchCombo;
 
 ddPriceType.ClickItem(priceTypePar);
 ddPriceType.Keys("[Tab]");
 priceType = priceTypePar;
});

When("I select a Price Name {arg}", function selectPriceName(priceNamePar){
  let ddPriceName = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_PriceNameID.LookupSearchCombo;
  
  ddPriceName.ClickItem(priceNamePar);
  ddPriceName.Keys("[Tab]");
  priceName = priceNamePar;
});

When("I select a License {arg}", function selectLicense(licensePar){
 let ddLicense = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_LicenseID.LookupSearchCombo;
  
 ddLicense.ClickItem(licensePar);
 ddLicense.Keys("[Tab]");
 license = licensePar;
});

When("I select a Currency Type {arg}", function selectCurrencyType(currencyType){
 let ddCurrencyType = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_CurrencyTypeID.LookupSearchCombo;
 
 ddCurrencyType.ClickItem(currencyType);
 ddCurrencyType.Keys("[Tab]");
});

When("I check Approved checkbox", function checkApprovedCheckbox(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_IsApproved.chkInternal.wState = cbChecked;
});

When("I enter Price {arg}", function enterPrice(price){
  let txtPrice = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Price.txtInner;
  
  txtPrice.Click();
  txtPrice.SetText(price);
  txtPrice.Keys("[Tab]");
});

Given("I select Absolute Break", function checkAbsoluteBreak(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_Grouped_Options_Options.Absolute_Break.ClickButton();
});

Then("Price and Renew Price fields should be cleared and disabled", function verifyPriceRenewPriceFields(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Price.txtInner, "Value", cmpEqual, "€0.00");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Price.txtInner, "Enabled", cmpEqual, false);
  
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_RenewPrice.txtInner, "Value", cmpEqual, "€0.00");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_RenewPrice.txtInner, "Enabled", cmpEqual, false); 
});

Then("I click on Price Breaks tab", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.ClickTab("Price Breaks");
});

Then("Price Breaks tab should be displayed", function verifyPriceBreaksTab(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks_BreakQuantityType.Order_Quantity, "Checked", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks_BreakQuantityType.License_Concurrency, "Checked", cmpEqual, false);

  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks_ConcurrencyMultiplier.chkInternal, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks_QuantityMultiplier.chkInternal, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks_DiscountID.txtLink, "Enabled", cmpEqual, false);
 
  let labelBreakQuantityC1FlexGrid = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks_ProductPriceBreaks.AptifyControlBase_Fill_Panel.flexSubType.get_Item(0,1).OleValue;
  let labelPriceC1FlexGrid = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks_ProductPriceBreaks.AptifyControlBase_Fill_Panel.flexSubType.get_Item(0,2).OleValue;
  let labelRenewPriceC1FlexGrid = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks_ProductPriceBreaks.AptifyControlBase_Fill_Panel.flexSubType.get_Item(0,3).OleValue;

  if( (aqObject.CompareProperty(labelBreakQuantityC1FlexGrid, cmpEqual, "Break Quantity", true, 3)) && (aqObject.CompareProperty(labelPriceC1FlexGrid, cmpEqual, "Price", true, 3)) && (aqObject.CompareProperty(labelRenewPriceC1FlexGrid, cmpEqual, "Renew Price", true, 3)) ){
    Log.Checkpoint("Break Quantity, Price and Renew Price columns are displayed");
   }
  else{
    Log.Error("Break Quantity, Price and Renew Price columns are not displayed");
   }

  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks_TabsGroupBox.PTDiscounts_ProductPrices_Tabs_ConfigTabs_PriceBreaks.PTDiscounts_ProductPrices_Tabs_ConfigTabs_PriceBreaks_Tabs.tabMain.PTDiscounts_ProductPrices_Tabs_ConfigTabs_PriceBreaks_Tabs_QualifyingProducts, "Enabled", cmpEqual, true);
    
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks_TabsGroupBox.PTDiscounts_ProductPrices_Tabs_ConfigTabs_PriceBreaks.PTDiscounts_ProductPrices_Tabs_ConfigTabs_PriceBreaks_Tabs.tabMain.PTDiscounts_ProductPrices_Tabs_ConfigTabs_PriceBreaks_Tabs_Discounts, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks_TabsGroupBox.PTDiscounts_ProductPrices_Tabs_ConfigTabs_PriceBreaks.PTDiscounts_ProductPrices_Tabs_ConfigTabs_PriceBreaks_Tabs.tabMain.PTDiscounts_ProductPrices_Tabs_ConfigTabs_PriceBreaks_Tabs_Discounts.PTDiscounts_ProductPriceBreakDiscount.PTDiscounts_ProductPriceBreakDiscount_Name, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks_TabsGroupBox.PTDiscounts_ProductPrices_Tabs_ConfigTabs_PriceBreaks.PTDiscounts_ProductPrices_Tabs_ConfigTabs_PriceBreaks_Tabs.tabMain.PTDiscounts_ProductPrices_Tabs_ConfigTabs_PriceBreaks_Tabs_Discounts.PTDiscounts_ProductPriceBreakDiscount.PTDiscounts_ProductPriceBreakDiscount_Description, "Visible", cmpEqual, true);
 
  let labelBreakQuantityC2FlexGrid = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks_TabsGroupBox.PTDiscounts_ProductPrices_Tabs_ConfigTabs_PriceBreaks.PTDiscounts_ProductPrices_Tabs_ConfigTabs_PriceBreaks_Tabs.tabMain.PTDiscounts_ProductPrices_Tabs_ConfigTabs_PriceBreaks_Tabs_Discounts.PTDiscounts_ProductPriceBreakDiscount.PTDiscounts_ProductPriceBreakDiscount_PT_SubTypeControl_DiscountBreaks.AptifyControlBase_Fill_Panel.flexSubType.get_Item(0,1).OleValue;
  let labelDiscountPercentageC2FlexGrid = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks_TabsGroupBox.PTDiscounts_ProductPrices_Tabs_ConfigTabs_PriceBreaks.PTDiscounts_ProductPrices_Tabs_ConfigTabs_PriceBreaks_Tabs.tabMain.PTDiscounts_ProductPrices_Tabs_ConfigTabs_PriceBreaks_Tabs_Discounts.PTDiscounts_ProductPriceBreakDiscount.PTDiscounts_ProductPriceBreakDiscount_PT_SubTypeControl_DiscountBreaks.AptifyControlBase_Fill_Panel.flexSubType.get_Item(0,2).OleValue;
  
  if( (aqObject.CompareProperty(labelBreakQuantityC2FlexGrid, cmpEqual, "Break Quantity", true, 3)) && (aqObject.CompareProperty(labelDiscountPercentageC2FlexGrid, cmpEqual, "Discount Percentage", true, 3)) ){
    Log.Checkpoint("Break Quantity and Discount Percentage columns are displayed");
   }
  else{
    Log.Error("Break Quantity and Discount Percentage columns are not displayed");
   }
});

Then("I right click in the list view and select New", function clickNewPriceBreak(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks_ProductPriceBreaks.AptifyControlBase_Fill_Panel.flexSubType.ClickR();
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks_ProductPriceBreaks.AptifyControlBase_Fill_Panel.flexSubType.PopupMenu.Click("New");
});

Then("Product Price Breaks record window should be displayed", function verifyPriceBreaksWindow(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductPriceBreaks_Form.PTProductPriceBreaks_Tabs.tabMain.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_BreakQuantity.lblInner, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductPriceBreaks_Form.PTProductPriceBreaks_Tabs.tabMain.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_Price.lblInner, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductPriceBreaks_Form.PTProductPriceBreaks_Tabs.tabMain.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_RenewPrice.lblInner, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOkAndNew, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdCancel, "Visible", cmpEqual, true);
});

Then("data should be correctly displayed in the list view", function (){
 let C1FlexGrid = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks_ProductPriceBreaks.AptifyControlBase_Fill_Panel.flexSubType;
 let displayedBreakQuantity = C1FlexGrid.get_Item(3,1).OleValue;
 let displayedPrice = C1FlexGrid.get_Item(3,2).OleValue;
 let displayedRenewPrice = C1FlexGrid.get_Item(3,3).OleValue;

  if( (aqObject.CompareProperty(breakQuantity, cmpEqual, displayedBreakQuantity, true, 3)) && (aqObject.CompareProperty(price, cmpEqual, displayedPrice, true, 3)) && (aqObject.CompareProperty(renewPrice, cmpEqual, displayedRenewPrice, true, 3)) ){
    Log.Checkpoint("Break Quantity, Price and Renew Price displayed is Correct");
   }
  else{
    Log.Error("Break Quantity, Price and Renew Price displayed is Incorrect");
   }    
});

Then("I click on Save button for Product Price record", function (){
   Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record");
});

Then("I enter a Break Quantity {arg}, Price {arg}, Renew Price {arg}", function (breakQuantityPar, pricePar, renewPricePar){
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductPriceBreaks_Form.PTProductPriceBreaks_Tabs.tabMain.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_BreakQuantity.txtInner.Click();
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductPriceBreaks_Form.PTProductPriceBreaks_Tabs.tabMain.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_BreakQuantity.txtInner.SetText(breakQuantityPar);
  breakQuantity = breakQuantityPar;
  
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductPriceBreaks_Form.PTProductPriceBreaks_Tabs.tabMain.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_Price.txtInner.Click();
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductPriceBreaks_Form.PTProductPriceBreaks_Tabs.tabMain.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_Price.txtInner.SetText(pricePar);
  price = pricePar;
  
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductPriceBreaks_Form.PTProductPriceBreaks_Tabs.tabMain.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_RenewPrice.txtInner.Click();
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductPriceBreaks_Form.PTProductPriceBreaks_Tabs.tabMain.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_RenewPrice.txtInner.SetText(renewPricePar);
  renewPrice = renewPricePar;
  
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
});

Then("Quantity Break of {arg} should be automatically created with a Price and Renew Price equal to the highest Quantity Break", function verifyQtyBreak9999(param1){
  let C1FlexGrid = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks_ProductPriceBreaks.AptifyControlBase_Fill_Panel.flexSubType;
  let breakQuantity9999 = C1FlexGrid.get_Item(4, 1).OleValue;
  let price9999 = C1FlexGrid.get_Item(4,2).OleValue;
  let renewPrice9999 = C1FlexGrid.get_Item(4,3).OleValue;

  let maxPrice = 0;
  let i = 0;
  for( i; i = 3; i++) {
	 let price = C1FlexGrid.get_Item(i,2).OleValue;
	 if (price > maxPrice){
		maxPrice = price;
    break;
    }
  }

  let maxRenewPrice = 0;
  let j = 0;
  for( j; j = 3; j++) {
	 let renewPrice = C1FlexGrid.get_Item(i,3).OleValue;
	 if (renewPrice > maxRenewPrice){
		maxRenewPrice = renewPrice;
    break;
    }
  }

  if( (aqObject.CompareProperty(breakQuantity9999, cmpEqual, 9999, true,3)) && (aqObject.CompareProperty(price9999, cmpEqual, maxPrice, true,3)) && (aqObject.CompareProperty(renewPrice9999, cmpEqual, maxRenewPrice, true,3)) ){
    Log.Checkpoint("Quantity Break of 9999 is automatically created with Price and Renew Price equal to highest Quantity Break");
   }
  else{
    Log.Error("Quantity Break of 9999 is not created with Price and Renew Price equal to highest Quantity Break");
   }
});

Then("I click on Ok for pop up message", function (){
  Aliases.Aptify_Shell.MessageBox.UltraGroupBox1.cmdOK.ClickButton();
});


Then("I click on Expired Prices tab", function clickTabExpiredPrices(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.ClickTab("Expired Prices");
});

Then("product should be updated in the Expired Prices tab with all the information submitted", function verifyExpiredPrices(){
  let radGridViewExpiredPrices = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ExpiredPrices.PTProducts_ExpiredPrices.PTProducts_ExpiredPrices_Telerik_List_View_ExpiredPrices.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let rowCount =  radGridViewExpiredPrices.get_RowCount();
  
  let productName = radGridViewExpiredPrices.wValue(rowCount - 1, 23).OleValue;
  let displayedPriceType = radGridViewExpiredPrices.wValue(rowCount - 1, 4).OleValue;
  let displayedPriceName = radGridViewExpiredPrices.wValue(rowCount - 1, 5).OleValue;
  let displayedLicense = radGridViewExpiredPrices.wValue(rowCount - 1, 6).OleValue;
  let displayedVersion = radGridViewExpiredPrices.wValue(rowCount - 1, 19).OleValue;
  let displayedCode = radGridViewExpiredPrices.wValue(rowCount - 1, 22).OleValue;

  if( (aqObject.CompareProperty(product, cmpEqual, productName, true,3)) && (aqObject.CompareProperty(displayedLicense, cmpEqual, license, true,3)) && (aqObject.CompareProperty(displayedPriceType, cmpEqual, priceType, true,3)) && (aqObject.CompareProperty(displayedPriceName, cmpEqual, priceName, true,3)) && (aqObject.CompareProperty(displayedCode, cmpEqual, code, true,3)) && (aqObject.CompareProperty(displayedVersion, cmpEqual, prodVersion, true,3)) ){
    Log.Checkpoint("Product is updated with all the Information submitted");
   }
  else{
    Log.Error("Product is not updated with all the Information submitted");
   }
});

When("I enter a To date", function (){
 let txtToDate =  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_EndDate.txtInner;
  
 txtToDate.Click();
 txtToDate.SetText(aqDateTime.AddDays(fromDate, 5));
 txtToDate.Keys("[Tab]");
});

When("I enter a From date {arg}", function (fromDate){
  let txtFromDate = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_StartDate.txtInner;

  txtFromDate.Click();
  txtFromDate.SetText(fromDate);
});

When("I enter an Effective To date {arg}", function (toDate){
 let txtToDate =  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_EndDate.txtInner;
  
 txtToDate.Click();
 txtToDate.SetText(toDate);
 txtToDate.Keys("[Tab]");
});

Then("I enter a Break Quantity {arg}, a Price {arg}, Renew Price {arg}", function (breakQuantityPar, pricePar, renewPricePar){
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks_ProductPriceBreaks.AptifyControlBase_Fill_Panel.flexSubType.ClickR();
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks_ProductPriceBreaks.AptifyControlBase_Fill_Panel.flexSubType.PopupMenu.Click("New");
   
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductPriceBreaks_Form.PTProductPriceBreaks_Tabs.tabMain.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_BreakQuantity.txtInner.Click();
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductPriceBreaks_Form.PTProductPriceBreaks_Tabs.tabMain.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_BreakQuantity.txtInner.SetText(breakQuantityPar);
  breakQuantity = breakQuantityPar;
  
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductPriceBreaks_Form.PTProductPriceBreaks_Tabs.tabMain.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_Price.txtInner.Click();
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductPriceBreaks_Form.PTProductPriceBreaks_Tabs.tabMain.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_Price.txtInner.SetText(pricePar);
  price = pricePar;
  
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductPriceBreaks_Form.PTProductPriceBreaks_Tabs.tabMain.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_RenewPrice.txtInner.Click();
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductPriceBreaks_Form.PTProductPriceBreaks_Tabs.tabMain.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_RenewPrice.txtInner.SetText(renewPricePar);
  renewPrice = renewPricePar;
  
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
});

Then("Price and Renew Price should be correctly displayed in Prices Tab", function verifyPriceRenewPrice_PricesTab(){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_Telerik_List_View_ActivePrices.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let rowNum  =  radGridView.get_RowCount();
  
  let i = 0;
  let array = [];
  for(i; i<rowNum; i++)
  {
    let arr = radGridView.wValue(i, 23).OleValue;
    array.push(arr);     
    let largest = Math.max.apply(Math, array);    
    var pos = array.indexOf(largest);
  }
      let displayedPrice = radGridView.wValue(pos, 2).OleValue;
      let displayedRenewPrice = radGridView.wValue(pos, 3).OleValue;
  
     if((aqObject.CompareProperty(displayedPrice, cmpEqual, price, true,3)) && (aqObject.CompareProperty(displayedRenewPrice, cmpEqual,renewPrice, true,3)) ){
      Log.Checkpoint("Price and Renew Price displayed is Correct");
     }
      else{
      Log.Error("Price and Renew Price displayed is Incorrect");
     }
});



//ApplicableToTab
When("I click on Prices tab", function clickPricesTabProductInformationPanel (){
  let tabPrices = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain;
  tabPrices.ClickTab("Prices");
});

When("I select {arg} from Currency Type dropdown list and tab from the field", function selectCurrencyTypefromDropdown (currencyType){
  let ddcurrencyType = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_PT_Group_Box_1.PTProductPrices_ActivePrices.PTProductPrices_ActivePrices_CurrencyTypeID.LookupSearchCombo;
 
  ddcurrencyType.ClickItem(currencyType);
  DropdownCurrencyType = currencyType;
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_PT_Group_Box_1.PTProductPrices_ActivePrices.Keys("[Tab]");
                   
});

When("I enter {arg} in price field and tab from the field", function enterPricesFromProductInformationPanel (parprice){
  let txtPrice = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_PT_Group_Box_1.PTProductPrices_ActivePrices.PTProductPrices_ActivePrices_Price.txtInner.EmbeddableTextBoxWithUIPermissions;
  txtPrice.Click();
  txtPrice.SetText(parprice);
  txtPrice.Keys("[Tab]");
});

When("I click on Add button", function clickAddBtnPrices (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_PT_Group_Box_1.PTProductPrices_ActivePrices.PTProductPrices_ActivePrices_Active_Button_Add.Click();
});

When("I click on New button from active prices field", function clickNewBtnFromActivePrices (){
  let btnNew = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_Telerik_List_View_ActivePrices.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(9, 22);
});

When("I select {arg} from Price Type and tab from the field", function selectPriceTypeFromProductPrices(PriceType){
   Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_PriceTypeID.LookupSearchCombo.ClickItem(PriceType);
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.Keys("[Tab]");
});

When("I select {arg} from Price Name and tab from the field", function selectPriceNameFromProductPrices (PriceName){
  let ddpriceName = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_PriceNameID.LookupSearchCombo;
  ddpriceName.ClickItem(PriceName);
  priceName = PriceName;
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.Click();
  ddpriceName.Keys("[Tab]");
});

When("I checked the Default field checkbox", function checkDefaultField(){
  let checkBoxDefault = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_IsDefault.chkInternal;
  checkBoxDefault.wState = cbChecked;
  checkBoxDefault.Keys("[Tab]");
});

When("I select {arg} from License Type and tab from the field", function selectLicenseFromPrices (Licence){
  let ddLicence = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_LicenseID.LookupSearchCombo;
  ddLicence.ClickItem(Licence);
  licenceType = Licence;
  ddLicence.Keys("[Tab]");
});

When("I select {arg} from Currency Type dropdown list", function selectCurrencyTypeFromDropdown (paramcurrencyType){
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_CurrencyTypeID.LookupSearchCombo.ClickItem(paramcurrencyType);
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.Click();
});

When("I checked Approved field checkbox", function checkApprovedFieldCheckbox (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_IsApproved.chkInternal.wState = cbChecked;
});

When("I enter {arg} in price field", function enterPriceProductPrices (ParameterPrice){
  let txtPrice = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Price.txtInner;
  txtPrice.SetText(ParameterPrice)
  txtPrice.Text.OleValue;
  productprices = ParameterPrice;
  txtPrice.Keys("[Tab]");
  
});

When("I enter {arg} in Renew Price and tab from the field", function enterRenewPricesProductPrices (renewPrice){
  let txtRenewPrice = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_RenewPrice.txtInner;
  txtRenewPrice.Click();
  txtRenewPrice.SetText(renewPrice);
  txtRenewPrice.Keys("[Tab]");
});

When("I checked Tax Inclusive checkbox", function checkTaxInclusiveCheckbox (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_TaxInclusive.chkInternal.wState = cbChecked;
});

When("I enter Effctive To Date as Future Date", function enterEffectiveToDate (){
  let txtEffectiveToDate = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_EndDate.txtInner;
  txtEffectiveToDate.SetText(aqDateTime.AddDays(aqDateTime.Today(),3));
});

Then("The above enter data should be correctly displayed on Active Prices list view from Product Id wizard", function checkpointVerifyProductPrices (){
  let clmPrices = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_Telerik_List_View_ActivePrices.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1
  let columnPrice = clmPrices.wValue(0, 2).OleValue;
  
  if(aqObject.CompareProperty(columnPrice, cmpEqual,productprices, true,3))
  {
    Log.Checkpoint("product price has been display")
  }
  else
  {
    Log.Error("Incorrect product price is display");
  }
});

When("I enter {arg} Effective From date which is valid and tab from the field", function enterEffectiveFromDate (validEffectiveFromDate){
   let txtvalidEffectiveFromDate = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_StartDate.txtInner;
  txtvalidEffectiveFromDate.Click();
  txtvalidEffectiveFromDate.SetText(validEffectiveFromDate);
  txtvalidEffectiveFromDate.Keys("[Tab]");
});

Then("Only Main Market Edition Version should be displayed", function checkpointVerifyVersion (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo_ProductSubTypeID.LookupSearchCombo.Click();
  let ultraCombo = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo_ProductVersionID.LookupSearchCombo;
  aqObject.CheckProperty(ultraCombo, "WndCaption", cmpEqual, "Main Market Edition");
  ultraCombo.DropDown();
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo_ProductVersionID.LookupSearchCombo.ClickItem("Main Market Edition");
});

Then("Product Sub Type field should be enabled", function checkpointProductSubTypeEnabled (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo_ProductSubTypeID, "Enabled", cmpEqual, true);
});

Then("I select {arg} from Product Types and tab from the field", function selectProductTypeUnderPrices (productsubtype){
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo_ProductSubTypeID.LookupSearchCombo.ClickItem(productsubtype);
});

Given("I click on Save and Close the record from New record prices record wizard", function (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
});

Then("I click on Save and Close the record from New record prices record wizard", function (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
});

Then("I again enter {arg} in price field", function enterAgainPrice (ParameterNewPrice){
  let txtNewPrice = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Price.txtInner;
  txtNewPrice.Click();
  txtNewPrice.SetText(ParameterNewPrice)
});

Then("Popup message should be there because we enter data again in price field  for same currency type", function checkpointVerifyPopupMsg (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.MessageBox.UltraGroupBox1.txtMessage, "Text", cmpEqual, "Only one active default price per currency and effective from & end date is permitted.\r\n");
  aqObject.CheckProperty(Aliases.Aptify_Shell.MessageBox.UltraGroupBox1.txtMessage, "Visible", cmpEqual, true);
  
});

Then("I select {arg} product version", function selectProductVersionFromApplicableToTab(productVersion){
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo_ProductVersionID.LookupSearchCombo.ClickItem(productVersion);
});

Given("I open this same product from active prices tab", function openSameProductFromActivePrice (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_Telerik_List_View_ActivePrices.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(0, "Customer Classification");
});

Then("verify if the price should be mentioned as default", function checkpointVerifyDefaultPrice (){
  let txtPricesField =  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Price.txtInner.Text.OleValue;
  let txtpricesfield = aqString.SubString(txtPricesField,1, 3); 
  
  if(aqObject.CompareProperty(txtpricesfield, cmpEqual,productprices, true,3))
  {
    Log.Checkpoint("Default product price has been display")
  }
  else
  {
    Log.Error("Incorrect product price is display");
  }
});

Then("Product information under Prices tab with column Default should be checked", function checkpointVerifyCheckboxWithDeafault (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_Telerik_List_View_ActivePrices.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickColumnHeader("Default");
  let clmDefault = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_Telerik_List_View_ActivePrices.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmchecked = clmDefault.wValue(0, 13).OleValue;
  Log.Message(clmchecked);
  let presentRow = 0;
  
  if(presentRow == 0 && clmchecked == true)
     {
      Log.Message("checked");     
      
      if(aqObject.CompareProperty(clmchecked,cmpEqual,true,3))
  {
    Log.Checkpoint("Default column has been checked")
  }
  else
  {
    Log.Error("Default column is not check");
  }
      }
});

//discountFrame

When("I select {arg} radio button", function selectAbsoluteBreakButton  (){
  let btnPricingOptions = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_Grouped_Options_Options.Absolute_Break.ClickButton();
});

When("I click on Price Breaks tab", function selectPricesBreaksTab (){
  let tabPriceBreaks = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain;
  tabPriceBreaks.ClickTab("Price Breaks");
});

When("I right click on display box and click on New option to open Product Price Breaks record", function clickNewOptionPricesBreaksRecord (){
  let C1FlexGrid = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks_ProductPriceBreaks.AptifyControlBase_Fill_Panel.flexSubType;
  C1FlexGrid.ClickR();
  C1FlexGrid.PopupMenu.Click("New");
});

When("I enter {arg} in Break Quantity", function enterBreakQtyPriceBreaks (BreakQty){
  let txtBreakQty = Aliases.Aptify_Shell.subTypeTemplateForm.PTProductPriceBreaks_Form.PTProductPriceBreaks_Tabs.tabMain.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_BreakQuantity.txtInner;
  txtBreakQty.SetText(BreakQty);
  txtBreakQty.Keys("[Tab]");
});

When("I enter price {arg} and click on Ok button", function enterpricefromPriceBreaks (Price){
  let txtPrice = Aliases.Aptify_Shell.subTypeTemplateForm.PTProductPriceBreaks_Form.PTProductPriceBreaks_Tabs.tabMain.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_Tabs_General.PTProductPriceBreaks_Price.txtInner;
  txtPrice.Click();
  txtPrice.SetText(Price);
  txtPrice.Keys("[Tab]");
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
});

When("I select Discount Type {arg}", function selectDiscountTypeProductPrices (DiscountType){
  let ddDiscountType = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks_DiscountTypeID.LookupSearchCombo.ClickItem(DiscountType);
});

When("I enter {arg} into Name field", function enterNameFromProductPrices (Name){
  let txtNameField = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks_TabsGroupBox.PTDiscounts_ProductPrices_Tabs_ConfigTabs_PriceBreaks.PTDiscounts_ProductPrices_Tabs_ConfigTabs_PriceBreaks_Tabs.tabMain.PTDiscounts_ProductPrices_Tabs_ConfigTabs_PriceBreaks_Tabs_Discounts.PTDiscounts_ProductPriceBreakDiscount.PTDiscounts_ProductPriceBreakDiscount_Name.txtInner;
  txtNameField.Click();
  txtNameField.SetText(Name);
  txtNameField.Keys("[Tab]");
});

When("I enter {arg} into Description textbox", function enterDescriptionInTextbox (description){
  let txtDescriptionField = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks_TabsGroupBox.PTDiscounts_ProductPrices_Tabs_ConfigTabs_PriceBreaks.PTDiscounts_ProductPrices_Tabs_ConfigTabs_PriceBreaks_Tabs.tabMain.PTDiscounts_ProductPrices_Tabs_ConfigTabs_PriceBreaks_Tabs_Discounts.PTDiscounts_ProductPriceBreakDiscount.PTDiscounts_ProductPriceBreakDiscount_Description.txtInner;
  txtDescriptionField.SetText(description);
});

When("I right click on display box below to select New option from Discounts tab", function clickNewFromDiscountsTab (){
  let C1FlexGrid = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks.PTProductPrices_Tabs_ConfigTabs_PriceBreaks_TabsGroupBox.PTDiscounts_ProductPrices_Tabs_ConfigTabs_PriceBreaks.PTDiscounts_ProductPrices_Tabs_ConfigTabs_PriceBreaks_Tabs.tabMain.PTDiscounts_ProductPrices_Tabs_ConfigTabs_PriceBreaks_Tabs_Discounts.PTDiscounts_ProductPriceBreakDiscount.PTDiscounts_ProductPriceBreakDiscount_PT_SubTypeControl_DiscountBreaks.AptifyControlBase_Fill_Panel.flexSubType;
  C1FlexGrid.ClickR();
  C1FlexGrid.PopupMenu.Click("New");
});

When("I enter {arg} in Break Quanity from Discount Breaks record window", function enterBreakQtyFromDiscountBreak (breakQuantity){
  let txtbreakQuantity = Aliases.Aptify_Shell.SubTypeTemplateForm.PTDiscountBreakMain.PTDiscountBreakMain_BreakQuantity.txtInner;
  txtbreakQuantity.Click();
  txtbreakQuantity.SetText(breakQuantity);
  breakQty = breakQuantity
});

When("I enter {arg} in Discount Percentage field", function enterDiscountPercentage (DiscountPercentage){
  let txtDiscountPercentage = Aliases.Aptify_Shell.SubTypeTemplateForm.PTDiscountBreakMain.PTDiscountBreakMain_DiscountPercentage.txtInner;
  txtDiscountPercentage.Click();
  txtDiscountPercentage.SetText(DiscountPercentage);
  discountPercentage = DiscountPercentage;
  txtDiscountPercentage.Keys("[Tab]");
});

When("I edit auto filled value in Renewal Discount Percentage to {arg} and click on Ok button", function editRenewvalDiscountPercentage(RenewalDiscountPercentage){
  let txtRenewalDiscountPercentage = Aliases.Aptify_Shell.SubTypeTemplateForm.PTDiscountBreakMain.PTDiscountBreakMain_RenewalDiscountPercentage.txtInner;
  txtRenewalDiscountPercentage.SetText(RenewalDiscountPercentage);
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
});

Then("product should be added in the list with same licence type and price name under active prices tab", function checkpointVerifyProductUnderAllPrices (){
  let title = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_Title.txtInner.Text.OleValue;
  let radGridViewProductPanel = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_Telerik_List_View_ActivePrices.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let countRow =  radGridViewProductPanel.wRowCount;
  let clmLicence = radGridViewProductPanel.wValue(countRow-1,6).OleValue;
  let clmPriceName = radGridViewProductPanel.wValue(countRow-1,5).OleValue;
  
  
  if(aqObject.CompareProperty(title, cmpEqual,searchProduct, true,3))
  {
    Log.Checkpoint("product title has been display")
  }
  else
  {
    Log.Error("Incorrect product title is display");
  }
  
  if(aqObject.CompareProperty(licenceType, cmpEqual,clmLicence, true,3))
  {
    Log.Checkpoint("Licence has been display")
  }
  else
  {
    Log.Error("Incorrect licence is display");
  }
  
  
  if(aqObject.CompareProperty(priceName, cmpEqual,clmPriceName, true,3))
  {
    Log.Checkpoint("price name has been display")
  }
  else
  {
    Log.Error("Incorrect price name is display");
  
  }
  
});

Then("product should be display with same licence type and price name under all prices tab", function (){
  let radGridViewProductPanel = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_Prices.PTProducts_Prices.Products_Prices_Entity_List_View_ProductPrices.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let countRow =  radGridViewProductPanel.wRowCount;
  let clmTitle = radGridViewProductPanel.wValue(countRow-1,24).OleValue;
  let clmLicence = radGridViewProductPanel.wValue(countRow-1,6).OleValue;
  let clmPriceName = radGridViewProductPanel.wValue(countRow-1,5).OleValue;
  
  
  if(aqObject.CompareProperty(clmTitle, cmpEqual,searchProduct))
  {
    Log.Checkpoint("product title has been display")
  }
  else
  {
    Log.Error("Incorrect product title is display");
  }
  
  if(aqObject.CompareProperty(licenceType, cmpEqual,clmLicence))
  {
    Log.Checkpoint("Licence has been display")
  }
  else
  {
    Log.Error("Incorrect licence is display");
  }
  
  
  if(aqObject.CompareProperty(priceName, cmpEqual,clmPriceName))
  {
    Log.Checkpoint("price name has been display")
  }
  else
  {
    Log.Error("Incorrect price name is display");
  }
});

Then("I click on Discounts tab from product information panel", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.ClickTab("Discounts");
});

Then("product should be display under discounts tab with discount percentage and break quantity", function checkpointVerifyDiscountPercentageAndBreakQty (){
  let radGridViewProductPanel = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_Discounts_Tab.PTProducts_Discounts_Tab.PTProducts_Discounts_Tab_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let rowcount = radGridViewProductPanel.wRowCount;
  let currentrowProductPanel = radGridViewProductPanel.wValue(0,6).OleValue;

  if(aqObject.CompareProperty(currentrowProductPanel, cmpEqual,searchProduct, true,3))
  {
    Log.Checkpoint("product has been display")
  }
  else
  {
    Log.Error("Incorrect product is display");
  }
  
  
  let clmDiscountpercentage = radGridViewProductPanel.wValue(0,2).OleValue;
  if(aqObject.CompareProperty(clmDiscountpercentage, cmpEqual,discountPercentage, true,3))
  {
    Log.Checkpoint("product has been display with correct discount percentage")
  }
  else
  {
    Log.Error("Incorrect discount percentage product is display");
  }
  
  let clmOrderQty = radGridViewProductPanel.wValue(0,1).OleValue;
  if(aqObject.CompareProperty(clmOrderQty, cmpEqual,breakQty, true,3))
  {
    Log.Checkpoint("product has been display with correct break qty")
  }
  else
  {
    Log.Error("Incorrect break quantity product is display");
  }
});



//orderCategory

When("I select {arg} from Order Category drop-down list", function selectOrderCategoryFromDropDown (OrderCategory){
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo_OrderCategoryID.LookupSearchCombo.ClickItem(OrderCategory);
  orderCategory = OrderCategory;
});


Then("product should be added in the list with new value in order category under active prices tab", function checkpointVerifyProductAndOrderCategory (){
  let radGridViewClmOrderCategory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_Telerik_List_View_ActivePrices.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let rowcount =  radGridViewClmOrderCategory.wRowCount;
  let currentrowOrderCategory = radGridViewClmOrderCategory.wValue(rowcount-1,8).OleValue;
  
  if(aqObject.CompareProperty(currentrowOrderCategory, cmpEqual,orderCategory))
  {
    Log.Checkpoint("product has been display with order quantity")
  }
  else
  {
    Log.Error("Incorrect order quantity is display");
  }
  
  let productTopAreaGeneralLayout = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General;
  let ProductName =  productTopAreaGeneralLayout.PT_Products_Toparea_TitleWithoutPrefix.txtInner.Text.OleValue;
 
  if(aqObject.CompareProperty(searchProduct, cmpEqual,ProductName))
  {
    Log.Checkpoint("product has been display")
  }
  else
  {
    Log.Error("Incorrect product is display");
  }
});

Then("new value order category should be display under all prices tab", function checkpointOrderCategoryUnderAllPrices (){
  let radGridViewClmPriceCategory =   Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_Prices.PTProducts_Prices.Products_Prices_Entity_List_View_ProductPrices.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let rowCount = radGridViewClmPriceCategory.wRowCount;
  let currentRow = radGridViewClmPriceCategory.wValue(rowCount-1,8).OleValue;
  
  if(aqObject.CompareProperty(currentRow, cmpEqual,orderCategory))
  {
    Log.Checkpoint("order category display under all prices tab")
  }
  else
  {
    Log.Error("order category is not display under all prics tab");
  }
});
//priceCategory

 
When("I select product {arg}", function selectProductUnderApplicableToTab (product){
  let lnkProduct = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo_ProductID.txtLink;
  lnkProduct.Click();
  lnkProduct.SetText(product);
  lnkProduct.Keys("[Tab]");
  let radGridViewProductPrice = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(radGridViewProductPrice.Exists)
  {
  radGridViewProductPrice.ClickCell(0, "Title");
  radGridViewProductPrice.DblClickCell(0, "Title");
  }
});

When("I select Price category {arg} from drpodown list", function selectPriceCategoryFromDropDown (PriceCategory){
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo_PriceCategoryID.LookupSearchCombo.ClickItem(PriceCategory);
  priceCategory = PriceCategory;
  
});

Then("product should be added in the list with new value in price category under active prices tab", function checkpointVerifyPriceCategoryUnderActivePrices (){
  let radGridViewClmPriceCategory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_Telerik_List_View_ActivePrices.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let rowcount =  radGridViewClmPriceCategory.wRowCount;
  let currentrow = radGridViewClmPriceCategory.wValue(rowcount-1,9).OleValue;
  
  if(aqObject.CompareProperty(currentrow, cmpEqual,priceCategory))
  {
    Log.Checkpoint("product price category has been display")
  }
  else
  {
    Log.Error("product price category is not display");
  }
  let productTopAreaGeneralLayout = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General;
  let ProductName =  productTopAreaGeneralLayout.PT_Products_Toparea_TitleWithoutPrefix.txtInner.Text.OleValue;
  
  if(aqObject.CompareProperty(ProductName, cmpEqual,searchProduct))
  {
    Log.Checkpoint("product has been display")
  }
  else
  {
    Log.Error("Incorrect product is display");
  }
});

Then("new value should be display in price category under All prices tab", function checkpointVerifyPriceCategoryUnderAllPrices (){
  let radGridViewPriceCategoryAllPrices = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_Prices.PTProducts_Prices.Products_Prices_Entity_List_View_ProductPrices.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let RowCount = radGridViewPriceCategoryAllPrices.wRowCount;
  let currentRowPriceCategory = radGridViewPriceCategoryAllPrices.wValue(RowCount-1,9).OleValue;
  
 
  if( aqObject.CompareProperty(currentRowPriceCategory, cmpEqual,priceCategory, true,3))
  {
    Log.Checkpoint("product has been display with category price under all prices tab")
  }
  else
  {
    Log.Error("Incorrect price category is display");
  }
});



//productPricing

Then("different prices tab should be displayed on screen", function checkpointVerifyDifferentPrices (){
  
  let tabPrices = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain;
  tabPrices.ClickTab("Active Prices");
  aqObject.CheckProperty(tabPrices.PTProducts_ActivePrices,"Visible", cmpEqual, true);
  tabPrices.ClickTab("Future Prices");
  aqObject.CheckProperty(tabPrices.PTProducts_FuturePrices,"Visible", cmpEqual, true);
  tabPrices.ClickTab("Expired Prices");
  aqObject.CheckProperty(tabPrices.PTProducts_ExpiredPrices,"Visible", cmpEqual, true);
  tabPrices.ClickTab("All Prices");
  aqObject.CheckProperty(tabPrices.PTProducts_Prices,"Visible", cmpEqual, true);
  tabPrices.ClickTab("Discounts");
  aqObject.CheckProperty(tabPrices.PTProducts_Discounts_Tab,"Visible", cmpEqual, true);
  
});

Then("Active prices tab should be displayed", function checkpointVerifyActivePricesTab (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.ClickTab("Active Prices");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_PT_Group_Box_1.PTProductPrices_ActivePrices.PTProductPrices_ActivePrices_CurrencyTypeID, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_PT_Group_Box_1.PTProductPrices_ActivePrices.PTProductPrices_ActivePrices_CurrencyTypeID, "isDropDownEnabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_PT_Group_Box_1.PTProductPrices_ActivePrices.PTProductPrices_ActivePrices_Price, "Edit", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_PT_Group_Box_1.PTProductPrices_ActivePrices.PTProductPrices_ActivePrices_Active_Button_Add, "Enabled", cmpEqual, false);
  
});

Then("I enter {arg} in price field and tab from the field", function enterPricesFromActivePrices (parprice){
  
  let txtPrice = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_PT_Group_Box_1.PTProductPrices_ActivePrices.PTProductPrices_ActivePrices_Price.txtInner;
  txtPrice.Keys(parprice);
  txtPrice.Text.OleValue;
  price=parprice;
});


Then("Add button should be enabled", function checkpointVerifyAddBtnEnabled(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_PT_Group_Box_1.PTProductPrices_ActivePrices.PTProductPrices_ActivePrices_Active_Button_Add, "Enabled", cmpEqual, true);
});

Then("I click on Add button", function clickAddBtnFromActivePrices (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_PT_Group_Box_1.PTProductPrices_ActivePrices.PTProductPrices_ActivePrices_Active_Button_Add.Click();
});

Then("I again select same currency Type", function (){
  let ddcurrencyType = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_PT_Group_Box_1.PTProductPrices_ActivePrices.PTProductPrices_ActivePrices_CurrencyTypeID.LookupSearchCombo;
  ddcurrencyType.DropDown();
  ddcurrencyType.ClickItem(dropdownCurrencyType);
});

Then("I again enter same price in price field", function (){
  let txtPrice = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_PT_Group_Box_1.PTProductPrices_ActivePrices.PTProductPrices_ActivePrices_Price.txtInner;
  txtPrice.SetText(price);
});

Then("The data should be correctly displayed in Active prices list view", function checkpointVerifyPriceInActivePrcesListView (){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_Telerik_List_View_ActivePrices.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmprice =  radGridView.wValue(0, 2).OleValue;
  
  if(aqObject.CompareProperty(clmprice, cmpEqual,price, true,3))
  {
    Log.Checkpoint("product price has been display")
  }
  else
  {
    Log.Error("Incorrect product price is display");
  }
});

Then("I click on New button from active prices field", function clickNewBtnFromActivePricesTab(){
   let btnNew = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_Telerik_List_View_ActivePrices.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(9, 22);
});

Then("New product prices records should be displayed", function checkpointVerifyProductrices (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_Code, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_Description, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_Grouped_Options_Options.Single_Level, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_Grouped_Options_Options.Single_Level, "isChecked", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_Grouped_Options_Options.Absolute_Break, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_Grouped_Options_Options.Cumulative_Break, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_Grouped_Options_Options.Band_Break, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_PriceTypeID, "Required", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_PriceTypeID, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_PriceNameID, "Required", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_PriceNameID, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_LicenseID, "Required", cmpEqual, true);
  
  
  
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_LicenseID, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_CurrencyTypeID, "Required", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_CurrencyTypeID, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_IsDefault.chkInternal, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_IsApproved.chkInternal, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_TaxInclusive.chkInternal, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_IsPrePublicationPrice.chkInternal, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_IsActiveOnPublication.chkInternal, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Price, "Text", cmpEqual, "£0.00");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Price, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_RenewPrice, "Text", cmpEqual, "£0.00");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_RenewPrice, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_EndDate, "m_sExtendedTypeTooltipText", cmpEqual, "Select a Date");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_StartDate, "Text", cmpEqual, aqDateTime.Today());
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_StartDate, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_StartDate, "m_eExtendedType", cmpEqual, "DateTime");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_StartDate, "m_sExtendedTypeTooltipText", cmpEqual, "Select a Date");
  
  let tabProductPrices = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain;
      tabProductPrices.ClickTab("Audit");
  aqObject.CheckProperty(tabProductPrices.PTProductPrices_Tabs_Audit,"Visible", cmpEqual, true);
      tabProductPrices.ClickTab("General");
  aqObject.CheckProperty(tabProductPrices.PTProductPrices_Tabs_General,"Visible", cmpEqual, true);
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.ClickTab("Price Breaks");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_PriceBreaks, "Visible", cmpEqual, true);
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.ClickTab("Applicable To");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_ApplicableTo, "Visible", cmpEqual, true);
  
});

Then("Applicable To tab should be displayed", function checkpointVerifyApplicableToTab (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo_ProductID, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo_ProductListID, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo_ServiceStartDateFrom, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo_ServiceStartDateTo, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo_BundleID, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo_IsValidForRevenueCalc.chkInternal, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo_TerritoryID, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo_OrderCategoryID, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo_PriceCategoryID, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo_ApprovalGroupID, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo_ProductVersionID.LookupSearchCombo, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo_ProductSubTypeID, "Visible", cmpEqual, true);
  let C1FlexGridApplicableToTab = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo_ProductPriceClassifications.AptifyControlBase_Fill_Panel.flexSubType;
  let clmClassificationType = C1FlexGridApplicableToTab.get_Item(0, 1).OleValue;
  let clmLookupCode = C1FlexGridApplicableToTab.get_Item(0, 2).OleValue;
  Log.Message(clmClassificationType);
  Log.Message(clmLookupCode);
});

Then("I select {arg} from Price Type and tab from the field", function selectPriceTypeFromPrices (PriceType){
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_PriceTypeID.LookupSearchCombo.ClickItem(PriceType);

  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.Keys("[Tab]");
});

Then("I select {arg} from Price Name and tab from the field", function selectPriceNameFromProductPricesTab (PriceName){
  let ddpriceName = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_PriceNameID.LookupSearchCombo;
  ddpriceName.ClickItem(PriceName);
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.Click();
  ddpriceName.Keys("[Tab]");
});

Then("I checked the Default field checkbox", function checkDefaultCheckboxFromPrices(){
  let checkBoxDefault = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_IsDefault.chkInternal;
  checkBoxDefault.wState = cbChecked;
  checkBoxDefault.Keys("[Tab]");
});

Then("I select {arg} from License Type and tab from the field", function selectLicenseTypeFromPrices (Licence){
  let ddLicence = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_LicenseID.LookupSearchCombo;
  ddLicence.ClickItem(Licence);
  ddLicence.Keys("[Tab]");
});

Then("I select {arg} from Currency Type dropdown list", function selectCurrencyTypeFromPrices (currencyType){
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_CurrencyTypeID.LookupSearchCombo.ClickItem(currencyType);
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.Click();
});

Then("I checked Approved field checkbox", function checkApprovedFieldCheckboxFromPrices (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_IsApproved.chkInternal.wState = cbChecked;
});

Then("Price enter in Price field should be equal to Renew Price field", function checkpointComparePriceFieldAndRenewField (){
  let txtpricefield = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Price.txtInner.Text.OleValue;
  let txtrenewpricefield = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_RenewPrice.txtInner.Text.OleValue;
  aqObject.CompareProperty(txtpricefield, cmpEqual,txtrenewpricefield, true,3);
});

Then("Pricing Option radio buttons should be enabled", function checkpointRadioBtnEnabled (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_Grouped_Options_Options.Single_Level, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_Grouped_Options_Options.Absolute_Break, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_Grouped_Options_Options.Cumulative_Break, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_Grouped_Options_Options.Band_Break, "Enabled", cmpEqual, true);
}); 
 

Then("Effective From date should be Today\'s date", function checkpointVerifyDate (){
  let Todaysdate = aqDateTime.Today();
  let EffectiveFromdate = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_StartDate.txtInner.Text.OleValue;
  
  if(aqObject.CompareProperty(Todaysdate, cmpEqual,EffectiveFromdate, true,3))
  {
    Log.Checkpoint("EffectiveFrom date has been same as today's date")
  }
  else
  {
    Log.Error("EffectiveFrom date is not equal to todays date");
  }
});

Then("There should be Message regarding the format", function checkpointVerifyMsgRegardingFormat (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.MessagePopup.messagePanel, "Exists", cmpEqual, true);
});

Then("I checked Pre Pub Price checkbox", function checkPrePubPriceCheckbox (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_IsPrePublicationPrice.chkInternal.wState = cbChecked;
});

Then("The Effective To Date field should be defaulted to the Publication Date of the Main Market Edition less one Day", function checkpointVerifyPublicationDate (){
  let effectiveTodateField = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_EndDate.txtInner.Text.OleValue;
  let lessthanpubdate = aqDateTime.AddDays(txtpubdate,-1);

  if(aqObject.CompareProperty(effectiveTodateField, cmpEqual,lessthanpubdate, true,3))
  {
    Log.Checkpoint("EffectiveTo date has been less than pub date")
  }
  else
  {
    Log.Error("EffectiveTo date is not less than pub date");
  }
  
});

Then("Active On Publication should be disabled", function checkpointActiveOnPublicationDisabled (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_IsActiveOnPublication.chkInternal, "Enabled", cmpEqual, false);
});

Then("Uncheck Pre Pub Price and check Active on Publication", function uncheckPrePubPriceAndCheckActiveOnPublication (){
  let productPriceLayout = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General;
  productPriceLayout.PTProductPrices_Tabs_General_IsPrePublicationPrice.chkInternal.wState = cbUnchecked;
  productPriceLayout.PTProductPrices_Tabs_General_IsActiveOnPublication.chkInternal.wState = cbChecked;
});

Then("The Effective From date should be  default to the Main Market Edition Version\'s Pub date and should be disabled.", function checkpointVerifyEffectiveDateAndPubDate (){
 let fieldEffectiveFromDate =  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_StartDate.txtInner.Text.OleValue;
 
 if(aqObject.CompareProperty(txtpubdate, cmpEqual,fieldEffectiveFromDate, true,3))
  {
    Log.Checkpoint("effective from date has been defaulted to main market edition pub date")
  }
  else
  {
    Log.Error("effective from date is not defaulted to main market edition pub date");
  }
});

Then("I enter {arg} in price field", function enterProductPrices (ParamPrice){
  let txtprice = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Price.txtInner;
  txtprice.Click();
  txtprice.SetText(ParamPrice);
  txtprice.Keys("[Tab]");
});

Then("I enter {arg} in Renew Price and tab from the field", function enterRenewPrice (renewPrice){
  let txtRenewPrice = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_RenewPrice.txtInner;
  txtRenewPrice.Click();
  txtRenewPrice.SetText(renewPrice);
  txtRenewPrice.Keys("[Tab]");
});

Then("I enter {arg} in Effective From date field which is invalid", function enterInvalidEffectiveFrom (effectivefromDate){
  let txtEffectiveFromDate = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_StartDate.txtInner;
  txtEffectiveFromDate.Click();
  txtEffectiveFromDate.SetText(effectivefromDate);
  txtEffectiveFromDate.Keys("[Tab]");
});

Then("Again I enter {arg} Effective From date which is valid and tab from the field", function enterValidEffectiveFromDate (validEffectiveFromDate){
  let txtvalidEffectiveFromDate = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_StartDate.txtInner;
  txtvalidEffectiveFromDate.Click();
  txtvalidEffectiveFromDate.SetText(validEffectiveFromDate);
  txtvalidEffectiveFromDate.Keys("[Tab]");
});

Then("I enter {arg} Effective To date and tab from the field", function enterEffectiveToDateFromPrices (EffectiveToDate){
  let txtEffectiveToDate = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_EndDate.txtInner;
  txtEffectiveToDate.Click();
  txtEffectiveToDate.SetText(EffectiveToDate);
  txtEffectiveToDate.Keys("[Tab]");
});



Then("The previously selected currency from Currency Type dropdown list should not be allowed again", function checkpointSameCurrencyNotAllowed(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.MessageBox.UltraGroupBox1.txtMessage, "Text", cmpEqual, "Only one active default price per currency and effective from & end date is permitted.\r\n");
  Aliases.Aptify_Shell.MessageBox.UltraGroupBox1.cmdOK.ClickButton();
});

Then("I checked Tax Inclusive checkbox", function checkTaxInclusiveCheckboxFromPrices (){
 Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_TaxInclusive.chkInternal.wState = cbChecked;
});

Then("I enter Effctive To Date as Future Date", function (){
  let txtEffectiveToDate = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_EndDate.txtInner;
  txtEffectiveToDate.SetText(aqDateTime.AddDays(aqDateTime.Today(),3));
});


Then("Additional Licences added specifically to that product should be available for selection", function addLicencFromPrices (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_LicenseID.LookupSearchCombo.ClickItem("Inspection Copy 30 Days");
});

Then("I select Currency Type {arg}", function selectCurrencyTypeFromActivePrices (currencyType){
  let ddcurrencyType = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_PT_Group_Box_1.PTProductPrices_ActivePrices.PTProductPrices_ActivePrices_CurrencyTypeID.LookupSearchCombo;
  ddcurrencyType.DropDown();
  ddcurrencyType.ClickItem(currencyType);
  dropdownCurrencyType = currencyType;
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_PT_Group_Box_1.PTProductPrices_ActivePrices.Keys("[Tab]");
});

When("I click on pubdate from page", function clickOnPubdate (){
  let txtpubdateField =  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_Field_PubDate.txtInner.Text.OleValue;
  txtpubdate = txtpubdateField;
});
//territoryPrices

When("I enter {arg} into Code field", function enterCodeUnderPricesTab (code){
  let txtCode = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_Code.txtInner;
  txtCode.Click();
  txtCode.SetText(code);
  parCode = code;
  txtCode.Keys("[Tab]");
});

When("I enter {arg} into Description field", function enterDescriptionUnderPrices (description){
  let txtDescription = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_Description.txtInner.SetText(description);
});

When("I select {arg} from Territory drop-down", function selectTerritoryFromDropDown (Territory){
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo_TerritoryID.LookupSearchCombo.ClickItem(Territory);
  dropdownTerritory = Territory;
});

When("I search for the product {arg}", function (productName){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea3.DashCtrlWrapper.ButtonBar.UltraButton3.ClickButton();
  let splitContainer = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1;
  let radPanel = splitContainer.SplitterPanel2.searchParameters.radPanelParams;
  radPanel.quickSearch.quickSearchText.SetText(productName);
  searchProduct = productName
  radPanel.switchPanel.searchButton.ClickButton();
  let radGridViewProductManagement = splitContainer.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(radGridViewProductManagement.Exists)
  {
    radGridViewProductManagement.DblClickCell(0, "Title");
  }
  
});

When("I click on Save and Close the record from New record prices record wizard", function (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
});


When("I select {arg} product version dropdown list", function selectProductVersionDropdown (productVersion){
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo_ProductVersionID.LookupSearchCombo.ClickItem(productVersion);
});

When("I select {arg} from Product Types and tab from the field", function selectProductSubTypeFromPrices (productsubtype){
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_ConfigTabs.tabMain.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo.PTProductPrices_Tabs_ConfigTabs_ApplicableTo_ProductSubTypeID.LookupSearchCombo.ClickItem(productsubtype);
});

When("I enter {arg} in price field from New product prices record wizard", function enterPriceFromNewProductPrices(pricefield){
  let txtPriceterritory = Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Price.txtInner;
  txtPriceterritory.Click();
  txtPriceterritory.SetText(pricefield);
  txtPriceterritory.Keys("[Tab]");
});

When("I select {arg} from Currency Type dropdown list from New product prices record wizard", function selectCurrencyTypeFromNewproductPricesRecord(currencyType){
  Aliases.Aptify_Shell.FormTemplateForm.PTProductPrices_Form.PTProductPrices_Tabs.tabMain.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General.PTProductPrices_Tabs_General_CurrencyTypeID.LookupSearchCombo.ClickItem(currencyType);
});

Then("I click on All Prices tab from Prices tab", function clickAllPricesTab (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.ClickTab("All Prices");
});

Then("product should be added in the list view with new value in territory under active prices tab", function checkpointVerifyTerritoryUnderActivePrices (){
  let radGridViewClmTerritory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_Telerik_List_View_ActivePrices.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let rowcount =  radGridViewClmTerritory.wRowCount;
  let currentrowTerritory = radGridViewClmTerritory.wValue(rowcount-1,7).OleValue;
  
  if( aqObject.CompareProperty(currentrowTerritory, cmpEqual,dropdownTerritory))
  {
    Log.Checkpoint("product has been display with correct territory")
  }
  else
  {
    Log.Error("Incorrect territory is display");
  }
  
  let productTopAreaGeneralLayout = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General;
  let productName =  productTopAreaGeneralLayout.PT_Products_Toparea_TitleWithoutPrefix.txtInner.Text.OleValue;
  if(aqObject.CompareProperty(searchProduct, cmpEqual,productName))
  {
    Log.Checkpoint("product has been display")
  }
  else
  {
    Log.Error("Incorrect product is display");
  }
});

Then("New value in territory should be dispay under all prices tab", function checkpointVerifyTerritoryValue (){
  let radGridViewTerritory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_Prices.PTProducts_Prices.Products_Prices_Entity_List_View_ProductPrices.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let rowCount = radGridViewTerritory.wRowCount;
  let currentRow = radGridViewTerritory.wValue(rowCount-1,7).OleValue;
  
  
  if(aqObject.CompareProperty(currentRow, cmpEqual,dropdownTerritory))
  {
    Log.Checkpoint("product has been display with correct territory under active prices tab")
  }
  else
  {
    Log.Error("product has been display with incorrect territory under active prices tab");
  }
});






