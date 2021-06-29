var OrderBasket = require("OrderBasket");
var refDeliveryReceipts
var parAvailableQty 
var frozenQty
var locationTo
var totalQty
var actionQuantitiesPacket
var deliveryDate
var deliverytime
var balance
var availableInventory
var parExpectedQty
var parExpPacketSize
var supplierReference
var parProduct 
var parSupplier 
var descriptionMessage
var product;
var productId 
var versionDescription
var ddOutputFormat
var txtcopyrightYear 
var parpubDate 
var parcopyrightYear 
var orderRef ;

var packets;
var x;
var size;
var productName;
var toLocation;
var fromLocation;
var qtyLoose;
var site;
var randomSize;
var availableQty;
var renewalDiscount;
var discount;
var discountName;
var discountId;
var availableQuantity;
var arrayProducts = [];

When("I click on New button from Inventory", function clickNewBtnInventory (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(10, 19);
});  

When("I select site {arg}", function selectSiteInventory (site){
  Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_SiteID.LookupSearchCombo.ClickItem(site);
});

When("I select version {arg}", function selectVersionInventory (version){
   let ddVersion = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_VersionLinkDescription.LookupSearchCombo;
   ddVersion.ClickItem(version);
});

When("I select Supply Status {arg}", function selectSupplyStatusInventory (supplyStatus){
  let ddSupplyStatus = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_SiteStatusID.LookupSearchCombo;
  ddSupplyStatus.ClickItem(supplyStatus);
  ddSupplyStatus.Keys("[Tab]");
});

When("I enter Current Packet Size {arg}", function enterCurrentPacketSize (currentpacketSize){
  let txtCurrentPacketSize = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_CurrentPacketSize.txtInner;
  txtCurrentPacketSize.SetText(currentpacketSize);
  txtCurrentPacketSize.Keys("[Tab]");
});

When("I enter Low Inventory Qty {arg}", function enterLowInventoryQty (lowInventoryQty){
  let txtLowInventoryQty = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_LowInventoryQty.txtInner;
  txtLowInventoryQty.SetText(lowInventoryQty);
});

When("I select Default Picking Location {arg}", function selectDefaultPickingLocation (defaultPickingLocation){
  let ddDefaultPickingLocation = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_DefaultPickingLocationID.txtLink;
  ddDefaultPickingLocation.Click();
  ddDefaultPickingLocation.SetText(defaultPickingLocation);
  ddDefaultPickingLocation.Keys("[Tab]");
});

When("I enter Min Pick Location Qty {arg}", function enterMinPickLocQty (minPicLocationQty){
  let txtMinPickLoationQty = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_PickingLocationMinimumQty.txtInner;
  txtMinPickLoationQty.SetText(minPicLocationQty);
  txtMinPickLoationQty.Keys("[Tab]");
});

When("I enter Location Maximum Qty {arg}", function enterLocationMaxQty (locationMaximumQty){
  let txtLocationMaximumQty = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_PickingLocationMaximumQty.txtInner.EmbeddableTextBoxWithUIPermissions;
  txtLocationMaximumQty.SetText(locationMaximumQty);
  txtLocationMaximumQty.Keys("[Tab]");
});

When("I enter Location Replenishment Qty {arg}", function enterLocReplenishmentQty (locationReplenishmentQty){
  let txtLocationReplenishmentQty = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_PickingLocationReplenishmentQty.txtInner.EmbeddableTextBoxWithUIPermissions;
  txtLocationReplenishmentQty.SetText(locationReplenishmentQty);
  txtLocationReplenishmentQty.Keys("[Tab]");
});


When("I checked the checkbox POD Enabled", function checkPODCheckbox(){
  Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_IsPODEnabled.chkInternal.wState = cbChecked;
});

When("I select POD Site {arg}", function selectPODSite (podSite){
  Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_PODSiteID.LookupSearchCombo.ClickItem(podSite);
});



When("I enter Out Of Stock Date {arg}", function enterOutOfStockDate (outOfStockDate){
  let txtOutOFStockDate = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_OutOfStockDate.txtInner;
  txtOutOFStockDate.SetText(outOfStockDate);
});

When("I enter Expected Availability {arg}", function enterExpectedAvailability (expectedAvailability){
  let txtExpectedAvailability = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_ExpectedAvailabilityDate.txtInner
  txtExpectedAvailability.SetText(expectedAvailability);
  txtExpectedAvailability.Keys("[Tab]");
});

When("I enter Date Stock Replenished {arg}", function enterDateStockReplenished (dateStockReplenished){
  let txtDateStockReplenished = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_DateStockReplenished.txtInner;
  txtDateStockReplenished.SetText(dateStockReplenished);
  txtDateStockReplenished.Keys("[Tab]");
});

When("I enter Date Stock Available {arg}", function enterDateStockAvailable (dateStockAvailable){
  let txtDateStockAvailable = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_DateStockAvailable.txtInner;
  txtDateStockAvailable.SetText(dateStockAvailable);
  txtDateStockAvailable.Keys("[Tab]");
  
});

When("I enter Date Stock Unavailable {arg}", function enterDateStockUnavailable (dateStockUnavailable){
  let txtDateStockUnavailable  = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_DateStockUnavailable.txtInner;
  txtDateStockUnavailable.SetText(dateStockUnavailable);
  txtDateStockUnavailable.Keys("[Tab]")
});

When("I enter No Stock Alert Date {arg}", function enterNoStockAlertDate (noStockAlertDate){
  let txtNoStockAlertDate = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_NoStockAlertDate.txtInner;
  txtNoStockAlertDate.SetText(noStockAlertDate);
  txtNoStockAlertDate.Keys("[Tab]");
});

When("I enter Low Stock Alert Date {arg}", function enterLowStockAlertDate (lowStockAlertDate){
  let txtLowStockAlertDate = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_LowStockDate.txtInner;
  txtLowStockAlertDate.SetText(lowStockAlertDate);
});

When("I click on Save record and close form button in New Inventory Site Record window Toolbar", function clickSaveAndCloseInventory (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
});

Then("New Inventory site should be created with {arg} as site and {arg} as SupplyStatus", function checkpointNewInventoryCreated (parSite, parSupplyStatus){
  
  let RowCountInventorySite = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wRowCount;
  let clmSite = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(RowCountInventorySite-1,0).OleValue;
  if(aqObject.CompareProperty(parSite, cmpEqual, clmSite, true, 3))
  {
    Log.Checkpoint("New Inventory has been created with Site")
  }
  else{
  Log.Error("Site is different");
  }
  
  let clmSupplyStatus = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(RowCountInventorySite-1,4).OleValue;
  if(aqObject.CompareProperty(parSupplyStatus, cmpEqual, clmSupplyStatus, true, 3))
  {
    Log.Checkpoint("New Inventory has been created with Supply Status")
  }
  else{
  Log.Error("Supply Status is different");
  }
});



When("I enter Product name in search window {arg}", function enterProductNameInSearchWindow (productInventory){
  let splitContainer = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1;
  let textBox = splitContainer.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  textBox.Click();
  textBox.SetText(productInventory);
  productName = productInventory;
  splitContainer.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  let radGridViewInventoryProductSearch = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  if(radGridViewInventoryProductSearch.Exists)
  {
    radGridViewInventoryProductSearch.DblClickCell(0, "Title");
  }
});

When("I enter In Stock Date {arg}", function enterInStockDate (inStockDate){
  let txtInStockDate = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySites_Form.PTInventorySites_Tabs.tabMain.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General.PTInventorySites_Tabs_General_InStockDate.txtInner
  txtInStockDate.SetText(inStockDate);
  txtInStockDate.Keys("[Tab]");
});


//DeliveryReceipts
When("I click on Suppliers Orders tab", function clickSuppliersOrdersTab (){
  let tabSupplierOrder = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain;
  tabSupplierOrder.ClickTab("Supplier Orders");
});

Then("Recent transaction with Today\'s Date should be displayed under Receipts tab", function checkpointRecentTransactionDisplay (){
  let clmOrderDate = Aliases.Aptify_Shell.FormTemplateForm.PTInventoryDeliveries_Form.PTInventoryDeliveries_Tabs.tabMain.PTInventoryDeliveries_Tabs_Receipts.PTInventoryDeliveries_Tabs_Receipts.PTInventoryDeliveries_Tabs_Receipts_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, "Date").OleValue;
  if(aqObject.CompareProperty(clmOrderDate, cmpEqual, aqDateTime.Today(), true, 3))
  {
    Log.Checkpoint("Recent transaction should be displayed")
  }
  else{
  Log.Error("Recent transaction is not display under Receipts tab");
  
  }
  
});


Then("I click on Close Form button", function clickCloseFormButton (){
  let btnCloseForm = Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top;
  btnCloseForm.ClickItem("Data Form|Close this Form");
  btnCloseForm.ClickItem("Data Form|Close this Form");
});





When("I search for the product from customer services dashboard {arg}", function searchProductCS (Product){
  let ProductSearchingWizard = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1;
  let textBox = ProductSearchingWizard.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  textBox.Click();
  textBox.SetText(Product);
  textBox.Text.OleValue;
  
  let btnSearch = ProductSearchingWizard.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton
  btnSearch.ClickButton();
  
  if(Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.Exists)
  {
    Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, "Title");
    Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.DblClickCell(0, "Title");
  }
});

Then("Past Transaction should be display in panel", function (){
  let radGridViewReceiptsTab = Aliases.Aptify_Shell.FormTemplateForm.PTInventoryDeliveries_Form.PTInventoryDeliveries_Tabs.tabMain.PTInventoryDeliveries_Tabs_Receipts.PTInventoryDeliveries_Tabs_Receipts.PTInventoryDeliveries_Tabs_Receipts_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let RowCountReceiptsTab = radGridViewReceiptsTab.wRowCount;
  let clmDate = radGridViewReceiptsTab.wValue(RowCountReceiptsTab-1,"Date").OleValue;
  if(aqObject.CompareProperty(clmDate, cmpLess, aqDateTime.Today(), true, 3))
  {
    Log.Checkpoint("Past transaction has been display in panel")
  }
  else{
  Log.Error("CompanPast transaction is not display in panel");
  }
});

//stockManager




//waste reason
Given("I check the checkbox beside first product name to select the product", function checkCheckboxFirstProductName (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0,0);
  let clmAvailableQty = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, "Available Qty").OleValue;
  parAvailableQty = clmAvailableQty;
 
});

Given("I click on Waste button from toolbar", function clickWasteBtnToolbar (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(148, 15);
});

Given("I select Waste Reason {arg}", function selectWasteReason (wasteReason){
 let ddWasteReason = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_WasteReasonID.LookupSearchCombo;
 ddWasteReason.ClickItem(wasteReason);
});

Given("I enter Packets {arg}", function enterPacketsWarehouseMovement (packets){
  let txtPackets = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_TransactionNumberOfPackets.txtInner;
  txtPackets.SetText(packets);
  txtPackets.Keys("[Tab]");
});

Given("I click on Transfer Button", function clickTransferBtnWarehouseMovement (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_Active_Button_Transfer.Click();
});

Then("Data in the Available Qty should be updated after transaction", function checkpointAvailableQtyUpdated (){
  let updatedAvailableQty = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, "Available Qty").OleValue;
  if(aqObject.CompareProperty(parAvailableQty, cmpNotEqual, updatedAvailableQty, true, 3))
  {
    Log.Checkpoint("Available Qty has been updated");
  }
  else{
  Log.Error("Available Qty remains same");
  }
});

Then("Product name should be displayed under Marshalling Area", function checkpointProductNameUnderMarshalling (){
  let clmTitle = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, "Title").OleValue;
  if(aqObject.CompareProperty(clmTitle, cmpEqual, productName, true, 3))
  {
    Log.Checkpoint("Product name has been display under marshalling area");
  }
  else{
  Log.Error("Product is not display under Marshalling area");
  }
});

//Freeze button
Given("I check the checkbox beside first product name", function checkCheckboxFirstProductNameFreeze(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0,0);
});

Given("I click on Freeze button from toolbar", function clickFreezeBtnToolbar (){
  let clmFrozenQty = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, "Frozen Qty").OleValue;
  frozenQty = clmFrozenQty;
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(112, 17);
});

Then("Checkbox under Freeze column should be checked", function checkpointCheckboxFreezeClmChecked (){
 let clmFreeze =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, "Frozen").OleValue;
 Log.Message(clmFreeze);
  let rowcount = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wRowCount;
  let i = 0;
  let presentRow = 0;
  let failcount = 0;
     
     if(presentRow == 0 && clmFreeze == true)
     {
      if(aqObject.CompareProperty(clmFreeze, cmpEqual, true, 3))
     {
      Log.Checkpoint("Column Freeze has been checked")
     }
      else{
     Log.Error("column Freeze is unchecked");
     }
   }
});

Then("Number of Goods should be displayed under Frozen Quantity", function checkpointGoodsDisplayUnderFrozenQty (){
   let clmfrozenqty = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, "Frozen Qty").OleValue;
   Log.Message(clmfrozenqty);
   if(aqObject.CompareProperty(clmfrozenqty, cmpGreaterOrEqual, frozenQty, true, 3))
  {
    Log.Checkpoint("Number of goods has been display under Frozen Qty")
  }
  else{
  Log.Error("Number of goods is not display under Frozen Qty");
  }
  
});

//Transfer button
Given("I click on Transfer button from toolbar", function clickTransferBtnToolbar (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(169, 16);
});

Given("I enter Site {arg}", function enterSiteWarehouseMovement (site){
  let ddSite = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_PT_Group_Box_2.PT_WarehouseStockManagerWizard_ToLevels.PT_WarehouseStockManagerWizard_ToLevels_SiteID.LookupSearchCombo;
  ddSite.DropDown();
  ddSite.ClickItem(site);
});

Given("I enter Warehouse {arg}", function enterWarehouseMovement (warehouse){
  let ddWarehouse = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_PT_Group_Box_2.PT_WarehouseStockManagerWizard_ToLevels.PT_WarehouseStockManagerWizard_ToLevels_WarehouseID.LookupSearchCombo;
  ddWarehouse.ClickItem(warehouse);
});

Given("I enter Location Type {arg}", function enterLocationTypeWarehouseMovement (locationType){
  let ddLocationType = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_PT_Group_Box_2.PT_WarehouseStockManagerWizard_ToLevels.PT_WarehouseStockManagerWizard_ToLevels_TypeID.LookupSearchCombo;
  ddLocationType.ClickItem(locationType);
});

Given("I select Location {arg}", function selectLocationWarehouseMovement (location2){
  let ddLocation = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_LinkedLocationItemID.txtLink;
  ddLocation.SetText(location2);
  locationTo = location2
  ddLocation.Keys("[Tab]");
});

Given("I enter Packets {arg} in To section", function enterPacketsToSeaction (packets){
  let txtpacketsTo = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_TransactionNumberOfPackets.txtInner;
  txtpacketsTo.SetText(packets);
  txtpacketsTo.Keys("[Tab]");
  txtpacketsTo.Keys("[Tab]");
  
  let txtTotalQty = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehousemovementWizard_Step1_TransactionTotalQuantity.txtInner.Text.OleValue;
  totalQty = txtTotalQty;
});

Then("Popup message should be displayed as transferred quantty from one location to another", function checkpointPopupMsgDisplay (){
  let str1 = "Transferred quantity" + " ";
  let str2 = " " + "from WABM to" + " ";
  let string3= aqString.Concat(str1 , totalQty);
  let string4 = aqString.Concat(str2 , locationTo);
  let Text1 = aqString.Concat(string3 , string4);
  aqObject.CheckProperty(Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.txtMessage, "Text", cmpEqual, Text1);
});

Given("I click on OK button from pop-up window", function clickOkBtnPopup (){
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
});

Then("I click on OK button from pop-up window", function clickOKBtnFromPopup (){
  let button = Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne;
  button.ClickButton();
  
});

//LooseToFprward
Given("I click on Loose to Forward button from toolbar", function clickLooseToForwardToolbar (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(189, 19);
});



Then("Popup message should be displayed as one record loose moved to forward location", function checkpointPopupMsgLooseToForward (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.txtMessage, "Text", cmpEqual, "1 record(s) Loose moved to Forward Location");
});

//start
When("I enter number of Qty Loose {arg}", function enterNumberOfQtyLoose (parQtyLoose){
  let txtqtyLoose = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_LooseQty.txtInner;
  txtqtyLoose.SetText(parQtyLoose);
  txtqtyLoose.Keys("[Tab]");
  qtyLoose = parQtyLoose
});


When("I enter a message {arg} in Reference", function enterReferenceSettings (reference){
  let txtReference = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_417.PTInventoryGoodsInWizard_NewStep1.PTInventoryGoodsInWizard_NewStep1_Reference.txtInner;
  txtReference.Click();
  txtReference.SetText(reference);
});

When("I select a product to perform goodsIn {arg}", function selectProductGoodsIn (productName){
    let txtproduct = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_ProductID.txtLink;
    txtproduct.Click();
    txtproduct.Keys(productName);
    product = productName;
    txtproduct.Keys("[Tab]");
    let radGridViewProductGoodsIn = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
    if(radGridViewProductGoodsIn.Exists)
  {
    radGridViewProductGoodsIn.DblClickCell(0, "Title");
  }
});

When("I click on Main Market Edition under product version with reference Stock {arg}\\/{arg}\\/{arg}", function clickMME (param1, param2, param3){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_PTPairedGrids_1.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(1, 0);
});

When("I enter a message in the Comments {arg}", function enterMsgInComments (comments){
  let txtComments = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_Comments.txtInner;
  txtComments.Click();
  txtComments.SetText(comments)
});

When("I click on Ok Button", function clickOKBtnFromMsgBox (){
   Aliases.Aptify_Shell.MessageBox.UltraGroupBox1.cmdOK.ClickButton();
});

When("I click on Add Button from Inventory goodsIn", function clickADDBtnGoodsIn (){
  let btnAdd = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_Active_Button_Add;
  btnAdd.Click();
  if(Aliases.Aptify_Shell.MessageBox.UltraGroupBox1.cmdOK.Exists)
  {
    Aliases.Aptify_Shell.MessageBox.UltraGroupBox1.cmdOK.ClickButton();
  }
  //Delay(10000);
});

Given("I enter packets {arg}", function enterFreezePackets (freezepackets){
  let txtFreezePackets = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_164.PT_PTInventoryLocationHistory_FreezeUnFreezeWizard.PT_PTInventoryLocationHistory_FreezeUnFreezeWizard_NumberOfPackets.txtInner;
  txtFreezePackets.SetText(freezepackets);
  txtFreezePackets.Keys("[Tab]");
});

Given("I enter Qty Loose {arg}", function enterQtyLooseFreezeUnfreeze (qtyLoose){
  let FreezeQtyLoose = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_164.PT_PTInventoryLocationHistory_FreezeUnFreezeWizard.PT_PTInventoryLocationHistory_FreezeUnFreezeWizard_QuantityLoose.txtInner;
  FreezeQtyLoose.SetText(qtyLoose);
  FreezeQtyLoose.Keys("[Tab]");
});

Given("I enter a message {arg} in Comments input box", function enterCommentFreezeUnfreeze (paramComments){
  let txtComments = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_164.PT_PTInventoryLocationHistory_FreezeUnFreezeWizard.PT_PTInventoryLocationHistory_FreezeUnFreezeWizard_Comments.txtInner;
  txtComments.Keys(paramComments);
});

Given("I click on Finish button", function clickFinishBtnFreezeUnfreeze (){
  Delay(5000);
  Sys.Process("Aptify Shell").WinFormsObject("GenericWizardForm").WinFormsObject("WizMain").WinFormsObject("btnFinish").Click(); 
  Delay(3000); 
  Aliases.Aptify_Shell.MessageBox.UltraGroupBox1.cmdOK.ClickButton();
});


Given("I click on Un-Freeze button from toolbar", function clickUnFreezeBtnToolbar (){
  let clmFrozenQty = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, "Frozen Qty").OleValue;
  frozenQty = clmFrozenQty;
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(131, 20);
});

Then("I click on OK Button", function clickOKBtnUnfreeze (){
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
});

Then("Number of Goods after transaction should be displayed {arg} or less number of goods frozen than before performing this transaction", function checkpointGoodsInAfterTransaction (param1){
   let clmfrozenqty = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, "Frozen Qty").OleValue;
 
   if(clmfrozenqty == 0)
   {
     Log.Checkpoint("Frozen Quantity has been display zero")
   }
   else if(clmfrozenqty < frozenQty)
   {
     Log.Checkpoint("Frozen Quantity has been display less after transaction");
   }
   else
   {
     Log.Error("Frozen Qty is not 0 or not less")
   }
     
});

Given("I enter equal number of packets as Frozen inventory packets", function enterPacketsAsFrozenInvwntoryPackets (){
  let txtfrozenInventoryPackets = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_164.PT_PTInventoryLocationHistory_FreezeUnFreezeWizard.PT_PTInventoryLocationHistory_FreezeUnFreezeWizard_NumberOfPackets.txtInner;
  txtfrozenInventoryPackets.SetText(actionQuantitiesPackets);
  txtfrozenInventoryPackets.Keys("[Tab]");
});

Given("I check number of packets from Frozen Inventory", function checkPacketsFromFrozenInventory (){
  let frozenInventoryPackets = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_164.PT_PTInventoryLocationHistory_FreezeUnFreezeWizard.PT_PTInventoryLocationHistory_FreezeUnFreezeWizard_PTUnboundTextBoxPacketsFrozenBefore.textBox1.Text.OleValue;
  actionQuantitiesPackets = frozenInventoryPackets
});

Then("Checkbox under Freeze column should be Un-checked", function checkpointFreezeClmUnchecked (){
  let clmFreeze = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, "Frozen").OleValue;
  let rowcount = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wRowCount;
  let i = 0;
  let presentRow = 0;
  let failcount = 0;
     
     if(presentRow == 0 && clmFreeze == false)
     {  
      if(aqObject.CompareProperty(clmFreeze,cmpEqual,false,3))
      Log.Checkpoint("checkbox column freeze is Unchecked")
      else
      {
        Log.Error("checkbox column freeze is checked")
  
      }
      }
});

//delieveryRecord



When("I click on New Inventory Deliveries Record after right clicking on any date in the calendar", function clickNewInventoryDeliveryFromCalendar (){
  let ultraMonthViewSingle = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_ExpectedDeliveries.PTProducts_OTC_Inventory_ExpectedDeliveries.PTProducts_OTC_Inventory_ExpectedDeliveries_View_Container_1.AptifyCalendarView.AptifyCalendarView_Fill_Panel.ulMonthView;
  ultraMonthViewSingle.Click();
  ultraMonthViewSingle.ClickR();
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_ExpectedDeliveries.PTProducts_OTC_Inventory_ExpectedDeliveries.PTProducts_OTC_Inventory_ExpectedDeliveries_View_Container_1.AptifyCalendarView.StripPopupMenu.Click("New  Inventory Deliveries Record");
});



Then("Under Deliveries tab  product as {arg}, Expected date as {arg}, Time as {arg} should be displayed", function checkpointProductDisplayUnderDeliveriesCalendar(product, date, Time){
  let aptify_Shell = Aliases.Aptify_Shell;
  aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_ExpectedDeliveries.PTProducts_OTC_Inventory_ExpectedDeliveries.PTProducts_OTC_Inventory_ExpectedDeliveries_View_Container_1.AptifyCalendarView.zAptifyCalendarView_Toolbars_Dock_Area_Top.ClickItemXY("Calendar View|Go To Date", 11, 8);
  aptify_Shell.DropDownForm.PopupMenuControlTrusted.UltraToolbarsDockArea.calMonth.SetSelection(aqDateTime.Today());
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_ExpectedDeliveries.PTProducts_OTC_Inventory_ExpectedDeliveries.PTProducts_OTC_Inventory_ExpectedDeliveries_View_Container_1.AptifyCalendarView.zAptifyCalendarView_Toolbars_Dock_Area_Top.DblClickItemXY("Calendar View|Day View", 7, 11);
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_ExpectedDeliveries.PTProducts_OTC_Inventory_ExpectedDeliveries.PTProducts_OTC_Inventory_ExpectedDeliveries_View_Container_1.AptifyCalendarView.AptifyCalendarView_Fill_Panel.ulDayView.DblClick(140, 91);
  
  
  let deliveryDate = Aliases.Aptify_Shell.FormTemplateForm.PTInventoryDeliveries_Form.PTInventoryDeliveries_Tabs.tabMain.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_ExpectedDateTime.txtInner.Text.OleValue;
  let deliverytime =  Aliases.Aptify_Shell.FormTemplateForm.PTInventoryDeliveries_Form.PTInventoryDeliveries_Tabs.tabMain.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_Tabs_General_ExpectedTime.innerDateTimePicker.Text.OleValue;
  
  if(aqObject.CompareProperty(deliveryDate, cmpEqual, date, true, 3))
  {
    Log.Checkpoint("Delivery date has been display")
  }
  else{
  Log.Error("Delivery date is not display");
  }
  
  if(aqObject.CompareProperty(deliverytime, cmpEqual, Time, true, 3))
  {
    Log.Checkpoint("Delivery Time is display")
  }
  else{
  Log.Error("Delivery Time is not display");
  }
  
  
  let tableDeliveryItems = Aliases.Aptify_Shell.FormTemplateForm.PTInventoryDeliveries_Form.PTInventoryDeliveries_Tabs.tabMain.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_Tabs_General_Tabs.tabMain.PTInventoryDeliveries_Tabs_General_Tabs_DeliveryItems.PTInventoryDeliveries_Tabs_General_Tabs_DeliveryItems.PTInventoryDeliveries_Tabs_General_Tabs_DeliveryItems_Sub_Type_Control_1.AptifyControlBase_Fill_Panel.flexSubType
  let clmproductName = tableDeliveryItems.get_Item(1, 4).OleValue;
 
  if(aqObject.CompareProperty(clmproductName, cmpEqual, product, true, 3))
  {
    Log.Checkpoint("Product Name is display")
  }
  else{
  Log.Error("Product Name is not display");
    }
});

//deliveryRecord2


When("I select Supplier {arg}", function selectSupplierNewInventoryDeliveryRecord (supplier){
  Aliases.Aptify_Shell.FormTemplateForm.PTInventoryDeliveries_Form.PTInventoryDeliveries_Tabs.tabMain.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_Tabs_General_SupplierRoleID.LookupSearchCombo.ClickItem(supplier);
});

When("I select Destination Warehouse {arg}", function selectWarehouseNewInventoryDeliveryRecord (destinationWarehouse){
  Aliases.Aptify_Shell.FormTemplateForm.PTInventoryDeliveries_Form.PTInventoryDeliveries_Tabs.tabMain.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_Tabs_General_DestinationWarehouseID.LookupSearchCombo.ClickItem(destinationWarehouse);
});

When("I enter Expected Date {arg} and Time {arg}", function enterDateAndTimeNewInventoryDeliveryRecord (date, Time){
  let ExpectedDate = Aliases.Aptify_Shell.FormTemplateForm.PTInventoryDeliveries_Form.PTInventoryDeliveries_Tabs.tabMain.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_ExpectedDateTime.txtInner;
  ExpectedDate.Click();
  ExpectedDate.SetText(date);
  deliveryDate = date;
  ExpectedDate.Keys("[Tab]");
  Aliases.Aptify_Shell.FormTemplateForm.PTInventoryDeliveries_Form.PTInventoryDeliveries_Tabs.tabMain.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_Tabs_General_ExpectedTime.innerDateTimePicker.wTime = Time;
  deliverytime = Time;
});

When("I select Carrier {arg}", function selectCarrierNewInventoryDeliveryRecord (carrier){
  Aliases.Aptify_Shell.FormTemplateForm.PTInventoryDeliveries_Form.PTInventoryDeliveries_Tabs.tabMain.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_Tabs_General_CarrierRoleID.LookupSearchCombo.ClickItem(carrier);
});

When("I click on New button to add the products", function clickNewBtnNewInventoryDeliveryRecord (){
  let btnNew = Aliases.Aptify_Shell.FormTemplateForm.PTInventoryDeliveries_Form.PTInventoryDeliveries_Tabs.tabMain.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_Tabs_General_Tabs.tabMain.PTInventoryDeliveries_Tabs_General_Tabs_DeliveryItems.PTInventoryDeliveries_Tabs_General_Tabs_DeliveryItems.PTInventoryDeliveries_Tabs_General_Tabs_DeliveryItems_Sub_Type_Control_1.zAptifyControlBase_Toolbars_Dock_Area_Top;
  btnNew.ClickItem("SubType|New");
});

When("I select Supplier Order {arg}", function selectSupplierOrderInventoryDeliveryItem (supplierOrder){
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTInventoryDeliveriesItems_Form.PTInventoryDeliveriesItems_Tabs.tabMain.PTInventoryDeliveriesItems_Tabs_General.PTInventoryDeliveriesItems_Tabs_General.PTInventoryDeliveriesItems_Tabs_General_SupplierOrderID.LookupSearchCombo.ClickItem(supplierOrder);
});

When("I select a product {arg} from dropdown", function selectProductFromDropDownInventoryDeliveryItem (product){
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTInventoryDeliveriesItems_Form.PTInventoryDeliveriesItems_Tabs.tabMain.PTInventoryDeliveriesItems_Tabs_General.PTInventoryDeliveriesItems_Tabs_General.PTInventoryDeliveriesItems_Tabs_General_ProductID.LookupSearchCombo.ClickItem(product);
});

When("I click On OK button", function clickOkBtnInventoryDeliveryItem (){
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
});

When("I click on Save Record and Close Form icon", function clickSaveAndCloseInventoryDeliveryRecord (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
});



Then("Under all tab coloumns Destination Warehouse as {arg},Supplier as {arg} and Carrier Role Name as {arg} should be displayed", function checkpointDeliveryDisplayUnderAllDeliveryRecord (parDestinationWarehouse, parSupplierName, parCarrierRoleName){

  ultraTree = Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain;
  ultraTree.outlineitemInventory.Click();
  ultraTree.outlineitemInventoryDeliveries.DblClick(93, 11);
  ultraTree.outlineitemAllInventoryDeliverie.DblClick(79, 11);
  
  let radGridView = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmDestinationWarehouse = radGridView.wValue(0, "Destination Warehouse").OleValue;
  if(aqObject.CompareProperty(clmDestinationWarehouse, cmpEqual, parDestinationWarehouse, true, 3))
  {
    Log.Checkpoint("Destination warehouse is display under All Inventory Deliveries")
  }
  else{
  Log.Error("Destination warehouse is not display under All Inventory Deliveries");
  }
  
  let clmSupplierName = radGridView.wValue(0, "Supplier Name").OleValue;
  if(aqObject.CompareProperty(clmSupplierName, cmpEqual, parSupplierName, true, 3))
  {
    Log.Checkpoint("Supplier Name is display under All Inventory Deliveries")
  }
  else{
  Log.Error("Supplier Name is not display under All Inventory Deliveries");
  }
  
  
  let clmExpectedDate = radGridView.wValue(0, "Expected Date").OleValue;
  if(aqObject.CompareProperty(clmExpectedDate, cmpEqual, aqDateTime.Today(), true, 3))
  {
    Log.Checkpoint("Expected Date is display under All Inventory Deliveries")
  }
  else{
  Log.Error("Expected date is not display under All Inventory Deliveries");
  }
  
  let clmCarrierRoleName = radGridView.wValue(0, "Carrier Role Name").OleValue;
  if(aqObject.CompareProperty(clmCarrierRoleName, cmpEqual, parCarrierRoleName, true, 3))
  {
    Log.Checkpoint("Carrier Name is display under All Inventory Deliveries")
  }
  else{
  Log.Error("Carrier Name is not display under All Inventory Deliveries");
  }
  Delay(8000);
  
});

When("I click on Deliveries tab", function clickDeliveriesTab  (){
  let tabDeliveries = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain;
  tabDeliveries.ClickTab("Deliveries");
});

//InventoryLocation

When("I click on New icon from toolbar", function clickNewIconFromInventoryLocation (){
  let aptifyShellForm = Aliases.Aptify_Shell.AptifyShellForm;
  aptifyShellForm.WindowDockingArea1.DockableWindow1.aptifyTree.tvwMain.ClickItem("advance> Home|Inventory|Inventory Locations|All Inventory Locations");
  Aliases.explorer.wndProgman.SHELLDLL_DefView.FolderView.Click(129, 547);
  aptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(6, 14);
  
});

When("I select Site {arg}", function selectSiteInventoryLocation (site){
  Aliases.Aptify_Shell.FormTemplateForm.PTInventoryLocations_Form.PTInventoryLocations_Tabs.tabMain.PTInventoryLocations_Tabs_General.PTInventoryLocations_Tabs_General.PTInventoryLocations_Tabs_General_SiteID.LookupSearchCombo.ClickItem(site);
});

When("I select Warehouse {arg}", function selectLocationInventoryLocation  (warehouse){
  Aliases.Aptify_Shell.FormTemplateForm.PTInventoryLocations_Form.PTInventoryLocations_Tabs.tabMain.PTInventoryLocations_Tabs_General.PTInventoryLocations_Tabs_General.PTInventoryLocations_Tabs_General_WarehouseID.LookupSearchCombo.ClickItem(warehouse);
});

When("I select Location Type {arg}", function selectLocationTypeInventoryLocation (location){
  Aliases.Aptify_Shell.FormTemplateForm.PTInventoryLocations_Form.PTInventoryLocations_Tabs.tabMain.PTInventoryLocations_Tabs_General.PTInventoryLocations_Tabs_General.PTInventoryLocations_Tabs_General_TypeID.LookupSearchCombo.ClickItem(location);
});

When("I select Section {arg}", function selectSectionInventoryLocation (section){
  Aliases.Aptify_Shell.FormTemplateForm.PTInventoryLocations_Form.PTInventoryLocations_Tabs.tabMain.PTInventoryLocations_Tabs_General.PTInventoryLocations_Tabs_General.PTInventoryLocations_Tabs_General_SectionID.LookupSearchCombo.ClickItem(section);
});

When("I select Aisle {arg}", function selectAisleInventoryLocation (aisle){
  Aliases.Aptify_Shell.FormTemplateForm.PTInventoryLocations_Form.PTInventoryLocations_Tabs.tabMain.PTInventoryLocations_Tabs_General.PTInventoryLocations_Tabs_General.PTInventoryLocations_Tabs_General_AisleID.LookupSearchCombo.ClickItem(aisle);
});

When("I select Position {arg}", function selectPositionInventoryLocation (position){
  Aliases.Aptify_Shell.FormTemplateForm.PTInventoryLocations_Form.PTInventoryLocations_Tabs.tabMain.PTInventoryLocations_Tabs_General.PTInventoryLocations_Tabs_General.PTInventoryLocations_Tabs_General_PositionID.LookupSearchCombo.ClickItem(position);
});

When("I select Level {arg}", function selectLevelInventoryLocation (level){
  Aliases.Aptify_Shell.FormTemplateForm.PTInventoryLocations_Form.PTInventoryLocations_Tabs.tabMain.PTInventoryLocations_Tabs_General.PTInventoryLocations_Tabs_General.PTInventoryLocations_Tabs_General_LevelID.LookupSearchCombo.ClickItem(level);
});

When("I enter a message in the Description {arg}", function (description){
  let txtDescription = Aliases.Aptify_Shell.FormTemplateForm.PTInventoryLocations_Form.PTInventoryLocations_Tabs.tabMain.PTInventoryLocations_Tabs_General.PTInventoryLocations_Tabs_General.PTInventoryLocations_Description.txtInner;
  txtDescription.Keys(description);
  descriptionMessage = description;
});

When("I select Size {arg}", function selectSizeInventoryLocation (size){
  Aliases.Aptify_Shell.FormTemplateForm.PTInventoryLocations_Form.PTInventoryLocations_Tabs.tabMain.PTInventoryLocations_Tabs_General.PTInventoryLocations_Tabs_General.PTInventoryLocations_Tabs_General_SizeID.LookupSearchCombo.ClickItem(size);
});

When("I select Status {arg}", function selectStatusInventoryLocation (status){
  Aliases.Aptify_Shell.FormTemplateForm.PTInventoryLocations_Form.PTInventoryLocations_Tabs.tabMain.PTInventoryLocations_Tabs_General.PTInventoryLocations_Tabs_General.PTInventoryLocations_Tabs_General_StatusID.LookupSearchCombo.ClickItem(status);
});

When("I check the Mixed Products Allowed checkbox", function checkMixedProductsAllowedCheckbox (){
  Aliases.Aptify_Shell.FormTemplateForm.PTInventoryLocations_Form.PTInventoryLocations_Tabs.tabMain.PTInventoryLocations_Tabs_General.PTInventoryLocations_Tabs_General.PTInventoryLocations_IsMixedProductsAllowed.chkInternal.wState = cbChecked;
});

When("I check the Is Pickable checkbox", function checkIsPickableCheckbox (){
   Aliases.Aptify_Shell.FormTemplateForm.PTInventoryLocations_Form.PTInventoryLocations_Tabs.tabMain.PTInventoryLocations_Tabs_General.PTInventoryLocations_Tabs_General.PTInventoryLocations_IsPickable.chkInternal.wState = cbChecked;
});

When("I click on Save record and close the form button", function clickSaveAndCloseInventoryLocation (){
  let btnSaveAndClose = Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top;
  btnSaveAndClose.ClickItem("Data Form|Save Record and Close Form");
});

//only site,warehouse and Location type checkpoint

Then("Under Inventoy Location tab site as {arg} ,warehouse as {arg} and Description should be displayed", function checkpointRecordDisplayUnderAllInventoryLocation (Site, Warehouse){
  let tabInventoryLocation = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let totalRowsInventoryLocation = tabInventoryLocation.wRowCount;
  for(var i = 0 ; i<totalRowsInventoryLocation; i++)
  {
    let clmDescription = tabInventoryLocation.wValue(i, "Description").OleValue;
    let clmWarehouse = tabInventoryLocation.wValue(i, "Warehouse").OleValue;
    let clmSite = tabInventoryLocation.wValue(i, "site").OleValue;
    
    if(clmSite == Site && clmDescription == descriptionMessage && clmWarehouse == Warehouse )
    {
    {
      Log.Checkpoint("Site,warehouse and description is display under Inventory location");
      break;
    }
    
    {
      Log.Error("Site,warehouse and description is not display under Inventory location")
      break;
    }
    }
    
  }

});


//ManageInventory

When("I click on Manage Inventory tab", function clickManageInventoryTab (){
  let tabManageInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain;
  tabManageInventory.ClickTab("Manage Inventory");
});

When("I select Site name {arg}", function selectSiteManageInventory (site){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventoryTree.PT_Products_Inventory_StockManager.PT_Products_Inventory_StockManager_SiteID.LookupSearchCombo.ClickItem(site);
});

When("I select Warehouse name {arg}", function selectWarehouseManageInventory (warehouse){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventoryTree.PT_Products_Inventory_StockManager.PT_Products_Inventory_StockManager_WarehouseID.LookupSearchCombo.ClickItem(warehouse);
});

When("I select Location {arg}", function selectLocationManageInventory (location){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventoryTree.PT_Products_Inventory_StockManager.PT_Products_Inventory_StockManager_TypeID.LookupSearchCombo.ClickItem(location);
});

When("I drag the product and Drop under Waste", function dragAndDropProductUnderWaste (){
  Delay(2000);
  
  let radGridViewManageInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventoryTree.PT_Products_Inventory_StockManager.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel2.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmAvailableQuantity = radGridViewManageInventory.wValue(0, "Available Qty").OleValue;
  parAvailableQty = clmAvailableQuantity;
  radGridViewManageInventory.ClickCell(0, "Title");
  radGridViewManageInventory.Drag(97, 29, -290, 235);
  
});

When("I enter packets {arg}", function enterPacketsManageInventory (packets){
  let txtPackets = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_TransactionNumberOfPackets.txtInner;
  txtPackets.Click();
  txtPackets.SetText(packets);
  txtPackets.Keys("[Tab]");
});

When("I select Waste Rsn {arg}", function selectWasteRsnManageInventory (wasteRsn){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_WasteReasonID.LookupSearchCombo.ClickItem(wasteRsn);
});

When("I click on Transfer button", function clickTransferBtnManageInventory (){
  let btnTransfer = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_Active_Button_Transfer;
  btnTransfer.Click();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
});

When("I click on finish button", function clickFinishBtnManageInventory (){
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
});

Then("Available Qty column from Manage Inventory tab should be changed", function checkpointAvailableQtychange (){
  Delay(3000);
  let radGridViewAvailableQtyManage = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventoryTree.PT_Products_Inventory_StockManager.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel2.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmAvailabelOty = radGridViewAvailableQtyManage.wValue(0, "Available Qty").OleValue;
  aqObject.CompareProperty(clmAvailabelOty, cmpNotEqual,parAvailableQty, true,3);
  
  if(aqObject.CompareProperty(clmAvailabelOty, cmpNotEqual, parAvailableQty, true, 3))
  {
    Log.Checkpoint("Available Qty from Manage Inventory tab has been change")
  }
  else{
  Log.Error("Available Qty from Manage Inventory tab is not change");
  
  }
});



//singleSupplier



When("I select one of the supplier order from the list", function selectSupplierGoodsInSingleOrder (){
  let rowCountOneSupplier = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_PTPairedGrids_1.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wRowCount;
  let clmSupllier = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_PTPairedGrids_1.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(rowCountOneSupplier-1,"Supplier");
});
  




Then("I click on Finish Button", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
  if(Aliases.Aptify_Shell.LocalizedMsgBox.Exists)
  {
    Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
  }
});

Then("GoodsIn wizard closes successfully with updated inventory details in Product Information panel", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpStartsWith, "Products ID:");
  
  let radGridViewProdInfoPanel = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmBalProductInfo =  radGridViewProdInfoPanel.wValue(0, "Available").OleValue;
  
  if(aqObject.CompareProperty(clmBalProductInfo, cmpNotEqual, availableInventory))
  {
    Log.Checkpoint("Inventory details hs been updated")
  }
  else{
  Log.Error("Inventory details remains same");
  
  }
});

//differentsupplierorder


When("I select another supplier order for multiple deliveries", function selectSupplierOrderForMultipleDeliveries (){
  let rowCountAnotherSupplierOrder = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_PTPairedGrids_1.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wRowCount;
  let clmSupllier = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_PTPairedGrids_1.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(rowCountAnotherSupplierOrder-2,"Supplier");
});

//overDeliveries



When("I select one of the Supplier Name in the Received section with details populated", function selectSupplierNameOverDeliveries (){
  if(Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.Exists)
  {
    Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
  }
  let radGridViewSupplier = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_PTPairedGrids_1.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let rowCountupplier = radGridViewSupplier.wRowCount;
  radGridViewSupplier.ClickCell(rowCountupplier-1, "Reference");
  
  if(aqObject.CompareProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_PTPairedGrids_1.splitContainer1.SplitterPanel2.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wRowCount,cmpEqual,0))
  {
    Log.Error("Inventory Delivery Record is mandatory");
  }
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_PTPairedGrids_1.splitContainer1.SplitterPanel2.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, "Exp Packet Size");
  
  
  let clmExpectedPacketSize = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_PTPairedGrids_1.splitContainer1.SplitterPanel2.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, "Exp Packet Size").OleValue;
  parExpPacketSize = clmExpectedPacketSize;
  let clmExpectedQty = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_PTPairedGrids_1.splitContainer1.SplitterPanel2.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, "Expected Qty").OleValue;
  parExpectedQty = clmExpectedQty + 1; 

  
});

When("I enter number same as Exp Packet Size in the Size", function enterSizeOverDeliveries (){
  let txtExpPacketSize = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_PacketSize.txtInner;
  txtExpPacketSize.SetText(parExpPacketSize);
  txtExpPacketSize.Keys("[Tab]");
});

When("I enter number of packets more than the number mentioned in Expected quantity", function enterPacketsOverDelivries (){
  let txtExpectedQty = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_Packets.txtInner;
  txtExpectedQty.SetText(parExpectedQty);
});

Then("Pop-up window should be appeared  with alert message as Received Quantity has exceeded Expected Quantity", function checkpointPopupWindowWithMsg(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.txtMessage, "Text", cmpEqual, "Received Quantity has exceeded Expected Quantity");
  
});

When("I create new Inventory Delivery record", function creteNewinventoryDeliveryRecord (){
  clicktabDeliveries();
  clickToCreateNewDeliveryRecord();
  selectSupplier();
  selectDestination();
  enterExpectedDate();
  selectCarrier();
  openNewInventoryDeliveryItem()
  selectSupplierOrder()
  selectProduct();
  clickOKBtn();
  clickBtnSaveAndClose();
  clickBtnRefresh();
  clickBtnSaveAndClose();
});

function clicktabDeliveries()
{
  let ultraTabControl = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain;
  let ultraTabControl2 = ultraTabControl.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain;
  ultraTabControl2.ClickTab("Deliveries");
}

function clickToCreateNewDeliveryRecord()
{
  let aptifyCalendarView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_ExpectedDeliveries.PTProducts_OTC_Inventory_ExpectedDeliveries.PTProducts_OTC_Inventory_ExpectedDeliveries_View_Container_1.AptifyCalendarView;
  aptifyCalendarView.AptifyCalendarView_Fill_Panel.ulMonthView.ClickR();
  aptifyCalendarView.StripPopupMenu.Click("New  Inventory Deliveries Record");
}

function selectSupplier()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTInventoryDeliveries_Form.PTInventoryDeliveries_Tabs.tabMain.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_Tabs_General_SupplierRoleID.LookupSearchCombo.ClickItem("Harvey");
}

function selectDestination()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTInventoryDeliveries_Form.PTInventoryDeliveries_Tabs.tabMain.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_Tabs_General_DestinationWarehouseID.LookupSearchCombo.ClickItem("Watford/Warehouse A");
}

function enterExpectedDate()
{
  let inventoryDeliveryLayout = Aliases.Aptify_Shell.FormTemplateForm.PTInventoryDeliveries_Form.PTInventoryDeliveries_Tabs.tabMain.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_Tabs_General;
  let txtExpectedDate = inventoryDeliveryLayout.PTInventoryDeliveries_ExpectedDateTime.txtInner;
  txtExpectedDate.SetText("30/09/2020");
  txtExpectedDate.Keys("[Tab]");
  let dateTimePicker = inventoryDeliveryLayout.PTInventoryDeliveries_Tabs_General_ExpectedTime.innerDateTimePicker;
  dateTimePicker.wTime = "09:00:00";
  dateTimePicker.Keys("[Enter][Tab]");
}

function selectCarrier()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTInventoryDeliveries_Form.PTInventoryDeliveries_Tabs.tabMain.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_Tabs_General_CarrierRoleID.LookupSearchCombo.ClickItem("Air Business");
}

function openNewInventoryDeliveryItem()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTInventoryDeliveries_Form.PTInventoryDeliveries_Tabs.tabMain.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_Tabs_General_Tabs.tabMain.PTInventoryDeliveries_Tabs_General_Tabs_DeliveryItems.PTInventoryDeliveries_Tabs_General_Tabs_DeliveryItems.PTInventoryDeliveries_Tabs_General_Tabs_DeliveryItems_Sub_Type_Control_1.zAptifyControlBase_Toolbars_Dock_Area_Top.ClickItem("SubType|New");
}

function selectSupplierOrder()
{
  let txtSupplierOrder = Aliases.Aptify_Shell.SubTypeTemplateForm.PTInventoryDeliveriesItems_Form.PTInventoryDeliveriesItems_Tabs.tabMain.PTInventoryDeliveriesItems_Tabs_General.PTInventoryDeliveriesItems_Tabs_General.PTInventoryDeliveriesItems_Tabs_General_SupplierOrderID.LookupSearchCombo;
  txtSupplierOrder.Keys(supplierReference);
  txtSupplierOrder.Keys("[Tab]");
}

function selectProduct()
{
  
  let lnkProduct = Aliases.Aptify_Shell.SubTypeTemplateForm.PTInventoryDeliveriesItems_Form.PTInventoryDeliveriesItems_Tabs.tabMain.PTInventoryDeliveriesItems_Tabs_General.PTInventoryDeliveriesItems_Tabs_General.PTInventoryDeliveriesItems_Tabs_General_ProductID.LookupSearchCombo;
  lnkProduct.ClickItem("testing category");
}

function clickBtnSaveAndClose()
{
  let formTemplateForm = Aliases.Aptify_Shell.FormTemplateForm;
  formTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
}

function clickBtnRefresh()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_ExpectedDeliveries.PTProducts_OTC_Inventory_ExpectedDeliveries.PTProducts_OTC_Inventory_ExpectedDeliveries_View_Container_1.AptifyCalendarView.zAptifyCalendarView_Toolbars_Dock_Area_Top.ClickItem("Calendar View|Refresh");
}

function clickOKBtn()
{
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
}

When("I click on Inventory from Product Information Panel", function clickInventoryProductInfoPanel (){
 Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
});


When("I check Physical inventory of product", function noteDownAvailableQty (){
  
  let radGridViewPhysicalInventory = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let physicalInventory =  radGridViewPhysicalInventory.wValue(0, "Physical").OleValue;
  balance = physicalInventory;
});


Then("I click On Ok button from Popup", function (){
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
  if(Aliases.Aptify_Shell.MessageBox.UltraGroupBox1.Exists)
  {
  Aliases.Aptify_Shell.MessageBox.UltraGroupBox1.cmdOK.ClickButton();
  }
});

//shortDeliveries



When("I click on Supplier Name in the Received section with details populated", function clickSupplierNameshortDeliveries  (){
  if(Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.Exists)
  {
    Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
  }
  let radGridViewSupplier = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_PTPairedGrids_1.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let rowCount = radGridViewSupplier.wRowCount;
  radGridViewSupplier.ClickCell(0, 0);
  if(Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.Exists)
  {
    Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
  }
  let clmReference = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_PTPairedGrids_1.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(rowCount-1, "Reference").OleValue;
  refDeliveryReceipts = clmReference;
  
  if(aqObject.CompareProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_PTPairedGrids_1.splitContainer1.SplitterPanel2.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wRowCount,cmpEqual,0))
  {
    Log.Error("Inventory Delivery Record is mandatory");
  }
  
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_PTPairedGrids_1.splitContainer1.SplitterPanel2.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0, "Expected Qty");
  if(Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.Exists)
  {
    Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
  }
  let clmExpectedPacketSize = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_PTPairedGrids_1.splitContainer1.SplitterPanel2.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, "Exp Packet Size").OleValue;
  parExpPacketSize = clmExpectedPacketSize;
  parExpectedQty = clmExpectedPacketSize-1;  
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_PTPairedGrids_1.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(rowCount-1, "Reference");
  if(Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.Exists)
  {
    Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
  }
});

When("I enter Size {arg} in Received section from Goods In wizard", function (size){
  if(Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.Exists)
    {
    let message = Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.txtMessage.get_Text();
    var popupSize =  aqString.SubString(message, 67, 10);  
    Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
    let txtsize = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_PacketSize.txtInner;
    txtsize.SetText(popupSize);
    txtsize.Keys("[Tab]");
  }
  
  let txtsize = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_PacketSize.txtInner;
    txtsize.Keys("^a [Clear]");
    txtsize.SetText(size);
    txtsize.Keys("[Tab]");
  
  if(Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.Exists)
    {
    let message = Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.txtMessage.get_Text();
    var popupSize =  aqString.SubString(message, 67, 10);  
    Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
    let txtsize = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_PacketSize.txtInner;
    txtsize.SetText(popupSize);
    txtsize.Keys("[Tab]");
  }
  
});

When("I enter number same as expected packet size in the Size", function enterSizeShortDeliveries (){
  let txtExpPacketSize = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_PacketSize.txtInner;
  Delay(1000);
  txtExpPacketSize.Keys(parExpPacketSize);
  txtExpPacketSize.Keys("[Tab]");
});

When("I enter number of packets less than the number mentioned in Expected quantity", function enterPacketsShortDeliveries (){
  let txtExpectedQty = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_Packets.txtInner;
  txtExpectedQty.Keys(parExpectedQty);
});

Then("product should be displayed in stock manager window with updated Available Qty", function checkpointProductWithUpdatedAvailableQty (){
  Sys.WaitProcess("Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419", 6000);
  let radGridViewStockManager = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let clmTitle = radGridViewStockManager.wValue(0, 2).OleValue;
  
  if(aqObject.CompareProperty(clmTitle, cmpEqual, product, true, 3))
  {
    Log.Checkpoint("Product has been display under in stock manager")
  }
  else{
  Log.Error("Product is not display");
  }
  

  let clmAvailableQty = radGridViewStockManager.wValue(0, "Available Qty").OleValue;
  
  
  if(aqObject.CompareProperty(clmAvailableQty, cmpNotEqual, availableInventory, true, 3))
  {
    Log.Checkpoint("Available Qty has been change after transaction")
  }
  else{
  Log.Error("Available Qty has remains same");
  }
  
});

Then("I perform Inventory movement bulk to forward locations and confirm pending transactions", function (){
  selectFirstProduct();
  dragAndDropUnderForward();
  selectDefaultLocation();
  enterSamePacketsAndQtyLoose();
  clickTransferBtnFromWarehouseInventoryMovement();
  //clickBtnFinishFromWarehouseInventoryMovement();
  clickConfirmMovementsBtn();
  selectProductToConfirmTransactions();
  clickConfirmBtnToConfirmTransactions();
  //clickBtnFinishConfirmTransactions();
});

function selectFirstProduct()
{
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.Click(29, 30);
}

function dragAndDropUnderForward()
{
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.Drag(103, 25, -291, 219);
}

function selectDefaultLocation()
{
  let aptify_Shell = Aliases.Aptify_Shell;
  aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_LinkedLocationItemID.txtLink.Click(138, 12);
  let splitContainer = aptify_Shell.SimpleFindDialog.SplitContainer1;
  splitContainer.SplitterPanel.simpleSearchCtl.txtSearch.wButtonsRight(0).Click();
  splitContainer.SplitterPanel_new.elvFind.EntityListView_Fill_Panel.SplitContainer1.SplitterPanel.fgMain.DblClick(84, 68);
}

function enterSamePacketsAndQtyLoose()
{
  let warehouseStockMovementWizardLayout = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1;
  let txtPackets = warehouseStockMovementWizardLayout.PT_WarehouseMovementWizard_Step1_TransactionNumberOfPackets.txtInner;
  txtPackets.SetText(packets);
  txtPackets.Keys("[Tab]");
  
  let txtQtyLoose = warehouseStockMovementWizardLayout.PT_WarehouseMovementWizard_Step1_TransactionQuantityLoose.txtInner;
  txtQtyLoose.SetText(qtyLoose);
  txtQtyLoose.Keys("[Tab]");
}

function clickTransferBtnFromWarehouseInventoryMovement()
{
  let aptify_Shell = Aliases.Aptify_Shell;
  aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_Active_Button_Transfer.Click(32, 8);
  let button = aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne;
  button.ClickButton();
}

function clickBtnFinishFromWarehouseInventoryMovement()
{
  let button = Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish;
  button.ClickButton();
}

function clickConfirmMovementsBtn()
{
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton5.ClickButton();
}

function selectProductToConfirmTransactions()
{
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_188.PTInventoryConfirmTransactions_Tabs_General.PTInventoryConfirmTransactions_Tabs_General_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(0,0);
}

function clickConfirmBtnToConfirmTransactions()
{
  
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_188.PTInventoryConfirmTransactions_Tabs_General.PTInventoryConfirmTransactions_Tabs_General_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(129, 15);
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
  
}

function clickBtnFinishConfirmTransactions()
{
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
}
 


//Supplier

Given("I enter a message {arg} in Order Reference", function (orderReference){
  
  let txtOrderReference = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySupplierOrders_Form.PTInventorySupplierOrders_Tabs.tabMain.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_OrderReference.txtInner;
  txtOrderReference.SetText(orderReference);
  supplierReference = orderReference;
});


Given("I select Currency Type {arg}", function selectCurrencyTypeSupplierOrder (currencyType){
  let ddCurrencyType = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySupplierOrders_Form.PTInventorySupplierOrders_Tabs.tabMain.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General_CurrencyTypeID.LookupSearchCombo;
  ddCurrencyType.ClickItem(currencyType);
});

Given("I select Requisitioner {arg}", function selectRequisitionerSupplierOrder(requisitioner){
  let ddRequistioner = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySupplierOrders_Form.PTInventorySupplierOrders_Tabs.tabMain.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General_RequisitionerRoleID.txtLink;
  ddRequistioner.SetText(requisitioner);
  ddRequistioner.Keys("[Tab]");
});

Given("I select Supplier {arg}", function selectSupplierInventorySupplierRecord (supplier){
  let ddSupplier = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySupplierOrders_Form.PTInventorySupplierOrders_Tabs.tabMain.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General_SupplierRoleID.txtLink;
  ddSupplier.SetText(supplier);
  ddSupplier.Keys("[Tab]");
  parSupplier = supplier;
});

Given("I check the checkbox Authorised", function checkAuthorisedCheckbox (){
  Aliases.Aptify_Shell.FormTemplateForm.PTInventorySupplierOrders_Form.PTInventorySupplierOrders_Tabs.tabMain.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General_IsAuthorised.chkInternal.wState = cbChecked;
});

Given("I select Authorised Date as Today\'s date", function (){
  let txtAuthorisedDate = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySupplierOrders_Form.PTInventorySupplierOrders_Tabs.tabMain.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General_AuthorisedDate.txtInner;
  txtAuthorisedDate.SetText(aqDateTime.Today());
});


Given("I enter a message {arg} in Comments textbox", function enterCommentsInventorySupplierOrder (comments){
  let txtComments = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySupplierOrders_Form.PTInventorySupplierOrders_Tabs.tabMain.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General_Comments.txtInner;
  txtComments.Keys(comments);
});

Given("I click on New button", function clickNewBtnSupplierOrder (){
 Aliases.Aptify_Shell.FormTemplateForm.PTInventorySupplierOrders_Form.PTInventorySupplierOrders_Tabs.tabMain.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General_Sub_Type_Control_1.zAptifyControlBase_Toolbars_Dock_Area_Top.ClickItem("SubType|New");
});

Given("I enter Product under Inventory supplier order items record {arg}", function enterProductInventorySupplierOrderItesms  (product){
  let ddProduct = Aliases.Aptify_Shell.SubTypeTemplateForm.PTInventorySupplierOrderItems_Form.PTInventorySupplierOrderItems_Tabs.tabMain.PTInventorySupplierOrderItems_Tabs_General.PTInventorySupplierOrderItems_Tabs_General.PTInventorySupplierOrderItems_Tabs_General_PTProductVersionControl_1.advancedLinkBoxProducts.txtLink;
  ddProduct.Click();
  ddProduct.SetText(product);
  parProduct = product;
  ddProduct.Keys("[Tab]");
  
  let radGridViewSupplierOrderItems = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1
  if(radGridViewSupplierOrderItems.Exists)
  {
    radGridViewSupplierOrderItems.DblClickCell(0, "Title");
  }
});

Given("I enter Order Qty {arg}", function enterQyInventorySupplierOrderItems  (orderQty){
  let txtOrderQty = Aliases.Aptify_Shell.SubTypeTemplateForm.PTInventorySupplierOrderItems_Form.PTInventorySupplierOrderItems_Tabs.tabMain.PTInventorySupplierOrderItems_Tabs_General.PTInventorySupplierOrderItems_Tabs_General.PTInventorySupplierOrderItems_OrderQuantity.txtInner;
  txtOrderQty.SetText(orderQty);
  txtOrderQty.Keys("[Tab]");
});

Given("I enter Packet Size {arg}", function enterSizeInventorySupplierOrderItems  (packetSize){
  let txtPacketSize = Aliases.Aptify_Shell.SubTypeTemplateForm.PTInventorySupplierOrderItems_Form.PTInventorySupplierOrderItems_Tabs.tabMain.PTInventorySupplierOrderItems_Tabs_General.PTInventorySupplierOrderItems_Tabs_General.PTInventorySupplierOrderItems_PackSize.txtInner;
  txtPacketSize.SetText(packetSize);
  txtPacketSize.Keys("[Tab]");
});

Given("I enter Advance Qty {arg}", function enterAdvanceQtyInventorySupplierOrderItems  (advanceQty){
  let txtAdvanceQty = Aliases.Aptify_Shell.SubTypeTemplateForm.PTInventorySupplierOrderItems_Form.PTInventorySupplierOrderItems_Tabs.tabMain.PTInventorySupplierOrderItems_Tabs_General.PTInventorySupplierOrderItems_Tabs_General.PTInventorySupplierOrderItems_AdvanceQuantity.txtInner;
  txtAdvanceQty.SetText(advanceQty);
  txtAdvanceQty.Keys("[Tab]");
});

Given("I enter Unit Cost {arg}", function enterUnitCostInventorySupplierOrderItems (unitCost){
  let txtUnitCost = Aliases.Aptify_Shell.SubTypeTemplateForm.PTInventorySupplierOrderItems_Form.PTInventorySupplierOrderItems_Tabs.tabMain.PTInventorySupplierOrderItems_Tabs_General.PTInventorySupplierOrderItems_Tabs_General.PTInventorySupplierOrderItems_Tabs_General_UnitCost.txtInner;
  txtUnitCost.SetText(unitCost);
  txtUnitCost.Keys("[Tab]");
});



Given("I enter Reference", function (){
  let txtReference = Aliases.Aptify_Shell.SubTypeTemplateForm.PTInventorySupplierOrderItems_Form.PTInventorySupplierOrderItems_Tabs.tabMain.PTInventorySupplierOrderItems_Tabs_General.PTInventorySupplierOrderItems_Tabs_General.PTInventorySupplierOrderItems_Reference.txtInner;
  txtReference.Click();
  txtReference.SetText(supplierReference);
});

Given("I enter a message in comments {arg}", function enterCommentsInventorySupplierOrderItems (orderItemComments){
  let txtOrderItemComments = Aliases.Aptify_Shell.SubTypeTemplateForm.PTInventorySupplierOrderItems_Form.PTInventorySupplierOrderItems_Tabs.tabMain.PTInventorySupplierOrderItems_Tabs_General.PTInventorySupplierOrderItems_Tabs_General.PTInventorySupplierOrderItems_Tabs_General_Comments.txtInner;
  txtOrderItemComments.Click();
  txtOrderItemComments.Keys(orderItemComments);
});

Given("I click on Ok Button", function clickOkBtnInventorySupplierOrderItems (){
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
});

Given("I click on Save record and Close Form icon", function clickSaveAndCloseSupplierOrder (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
});






Then("Under Supplier Orders tab Supplier and Reference should be displayed", function checkpointSupplierOrderRef (){
  
  let radGridViewSupplierTabProdInfoPanel = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_SupplierOrders.PTProducts_OTC_Inventory_SupplierOrders.PTProducts_OTC_Inventory_SupplierOrders_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let rowCount = radGridViewSupplierTabProdInfoPanel.wRowCount;
  let clmSupplier = radGridViewSupplierTabProdInfoPanel.wValue(rowCount-1,1).OleValue;
  let clmReference = radGridViewSupplierTabProdInfoPanel.wValue(rowCount-1,4).OleValue;
 
  if(aqObject.CompareProperty(parSupplier, cmpEqual,clmSupplier, true,3))
  {
    Log.Checkpoint("Supplier Name is display")
  }
  else{
  Log.Error("Supplier Name is not display");
  }
  
  if(aqObject.CompareProperty(supplierReference, cmpEqual,clmReference, true,3))
  {
    Log.Checkpoint("Reference is display")
  }
  else{
  Log.Error("Reference is not display");
  
  }
  
});

Given("I check Authorisation Required checkbox", function checkAuthorisationRequiredCheckbox (){
  Aliases.Aptify_Shell.FormTemplateForm.PTInventorySupplierOrders_Form.PTInventorySupplierOrders_Tabs.tabMain.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General_IsAuthorisationRequired.chkInternal.wState = cbChecked;
});




Then("window should be closed without any errors", function checkpointWindowClose (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.tbarNavigationBar, "WndCaption", cmpEqual, "UltraNavigationBar1");
});

Then("I click on Find Product from Inventory folder list", function clickFindProductInventoryFolderList (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.ClickButton();
});

Then("I search for the product and open product id wizard", function searchProductSupplierOrder (){
  let splitContainer = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1;
  let textBox = splitContainer.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  textBox.Click();
  textBox.SetText(parProduct);
  splitContainer.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  let radGridViewInventoryProductSearch = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.Exists;
  
  if(radGridViewInventoryProductSearch.Exists)
  {
    radGridViewInventoryProductSearch.DblClickCell(0, "Title");
  }
});

Then("I click on Inventory from Product Information Panel", function clickInventoryProdInfoPanel (){
   Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
});



Then("I select recent transaction with the help of reference", function selectRecentTransactionWithRef (){
  let rowcountRecentTransaction = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_SupplierOrders.PTProducts_OTC_Inventory_SupplierOrders.PTProducts_OTC_Inventory_SupplierOrders_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wRowCount;
  
  for(let i=0;i<rowcountRecentTransaction;i++)
  {
    let clmReference = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_SupplierOrders.PTProducts_OTC_Inventory_SupplierOrders.PTProducts_OTC_Inventory_SupplierOrders_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(i,"Reference").OleValue;
    if(refDeliveryReceipts == clmReference )
    {
      Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_SupplierOrders.PTProducts_OTC_Inventory_SupplierOrders.PTProducts_OTC_Inventory_SupplierOrders_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(i,"Reference")
      Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_SupplierOrders.PTProducts_OTC_Inventory_SupplierOrders.PTProducts_OTC_Inventory_SupplierOrders_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.Expand(i);
      Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_SupplierOrders.PTProducts_OTC_Inventory_SupplierOrders.PTProducts_OTC_Inventory_SupplierOrders_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wChildView(i).DblClickCell(0, "Delivered Date");
    }
  }
  
});

Then("I click on Receipts tab", function clickReceiptsTab (){
  let tabReceipts = Aliases.Aptify_Shell.FormTemplateForm.PTInventoryDeliveries_Form.PTInventoryDeliveries_Tabs.tabMain;
  tabReceipts.ClickTab("Receipts");
});

Then("I click on Suppliers Orders tab from Product Information Panel", function clickSuppliersTabProdInfoPanel (){
  let tabSupplierOrder = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain;
  tabSupplierOrder.ClickTab("Supplier Orders");
});






When("I click on Inventory Movements", function clickInventoryMovementsBtn(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton4.ClickButton();
});

When("I select a site {arg}", function selectSite(site){
 var ddSite = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_SiteID.LookupSearchCombo;
 
 ddSite.Click();
 ddSite.ClickItem(site);
 ddSite.Keys("[Tab]");
});


When("I enter a comment {arg}", function enterComment(comment){
  let txtComment = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_Comments.txtInner;
  
  txtComment.Click();
  txtComment.SetText(comment);
});

When("I enter number of Packets {arg}", function enterPackets(packetsPar){
  let txtPackets = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_TransactionNumberOfPackets.txtInner;
  
  txtPackets.Click();
  txtPackets.SetText(packetsPar);
  packets =  packetsPar;
  txtPackets.Keys("[Tab]");
});

When("I click on Transfer", function clickTransfer(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_Active_Button_Transfer.Click();
});

Then("I click on Ok button for the message", function (){
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
});

Then("I click Finish to close Warehouse Inventory Movement window", function clickFinishGenericWizardForm(){
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
});

Then("Site {arg} should be listed with location selected in Inventory History", function verifyInventoryHistoryTab(site){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventoryHistory.PTProducts_OTC_Inventory_InventoryHistory.PTProducts_OTC_Inventory_InventoryHistory_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  let siteDisplayed = radGridView.wValue(0, 2).OleValue;
  let locationDisplayed = radGridView.wValue(0, 3).OleValue;

  if( (aqObject.CompareProperty(siteDisplayed, cmpEqual, site, true, 3)) && (aqObject.CompareProperty(locationDisplayed, cmpEqual, toLocation, true, 3)) ){
    Log.Checkpoint("Site and Location displayed is correct");
   }
  else{
    Log.Error("Site and Location displayed is incorrect");
   }
});


When("I select a To location {arg}", function selectToLocation(toLocationPar){
  let ddToLocation = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_LinkedLocationItemID.txtLink;
  
  ddToLocation.Click();
  ddToLocation.SetText(toLocationPar);
  toLocation = toLocationPar;
  ddToLocation.Keys("[Tab]");
});

When("I select a valid product {arg}", function selectValidProduct(productPar){
  let ddProduct = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_PTProductVersionControl_1.advancedLinkBoxProducts.txtLink;
  ddProduct.Click();
  ddProduct.SetText(productPar);
  ddProduct.Keys("[Tab]");
  productName = productPar;
  
  handleProductsGrid();
});

function enterSearchText(productName){
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText(productName);
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

function clickFindProductBtn(){
   Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.Click();
}

function clickInventoryTab(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
}

function clickInventory(){
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea1.DockableWindow1.aptifyTree.tvwMain.DblClickItem("advance> Home|Inventory");
}

When("I select version of product {arg}", function selectVersion(version){
  let ddVersion = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_PTProductVersionControl_1.lookupSearchBoxProductVersions.LookupSearchCombo;

  ddVersion.Click();
  ddVersion.ClickItem(version);
  ddVersion.Keys("[Tab]");
});

Then("I open product information panel from Inventory", function openProductInformation(){
  clickFindProductBtn();
  enterSearchText(productName);
  clickSearchBtn();
  handleProductsGrid();
  clickInventoryTab(); 
});


Then("I click on Inventory History subtab", function clickInventoryHistoryTab(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.ClickTab("Inventory History");
});

When("I select a From location {arg}", function selectFromLocation(fromLocationPar){
  let fromLocations = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = fromLocations.wRowCount;
  let i =0;
  for (i; i<records; i++)
  {
  let Location = fromLocations.wValue(i, 0).OleValue;  
  if(Location == fromLocationPar )
   {
    fromLocations.ClickRowIndicator(i);
    let locationDisplayed = fromLocations.wValue(i, 0).OleValue; 
    fromLocation = locationDisplayed;
    let sizeDisplayed = fromLocations.wValue(i, 5).OleValue;
    size = sizeDisplayed;
   }
  } 
});

When("I enter number of packets {arg} to transfer", function enterPacketsToTransfer(packetsPar){
   let txtPackets = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_TransactionNumberOfPackets.txtInner;
   
   txtPackets.Click();
   txtPackets.SetText(packetsPar);
   packets = packetsPar;
   txtPackets.Keys("[Tab]");
});

When("I enter number of loose products {arg} to transfer", function enterQtyLooseToTransfer(qtyLoosePar){
  let txtQtyLoose = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_TransactionQuantityLoose.txtInner;
  
  txtQtyLoose.Click();
  txtQtyLoose.SetText(qtyLoosePar);
  qtyLoose = qtyLoosePar;
  txtQtyLoose.Keys("[Tab]");
});

Then("confirmation message should pop up stating transferred quantity from Location1 to Location2", function verifyTransferredQuantity(){
 
  let totalQty = aqConvert.StrToInt((aqConvert.StrToInt(size*packets)) + (aqConvert.StrToInt(qtyLoose)));
  let messageBox = Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.txtMessage;
  let msg = aqObject.GetPropertyValue(messageBox, "text");
  
  let message1 = "Transferred quantity " ;
  
  let msgLooseQty = aqString.Insert( message1, totalQty, 21 );
  let concatFrom = aqString.Concat(msgLooseQty, " from ");
  let lenthQtyLoose = aqString.GetLength(concatFrom);
 
  let msgfromLocation = aqString.Insert( concatFrom, fromLocation, lenthQtyLoose);
  let concatTo = aqString.Concat(msgfromLocation, " to ");
  let lengthFromLocation = aqString.GetLength(concatTo);
  
  let msgDisplayed = aqString.Insert(concatTo, toLocation, lengthFromLocation);

  if(aqObject.CompareProperty(msgDisplayed, cmpEqual, msg, true, 3)){
    Log.Checkpoint("Confirmation message stating 'Quantity Transferred' is displayed");
     }
  else{
    Log.Error("Confirmation message stating 'Quantity Transferred' is not displayed");
	}
});


Given("I check the Empty Location Only checkbox", function checkEmptyLocationOnlyCheckbox(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_PT_Group_Box_2.PT_WarehouseStockManagerWizard_ToLevels.PT_WarehouseStockManagerWizard_ToLevels_EmptyLocationsOnly.chkInternal.wState = cbChecked;
});

Given("I select a Site {arg} to filter To locations", function selectSiteFilter(siteFilter){
  let ddSiteFilter = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_PT_Group_Box_2.PT_WarehouseStockManagerWizard_ToLevels.PT_WarehouseStockManagerWizard_ToLevels_SiteID.LookupSearchCombo;
  
  ddSiteFilter.Click();
  ddSiteFilter.ClickItem(siteFilter);
  ddSiteFilter.Keys("[Tab]");
});

Given("I select a Warehouse {arg} to filter To locations", function selectWarehouseFilter(warehouseFilter){
  let ddWarehouseFilter = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_PT_Group_Box_2.PT_WarehouseStockManagerWizard_ToLevels.PT_WarehouseStockManagerWizard_ToLevels_WarehouseID.LookupSearchCombo;
  
  ddWarehouseFilter.Click();
  ddWarehouseFilter.ClickItem(warehouseFilter);
  ddWarehouseFilter.Keys("[Tab]");
});

Given("I select a Location Type {arg} to filter To locations", function selectLocationFilter(locationFilter){
  let ddLocationFilter = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_PT_Group_Box_2.PT_WarehouseStockManagerWizard_ToLevels.PT_WarehouseStockManagerWizard_ToLevels_TypeID.LookupSearchCombo;
  
  ddLocationFilter.Click();
  ddLocationFilter.ClickItem(locationFilter);
  ddLocationFilter.Keys("[Tab]");
});

Given("I select a Section {arg} to filter To locations", function selectSectionFilter(sectionFilter){
  let ddSectionFilter = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_PT_Group_Box_2.PT_WarehouseStockManagerWizard_ToLevels.PT_WarehouseStockManagerWizard_ToLevels_SectionID.LookupSearchCombo;
  
  ddSectionFilter.Click();
  ddSectionFilter.ClickItem(sectionFilter);
  ddSectionFilter.Keys("[Tab]");
});

Given("I select a To location {arg}", function selectTransferToLocation(toLocationPar){
  let ddToLocation = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_LinkedLocationItemID.txtLink;
  
  ddToLocation.Click();
  ddToLocation.SetText(toLocationPar);
  toLocation = toLocationPar;
  ddToLocation.Keys("[Tab]");
});

Given("I enter a comment {arg}", function enterComments(comment){
  let txtComment = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_Comments.txtInner;
  
  txtComment.Click();
  txtComment.SetText(comment);
});


Given("I check the Existing Product Locations Only checkbox", function checkExistingProductLocationsOnly(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_PT_Group_Box_2.PT_WarehouseStockManagerWizard_ToLevels.PT_WarehouseStockManagerWizard_ToLevels_ExistingProductLocationsOnly.chkInternal.wState = cbChecked;
});


Then("I click Ok button for message stating Location has less inventory", function (){
  if(Aliases.Aptify_Shell.LocalizedMsgBox.Exists){
   Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
  }
});


Then("Total quantity should be updated in the Inventory History tab", function verifyTotalQty(){
  let totalQty = (size*packets) + aqConvert.StrToInt(qtyLoose);
  let totalQtyDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventoryHistory.PTProducts_OTC_Inventory_InventoryHistory.PTProducts_OTC_Inventory_InventoryHistory_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 6).OleValue
  
  if(aqObject.CompareProperty(totalQty, cmpEqual, totalQtyDisplayed, true, 3)){
    Log.Checkpoint("Total quantity of the product is updated");
     }
  else{
    Log.Error("Total quantity of the product is not updated");
	}
});

Given("I enter number of packets {arg} to transfer", function enterTransferPackets(packetsPar){
   let txtPackets = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_TransactionNumberOfPackets.txtInner;
   
   txtPackets.Click();
   txtPackets.SetText(packetsPar);
   packets = packetsPar;
   txtPackets.Keys("[Tab]");
});

Given("I enter number of loose products {arg} to transfer", function enterTransferLoose(qtyLoosePar){
  let txtQtyLoose = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_TransactionQuantityLoose.txtInner;
  
  txtQtyLoose.Click();
  txtQtyLoose.SetText(qtyLoosePar);
  qtyLoose = qtyLoosePar;
  txtQtyLoose.Keys("[Tab]");
});


When("I click on Inventory History Tab", function clickTabInventoryHistory(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.ClickTab("Inventory History");
});

When("I enter Version filter {arg}", function enterVersionFilter(versionPar){
   let ddVersion = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventoryHistory.PTProducts_OTC_Inventory_InventoryHistory.PTProducts_OTC_Inventory_InventoryHistory_VersionLinkID.LookupSearchCombo;

   ddVersion.Click();
   ddVersion.ClickItem(versionPar);
   ddVersion.Keys("[Tab]");
});

When("I enter Site filter {arg}", function enterSiteFilter(sitePar){
   let ddSite = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventoryHistory.PTProducts_OTC_Inventory_InventoryHistory.PTProducts_OTC_Inventory_InventoryHistory_Site.LookupSearchCombo;
  
   ddSite.Click();
   ddSite.ClickItem(sitePar);
   site = sitePar;
   ddSite.Keys("[Tab]");
});

Then("transactions with Site selected should be displayed", function (){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventoryHistory.PTProducts_OTC_Inventory_InventoryHistory.PTProducts_OTC_Inventory_InventoryHistory_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.RowCount;
        
  let i = 0;
  let successCount = 0;
  for (i; i<records; i++)
  {
   let siteDisplayed = radGridView.wValue(i, 2).OleValue;  
   if( aqObject.CompareProperty(siteDisplayed, cmpEqual, site, 3) )
    {
     successCount += 1;
    }
  }
  
  if(successCount == records){
   Log.Checkpoint("All transactions with the site selected are displayed");
  }
  else{
   Log.Error("All transactions with the site selected are not displayed");
  }
});

When("I click on Apply button to apply filters", function clickApply(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventoryHistory.PTProducts_OTC_Inventory_InventoryHistory.PTProducts_OTC_Inventory_InventoryHistory_ActiveButtonApply.Click();
});



When("I click on Confirm Movements", function clickConfirmMovements(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton5.Click();
});

When("I check the boxes associated with all the products in the list", function selectingAllProducts(){
  let radGridView = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_188.PTInventoryConfirmTransactions_Tabs_General.PTInventoryConfirmTransactions_Tabs_General_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  let i = 0;
  if(records > 0)
  {
   for (i; i<records; i++)
    {
     radGridView.ClickCell(i,0);
    }
  }
  else
  {
    Log.Checkpoint("No pending transactions found");
    Runner.Stop();
  }
});

When("I click on Confirm button", function clickConfirmBtn(){  
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_188.PTInventoryConfirmTransactions_Tabs_General.PTInventoryConfirmTransactions_Tabs_General_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(125, 17);
});

When("I click on Ok button to acknowledge the confirmation", function (){
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
});

Then("confirmed products should be cleared from the list", function verifyConfirmedProductList(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_188.PTInventoryConfirmTransactions_Tabs_General.PTInventoryConfirmTransactions_Tabs_General_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1, "wRowCount", cmpEqual, 0);
});

//When("I click on Finish button", function clickFinish(){
 // Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
//});

When("I enter Site\\/Warehouse {arg} in Search section", function enterSiteWarehouse(siteWarehouse){
  let ddSiteWarehouse =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_188.PTInventoryConfirmTransactions_Tabs_General.PTInventoryConfirmTransactions_Tabs_General_SiteWarehouseID.LookupSearchCombo;
  
  ddSiteWarehouse.Click();
  ddSiteWarehouse.ClickItem(siteWarehouse);
  ddSiteWarehouse.Keys("[Tab]");
});

When("I enter Product {arg} in Search section", function enterProduct(productPar){
  let txtProduct = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_188.PTInventoryConfirmTransactions_Tabs_General.PTInventoryConfirmTransactions_Tabs_General_PTProductVersionControl_1.advancedLinkBoxProducts.txtLink;
  txtProduct.Click();
  txtProduct.SetText(productPar);
  productName = productPar;
  txtProduct.Keys("[Tab]");
 
  handleProductsGrid(); 
});

When("I select Inc Returns checkbox", function checkIncReturnsCheckbox(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_188.PTInventoryConfirmTransactions_Tabs_General.PTInventoryConfirmTransactions_Tabs_General_IncludeReturns.chkInternal.wState = cbChecked;
});

When("I select Include Goods In checkbox", function checkIncludeGoodsInCheckbox(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_188.PTInventoryConfirmTransactions_Tabs_General.PTInventoryConfirmTransactions_Tabs_General_IncludeGoodsIn.chkInternal.wState = cbChecked;
});

When("I click on Search button from Inventory transactions", function clickSearch(){
  Delay(2000);
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_188.PTInventoryConfirmTransactions_Tabs_General.PTInventoryConfirmTransactions_Tabs_General_ActiveButtonSearch.Click();
});

When("I check the boxes associated with all the products to cancel pending transactions", function (){
  let radGridView = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_188.PTInventoryConfirmTransactions_Tabs_General.PTInventoryConfirmTransactions_Tabs_General_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  let i = 0;
  if(records > 0)
   {
   for (i; i<records; i++)
    {
     let productsDisplayed = radGridView.wValue(i, 3).OleValue;  
     if(productsDisplayed == productName)
     {
      radGridView.ClickCell(i,0);
     }
    } 
   }
  else{
    Log.Checkpoint("No pending transactions found");
    Runner.Stop();
  }
});

When("I click on Cancel button", function clickCancelBtn(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_188.PTInventoryConfirmTransactions_Tabs_General.PTInventoryConfirmTransactions_Tabs_General_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.DblClick(187, 14);
});

Then("cancelled products are cleared from the list", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_188.PTInventoryConfirmTransactions_Tabs_General.PTInventoryConfirmTransactions_Tabs_General_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1, "RowCount", cmpEqual, 0);
});

Then("cancelled product should be cleared from the list", function (){
  let radGridView = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_188.PTInventoryConfirmTransactions_Tabs_General.PTInventoryConfirmTransactions_Tabs_General_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  let i = 0;
  let successCount = 0 ;
  let failCount = 0;
 
  for (i; i<records; i++)
  {
    let productsDisplayed = radGridView.wValue(i, 3).OleValue;
    if (aqObject.CompareProperty(productsDisplayed, cmpNotEqual, productName, true, 3))
    {  
     successCount += 1;
    }
  }
  
  if(successCount == records){
   Log.Checkpoint("Cancelled products are cleared from the list");
  }
  else{
   Log.Error("Cancelled products are not cleared from the list");
  }
});

When("I enter Location {arg} in Search section", function enterLocation(location){
 let txtLocation =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_188.PTInventoryConfirmTransactions_Tabs_General.PTInventoryConfirmTransactions_Tabs_General_LocationID.LookupSearchCombo;

 txtLocation.Click();
 txtLocation.ClickItem(location);
});


When("I click on Returns", function clickReturns(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton6.ClickButton();
});

When("I select a Customer {arg}", function selectCustomer(customer){
  var txtCustomer = Aliases.Aptify_Shell.FormTemplateForm.PTInventoryGoodsInWizard_View.PTInventoryGoodsInWizard_ReturnTabs.tabMain.PTInventoryGoodsInWizard_ReturnTabs_General.PTInventoryGoodsInWizard_ReturnsStep.PTInventoryGoodsInWizard_ReturnsStep_CustomerRoleID.txtLink;

  txtCustomer.Click();
  txtCustomer.SetText(customer);
  txtCustomer.Keys("[Tab]");
});

When("I select a Product from Inventory returns {arg}", function selectProductToReturn(product){
  let txtProduct = Aliases.Aptify_Shell.FormTemplateForm.PTInventoryGoodsInWizard_View.PTInventoryGoodsInWizard_ReturnTabs.tabMain.PTInventoryGoodsInWizard_ReturnTabs_General.PTInventoryGoodsInWizard_ReturnsStep.PTInventoryGoodsInWizard_ReturnsStep_ProductID.txtLink;
  txtProduct.Click();
  txtProduct.SetText(product);
  txtProduct.Keys("[Tab]");
  
  handleProductsGrid();
});

When("I enter Qty loose {arg} to return", function enterReturnQty(qtyLoose){
  let txtQtyLoose = Aliases.Aptify_Shell.FormTemplateForm.PTInventoryGoodsInWizard_View.PTInventoryGoodsInWizard_ReturnTabs.tabMain.PTInventoryGoodsInWizard_ReturnTabs_General.PTInventoryGoodsInWizard_ReturnsStep.PTInventoryGoodsInWizard_ReturnsStep_GoodLoose.txtInner;
  
  txtQtyLoose.Click();
  txtQtyLoose.SetText(qtyLoose);
  txtQtyLoose.Keys("[Tab]");
});

When("I enter Received Date {arg}", function enterReceivedDate(date){
  let dateReceived = Aliases.Aptify_Shell.FormTemplateForm.PTInventoryGoodsInWizard_View.PTInventoryGoodsInWizard_ReturnTabs.tabMain.PTInventoryGoodsInWizard_ReturnTabs_General.PTInventoryGoodsInWizard_ReturnsStep.PTInventoryGoodsInWizard_ReturnsStep_ReceivedDate.txtInner;
  
  dateReceived.Click();
  dateReceived.SetText(date);
  dateReceived.Keys("[Tab]");
});


When("I enter a Comment {arg}", function enterReturnComment(comment){
   let txtComment = Aliases.Aptify_Shell.FormTemplateForm.PTInventoryGoodsInWizard_View.PTInventoryGoodsInWizard_ReturnTabs.tabMain.PTInventoryGoodsInWizard_ReturnTabs_General.PTInventoryGoodsInWizard_ReturnsStep.PTInventoryGoodsInWizard_ReturnsStep_Comments.txtInner;
   
   txtComment.Click();
   txtComment.SetText(comment);
   txtComment.Keys("[Tab]");
});

When("I select a Return Reason {arg}", function selectReturnReason(returnReason){
  let ddReturnReason = Aliases.Aptify_Shell.FormTemplateForm.PTInventoryGoodsInWizard_View.PTInventoryGoodsInWizard_ReturnTabs.tabMain.PTInventoryGoodsInWizard_ReturnTabs_General.PTInventoryGoodsInWizard_ReturnsStep.PTInventoryGoodsInWizard_ReturnsStep_ReturnReason.LookupSearchCombo;
  
  ddReturnReason.Click();
  ddReturnReason.ClickItem(returnReason);
  ddReturnReason.Keys("[Tab]");
});

When("I select a Waste Rsn {arg}", function selectWasteRsn(wasteReason){
  let ddWasteReason = Aliases.Aptify_Shell.FormTemplateForm.PTInventoryGoodsInWizard_View.PTInventoryGoodsInWizard_ReturnTabs.tabMain.PTInventoryGoodsInWizard_ReturnTabs_General.PTInventoryGoodsInWizard_ReturnsStep.PTInventoryGoodsInWizard_ReturnsStep_WasteReasonID.LookupSearchCombo;
  
  ddWasteReason.Click();
  ddWasteReason.ClickItem(wasteReason);
  ddWasteReason.Keys("[Tab]");
});

When("I click Add button", function clickAdd(){
  Aliases.Aptify_Shell.FormTemplateForm.PTInventoryGoodsInWizard_View.PTInventoryGoodsInWizard_ReturnTabs.tabMain.PTInventoryGoodsInWizard_ReturnTabs_General.PTInventoryGoodsInWizard_ReturnsStep.PTInventoryGoodsInWizard_ReturnsStep_Active_Button_Add.Click();
});

Then("reference number should be generated", function verifyReferenceNumber(){
  let codeReference = Aliases.Aptify_Shell.FormTemplateForm.PTInventoryGoodsInWizard_View.PTInventoryGoodsInWizard_ReturnTabs.tabMain.PTInventoryGoodsInWizard_ReturnTabs_General.PTInventoryGoodsInWizard_ReturnsStep.PTInventoryGoodsInWizard_ReturnsStep_Tabs.tabMain.PTInventoryGoodsInWizard_ReturnsProductRAN.PTInventoryGoodsInWizard_ReturnsProductRANTab.PTInventoryGoodsInWizard_ReturnsStep_ReturnedItems.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 0).OleValue;

  if(aqObject.CompareProperty(codeReference, cmpNotEqual, EmptyVariant, true, 3)){
    Log.Checkpoint("Reference number is generated");
     }
  else{
    Log.Error("Reference number is not generated");
	}
});

Then("I click Finish and Release button", function clickFinishAndRelease(){
  Aliases.Aptify_Shell.FormTemplateForm.PTInventoryGoodsInWizard_View.PTInventoryGoodsInWizard_ReturnTabs.tabMain.PTInventoryGoodsInWizard_ReturnTabs_General.PTInventoryGoodsInWizard_ReturnsStep.PTInventoryGoodsInWizard_ReturnsStep_CompleteButton.Click();
});

When("I select a Version {arg}", function selectReturnVersion(version){
  let ddVersion = Aliases.Aptify_Shell.FormTemplateForm.PTInventoryGoodsInWizard_View.PTInventoryGoodsInWizard_ReturnTabs.tabMain.PTInventoryGoodsInWizard_ReturnTabs_General.PTInventoryGoodsInWizard_ReturnsStep.PTInventoryGoodsInWizard_ReturnsStep_VersionLinkID.LookupSearchCombo;
  
  ddVersion.Click();
  ddVersion.ClickItem(version);
  ddVersion.Keys("[Tab]");
});

When("I enter Packets {arg} to return", function enterReturnPackets(packets){
  let txtPackets =  Aliases.Aptify_Shell.FormTemplateForm.PTInventoryGoodsInWizard_View.PTInventoryGoodsInWizard_ReturnTabs.tabMain.PTInventoryGoodsInWizard_ReturnTabs_General.PTInventoryGoodsInWizard_ReturnsStep.PTInventoryGoodsInWizard_ReturnsStep_GoodPackets.txtInner;
  
  txtPackets.Click();
  txtPackets.SetText(packets);
  txtPackets.Keys("[Tab]");
});

When("I enter Size {arg} of packets", function enterReturnSize(size){
  let txtSize = Aliases.Aptify_Shell.FormTemplateForm.PTInventoryGoodsInWizard_View.PTInventoryGoodsInWizard_ReturnTabs.tabMain.PTInventoryGoodsInWizard_ReturnTabs_General.PTInventoryGoodsInWizard_ReturnsStep.PTInventoryGoodsInWizard_ReturnsStep_PacketSize.txtInner;
  
  txtSize.Click();
  txtSize.SetText(size);
});


Given("I click on Inventory Transaction Types", function clickInventoryTransactionTypes(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.EntityBrowser.EntityBrowser_Fill_Panel.SplitContainer1.SplitterPanel.lvwMain.DblClickItem("Inventory Transaction Types", 0);
});

Given("I click on Inventory Return", function clickInventoryReturn(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerAliases.Aptify_Shell.AptifyShellForm.pnlDisplay.previewSplitContainer.SplitterAliases.Aptify_Shell.AptifyShellForm.pnlDisplay.Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay4CaptionAndGrid.radGridView1.DblClickCell(8, "Description");
});

Then("Code as {arg}, Description as {arg}, Short Description as {arg} should be displayed", function verifyCodeDescription(code, description, shortDescription){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTLookupInventoryTransactionTypes_Form.PTLookupInventoryTransactionTypes_Tabs.tabMain.PTLookupInventoryTransactionTypes_Tabs_General.PTLookupInventoryTransactionTypes_Tabs_General.PTLookupInventoryTransactionTypes_Code.txtInner, "Value", cmpEqual, code);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTLookupInventoryTransactionTypes_Form.PTLookupInventoryTransactionTypes_Tabs.tabMain.PTLookupInventoryTransactionTypes_Tabs_General.PTLookupInventoryTransactionTypes_Tabs_General.PTLookupInventoryTransactionTypes_Description.txtInner, "Value", cmpEqual, description);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTLookupInventoryTransactionTypes_Form.PTLookupInventoryTransactionTypes_Tabs.tabMain.PTLookupInventoryTransactionTypes_Tabs_General.PTLookupInventoryTransactionTypes_Tabs_General.PTLookupInventoryTransactionTypes_ShortDescription.txtInner, "Value", cmpEqual, shortDescription);
});

Then("Return checkbox should be checked in Settings section", function verifyReturnsCheckbox(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTLookupInventoryTransactionTypes_Form.PTLookupInventoryTransactionTypes_Tabs.tabMain.PTLookupInventoryTransactionTypes_Tabs_General.PTLookupInventoryTransactionTypes_Tabs_General.PTLookupInventoryTransactionTypes_IsReturn.chkInternal, "Checked", cmpEqual, true);
});

Then("Credit Disposal Type as {arg} and Unknown Return Product as {arg} should be displayed", function veriyCreditDisposalTypeReturnProd(creditDisposalType, returnProd){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTLookupInventoryTransactionTypes_Form.PTLookupInventoryTransactionTypes_Tabs.tabMain.PTLookupInventoryTransactionTypes_Tabs_General.PTLookupInventoryTransactionTypes_Tabs_General.PTLookupInventoryTransactionTypes_Tabs_General_UnknownReturnProductID.txtLink, "Text", cmpEqual, returnProd);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTLookupInventoryTransactionTypes_Form.PTLookupInventoryTransactionTypes_Tabs.tabMain.PTLookupInventoryTransactionTypes_Tabs_General.PTLookupInventoryTransactionTypes_Tabs_General.PTLookupInventoryTransactionTypes_Tabs_General_CreditDisposalTypeID.LookupSearchCombo, "Text", cmpEqual, creditDisposalType);
});

Then("Reference Allocation Type as {arg}, Range Prefix as {arg} should be displayed", function verifyReferenceAllocationTypeRangePrefix(referenceAllocationType, rangePrefix){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTLookupInventoryTransactionTypes_Form.PTLookupInventoryTransactionTypes_Tabs.tabMain.PTLookupInventoryTransactionTypes_Tabs_General.PTLookupInventoryTransactionTypes_Tabs_General.PTLookupInventoryTransactionTypes_Tabs_General_CodeAllocationID.LookupSearchCombo, "Text", cmpEqual, referenceAllocationType);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTLookupInventoryTransactionTypes_Form.PTLookupInventoryTransactionTypes_Tabs.tabMain.PTLookupInventoryTransactionTypes_Tabs_General.PTLookupInventoryTransactionTypes_Tabs_General.PTLookupInventoryTransactionTypes_Tabs_General_RangePrefix.txtInner, "Value", cmpEqual, rangePrefix);
});

Then("Next in Range and Automatic Transaction Text as {arg} should be displayed", function verifyAutomaticTransactionText_NextInRange(automaticTransactionText){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTLookupInventoryTransactionTypes_Form.PTLookupInventoryTransactionTypes_Tabs.tabMain.PTLookupInventoryTransactionTypes_Tabs_General.PTLookupInventoryTransactionTypes_Tabs_General.PTLookupInventoryTransactionTypes_Tabs_General_NextInRange.txtInner, "Value", cmpNotEqual, EmptyVariant);
  
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTLookupInventoryTransactionTypes_Form.PTLookupInventoryTransactionTypes_Tabs.tabMain.PTLookupInventoryTransactionTypes_Tabs_General.PTLookupInventoryTransactionTypes_Tabs_General.PTLookupInventoryTransactionTypes_AutoTransactionText.txtInner, "Value", cmpEqual, automaticTransactionText);
});

Then("History of Inventory Transactions Types window should be displayed with Date Updated, Who Updated, Changes columns", function verifyHistoryInventoryTransactionsTypesWindow(){
 let dateUpdated = Aliases.Aptify_Shell.EntityRecordHistoryForm.ugHistory.wColumn(0);
 let whoUpdated = Aliases.Aptify_Shell.EntityRecordHistoryForm.ugHistory.wColumn(1);
 let changesMade = Aliases.Aptify_Shell.EntityRecordHistoryForm.ugHistory.wColumn(2);

 if( (aqObject.CompareProperty(dateUpdated, cmpEqual, "Date Updated", true, 3)) && (aqObject.CompareProperty(whoUpdated, cmpEqual, "Who Updated", true, 3)) && (aqObject.CompareProperty(changesMade, cmpEqual, "Changes", true, 3)) ){
    Log.Checkpoint("History of Inventory Transactions Types window is displayed with Date Updated, Who Updated, Changes columns");
   }
  else{
    Log.Error("History of Inventory Transactions Types window is displayed with Date Updated, Who Updated, Changes columns");
   }  
});

Then("I click on Close button", function clickClose(){
  Aliases.Aptify_Shell.EntityRecordHistoryForm.cmdClose.ClickButton();
});

Then("I click on Close this Form button", function clickCloseForm(){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Close this Form");
});

Given("I click on Returns Authorisation Reasons", function clickReturnsAuthorisationReasons(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.EntityBrowser.EntityBrowser_Fill_Panel.SplitContainer1.SplitterPanel.lvwMain.DblClickItem("Returns Authorisation Reason", 0);
});


Given("I click on Refusal Reasons", function clickRefusalReasons(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.EntityBrowser.EntityBrowser_Fill_Panel.SplitContainer1.SplitterPanel.lvwMain.DblClickItem("Refusal Reasons", 0);
});

Given("I click on a Reason", function clickAReason(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerAliases.Aptify_Shell.AptifyShellForm.pnlDisplay.previewSplitContainer.SplitterAliases.Aptify_Shell.AptifyShellForm.pnlDisplay.Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay4CaptionAndGrid.radGridView1.DblClickCell(0, "Description");
});

Then("ID, Code, Description, Return Days and Cancelled Reason should be displayed", function verifyReturnReason(){
  let windowTitle =  aqObject.GetPropertyValue(Aliases.Aptify_Shell.FormTemplateForm , "WndCaption");
  let productId = ( aqString.SubString(windowTitle, 28, 3) );  
  
  if(aqObject.CompareProperty(productId, cmpNotEqual, 0, true, 3)){
    Log.Checkpoint("ID is displayed");
     }
  else{
    Log.Error("ID is not displayed");
	}
  
  let formReturnReason = Aliases.Aptify_Shell.FormTemplateForm.PTLookupInventoryReturnReason_Form.PTLookupInventoryReturnReason_Tabs.tabMain.PTLookupInventoryReturnReason_Tabs_General.PTLookupInventoryReturnReason_Tabs_General;
  aqObject.CheckProperty(formReturnReason.PTLookupInventoryReturnReason_Code.lblInner, "Text", cmpEqual, "Code");
  aqObject.CheckProperty(formReturnReason.PTLookupInventoryReturnReason_Description.lblInner, "Text", cmpEqual, "Description");
  aqObject.CheckProperty(formReturnReason.PTLookupInventoryReturnReason_ReturnDays.lblInner, "Text", cmpEqual, "Return Days");
  aqObject.CheckProperty(formReturnReason.PTLookupInventoryReturnReason_Tabs_General_Cancelledreason.comboLinkLabel, "Text", cmpEqual, "Cancelled Reason");
});

Then("Check box associated to Waste should be unchecked", function verifyWasteCheckbox(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTLookupInventoryDisposalTypes_Form.PTLookupInventoryDisposalTypes_Tabs.tabMain.PTLookupInventoryDisposalTypes_Tabs_General.PTLookupInventoryDisposalTypes_Tabs_General.PTLookupInventoryDisposalTypes_IsWaste.chkInternal, "Checked", cmpEqual, false);
});

Given("I click on Inventory Disposal Types", function clickInventoryDisposalTypes(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.EntityBrowser.EntityBrowser_Fill_Panel.SplitContainer1.SplitterPanel.lvwMain.DblClickItem("Inventory Disposal Types", 0);
});

Given("I click on Return to Customer", function clickReturnToCustomer(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerAliases.Aptify_Shell.AptifyShellForm.pnlDisplay.previewSplitContainer.SplitterAliases.Aptify_Shell.AptifyShellForm.pnlDisplay.Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay4CaptionAndGrid.radGridView1.DblClickCell(14, "Description");
});

Then("Code as {arg}, Description as {arg}, View Sequence as {arg} should be displayed", function (code, description, viewSeq){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTLookupInventoryDisposalTypes_Form.PTLookupInventoryDisposalTypes_Tabs.tabMain.PTLookupInventoryDisposalTypes_Tabs_General.PTLookupInventoryDisposalTypes_Tabs_General.PTLookupInventoryDisposalTypes_Code.txtInner, "Value", cmpEqual, "RTC");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTLookupInventoryDisposalTypes_Form.PTLookupInventoryDisposalTypes_Tabs.tabMain.PTLookupInventoryDisposalTypes_Tabs_General.PTLookupInventoryDisposalTypes_Tabs_General.PTLookupInventoryDisposalTypes_Description.txtInner, "Value", cmpEqual, "Returned to Customer");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTLookupInventoryDisposalTypes_Form.PTLookupInventoryDisposalTypes_Tabs.tabMain.PTLookupInventoryDisposalTypes_Tabs_General.PTLookupInventoryDisposalTypes_Tabs_General.PTLookupInventoryDisposalTypes_ViewSequence.txtInner, "Value", cmpEqual, "15");
});

Given("I click on Inventory Return Reason", function clickInventoryReturnReason(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.EntityBrowser.EntityBrowser_Fill_Panel.SplitContainer1.SplitterPanel.lvwMain.DblClickItem("Inventory Return Reason", 0);
});

Given("I click on a Return Reason", function clickOnReturnReason(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerAliases.Aptify_Shell.AptifyShellForm.pnlDisplay.previewSplitContainer.SplitterAliases.Aptify_Shell.AptifyShellForm.pnlDisplay.Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay4CaptionAndGrid.radGridView1.DblClickCell(0, "Description");
});


Then("Internal Code should have same numeric code as the Code", function verifyInternalCode(){
   let codeValue =  aqObject.GetPropertyValue(Aliases.Aptify_Shell.FormTemplateForm.PTLookupRefusalReasons_Form.PTLookupRefusalReasons_Tabs.tabMain.PTLookupRefusalReasons_Tabs_General.PTLookupRefusalReasons_Tabs_General.PTLookupRefusalReasons_Code.txtInner , "text");
   let code = ( aqString.SubString(codeValue, 1, 2) );  
  
   let internalCodeValue =  aqObject.GetPropertyValue(Aliases.Aptify_Shell.FormTemplateForm.PTLookupRefusalReasons_Form.PTLookupRefusalReasons_Tabs.tabMain.PTLookupRefusalReasons_Tabs_General.PTLookupRefusalReasons_Tabs_General.PTLookupRefusalReasons_InternalCode.txtInner , "text");
   let internalCode = ( aqString.SubString(internalCodeValue, 1, 2) );
   
   if(aqObject.CompareProperty(code, cmpEqual,internalCode, true, 3)){
    Log.Checkpoint("Internal Code has same numeric value as the Code");
   }
   else{
    Log.Error("Internal Code does not have same numeric value as the Code");
	 }
});

Then("Internal Code should be prefixed with {arg} and Code with {arg}", function (internalCodePrefixPar, codePrefixPar){
   let codeValue =  aqObject.GetPropertyValue(Aliases.Aptify_Shell.FormTemplateForm.PTLookupRefusalReasons_Form.PTLookupRefusalReasons_Tabs.tabMain.PTLookupRefusalReasons_Tabs_General.PTLookupRefusalReasons_Tabs_General.PTLookupRefusalReasons_Code.txtInner , "text");
   let codePrefix = ( aqString.SubString(codeValue, 0, 1) );  
  
   let internalCodeValue =  aqObject.GetPropertyValue(Aliases.Aptify_Shell.FormTemplateForm.PTLookupRefusalReasons_Form.PTLookupRefusalReasons_Tabs.tabMain.PTLookupRefusalReasons_Tabs_General.PTLookupRefusalReasons_Tabs_General.PTLookupRefusalReasons_InternalCode.txtInner , "text");
   let internalCodePrefix = ( aqString.SubString(internalCodeValue, 0, 1) );
   
   if( (aqObject.CompareProperty(codePrefix, cmpEqual, codePrefixPar, true,3)) && (aqObject.CompareProperty(internalCodePrefix, cmpEqual, internalCodePrefixPar, true,3)) ){
    Log.Checkpoint("Internal Code and Code prefixes are correct");
   }
  else{
    Log.Error("Internal Code and Code prefixes are incorrect");
   }
});

Given("I click on View Record History button", function clickViewRecordHistoryBtn(){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|View Record History");
});

Given("I click on All Inventory Transactions Types view", function clickAllInventorTransactionsTypesView(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.enbBrowser.EntityBrowser_Fill_Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.SplitContainer1.SplitterAliases.Aptify_Shell.AptifyShellForm.pnlDisplay.lvwMain.DblClickItem("All Inventory Transaction Types", 0);
});

Given("I click on {arg}", function (reasonPar){
  let gridReasons =  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1
  let records = gridReasons.wRowCount;
  let i =0;
  for (i; i<records; i++)
  {
   let reason = gridReasons.wValue(i, 2).OleValue;  
   if(reason == reasonPar)
    {
     gridReasons.DblClickCell(i, 2);
    }
  } 
});

Given("I click on {arg} view", function openView(view){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.viewContainer.enbBrowser.EntityBrowser_Fill_Panel.SplitContainer1.SplitterPanel.lvwMain.DblClickItem(view);
});


Then("I click on View Record History button", function clickBtnViewRecordHistory(){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|View Record History");
});

   
When("I select a Site\\/Warehouse {arg}", function (siteWarehouse){
  let ddSiteWarehouse = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_417.PTInventoryGoodsInWizard_NewStep1.PTInventoryGoodsInWizard_NewStep1_SiteWarehouseID.LookupSearchCombo;
  
  ddSiteWarehouse.Click();
  ddSiteWarehouse.ClickItem(siteWarehouse);
  ddSiteWarehouse.Keys("[Tab]");
});

When("I select a before date {arg} from Received Date", function selectBeforeDate(receivedDate){
  let txtReceivedDate = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_417.PTInventoryGoodsInWizard_NewStep1.PTInventoryGoodsInWizard_NewStep1_ReceivedDate.txtInner;
  
  txtReceivedDate.Click();
  txtReceivedDate.SetText(receivedDate);
});


When("I click on Main Market Edition under product version with reference STOCK {arg}\\/{arg}\\/{arg}", function (param1, param2, param3){
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_PTPairedGrids_1.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.ClickCell(1, 0);
});

When("I enter Size {arg}", function enterSize(sizePar){
  let txtSize = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_PacketSize.txtInner;
   
  txtSize.Click();
  txtSize.Clear();
  txtSize.Keys(sizePar);
  size = sizePar;
  txtSize.Keys("[Tab]");
    if(Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.Exists){
    let msg = Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.txtMessage.get_Text();
    var currentSize =  aqString.SubString(msg, 67, 10);  
    Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
  }
  
  txtSize.Click();
  if( Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.Exists){  
    Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
      txtSize.Keys(currentSize);
      size = currentSize;
      txtSize.Keys("[Tab]");
  }

});

When("I enter number of packets to adjust inventory balance {arg}", function enterPacketsToAdjust(packetsPar){
  let txtPackets = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_Packets.txtInner;
 
  txtPackets.Click();
  txtPackets.SetText(packetsPar);
  packets = packetsPar;  
});

When("I enter Unit Weight {arg}", function enterUnitWeight(unitWeight){
  let txtUnitWeight = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_UnitWeightValue.txtInner;
 
  txtUnitWeight.Click();
  txtUnitWeight.SetText(unitWeight);
});


//When("I click on Add button", function clickAddBtn(){
  //Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_Active_Button_Add.Click();
//});

When("I click on Ok button for message stating Inventory exists elsewhere in a different packet size", function (){
  if(Aliases.Aptify_Shell.MessageBox.Exists){
  Aliases.Aptify_Shell.MessageBox.UltraGroupBox1.cmdOK.ClickButton();
  }
});


When("I click on Inventory Adjustment button", function clickInventoryAdjustmentButton(){
  Delay(2000);
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(209, 19);
  Delay(2000);
});

When("I click on Apply button", function clickApplyAdjustments(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_235.PTInventoryAdjustmentWizard_Step_AdjustQuantities.PTInventoryAdjustmentWizard_Step_AdjustQuantities_Active_Button_Apply.Click();
   
});

Then("message should pop-up with Balance, Size, Packets, Loose updated successfully", function (){
  let msgInventoryAdjustment = Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.txtMessage;
  let msgDisplayed = aqObject.GetPropertyValue(msgInventoryAdjustment, "text");

  let packets =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_235.PTInventoryAdjustmentWizard_Step_AdjustQuantities.PTInventoryAdjustmentWizard_Step_AdjustQuantities_PacketsBefore.txtInner;
  let loose = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_235.PTInventoryAdjustmentWizard_Step_AdjustQuantities.PTInventoryAdjustmentWizard_Step_AdjustQuantities_LooseBefore.txtInner;
  
   let beforePackets = aqObject.GetPropertyValue(packets , "text");
   let beforeLoose = aqObject.GetPropertyValue(loose , "text");
   
  let message1 = "Balance=" ;
  
  let msgBalance = aqString.Insert( message1, ((size*beforePackets)+ aqConvert.StrToInt(beforeLoose) ) , 8 );
  let concatSize = aqString.Concat(msgBalance, ",Packetsize=");
  let lenthPacketSize = aqString.GetLength(concatSize);
 
  let msgPacketSize = aqString.Insert(concatSize, size, lenthPacketSize);
  let concatPackets = aqString.Concat(msgPacketSize, ",Packets=");
  let lenthPackets = aqString.GetLength(concatPackets);
  
  let msgPackets = aqString.Insert(concatPackets, beforePackets, lenthPackets);
  let concatLoose = aqString.Concat(msgPackets, ",Loose=");
  let lenthLoose = aqString.GetLength(concatLoose);
  
  let msgLoose = aqString.Insert(concatLoose, beforeLoose, lenthLoose);
  var concatAdjusted = aqString.Concat(msgLoose, " adjusted successfully");

  if(aqObject.CompareProperty(msgDisplayed, cmpEqual, concatAdjusted, true, 3)){
    Log.Checkpoint("Message stating 'Balance, Size, Packets, Loose updated successfully' is correct");
     }
  else{
    Log.Error("Message stating 'Balance, Size, Packets, Loose updated successfully' is incorrect");
	}
});


Then("I click Ok button for message stating Inventory adjusted successfully", function (){
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
  
});

When("I select a product {arg} in Received section", function (productPar){
  let txtProduct =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_ProductID.txtLink;
  let gridProducts = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let formSearch = Aliases.Aptify_Shell.SearchForm;
   txtProduct.Click();
   txtProduct.Keys(productPar);
   productName = productPar;
   txtProduct.Keys("[Tab]");
    if( formSearch.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   } 
});

When("I enter the product to adjust inventory balance", function enterProductToAdjust(){
  let txtProduct = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_235.PTInventoryAdjustmentWizard_Step_AdjustQuantities.PTInventoryAdjustmentWizard_Step_AdjustQuantities_PT_ProductVersionControl_1.advancedLinkBoxProducts.txtLink;
  
  txtProduct.Clear();
 // txtProduct.SetText(productName);
  txtProduct.Keys("[Tab]");
});

Then("I click on Finish button for Inventory Adjustment", function clickFinishInventoryAdjustment(){
  Delay(5000);
  Sys.Process("Aptify Shell").WinFormsObject("GenericWizardForm").WinFormsObject("WizMain").WinFormsObject("btnFinish").Click();  
});

When("I select the product to adjust inventory balance", function selectProductToAdjustBalance(){
  let gridStockManager = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  var i = 0;
  for(i;i<gridStockManager.wRowCount;i++){
   var productDisplayed = gridStockManager.wValue(i, 2).OleValue;
   if(productName == productDisplayed)
   {
    gridStockManager.ClickCell(i, 0);
    break;
   }
  }  
});

When("I enter a random Size", function enterRandomSize(){
  let txtSize = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_235.PTInventoryAdjustmentWizard_Step_AdjustQuantities.PTInventoryAdjustmentWizard_Step_AdjustQuantities_PacketSize.txtInner;
  
  let sizeBefore = txtSize.get_Text();
  txtSize.Click();
  txtSize.Clear();
  txtSize.SetText(aqConvert.StrToInt(sizeBefore) + 1);
  size = (aqConvert.StrToInt(sizeBefore) + 1);
  txtSize.Keys("[Tab]");
});

When("I click on Main Market Edition under product version with reference {arg}", function (referencePar){
  let gridSuppliers = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_PTPairedGrids_1.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = gridSuppliers.wRowCount;
  let i =0;
  for (i; i<records; i++)
   {
    let reference = gridSuppliers.wValue(i, 4).OleValue;  
    if(reference == referencePar )
    {
     gridSuppliers.ClickCell(i, 0);
      if(Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.Exists){  
         Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
       }
    }
  } 
});

When("I click on Next", function clickNext(){
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnNext.ClickButton();
});

When("I enter number of loose packets {arg}", function enterLooseQty(qtyLoosePar){
  let txtQtyLoose = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_LooseQty.txtInner;
  
  txtQtyLoose.Click();
  txtQtyLoose.SetText(qtyLoosePar);
  qtyLoose = qtyLoosePar;
  txtQtyLoose.Keys("[Tab]");
});


Then("product should be updated with Available quantity in the Inventory Sites tab", function (){
  let newAvailableQtyDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 3).OleValue;
 
  if(aqObject.CompareProperty(newAvailableQtyDisplayed, cmpGreater, availableQty, 3)){
    Log.Checkpoint("Available quantity is updated");
     }
  else{
    Log.Error("Available quantity is not updated");
	}
});


 
When("I click Find Product", function clickFindProduct(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.Click();  
});

When("I open product information panel for {arg}", function (productNamePar){
  enterSearchText(productNamePar);
  clickSearchBtn();
  handleProductsGrid();
  handleSearchForm();
});


function handleSearchForm(){
  if( Aliases.Aptify_Shell.SearchForm.Exists )
   {
    Aliases.Aptify_Shell.SearchForm.Close();
   }  
}

When("I click on Inventory tab", function clickTabInventory(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
});

When("I retrieve the Available quantity", function (){
  let availableQtyDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 3).OleValue;
  availableQty = availableQtyDisplayed;
  Log.Message(availableQty);
  Aliases.Aptify_Shell.FormTemplateForm.Close();
});

When("I click on Finish button to close Goods In wizard", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
});

When("I open product information panel from Inventory", function (){
  clickFindProductBtn();
  enterSearchProduct(productName);
  clickSearchBtn();
  handleProductsGrid();
  clickInventoryTab();
});



function enterSearchProduct(productName){
  let txtSearch =  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;
  txtSearch.Click();
  txtSearch.SetText(productName);
}


When("I click on Discounts subtab", function clickTabDiscounts(){
 Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.ClickTab("Discounts");
});

When("I click on New to create a Discount record", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_Discounts_Tab.PTProducts_Discounts_Tab.PTProducts_Discounts_Tab_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(9, 15);
});

When("I refresh Discount subtab", function refreshDiscounts(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_Discounts_Tab.PTProducts_Discounts_Tab.PTProducts_Discounts_Tab_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(67, 16);
  Aliases.Aptify_Shell.RadDropDownMenu.Click(68, 184);
  Delay(3000);
});


When("I open information panel for a product {arg}", function (productName){
  clickFindProduct_ProductManagement();
  enterSearchText(productName);
  clickSearchBtn();
  handleProductsGrid(); 
});

function clickFindProduct_ProductManagement(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea3.DashCtrlWrapper.ButtonBar.UltraButton3.Click();
}
 
When("I click on New Discount", function clickNewDiscount(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea3.DashCtrlWrapper.ButtonBar.UltraButton2.ClickButton();
});

When("I select Discount {arg}", function selectDiscountType(discountType){
  let ddDiscountType = Aliases.Aptify_Shell.FormTemplateForm.PTDiscounts_Form.PTDiscounts_Tabs.tabMain.PTDiscounts_Tabs_General.PTDiscounts_Tabs_General.PTDiscounts_DiscountTypeID.LookupSearchCombo;
  
  ddDiscountType.Click();
  ddDiscountType.ClickItem(discountType);
  ddDiscountType.Keys("[Tab]");
});

When("I enter a Name", function enterDiscountName(){
  var anysize = 4;
  var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  randomCode="";
  for( var i=0; i < anysize; i++ ){
  randomCode += charset[Math.floor(Math.random() * charset.length)];
  var discountCode = (aqString.concat("DISCOUNT"+" ", randomCode));
  }
  
  let txtName = Aliases.Aptify_Shell.FormTemplateForm.PTDiscounts_Form.PTDiscounts_Tabs.tabMain.PTDiscounts_Tabs_General.PTDiscounts_Tabs_General.PTDiscounts_Tabs_General_Name.txtInner;
  txtName.Click();
  txtName.SetText(discountCode);
  discountName = discountCode;
});

When("I enter a Description {arg}", function enterDiscountDescriptn(discountDescriptn){
  let txtDescription = Aliases.Aptify_Shell.FormTemplateForm.PTDiscounts_Form.PTDiscounts_Tabs.tabMain.PTDiscounts_Tabs_General.PTDiscounts_Tabs_General.PTDiscounts_Tabs_General_Description.txtInner;
  
  txtDescription.Click();
  txtDescription.SetText(discountDescriptn);
});

When("I enter a Start Date {arg}", function enterStartDate(startDate){
  let dateStart = Aliases.Aptify_Shell.FormTemplateForm.PTDiscounts_Form.PTDiscounts_Tabs.tabMain.PTDiscounts_Tabs_General.PTDiscounts_Tabs_General.PTDiscounts_Tabs_General_StartDate.txtInner;
  
  dateStart.Click();
  dateStart.SetText(startDate);
});

When("I enter a End Date {arg}", function enterEndDate(endDate){
  let dateEnd = Aliases.Aptify_Shell.FormTemplateForm.PTDiscounts_Form.PTDiscounts_Tabs.tabMain.PTDiscounts_Tabs_General.PTDiscounts_Tabs_General.PTDiscounts_Tabs_General_EndDate.txtInner;
  
  dateEnd.Click();
  dateEnd.SetText(endDate);
});

When("I select the Top of List checkbox", function checkTopOfListCheckbox(){
  Aliases.Aptify_Shell.FormTemplateForm.PTDiscounts_Form.PTDiscounts_Tabs.tabMain.PTDiscounts_Tabs_General.PTDiscounts_Tabs_General.PTDiscounts_Tabs_General_IsTopOfList.chkInternal.wState = cbChecked;
});

When("I select the Allow Historical Purchases checkbox", function checkAllowHistoricalPurchasesCheckbox(){
  Aliases.Aptify_Shell.FormTemplateForm.PTDiscounts_Form.PTDiscounts_Tabs.tabMain.PTDiscounts_Tabs_General.PTDiscounts_Tabs_General.PTDiscounts_Tabs_General_AllowHistoricalPurchases.chkInternal.wState = cbChecked;
});

When("I select the Allow Self Combination checkbox", function checkAllowSelfCombinationCheckbox(){
  Aliases.Aptify_Shell.FormTemplateForm.PTDiscounts_Form.PTDiscounts_Tabs.tabMain.PTDiscounts_Tabs_General.PTDiscounts_Tabs_General.PTDiscounts_Tabs_General_AllowSelfCombination.chkInternal.wState = cbChecked;
});

When("I click on New button in Discount section", function clickNewDiscountBreaks(){
  Aliases.Aptify_Shell.FormTemplateForm.PTDiscounts_Form.PTDiscounts_Tabs.tabMain.PTDiscounts_Tabs_General.PTDiscounts_Tabs_General.PTDiscounts_DiscountBreaks.zAptifyControlBase_Toolbars_Dock_Area_Top.ClickItem("SubType|New");
});

When("I enter Break Quantity {arg}", function enterBreakQty(breakQty){
  let txtBreakQty = Aliases.Aptify_Shell.SubTypeTemplateForm.PTDiscountBreakMain.PTDiscountBreakMain_BreakQuantity.txtInner;
  
  txtBreakQty.Click();
  txtBreakQty.SetText(breakQty);
});

When("I enter Discount Percentage {arg}", function enterDiscountPercentage(discountPercentage){
  let txtDiscountPercentage = Aliases.Aptify_Shell.SubTypeTemplateForm.PTDiscountBreakMain.PTDiscountBreakMain_DiscountPercentage.txtInner;
  
  txtDiscountPercentage.Click();
  txtDiscountPercentage.SetText(discountPercentage);
  discount = discountPercentage;
});

When("I enter Renewal Discount Percentage {arg}", function enterRenewalDiscountPercentage(renewalDiscountPercentage){
  let txtRenewalDiscountPercentage = Aliases.Aptify_Shell.SubTypeTemplateForm.PTDiscountBreakMain.PTDiscountBreakMain_RenewalDiscountPercentage.txtInner;
  
  txtRenewalDiscountPercentage.Click();
  txtRenewalDiscountPercentage.SetText(renewalDiscountPercentage);
  renewalDiscount = renewalDiscountPercentage;
});

When("I click Ok button", function (){
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
  retrieveDiscountId();
});

Then("Discount % and Renewal Discount % should be displayed", function verifyDiscountRenewal(){
  let gridDiscounts = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_Discounts_Tab.PTProducts_Discounts_Tab.PTProducts_Discounts_Tab_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let numOfRows = gridDiscounts.wRowCount;
  let discountNameId = aqString.Concat(discountId," "+discountName);  
  for(let i = 0; i<numOfRows; i++){
    let discountNameIdDisplayed = gridDiscounts.wValue(i, 11).OleValue;
    if(discountNameIdDisplayed == discountNameId){
      let discountPercentage = gridDiscounts.wValue(i,2).OleValue;
      let renewalDiscountPercentage = gridDiscounts.wValue(i,3).OleValue;
      if((aqObject.CompareProperty(discountPercentage, cmpEqual, discount, true, 3)) && (aqObject.CompareProperty(renewalDiscountPercentage, cmpEqual, renewalDiscount, true, 3)))
      {
       Log.Checkpoint("Discount % and Renewal Discount % is displayed");
      }
      else{
       Log.Error("Discount % and Renewal Discount % is not displayed");
      }
    }
  }
});


Then("new discount record should have a unique ID", function verifyDiscountId(){
 let gridDiscounts = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Prices.PTProducts_Prices.PTProducts_TABS_Prices.tabMain.PTProducts_Discounts_Tab.PTProducts_Discounts_Tab.PTProducts_Discounts_Tab_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
 let numOfRows = gridDiscounts.wRowCount;
 let passCount = 0;
 let discountNameId = aqString.Concat(discountId," "+discountName); 
  for(let i = 0; i<numOfRows; i++){
    let discountNameIdDisplayed = gridDiscounts.wValue(i, 11).OleValue;
    if(discountNameIdDisplayed != discountNameId){
      passCount += 1;
    }
  }
  if(passCount == numOfRows-1){
    Log.Checkpoint("New discount record has a unique ID");
  }
  else{
    Log.Error("New discount record does not have a unique ID");
  }
});

When("I select Product created", function (){
 let txtProduct = Aliases.Aptify_Shell.FormTemplateForm.PTDiscounts_Form.PTDiscounts_Tabs.tabMain.PTDiscounts_Tabs_General.PTDiscounts_Tabs_General.PTDiscounts_ProductID.txtLink;
 
 txtProduct.Click();
 txtProduct.SetText(product);
 txtProduct.Keys("[Tab]");
});


function retrieveDiscountId(){
 Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record");   
 Aliases.Aptify_Shell.FormTemplateForm.PTDiscounts_Form.PTDiscounts_Tabs.tabMain.SetFocus();
 let windowTitle =  aqObject.GetPropertyValue(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption");
 let Id = ( aqString.SubString(windowTitle, 14, 6) );  
 discountId = Id;
}



When("I select product for creating discount {arg}", function selectProduct_Discount(productPar){
  let txtProduct   = Aliases.Aptify_Shell.FormTemplateForm.PTDiscounts_Form.PTDiscounts_Tabs.tabMain.PTDiscounts_Tabs_General.PTDiscounts_Tabs_General.PTDiscounts_ProductID.txtLink;
  let gridProducts = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
 
   txtProduct.Click();
   txtProduct.SetText(productPar);
   productName = productPar;
   txtProduct.Keys("[Tab]");
  if( Aliases.Aptify_Shell.SearchForm.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
  
   }
});

When("I open product information panel from Product Management", function openProduct_ProductManagement(){
  clickFindProduct_ProductManagement();
  enterSearchProduct(productName);
  clickSearchBtn();
  handleProductsGrid(); 
});

When("I click on Prices", function clickPricesTab(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Prices");
});


When("I enter a Delivery date {arg}", function (deliveryDate){
   let txtDeliveryDate = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_DeliveryDate.txtInner;
 
   txtDeliveryDate.Click();
   txtDeliveryDate.SetText(deliveryDate);
});

Then("product should be displayed in the Stock manager page", function verifyProduct_StockManager(){
  Sys.WaitProcess("Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419", 6000);
  let productNameDisplayed = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0,2).OleValue;

  if(aqObject.CompareProperty(productNameDisplayed, cmpEqual, productName, true, 3)){
    Log.Checkpoint("Product is displayed in the Stock Manager page");
     }
  else{
    Log.Error("Product is not displayed in the Stock Manager page");
	}

  let availableQtyDisplayed = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0,3).OleValue; 
  availableQuantity = availableQtyDisplayed;
});

Then("product should be updated with Total quantity in the Inventory History tab", function (){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventoryHistory.PTProducts_OTC_Inventory_InventoryHistory.PTProducts_OTC_Inventory_InventoryHistory_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  let totalQtyDisplayed = radGridView.wValue(0, 6).OleValue;
  let sizePackets = (aqConvert.StrToInt((size*packets)) + aqConvert.StrToInt(qtyLoose));
 
  if(aqObject.CompareProperty(sizePackets, cmpEqual, totalQtyDisplayed, true, 3)){
    Log.Checkpoint("Total quantity of the product is updated");
     }
  else{
    Log.Error("Total quantity of the product is not updated");
	}
});
function test(){
  let size = 0;
  let packets = 0;
  let qtyLoose = 10;
  let sizePackets = (aqConvert.StrToInt((size*packets)) + aqConvert.StrToInt(qtyLoose));
  
  Log.Message(sizePackets);
}
Then("I click on Finish button to close Goods In wizard", function clickFinishBtn(){
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
});


When("I enter number of packets {arg}", function enterPackets_GoodsIn(packetsPar){
  let txtPackets = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_Packets.txtInner;
 
  //txtPackets.Click();
  txtPackets.SetText(packetsPar);
  packets = packetsPar;
});

When("I select the Miscellaneous Goods In checkbox", function (){
   Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_MiscellaneousGoodsIn.chkInternal.ClickButton();
});

When("I click Yes button to pop up message", function (){
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
});

When("I click on Goods In", function (){
  if(Aliases.Aptify_Shell.SearchForm.Exists)
  {
     Aliases.Aptify_Shell.SearchForm.Close();
  }
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton3.ClickButton();
 
});

Then("Goods In window should be displayed with menu items Goods In, Stock Manager and Settings", function verifyGoodsInPage(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.StepList1.Label, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.StepList1.Label2, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.StepList1.Label3, "Visible", cmpEqual, true);
});

Then("focus should be on Settings", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.StepList1.Label, "Enabled", cmpEqual, true);
});

Then("Goods In should be checked", function verifyGoodsInCheckbox(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_417.PTInventoryGoodsInWizard_NewStep1.PTInventoryGoodsInWizard_NewStep1_Grouped_Options_1.Goods_In, "wChecked", cmpEqual, true);
});

Then("Site\\/Warehouse, Location, Received Date, Time stamp and Reference fields should be displayed", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_417.PTInventoryGoodsInWizard_NewStep1.PTInventoryGoodsInWizard_NewStep1_SiteWarehouseID, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_417.PTInventoryGoodsInWizard_NewStep1.PTInventoryGoodsInWizard_NewStep1_LocationID, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_417.PTInventoryGoodsInWizard_NewStep1.PTInventoryGoodsInWizard_NewStep1_ReceivedDate, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_417.PTInventoryGoodsInWizard_NewStep1.PTInventoryGoodsInWizard_NewStep1_Reference, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_417.PTInventoryGoodsInWizard_NewStep1.PTInventoryGoodsInWizard_NewStep1_ReceivedTime, "Visible", cmpEqual, true);
});

Then("Customer field should be displayed", function (){
   aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_417.PTInventoryGoodsInWizard_NewStep1.PTInventoryGoodsInWizard_NewStep1_CustomerRoleID, "Visible", cmpEqual, true);
});

Given("I select a Site\\/Warehouse {arg}", function selectSiteWarehouseGoodsIn(siteWarehouse){
  let ddSiteWarehouse = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_417.PTInventoryGoodsInWizard_NewStep1.PTInventoryGoodsInWizard_NewStep1_SiteWarehouseID.LookupSearchCombo;
  
  ddSiteWarehouse.Click();
  ddSiteWarehouse.ClickItem(siteWarehouse);
  ddSiteWarehouse.Keys("[Tab]");
});

Given("I select a before date {arg} from Received Date", function enterReceivedDateGoodsIn(receivedDate){
  let txtReceivedDate = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_417.PTInventoryGoodsInWizard_NewStep1.PTInventoryGoodsInWizard_NewStep1_ReceivedDate.txtInner;
  
  txtReceivedDate.Click();
  txtReceivedDate.SetText(receivedDate);
});

Given("I enter a message {arg} in Reference", function enterReferenceGoodsIn(reference){
  let txtReference = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_417.PTInventoryGoodsInWizard_NewStep1.PTInventoryGoodsInWizard_NewStep1_Reference.txtInner;
  
  txtReference.Click();
  txtReference.SetText(reference);
});

Then("menu items Settings, Stock Manager and Goods In should be displayed", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.StepList1.Label, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.StepList1.Label2, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.StepList1.Label3, "Visible", cmpEqual, true);
});

Then("focus should be on Goods In", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.StepList1.Label2, "Enabled", cmpEqual, true);
});

Then("Received section with Product, Delivery date and Delivery time fields should be displayed", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_ProductID, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_DeliveryDate, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_DeliveryTime, "Visible", cmpEqual, true);
});

Then("Versions and Reference field should be disabled", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_VersionLinkID.LookupSearchCombo, "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_SupplierReference.txtInner, "Enabled", cmpEqual, false);
});

Given("I select a product {arg}", function selectProduct_GoodsIn(productPar){
   let txtProduct =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_ProductID.txtLink;
   let gridProducts = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
   let formSearch = Aliases.Aptify_Shell.SearchForm;
   txtProduct.Click();
   txtProduct.SetText(productPar);
   productName = productPar;
   txtProduct.Keys("[Tab]");
    
  if( formSearch.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }
});


Given("I enter Size {arg}", function (sizePar){
  let txtSize = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_PacketSize.txtInner;
   
  txtSize.Click();
  txtSize.Clear();
  txtSize.Keys(sizePar);
  size = sizePar;
  txtSize.Keys("[Tab]");
    if(Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.Exists){
    let msg = Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.txtMessage.get_Text();
    var currentSize =  aqString.SubString(msg, 67, 10);  
    Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
  }
  
  txtSize.Click();
  if( Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.Exists){  
    Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
      txtSize.Keys(currentSize);
      size = currentSize;
      txtSize.Keys("[Tab]");
  }

});

Given("I enter number of packets {arg}", function (packetsPar){
 let txtPackets = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_Packets.txtInner;
 
 txtPackets.Click();
 txtPackets.SetText(packetsPar);
 packets = packetsPar;
});

Given("I enter Unit Weight {arg}", function (unitWeight){
 let txtUnitWeight = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_UnitWeightValue.txtInner;
 
 txtUnitWeight.Click();
 txtUnitWeight.SetText(unitWeight);
});

Given("I enter a message in the Comments {arg}", function (comment){
 let txtComment = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_Comments.txtInner;
 
 txtComment.Click();
 txtComment.SetText(comment); 
});

Given("I click on Add button", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_Active_Button_Add.Click();
});

Then("focus should be on Stock Manager", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.StepList1.Label3, "Enabled", cmpEqual, true);
});

Then("toolbar buttons Other Actions, Freeze, Unfreeze, Waste, Transfer, Loose to forward, Inventory Adjustment should be displayed", function verifyStockManagerButtons(){ 
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1, "Visible", cmpEqual, true);
});

Then("tree view of the inventory sites should be dispalyed on Left side", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel2.panel4Tree.radTreeView, "Visible", cmpEqual, true);
});


Given("I click on Ok button for message stating Inventory exists elsewhere in a different packet size", function (){
  if(Aliases.Aptify_Shell.MessageBox.Exists){
  Aliases.Aptify_Shell.MessageBox.UltraGroupBox1.cmdOK.ClickButton();
  }
});

Given("I click on the product and drag it into Bulk sites Marshalling\\/Section1 or Forward site Waste", function dragToWaste(){
  let gridStockManager = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = gridStockManager.wRowCount;
  let i = 0;
  for (i; i<records; i++)
  {
    Log.Message(productName);
  let productDisplayed = gridStockManager.wValue(i, 2).OleValue;  
  if(productName == productDisplayed)
   {
     Log.Message("Yes");
   gridStockManager.Drag(12, 28, -226, 229);
   break;
   }
  } 
});


Then("Warehouse Inventory Movement window should be displayed", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1, "Visible", cmpEqual, true);
});



Given("I click on Main Market Edition under product version with reference {arg}", function (referencePar){
  let gridSuppliers = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_PTPairedGrids_1.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = gridSuppliers.wRowCount;
  let i =0;
 for (i; i<records; i++)
  {
  let reference = gridSuppliers.wValue(i, 4).OleValue;  
  if(reference == referencePar )
  {
    gridSuppliers.ClickCell(i, 0);
    if(Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.Exists){ 
     Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
    }
  }
} 
});

Given("I enter number of loose packets {arg}", function (qtyLoosePar){
  let txtQtyLoose = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_LooseQty.txtInner;
  
  txtQtyLoose.Click();
  txtQtyLoose.SetText(qtyLoosePar);
  qtyLoose = qtyLoosePar;
});

Then("list of products should be displayed on right side with section as {arg}", function (section){
  let radGridView = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  aqObject.CompareProperty(radGridView.wValue(1,14).OleValue, cmpEqual, section, true,3);
  aqObject.CompareProperty(radGridView.wValue(2,14).OleValue, cmpEqual, section, true,3);
  aqObject.CompareProperty(radGridView.wValue(3,14).OleValue, cmpEqual, section, true,3);
});

Then("Packets and Qty loose fiels should be disabled", function verifyInventoryMovementFields1(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_TransactionNumberOfPackets.txtInner , "Enabled", cmpEqual, false);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_TransactionQuantityLoose.txtInner, "Enabled", cmpEqual, false);
});

Then("Waste Rsn, Packets and Qty loose fiels should be enabled", function verifyInventoryMovementFields2(){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_TransactionNumberOfPackets.txtInner, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_TransactionQuantityLoose.txtInner, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_WasteReasonID.LookupSearchCombo, "Enabled", cmpEqual, true);
});

Then("I select a To location {arg}", function selectLocationTo(toLocationPar){
  let ddToLocation = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_LinkedLocationItemID.txtLink;
  
  ddToLocation.Click();
  ddToLocation.SetText(toLocationPar);
  toLocation = toLocationPar;
  ddToLocation.Keys("[Tab]");;
});

//Given("I click on Next button", function (){
  //Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnNext.ClickButton();
//});

When("I click on Supplier {arg} with reference {arg}", function selectSupplierWithReference(supplierPar, referencePar){
  let gridSuppliers = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_PTPairedGrids_1.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = gridSuppliers.wRowCount;
  let i =0;
 for (i; i<records; i++)
{
  let reference = gridSuppliers.wValue(i, 4).OleValue; 
  let supplier = gridSuppliers.wValue(i, 1).OleValue; 
  if(reference == referencePar && supplier === supplierPar)
  {
    gridSuppliers.ClickCell(i, 1);
    if(Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.Exists){  
    Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
  }
  }
} 
});

When("I click on Supplier {arg} with delivery record with reference {arg}", function selectSupplierByReference(supplierPar, referencePar){
   let records = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_PTPairedGrids_1.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wRowCount;
   let i =0;
    for (i; i<records; i++)
    {
      let reference = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_PTPairedGrids_1.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(i, 4).OleValue; 
      let supplier = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_PTPairedGrids_1.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(i, 1).OleValue; 
      if(reference == referencePar && supplier === supplierPar)
        {
          Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_PTPairedGrids_1.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.Expand(i);
          x = i;
        }
    } 
});

 
When("I select a delivery record", function selectDeliveryRecord(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_PTPairedGrids_1.splitContainer1.SplitterPanel.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wChildView(x).ClickRowIndicator(0);
});


When("I click on New Supplier Order", function clickNewSupplierOrder(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton7.ClickButton();
});


When("I enter Order Date {arg}", function enterOrderDate(orderDate){
  let dateOrder =  Aliases.Aptify_Shell.FormTemplateForm.PTInventorySupplierOrders_Form.PTInventorySupplierOrders_Tabs.tabMain.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_OrderDate.txtInner;
  
  dateOrder.Click();
  dateOrder.SetText(orderDate);
  dateOrder.Keys("[Tab]");
});

When("I select Order Type {arg}", function selectOrderType(orderType){
  let ddOrderType = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySupplierOrders_Form.PTInventorySupplierOrders_Tabs.tabMain.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General_OrderTypeID.LookupSearchCombo;
  
  ddOrderType.Click();
  ddOrderType.ClickItem(orderType);
  ddOrderType.Keys("[Tab]");
});

When("I enter Order Reference code", function enterOrderReference(){
  var anysize = 3;
  var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  randomCode="";
  for( var i=0; i < anysize; i++ ){
  randomCode += charset[Math.floor(Math.random() * charset.length)];
  var orderRef = (aqString.concat("RAVE"+" ", randomCode));}
  
  let txtOrderRef = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySupplierOrders_Form.PTInventorySupplierOrders_Tabs.tabMain.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_OrderReference.txtInner;
  
  txtOrderRef.Click();
  txtOrderRef.SetText(orderRef);
});

When("I select Currency Type {arg}", function selectCurrency(currency){
  let ddCurrency = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySupplierOrders_Form.PTInventorySupplierOrders_Tabs.tabMain.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General_CurrencyTypeID.LookupSearchCombo;
  
  ddCurrency.Click();
  ddCurrency.ClickItem(currency);
  ddCurrency.Keys("[Tab]");
});

When("I select Requisitioner {arg}", function selectRequisitioner(requisitioner){
   let ddRequisitioner =  Aliases.Aptify_Shell.FormTemplateForm.PTInventorySupplierOrders_Form.PTInventorySupplierOrders_Tabs.tabMain.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General_RequisitionerRoleID.txtLink;
   
   ddRequisitioner.Click();
   ddRequisitioner.SetText(requisitioner);
   ddRequisitioner.Keys("[Tab]");
});

When("I select Origin Warehouse {arg}", function selectOriginWarehouse(originWarehouse){
  let ddOriginWarehouse = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySupplierOrders_Form.PTInventorySupplierOrders_Tabs.tabMain.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General_OriginWareHouseID.LookupSearchCombo;
  
  ddOriginWarehouse.Click();
  ddOriginWarehouse.ClickItem(originWarehouse);
  ddOriginWarehouse.Keys("[Tab]");
});

When("I select the checkbox Authorised", function checkAuthorised(){
  Aliases.Aptify_Shell.FormTemplateForm.PTInventorySupplierOrders_Form.PTInventorySupplierOrders_Tabs.tabMain.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General_IsAuthorised.chkInternal.ClickButton();
});

When("I enter Authorised Date {arg}", function enterAuthorisedDate(authorisedDate){
  let dateAuthorised = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySupplierOrders_Form.PTInventorySupplierOrders_Tabs.tabMain.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General_AuthorisedDate.txtInner;
  
  dateAuthorised.Click();
  dateAuthorised.SetText(authorisedDate);
  dateAuthorised.Keys("[Tab]");
});

When("I click on Ok and New button", function clickOkAndNew(){
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOkAndNew.ClickButton();
});

Then("window should be closed without any Errors", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.AptifyShellForm, "VisibleOnScreen", cmpEqual, true);
});

When("I click on New button to create Inventory Supplier Order", function clickNewInventorySupplierOrder(){
  Aliases.Aptify_Shell.FormTemplateForm.PTInventorySupplierOrders_Form.PTInventorySupplierOrders_Tabs.tabMain.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General_Sub_Type_Control_1.zAptifyControlBase_Toolbars_Dock_Area_Top.ClickItem("SubType|New");
});

When("I click on Ok", function (){
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
});

When("I select a Product {arg}, and enter Order Qty {arg}, Packet Size {arg}", function selectProductQtyPacketSize(productPar, orderQty, packetSize){
  let txtProduct = Aliases.Aptify_Shell.SubTypeTemplateForm.PTInventorySupplierOrderItems_Form.PTInventorySupplierOrderItems_Tabs.tabMain.PTInventorySupplierOrderItems_Tabs_General.PTInventorySupplierOrderItems_Tabs_General.PTInventorySupplierOrderItems_Tabs_General_PTProductVersionControl_1.advancedLinkBoxProducts.txtLink;
  let txtOrderQuantity = Aliases.Aptify_Shell.SubTypeTemplateForm.PTInventorySupplierOrderItems_Form.PTInventorySupplierOrderItems_Tabs.tabMain.PTInventorySupplierOrderItems_Tabs_General.PTInventorySupplierOrderItems_Tabs_General.PTInventorySupplierOrderItems_OrderQuantity.txtInner;
  let txtPackSize = Aliases.Aptify_Shell.SubTypeTemplateForm.PTInventorySupplierOrderItems_Form.PTInventorySupplierOrderItems_Tabs.tabMain.PTInventorySupplierOrderItems_Tabs_General.PTInventorySupplierOrderItems_Tabs_General.PTInventorySupplierOrderItems_PackSize.txtInner;
  
  txtProduct.SetText(productPar);
  productName = productPar;
  txtProduct.Keys("[Tab]");
  handleProductsGrid();
   
  txtOrderQuantity.SetText(orderQty);
  txtOrderQuantity.Keys("[Tab]");
  txtPackSize.SetText(packetSize);
  txtPackSize.Keys("[Tab]");
});


When("I enter Advance Qty {arg}, unit cost {arg}, and Comment {arg}", function enterAdvanceQtyUnitCostComment(advanceQty, unitCost, comment){
  let txtAdvanceQuantity = Aliases.Aptify_Shell.SubTypeTemplateForm.PTInventorySupplierOrderItems_Form.PTInventorySupplierOrderItems_Tabs.tabMain.PTInventorySupplierOrderItems_Tabs_General.PTInventorySupplierOrderItems_Tabs_General.PTInventorySupplierOrderItems_AdvanceQuantity.txtInner;
  let txtUnitCost = Aliases.Aptify_Shell.SubTypeTemplateForm.PTInventorySupplierOrderItems_Form.PTInventorySupplierOrderItems_Tabs.tabMain.PTInventorySupplierOrderItems_Tabs_General.PTInventorySupplierOrderItems_Tabs_General.PTInventorySupplierOrderItems_Tabs_General_UnitCost.txtInner;
  let txtComments = Aliases.Aptify_Shell.SubTypeTemplateForm.PTInventorySupplierOrderItems_Form.PTInventorySupplierOrderItems_Tabs.tabMain.PTInventorySupplierOrderItems_Tabs_General.PTInventorySupplierOrderItems_Tabs_General.PTInventorySupplierOrderItems_Tabs_General_Comments.txtInner;
  
  txtAdvanceQuantity.SetText(advanceQty);
  txtAdvanceQuantity.Keys("[Tab]");
  
  txtUnitCost.SetText(unitCost);
  txtUnitCost.Keys("[Tab]");
  
  txtComments.SetText(comment);
  txtComments.Keys("[Tab]");
});

Then("I select {arg} from My Options", function selectAllSupplierOrders(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea3.DashCtrlWrapper.DashboardActions.dropdownActions.ClickItem("Supplier Orders");
});

When("I select a Supplier {arg}", function selectSupplier_SupplierOrder(supplier){
  let txtSupplier = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySupplierOrders_Form.PTInventorySupplierOrders_Tabs.tabMain.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General_SupplierRoleID.txtLink;
  
  txtSupplier.Click();
  txtSupplier.SetText(supplier);
  txtSupplier.Keys("[Tab]");
});

When("I enter number of loose packets {arg}, Unit Weight {arg} and Comment {arg}", function enterQtyLooseUnitWeightComment(qtyLoose, unitWeight, comment){
  let txtQtyLoose = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_LooseQty.txtInner;
  let txtUnitWeight = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_UnitWeightValue.txtInner;
  let txtComment = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_Comments.txtInner;
  
  txtQtyLoose.Click();
  txtQtyLoose.SetText(qtyLoose);
  
  txtUnitWeight.Click();
  txtUnitWeight.SetText(unitWeight);

  txtComment.Click();
  txtComment.SetText(comment);
});

Then("number of records should be equal to records present", function (){
  let statusBar = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_Telerik_List_View_1.outerPanel.radStatusBar;
  let gridTransactions = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;

  let records = gridTransactions.wRowCount;
  let recordsDisplayed = statusBar.wText(7);
  let NumOfRecords = recordsDisplayed.split(" ");

  if(aqObject.CompareProperty(records ,cmpEqual, NumOfRecords[0], 3)){
    Log.Checkpoint("Number of records displayed in panel below is equal to the records present");
     }
  else{
    Log.Error("Number of records displayed in panel below is not equal to the records present");
	}
});



Then("I enter number of loose products {arg}", function (qtyLoosePar){
  let txtQtyLoose = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_TransactionQuantityLoose.txtInner;
  
  txtQtyLoose.Click();
  txtQtyLoose.SetText(qtyLoosePar);
  qtyLoose = qtyLoosePar;
  txtQtyLoose.Keys("[Tab]");
});

Then("I click on Transfer button", function clickTransfer_InventoryMovement(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_Active_Button_Transfer.Click();
});

Then("products {arg}, {arg}, {arg} should be displayed in all Supplier Orders", function verifyProducts_AllSupplierOrders(Product1Par, Product2Par, Product3Par){
  let radGridView = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea3.DashCtrlWrapper.DashboardActions.panel1.ViewContainer.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let Product1 = radGridView.wValue(0, 0).OleValue;
  let Product2 = radGridView.wValue(1, 0).OleValue;
  let Product3 = radGridView.wValue(2, 0).OleValue;
  let productsDisplayed = aqString.Concat(Product1,(aqString.concat("_"+Product2,"_"+Product3))); 
 
  if( (aqObject.CompareProperty(productsDisplayed, cmpContains, Product1Par, true, 3)) && (aqObject.CompareProperty(productsDisplayed, cmpContains, Product2Par, true, 3)) && (aqObject.CompareProperty(productsDisplayed, cmpContains, Product3Par, true, 3)) ){
    Log.Checkpoint("Products are displayed under all Supplier Orders");
   }
  else{
    Log.Error("Products are not displayed under all Supplier Orders");
   }
});


Then("I enter number of packets {arg}", function (packetsPar){
  let txtPackets = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_235.PTInventoryAdjustmentWizard_Step_AdjustQuantities.PTInventoryAdjustmentWizard_Step_AdjustQuantities_Packets.txtInner;
  
  txtPackets.Click();
  txtPackets.SetText(packetsPar);
  packets = packetsPar;
});

Then("I click on Finish to close Warehouse Inventory Movement window", function (){
  Sys.Process("Aptify Shell").WinFormsObject("GenericWizardForm").WinFormsObject("WizMain").WinFormsObject("btnFinish").Click();
});

Then("I click on Finish to close Goods In Wizard", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
});

Then("Supplier Order should be displayed with Quantity as {arg} and Description as {arg}", function verifySupplierOrder(quantityPar, supplierPar){
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Overview.PTProducts_OTC_Inventory_Disposals_Telerik_List_View_3.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  let qtyDisplayed = radGridView.wValue(0, 1).OleValue;
  let supplierDisplayed = radGridView.wValue(0, 2).OleValue;

  if( (aqObject.CompareProperty(qtyDisplayed, cmpEqual, quantityPar, 3)) && (aqObject.CompareProperty(supplierDisplayed, cmpEqual, supplierPar, 3)) ){
    Log.Checkpoint("Supplier Order displayed with Quantity and Description is correct");
   }
  else{
    Log.Error("Supplier Order displayed with Quantity and Description is incorrect");
   }
   
});


When("I click on Cancel button next to  product {arg} to cancel it", function clickCancelProduct(productPar){
  let gridTransactions = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = gridTransactions.wRowCount;
  let i =0;
    for (i; i<records; i++)
     {
      let product = gridTransactions.wValue(i, 1).OleValue;  
      if(product == productPar )
      {
       gridTransactions.ClickCell(i, 0);
      }
     }

});

When("click Ok to confirm cancellation", function (){
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
});

Then("I enter number of packets {arg} to transfer", function (packetsPar){
   let txtPackets = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_TransactionNumberOfPackets.txtInner;
   
   if(txtPackets.Enabled){
    txtPackets.Click();
    txtPackets.SetText(packetsPar);
    packets = packetsPar;
    txtPackets.Keys("[Tab]");
   }
   else{
    let packetsDisplayed = txtQtyLoose.get_Text();
    packets = packetsDisplayed;
   }
});

Then("I enter number of loose products {arg} to transfer", function (qtyLoosePar){
  let txtQtyLoose = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_TransactionQuantityLoose.txtInner;
  
  if(txtQtyLoose.Enabled){
  txtQtyLoose.Click();
  txtQtyLoose.SetText(qtyLoosePar);
  qtyLoose = qtyLoosePar;
  txtQtyLoose.Keys("[Tab]");
  }
  else{
    let qtyLooseDisplayed = txtQtyLoose.get_Text();
    qtyLoose = qtyLooseDisplayed;
  }
});

Then("I click on Overwiew subtab", function clickTabOverwiew(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.ClickTab("Overview");
});


Then("I drag first product into Watford\\/Warehouse A\\/Bulk\\/Section{arg}", function dragProductOne(param1){
  let gridStockManager = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
   
   gridStockManager.Drag(10, 29, -215, 193);
});

Then("I drag second product into Watford\\/Warehouse A\\/Bulk\\/Section{arg}", function dragProductTwo(param1){
  let gridStockManager = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel2.panel4Tree.radTreeView.CollapseItem("Watford|Warehouse A|Bulk|Section 1");
  Delay(2000);
  gridStockManager.Drag(12, 49, -218, 171);
});

Then("I drag third product into Watford\\/Warehouse A\\/Bulk\\/Section{arg}", function dragProductThree(param1){
  let gridStockManager = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel2.panel4Tree.radTreeView.CollapseItem("Watford|Warehouse A|Bulk|Section 1");
  Delay(2000);
  gridStockManager.Drag(12, 64, -218, 158);
});

Then("I retrieve From Location and Size", function retrieveFromLocationAndSize(){
  let radGridView = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  
  let fromLocationDisplayed = radGridView.wValue(0, 0).OleValue;
  fromLocation = fromLocationDisplayed;
  
  let fromLocationSize = radGridView.wValue(0, 5).OleValue;
  size = fromLocationSize;
});

When("I click on Find Product from Customer Services folder list", function clickFindProductCS (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.Click();
});

When("I click on Find Product from Product Management", function clickFindProductFromProductManagement (){
  let aptifyDashLayout = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout;
  //let ultraLabel = aptifyDashLayout.pnlToolBar.lblOptions;
  //ultraLabel.Click();
  //ultraLabel.PopupMenu.Click("Switch Dashboard|advance> Product Management");
  aptifyDashLayout.AptifyDashboardArea3.DashCtrlWrapper.ButtonBar.UltraButton3.ClickButton();
});

When("I navigate to New Delivery option under Inventory tab", function clickNewDeliveryFolderList (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton16.ClickButton();
});

When("I click on Inventory Location tab under Inventory", function expandInventoryLocation()
{
  let ultraTreeInventoryLocation = Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain;
  ultraTreeInventoryLocation.outlineitemInventory.Click();
  ultraTreeInventoryLocation.outlineitemInventoryLocations.DblClick();
  ultraTreeInventoryLocation.outlineitemAllInventoryLocations.DblClick();
});

When("I click on Find Product tab", function clickOnFindProduct (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.ClickButton();
});





When("I click on Product versions tab", function clickProductVersionsTab (){
   Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main.Products_Main.Products_Main_Tabs.tabMain.ClickTab("Product Versions");
});

When("I click on New button from product version", function clickNewBtnProdVersion (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main.Products_Main.Products_Main_Tabs.tabMain.Products_Tabs_VProductVersions.Products_Tabs_VProductVersionsDetails.Products_Tabs_VProductVersionsDetails_Sub_Type_Control_ProductVersions.zAptifyControlBase_Toolbars_Dock_Area_Top.ClickItem("SubType|New");
});

When("I select description {arg}", function selectDescriptionNewVersion (description){
  let ddDescription = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_Tabs_General.PTProductVersions_Tabs_General.PTProductVersions_TypeID.txtLink.EmbeddableTextBoxWithUIPermissions;
  ddDescription.SetText(description);
  ddDescription.Keys("[Enter]");
  versionDescription = description;
});

When("I select Output Format {arg}", function selectOutputFormatProductVersion (outputFormat){
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_Tabs_General.PTProductVersions_Tabs_General.PT_productVersions_OutputType.LookupSearchCombo.ClickItem(outputFormat);
  ddOutputFormat = outputFormat;
  
});

When("I check the checkbox Default version", function checkCheckboxDefaultVersion (){
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_Tabs_General.PTProductVersions_Tabs_General.PTProductVersions_DefaultVersion.chkInternal.ClickButton();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
});

When("I enter a message {arg} in Edition Statement", function enterEditionStmtProdVersion (editionStatement){
  let txteditionStatement = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_Tabs_General.PTProductVersions_Tabs_General.PT_ProductVersions_EditionStatement.txtInner;
  txteditionStatement.Keys(editionStatement);
});

When("I enter Copyright Year {arg}", function enterCopyrightYrProdVersion (copyrightYear){
  let txtCopyrightYear = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_Tabs_General.PTProductVersions_Tabs_General.Pt_Products_CopyrightYear.txtInner;
  txtCopyrightYear.Keys("a [BS]");
  txtCopyrightYear.SetText(copyrightYear);
  parcopyrightYear = copyrightYear;
});

Then("New version as {arg} should be displayed under Product versions tab", function checkpointNewVersionDisplayUnderProdVersionTab (version){
  let versionType = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main.Products_Main.Products_Main_Tabs.tabMain.Products_Tabs_VProductVersions.Products_Tabs_VProductVersionsDetails.Products_Tabs_VProductVersionsDetails_Sub_Type_Control_ProductVersions.AptifyControlBase_Fill_Panel.flexSubType;
  let ClmVersion = versionType.get_Item(2, 1).OleValue;
  
  
  if(aqObject.CompareProperty(ClmVersion, cmpEqual,version, true,3))
  {
    Log.Checkpoint("New version has been display under product versions tab")
  }
  else
  {
    Log.Error("New version is not display under product versions tab");
  }
  
  let wizardProductId =  Aliases.Aptify_Shell.FormTemplateForm; 
  let wdwTitle =  aqObject.GetPropertyValue(wizardProductId , "WndCaption");
  let prodId = ( aqString.SubString(wdwTitle, 12, 16) );  
  productId = prodId;
});  

Then("I click on Save Record and Close", function (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
});

Then("I click on Product versions tab", function clickProductVersion (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main.Products_Main.Products_Main_Tabs.tabMain.ClickTab("Product Versions");
});

Then("I click on New button from product version", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main.Products_Main.Products_Main_Tabs.tabMain.Products_Tabs_VProductVersions.Products_Tabs_VProductVersionsDetails.Products_Tabs_VProductVersionsDetails_Sub_Type_Control_ProductVersions.zAptifyControlBase_Toolbars_Dock_Area_Top.ClickItem("SubType|New");
});

Then("I select description {arg} from product version record", function (description){
  let ddDescription = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_Tabs_General.PTProductVersions_Tabs_General.PTProductVersions_TypeID.txtLink.EmbeddableTextBoxWithUIPermissions;
  ddDescription.SetText(description);
  ddDescription.Keys("[Enter]");
});

Then("I enter necessary details in the fields from Product version record wizard", function enterDetailsDateCopyrightYr (){
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_Tabs_General.PTProductVersions_Tabs_General.PT_productVersions_OutputType.LookupSearchCombo.ClickItem(ddOutputFormat);
  
  let txtCopyrightYear = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_Tabs_General.PTProductVersions_Tabs_General.Pt_Products_CopyrightYear.txtInner;
  txtCopyrightYear.Click();
  txtCopyrightYear.Keys("a [BS]");
  txtCopyrightYear.SetText(parcopyrightYear);
  
  let txtdate = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_Tabs_General.PTProductVersions_Tabs_General.PTProductVersions_PublicationDate.txtInner;
  txtdate.Click();
  txtdate.SetText(parpubDate);
});

Then("I select Actual Product {arg}", function selectActualProductProductVersion (actualProduct){
  let lnkActualProduct =  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_Tabs_General.PTProductVersions_Tabs_General.PTProductVersions_ActualProductID.txtLink;
  lnkActualProduct.SetText(actualProduct);
  lnkActualProduct.Keys("[Enter]");
  var radGridViewActualProduct = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(radGridViewActualProduct.Exists)
  {
     radGridViewActualProduct.DblClickCell(0, "Title");
  }
});

Then("Actual product as {arg} and description as {arg} should be displayed on Product versions record", function checkpointActualProdAndDescriptionDisplay(paramActualProduct, paramDescription){
  let versionDescription = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_Tabs_General.PTProductVersions_Tabs_General.PTProductVersions_TypeID.txtLink.EmbeddableTextBoxWithUIPermissions.Text.OleValue;
  let prodInfoActualPrdouct = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_Tabs_General.PTProductVersions_Tabs_General.PTProductVersions_ActualProductID.txtLink.Text.OleValue;
  
  if(aqObject.CompareProperty(versionDescription, cmpEqual,paramDescription, true,3))
  {
    Log.Checkpoint("Description has been display on product versions record")
  }
  else
  {
    Log.Error("Description is not display on product versions record");
  }
  
  if(aqObject.CompareProperty(prodInfoActualPrdouct, cmpEqual,paramActualProduct, true,3))
  {
    Log.Checkpoint("Actual product has been display on product versions record")
  }
  else
  {
    Log.Error("Actual product is not display on product versions record");
  }
});

Then("I select Next Product Id {arg}", function selectNextProdIdProdVersion (nextproductId){
  let lnkNextProductId = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_Tabs_General.PTProductVersions_Tabs_General.PTProductVersions_NextProductID.txtLink;
  lnkNextProductId.SetText(nextproductId);
  lnkNextProductId.Keys("[Enter]");
  var radGridViewNextProductId = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(radGridViewNextProductId.Exists)
  {
    radGridViewNextProductId.DblClickCell(0, "Title");
  }

});

Then("I select substitute product version {arg}", function selectSubstituteProdVersion(substituteproductVersion){
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_Tabs_General.PTProductVersions_Tabs_General.PTProductVersions_Tabs_General_NextProductVersionID.LookupSearchCombo.ClickItem(substituteproductVersion);
});



When("I click on OK Button", function dragWindowAndClickOkBtn (){
  let subTypeTemplateForm = Aliases.Aptify_Shell.SubTypeTemplateForm;
  subTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
});

Then("I search product in Find product field", function searchProductCreateProd (){
  
  let radPanel = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams;
  textBox = radPanel.quickSearch.quickSearchText;
  textBox.SetText(productId);
  radPanel.switchPanel.searchButton.ClickButton();
  var radGridViewCreateProduct = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  if(radGridViewCreateProduct.Exists)
  {
    radGridViewCreateProduct.DblClickCell(0, "Title");
  }
  
});


When("I enter Pubdate {arg}", function enterPubDate (pubDate){
  let txtdate = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_Tabs_General.PTProductVersions_Tabs_General.PTProductVersions_PublicationDate.txtInner;
  txtdate.Click();
  txtdate.SetText(pubDate);
  parpubDate = pubDate;
});

Then("I click on Ok Button", function (){
  let subTypeTemplateForm = Aliases.Aptify_Shell.SubTypeTemplateForm;
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
});

Then("I open product versions Record", function openProdVersionsRecordFromProdInfo (){
  C1FlexGridPoductVersion = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main.Products_Main.Products_Main_Tabs.tabMain.Products_Tabs_VProductVersions.Products_Tabs_VProductVersionsDetails.Products_Tabs_VProductVersionsDetails_Sub_Type_Control_ProductVersions.AptifyControlBase_Fill_Panel.flexSubType;
  C1FlexGridPoductVersion.Click();
  C1FlexGridPoductVersion.Keys("[Down][Down]^o");
});

Then("I click on Version Type column to open Product Versions Record", function clickVersionTypeClmOpenProdVersion (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main.Products_Main.Products_Main_Tabs.tabMain.Products_Tabs_VProductVersions.Products_Tabs_VProductVersionsDetails.Products_Tabs_VProductVersionsDetails_Sub_Type_Control_ProductVersions.AptifyControlBase_Fill_Panel.flexSubType.Click();
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main.Products_Main.Products_Main_Tabs.tabMain.Products_Tabs_VProductVersions.Products_Tabs_VProductVersionsDetails.Products_Tabs_VProductVersionsDetails_Sub_Type_Control_ProductVersions.AptifyControlBase_Fill_Panel.flexSubType.Keys("[Down][Down][Down]^o");
});


Then("Next Product Id as {arg} and description as {arg} should be displayed on Product versions record", function checkpointNextProdIdAndDescriptionDisplay (parnextproductId, parDescription){
  let lnknextProductId = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_Tabs_General.PTProductVersions_Tabs_General.PTProductVersions_NextProductID.txtLink.Text.OleValue;
  let versionDescription = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductVersions_Form.PTProductVersions_Tabs.tabMain.PTProductVersions_Tabs_General.PTProductVersions_Tabs_General.PTProductVersions_TypeID.txtLink.EmbeddableTextBoxWithUIPermissions.Text.OleValue;
  
  
  if(aqObject.CompareProperty(lnknextProductId, cmpEqual,parnextproductId, true,3))
  {
    Log.Checkpoint("Next Product Id has been display correctly")
  }
  else
  {
    Log.Error("Different product id is display");
  }
  
  if(aqObject.CompareProperty(versionDescription, cmpEqual,parDescription, true,3))
  {
    Log.Checkpoint("Version description has been display correctly")
  }
  else
  {
    Log.Error("Different version description is display");
  }
});

Then("After opening same product all the changes should be saved and display in the product information", function chcekpointOpenWindowAgainToCheckChanges (){
  
  let versionType = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main.Products_Main.Products_Main_Tabs.tabMain.Products_Tabs_VProductVersions.Products_Tabs_VProductVersionsDetails.Products_Tabs_VProductVersionsDetails_Sub_Type_Control_ProductVersions.AptifyControlBase_Fill_Panel.flexSubType;
  let ClmVersion = versionType.get_Item(2, 1).OleValue;
  Log.Message(ClmVersion)
  
  if(aqObject.CompareProperty(ClmVersion, cmpEqual,versionDescription, true,3))
  {
    Log.Checkpoint("All the changes has been saved and display")
  }
  else
  {
    Log.Error("Changes are not saved");
  }
});

Then("New version as {arg} should be displayed under product versions tab", function checkpointActualProdVersionDisplay (actualProductVersion){
  let versionType = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main.Products_Main.Products_Main_Tabs.tabMain.Products_Tabs_VProductVersions.Products_Tabs_VProductVersionsDetails.Products_Tabs_VProductVersionsDetails_Sub_Type_Control_ProductVersions.AptifyControlBase_Fill_Panel.flexSubType;
  let ClmVersion = versionType.get_Item(3, 1).OleValue;
  
  
  if(aqObject.CompareProperty(ClmVersion, cmpEqual,actualProductVersion, true,3))
  {
    Log.Checkpoint("New version has been display under product versions tab")
  }
  else
  {
    Log.Error("New version is not display under product versions tab");
  }
});

Then("New Version as {arg} should be displayed under product versions tab", function checkpointProdIdVersionDisplay(productIdVersion){
  let versionType = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.Products_Main.Products_Main.Products_Main_Tabs.tabMain.Products_Tabs_VProductVersions.Products_Tabs_VProductVersionsDetails.Products_Tabs_VProductVersionsDetails_Sub_Type_Control_ProductVersions.AptifyControlBase_Fill_Panel.flexSubType;
  let ClmVersion = versionType.get_Item(4, 1).OleValue;
  
  
  if(aqObject.CompareProperty(ClmVersion, cmpEqual,productIdVersion, true,3))
  {
    Log.Checkpoint("New version has been display under product versions tab")
  }
  else
  {
    Log.Error("New version is not display under product versions tab");
  }
});

When("I click on Forward from the node tree view", function clickForwardLocation(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel2.panel4Tree.radTreeView.ClickItem("Watford|Warehouse A|Forward");
});

When("I select Adjust Packets\\/Loose Quantities checkbox", function clickAdjustPacketsLooseQuantitiesCheckbox(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_235.PTInventoryAdjustmentWizard_Step_AdjustQuantities.PTInventoryAdjustmentWizard_Step_AdjustQuantities_Grouped_Options_1.Adjust_Packets_Loose_quantities.ClickButton();
});

When("I enter packets", function (){
  let txtPackets = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_235.PTInventoryAdjustmentWizard_Step_AdjustQuantities.PTInventoryAdjustmentWizard_Step_AdjustQuantities_Packets.txtInner;

  let packetsBefore = txtPackets.get_Text();
  txtPackets.Click();
  txtPackets.Clear();
  txtPackets.SetText(aqConvert.StrToInt(packetsBefore) + 1);
  packets = (aqConvert.StrToInt(packetsBefore) + 1);
  txtPackets.Keys("[Tab]");
});

When("I enter Qty Loose", function (){
  let txtQtyLoose = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_235.PTInventoryAdjustmentWizard_Step_AdjustQuantities.PTInventoryAdjustmentWizard_Step_AdjustQuantities_Loose.txtInner;

  let looseBefore = txtQtyLoose.get_Text();
  txtQtyLoose.Click();
  txtQtyLoose.Clear();
  txtQtyLoose.SetText(aqConvert.StrToInt(looseBefore) + 1);
  qtyLoose = (aqConvert.StrToInt(looseBefore) + 1);
  txtQtyLoose.Keys("[Tab]");
});

Then("message should pop-up with Balance, Size, Packets, Loose adjusted successfully", function verifyQtyAdjustment(){
  let msgInventoryAdjustment = Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.txtMessage;
  let msgDisplayed = aqObject.GetPropertyValue(msgInventoryAdjustment, "text");

  let packetSize = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_235.PTInventoryAdjustmentWizard_Step_AdjustQuantities.PTInventoryAdjustmentWizard_Step_AdjustQuantities_PacketSizeBefore.txtInner;
  let beforeSize = aqObject.GetPropertyValue(packetSize , "text");
   
  let message1 = "Balance=" ;
  
  let msgBalance = aqString.Insert( message1, beforeSize*packets+aqConvert.StrToInt(qtyLoose), 8 );
  let concatSize = aqString.Concat(msgBalance, ",Packetsize=");
  let lenthPacketSize = aqString.GetLength(concatSize);
 
  let msgPacketSize = aqString.Insert(concatSize, beforeSize, lenthPacketSize);
  let concatPackets = aqString.Concat(msgPacketSize, ",Packets=");
  let lenthPackets = aqString.GetLength(concatPackets);
  
  let msgPackets = aqString.Insert(concatPackets, packets, lenthPackets);
  let concatLoose = aqString.Concat(msgPackets, ",Loose=");
  let lenthLoose = aqString.GetLength(concatLoose);
  
  let msgLoose = aqString.Insert(concatLoose, qtyLoose, lenthLoose);
  let concatAdjusted = aqString.Concat(msgLoose, " adjusted successfully");
  
  if( aqObject.CompareProperty(msgDisplayed, cmpEqual, concatAdjusted, true,3) ){
    Log.Checkpoint("Message stating 'Balance, PacketSize, Packets, Loose adjusted successfully' displayed is correct");
   }
  else{
    Log.Error("Message stating 'Balance, PacketSize, Packets, Loose adjusted successfully' displayed is incorrect");
   }
});

Given("I click on Transfer", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_Active_Button_Transfer.Click();
});

Then("I click on Supplier Orders tab from Product Information Panel", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.ClickTab("Supplier Orders");
});




Then("I click on Save Record from Product information panel", function (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record");
});

When("I verify the product {arg} to Goods In", function (productPar){
  clickFindProductButton();
  openProductInformationPanel(productPar);
  verifyInventorySite();
  retrieveAvailableQuantity();
  clickSaveAndClose();
  closeSearchWdw();
});

When("I select the product in Received section", function (){
  let txtProduct =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_ProductID.txtLink;
  let gridProducts = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let formSearch = Aliases.Aptify_Shell.SearchForm;
   txtProduct.Click();
   txtProduct.SetText(productName);
   txtProduct.Keys("[Tab]");
    if( formSearch.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }
});

Then("I confirm the Inventory movement transaction", function (){
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
});

function verifyInventorySite(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.ClickTab("Inventory");
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  if(records == 0){
    Log.Error("No Inventory Sites exist");
  } 
}
function closeSearchWdw(){
  if( Aliases.Aptify_Shell.SearchForm.Exists){
    Aliases.Aptify_Shell.SearchForm.Close();
  }
}
function clickFindProductButton(){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.ClickButton();
}

function clickSaveAndClose (){
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
  if(Aliases.Aptify_Shell.LocalizedMsgBox.Exists){
    Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
  }
}

function openProductInformationPanel(productPar){
  let txtProduct = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;

  let i = 0;
  
  txtProduct.Click();
  txtProduct.SetText(productPar);
  productName = productPar;
  txtProduct.Keys("[Tab]");
  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  if( Aliases.Aptify_Shell.SearchForm.Exists )
  { 
  let grid = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = grid.wRowCount;
  for(i;i<records;i++){
   if(productPar == grid.wValue(i, 1).OleValue){
     grid.DblClickCell(i,1);
     break
   }
  }  
 }
}

function retrieveAvailableQuantity(){
  let availableQtyDisplayed = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_InventorySites.PTProducts_OTC_Inventory_SupplySite_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.wValue(0, 3).OleValue;
  availableQty = availableQtyDisplayed;  
}

When("I move Inventory from Bulk to Forward", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.Drag(12, 26, -232, 215);

 enterToLocation();
 enterInventory();
 clickTransferButton();
 clickFinish();
});

When("I confirm the Inventory movement transaction", function (){
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
});

When("I verify the product {arg} with Suppliers", function (productPar){
  clickFindProductButton();
  openProductInformationPanel(productPar);
  verifyInventorySite();
  retrieveAvailableQuantity();
  checkSuppliers();
  clickSaveAndClose();
  closeSearchWdw();
});

function checkSuppliers(){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.ClickTab("Supplier Orders");
  let radGridView = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_SupplierOrders.PTProducts_OTC_Inventory_SupplierOrders.PTProducts_OTC_Inventory_SupplierOrders_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = radGridView.wRowCount;
  let i = 0;
  let passCount = 0;
  if(records == 0){
    Log.Error("No Supplier Orders Exist");
  }
  else {
    for(i;i<records;i++){
      if(radGridView.wValue(i,5).OleValue == true){
        passCount +=1;
      }
    }
    if(passCount == records){
      Log.Error("No Supplier Orders Exist");
    }
  }
  
}

Then("I move Inventory from Bulk to Forward", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.Drag(12, 26, -232, 215);

 enterToLocation();
 enterInventory();
 clickTransferButton();
 clickFinish();
});

function enterToLocation(){
  let txtToLocation = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_LinkedLocationItemID.txtLink;
  
  txtToLocation.Click();
  txtToLocation.SetText("WAF2B01A");
  txtToLocation.Keys("[Tab]");
}


function enterInventory(){
  if(aqConvert.StrToInt(qtyLoose) > 0){
   let txtQtyLoose = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_TransactionQuantityLoose.txtInner; 
   txtQtyLoose.SetText(aqConvert.StrToInt(qtyLoose));
   txtQtyLoose.Keys("[Tab]");
  }
  
  if(aqConvert.StrToInt(size*packets) > 0){
    let txtPackets = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_TransactionNumberOfPackets.txtInner;
    txtPackets.SetText(aqConvert.StrToInt(packets));
    txtPackets.Keys("[Tab]");
  }
}

function clickTransferButton(){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_Active_Button_Transfer.Click();
  if(Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.Exists){
   Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton(); 
  }
}


function clickFinish(){
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
}

When("I select a valid product", function (){
  let ddProduct = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_PTProductVersionControl_1.advancedLinkBoxProducts.txtLink;
  ddProduct.Click();
  ddProduct.SetText(productName);
  ddProduct.Keys("[Tab]");
  
  handleProductsGrid();
});


When("I verify product {arg}", function (productPar){
  clickFindProductButton();
  openProductInformationPanel(productPar);
  verifyInventorySite();
  retrieveAvailableQuantity();
  clickSaveAndClose();
  closeSearchWdw();
});

When("I click on Apply button under manage inventory tab", function (){
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_InventoryTree.PT_Products_Inventory_StockManager.PT_Products_Inventory_StockManager_ActiveButtonApply.Click();
});

When("I enter Qty Loose from warehouse inventory movement {arg}", function (qtyLoose){
  let txtQtyLoose = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_TransactionQuantityLoose.txtInner;
  txtQtyLoose.Keys(qtyLoose);
  txtQtyLoose.Keys("[Tab]");
});

Then("I click on Finish Button to close confirm movements wizard", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
  Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnFinish.ClickButton();
});


When("I create new supplier order", function (){
  clickNewBtnUnderSupplierOrdersTab();
  selectOrderTypeToCreateSupplierOrder();
  retrieveOrderReference();
  selectRequisitionerToCreateSupplierOrder();
  
  selectSupplierFromOrigin();
  clickNewToAddSupplierRecord()
  selectProductInventorySupplierOrderItems();
  selectOrderQtyPacketSizeSupplierOrderItems();
  selectUnitCostInventorySupplierOrderItems();
  clickOkSupplierOrder();
  clickSaveAndCloseSupplierOrderWizard();
});

function clickSaveAndCloseSupplierOrderWizard()
{
  Aliases.Aptify_Shell.FormTemplateForm.datEntity.AptifyDataControl_Fill_Panel.zAptifyDataControl_Fill_Panel_Toolbars_Dock_Area_Top.ClickItem("Data Form|Save Record and Close Form");
}

function clickNewBtnUnderSupplierOrdersTab()
{
   Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.ClickTab("Supplier Orders");
  Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_SupplierOrders.PTProducts_OTC_Inventory_SupplierOrders.PTProducts_OTC_Inventory_SupplierOrders_Telerik_List_View_1.outerPanel.previewSplitContainer.SplitterPanel.radCommandBar1.Click(11, 20);
}
function selectOrderTypeToCreateSupplierOrder()
{
  let ddOrderType = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySupplierOrders_Form.PTInventorySupplierOrders_Tabs.tabMain.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General_OrderTypeID.LookupSearchCombo;
  
  ddOrderType.Click();
  ddOrderType.ClickItem("Supplier Order");
  ddOrderType.Keys("[Tab]");
}
function selectRequisitionerToCreateSupplierOrder()
{
  let ddRequisitioner =  Aliases.Aptify_Shell.FormTemplateForm.PTInventorySupplierOrders_Form.PTInventorySupplierOrders_Tabs.tabMain.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General_RequisitionerRoleID.txtLink;
   
   ddRequisitioner.Click();
   ddRequisitioner.SetText("Lionel clement");
   ddRequisitioner.Keys("[Tab]");
}
function clickNewToAddSupplierRecord()
{
  Aliases.Aptify_Shell.FormTemplateForm.PTInventorySupplierOrders_Form.PTInventorySupplierOrders_Tabs.tabMain.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General_Sub_Type_Control_1.zAptifyControlBase_Toolbars_Dock_Area_Top.ClickItem("SubType|New");
}
function selectOrderQtyPacketSizeSupplierOrderItems()
{
  let txtOrderQuantity = Aliases.Aptify_Shell.SubTypeTemplateForm.PTInventorySupplierOrderItems_Form.PTInventorySupplierOrderItems_Tabs.tabMain.PTInventorySupplierOrderItems_Tabs_General.PTInventorySupplierOrderItems_Tabs_General.PTInventorySupplierOrderItems_OrderQuantity.txtInner;
  let txtPackSize = Aliases.Aptify_Shell.SubTypeTemplateForm.PTInventorySupplierOrderItems_Form.PTInventorySupplierOrderItems_Tabs.tabMain.PTInventorySupplierOrderItems_Tabs_General.PTInventorySupplierOrderItems_Tabs_General.PTInventorySupplierOrderItems_PackSize.txtInner;
   
  txtOrderQuantity.SetText("500");
  txtOrderQuantity.Keys("[Tab]");
  txtPackSize.SetText("10");
  txtPackSize.Keys("[Tab]");
}
function selectProductInventorySupplierOrderItems()
{
  let ddProduct = Aliases.Aptify_Shell.SubTypeTemplateForm.PTInventorySupplierOrderItems_Form.PTInventorySupplierOrderItems_Tabs.tabMain.PTInventorySupplierOrderItems_Tabs_General.PTInventorySupplierOrderItems_Tabs_General.PTInventorySupplierOrderItems_Tabs_General_PTProductVersionControl_1.advancedLinkBoxProducts.txtLink;
  ddProduct.Click();
  ddProduct.Keys(productName);
  ddProduct.Keys("[Tab]");
  
  let radGridViewSupplierOrderItems = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1
  if(radGridViewSupplierOrderItems.Exists)
  {
    radGridViewSupplierOrderItems.DblClickCell(0, "Title");
  }
}
function selectUnitCostInventorySupplierOrderItems()
{
  let txtUnitCost = Aliases.Aptify_Shell.SubTypeTemplateForm.PTInventorySupplierOrderItems_Form.PTInventorySupplierOrderItems_Tabs.tabMain.PTInventorySupplierOrderItems_Tabs_General.PTInventorySupplierOrderItems_Tabs_General.PTInventorySupplierOrderItems_Tabs_General_UnitCost.txtInner;
  txtUnitCost.SetText("1.00");
  txtUnitCost.Keys("[Tab]");
}
function selectSupplierFromOrigin()
{
  let ddSupplier = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySupplierOrders_Form.PTInventorySupplierOrders_Tabs.tabMain.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General_SupplierRoleID.txtLink;
  ddSupplier.SetText("Garmin");
  ddSupplier.Keys("[Tab]");
}
function clickOkSupplierOrder()
{
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
}
function retrieveOrderReference()
{
  let txtOrderReference = Aliases.Aptify_Shell.FormTemplateForm.PTInventorySupplierOrders_Form.PTInventorySupplierOrders_Tabs.tabMain.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_OrderReference.txtInner.Text.OleValue;
  orderRef = txtOrderReference;
}

When("I open product record", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.ClickButton();
  let txtProduct = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText;

  let i = 0;
  
  txtProduct.Click();
  txtProduct.SetText(product);
  txtProduct.Keys("[Tab]");
  Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.switchPanel.searchButton.ClickButton();
  if( Aliases.Aptify_Shell.SearchForm.Exists )
  { 
  let grid = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
  let records = grid.wRowCount;
  for(i;i<records;i++){
   if(product == grid.wValue(i, 1).OleValue){
     grid.DblClickCell(i,1);
     break;
   }
  }  
 }
});



When("I enter Expected date and time {arg}", function (Time){
  let ExpectedDate = Aliases.Aptify_Shell.FormTemplateForm.PTInventoryDeliveries_Form.PTInventoryDeliveries_Tabs.tabMain.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_ExpectedDateTime.txtInner;
  ExpectedDate.Click();
  ExpectedDate.SetText(aqDateTime.Today());
  deliveryDate = date;
  ExpectedDate.Keys("[Tab]");
  Aliases.Aptify_Shell.FormTemplateForm.PTInventoryDeliveries_Form.PTInventoryDeliveries_Tabs.tabMain.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_Tabs_General_ExpectedTime.innerDateTimePicker.wTime = Time;
  deliverytime = Time;
});

When("I select Supplier Order from dropdown", function (){
  Aliases.Aptify_Shell.SubTypeTemplateForm.PTInventoryDeliveriesItems_Form.PTInventoryDeliveriesItems_Tabs.tabMain.PTInventoryDeliveriesItems_Tabs_General.PTInventoryDeliveriesItems_Tabs_General.PTInventoryDeliveriesItems_Tabs_General_SupplierOrderID.LookupSearchCombo.ClickItem(orderRef);
});

Then("Product information should be display in delivered dates in the calendar under Deliveries tab", function (){
  let aptify_Shell = Aliases.Aptify_Shell;
  let ultraToolbarsDockArea = Aliases.Aptify_Shell.FormTemplateForm.PTProducts_OTC_Form.Products_OTC_Tabs.tabMain.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory.PTProducts_OTC_Inventory_TABS.tabMain.PTProducts_OTC_Inventory_ExpectedDeliveries.PTProducts_OTC_Inventory_ExpectedDeliveries.PTProducts_OTC_Inventory_ExpectedDeliveries_View_Container_1.AptifyCalendarView.zAptifyCalendarView_Toolbars_Dock_Area_Top;
  ultraToolbarsDockArea.ClickItem("Calendar View|Go To Date");
  aptify_Shell.DropDownForm.PopupMenuControlTrusted.UltraToolbarsDockArea.calMonth.click(124,146);
  ultraToolbarsDockArea.ClickItem("Calendar View|Month View");

  
  let calendarInfo = deliverytime + " " + - + " " + productName
  let calendarGrid = Sys.Process("Aptify Shell").WinFormsObject("FormTemplateForm").WinFormsObject("PTProducts.OTC.Form").WinFormsObject("Products.OTC.Tabs").WinFormsObject("tabMain").WinFormsObject("PTProducts.OTC.Inventory").WinFormsObject("PTProducts.OTC.Inventory").WinFormsObject("PTProducts.OTC.Inventory.TABS").WinFormsObject("tabMain").WinFormsObject("PTProducts.OTC.Inventory.ExpectedDeliveries").WinFormsObject("PTProducts.OTC.Inventory.ExpectedDeliveries").WinFormsObject("PTProducts.OTC.Inventory.ExpectedDeliveries.View Container.1").WinFormsObject("AptifyCalendarView").WinFormsObject("AptifyCalendarView_Fill_Panel").WinFormsObject("ulMonthView").Grouping("[Unassigned]").Value;
  if(calendarGrid, cmpEqual , calendarInfo)
  {
  Log.Checkpoint("delivery record is display in calendar");
  }
  else{
   Log.Error("delivery record is not display in calendar")
  }
});

When("I retrieve product name to enter in received section", function (){
  throw new NotImplementedError();
});

When("I select a delivery of {arg}", function selectProduct_GoodsIn2(productGoodsIn){
   let txtProduct =  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_ProductID.txtLink;
   let gridProducts = Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel.radPanelResults.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1;
   let formSearch = Aliases.Aptify_Shell.SearchForm;
   txtProduct.Click();
   txtProduct.SetText(productGoodsIn);
   productName = productGoodsIn;
   txtProduct.Keys("[Tab]");
    
  if( formSearch.Exists )
   {
    gridProducts.DblClickCell(0, "Title");
   }
});

When("I click the goods in Add button", function clickGoodsInAdd(){
  Aliases.Aptify_Shell.FormTemplateForm.PTInventoryGoodsInWizard_View.PTInventoryGoodsInWizard_ReturnTabs.tabMain.PTInventoryGoodsInWizard_ReturnTabs_General.PTInventoryGoodsInWizard_ReturnsStep.PTInventoryGoodsInWizard_ReturnsStep_Active_Button_Add.Click();
});

When("I enter number of loose goods {arg}", function enterLooseGoodsQty(qtyLoosePar){
  let txtQtyLoose = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_418.PTInventoryGoodsInWizard_Step1.PTInventoryGoodsInWizard_Step1_LooseQty.txtInner;
  
  txtQtyLoose.Click();
  txtQtyLoose.SetText(qtyLoosePar);
  Project.Variables.qtyLoose = qtyLoosePar;
  txtQtyLoose.Keys("[Tab]");
});

Then("I move loose Inventory from Bulk to correct Forward", function (){
  Aliases.Aptify_Shell.GenericWizardForm.WizPanels_419.PTInventoryGoodsInWizard_Step2.Products_PT_Inventory_PTTreeELVNavigator.splitContainer.SplitterPanel.panelBehindDetail.panel4Detail.PTEntityListView.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.radGridView1.Drag(12, 26, -232, 215);

 enterSavedLocation();
 enterLooseInventory();
 clickTransferButton();
 clickFinish();
});

function enterSavedLocation(){
  let txtToLocation = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_LinkedLocationItemID.txtLink;
  
  txtToLocation.Click();
  txtToLocation.SetText(Project.Variables.inventoryLocation);
  txtToLocation.Keys("[Tab]");
}

function enterLooseInventory(){
  if((Project.Variables.qtyLoose) > 0){
   let txtQtyLoose = Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_TransactionQuantityLoose.txtInner; 
   txtQtyLoose.SetText(Project.Variables.qtyLoose);
   txtQtyLoose.Keys("[Tab]");
  }
}