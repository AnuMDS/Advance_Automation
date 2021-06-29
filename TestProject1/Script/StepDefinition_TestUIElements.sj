Then("shortcuts should be display on dashboard", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.pnlHeader.lblCaption, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.pnlHeader.lblCaption, "WndCaption", cmpEqual, "Shortcuts");
});

Then("I click on Find Customer", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton11.ClickButton();
});


Then("Find Customer window should be display with Search , Identifier textbox", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.fullSearch.PTRoleSearching.PTRoleSearching_Identifier, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText, "Exists", cmpEqual, true);
});

Then("Active checkbox should be checked", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel_new.searchParameters.radPanelParams.fullSearch.PTRoleSearching.PTRoleSearching_Active.chkInternal, "wState", cmpEqual, 1);
});

Then("I click on New Customer", function (){
  if(Aliases.Aptify_Shell.SearchForm.titlebar.buttonClose.Exists)
  {
    Aliases.Aptify_Shell.SearchForm.titlebar.buttonClose.ClickButton();
  }
  
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton.ClickButton();
});

Then("window should be opened with correct window title {arg}", function (windowTitle){
  var windowCaption = Aliases.Aptify_Shell.GenericWizardForm.titlebar.Value;
  if(aqObject.CompareProperty(windowCaption, cmpEqual,windowTitle))
  {
    Log.Checkpoint("window is opened with correct window title");
  }
  else
  {
    Log.Error("window is not opened with correct window title");
  }
  });

  
Then("New Customer window should be display with Person and Company area", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_ContactGroupBox.MainGroupBox, "Caption", cmpEqual, "Person");
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_430.PTCustomerWizard_Tabs_General.PTCustomerWizard_CompanyGroupBox.MainGroupBox, "Caption", cmpEqual, "Company");
});

Then("Reset , Cancel buttons should be display", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnCancel, "Caption", cmpEqual, "Cancel");
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnNext, "Caption", cmpEqual, "Next");
});

Then("Find Orders window should be display with Search Criteria", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.titlebar, "Value", cmpEqual, "New Order Search Record");
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top, "Caption", cmpEqual, "Search Criteria");
});

Then("Product , Customer dropdown should be display", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_ProductID, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_CustomerID, "Visible", cmpEqual, true);
});

//Then("I click on New Order", function (){
 // if(Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.Exists)
  //{
 //   Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.ClickButton();
 // }
 // Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton7.ClickButton();
//});

Then("New Order window should be display with Ship To,Bill to,End User dropdown", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook_ShipToRoleID, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook_BillToRoleID, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2_new.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook.PTOrders_Summary_AddressBook_Tab_AddressBook_LicenseeRoleID, "Visible", cmpEqual, true);
  
});

Then("Order Attributes,Checkout tabs should be display", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel2_new.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.pagetabOrderAttributes, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTOrders_OrderBasket.Orders.splitContainerOuter.SplitterPanel.panel4Summary.PTOrders_Summary.PTOrders_Summary_TabGroup.tabMain.pagetabCheckout, "Visible", cmpEqual, true);
});

Then("I click on Find Product", function (){
  if(Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.Exists)
  {
  Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.ClickButton();
  Aliases.Aptify_Shell.dlg.btnYes.ClickButton();
  }
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.DblClick();
});

Then("Find Product window should be display with Search link textbox and Identifiers textbox", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.quickSearch.quickSearchText, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel_new.searchParameters.radPanelParams.fullSearch.ProductOTCSearching.Identifier.lblInner, "Visible", cmpEqual, true);
});

Then("Series Mode checkbox should be unchecked", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.SearchForm.searchControl.splitContainer1.SplitterPanel2.searchParameters.radPanelParams.fullSearch.ProductOTCSearching.ProductOTCSearching_SeriesMode.chkInternal, "wState", cmpEqual, 0);
});

Then("New Product window should be display with Type,Imprint dropdown", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_Details_ProductDetails_ProductSubTypeID.LookupSearchCombo.combobox, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProducts_Wizard_Organizations.txtLink.edit, "Visible", cmpEqual, true);
});

Then("Open Product radio button should be display", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_ProductTitle_OpenOnCompletionOptions.Open_Product_FormItems_DisplayName_OpenProduct_P, "Caption", cmpEqual, "Open Product");
  aqObject.CheckProperty(Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_ProductTitle_OpenOnCompletionOptions.Open_Product_FormItems_DisplayName_OpenProduct_P, "wChecked", cmpEqual, true);
});

Then("I click on Price and Availability", function (){
  if(Aliases.Aptify_Shell.PTProductWizard.titlebar.buttonClose.Exists)
  {
  Aliases.Aptify_Shell.PTProductWizard.titlebar.buttonClose.ClickButton();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
  if(Aliases.Aptify_Shell.SearchForm.titlebar.buttonClose.Exists)
  {
    Aliases.Aptify_Shell.SearchForm.titlebar.buttonClose.ClickButton();
  }
  }
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton17.ClickButton();
});

Then("window should be display with Product dropdown", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTQuotations_PanelForm.PTQuotations_PanelForm_PT_MultiPanelForm_1.splitContainerMain.SplitterPanel.splitContainerTop.SplitterPanel.PTQuotations_OTC_Customer_TopLeft.PTQuotations_OTC_Customer_TopLeftPart.tabMain.PTQuotations_Product_Tab.PTQuotations_Product_Tab.PTQuotations_Product_Tab_ProductID.txtLink.EmbeddableTextBoxWithUIPermissions, "Visible", cmpEqual, true);

});

Then("I click on Manage Backorders", function (){
  if(Aliases.Aptify_Shell.GenericWizardForm.titlebar.buttonClose.Exists)
  {
    Aliases.Aptify_Shell.GenericWizardForm.titlebar.buttonClose.ClickButton();
    Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
  }
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton13.ClickButton();
});


Then("Backorder Wizard window should be display with Product,Customer dropdown", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_ProductID.lblLink, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_CustomerID.txtLink, "Visible", cmpEqual, true);
});

Then("Bill To and Ship To checkbox should be checked", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_BillTo.chkInternal, "wState", cmpEqual, 1);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_ShipTo.chkInternal, "wState", cmpEqual, 1);
});

Then("I click on Claims", function (){
  if(Aliases.Aptify_Shell.GenericWizardForm.titlebar.buttonClose.Exists)
  {
   Aliases.Aptify_Shell.GenericWizardForm.titlebar.buttonClose.ClickButton();
   Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
  }
   Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton18.ClickButton();
});

Then("New Claims window should be display with Options section", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_368.PTClaimsWizard_Options.PTClaimsWizard_Options_Grouped_Options_1, "Visible", cmpEqual, true);
});

Then("New, Existing radio button should be display", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_368.PTClaimsWizard_Options.PTClaimsWizard_Options_Grouped_Options_1.New, "Caption", cmpEqual, "New");
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_368.PTClaimsWizard_Options.PTClaimsWizard_Options_Grouped_Options_1.New, "wChecked", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_368.PTClaimsWizard_Options.PTClaimsWizard_Options_Grouped_Options_1.Existing, "Caption", cmpEqual, "Existing");
});

Then("I click on Raise a Case", function (){
  if(Aliases.Aptify_Shell.GenericWizardForm.titlebar.buttonClose.Exists)
  {
  Aliases.Aptify_Shell.GenericWizardForm.titlebar.buttonClose.ClickButton();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
  }
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton19.ClickButton();
});

Then("Raise a Case window should be display with Case Role,Role Type fields", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCases_Form.PTCases_Tabs.tabMain.PTCases_Tabs_General.PTCases_Tabs_General.PTCases_Tabs_General_CaseRoleID.txtLink.EmbeddableTextBoxWithUIPermissions, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTCases_Form.PTCases_Tabs.tabMain.PTCases_Tabs_General.PTCases_Tabs_General.PTCases_Tabs_General_CaseRoleTypeID.LookupSearchCombo.combobox, "Visible", cmpEqual, true);
});

Then("I click on Contact", function (){
  if(Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.Exists)
  {
    Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.ClickButton();
    Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
  }
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton20.Click();
});


Then("Contact window should be display with Contact,Name fields", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.Contact_Log_Form.Contact_Log_Form_PTCustomerRoleID.txtLink, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.Contact_Log_Form.Contact_Log_Form_Name.txtInner, "Visible", cmpEqual, true);
});

Then("I close window", function (){
  
  var aptify_Shell = Aliases.Aptify_Shell;
  aptify_Shell.GenericWizardForm.titlebar.buttonClose.ClickButton();
  aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
  
  var aptify_Shell = Aliases.Aptify_Shell;
  aptify_Shell.FormTemplateForm.titlebar.buttonClose.ClickButton();
  
  var aptify_Shell = Aliases.Aptify_Shell;
  aptify_Shell.FormTemplateForm.titlebar.buttonClose.ClickButton();
  aptify_Shell.dlg.btnYes.ClickButton();
  
  
  
  var aptify_Shell = Aliases.Aptify_Shell;
  var PTProductWizard = aptify_Shell.PTProductWizard;
  var button = PTProductWizard.titlebar.buttonClose;
  button.ClickButton();
  aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
  button.ClickButton();
  
 
});

Then("Window should be opened with correct window title {arg}", function (windowTitle){
  
  var windowCaption = Aliases.Aptify_Shell.FormTemplateForm.titlebar.Value;
  if(aqObject.CompareProperty(windowCaption, cmpEqual,windowTitle))
  {
    Log.Checkpoint("window is opened with correct window title");
  }
  else
  {
    Log.Error("window is not opened with correct window title");
  }
});


Then("window should be opened with window title {arg}", function (windowTitle){
  var windowCaption = Aliases.Aptify_Shell.SearchForm.titlebar.Value;
  if(aqObject.CompareProperty(windowCaption, cmpEqual,windowTitle))
  {
    Log.Checkpoint("window is opened with correct window title");
  }
  else
  {
    Log.Error("window is not opened with correct window title");
  }
});

Then("New Product window should be opened with correct window title {arg}", function (windowTitle){
  var windowCaption = Aliases.Aptify_Shell.PTProductWizard.titlebar.Value;
  if(aqObject.CompareProperty(windowCaption, cmpEqual,windowTitle))
  {
    Log.Checkpoint("window is opened with correct window title");
  }
  else
  {
    Log.Error("window is not opened with correct window title");
  }
});

Then("Window should be opened with correct window title", function (){
  var wizardProductId =  Aliases.Aptify_Shell.FormTemplateForm; 
  var wdwTitle =  aqObject.GetPropertyValue(wizardProductId , "WndCaption");
  var wdwId = ( aqString.SubString(wdwTitle, 0, 10) );

  if(aqObject.CompareProperty(wdwId, cmpEqual,"Orders ID:"))
  {
    Log.Checkpoint("window is opened with correct window title");
  }
  else
  {
    Log.Error("window is not opened with correct window title");
  }
});

Then("I click on Find Product From Inventory folder list", function (){
  var aptify_Shell = Aliases.Aptify_Shell;
  aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton2.ClickButton();
});

Then("I click on New Supplier Order", function (){
  if(Aliases.Aptify_Shell.SearchForm.titlebar.buttonClose.Exists)
  {
    Aliases.Aptify_Shell.SearchForm.titlebar.buttonClose.ClickButton();
  }
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton7.ClickButton();
});

Then("Order Date, Order Type and Order Reference fields should be display", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTInventorySupplierOrders_Form.PTInventorySupplierOrders_Tabs.tabMain.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_OrderDate.txtInner.EmbeddableTextBoxWithUIPermissions, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTInventorySupplierOrders_Form.PTInventorySupplierOrders_Tabs.tabMain.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General_OrderTypeID, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTInventorySupplierOrders_Form.PTInventorySupplierOrders_Tabs.tabMain.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_OrderReference, "Visible", cmpEqual, true);
});

Then("Authorisation Required checkbox should be display", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTInventorySupplierOrders_Form.PTInventorySupplierOrders_Tabs.tabMain.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General_IsAuthorisationRequired.chkInternal, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTInventorySupplierOrders_Form.PTInventorySupplierOrders_Tabs.tabMain.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General.PTInventorySupplierOrders_Tabs_General_IsAuthorisationRequired.chkInternal, "wState", cmpEqual, 0);
});

Then("I click on New Delivery", function (){
  if(Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.Exists)
  {
    Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.ClickButton();
    Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
  }
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton16.ClickButton();
});

Then("Origin Warehouse,Supplier and Destination Warehouse fields should be display", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTInventoryDeliveries_Form.PTInventoryDeliveries_Tabs.tabMain.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_Tabs_General_OriginWarehouseID, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTInventoryDeliveries_Form.PTInventoryDeliveries_Tabs.tabMain.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_Tabs_General_SupplierRoleID, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTInventoryDeliveries_Form.PTInventoryDeliveries_Tabs.tabMain.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_Tabs_General.PTInventoryDeliveries_Tabs_General_DestinationWarehouseID, "Visible", cmpEqual, true);
});

//Then("I click on Goods In", function (){
  //var aptify_Shell = Aliases.Aptify_Shell;
  //aptify_Shell.FormTemplateForm.titlebar.buttonClose.ClickButton();
  //aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
  //aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton3.ClickButton();
//});

Then("Site\\/Warehouse,Location,Received Date fields should be display", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_417.PTInventoryGoodsInWizard_NewStep1.PTInventoryGoodsInWizard_NewStep1_SiteWarehouseID, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_417.PTInventoryGoodsInWizard_NewStep1.PTInventoryGoodsInWizard_NewStep1_LocationID, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_417.PTInventoryGoodsInWizard_NewStep1.PTInventoryGoodsInWizard_NewStep1_ReceivedDate, "Visible", cmpEqual, true);
});

Then("Next,Cancel buttons should be display", function (){
  
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnCancel, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizMain.btnNext, "Visible", cmpEqual, true);
});

Then("I click on Inventory Movements", function (){
  if(Aliases.Aptify_Shell.GenericWizardForm.titlebar.buttonClose.Exists)
  {
    Aliases.Aptify_Shell.GenericWizardForm.titlebar.buttonClose.ClickButton();
    Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
  }
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton4.ClickButton();
});

Then("From and To sections should be display", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_Group_Box_5.MainGroupBox, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_Group_Box_6.MainGroupBox, "Caption", cmpEqual, "To");
});

Then("Site,Warehouse and Location Type fields should be display under To section", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_PT_Group_Box_2.PT_WarehouseStockManagerWizard_ToLevels.PT_WarehouseStockManagerWizard_ToLevels_SiteID, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_PT_Group_Box_2.PT_WarehouseStockManagerWizard_ToLevels.PT_WarehouseStockManagerWizard_ToLevels_WarehouseID, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_161.PT_WarehouseMovementWizard_Step1.PT_WarehouseMovementWizard_Step1_PT_Group_Box_2.PT_WarehouseStockManagerWizard_ToLevels.PT_WarehouseStockManagerWizard_ToLevels_TypeID, "Visible", cmpEqual, true);
});

Then("I click on Confirm Movements", function (){
  if(Aliases.Aptify_Shell.GenericWizardForm.titlebar.buttonClose.Exists)
  {
    Aliases.Aptify_Shell.GenericWizardForm.titlebar.buttonClose.ClickButton();
    Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
  }
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton5.ClickButton();
});

Then("Search and Result sections should be display", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_188.PTInventoryConfirmTransactions_Tabs_General.PTInventoryConfirmTransactions_Tabs_General_Group_Box_1.MainGroupBox, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_188.PTInventoryConfirmTransactions_Tabs_General.PTInventoryConfirmTransactions_Tabs_General_Group_Box_2.MainGroupBox, "Visible", cmpEqual, true);
});

Then("Site\\/Warehouse,Location fields should be display under Search section", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_188.PTInventoryConfirmTransactions_Tabs_General.PTInventoryConfirmTransactions_Tabs_General_SiteWarehouseID, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_188.PTInventoryConfirmTransactions_Tabs_General.PTInventoryConfirmTransactions_Tabs_General_LocationID, "Visible", cmpEqual, true);
});

Then("I click on Returns", function (){
  if(Aliases.Aptify_Shell.GenericWizardForm.titlebar.buttonClose.Exists)
  {
    Aliases.Aptify_Shell.GenericWizardForm.titlebar.buttonClose.ClickButton();
    Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
  }
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton6.ClickButton();
});

Then("General,Attachments tabs should be display", function (){

  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTInventoryGoodsInWizard_View.PTInventoryGoodsInWizard_ReturnTabs.tabMain.pagetabGeneral, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTInventoryGoodsInWizard_View.PTInventoryGoodsInWizard_ReturnTabs.tabMain.pagetabAttachments, "Visible", cmpEqual, true);
});

Then("RAN,INV\\/Pack No fields should be display", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTInventoryGoodsInWizard_View.PTInventoryGoodsInWizard_ReturnTabs.tabMain.PTInventoryGoodsInWizard_ReturnTabs_General.PTInventoryGoodsInWizard_ReturnsStep.PTInventoryGoodsInWizard_ReturnsStep_ReturnsReference, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.PTInventoryGoodsInWizard_View.PTInventoryGoodsInWizard_ReturnTabs.tabMain.PTInventoryGoodsInWizard_ReturnTabs_General.PTInventoryGoodsInWizard_ReturnsStep.PTInventoryGoodsInWizard_ReturnsStep_InvoicePackNumber, "Visible", cmpEqual, true);
});

Then("I click on Sets Make & Break", function (){
  if(Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.Exists)
  {
    Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.ClickButton();
  }
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton10.ClickButton();
});

Then("Inventory,Sets Make and Sets Break sections should be display", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_193.PTInventorySetsMakeAndBreakWizard_Step1.PTInventorySetsMakeAndBreakWizard_Step1_Group_Box_1.MainGroupBox, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_193.PTInventorySetsMakeAndBreakWizard_Step1.PTInventorySetsMakeAndBreakWizard_Step1_Group_Box_2.MainGroupBox, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_193.PTInventorySetsMakeAndBreakWizard_Step1.PTInventorySetsMakeAndBreakWizard_Step1_Group_Box_3.MainGroupBox, "Visible", cmpEqual, true);
});

Then("You can Break and You can Make fields should be display", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_193.PTInventorySetsMakeAndBreakWizard_Step1.PTInventorySetsMakeAndBreakWizard_Step1_MaxAvailableStock, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_193.PTInventorySetsMakeAndBreakWizard_Step1.PTInventorySetsMakeAndBreakWizard_Step1_MaxAllocatedSetsToBreak, "Visible", cmpEqual, true);
});

Then("Product,Customer,Reference Type fields should be display", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_ProductID, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_CustomerID, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm.WizPanels_184.PTBackOrderWizard_Selection.BackOrderWizard_Step1_TopArea_CustomerReference, "Visible", cmpEqual, true);
});

//Then("I click on Find an Order", function (){
  
  //if(Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.Exists)
 //{
  //Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.ClickButton();
 // Aliases.Aptify_Shell.dlg.btnYes.ClickButton();
  //}
 // Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_FindOrder.buttonImage.ClickButton();
//});

Then("Reference,Product and Customer fields should be display", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_Reference, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_ProductID, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm.OrderSearch_Form.OrderSearch_Form_CollapsibleGroupBox_Top.panel4Content.OrderSearch_Form_SearchCriteria.OrderSearch_Form_SearchCriteria_CustomerID, "Visible", cmpEqual, true);

});

Then("Popup should be display with the message {arg}", function (text){
  var popupText = Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.txtMessage.edit.Text;
  if(aqObject.CompareProperty(popupText, cmpEqual,text))
  {
    Log.Checkpoint("Popup text is display");
  }
  else
  {
    Log.Error("Popup Text is not display");
  }
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnOne.ClickButton();
  
});

Then("I click on Standing Order\\(Calc)", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_StandingOrderCalc.buttonImage.ClickButton();
});

Then("I click on Renewals Billing Wave", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_RenewalBillingWave.buttonImage.ClickButton();
});

Then("I click on Charge By Release Billing Wave", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_DispatchBillingWave.buttonImage.ClickButton();
});



//When("I click on Standing Order Administration", function (){
  //Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea2.DockableWindow2.aptifyTree.tvwMain.outlineitemStandingOrderAdminist.Click();
//});

Then("Standing Order Release, Standing Order \\(Calc), Standing Order Catchups, Standing Order Reprocess Orders should be display", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea3.DashCtrlWrapper.ButtonBar.UltraButton6, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea2_new.DashCtrlWrapper.ButtonBar.UltraButton3, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea3.DashCtrlWrapper.ButtonBar.UltraButton7, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea3.DashCtrlWrapper.ButtonBar.UltraButton8, "Visible", cmpEqual, true);
});

Then("I click on Find Customer from Standing Order Administration folder list", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea3.DashCtrlWrapper.ButtonBar.UltraButton9.ClickButton();
});

Then("I click on Find Product from Standing Order Administration folder list", function (){
  if(Aliases.Aptify_Shell.SearchForm.titlebar.buttonClose.Exists)
  {
    Aliases.Aptify_Shell.SearchForm.titlebar.buttonClose.ClickButton();
  }
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea3.DashCtrlWrapper.ButtonBar.UltraButton3.ClickButton();
});

Then("I click on Find Orders from Standing Order Administration folder list", function (){
  if(Aliases.Aptify_Shell.SearchForm.titlebar.buttonClose.Exists)
  {
    Aliases.Aptify_Shell.SearchForm.titlebar.buttonClose.ClickButton();
  }
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea3.DashCtrlWrapper.ButtonBar.UltraButton10.ClickButton();
});

//When("I click on Sales & Marketing", function (){
  //Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea2.DockableWindow2.aptifyTree.tvwMain.outlineitemSalesMarketing.Click();
//});

Then("All the elements should be display on dashboard under sales and marketing option", function (){
  var dashboardSalesAndMarketing = Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.EntityBrowser.EntityBrowser_Fill_Panel.SplitContainer1.SplitterPanel.lvwMain
  aqObject.CheckProperty(dashboardSalesAndMarketing.listitemCampaigns, "Exists", cmpEqual, true);
  aqObject.CheckProperty(dashboardSalesAndMarketing.listitemPromotionListUsage, "Exists", cmpEqual, true);
  aqObject.CheckProperty(dashboardSalesAndMarketing.listitemPromotionOfferDefinition, "Exists", cmpEqual, true);
  aqObject.CheckProperty(dashboardSalesAndMarketing.listitemPromotionPrices, "Exists", cmpEqual, true);
  aqObject.CheckProperty(dashboardSalesAndMarketing.listitemPromotionOfferDefinition2, "Exists", cmpEqual, true);
  aqObject.CheckProperty(dashboardSalesAndMarketing.listitemIssuedPromotionCodes, "Exists", cmpEqual, true);
  aqObject.CheckProperty(dashboardSalesAndMarketing.listitemMarketingInterests, "Exists", cmpEqual, true);
  aqObject.CheckProperty(dashboardSalesAndMarketing.listitemMarketingMailings, "Exists", cmpEqual, true);
  aqObject.CheckProperty(dashboardSalesAndMarketing.listitemMarketingMailings2, "Exists", cmpEqual, true);
  aqObject.CheckProperty(dashboardSalesAndMarketing.listitemMarketingMailingTargets, "Exists", cmpEqual, true);
  aqObject.CheckProperty(dashboardSalesAndMarketing.listitemMailingListSelections, "Exists", cmpEqual, true);
  aqObject.CheckProperty(dashboardSalesAndMarketing.listitemMarketingMailingSplits, "Exists", cmpEqual, true);
  aqObject.CheckProperty(dashboardSalesAndMarketing.listitemMarketingQueryMailingTar, "Exists", cmpEqual, true);
  aqObject.CheckProperty(dashboardSalesAndMarketing.listitemMarketingMailingLists, "Exists", cmpEqual, true);
  aqObject.CheckProperty(dashboardSalesAndMarketing.listitemMarketingMaterials, "Exists", cmpEqual, true);
  aqObject.CheckProperty(dashboardSalesAndMarketing.listitemDocumentAdditions, "Exists", cmpEqual, true);
  aqObject.CheckProperty(dashboardSalesAndMarketing.listitemConsortiaContracts, "Exists", cmpEqual, true);
  aqObject.CheckProperty(dashboardSalesAndMarketing.listitemCompanies, "Exists", cmpEqual, true);
  aqObject.CheckProperty(dashboardSalesAndMarketing.listitemPromotionAndMailingLists, "Exists", cmpEqual, true);
  aqObject.CheckProperty(dashboardSalesAndMarketing.listitemPromotions, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.EntityBrowser.EntityBrowser_Fill_Panel.SplitContainer1.SplitterPanel.lblCaption, "Caption", cmpEqual, " Sales & Marketing");
  aqObject.CheckProperty(Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.EntityBrowser.EntityBrowser_Fill_Panel.SplitContainer1.SplitterPanel.lblCaption, "Visible", cmpEqual, true);
  
});

Then("I click on New order from folder list", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_NewOrder.buttonImage.ClickButton();
});


When("I check the elements from folder list", function (){
  var listCustomerServices = Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.outlineitemCustomerServices
  var listInventory = Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.outlineitemInventory
  var listOrders = Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.outlineitemOrders
  var listSalesMarketing = Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.outlineitemSalesMarketing
  var listStandingOrderAdm = Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.outlineitemStandingOrderAdminist
  
  
  if(listCustomerServices.Exists)
  {
    Log.Checkpoint("Customer Services present");
  }
  else
  {
    Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.ClickItemR("advance> Home");
    Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.StripPopupMenu.Click("Applications");
    Aliases.Aptify_Shell.ApplicationsForm.fxgAvailable.rowRow1.cellRow1Column3.Click();
    Aliases.Aptify_Shell.ApplicationsForm.fxgAvailable.rowRow1.cellRow1Column3.Keys("Customer Services");
    Aliases.Aptify_Shell.ApplicationsForm.btnSelectApplication.ClickButton();
    Aliases.Aptify_Shell.ApplicationsForm.btnOK.ClickButton();
  }
  
  if(listInventory.Exists)
  {
    Log.Checkpoint("Inventory present");
  }
  else
  {
    Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.ClickItemR("advance> Home");
    Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.StripPopupMenu.Click("Applications");
    Aliases.Aptify_Shell.ApplicationsForm.fxgAvailable.rowRow1.cellRow1Column3.Click();
    Aliases.Aptify_Shell.ApplicationsForm.fxgAvailable.rowRow1.cellRow1Column3.Keys("Inventory");
    Aliases.Aptify_Shell.ApplicationsForm.btnSelectApplication.ClickButton();
    Aliases.Aptify_Shell.ApplicationsForm.btnOK.ClickButton();
  }
  
  
  if(listOrders.Exists)
  {
    Log.Checkpoint("Orders present");
  }
  else
  {
    Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.ClickItemR("advance> Home");
    Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.StripPopupMenu.Click("Applications");
    Aliases.Aptify_Shell.ApplicationsForm.fxgAvailable.rowRow1.cellRow1Column3.Click();
    Aliases.Aptify_Shell.ApplicationsForm.fxgAvailable.rowRow1.cellRow1Column3.Keys("Orders");
    Aliases.Aptify_Shell.ApplicationsForm.btnSelectApplication.ClickButton();
    Aliases.Aptify_Shell.ApplicationsForm.btnOK.ClickButton();
  }
  
  if(listSalesMarketing.Exists)
  {
    Log.Checkpoint("Sales and Marketing present");
  }
  else
  {
    Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.ClickItemR("advance> Home");
    Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.StripPopupMenu.Click("Applications");
    Aliases.Aptify_Shell.ApplicationsForm.fxgAvailable.rowRow1.cellRow1Column3.Click();
    Aliases.Aptify_Shell.ApplicationsForm.fxgAvailable.rowRow1.cellRow1Column3.Keys("Sales & Marketing");
    Aliases.Aptify_Shell.ApplicationsForm.btnSelectApplication.ClickButton();
    Aliases.Aptify_Shell.ApplicationsForm.btnOK.ClickButton();
  }
  
  if(listStandingOrderAdm.Exists)
  {
    Log.Checkpoint("Standing Order administration present");
  }
  else
  {
    Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.ClickItemR("advance> Home");
    Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.StripPopupMenu.Click("Applications");
    Aliases.Aptify_Shell.ApplicationsForm.fxgAvailable.rowRow1.cellRow1Column3.Click();
    Aliases.Aptify_Shell.ApplicationsForm.fxgAvailable.rowRow1.cellRow1Column3.Keys("Standing Order Administration");
    Aliases.Aptify_Shell.ApplicationsForm.btnSelectApplication.ClickButton();
    Aliases.Aptify_Shell.ApplicationsForm.btnOK.ClickButton();
  }

});

When("I add elements in folder list", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea2.DockableWindow2.aptifyTree.tvwMain.outlineitemStandingOrderAdminist, "Caption", cmpEqual, "Standing Order Administration");
});

Then("Localized message box should be opened with correct title {arg}", function (windowTitle){
  var windowCaption = Aliases.Aptify_Shell.LocalizedMsgBox.titlebar.Value;
  //Log.Message(windowCaption);
  if(aqObject.CompareProperty(windowCaption, cmpEqual,windowTitle))
  {
    Log.Checkpoint("Localized message box is opened with correct window title");
  }
  else
  {
    Log.Error("Localized message box is not opened with correct window title");
  }
});


Then("I click on Billing Wave Release from Orders dashboard", function (){
  if(Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.Exists)
  {
     Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.ClickButton();
  }
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_BillingWaveRelease.buttonImage.ClickButton();
});


Then("I click on Standing Order Release from Orders dashboard", function (){
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTOrders_Dashboard.PTOrders_Dashboard_PT_IconButton_StandingOrderRelease.buttonImage.ClickButton();
});

Then("I click on Manual Credit", function (){
  var aptify_Shell = Aliases.Aptify_Shell;
  aptify_Shell.GenericWizardForm.titlebar.buttonClose.ClickButton();
  aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton19.ClickButton();
});

//Then("Manual Crediting and Manual Crediting Returns should be display", function (){
  //aqObject.CheckProperty(Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.pnlToolBar.lblTitle, "Exists", cmpEqual, true);
  //aqObject.CheckProperty(Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea2.DashCtrlWrapper.AdvanceGroupBoxDashboardControl.PTvOrderItemsAutoCreditingReturns_General.PTvOrderItemsAutoCreditingReturns_General_Telerik_List_View_OrdersAutoCreditingReturns.outerPanel.previewSplitContainer.SplitterPanel.panel4CaptionAndGrid.captionPanel, "Exists", cmpEqual, true);
  //aqObject.CheckProperty(Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea3.DashCtrlWrapper.WinFormsObject("pnlHeader").WinFormsObject("lblCaption"), "Caption", cmpEqual, "Active Marketing Materials");
//});

Then("Main Dashboard, New Credit buttons should be display", function (){
  
  aqObject.CheckProperty(Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton21, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton22, "Exists", cmpEqual, true);
});

//TopBanner

When("I verify top banner buttons for Orders", function (){
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.DblClickItem("advance> Home|Orders");
  verifyingNewOrdersPage();
  //verifyingFindOrdersPage();
  //verifyingNewBackordersPage();
  verifyingFindBackordersPage();
  //verifyingNewOrderItemLicenseMonthlyPage();
  verifyingFindOrderItemLicenseMonthlyPage();
  //verifyingNewOrderQueryPage();
  verifyingFindOrderQueryPage();
  //verifyingNewOrderTransactionsForReportsPage();
  verifyingFindOrderTransactionsForReportsPage();
});

function verifyingNewOrdersPage()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Orders|Orders|New");
  
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpContains, "Orders ID:")){
   Log.Checkpoint("New Order Creation window is displayed"); 
  }
  else{
   Log.Error("New Order Creation window is not displayed"); 
  }
  
  Aliases.Aptify_Shell.FormTemplateForm.Close();
  Aliases.Aptify_Shell.dlg.btnYes.ClickButton();
}

function verifyingFindOrdersPage()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Orders|Orders|Find");
  
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "Caption", cmpEqual, "advance> Find - Orders")){
   Log.Checkpoint("Find Orders window is displayed"); 
  }
  else{
   Log.Error("Find Orders window is not displayed"); 
  }    
    
  Aliases.Aptify_Shell.SimpleFindDialog.titlebar.buttonClose.ClickButton();
}

function verifyingNewBackordersPage(){
  //Pending
}

function verifyingFindBackordersPage()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Orders|Back Orders|Find");
  
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Back Orders")){
   Log.Checkpoint("Find Back Orders window is displayed"); 
  }
  else{
   Log.Error("Find Back Orders window is not displayed"); 
  }
  
  Aliases.Aptify_Shell.SimpleFindDialog.Close();
}

function verifyingNewOrderItemLicenseMonthlyPage()
{ 
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Orders|Order Item License Monthly|New");

  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpEqual, "New Order Item License Monthly Record")){
   Log.Checkpoint("New Order Item License Monthly Record is displayed"); 
  }
  else{
   Log.Error("New Order Item License Monthly Record is not displayed"); 
  }  
  
  Aliases.Aptify_Shell.FormTemplateForm.Close();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.WinFormsObject("btnTwo").ClickButton();
}

function verifyingFindOrderItemLicenseMonthlyPage()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Orders|Order Item License Monthly|Find");

  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Order Item License Monthly")){
   Log.Checkpoint("Find Order Item License Monthly window is displayed"); 
  }
  else{
   Log.Error("Find Order Item License Monthly window is not displayed"); 
  }
  
  Aliases.Aptify_Shell.SimpleFindDialog.Close();
}

function verifyingNewOrderQueryPage(){
  //Pending
}

function verifyingFindOrderQueryPage()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Orders|Order Query|Find");
  
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Order Query")){
   Log.Checkpoint("Find Order Query window is displayed"); 
  }
  else{
   Log.Error("Find Order Query window is not displayed"); 
  }  
  
  Aliases.Aptify_Shell.SimpleFindDialog.Close(); 
}

function verifyingNewOrderTransactionsForReportsPage(){
  //Pending
}

function verifyingFindOrderTransactionsForReportsPage()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Orders|Order Transactions For Reports|Find");
  
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Order Transactions For Reports")){
   Log.Checkpoint("Find Order Transactions For Reports window is displayed"); 
  }
  else{
   Log.Error("Find Order Transactions For Reports window is not displayed"); 
  }  
    
  Aliases.Aptify_Shell.SimpleFindDialog.Close();
}

When("I verify top banner buttons for Customer Services", function (){
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.DblClickItem("advance> Home|Customer Services");
  verifyingFindOrder();
  verifyingOrderSearchOptions();
  verifyingCreatNewOrder();
  verifyingCreateNewProduct();
  verifyingFindProduct();
  verifyingCreateNewPerson();
  verifyingFindPerson();
  verifyingCreateNewCompany();
  verifyingFindCompany();
  verifyingCreateNewContactLog();
  verifyingFindContactLog();
  verifyingPriceAvailability();
});

function verifyingFindOrder()
{ 
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Customer Services|Order Search|Find Order");
  
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpEqual, "New Order Search Record")){
   Log.Checkpoint("New Order Search Record is displayed"); 
  }
  else{
   Log.Error("New Order Search Record is not displayed"); 
  }  
  
  Aliases.Aptify_Shell.FormTemplateForm.Close();
}

function verifyingOrderSearchOptions()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Customer Services|Order Search|Order Search Options");
  
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpEqual, "New Order Search Record")){
   Log.Checkpoint("Order Search Options window is displayed"); 
  }
  else{
   Log.Error("Order Search Options window is not displayed"); 
  }  
  
  Aliases.Aptify_Shell.FormTemplateForm.Close();  
}

function verifyingCreatNewOrder()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Customer Services|Order Search|Create a New Order");
  
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpContains, "Orders ID:")){
   Log.Checkpoint("New Order Creation window is displayed"); 
  }
  else{
   Log.Error("New Order Creation window is not displayed"); 
  }
  
  Aliases.Aptify_Shell.FormTemplateForm.Close();
  Aliases.Aptify_Shell.dlg.btnYes.ClickButton();
}

function verifyingCreateNewProduct()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Customer Services|Products|Create a New Product");

  if(aqObject.CheckProperty(Aliases.Aptify_Shell.PTProductWizard, "WndCaption", cmpEqual, "Create New Product")){
   Log.Checkpoint("Create New Product window is displayed"); 
  }
  else{
   Log.Error("Create New Product window is not displayed"); 
  }
  
  Aliases.Aptify_Shell.PTProductWizard.Close();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
}

function verifyingFindProduct()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Customer Services|Products|Find a Product");

  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SearchForm, "WndCaption", cmpEqual, "Product Searching (Prefix Matching) Near Mode")){
   Log.Checkpoint("Find Product window is displayed"); 
  }
  else{
   Log.Error("Find Product window is not displayed"); 
  }

  Aliases.Aptify_Shell.SearchForm.Close();
}
function verifyingCreateNewPerson()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Customer Services|Customers - Persons|Create a New Person");

  if(aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm, "WndCaption", cmpEqual, "Create a new customer")){
   Log.Checkpoint("Create a new customer window is displayed"); 
  }
  else{
   Log.Error("Create a new customer window is not displayed"); 
  }    

  Aliases.Aptify_Shell.GenericWizardForm.Close();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
}

function verifyingFindPerson()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Customer Services|Customers - Persons|Find a Person");

  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SearchForm, "WndCaption", cmpEqual, "Person Searching (Prefix Matching)")){
   Log.Checkpoint("Person Searching window is displayed"); 
  }
  else{
   Log.Error("Person Searching window is not displayed"); 
  }    
  
  Aliases.Aptify_Shell.SearchForm.Close();
}

function verifyingCreateNewCompany()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Customer Services|Customers - Companies|Create a New Company");

  if(aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm, "WndCaption", cmpEqual, "Create a new customer")){
   Log.Checkpoint("Create a new customer window is displayed"); 
  }
  else{
   Log.Error("Create a new customer window is not displayed"); 
  }    

  Aliases.Aptify_Shell.GenericWizardForm.Close();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
}

function verifyingFindCompany()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Customer Services|Customers - Companies|Find a Company");

  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SearchForm, "WndCaption", cmpEqual, "Company Searching (Prefix Matching)")){
   Log.Checkpoint("Company Searching window is displayed"); 
  }
  else{
   Log.Error("Company Searching window is not displayed"); 
  }
  
  Aliases.Aptify_Shell.SearchForm.Close();
}

function verifyingCreateNewContactLog()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Customer Services|Create a New Contact Log|New");

  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpEqual, "New Contact Log Record")){
   Log.Checkpoint("New Contact Log Record is displayed"); 
  }
  else{
   Log.Error("New Contact Log Record is not displayed"); 
  }
    
  Aliases.Aptify_Shell.FormTemplateForm.Close();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
}

function verifyingFindContactLog()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Customer Services|Create a New Contact Log|Find");

  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Contact Log")){
   Log.Checkpoint("Find Contact Log window is displayed"); 
  }
  else{
   Log.Error("Find Contact Log window is not displayed"); 
  }  
  
  Aliases.Aptify_Shell.SimpleFindDialog.Close();
}

function verifyingPriceAvailability()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Customer Services|Price & Availability|Price & Availability");

  if( aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpEqual, "New Customer Services (Price & Availability) Record")){
   Log.Checkpoint("Price & Availability Record is displayed"); 
  }
  else{
   Log.Error("Price & Availability Record is not displayed"); 
  }   
  
  Aliases.Aptify_Shell.FormTemplateForm.Close();
}

  When("I verify top banner buttons for Inventory", function (){
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.ClickItem("advance> Home|Inventory");
  verifyingNewInventoryLocationRecord();
  verifyingFindInventoryLocationRecord();
  verifyingNewInventorySupplierOrders();
  verifyingFindInventorySupplierOrders();
  verifyingNewInventoryDeliveriesRecord();
  verifyingFindInventoryDeliveriesRecord();
  //verifyingNewOrderItemReturnsRecord();
  verifyingFindOrderItemReturnsRecord();
  verifyingNewReturnAuthorizationsRunsRecord();
  verifyingFindReturnAuthorizationsRunsRecord();
  verifyingNewReturnAuthorizationsRecord();
  verifyingFindReturnAuthorizationsRecord();
  verifyingNewDespatchInput();
  verifyingFindDespatchInput();
  //verifyingNewOrderItemsAutoCreditingReturns();
  verifyingFindOrderItemsAutoCreditingReturns();
  verifyingNewInstitutionOfferProductsUserListsRecord();
  verifyingFindInstitutionOfferProductsUserListsRecord();
});

function verifyingNewInventoryLocationRecord()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Inventory|Inventory Locations|New");

  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpEqual, "New Inventory Locations Record")){
   Log.Checkpoint("New Inventory Locations Record is displayed"); 
  }
  else{
   Log.Error("New Inventory Locations Record is not displayed"); 
  }  
  
  Aliases.Aptify_Shell.FormTemplateForm.Close();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
}

function verifyingFindInventoryLocationRecord()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Inventory|Inventory Locations|Find");

  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Inventory Locations")){
   Log.Checkpoint("Find Inventory Locations window is displayed"); 
  }
  else{
   Log.Error("Find Inventory Locations window is not displayed"); 
  }  
  
  Aliases.Aptify_Shell.SimpleFindDialog.Close();
}

function verifyingNewInventorySupplierOrders()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Inventory|Inventory Supplier Orders|New");

  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpEqual, "New Inventory Supplier Orders Record")){
   Log.Checkpoint("New Inventory Supplier Orders Record is displayed"); 
  }
  else{
   Log.Error("New Inventory Supplier Orders Record is not displayed"); 
  }  
  
  Aliases.Aptify_Shell.FormTemplateForm.Close();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
}

function verifyingFindInventorySupplierOrders()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Inventory|Inventory Supplier Orders|Find");
  
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Inventory Supplier Orders")){
   Log.Checkpoint("Find Inventory Supplier Orders window is displayed"); 
  }
  else{
   Log.Error("Find Inventory Supplier Orders window is not displayed"); 
  }
  
  Aliases.Aptify_Shell.SimpleFindDialog.Close();
}

function verifyingNewInventoryDeliveriesRecord()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Inventory|Inventory Deliveries|New");
 
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpEqual, "New Inventory Deliveries Record")){
   Log.Checkpoint("New Inventory Deliveries Record is displayed"); 
  }
  else{
   Log.Error("New Inventory Deliveries Record is not displayed"); 
  }  
  
  Aliases.Aptify_Shell.FormTemplateForm.Close();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
}

function verifyingFindInventoryDeliveriesRecord()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Inventory|Inventory Deliveries|Find");

  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Inventory Deliveries")){
   Log.Checkpoint("New Inventory Deliveries Record is displayed"); 
  }
  else{
   Log.Error("New Inventory Deliveries Record is not displayed"); 
  }   

  Aliases.Aptify_Shell.SimpleFindDialog.Close();
}

function verifyingNewOrderItemReturnsRecord()
{
 //PEnding
}

function verifyingFindOrderItemReturnsRecord()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Inventory|Order Item Returns|Find");

  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Order Item Returns")){
   Log.Checkpoint("Find Order Item Returns window is displayed"); 
  }
  else{
   Log.Error("Find Order Item Returns window is not displayed"); 
  }   
 
  Aliases.Aptify_Shell.SimpleFindDialog.Close();
}
  
function verifyingNewReturnAuthorizationsRunsRecord()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Inventory|Return Authorizations Runs|New");
 
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpEqual, "New Return Authorizations Runs Record")){
   Log.Checkpoint("New Return Authorizations Runs Record is displayed"); 
  }
  else{
   Log.Error("New Return Authorizations Runs Record is not displayed"); 
  } 

  Aliases.Aptify_Shell.FormTemplateForm.Close();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
}

function verifyingFindReturnAuthorizationsRunsRecord()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Inventory|Return Authorizations Runs|Find");

  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Return Authorizations Runs")){
   Log.Checkpoint("Find Return Authorizations Runs window is displayed"); 
  }
  else{
   Log.Error("Find Return Authorizations Runs window is not displayed"); 
  }
 
  Aliases.Aptify_Shell.SimpleFindDialog.Close();
}

function verifyingNewReturnAuthorizationsRecord()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Inventory|Returns Authorizations|New");
  
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpEqual, "New Returns Authorizations Record")){
   Log.Checkpoint("New Returns Authorizations Record is displayed"); 
  }
  else{
   Log.Error("New Returns Authorizations Record is not displayed"); 
  } 
 
  Aliases.Aptify_Shell.FormTemplateForm.Close();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
}

function verifyingFindReturnAuthorizationsRecord()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Inventory|Returns Authorizations|Find");

  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Returns Authorizations")){
   Log.Checkpoint("Find Returns Authorizations window is displayed"); 
  }
  else{
   Log.Error("Find Returns Authorizations window is not displayed"); 
  }  
 
  Aliases.Aptify_Shell.SimpleFindDialog.Close();
}

function verifyingNewDespatchInput()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Inventory|Despatch Input|New");
 
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpEqual, "New Despatch Input Record")){
   Log.Checkpoint("New Despatch Input Record is displayed"); 
  }
  else{
   Log.Error("New Despatch Input Record is not displayed"); 
  } 
 
  Aliases.Aptify_Shell.FormTemplateForm.Close();
}

function verifyingFindDespatchInput()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Inventory|Despatch Input|Find");
 
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Despatch Input")){
   Log.Checkpoint("Find Despatch Input window is displayed"); 
  }
  else{
   Log.Error("Find Despatch Input window is not displayed"); 
  } 
 
  Aliases.Aptify_Shell.SimpleFindDialog.Close();
}

function verifyingNewOrderItemsAutoCreditingReturns()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Inventory|Order Items Auto Crediting Returns|New");
 
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpEqual, "New Order Items Auto Crediting Returns Record")){
   Log.Checkpoint("New Order Items Auto Crediting Returns Record is displayed"); 
  }
  else{
   Log.Error("New Order Items Auto Crediting Returns Record is not displayed"); 
  } 

  Aliases.Aptify_Shell.FormTemplateForm.Close();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
}

function verifyingFindOrderItemsAutoCreditingReturns()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Inventory|Order Items Auto Crediting Returns|Find");
 
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Order Items Auto Crediting Returns")){
   Log.Checkpoint("Find Order Items Auto Crediting Returns window is displayed"); 
  }
  else{
   Log.Error("Find Order Items Auto Crediting Returns window is not displayed"); 
  }

  Aliases.Aptify_Shell.SimpleFindDialog.Close();
}

function verifyingNewInstitutionOfferProductsUserListsRecord()
{ 
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Inventory|Institution Offer Products User Lists|New");
 
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpEqual, "New Institution Offer Products User Lists Record")){
   Log.Checkpoint("New Institution Offer Products User Lists Record is displayed"); 
  }
  else{
   Log.Error("New Institution Offer Products User Lists Record is not displayed"); 
  }
 
  Aliases.Aptify_Shell.FormTemplateForm.Close();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
}

function verifyingFindInstitutionOfferProductsUserListsRecord()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.ClickItem("Inventory|Institution Offer Products User Lists|Find");

  if( aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Institution Offer Products User Lists")){
   Log.Checkpoint("Find Institution Offer Products User Lists window is displayed"); 
  }
  else{
   Log.Error("Find Institution Offer Products User Lists window is not displayed"); 
  } 
 
  Aliases.Aptify_Shell.SimpleFindDialog.Close();
}

When("I verify top banner buttons for Sales & Marketing", function (){
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.DblClickItem("advance> Home|Sales & Marketing");
  verifyingNewPromotions();
  verifyingFindPromotions();
  verifyingNewConsortiaContracts();
  verifyingFindConsortiaContracts();
  verifyingNewCompanies();
  verifyingFindCompanies();
  verifyingNewPromotionAndMailingList();
  verifyingFindPromotionAndMailingList();
  verifyingNewCampaigns();
  verifyingFindCampaigns();
  verifyingNewPromotionOfferDefinitions();
  verifyingFindPromotionOfferDefinitions();
  verifyingNewPromotionPrices();
  verifyingFindPromotionPrices();
  verifyingNewPromotionOfferDefinitionsUsage();
  verifyingFindPromotionOfferDefinitionsUsage();
  verifyingNewIssuedPromotionCodes();
  verifyingFindIssuedPromotionCodes();
  verifyingNewMarketingInterests();
  verifyingFindMarketingInterests();
  verifyingNewMarketingMailingSelection();
  verifyingFindMarketingMailingSelection();
  verifyingNewMarketingMailings();
  verifyingFindMarketingMailings();
  verifyingNewMarketingMailingTargets();
  verifyingFindMarketingMailingTargets();
  verifyingNewMailingListSelections();
  verifyingFindMailingListSelections();
  verifyingNewMarketingMailingSplits();
  verifyingFindMarketingMailingSplits();
  verifyingFindMarketingMailingQueryTarget();
  verifyingNewMarketingMailingQueryTarget();
  verifyingNewMarketingMailingList();
  clickArrow();
  verifyingFindMarketingMailingList();
  verifyingNewMarketingMaterials();
  verifyingFindMarketingMaterials();
  verifyingNewDocumentAdditions();
  verifyingFindDocumentAdditions();
});

function clickArrow()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").Click(1357, 94);
}
function verifyingNewPromotions()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").GridDropDownButton("Promotions").Click();
  Aliases.Aptify_Shell.DropDownForm.WinFormsObject("RibbonMenuControlTrusted", "").WinFormsObject("UltraToolbarsDockArea", "").ToolBar("Promotions").Button("New").ClickButton();
   if( aqObject.CheckProperty(Aliases.Aptify_Shell.PromotionCreationRoutes, "Caption", cmpEqual, "New or Copy Promotions")){
   Log.Checkpoint("New or Copy Promotions window is displayed"); 
  }
  else{
   Log.Error("New or Copy Promotions window is not displayed"); 
  }  
  Aliases.Aptify_Shell.PromotionCreationRoutes.PTPromotions_PromotionCreationRoutes.WinFormsObject("PTPromotions.PromotionCreationRoutes.ActiveButtonCancel").Click();
}

function verifyingFindPromotions(){
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").GridDropDownButton("Promotions").Click();
  Aliases.Aptify_Shell.DropDownForm.WinFormsObject("RibbonMenuControlTrusted", "").WinFormsObject("UltraToolbarsDockArea", "").ToolBar("Promotions").Button("Find").ClickButton();
  if( aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Promotions")){
   Log.Checkpoint("Find Promotions window is displayed"); 
  }
  else{
   Log.Error("Find Promotions window is not displayed"); 
  }  
  Aliases.Aptify_Shell.SimpleFindDialog.TitleBar(0).Button("Close").ClickButton();  
}

function verifyingNewConsortiaContracts()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").GridDropDownButton("Consortia Contracts").Click();
  Aliases.Aptify_Shell.DropDownForm.WinFormsObject("RibbonMenuControlTrusted", "").WinFormsObject("UltraToolbarsDockArea", "").ToolBar("Consortia Contracts").Button("New").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpEqual, "New Consortia Contracts Record")){
   Log.Checkpoint("New Consortia Contracts Record is displayed"); 
  }
  else{
   Log.Error("New Consortia Contracts Record is not displayed"); 
  }
  Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.ClickButton();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
}

function verifyingFindConsortiaContracts()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").GridDropDownButton("Consortia Contracts").Click();
  Aliases.Aptify_Shell.DropDownForm.WinFormsObject("RibbonMenuControlTrusted", "").WinFormsObject("UltraToolbarsDockArea", "").ToolBar("Consortia Contracts").Button("Find").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Consortia Contracts")){
   Log.Checkpoint("Find Consortia Contracts window is displayed"); 
  }
  else{
   Log.Error("Find Consortia Contracts window is not displayed"); 
  } 
  Aliases.Aptify_Shell.SimpleFindDialog.TitleBar(0).Button("Close").ClickButton();
}

function verifyingNewCompanies()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").GridDropDownButton("Companies").Click();
  Aliases.Aptify_Shell.DropDownForm.WinFormsObject("RibbonMenuControlTrusted", "").WinFormsObject("UltraToolbarsDockArea", "").ToolBar("Companies").Button("New").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm, "WndCaption", cmpEqual, "Create a new customer")){
   Log.Checkpoint("Create a new customer window is displayed"); 
  }
  else{
   Log.Error("Create a new customer window is not displayed"); 
  } 
  Aliases.Aptify_Shell.GenericWizardForm.titlebar.buttonClose.ClickButton();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton()
}

function verifyingFindCompanies()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").GridDropDownButton("Companies").Click();
  Aliases.Aptify_Shell.DropDownForm.WinFormsObject("RibbonMenuControlTrusted", "").WinFormsObject("UltraToolbarsDockArea", "").ToolBar("Companies").Button("Find").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SearchForm, "WndCaption", cmpEqual, "Company Searching (Prefix Matching)")){
   Log.Checkpoint("Find customer window is displayed"); 
  }
  else{
   Log.Error("Find customer window is not displayed"); 
  }  
  Aliases.Aptify_Shell.SearchForm.titlebar.buttonClose.ClickButton();
}

function verifyingNewPromotionAndMailingList()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").GridDropDownButton("Promotion and Mailing Lists").Click();
  Aliases.Aptify_Shell.DropDownForm.WinFormsObject("RibbonMenuControlTrusted", "").WinFormsObject("UltraToolbarsDockArea", "").ToolBar("Promotion and Mailing Lists").Button("New").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpEqual, "New Promotion and Mailing Lists Record")){
   Log.Checkpoint("New Promotion and Mailing Lists Record is displayed"); 
  }
  else{
   Log.Error("New Promotion and Mailing Lists Record is not displayed"); 
  }  
  Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.ClickButton();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
}

function verifyingFindPromotionAndMailingList()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").GridDropDownButton("Promotion and Mailing Lists").Click();
  Aliases.Aptify_Shell.DropDownForm.WinFormsObject("RibbonMenuControlTrusted", "").WinFormsObject("UltraToolbarsDockArea", "").ToolBar("Promotion and Mailing Lists").Button("Find").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Promotion and Mailing Lists")){
   Log.Checkpoint("Find Promotion and Mailing Lists window is displayed"); 
  }
  else{
   Log.Error("Find Promotion and Mailing Lists window is not displayed"); 
  }  
  Aliases.Aptify_Shell.SimpleFindDialog.TitleBar(0).Button("Close").ClickButton();
}

function verifyingNewCampaigns()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").GridDropDownButton("Campaigns").Click();
  Aliases.Aptify_Shell.DropDownForm.WinFormsObject("RibbonMenuControlTrusted", "").WinFormsObject("UltraToolbarsDockArea", "").ToolBar("Campaigns").Button("New").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpEqual, "New Campaigns Record")){
   Log.Checkpoint("New Campaigns Record is displayed"); 
  }
  else{
   Log.Error("New Campaigns Record is not displayed"); 
  }  
  Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.ClickButton();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
}

function verifyingFindCampaigns()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").GridDropDownButton("Campaigns").Click();
  Aliases.Aptify_Shell.DropDownForm.WinFormsObject("RibbonMenuControlTrusted", "").WinFormsObject("UltraToolbarsDockArea", "").ToolBar("Campaigns").Button("Find").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Campaigns")){
   Log.Checkpoint("Find Campaigns window is displayed"); 
  }
  else{
   Log.Error("Find Campaigns window is not displayed"); 
  }  
  Aliases.Aptify_Shell.SimpleFindDialog.TitleBar(0).Button("Close").ClickButton();
}

function verifyingNewPromotionListUsage(){
  //Pending
}

function verifyingNewPromotionOfferDefinitions()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").ToolBar("Promotion Offer Definitions").Button("New").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpEqual, "New Promotion Offer Definitions Record")){
   Log.Checkpoint("New Promotion Offer Definitions Record is displayed"); 
  }
  else{
   Log.Error("New Promotion Offer Definitions Record is not displayed"); 
  }  
  Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.ClickButton();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
}

function verifyingFindPromotionOfferDefinitions()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").ToolBar("Promotion Offer Definitions").Button("Find").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Promotion Offer Definitions")){
   Log.Checkpoint("Find Promotion Offer Definitions window is displayed"); 
  }
  else{
   Log.Error("Find Promotion Offer Definitions window is not displayed"); 
  }  
  Aliases.Aptify_Shell.SimpleFindDialog.TitleBar(0).Button("Close").ClickButton();
}

function verifyingNewPromotionPrices()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").GridDropDownButton("Promotion Prices").Click();
  Aliases.Aptify_Shell.DropDownForm.WinFormsObject("RibbonMenuControlTrusted", "").WinFormsObject("UltraToolbarsDockArea", "").ToolBar("Promotion Prices").Button("New").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpEqual, "New Product Prices Record")){
   Log.Checkpoint("New Product Prices Record is displayed"); 
  }
  else{
   Log.Error("New Product Prices Record is not displayed"); 
  }  
  Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.ClickButton();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
}

function verifyingFindPromotionPrices()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").GridDropDownButton("Promotion Prices").Click();
  Aliases.Aptify_Shell.DropDownForm.WinFormsObject("RibbonMenuControlTrusted", "").WinFormsObject("UltraToolbarsDockArea", "").ToolBar("Promotion Prices").Button("Find").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Promotion Prices")){
   Log.Checkpoint("Find Promotion Prices window is displayed"); 
  }
  else{
   Log.Error("Find Promotion Prices window is not displayed"); 
  }  
  Aliases.Aptify_Shell.SimpleFindDialog.TitleBar(0).Button("Close").ClickButton();
}

function verifyingNewPromotionOfferDefinitionsUsage()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").ToolBar("Promotion Offer Definition Usage").Button("New").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpEqual, "New Promotion Offer Definition Usage Record")){
   Log.Checkpoint("New Promotion Offer Definition Usage Record is displayed"); 
  }
  else{
   Log.Error("New Promotion Offer Definition Usage Record is not displayed"); 
  }  
  Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.ClickButton();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
}

function verifyingFindPromotionOfferDefinitionsUsage()
{ 
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").ToolBar("Promotion Offer Definition Usage").Button("Find").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Promotion Offer Definition Usage")){
   Log.Checkpoint("Find Promotion Offer Definition Usage window is displayed"); 
  }
  else{
   Log.Error("Find Promotion Offer Definition Usage window is not displayed"); 
  }  
  Aliases.Aptify_Shell.SimpleFindDialog.TitleBar(0).Button("Close").ClickButton();
}

function verifyingNewIssuedPromotionCodes()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").ToolBar("Issued Promotion Codes").Button("New").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpEqual, "New Issued Promotion Codes Record")){
   Log.Checkpoint("New Issued Promotion Codes Record is displayed"); 
  }
  else{
   Log.Error("New Issued Promotion Codes Record is not displayed"); 
  }  
  Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.ClickButton();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
}

function verifyingFindIssuedPromotionCodes()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").ToolBar("Issued Promotion Codes").Button("Find").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Issued Promotion Codes")){
   Log.Checkpoint("Find Issued Promotion Codes window is displayed"); 
  }
  else{
   Log.Error("Find Issued Promotion Codes window is not displayed"); 
  }  
  Aliases.Aptify_Shell.SimpleFindDialog.TitleBar(0).Button("Close").ClickButton();
}

function verifyingNewMarketingInterests()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").GridDropDownButton("Marketing Interests").Click();
  Aliases.Aptify_Shell.DropDownForm.WinFormsObject("RibbonMenuControlTrusted", "").WinFormsObject("UltraToolbarsDockArea", "").ToolBar("Marketing Interests").Button("New").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpEqual, "New Marketing Interests Record")){
   Log.Checkpoint("New Marketing Interests Record is displayed"); 
  }
  else{
   Log.Error("New Marketing Interests Record is not displayed"); 
  }  
  Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.ClickButton();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
}

function verifyingFindMarketingInterests()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").GridDropDownButton("Marketing Interests").Click();
  Aliases.Aptify_Shell.DropDownForm.WinFormsObject("RibbonMenuControlTrusted", "").WinFormsObject("UltraToolbarsDockArea", "").ToolBar("Marketing Interests").Button("Find").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Marketing Interests")){
   Log.Checkpoint("Find Marketing Interests window is displayed"); 
  }
  else{
   Log.Error("Find Marketing Interests window is not displayed"); 
  }  
  Aliases.Aptify_Shell.SimpleFindDialog.TitleBar(0).Button("Close").ClickButton();
}

function verifyingNewMarketingMailingSelection()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").GridDropDownButton("Marketing Mailings").Click();
  Aliases.Aptify_Shell.DropDownForm.WinFormsObject("RibbonMenuControlTrusted", "").WinFormsObject("UltraToolbarsDockArea", "").ToolBar("Marketing Mailings").Button("New").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.GenericWizardForm, "WndCaption", cmpEqual, "Mailing Selection")){
   Log.Checkpoint("Mailing Selection window is displayed"); 
  }
  else{
   Log.Error("Mailing Selection window is not displayed"); 
  }  
  Aliases.Aptify_Shell.GenericWizardForm.titlebar.buttonClose.ClickButton();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
}

function verifyingFindMarketingMailingSelection()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").GridDropDownButton("Marketing Mailings").Click();
  Aliases.Aptify_Shell.DropDownForm.WinFormsObject("RibbonMenuControlTrusted", "").WinFormsObject("UltraToolbarsDockArea", "").ToolBar("Marketing Mailings").Button("Find").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Marketing Mailings")){
   Log.Checkpoint("Find - Marketing Mailings window is displayed"); 
  }
  else{
   Log.Error("Find - Marketing Mailings window is not displayed"); 
  }  
  Aliases.Aptify_Shell.SimpleFindDialog.TitleBar(0).Button("Close").ClickButton();
}

function verifyingNewMarketingMailings()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").GridDropDownButton("Marketing Mailings", 2).Click();
  Aliases.Aptify_Shell.DropDownForm.WinFormsObject("RibbonMenuControlTrusted", "").WinFormsObject("UltraToolbarsDockArea", "").ToolBar("Marketing Mailings").Button("New").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpEqual, "New Marketing Mailings Record")){
   Log.Checkpoint("New Marketing Mailings Record is displayed"); 
  }
  else{
   Log.Error("New Marketing Mailings Record is not displayed"); 
  }  
  Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.ClickButton();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
}

function verifyingFindMarketingMailings()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").GridDropDownButton("Marketing Mailings", 2).Click();
  Aliases.Aptify_Shell.DropDownForm.WinFormsObject("RibbonMenuControlTrusted", "").WinFormsObject("UltraToolbarsDockArea", "").ToolBar("Marketing Mailings").Button("Find").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Marketing Mailings")){
   Log.Checkpoint("Find Marketing Mailings window is displayed"); 
  }
  else{
   Log.Error("Find Marketing Mailings window is not displayed"); 
  }  
  Aliases.Aptify_Shell.SimpleFindDialog.TitleBar(0).Button("Close").ClickButton();
}

function verifyingNewMarketingMailingTargets()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.propertypageRibbon.propertypageSalesMarketing.toolbarMarketingMailingTargets.buttonNew.ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpEqual, "New Marketing Mailing Targets Record")){
   Log.Checkpoint("New Marketing Mailing Targets Record is displayed"); 
  }
  else{
   Log.Error("New Marketing Mailing Targets Record is not displayed"); 
  }  
  Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.ClickButton();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
  
}

function verifyingFindMarketingMailingTargets()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").ToolBar("Marketing Mailing Targets").Button("Find").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Marketing Mailing Targets")){
   Log.Checkpoint("Find Marketing Mailing Targets window is displayed"); 
  }
  else{
   Log.Error("Find Marketing Mailing Targets window is not displayed"); 
  }  
  Aliases.Aptify_Shell.SimpleFindDialog.TitleBar(0).Button("Close").ClickButton();
}

function verifyingNewMailingListSelections()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").GridDropDownButton("Mailing List Selections").Click();
  Aliases.Aptify_Shell.DropDownForm.WinFormsObject("RibbonMenuControlTrusted", "").WinFormsObject("UltraToolbarsDockArea", "").ToolBar("Mailing List Selections").Button("New").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpEqual, "New Mailing List Selections Record")){
   Log.Checkpoint("New Mailing List Selections Record is displayed"); 
  }
  else{
   Log.Error("New Mailing List Selections Record is not displayed"); 
  }  
  Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.ClickButton();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
}

function verifyingFindMailingListSelections()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").GridDropDownButton("Mailing List Selections").Click();
  Aliases.Aptify_Shell.DropDownForm.WinFormsObject("RibbonMenuControlTrusted", "").WinFormsObject("UltraToolbarsDockArea", "").ToolBar("Mailing List Selections").Button("Find").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Mailing List Selections")){
   Log.Checkpoint("Find Mailing List Selections window is displayed"); 
  }
  else{
   Log.Error("Find Mailing List Selections window is not displayed"); 
  }  
  Aliases.Aptify_Shell.SimpleFindDialog.TitleBar(0).Button("Close").ClickButton();
}

function verifyingNewMarketingMailingSplits()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").GridDropDownButton("Marketing Mailing Splits").Click();
  Aliases.Aptify_Shell.DropDownForm.WinFormsObject("RibbonMenuControlTrusted", "").WinFormsObject("UltraToolbarsDockArea", "").ToolBar("Marketing Mailing Splits").Button("New").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpEqual, "New Marketing Mailing Splits Record")){
   Log.Checkpoint("New Marketing Mailing Splits Record is displayed"); 
  }
  else{
   Log.Error("New Marketing Mailing Splits Record is not displayed"); 
  }  
  Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.ClickButton();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
}

function verifyingFindMarketingMailingSplits()
{ 
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").GridDropDownButton("Marketing Mailing Splits").Click();
  Aliases.Aptify_Shell.DropDownForm.WinFormsObject("RibbonMenuControlTrusted", "").WinFormsObject("UltraToolbarsDockArea", "").ToolBar("Marketing Mailing Splits").Button("Find").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Marketing Mailing Splits")){
   Log.Checkpoint("Find Marketing Mailing Splits window is displayed"); 
  }
  else{
   Log.Error("Find Marketing Mailing Splits window is not displayed"); 
  }  
  Aliases.Aptify_Shell.SimpleFindDialog.TitleBar(0).Button("Close").ClickButton();
}  

function verifyingNewMarketingMailingQueryTarget()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").ToolBar("Marketing Query Mailing Targets").Button("New").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpEqual, "New Marketing Query Mailing Targets Record")){
   Log.Checkpoint("New Marketing Query Mailing Targets Record is displayed"); 
  }
  else{
   Log.Error("New Marketing Query Mailing Targets Record is not displayed"); 
  }  
  Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.ClickButton();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
}

function verifyingFindMarketingMailingQueryTarget()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").ToolBar("Marketing Query Mailing Targets").Button("Find").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Marketing Query Mailing Targets")){
   Log.Checkpoint("Find Marketing Query Mailing Targets window is displayed"); 
  }
  else{
   Log.Error("Find Marketing Query Mailing Targets window is not displayed"); 
  }  
  Aliases.Aptify_Shell.SimpleFindDialog.TitleBar(0).Button("Close").ClickButton();
}
  
function verifyingNewMarketingMailingList()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").GridDropDownButton("Marketing Mailing Lists").Click();
  Aliases.Aptify_Shell.DropDownForm.WinFormsObject("RibbonMenuControlTrusted", "").WinFormsObject("UltraToolbarsDockArea", "").ToolBar("Marketing Mailing Lists").Button("New").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpEqual, "New Marketing Mailing Lists Record")){
   Log.Checkpoint("New Marketing Mailing Lists Record is displayed"); 
  }
  else{
   Log.Error("New Marketing Mailing Lists Record is not displayed"); 
  }  
  Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.ClickButton();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
}

function verifyingFindMarketingMailingList()
{ 
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").GridDropDownButton("Marketing Mailing Lists").Click();
  Aliases.Aptify_Shell.DropDownForm.WinFormsObject("RibbonMenuControlTrusted", "").WinFormsObject("UltraToolbarsDockArea", "").ToolBar("Marketing Mailing Lists").Button("Find").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Marketing Mailing Lists")){
   Log.Checkpoint("Find Marketing Mailing Lists window is displayed"); 
  }
  else{
   Log.Error("Find Marketing Mailing Lists window is not displayed"); 
  }  
  Aliases.Aptify_Shell.SimpleFindDialog.TitleBar(0).Button("Close").ClickButton();
}

function verifyingNewMarketingMaterials()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").GridDropDownButton("Marketing Materials").Click();
  Aliases.Aptify_Shell.DropDownForm.WinFormsObject("RibbonMenuControlTrusted", "").WinFormsObject("UltraToolbarsDockArea", "").ToolBar("Marketing Materials").Button("New").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpEqual, "New Marketing Materials Record")){
   Log.Checkpoint("New Marketing Materials Record is displayed"); 
  }
  else{
   Log.Error("New Marketing Materials Record is not displayed"); 
  }  
  Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.ClickButton();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
}

function verifyingFindMarketingMaterials()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").GridDropDownButton("Marketing Materials").Click();
  Aliases.Aptify_Shell.DropDownForm.WinFormsObject("RibbonMenuControlTrusted", "").WinFormsObject("UltraToolbarsDockArea", "").ToolBar("Marketing Materials").Button("Find").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Marketing Materials")){
   Log.Checkpoint("Find Marketing Materials window is displayed"); 
  }
  else{
   Log.Error("Find Marketing Materials window is not displayed"); 
  }  
  Aliases.Aptify_Shell.SimpleFindDialog.TitleBar(0).Button("Close").ClickButton();
}

function verifyingNewDocumentAdditions()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").GridDropDownButton("Document Additions").Click();
  Aliases.Aptify_Shell.DropDownForm.WinFormsObject("RibbonMenuControlTrusted", "").WinFormsObject("UltraToolbarsDockArea", "").ToolBar("Document Additions").Button("New").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpEqual, "New Document Additions Record")){
   Log.Checkpoint("New Document Additions Record is displayed"); 
  }
  else{
   Log.Error("New Document Additions Record is not displayed"); 
  }  
  Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.ClickButton();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
}

function verifyingFindDocumentAdditions()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Sales & Marketing").GridDropDownButton("Document Additions").Click();
  Aliases.Aptify_Shell.DropDownForm.WinFormsObject("RibbonMenuControlTrusted", "").WinFormsObject("UltraToolbarsDockArea", "").ToolBar("Document Additions").Button("Find").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Document Additions")){
   Log.Checkpoint("Find Document Additions window is displayed"); 
  }
  else{
   Log.Error("Find Document Additions window is not displayed"); 
  }  
  Aliases.Aptify_Shell.SimpleFindDialog.TitleBar(0).Button("Close").ClickButton();
}

When("I verify top banner buttons for Standing Order Administration", function (){
  Aliases.Aptify_Shell.AptifyShellForm.WindowDockingArea.DockableWindow2.aptifyTree.tvwMain.DblClickItem("advance> Home|Standing Order Administration");
  verifyingNewStandingOrderReleaseRunDetails();
  verifyingFindStandingOrderReleaseRunDetails();
  verifyingNewStandingOrderReleaseRunSummary();
  verifyingFindStandingOrderReleaseRunSummary();
  verifyingNewFutureStandingOrderCalculationRuns();
  verifyingFindFutureStandingOrderCalculationRuns();
  verifyingNewPendingRelease();
  verifyingFindPendingRelease();
  verifyingFindOTCProcessingMessages();
});

function verifyingNewStandingOrderReleaseRunDetails()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Standing Order Administration").ToolBar("Standing Order Release Run Details (Audit)").Button("New").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpEqual, "New Standing Order Release Run Details (Audit) Record")){
   Log.Checkpoint("New Standing Order Release Run Details (Audit) Record is displayed"); 
  }
  else{
   Log.Error("New Standing Order Release Run Details (Audit) Record is not displayed"); 
  }   
  Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.ClickButton();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
}

function verifyingFindStandingOrderReleaseRunDetails()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Standing Order Administration").ToolBar("Standing Order Release Run Details (Audit)").Button("Find").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Standing Order Release Run Details (Audit)")){
   Log.Checkpoint("Find Standing Order Release Run Details (Audit) window is displayed"); 
  }
  else{
   Log.Error("Find Standing Order Release Run Details (Audit) window is not displayed"); 
  }  
  Aliases.Aptify_Shell.SimpleFindDialog.TitleBar(0).Button("Close").ClickButton();
}

function verifyingNewStandingOrderReleaseRunSummary()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Standing Order Administration").ToolBar("Standing Order Release Run Summary (Audit)").Button("New").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpEqual, "New Standing Order Release Run Summary (Audit) Record")){
   Log.Checkpoint("New Standing Order Release Run Summary (Audit) Record is displayed"); 
  }
  else{
   Log.Error("New Standing Order Release Run Summary (Audit) Record is not displayed"); 
  } 
  Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.ClickButton();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
}

function verifyingFindStandingOrderReleaseRunSummary()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Standing Order Administration").ToolBar("Standing Order Release Run Summary (Audit)").Button("Find").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Standing Order Release Run Summary (Audit)")){
   Log.Checkpoint("Find Standing Order Release Run Summary (Audit) window is displayed"); 
  }
  else{
   Log.Error("Find Standing Order Release Run Summary (Audit) window is not displayed"); 
  }  
  Aliases.Aptify_Shell.SimpleFindDialog.TitleBar(0).Button("Close").ClickButton();
}

function verifyingNewFutureStandingOrderCalculationRuns()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Standing Order Administration").ToolBar("Future Standing Order Calculation Runs").Button("New").ClickButton();

  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpEqual, "New Future Standing Order Calculation Runs Record")){
   Log.Checkpoint("New Future Standing Order Calculation Runs Record is displayed"); 
  }
  else{
   Log.Error("New Future Standing Order Calculation Runs Record is not displayed"); 
  }  
  Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.ClickButton();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
}

function verifyingFindFutureStandingOrderCalculationRuns()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Standing Order Administration").ToolBar("Future Standing Order Calculation Runs").Button("Find").Click();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Future Standing Order Calculation Runs")){
   Log.Checkpoint("Find Future Standing Order Calculation Runs window is displayed"); 
  }
  else{
   Log.Error("Find Future Standing Order Calculation Runs window is not displayed"); 
  }  
  Aliases.Aptify_Shell.SimpleFindDialog.TitleBar(0).Button("Close").ClickButton();
}

function verifyingNewPendingRelease()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Standing Order Administration").ToolBar("Standing Orders - Pending Release").Button("New").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.FormTemplateForm, "WndCaption", cmpEqual, "New Standing Orders - Pending Release Record")){
   Log.Checkpoint("New Standing Orders - Pending Release Record is displayed"); 
  }
  else{
   Log.Error("New Standing Orders - Pending Release Record is not displayed"); 
  } 
  Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.ClickButton();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton(); 
}

function verifyingFindPendingRelease()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Standing Order Administration").ToolBar("Standing Orders - Pending Release").Button("Find").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - Standing Orders - Pending Release")){
   Log.Checkpoint("Find Standing Orders - Pending Release window is displayed"); 
  }
  else{
   Log.Error("Find Standing Orders - Pending Release window is not displayed"); 
  }  
  Aliases.Aptify_Shell.SimpleFindDialog.TitleBar(0).Button("Close").ClickButton();
}

function verifyingFindOTCProcessingMessages()
{
  Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").PropertyPage("Standing Order Administration").ToolBar("OTC Processing Messages").Button("Find").ClickButton();
  if(aqObject.CheckProperty(Aliases.Aptify_Shell.SimpleFindDialog, "WndCaption", cmpEqual, "advance> Find - OTC Processing Messages")){
   Log.Checkpoint("Find OTC Processing Messages window is displayed"); 
  }
  else{
   Log.Error("Find OTC Processing Messages window is not displayed"); 
  }
  Aliases.Aptify_Shell.SimpleFindDialog.TitleBar(0).Button("Close").ClickButton();  
}

When("I verify if mandatory applications are present", function (){
 if(Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").TabList("Ribbon Tabs").PageTab("Orders").Exists){
  Log.Checkpoint("Orders exists")
 }
 else{
  Log.Error("Orders does not exist");
 }
 
 if(Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").TabList("Ribbon Tabs").PageTab("Customer Services").Exists){
  Log.Checkpoint("Customer Services exists")
 }
 else{
  Log.Error("Customer Services does not exist");
 }
 
 if(Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").TabList("Ribbon Tabs").PageTab("Inventory").Exists){
  Log.Checkpoint("Inventory exists")
 }
 else{
  Log.Error("Inventory does not exist");
 }
 
 if(Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").TabList("Ribbon Tabs").PageTab("Sales & Marketing").Exists){
  Log.Checkpoint("Sales & Marketing exists")
 }
 else{
  Log.Error("Sales & Marketing does not exist");
 } 
 
 if(Aliases.Aptify_Shell.AptifyShellForm.zAptifyShellForm_Toolbars_Dock_Area_Top.PropertyPage("Ribbon").TabList("Ribbon Tabs").PageTab("Standing Order Administration").Exists){
  Log.Checkpoint("Standing Order Administration exists")
 }
 else{
  Log.Error("Standing Order Administration does not exist");
 } 
});

Then("I click on New Product", function (){
  if(Aliases.Aptify_Shell.SearchForm.titlebar.buttonClose.Exists)
  {
    Aliases.Aptify_Shell.SearchForm.titlebar.buttonClose.ClickButton();
  }
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton9.Click();
});

Then("I click on New Order from customer services folder list", function (){
  if(Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.Exists)
  {
    Aliases.Aptify_Shell.FormTemplateForm.titlebar.buttonClose.ClickButton();
  }
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton8.ClickButton();
});



Then("shortcuts should be display on Inventory dashboard", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.pnlHeader.lblCaption, "Visible", cmpEqual, true);
});

Then("Orders Management Dashboard should be display", function (){
  aqObject.CheckProperty(Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.pnlToolBar.lblTitle, "Visible", cmpEqual, true);
});

//When("I change the dashboard for sales and marketing", function (){
  //let aptify_Shell = Aliases.Aptify_Shell;
  //aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.pnlToolBar.lblOptions.Click(29, 4);
  //aptify_Shell.wnd32768.menuitemSwitchDashboard.Click();
  //aptify_Shell.popupSwitchDashboard.menuitemSalesMarketing.Click();
//});

