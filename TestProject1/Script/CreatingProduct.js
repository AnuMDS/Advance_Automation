var baseProduct
var newProductWithoutPrefix
var parIdentifierType
var productTitleprefix 
var organization 
var newPrductTitle 
var productSubType
var unitWeightValue


When("I click on New Product from Customer Services", function clickNewProductCS (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton9.Click();
});

When("I select {arg} from Product Types", function selectProductTypeNewProd (productType){
  Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_Details_ProductDetails_ProductSubTypeID.LookupSearchCombo.ClickItem(productType);
  productSubType = productType
});

When("I enter without prefix", function enterRandomWithoutPrefix (){
  let anysize = 4;
  let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  randomProductName="";
  for( let i=0; i < anysize; i++ ){
  randomProductName += charset[Math.floor(Math.random() * charset.length)];
  }
  
  let txtWithoutPrefix = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_PT_Products_Toparea_TitleWithoutPrefix.txtInner;
  txtWithoutPrefix.Click();
  txtWithoutPrefix.Keys(randomProductName);
  baseProduct = randomProductName
});

When("I enter pubdate", function enterPubdateNewProd(){
  let txtPubDate = Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Products_SubtypesData_PublicationDate.txtInner;
  txtPubDate.Click();
  txtPubDate.Keys(aqDateTime.Today());
  txtPubDate.Keys("[Tab]");
});


When("I click on Next Button from Create new product wizard", function clickNextBtnNewProd (){
  Aliases.Aptify_Shell.PTProductWizard.WizMain.btnNext.ClickButton();
});

When("I click on Finish button from Create new product wizard", function clickFinishBtnNewProd (){
  let wizardControl = Aliases.Aptify_Shell.PTProductWizard.WizMain;
  wizardControl.btnFinish.ClickButton();
});

Then("I enter recently created product as Base product", function enterBaseProduct (){
  let lnkBaseProduct = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_Products_ProductLookupName.txtLink;
  lnkBaseProduct.SetText(baseProduct);
  lnkBaseProduct.Keys("[Enter]");
});

Then("I click on Finish button to create product", function (){
  Sys.Process("Aptify Shell").WinFormsObject("PTProductWizard").WinFormsObject("WizMain").WinFormsObject("btnFinish").ClickButton();
});

Then("product should be displayed with all the information as given during creation of the record", function checkpointProductDispalyWithAllInfo (){
  let withoutPrefix = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_TitleWithoutPrefix.txtInner.Text.OleValue;
  let titlePrefix = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_TitlePrefix.txtInner.Text.OleValue;
  let imprint = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_Organizations.LookupSearchCombo.Text.OleValue;
  let txtProductSubType = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_ResourceType.txtInner.Text.OleValue;
  let clmIdentifierTypeDescription = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main.Products_Main.Products_Main_Tabs.tabMain.Products_Tabs_General.Products_Tabs_General.Products_ProductDetails_PTproductIdentifiers.AptifyControlBase_Fill_Panel.flexSubType.get_Item(1, 1).OleValue;
  
  
  if(aqObject.CompareProperty(titlePrefix, cmpEqual,productTitleprefix, true,3))
  {
    Log.Checkpoint("Same Title Prefix has been display")
  }
  else{
  Log.Error("Different Title Prefix has been display");
  }
  
  if(aqObject.CompareProperty(withoutPrefix, cmpEqual,baseProduct, true,3))
  {
    Log.Checkpoint("Same withoutPrefix has been display")
  }
  else{
  Log.Error("Different withoutPrefix has been display");
  }
  
  
  if(aqObject.CompareProperty(organization, cmpEqual,imprint, true,3))
  {
    Log.Checkpoint("Same oraganisation has been display on product information panel")
  }
  else{
  Log.Error("Different oraganisation has been display on product information panel");
  }
  
  
  if(aqObject.CompareProperty(parIdentifierType, cmpEqual,clmIdentifierTypeDescription, true,3))
  {
    Log.Checkpoint("Same Identifier Type Description has been display on product information panel")
  }
  else{
  Log.Error("Different Identifier Type Description has been display on product information panel");
  }
  
  if(aqObject.CompareProperty(txtProductSubType, cmpEqual,productSubType, true,3))
  {
    Log.Checkpoint("Same product sub type has been display on product information panel")
  }
  else{
  Log.Error("Different product sub type has been display on product information panel");
  }
  
});

Then("All the information of the Base product should be reflected under imprint and without prefix field", function checkpointBaseProductInfoDisplay (){
  Delay(8000);
  let titlewithoutPrefix = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_PT_Products_Toparea_TitleWithoutPrefix.txtInner.Text.OleValue;
  let titleprefix = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_PT_Products_Toparea_TitlePrefix.txtInner.Text.OleValue;
  let imprintname  = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProducts_Wizard_Organizations.txtLink.Text.OleValue;
  
  
  if(aqObject.CompareProperty(titlewithoutPrefix, cmpEqual,baseProduct, true,3))
  {
    Log.Checkpoint("Same withoutPrefix of Base product has been display")
  }
  else{
  Log.Error("Different withoutPrefix of Base product has been display");
  }
  
  
  if(aqObject.CompareProperty(titleprefix, cmpEqual,productTitleprefix, true,3))
  {
    Log.Checkpoint("Same TitlePrefix of Base product has been display")
  }
  else{
  Log.Error("Different TitlePrefix of Base product has been display");
  }
  
  
  if(aqObject.CompareProperty(imprintname, cmpEqual,organization, true,3))
  {
    Log.Checkpoint("Same imprint of base product has been display")
  }
  else{
  Log.Error("Different imprint of base product has been display");
  }
  
});

Then("I edit Without prefix field", function editWithoutPrefix (){
  let prodName = "BaseProduct";
  let randomStr = Math.random().toString(36).replace(/[^a-z]+/g, '');
  let withoutPrefix = aqString.Concat(prodName," "+randomStr);
  
  
  let txtnewWithoutPrefix = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_PT_Products_Toparea_TitleWithoutPrefix.txtInner;
  txtnewWithoutPrefix.Click();
  txtnewWithoutPrefix.Keys("^a [Clear]");
  txtnewWithoutPrefix.SetText(withoutPrefix);
  newProductWithoutPrefix = withoutPrefix;
});


When("I enter Title prefix {arg}", function enterTitlePrefixNewProd (titlePrefix){
  let txtTitlePrefix = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_PT_Products_Toparea_TitlePrefix.txtInner;
  txtTitlePrefix.Click();
  txtTitlePrefix.Keys(titlePrefix);
  productTitleprefix = titlePrefix;
});

When("I enter imprint {arg}", function enterImprintNewProd (imprint){
  let lnkImprint = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProducts_Wizard_Organizations.txtLink;
  lnkImprint.Click();
  lnkImprint.Keys(imprint);
  lnkImprint.Keys("[Tab]");
  organization = imprint;
});

When("I enter description {arg}", function enterDescriptionNewProduct (description){
  let txtDescription = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_Details_Description.txtInner;  
  txtDescription.Click();
  txtDescription.Keys(description);
  txtDescription.Keys("[Tab]");
});

When("I enter Author name {arg}", function enterAuthorName (Authors){
  let txtAuthors = Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Products_SubtypesData_Authors.txtInner;
  txtAuthors.Click();
  txtAuthors.Keys(Authors);
});

When("I select Dimension Group {arg}", function selectDimensionGrp (dimensionGroup){
  
  let ddDimensionGroup = Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_PTProductDimensions_DimensionGroupID.txtLink;
  ddDimensionGroup.Click();
  ddDimensionGroup.Keys(dimensionGroup);
  ddDimensionGroup.Keys("[Tab]");
});

When("I click on New icon", function clickNewBtnDimensionGrp (){
  Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Product_Dimensions_SubtypeView.zAptifyControlBase_Toolbars_Dock_Area_Top.ClickItem("SubType|New");
});

When("I enter value {arg}", function entervalueDimesionGrp (value){
  let txtValue = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductDimensions_Form.PTProductDimensions_Tabs.tabMain.PTProductDimensions_Tabs_General.PTProductDimensions_Tabs_General.PTProductDimensions_Value.txtInner;
  txtValue.Keys(value);
  unitWeightValue = value;
});

When("I select ONIX Unit {arg}", function selectOnixUnit (onixUnit){
  let ddOnixUnit = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductDimensions_Form.PTProductDimensions_Tabs.tabMain.PTProductDimensions_Tabs_General.PTProductDimensions_Tabs_General.PTProductDimensions_ONIXUnitID.LookupSearchCombo;
  ddOnixUnit.ClickItem(onixUnit);
});

When("I click on OK button", function clickOkBtnDimensionGrp (){
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
});

When("I select Identifier Type {arg}", function selectIdentifierType (identifierType){
  let ddIdentifierType = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductIdentifiers_Form.PTProductIdentifiers_Tabs.tabMain.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_IdentifierTypeID.LookupSearchCombo;
  ddIdentifierType.ClickItem(identifierType);
  parIdentifierType = identifierType
});

When("I select range {arg}", function selectRangeIdentifierType (range){
  let subTypeTemplateForm = Aliases.Aptify_Shell.SubTypeTemplateForm;
  subTypeTemplateForm.PTProductIdentifiers_Form.PTProductIdentifiers_Tabs.tabMain.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_OrganizationCodeAllocationsID.LookupSearchCombo.ClickItem(range);
});

When("I enter copyright year {arg}", function enterCopyrightYrNewProd (copyrightYear){
  let txtCopyrightYear = Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Products_SubtypesData_xCopyrightYear.txtInner;
  txtCopyrightYear.Keys(copyrightYear);
  parcopyrightYear = copyrightYear;
});

When("I select product disount type {arg}", function selectProdDiscountType (productdiscounType){
  Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Product_ProductDiscountID.LookupSearchCombo.ClickItem(productdiscounType);
});

When("I select fulfilment product type {arg}", function selectFulfilmentProdType(fulfilmentproductType){
  Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Product_FulfilmentProductTypeID.LookupSearchCombo.ClickItem(fulfilmentproductType);
});


When("I select Type from dimension record {arg}", function selectTypeFromDimensionRecord (type){
  let ddType = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductDimensions_Form.PTProductDimensions_Tabs.tabMain.PTProductDimensions_Tabs_General.PTProductDimensions_Tabs_General.PTProductDimensions_TypeID.LookupSearchCombo;
  ddType.ClickItem(type);
  ddType.Keys("[Tab]");
});

Then("I create new product", function createNewProduct (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton9.ClickButton();
});

Then("I edit Title prefix {arg}", function editTitlePrefixNewProd (titleprefix){
  let txtnewTitlePrefix = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_PT_Products_Toparea_TitlePrefix.txtInner;
  txtnewTitlePrefix.Click();
  txtnewTitlePrefix.Keys("^a [Clear]");
  txtnewTitlePrefix.SetText(titleprefix);
  newPrductTitle = titleprefix;
});

Then("I enter description {arg}", function enterDescriptionBaseProd (description){
  let txtDescription = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_Details_Description.txtInner;  
  txtDescription.Click();
  txtDescription.SetText(description);
  txtDescription.Keys("[Tab]");
});

Then("I click on Next Button", function (){
  Aliases.Aptify_Shell.PTProductWizard.WizMain.btnNext.ClickButton();
});

Then("I enter pubdate {arg}", function enterPubdateBaseProduct (pubDate){
  let txtPubDate = Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Products_SubtypesData_PublicationDate.txtInner;
  txtPubDate.Click();
  txtPubDate.SetText(pubDate);
  txtPubDate.Keys("[Tab]");;
});

Then("I enter copyright year {arg}", function enterCopyrightYrBaseProd (copyrightYear){
  let txtCopyrightYear = Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Products_SubtypesData_xCopyrightYear.txtInner;
  txtCopyrightYear.Click();
  txtCopyrightYear.SetText(copyrightYear);
});

Then("I check inventory sites to add multiple sites", function checkInventorySites (){
  Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Products_SubtypesData_InventorySitesID.dropDownMultiSelect.Click();
  let radTreeView = Aliases.Aptify_Shell.DropDownPopupForm.treeInner;
  radTreeView.CheckItem("New York", true);
  radTreeView.CheckItem("Paris", true);
  
});

When("I click on New icon from Identifiers table", function clickNewBtnFromIdentifiersTable (){
  Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Products_SubtypesData_Sub_Type_Control_1.zAptifyControlBase_Toolbars_Dock_Area_Top.ClickItem("SubType|New");
});

When("I click on Apply button from dimensions group", function clickApplyBtnFromDimensionGrp (){
  Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_PTProductDimensions_Apply.Click();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
});



Then("Unit weight for base product should be same for newly created product", function checkpointUnitWeightCompare (){
  Delay(2000);
  let C1FlexGrid = Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Product_Dimensions_SubtypeView.AptifyControlBase_Fill_Panel.flexSubType;
  let clmUnitWeight = C1FlexGrid.get_Item(5, 2).OleValue;
  
  
  if(aqObject.CompareProperty(clmUnitWeight, cmpEqual,unitWeightValue, true,3))
  {
    Log.Checkpoint("Same UnitWeight for base product has been display")
  }
  else{
  Log.Error("Different UnitWeight for base product has been display");
  }
});

Then("I click on Save Record and Close Form from product information panel", function (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
});

When("I check Open Product Relationships Wizard checkbox", function (){
  Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.WinFormsObject("PTProductWizard.ProductTitle.OpenOnCompletionOptions").WinFormsObject("Open Product Relationships Wizard:FormItems.DisplayName.OpenProdRelationsWizard:R").ClickButton();
});

When("I click Finish", function (){
  Aliases.Aptify_Shell.PTProductWizard.WizMain.btnFinish.ClickButton();
});

Then("Product Relationships wizard should be displayed", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm, "WndCaption", cmpEqual, "Product Relationships");
});

Then("Product, Primary Identifier, Type and Publisher fields should not be empty", function (){
 let type = Aliases.Aptify_Shell.GenericWizardForm.WinFormsObject("WizPanels_291").WinFormsObject("PTProductRelationshipsStaging.WizardPage1").WinFormsObject("PTProductRelationshipsStaging.WizardPage1.ProductSubType").WinFormsObject("txtInner").get_Text();
 let product = Aliases.Aptify_Shell.GenericWizardForm.WinFormsObject("WizPanels_291").WinFormsObject("PTProductRelationshipsStaging.WizardPage1").WinFormsObject("PTProductRelationshipsStaging.WizardPage1.ProductID").WinFormsObject("txtLink").get_Text();
 let publisher = Aliases.Aptify_Shell.GenericWizardForm.WinFormsObject("WizPanels_291").WinFormsObject("PTProductRelationshipsStaging.WizardPage1").WinFormsObject("PTProductRelationshipsStaging.WizardPage1.Organization").WinFormsObject("txtInner").get_Text();
 let primaryIdentifier = Aliases.Aptify_Shell.GenericWizardForm.WinFormsObject("WizPanels_291").WinFormsObject("PTProductRelationshipsStaging.WizardPage1").WinFormsObject("PTProductRelationshipsStaging.WizardPage1.PrimaryIdentifier").WinFormsObject("txtInner").get_Text();


  if(aqObject.CompareProperty(product, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Product field is not blank")
  }
  else{
  Log.Error("Product field is blank");
  }
  
  if(aqObject.CompareProperty(type, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Type field is not blank")
  }
  else{
  Log.Error("Type field is blank");
  }
  
  if(aqObject.CompareProperty(publisher, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Publisher field is not blank")
  }
  else{
  Log.Error("Publisher field is blank");
  }
  
  if(aqObject.CompareProperty(primaryIdentifier, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Primary Identifier field is not blank")
  }
  else{
  Log.Error("Primary Identifier field is blank");
  }       
});

Then("I enter Related Product\\(s) {arg}", function (product){
  let gridProducts =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1; 
  let txtRelatedProduct = Aliases.Aptify_Shell.GenericWizardForm.WinFormsObject("WizPanels_291").WinFormsObject("PTProductRelationshipsStaging.WizardPage1").WinFormsObject("PTProductRelationshipsStaging.WizardPage1.RelatedProductsID").WinFormsObject("txtLink");

  txtRelatedProduct.Click();
  txtRelatedProduct.SetText(product);
  relatedProduct = product;
  txtRelatedProduct.Keys("[Tab]");
   if( gridProducts.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }
});

Then("I enter Relationship Type {arg}", function (relationshipTypePar){
  let ddRelationshipType = Aliases.Aptify_Shell.GenericWizardForm.WinFormsObject("WizPanels_291").WinFormsObject("PTProductRelationshipsStaging.WizardPage1").WinFormsObject("PTProductRelationshipsStaging.WizardPage1.RelationshipTypeID").WinFormsObject("LookupSearchCombo");

  ddRelationshipType.Click();
  ddRelationshipType.ClickItem(relationshipTypePar);
  relationshipType = relationshipTypePar;
  ddRelationshipType.Keys("[Tab]");
});

Then("Start Date field should be filled", function (){
  let txtStartDate = Aliases.Aptify_Shell.GenericWizardForm.WinFormsObject("WizPanels_291").WinFormsObject("PTProductRelationshipsStaging.WizardPage1").WinFormsObject("PTProductRelationshipsStaging.WizardPage1.StartDate").WinFormsObject("txtInner").get_Text();

  if(aqObject.CompareProperty(txtStartDate, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Start Date field is filled")
  }
  else{
  Log.Error("Start Date field is not filled");
  }
});

Then("I enter End Date", function (){
  let txtEndDate = Aliases.Aptify_Shell.GenericWizardForm.WinFormsObject("WizPanels_291").WinFormsObject("PTProductRelationshipsStaging.WizardPage1").WinFormsObject("PTProductRelationshipsStaging.WizardPage1.EndDate").WinFormsObject("txtInner");
  let date = aqDateTime.AddDays(aqDateTime.Today(), 4);
  
  txtEndDate.Click();
  txtEndDate.SetText(date);
  txtEndDate.Keys("[Tab]");
});

Then("I select Children radio tab", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WinFormsObject("WizPanels_291").WinFormsObject("PTProductRelationshipsStaging.WizardPage1").WinFormsObject("PTProductRelationshipsStaging.WizardPage1.ParentChildOptions").WinFormsObject("Children:GroupedOptions.ProductRelationships.Children:C").ClickButton();
});

Then("I click on Create", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WinFormsObject("WizPanels_291").WinFormsObject("PTProductRelationshipsStaging.WizardPage1").WinFormsObject("PTProductRelationshipsStaging.WizardPage1.CreateProductButton").Click();
});

Then("related product selected should be displayed in the Children frame below", function (){
  let radGridView = Aliases.Aptify_Shell.GenericWizardForm.WinFormsObject("WizPanels_291").WinFormsObject("PTProductRelationshipsStaging.WizardPage1").WinFormsObject("PTProductRelationshipsStaging.WizardPage1.ChildrenView").WinFormsObject("outerPanel").WinFormsObject("previewSplitContainer").WinFormsObject("SplitterPanel", "").WinFormsObject("panel4CaptionAndGrid").WinFormsObject("radGridView1");

  let product = radGridView.wValue(0, 0).OleValue;
  if(aqObject.CompareProperty(relatedProduct, cmpEqual, product, true, 3))
  {
    Log.Checkpoint("Related product selected is displayed in the Children frame")
  }
  else{
  Log.Error("Related product selected is not displayed in the Children frame");
  }
});

Then("I click on Finish button", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
});

Then("I click on Relationships tab", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Relationships");
});

Then("related product selected should be displayed", function (){
  let C1FlexGrid = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.WinFormsObject("Products.Relationships.Tab").WinFormsObject("Products.Relationships.Tab").WinFormsObject("tabMain").WinFormsObject("Products.DirectRelationships.Tab").WinFormsObject("Products.DirectRelationships.Tab").WinFormsObject("PTProducts.Group.Relatedproducts").WinFormsObject("AptifyControlBase_Fill_Panel").WinFormsObject("flexSubType");

  let relatedProducts = C1FlexGrid.get_Item(1, 2).OleValue;
  if(aqObject.CompareProperty(relatedProduct, cmpEqual, relatedProducts, true, 3))
  {
    Log.Checkpoint("Related product selected is displayed under Relationships(Direct)")
  }
  else{
  Log.Error("Related product selected is not displayed under Relationships(Direct)");
  }
});

Then("all the information submitted should be displayed in Information Panel", function (){
 let productCreated = aqString.Concat(productTitleprefix, " "+baseProduct);
   
 if(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.Exists){
  var title =  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_Title.txtInner.get_Text();
  var txtProductSubType = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_ResourceType.txtInner.Text.OleValue;
  var imprint = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_Organizations.LookupSearchCombo.Text.OleValue;
 }
 else{
  var title = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.WinFormsObject("Release.OTCProducts.Toparea").WinFormsObject("Release.OTCProducts.Toparea.Title").WinFormsObject("txtInner").get_Text();
  var txtProductSubType = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.WinFormsObject("Release.OTCProducts.Toparea").WinFormsObject("Release.OTCProducts.Toparea.ResourceType").WinFormsObject("txtInner").get_Text();
  var imprint = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.WinFormsObject("Release.OTCProducts.Toparea").WinFormsObject("Release.OTCProducts.Toparea.Organizations").WinFormsObject("LookupSearchCombo").Text.OleValue;   
 }

  if(aqObject.CompareProperty(productCreated, cmpEqual, title, true,3))
  {
    Log.Checkpoint("Product Title displayed is Correct")
  }
  else{
  Log.Error("Product Title displayed is Incorrect");
  }

  if(aqObject.CompareProperty(txtProductSubType, cmpEqual, productSubType, true,3))
  {
    Log.Checkpoint("Product Sub Type displayed is Correct")
  }
  else{
  Log.Error("Product Sub Type displayed is Incorrect");
  } 
  
  if(aqObject.CompareProperty(organization, cmpEqual, imprint, true,3))
  {
    Log.Checkpoint("Organization displayed is Correct")
  }
  else{
  Log.Error("Organization displayed is Incorrect");
  }    
});

Then("I click on Save and Close Form", function (){
Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("datEntity").WinFormsObject("AptifyDataControl_Fill_Panel").WinFormsObject("_AptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top").ClickItem("Data Form|Save Record and Close Form");	
});

Then("I select Parent radio tab", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WinFormsObject("WizPanels_291").WinFormsObject("PTProductRelationshipsStaging.WizardPage1").WinFormsObject("PTProductRelationshipsStaging.WizardPage1.ParentChildOptions").WinFormsObject("Parent:GroupedOptions.ProductRelationships.Parent:P").ClickButton();
});

Then("related product selected should be displayed in the Parent frame above", function (){
  let radGridView = Aliases.Aptify_Shell.GenericWizardForm.WinFormsObject("WizPanels_291").WinFormsObject("PTProductRelationshipsStaging.WizardPage1").WinFormsObject("PTProductRelationshipsStaging.WizardPage1.ParentsView").WinFormsObject("outerPanel").WinFormsObject("previewSplitContainer").WinFormsObject("SplitterPanel", "").WinFormsObject("panel4CaptionAndGrid").WinFormsObject("radGridView1");

  let product = radGridView.wValue(0, 0).OleValue;
  if(aqObject.CompareProperty(relatedProduct, cmpEqual, product, true, 3))
  {
    Log.Checkpoint("Related product selected is displayed in the Parent frame")
  }
  else{
  Log.Error("Related product selected is not displayed in the Parent frame");
  }  
});

Then("I click on Relationships\\(Tree) tab", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.WinFormsObject("Products.Relationships.Tab").WinFormsObject("Products.Relationships.Tab").WinFormsObject("tabMain").ClickTab("Relationships (Tree)");
});

Then("Related product and Relationship Type selected should be displayed", function (){
 let identifier =  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_PrimaryIdentifierLabel.txtInner.get_Text();
 let productCreated = aqString.Concat(productTitleprefix, " "+baseProduct);
 let node = productCreated+"("+parIdentifierType+" : "+identifier+")"
 let treeViewExtension = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.WinFormsObject("Products.Relationships.Tab").WinFormsObject("Products.Relationships.Tab").WinFormsObject("tabMain").WinFormsObject("Products.AllRelationships").WinFormsObject("Products").WinFormsObject("Products.Relationships.ProductRelationsTree").WinFormsObject("splitContainer1").WinFormsObject("SplitterPanel", "", 1).WinFormsObject("TreeViewControl");
 treeViewExtension.ClickItem("|"+node+"|"+relationshipType+"|"+relatedProduct);
 let tree = treeViewExtension.wSelection; 

 let value = tree.split("|");

  if(aqObject.CompareProperty(relatedProduct, cmpEqual, value[3], true, 3))
  {
    Log.Checkpoint("Related product selected is displayed under Relationships(Tree)")
  }
  else{
  Log.Error("Related product selected is not displayed under Relationships(Tree)");
  }
  
  if(aqObject.CompareProperty(relationshipType, cmpEqual, value[2], true, 3))
  {
    Log.Checkpoint("Relationship Type selected is displayed under Relationships(Tree)")
  }
  else{
  Log.Error("Relationship Type selected is not displayed under Relationships(Tree)");
  }  
});

Then("I create a Default Price set", function (){
  clickPricesTab();
  selectCurrencyType();
  enterPrice();
  clickAdd();
});

function clickPricesTab(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Prices");
}
function selectCurrencyType(){
  let currencyType = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_PT_Group_Box_1.PTProductPrices_ActivePrices.PTProductPrices_ActivePrices_CurrencyTypeID.LookupSearchCombo;
  currencyType.Click();
  currencyType.Keys("UK Sterling");
  currencyType.Keys("[Tab]");
}
function enterPrice(){
  let txtPrice = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_PT_Group_Box_1.PTProductPrices_ActivePrices.PTProductPrices_ActivePrices_Price.txtInner;
  txtPrice.DblClick();
  txtPrice.Keys("[BS]");
  txtPrice.Keys(20);
  txtPrice.Keys("[Tab]");
}

function clickAdd(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices.PTProducts_ActivePrices_PT_Group_Box_1.PTProductPrices_ActivePrices.PTProductPrices_ActivePrices_Active_Button_Add.Click(25, 14);
}

Then("I set Site Status as Open", function (){
  clickInventoryTabPanel();
  setSupplyStatus();
  selectPickingLocation();
  clickSaveAndClose();
});

function clickInventoryTabPanel(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
}
 function setSupplyStatus()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(0, "Supply Status");

  let ddSiteStatus = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_SiteStatusID.LookupSearchCombo;
  ddSiteStatus.Click();
  ddSiteStatus.ClickItem("Open");
  ddSiteStatus.Keys("[Tab]");
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

When("I enter a Value", function (){
  let txtValue = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductIdentifiers_Form.PTProductIdentifiers_Tabs.tabMain.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_Tabs_General.ProductIdentifiers_MaskValue.maskedTextBox1;
  let randomCode =  aqConvert.FloatToStr(Math.floor((Math.random() * 1000000) + 1));
  txtValue.Click();
  txtValue.SetText(randomCode);
  txtValue.Keys("[Tab]");
  let value = aqObject.GetPropertyValue(txtValue, "Text");
  workId = value;
});

Then("the information submitted should be displayed in Information Panel", function (){

  let title = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.WinFormsObject("Work.PT.Products.Toparea").WinFormsObject("Work.PT.Products.Toparea.Title").WinFormsObject("txtInner").get_Text();
  let identifier = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.WinFormsObject("Work.PT.Products.Toparea").WinFormsObject("Work.PT.Products.Toparea.PrimaryIdentifierLabel").WinFormsObject("txtInner").get_Text();
  let txtProductSubType = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.WinFormsObject("Work.PT.Products.Toparea").WinFormsObject("Work.PT.Products.Toparea.ResourceType").WinFormsObject("txtInner").get_Text();
  let imprint = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.WinFormsObject("Work.PT.Products.Toparea").WinFormsObject("Work.PT.Products.Toparea.Organizations").WinFormsObject("LookupSearchCombo").get_Text();

 let productCreated = aqString.Concat(productTitleprefix, " "+baseProduct);

  if(aqObject.CompareProperty(productCreated, cmpEqual, title, true,3))
  {
    Log.Checkpoint("Product Title displayed is Correct")
  }
  else{
  Log.Error("Product Title displayed is Incorrect");
  }

  if(aqObject.CompareProperty(txtProductSubType, cmpEqual, productSubType, true,3))
  {
    Log.Checkpoint("Product Sub Type displayed is Correct")
  }
  else{
  Log.Error("Product Sub Type displayed is Incorrect");
  } 
  
  if(aqObject.CompareProperty(organization, cmpEqual, imprint, true,3))
  {
    Log.Checkpoint("Organization displayed is Correct")
  }
  else{
  Log.Error("Organization displayed is Incorrect");
  }  
  
  if(aqObject.CompareProperty(identifier, cmpEqual, workId, true,3))
  {
    Log.Checkpoint("Work Id displayed is Correct")
  }
  else{
  Log.Error("Work Id displayed is Incorrect");
  }      
});

Then("Related product selected should be displayed", function (){
 let productCreated = aqString.Concat(productTitleprefix, " "+baseProduct);
 let node = productCreated+"("+parIdentifierType+" : "+workId+")"
 let treeViewExtension = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.WinFormsObject("Products.Relationships.Tab").WinFormsObject("Products.Relationships.Tab").WinFormsObject("tabMain").WinFormsObject("Products.AllRelationships").WinFormsObject("Products").WinFormsObject("Products.Relationships.ProductRelationsTree").WinFormsObject("splitContainer1").WinFormsObject("SplitterPanel", "", 1).WinFormsObject("TreeViewControl");
 treeViewExtension.ClickItem("|"+node+"|"+relationshipType+"|"+relatedProduct);
 let tree = treeViewExtension.wSelection; 

 let value = tree.split("|");

  if(aqObject.CompareProperty(relatedProduct, cmpEqual, value[3], true, 3))
  {
    Log.Checkpoint("Related product selected is displayed under Relationships(Tree)")
  }
  else{
  Log.Error("Related product selected is not displayed under Relationships(Tree)");
  }
});

Then("information submitted should be displayed in Product Information Panel", function (){
  let productCreated = aqString.Concat(productTitleprefix, " "+baseProduct);
   
  if(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.Exists){
   var title = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_Title.txtInner.get_Text();
   var imprint = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_Organizations.LookupSearchCombo.get_Text();
   var txtProductSubType = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_ResourceType.txtInner.get_Text(); 
  }

 else if(Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTProducts.OTC.Form").WinFormsObject("PT.Products.Top").WinFormsObject("panelTopArea").WinFormsObject("Subs.OTCProducts.Toparea").Exists ){
   var title =  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.WinFormsObject("Subs.OTCProducts.Toparea").WinFormsObject("Subs.OTCProducts.Toparea.Title").WinFormsObject("txtInner").get_Text();
   var txtProductSubType = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.WinFormsObject("Subs.OTCProducts.Toparea").WinFormsObject("Subs.OTCProducts.Toparea.ResourceType").WinFormsObject("txtInner").get_Text();
   var imprint = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.WinFormsObject("Subs.OTCProducts.Toparea").WinFormsObject("Subs.OTCProducts.Toparea.Organizations").WinFormsObject("LookupSearchCombo").get_Text();    
  }
  else{
   var title = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.WinFormsObject("Onl.Subs.OTCProducts.Toparea").WinFormsObject("Onl.Subs.OTCProducts.Toparea.Title").WinFormsObject("txtInner").get_Text();
   var txtProductSubType = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.WinFormsObject("Onl.Subs.OTCProducts.Toparea").WinFormsObject("Onl.Subs.OTCProducts.Toparea.ResourceType").WinFormsObject("txtInner").get_Text();
   var imprint = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.WinFormsObject("Onl.Subs.OTCProducts.Toparea").WinFormsObject("Onl.Subs.OTCProducts.Toparea.Organizations").WinFormsObject("LookupSearchCombo").get_Text();    
  }
  if(aqObject.CompareProperty(productCreated, cmpEqual, title, true,3))
  {
    Log.Checkpoint("Product Title displayed is Correct")
  }
  else{
  Log.Error("Product Title displayed is Incorrect");
  }

  if(aqObject.CompareProperty(txtProductSubType, cmpEqual, productSubType, true,3))
  {
    Log.Checkpoint("Product Sub Type displayed is Correct")
  }
  else{
  Log.Error("Product Sub Type displayed is Incorrect");
  }

  if(aqObject.CompareProperty(organization, cmpEqual, imprint, true,3))
  {
    Log.Checkpoint("Organization displayed is Correct")
  }
  else{
  Log.Error("Organization displayed is Incorrect");
  }  
});

When("I set a Primary Identifier", function (){
 clickNewIdentifier();
 selectIdentiferType();
 enterValue();
 clickOK();
 invalidCheckPopUp();
 clickSave();
});

function clickNewIdentifier()
{
  let C1FlexGrid = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main.Products_Main.Products_Main_Tabs.tabMain.Products_Tabs_General.Products_Tabs_General.Products_ProductDetails_PTproductIdentifiers.AptifyControlBase_Fill_Panel.flexSubType;
  C1FlexGrid.ClickR();
  C1FlexGrid.PopupMenu.Click("New");
}
function selectIdentiferType(){
  let ddIdentifierType = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductIdentifiers_Form.PTProductIdentifiers_Tabs.tabMain.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_IdentifierTypeID.LookupSearchCombo;

  ddIdentifierType.Click();
  ddIdentifierType.ClickItem("EAN 13");
  ddIdentifierType.Keys("[Tab]");
}

function enterValue(){
  let txtValue = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductIdentifiers_Form.PTProductIdentifiers_Tabs.tabMain.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_Tabs_General.ProductIdentifiers_MaskValue.maskedTextBox1;
  let value =  aqConvert.FloatToStr(Math.floor((Math.random() * 10000000000000) + 1));
  txtValue.Click();
  txtValue.Keys("^a[BS]");
  txtValue.Keys(value);
  txtValue.Keys("[Tab]");
}
function clickOK(){
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
}

function invalidCheckPopUp(){
  if(Aliases.Aptify_Shell.MessageBox.Exists){
    Aliases.Aptify_Shell.MessageBox.UltraGroupBox1.cmdOK.ClickButton();
  }
}

When("I enter a Primary Identifier", function (){
  clickNewIdentifier();
  selectPPNIdentifier();
  enterValue();
  clickOK();
});

function selectPPNIdentifier(){
  let ddIdentifierType = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductIdentifiers_Form.PTProductIdentifiers_Tabs.tabMain.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_IdentifierTypeID.LookupSearchCombo;

  ddIdentifierType.Click();
  ddIdentifierType.ClickItem("PPN (Publisher Product Number)");
  ddIdentifierType.Keys("[Tab]");  
}
function clickTabIdentifiers()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Identifiers");
}





When("I check {arg} to create", function (param1){
  let radGridView = Aliases.Aptify_Shell.PTProductWizard.WinFormsObject("WizPanels_398").WinFormsObject("PTProductsWizard.WorkContents.AdditionalProducts").WinFormsObject("PTProductsWizard.WorkContents.AdditionalProducts.ProductSubtypes").WinFormsObject("outerPanel").WinFormsObject("previewSplitContainer").WinFormsObject("SplitterPanel", "").WinFormsObject("panel4CaptionAndGrid").WinFormsObject("radGridView1");
  let records = radGridView.wRowCount;
  let i = 0
  for(i;i<records;i++){
    let types = radGridView.wValue(i, 1).OleValue;
    if( types == param1 ){
       radGridView.ClickCell(i,0);
       additionalProducts.push(types);
    }
   
  }
});

Then("all the tabs like Editorial, Identifiers, Inventory should be displayed", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Identifiers");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_Identifiers, "Visible", cmpEqual, true);
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Contributors");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_Contributors, "Visible", cmpEqual, true);

  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Classifications");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_Classification, "Visible", cmpEqual, true);
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory, "Visible", cmpEqual, true);
 
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Fulfilment");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PT_Products_OTC_FulfilmentItems, "Visible", cmpEqual, true);
 
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Prices");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices, "Visible", cmpEqual, true);
 
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Relationships");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Relationships_Tab, "Visible", cmpEqual, true);
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Rights");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_RREditorial, "Visible", cmpEqual, true);
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Details");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main, "Visible", cmpEqual, true);  
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Editorial");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_Editorial, "Visible", cmpEqual, true);
  
});

var types = [];
var additionalProducts = [];

Then("additional product types created should be displayed under Editorial tab", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_Editorial.Products_AI.Product_Editorial_SubtypesBrowser.splitContainer1.SplitterPanel.TreeViewControl.ClickItem("|Attributes|Products|Manifestations");
   let C1FlexGrid = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_Editorial.Products_AI.Product_Editorial_SubtypesBrowser.splitContainer1.SplitterPanel2.aptifySubType1.WinFormsObject("AptifyControlBase_Fill_Panel").WinFormsObject("flexSubType");
   let j = 0;
   let i = 1;
   let passCount = 0;
   for(i;i<=C1FlexGrid.BottomRow;i++){
       let productType = C1FlexGrid.get_Item(i,1).OleValue; 
       types.push(productType);
   }
   Log.Message(types);
   if (types.length == additionalProducts.length) {
    for ( j ; j < additionalProducts.length; j++) { 
        if (additionalProducts[j] = types[j]) {
          passCount += 1;
				}
    }
    
    if(passCount == additionalProducts.length){
  	 Log.Checkpoint("Additional Product Types created are displayed correctly");
		}   
    else{
     Log.Error("Additional Product Types created are not displayed correctly");
    }
   }
  else{
    Log.Error("Additional Product Types created are not displayed correctly");
  }
  
    
});

       
When("I set a Primary Identifier for E-Subscription", function (){
  clickNewIdentifier();
  selectESubIdentifierType();
  enterESubIdentifierValue();
  clickOK();
  clickSave();
});

function selectESubIdentifierType(){
  let ddIdentifierType = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductIdentifiers_Form.PTProductIdentifiers_Tabs.tabMain.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_IdentifierTypeID.LookupSearchCombo;

  ddIdentifierType.Click();
  ddIdentifierType.ClickItem("ISSN - International Standard Serials Number");
  parIdentifierType = "ISSN - International Standard Serials Number";
  ddIdentifierType.Keys("[Tab]");  
}
function enterESubIdentifierValue(){
  let txtValue = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductIdentifiers_Form.PTProductIdentifiers_Tabs.tabMain.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_Tabs_General.ProductIdentifiers_MaskValue.maskedTextBox1;
  let value =  aqConvert.FloatToStr(Math.floor((Math.random() * 10000000000000) + 1));
  txtValue.Click();  
  txtValue.Keys("^a[BS]");
  txtValue.Keys(value);
  txtValue.Keys("[Tab]");
  let ISSN = aqObject.GetPropertyValue(txtValue, "Text");
  identifer = ISSN;  
}

Then("I enter a Primary Identifier for E-Subscription", function (){
  clickNewIdentifier();
  selectESubIdentifierType();
  enterESubIdentifierValue();
  clickOK();
  clickSave();
});

function clickSave(){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record");
}
Then("Product, Type and Publisher fields should not be empty", function (){
 let type = Aliases.Aptify_Shell.GenericWizardForm.WinFormsObject("WizPanels_291").WinFormsObject("PTProductRelationshipsStaging.WizardPage1").WinFormsObject("PTProductRelationshipsStaging.WizardPage1.ProductSubType").WinFormsObject("txtInner").get_Text();
 let product = Aliases.Aptify_Shell.GenericWizardForm.WinFormsObject("WizPanels_291").WinFormsObject("PTProductRelationshipsStaging.WizardPage1").WinFormsObject("PTProductRelationshipsStaging.WizardPage1.ProductID").WinFormsObject("txtLink").get_Text();
 let publisher = Aliases.Aptify_Shell.GenericWizardForm.WinFormsObject("WizPanels_291").WinFormsObject("PTProductRelationshipsStaging.WizardPage1").WinFormsObject("PTProductRelationshipsStaging.WizardPage1.Organization").WinFormsObject("txtInner").get_Text();
 let primaryIdentifier = Aliases.Aptify_Shell.GenericWizardForm.WinFormsObject("WizPanels_291").WinFormsObject("PTProductRelationshipsStaging.WizardPage1").WinFormsObject("PTProductRelationshipsStaging.WizardPage1.PrimaryIdentifier").WinFormsObject("txtInner").get_Text();


  if(aqObject.CompareProperty(product, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Product field is not blank")
  }
  else{
  Log.Error("Product field is blank");
  }
  
  if(aqObject.CompareProperty(type, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Type field is not blank")
  }
  else{
  Log.Error("Type field is blank");
  }
  
  if(aqObject.CompareProperty(publisher, cmpNotEqual, EmptyVariant, true, 3))
  {
    Log.Checkpoint("Publisher field is not blank")
  }
  else{
  Log.Error("Publisher field is blank");
  }
});

Then("the selected Related product should be displayed", function (){
let treeViewExtension = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.WinFormsObject("Products.Relationships.Tab").WinFormsObject("Products.Relationships.Tab").WinFormsObject("tabMain").WinFormsObject("Products.AllRelationships").WinFormsObject("Products").WinFormsObject("Products.Relationships.ProductRelationsTree").WinFormsObject("splitContainer1").WinFormsObject("SplitterPanel", "", 1).WinFormsObject("TreeViewControl");  
 treeViewExtension.Keys("[Right]");
 treeViewExtension.Keys("[Right]");
 treeViewExtension.Keys("[Right]");
 treeViewExtension.Keys("[Right]");
 let tree = treeViewExtension.wSelection; 

  if(aqObject.CompareProperty(tree, cmpContains, relatedProduct, true, 3))
  {
    Log.Checkpoint("Related product selected is displayed under Relationships(Tree)")
  }
  else{
  Log.Error("Related product selected is not displayed under Relationships(Tree)");
  }

});

When("I set a Primary Identifier for Group", function (){
 clickIdentifierTab();
 clickNewGroupIdentifier();
 selectGroupIdentifierType();
 enterGroupIdentifierValue();
 clickOK();
 clickSave();
});

function clickIdentifierTab(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Identifiers");
}

function clickNewGroupIdentifier(){
  let C1FlexGrid = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.WinFormsObject("PTProducts.Identifiers").WinFormsObject("Products Identifiers").WinFormsObject("PTProductIdentifiers").WinFormsObject("AptifyControlBase_Fill_Panel").WinFormsObject("flexSubType");
  C1FlexGrid.ClickR();
  C1FlexGrid.PopupMenu.Click("New");
}

function selectGroupIdentifierType(){
  let ddIdentifierType = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductIdentifiers_Form.PTProductIdentifiers_Tabs.tabMain.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_IdentifierTypeID.LookupSearchCombo;

  ddIdentifierType.Click();
  ddIdentifierType.ClickItem("Series Identifier");
  parIdentifierType = "Series Identifier";
  ddIdentifierType.Keys("[Tab]");  
}
function enterGroupIdentifierValue(){
  let txtValue = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductIdentifiers_Form.PTProductIdentifiers_Tabs.tabMain.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_Tabs_General.ProductIdentifiers_MaskValue.maskedTextBox1;
  let value =  aqConvert.FloatToStr(Math.floor((Math.random() * 10000000000000) + 1));
  txtValue.Keys(value);
  txtValue.Keys("[Tab]");  
}

Then("data submitted should be displayed in Product Information Panel", function (){
 let productCreated = aqString.Concat(productTitleprefix, " "+baseProduct);
  
 let title =  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.Group_PT_Products_Toparea.Group_PT_Products_Toparea_Title.txtInner.get_Text();
 let txtProductSubType =  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.Group_PT_Products_Toparea.Group_PT_Products_Toparea_ResourceType.txtInner.get_Text();
 let imprint = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.Group_PT_Products_Toparea.Group_PT_Products_Toparea_Organizations.LookupSearchCombo.get_Text();

  if(aqObject.CompareProperty(productCreated, cmpEqual, title, true,3))
  {
    Log.Checkpoint("Product Title displayed is Correct")
  }
  else{
  Log.Error("Product Title displayed is Incorrect");
  }

  if(aqObject.CompareProperty(txtProductSubType, cmpEqual, productSubType, true,3))
  {
    Log.Checkpoint("Product Sub Type displayed is Correct")
  }
  else{
  Log.Error("Product Sub Type displayed is Incorrect");
  }

  if(aqObject.CompareProperty(organization, cmpEqual, imprint, true,3))
  {
    Log.Checkpoint("Organization displayed is Correct")
  }
  else{
  Log.Error("Organization displayed is Incorrect");
  } 
});

Then("all the tabs like Editorial, Identifiers, Inventory, Feeds should be displayed", function (){
 Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Identifiers");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_Identifiers, "Visible", cmpEqual, true);
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Contributors");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_Contributors, "Visible", cmpEqual, true);
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Resources");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_Resources, "Visible", cmpEqual, true);
 
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Classifications");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_Classification, "Visible", cmpEqual, true);
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Fulfilment");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PT_Products_OTC_FulfilmentItems, "Visible", cmpEqual, true);
 
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Prices");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices, "Visible", cmpEqual, true);
 
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Relationships");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Relationships_Tab, "Visible", cmpEqual, true);
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Rights");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_RREditorial, "Visible", cmpEqual, true);
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Details");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main, "Visible", cmpEqual, true);  
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Editorial");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_Editorial, "Visible", cmpEqual, true);

  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Subscription");
  aqObject.CheckProperty(Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTProducts.OTC.Form").WinFormsObject("Products.OTC.Tabs").WinFormsObject("tabMain").WinFormsObject("Products.OTC.Subscriptions").WinFormsObject("Products.OTC.Subscriptions").WinFormsObject("tabMain"), "Visible", cmpEqual, true);  
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Feeds");
  aqObject.CheckProperty(Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTProducts.OTC.Form").WinFormsObject("Products.OTC.Tabs").WinFormsObject("tabMain").WinFormsObject("Products.OTC.Feeds").WinFormsObject("Products.OTC.FeedsTemplate").WinFormsObject("Products.OTC.FeedsTemplate.GroupBox1").WinFormsObject("MainGroupBox"), "Visible", cmpEqual, true);  
});

Then("I enter a Primary Identifier for Group", function (){
 clickIdentifierTab();
 clickNewGroupIdentifier();
 selectGroupIdentifierType();
 enterGroupIdentifierValue();
 clickOK();
 clickSave();
});

Then("all the tabs like Editorial, Identifiers, Details should be displayed", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Identifiers");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_Identifiers, "Visible", cmpEqual, true);
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Contributors");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_Contributors, "Visible", cmpEqual, true);

  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Classifications");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_Classification, "Visible", cmpEqual, true);
  
 // Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Fulfilment");
 // aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PT_Products_OTC_FulfilmentItems, "Visible", cmpEqual, true);
 
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Prices");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices, "Visible", cmpEqual, true);
 
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Relationships");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Relationships_Tab, "Visible", cmpEqual, true);
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Rights");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_RREditorial, "Visible", cmpEqual, true);
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Details");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main, "Visible", cmpEqual, true);  
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Editorial");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_Editorial, "Visible", cmpEqual, true);
});

When("I set a Primary Identifier for E-Book", function (){
  clickIdentifierTab();
  clickNewEbookIdentifier();
  selectEBookIdentifierType();
  enterEBookIdentifierValue();
  clickOK();
  clickSave();
});
function selectEBookIdentifierType(){
  let ddIdentifierType = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductIdentifiers_Form.PTProductIdentifiers_Tabs.tabMain.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_IdentifierTypeID.LookupSearchCombo;

  ddIdentifierType.Click();
  ddIdentifierType.ClickItem("ISBN 13");
  parIdentifierType = "ISBN 13";
  ddIdentifierType.Keys("[Tab]");  
}

function enterEBookIdentifierValue(){
 Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductIdentifiers_Form.PTProductIdentifiers_Tabs.tabMain.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_OrganizationCodeAllocationsID.LookupSearchCombo.ClickItem("ISBN 13 (Global)"); 
}

function clickNewEbookIdentifier()
{
  let C1FlexGrid = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.WinFormsObject("PTProducts.Identifiers").WinFormsObject("Products Identifiers").WinFormsObject("PTProductIdentifiers").WinFormsObject("AptifyControlBase_Fill_Panel").WinFormsObject("flexSubType");
  C1FlexGrid.ClickR();
  C1FlexGrid.PopupMenu.Click("New");
}

Then("I enter a Primary Identifier for E-Book", function (){
  clickIdentifierTab();
  clickNewEbookIdentifier();
  selectEBookIdentifierType();
  enterEBookIdentifierValue();
  clickOK();
  clickSave()
});

Then("I enter a Primary Identifier", function (){
 clickNewIdentifier();
 selectIdentiferType();
 enterValue();
 clickOK();
 invalidCheckPopUp();
 clickSave();
});

When("I set a Primary Identifier for Subscription", function (){
  clickNewIdentifier();
  selectESubIdentifierType();
  enterESubIdentifierValue();
  clickOK();
  clickSave();
});

Then("I enter a Primary Identifier for Subscription", function (){
  clickNewIdentifier();
  selectESubIdentifierType();
  enterESubIdentifierValue();
  clickOK();
  clickSave();
});

When("I enter Without prefix {arg}", function (param1){
  let txtWithoutPrefix = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_PT_Products_Toparea_TitleWithoutPrefix.txtInner;
  txtWithoutPrefix.Click();
  txtWithoutPrefix.Keys(param1);
  baseProduct = param1;
});

When("I create a Dimension", function (){
  selectDimension();
});

When("I create an Identifier", function (){
  selectIdentifer();
});

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

function enterTitlePrefix(){
  let txtTitlePrefix = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_PT_Products_Toparea_TitlePrefix.txtInner;
  txtTitlePrefix.Click();
  txtTitlePrefix.SetText("Test");
  titlePrefix = "Test";
}


function enterWithoutPrefix(){
  let txtWithoutPrefix = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_PT_Products_Toparea_TitleWithoutPrefix.txtInner;
  txtWithoutPrefix.Click();
  txtWithoutPrefix.Keys(products);
}



When("I enter Without prefix", function (){
  let anysize = 3;
  let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  productName="";
  for( let i=0; i < anysize; i++ ){
  productName += charset[Math.floor(Math.random() * charset.length)];
  }

  let txtWithoutPrefix = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_PT_Products_Toparea_TitleWithoutPrefix.txtInner;
  txtWithoutPrefix.Click();
  txtWithoutPrefix.Keys(productName);
  baseProduct = productName;
});

When("I enter Pubdate", function (){
  let txtPubDate = Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Products_SubtypesData_PublicationDate.txtInner;
  txtPubDate.Click();
  txtPubDate.Keys(aqDateTime.Today());
  txtPubDate.Keys("[Tab]");
});

When("I select Product Discount Type {arg}", function (productdiscountType){
 Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Product_ProductDiscountID.LookupSearchCombo.ClickItem(productdiscountType);
});

When("I select Fulfilment Product Type {arg}", function (fulfilmentproductType){
Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Product_FulfilmentProductTypeID.LookupSearchCombo.ClickItem(fulfilmentproductType);
});

//230 server code

var identifierValue
var identifierType
var relatedProduct; 
var relationType;


var productVersionDescription;
var productVersionCode;
var productTitle;
var productType;

var revenue1,revenue2,productTitle1,productTitle2,productType1,productType2


Then("Product record should be generated with same product sub type", function (){
  let txtSubType = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.Subs_OTCProducts_Toparea.Subs_OTCProducts_Toparea_ResourceType.txtInner.Text.OleValue;
  if(aqObject.CompareProperty(txtSubType, cmpEqual,stepDefinations_createproduct2.productSubType, true, 3))
  {
    Log.Checkpoint("product is created")
  }
  else{
  Log.Error("Product is not created");
  }
});



Then("Product record should be generated with same product sub-type and title", function (){
  let txtSubType =  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.Group_PT_Products_Toparea.Group_PT_Products_Toparea_ResourceType.txtInner.Text.OleValue;
  if(aqObject.CompareProperty(txtSubType, cmpEqual,stepDefinations_createproduct2.productSubType, true, 3))
  {
    Log.Checkpoint("product is created")
  }
  else{
  Log.Error("Product is not created");
  }
});




When("I add Prices to the product", function (){
  let ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain;
  ultraTabControl.ClickTab("Prices");
  let formTemplateLayout = ultraTabControl.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_ActivePrices.PTProducts_ActivePrices;
  let productActivePriceLayout = formTemplateLayout.PTProducts_ActivePrices_PT_Group_Box_1.PTProductPrices_ActivePrices;
  
  let ddCurrencyType = productActivePriceLayout.PTProductPrices_ActivePrices_CurrencyTypeID.LookupSearchCombo;
  ddCurrencyType.ClickItem("UK Sterling");
  ddCurrencyType.Keys("[Tab]");
  let txtPrice = productActivePriceLayout.PTProductPrices_ActivePrices_Price.txtInner;
  txtPrice.Keys("£1.00");
  productActivePriceLayout.PTProductPrices_ActivePrices_Active_Button_Add.Click();
});

When("I click on save record and close form button", function (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
  if(Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.Exists)
  {
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
  }
});

When("I click on New Bundle Version button", function (){
  let ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain;
  ultraTabControl.ClickTab(0);
  ultraTabControl.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_PTProducts_Bundling_Active_Button_NewBundleVersion.Click(56, 7);
});

When("I click on Version Type link from bundle version", function (){
  Aliases.Aptify_Shell.BundleVersionTypePopup.PTProduct_OTC_Bundling_VersionTypePopup.PTProduct_OTC_Bundling_VersionTypePopup_VersionTypeID.comboLinkLabel.linkVersionType.Click();
});

When("I enter code and description", function (){
    let code = "";
    let possible = "0123456789";
    {
    for(let i=0; i < 5; i++ )
    code += possible.charAt(Math.floor(Math.random() * possible.length));
     }
  let txtCode = Aliases.Aptify_Shell.FormTemplateForm.PT_PTLookupProductVersionTypes_Form.PT_PTLookupProductVersionTypes_Tabs.tabMain.PT_PTLookupProductVersionTypes_Tabs_General.PT_PTLookupProductVersionTypes_Tabs_General.PT_PTLookupProductVersionTypes_Code.txtInner;
  
  txtCode.Keys(code);
  txtCode.Keys("[Tab]");
  productVersionCode = code
  
  let anysize = 5;
  let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; 
  description="";
  for( var i=0; i < anysize; i++ ){
  description += charset[Math.floor(Math.random() * charset.length)];
  }
  let txtDescription = Aliases.Aptify_Shell.FormTemplateForm.PT_PTLookupProductVersionTypes_Form.PT_PTLookupProductVersionTypes_Tabs.tabMain.PT_PTLookupProductVersionTypes_Tabs_General.PT_PTLookupProductVersionTypes_Tabs_General.PT_PTLookupProductVersionTypes_Description.txtInner;
  txtDescription.Keys(description);
  productVersionDescription = description;
});

When("I check Is Bundle Version checkbox", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PT_PTLookupProductVersionTypes_Form.PT_PTLookupProductVersionTypes_Tabs.tabMain.PT_PTLookupProductVersionTypes_Tabs_General.PT_PTLookupProductVersionTypes_Tabs_General.PT_PTLookupProductVersionTypes_Tabs_General_IsBundleVersion.chkInternal.wState = cbChecked;
  Aliases.Aptify_Shell.FormTemplateForm.PT_PTLookupProductVersionTypes_Form.PT_PTLookupProductVersionTypes_Tabs.tabMain.PT_PTLookupProductVersionTypes_Tabs_General.PT_PTLookupProductVersionTypes_Tabs_General.PT_PTLookupProductVersionTypes_Tabs_General_IsBundleVersion.chkInternal.Keys("[Tab]");
});

When("I enter Earliest Order Date", function (){
  let txtEarliestOrderDate = Aliases.Aptify_Shell.FormTemplateForm.PT_PTLookupProductVersionTypes_Form.PT_PTLookupProductVersionTypes_Tabs.tabMain.PT_PTLookupProductVersionTypes_Tabs_General.PT_PTLookupProductVersionTypes_Tabs_General.PT_PTLookupProductVersionTypes_Tabs_General_EarliestOrderDate.txtInner;
  txtEarliestOrderDate.Keys(aqDateTime.Today());
});

Then("Code and Description should be display under version type dropdown", function (){
  
  Aliases.Aptify_Shell.BundleVersionTypePopup.PTProduct_OTC_Bundling_VersionTypePopup.PTProduct_OTC_Bundling_VersionTypePopup_VersionTypeID.LookupSearchCombo.ClickItem(productVersionDescription);
  var lnkVersionType = Aliases.Aptify_Shell.BundleVersionTypePopup.PTProduct_OTC_Bundling_VersionTypePopup.PTProduct_OTC_Bundling_VersionTypePopup_VersionTypeID.Text.OleValue;
  if(aqObject.CompareProperty(lnkVersionType, cmpEqual, productVersionDescription, true, 3))
  {
    Log.Checkpoint("Code and Description is display under version type dropdown")
  }
  else{
  Log.Error("Code and Description is not display under version type dropdown");
  
  }
});

Then("I click on Save button from bundle version", function (){
  Aliases.Aptify_Shell.BundleVersionTypePopup.PTProduct_OTC_Bundling_VersionTypePopup.PTProduct_OTC_Bundling_VersionTypePopup_Active_Button_Save.Click();
});

Then("Code and Description should be display under bundle version dropdown", function (){
  let ddBundleVersion = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_PTProducts_Bundling_ProductVersionID.dropDownMultiSelect.HostedTextBoxBase.Text.OleValue;
  if(aqObject.CompareProperty(ddBundleVersion, cmpEqual, productVersionDescription, true, 3))
  {
    Log.Checkpoint("code and Description is display under bundle version dropdown")
  }
  else{
  Log.Error("code and Description is not display under bundle version dropdown");
  }
});

When("I click on Binocular icon under bundles tab", function (){
  let ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain;
  ultraTabControl.pagetabBundles.Click();
  ultraTabControl.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel2.treeCommandBar.diagramSearchcommandbarbutton.Click(9, 15);
});

When("I enter product name in search bar", function (){
  radPanel = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.Products_Search.Products_Search_PTSearchParams.searchControl.splitContainer1.SplitterPanel.searchParameters.radPanelParams;
  let textBox = radPanel.quickSearch.quickSearchText;
  textBox.SetText(productTitle);
  radPanel.switchPanel.searchButton.ClickButton();
});

When("I enter Quantity in components attributes section {arg}", function (quantity){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.Bundles_ProductParts_Form.Bundles_ProductParts_Tabs.tabMain.Bundles_ProductParts_Form_Component_Tab.PT_ProductParts_Item.PT_ProductParts_Quantity.txtInner.Keys(quantity)
});

When("I enter % of revenue in components attributes section {arg}", function (revenue){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.Bundles_ProductParts_Form.Bundles_ProductParts_Tabs.tabMain.Bundles_ProductParts_Form_Component_Tab.PT_ProductParts_Item.PT_ProductParts_PctOfRev.txtInner.Keys(revenue)
  revenue1 = revenue;
});

When("I click on Recalculate button from main product", function (){
  let aptify_Shell = Aliases.Aptify_Shell;
  aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PT_ProductParts_Overview.PT_ProductParts_Summary_Recalculate.Click(47, 7);
  aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
});

When("I select product from left side tree view", function (){
  let mainProduct = productTitleprefix + " " + baseProduct
  let product = productTitle + " " + "-" +" " + productType;
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel2.panel4Tree.radTreeView.ClickItem("|"+ mainProduct + "|" +product);
  
});

When("I click on main product from left side tree view", function (){
  let mainProduct = productTitleprefix + " " + baseProduct
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel2.panel4Tree.radTreeView.ClickItem(mainProduct);
});


When("I retrieve title and subtype of the product", function (){
  let txtTitle = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_Title.txtInner.Text.OleValue;
  productTitle = txtTitle;
  let txtSubType = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_ResourceType.txtInner.Text.OleValue;
  productType = txtSubType;
});

//second scenario

When("I retrieve title and subtype of the first product", function (){
  let txtTitle = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_Title.txtInner.Text.OleValue;
  productTitle1 = txtTitle;
  let txtSubType = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_ResourceType.txtInner.Text.OleValue;
  productType1 = txtSubType;
});

When("I retrieve title and subtype of the second product", function (){
  let txtTitle = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_Title.txtInner.Text.OleValue;
  productTitle2 = txtTitle;
  let txtSubType = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General.PT_Products_Toparea_ResourceType.txtInner.Text.OleValue;
  productType2 = txtSubType;
});

When("I enter second product name in search bar", function (){

   radPanel = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.Products_Search.Products_Search_PTSearchParams.searchControl.splitContainer1.SplitterPanel.searchParameters.radPanelParams;
  let textBox = radPanel.quickSearch.quickSearchText;
  textBox.Keys("^a [Clear]");
  textBox.SetText(productTitle2);
  radPanel.switchPanel.searchButton.ClickButton();
});

When("I select first product from left side tree view", function (){
  let mainProduct = productTitleprefix + " " + baseProduct
  let product = productTitle1 + " " + "-" +" " + productType1;
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel2.panel4Tree.radTreeView.ClickItem("|"+ mainProduct + "|" +product);
  
});

When("I select second product from left side tree view", function (){
  let mainProduct = productTitleprefix + " " + baseProduct
  let product = productTitle2 + " " + "-" +" " + productType2;
  
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel2.panel4Tree.radTreeView.ClickItem("|"+ mainProduct + "|" +product);
});

When("I enter Quantity in components attributes section for other product {arg}", function (quantity){
  let txtQuantity = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.Bundles_ProductParts_Form.Bundles_ProductParts_Tabs.tabMain.Bundles_ProductParts_Form_Component_Tab.PT_ProductParts_Item.PT_ProductParts_Quantity.txtInner;
  
  txtQuantity.Keys(quantity);
  txtQuantity.Keys("[Tab]");
});

When("I enter % of revenue in components attributes section for other product {arg}", function (revenue){
  let txtRevenue = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.Bundles_ProductParts_Form.Bundles_ProductParts_Tabs.tabMain.Bundles_ProductParts_Form_Component_Tab.PT_ProductParts_Item.PT_ProductParts_PctOfRev.txtInner
  
  txtRevenue.Keys(revenue);
  revenue2 = revenue;
  txtRevenue.Keys("[Tab]");
});

When("I check the checkbox Fix Revenue Percent", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.Bundles_ProductParts_Form.Bundles_ProductParts_Tabs.tabMain.Bundles_ProductParts_Form_Component_Tab.PT_ProductParts_Item.PT_productParts_FixRevenuePct.chkInternal.wState = cbChecked;
});

Then("Under Bundle Contents section total of % Of Revenue column should be {arg}", function (param1){
  
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PT_ProductParts_Overview.PT_ProductParts_Overview_Telerik_List_View_BundleOverviewParts.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1
  let clmRevenueFirstProduct = radGridView.wValue(0, "% of Revenue").OleValue;
  let clmRevenueSecondProduct = radGridView.wValue(1, "% of Revenue").OleValue;
  let totalRevenue = clmRevenueFirstProduct + clmRevenueSecondProduct;
  if(aqObject.CompareProperty("100", cmpEqual,totalRevenue, true, 3))
  {
    Log.Checkpoint("Under Bundle Contents section total of % Of Revenue column is 100")
  }
  else{
  Log.Error("Under Bundle Contents section total of % Of Revenue column is not 100");
  }
});

Then("% of Revenue Column value should be same for product with checked Fix Revenue Percent checkbox", function (){
  
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PT_ProductParts_Overview.PT_ProductParts_Overview_Telerik_List_View_BundleOverviewParts.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1
  let clmRevenue = radGridView.wValue(1, "% of Revenue").OleValue;
  Log.Message(clmRevenue)
  let clmFix = radGridView.wValue(1,"Fix").OleValue;
  Log.Message(clmFix)
  if (aqObject.CompareProperty(clmRevenue, cmpEqual , revenue2))
  {
    Log.Checkpoint("% of Revenue Column value is same for product with checked Fix Revenue Percent checkbox")
  }
  else{
  Log.Error("% of Revenue Column value is not same for product with checked Fix Revenue Percent checkbox");
  
  }
  
  
});

Then("For first product % Of Revenue Column should be change", function (){
  
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PT_ProductParts_Overview.PT_ProductParts_Overview_Telerik_List_View_BundleOverviewParts.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1
  let clmRevenue = radGridView.wValue(0, "% of Revenue").OleValue;
  let clmFix = radGridView.wValue(0,"Fix").OleValue;
  if(aqObject.CompareProperty(clmFix, cmpNOtEqual , "true") && (aqObject.CompareProperty(clmRevenue, cmpNotEqual , revenue1)))
  {
    Log.Checkpoint("% of Revenue Column value is not same for product with un-checked Fix Revenue Percent checkbox")
  }
  else{
  Log.Error("% of Revenue Column value is same for product with un-checked Fix Revenue Percent checkbox");
  }
});

When("I enter first product name in search bar", function (){
  radPanel = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.Products_Search.Products_Search_PTSearchParams.searchControl.splitContainer1.SplitterPanel.searchParameters.radPanelParams;
  let textBox = radPanel.quickSearch.quickSearchText;
  textBox.SetText(productTitle1);
  radPanel.switchPanel.searchButton.ClickButton();
});


//third scenario

When("I select Split Equally option from Recalculate Revenue % based On section", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PT_ProductParts_Overview.PT_ProductParts_Summary_RecalculateOptions.Split_Equally.ClickButton();
});

Then("% of Revenue Column value for both the products should be {arg}", function (param1){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PT_ProductParts_Overview.PT_ProductParts_Overview_Telerik_List_View_BundleOverviewParts.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1
  let clmRevenueSecondProduct = radGridView.wValue(1, "% of Revenue").OleValue;
  let clmRevenueFirstProduct = radGridView.wValue(0, "% of Revenue").OleValue;
  
  if( (aqObject.CompareProperty(clmRevenueSecondProduct, cmpEqual , "50")) && (aqObject.CompareProperty(clmRevenueFirstProduct, cmpEqual , "50")))
  {
    Log.Checkpoint("% of Revenue Column value is same for both products")
  }
  else{
  Log.Error("% of Revenue Column value is not same for both products");
  
  }
  
});




Then("Product should be created with all the submitted information", function (){
  let productLayout = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form;
  let productTopAreaGeneralLayout = productLayout.PT_Products_Top.panelTopArea.Group_PT_Products_Toparea;
  let txtOrganization = productTopAreaGeneralLayout.Group_PT_Products_Toparea_Organizations.LookupSearchCombo.Text.OleValue;
  if(aqObject.CompareProperty(txtOrganization, cmpEqual , organization)) 
  {
    Log.Checkpoint("organization is correctly display")
  }
  else
  {
  Log.Error("organization is not correctly display");
  }
  
  let txtSubType = productTopAreaGeneralLayout.Group_PT_Products_Toparea_ResourceType.txtInner.Text.OleValue;
  if(aqObject.CompareProperty(txtSubType, cmpEqual , productSubType)) 
  {
    Log.Checkpoint("product subtype is correctly display")
  }
  else
  {
  Log.Error("product subtype is not correctly display");
  }
  
  let txtTitle = productTopAreaGeneralLayout.Group_PT_Products_Toparea_Title.txtInner.Text.OleValue;
  let productName = productTitleprefix + " " + baseProduct
  if(aqObject.CompareProperty(txtTitle, cmpEqual , productName)) 
  {
    Log.Checkpoint("product title is correctly display")
  }
  else
  {
  Log.Error("product title is not correctly display");
  }
});

Then("all the tabs like Bundles,Classifications,Relationships should be display", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Relationships_Tab, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_Classification, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_Identifiers, "Exists", cmpEqual, true);
  //aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_Fulfilment_Tab, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_Editorial, "Exists", cmpEqual, true);
  
});

//subtypes



When("I select Bundle Type {arg}", function (bundleType){
  let productBundlingProfileOTCLayout = Aliases.Aptify_Shell.PTProductWizard.WizPanels_403.PTProducts_OTC_BundlingProfile1;
  productBundlingProfileOTCLayout.PT_PTProducts_BundlingProfile1_BundleTypeID.LookupSearchCombo.ClickItem(bundleType);
  
});

When("I select Default Order Billing Plan {arg}", function (billingPlan){
  let productBundlingProfileOTCLayout = Aliases.Aptify_Shell.PTProductWizard.WizPanels_403.PTProducts_OTC_BundlingProfile1;
  productBundlingProfileOTCLayout.PT_PTProducts_BundlingProfile1_DefaultOrderBillingPlanID.LookupSearchCombo.ClickItem(billingPlan);
});

When("I select Default Order Cancellation Rule {arg}", function (cancellationRule){
  let productBundlingProfileOTCLayout = Aliases.Aptify_Shell.PTProductWizard.WizPanels_403.PTProducts_OTC_BundlingProfile1;
  productBundlingProfileOTCLayout.PT_PTProducts_BundlingProfile1_DefaultOrderCancellationRuleID.LookupSearchCombo.ClickItem(cancellationRule);
});

When("I select Order Refund Rules {arg}", function (refundRules){
  Aliases.Aptify_Shell.PTProductWizard.WizPanels_403.PTProducts_OTC_BundlingProfile1.PTProducts_OTC_BundlingProfile1_DefaultOrderRefundRuleID.LookupSearchCombo.ClickItem(refundRules);
});

//When("I select Default License {arg}", function (license){
  //var productBundlingProfileOTCLayout = Aliases.Aptify_Shell.PTProductWizard.WizPanels_403.PTProducts_OTC_BundlingProfile1;
  //productBundlingProfileOTCLayout.PT_PTProducts_BundlingProfile1_DefaultLicenseID.LookupSearchCombo.ClickItem(license);
//});


Then("Product Relationships Wizard should be displayed", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.titlebar, "Value", cmpEqual, "Product Relationships");
});

Then("Product,Primary Identifier,Type and Publisher fields should not be empty", function (){
  let lnkProduct = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_291.PTProductRelationshipsStaging_WizardPage1.PTProductRelationshipsStaging_WizardPage1_ProductID.lblLink.Text.OleValue;
  if(aqObject.CompareProperty(lnkProduct, cmpNotEqual ,emptyVariant, true,3))
  {
    Log.Checkpoint("product is display")
  }
  else{
    Log.Error("product is blank");
  }
  
  let txtType = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_291.PTProductRelationshipsStaging_WizardPage1.PTProductRelationshipsStaging_WizardPage1_ProductSubType.Text.OleValue;
  if(aqObject.CompareProperty(txtType, cmpNotEqual ,emptyVariant, true,3))
  {
    Log.Checkpoint("type is display")
  }
  else{
    Log.Error("type is blank");
  }
  let txtPublisher = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_291.PTProductRelationshipsStaging_WizardPage1.PTProductRelationshipsStaging_WizardPage1_Organization.lblInner.Text.OleValue;
  if(aqObject.CompareProperty(txtPublisher, cmpNotEqual ,emptyVariant, true,3))
  {
    Log.Checkpoint("publisher is display")
  }
  else{
    Log.Error("publisher is blank");
  }
  
});

Then("Product information panel should be opened and all the submitted information should be displayed", function (){
  var txtSubType = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.Group_PT_Products_Toparea.Group_PT_Products_Toparea_ResourceType.txtInner.Text.OleValue;
  if(aqObject.CompareProperty(txtSubType, cmpEqual,productSubType, true, 3))
  {
    Log.Checkpoint("product is created with same sub type")
  }
  else{
  Log.Error("Product is not created with same sub type");
  }
});



When("I click on radio button Open Product Relationships Wizard", function (){
  Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_ProductTitle_OpenOnCompletionOptions.Open_Product_Relationships_Wizard_FormItems_DisplayName_OpenProdRelationsWizard_R.ClickButton();
});


Then("Product Relationships Wizard should open automatically with Product , Primary Identifier, Type, and Publisher fields auto-filled", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm, "wText", cmpEqual, "Product Relationships");
  
  let lnkProduct = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_291.PTProductRelationshipsStaging_WizardPage1.PTProductRelationshipsStaging_WizardPage1_ProductID.lblLink.Text.OleValue;
  if(aqObject.CompareProperty(lnkProduct, cmpNotEqual ,emptyVariant, true,3))
  {
    Log.Checkpoint("product is display")
  }
  else{
    Log.Error("product is not blank");
  }
  
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_291.PTProductRelationshipsStaging_WizardPage1.PTProductRelationshipsStaging_WizardPage1_PrimaryIdentifier.lblInner, "WndCaption", cmpEqual, "Primary Identifier");
  
  let txtType = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_291.PTProductRelationshipsStaging_WizardPage1.PTProductRelationshipsStaging_WizardPage1_ProductSubType.Text.OleValue;
  if(aqObject.CompareProperty(txtType, cmpNotEqual ,emptyVariant, true,3))
  {
    Log.Checkpoint("type is display")
  }
  else{
    Log.Error("type is not blank");
  }
  let txtPublisher = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_291.PTProductRelationshipsStaging_WizardPage1.PTProductRelationshipsStaging_WizardPage1_Organization.lblInner.Text.OleValue;
  if(aqObject.CompareProperty(txtPublisher, cmpNotEqual ,emptyVariant, true,3))
  {
    Log.Checkpoint("publisher is display")
  }
  else{
    Log.Error("publisher is not blank");
  }
  
});

Then("I select related product {arg}", function (parRelatedProduct){
  let ultraTextEditor = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_291.PTProductRelationshipsStaging_WizardPage1.PTProductRelationshipsStaging_WizardPage1_RelatedProductsID.txtLink;
  ultraTextEditor.SetText(parRelatedProduct);
  relatedProduct = parRelatedProduct
  ultraTextEditor.Keys("[Tab]");
});

Then("I select and enter Relation type {arg}", function (parRelationType){
  let productRelationshipsWizardPage1 = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_291.PTProductRelationshipsStaging_WizardPage1;
  let ultraCombo = productRelationshipsWizardPage1.PTProductRelationshipsStaging_WizardPage1_RelationshipTypeID.LookupSearchCombo;
  ultraCombo.Keys(parRelationType);
  relationType = parRelationType
  ultraCombo.Keys("[Tab]");
});

Then("Start date should be auto filled", function (){
  let startDate = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_291.PTProductRelationshipsStaging_WizardPage1.PTProductRelationshipsStaging_WizardPage1_StartDate.txtInner.Text.OleValue;
  if(aqObject.CompareProperty(startDate, cmpNotEqual ,emptyVariant, true,3))
  {
    Log.Checkpoint("start date is display")
  }
  else{
    Log.Error("start date is blank field");
  }
});

Then("I enter valid end date", function (){
  let ultraTextEditor = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_291.PTProductRelationshipsStaging_WizardPage1.PTProductRelationshipsStaging_WizardPage1_EndDate.txtInner;
  ultraTextEditor.SetText(aqDateTime.AddDays(aqDateTime.Today(),3));
});

Then("I select radio button Parent", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_291.PTProductRelationshipsStaging_WizardPage1.PTProductRelationshipsStaging_WizardPage1_ParentChildOptions.Parent_GroupedOptions_ProductRelationships_Parent_P.ClickButton();
});

Then("I click on Create button", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_291.PTProductRelationshipsStaging_WizardPage1.PTProductRelationshipsStaging_WizardPage1_CreateProductButton.Click(30, 9);
});

Then("Product record should be displayed on the top frame under Parents", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_291.PTProductRelationshipsStaging_WizardPage1.PTProductRelationshipsStaging_WizardPage1_ParentsView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.captionPanel, "Caption", cmpEqual, "Parents");
  
  let clmTitle = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_291.PTProductRelationshipsStaging_WizardPage1.PTProductRelationshipsStaging_WizardPage1_ParentsView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, "Title").OleValue;
  if(aqObject.CompareProperty(clmTitle, cmpEqual ,relatedProduct, true,3))
  {
    Log.Checkpoint("Product record should be displayed on the top frame under Parents")
  }
  else{
    Log.Error("Product record should not be displayed on the top frame under Parents");

  }
});

//Then("I click on Relationships tab", function (){
  //Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Relationships");
//});

Then("I click on Relationships tree tab", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Relationships_Tab.Products_Relationships_Tab.tabMain.pagetabRelationshipsTree.Click();
});

Then("I click on finish button", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
});

Then("I select radio button Children", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_291.PTProductRelationshipsStaging_WizardPage1.PTProductRelationshipsStaging_WizardPage1_ParentChildOptions.Children_GroupedOptions_ProductRelationships_Children_C.ClickButton();
});

Then("Product record should be displayed on the bottom frame under Children", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_291.PTProductRelationshipsStaging_WizardPage1.PTProductRelationshipsStaging_WizardPage1_ChildrenView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.captionPanel, "Caption", cmpEqual, "Children");
  let clmTitle = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_291.PTProductRelationshipsStaging_WizardPage1.PTProductRelationshipsStaging_WizardPage1_ChildrenView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, "Title").OleValue;
  
  if(aqObject.CompareProperty(clmTitle, cmpEqual ,relatedProduct, true,3))
  {
    Log.Checkpoint("Product record should be displayed on the bottom frame under Children")
  }
  else{
    Log.Error("Product record should not be displayed on the bottom frame under Children");
  }

});

Then("I click on Relationships direct tab", function (){
  var ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain;
  ultraTabControl.Products_Relationships_Tab.Products_Relationships_Tab.tabMain.ClickTab("Relationships (Direct)");
});

Then("Product information panel should be opened and Relationships\\(direct) tab should display the product used in related product field", function (){
  let tabRelationshipDirect = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Relationships_Tab.Products_Relationships_Tab.tabMain.Products_DirectRelationships_Tab.Products_DirectRelationships_Tab.PTProducts_Group_Relatedproducts.AptifyControlBase_Fill_Panel.flexSubType
  let clmRelatedProduct = tabRelationshipDirect.get_Item(1, 2).OleValue;
  if(aqObject.CompareProperty(clmRelatedProduct, cmpEqual ,relatedProduct, true,3))
  {
    Log.Checkpoint("Related product selected is displayed under Relationships(Direct)")
  }
  else{
    Log.Error("Related product selected is not displayed under Relationships(Direct)");
  }

});

Then("I click on Identifiers tab from Product Information panel", function (){
  ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain;
  ultraTabControl.pagetabIdentifiers.Click();
  ultraTabControl.PTProducts_Identifiers.Products_Identifiers.PTProductIdentifiers.zAptifyControlBase_Toolbars_Dock_Area_Top.toolbar.buttonNew.ClickButton();
});

Then("I select Identifier Type {arg}", function (type){
  var productIdentifiersLayout = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductIdentifiers_Form.PTProductIdentifiers_Tabs.tabMain.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_Tabs_General;
  productIdentifiersLayout.PTProductIdentifiers_IdentifierTypeID.LookupSearchCombo.ClickItem(type);
  identifierType = type
});

Then("I select Value and click Ok button", function (){
  let subTypeTemplateForm = Aliases.Aptify_Shell.SubTypeTemplateForm;
  let ultraTabControl = subTypeTemplateForm.PTProductIdentifiers_Form.PTProductIdentifiers_Tabs.tabMain;
 
  let maskedEdit = ultraTabControl.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_Tabs_General.ProductIdentifiers_MaskValue;
  let maskedTextBox = maskedEdit.maskedTextBox1;
  
   let value = "";
    let possible = "0123456789";
    {
    for(let i=0; i < 10; i++ )
    value += possible.charAt(Math.floor(Math.random() * possible.length));
     }
  
  maskedTextBox.Keys(value);
  identifierValue = value;
  
  subTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
});

Then("I open the related product", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.ClickButton();
  let splitContainer = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1;
  let textBox = splitContainer.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  textBox.SetText(relatedProduct);
  textBox.Keys("[Enter]");
  let radGridView = splitContainer.SplitterPanel2_new.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(radGridView.Exists)
  {
    radGridView.ClickCell(0,"Title");
  }
});

Then("Relationships\\(Tree) tab should display the product PPN number", function (){
  //var productName =  productTitleprefix + " " + baseProduct;
  let identifierValueProduct = "(" + identifierType + " " + ":" + " " + identifierValue + ")"
  let treeViewExtension = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Relationships_Tab.Products_Relationships_Tab.tabMain.Products_AllRelationships.Products.Products_Relationships_ProductRelationsTree.splitContainer1.SplitterPanel.TreeViewControl
  treeViewExtension.ClickItem("|"+relatedProduct+"|"+relationType+"|"+identifierValueProduct);
  let tree = treeViewExtension.wSelection; 
  let value = tree.split("|");
  //var value = tree.Item[2].Text;
  
  if(aqObject.CompareProperty(identifierValueProduct, cmpEqual, value[3], true, 3))
  {
    Log.Checkpoint("Related product selected is displayed under Relationships(Tree)")
  }
  else{
  Log.Error("Related product selected is not displayed under Relationships(Tree)");
  }
});

Then("product should be created with all the submitted infromation", function (){
  let productTopAreaGeneralLayout = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.PT_Products_Top.panelTopArea.PT_Products_Toparea_General;
  let txtSubType = productTopAreaGeneralLayout.PT_Products_Toparea_ResourceType.txtInner.Text.OleValue;
  let txtTitle = productTopAreaGeneralLayout.PT_Products_Toparea_Title.txtInner.Text.OleValue
  let productName = productTitleprefix + " " + baseProduct
  let ddOrganization = productTopAreaGeneralLayout.PT_Products_Toparea_Organizations.LookupSearchCombo.Text.OleValue;
  
  if(aqObject.CompareProperty(txtSubType, cmpEqual, productSubType, true, 3))
  {
    Log.Checkpoint("Product subtype is display")
  }
  else{
  Log.Error("Product subtype is not display");
  }
  
  if(aqObject.CompareProperty(txtTitle, cmpEqual, productName, true, 3))
  {
    Log.Checkpoint("product title is display")
  }
  else{
  Log.Error("product title is not display");
  }
  
  if(aqObject.CompareProperty(ddOrganization, cmpEqual, organization, true, 3))
  {
    Log.Checkpoint("product organization is display")
  }
  else{
  Log.Error("product organization is not display");
  }
});

Then("all the tabs like Identifiers,Inventory,Relationships should be display", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Relationships_Tab, "Exists", cmpEqual, true);
  
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_Classification, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_Identifiers, "Exists", cmpEqual, true);
  //aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_Fulfilment_Tab, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_Editorial, "Exists", cmpEqual, true);
  
});

Then("I enter Value and click Ok button", function (){
  let subTypeTemplateForm = Aliases.Aptify_Shell.SubTypeTemplateForm;
  let ultraTabControl = subTypeTemplateForm.PTProductIdentifiers_Form.PTProductIdentifiers_Tabs.tabMain;
  
  let maskedEdit = ultraTabControl.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_Tabs_General.ProductIdentifiers_MaskValue;
  let maskedTextBox = maskedEdit.maskedTextBox1;
  
  let value = "";
    var possible = "0123456789";
    {
    for(var i=0; i < 13; i++ )
    value += possible.charAt(Math.floor(Math.random() * possible.length));
     }
  
  maskedTextBox.Keys(value);
  maskedTextBox.Keys("[Tab]");
  identifierValue = value;
  subTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
  if( Aliases.Aptify_Shell.MessageBox.Exists)
  {
    Aliases.Aptify_Shell.MessageBox.UltraGroupBox1.cmdOK.ClickButton();
  }
});

Then("Product information panel should be opened and Relationships tab should display the product used in related product field", function (){
  //let mainProduct = productTitleprefix + " " + baseProduct
  let treeViewExtension = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Relationships_Tab.Products_Relationships_Tab.tabMain.Products_AllRelationships.Products.Products_Relationships_ProductRelationsTree.splitContainer1.SplitterPanel.TreeViewControl;
  //treeViewExtension.ClickItem("|"+ mainProduct +"|"+relationType+"|"+relatedProduct);
  treeViewExtension.Keys("[Right]");
 treeViewExtension.Keys("[Right]");
 treeViewExtension.Keys("[Right]");
 treeViewExtension.Keys("[Right]");
  let tree = treeViewExtension.wSelection; 
  let value = tree.split("|");
  
  let string1 = value[3].split("(");
  
  if(aqObject.CompareProperty(relatedProduct, cmpEqual, string1[0], true, 3))
  {
    Log.Checkpoint("Related product selected is displayed under Relationships(Tree)")
  }
  else{
  Log.Error("Related product selected is not displayed under Relationships(Tree)");
  }
});


When("I click on plus sign to add that product under main product", function (){
  let splitterPanel = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.OTC_PTProducts_Bundles.OTC_PTProducts_Bundles.OTC_PTProducts_Bundling.OTC_Products_Tabs_BundleControl.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.Products_Search.Products_Search_PTSearchParams.searchControl.splitContainer1.SplitterPanel;
  splitterPanel.searchParameters.radPanelParams.quickSearch.addSelected.ClickButton();
});
