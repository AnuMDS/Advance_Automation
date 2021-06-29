var products = [];
products.push("NYP No Stock","NYP With Stock","Closed With Stock","Closed No Stock","TOS Closed No Stock","OP Open With Stock","OP Closed With Stock","RAVE ROCKET NYP No Stock","ROCKET Two Brothers", "ROCKET Closed With Stock","ROCKET Book No Stock","ROCKET and the Bus Ride Home","ROCKET and the Big Fat Wood Pigeon","ROCKET BIC Subject Code");
var productNames;


When("I create Product", function (){
  
  for(let i = 0;i<products.length;i++)
  {
    for(let j = 0;j<=i;j++)
    {
      if(products[i] == products[j])
      {
        productNames = products[j];
        clickNewProductCS();
        selectProductTypeNewProd();
        enterTitlePrefixNewProd();
        enternameproduct();
        enterImprintNewProd()
        enterDescriptionNewProduct();
        clickNextBtnNewProd();
        selectDimensionGrp();
        clickApplyBtnFromDimensionGrp();
        clickNewBtnDimensionGrp();
        selectTypeFromDimensionRecord();
        entervalueDimesionGrp();
        selectOnixUnit();
        clickOkBtnDimensionGroup();
        clickNewBtnFromIdentifiersTable();
        selectIdentifierType();
        selectRangeIdentifierType();
        clickOkBtnDimensionGroup();
        enterPubdateNewProd();
        enterCopyrightYrNewProd()
        clickFinishBtnNewProd();
  }
  }
  }
});


function enternameproduct()
{
    
  let txtWithoutPrefix = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_PT_Products_Toparea_TitleWithoutPrefix.txtInner;
  txtWithoutPrefix.Click();
  txtWithoutPrefix.Keys(productNames);
}

function clickNewProductCS()
{
  Aliases.Aptify_Shell.AptifyShellForm.pnlDisplay.DashboardManager.AptifyDashLayout.AptifyDashboardArea.DashCtrlWrapper.ButtonBar.UltraButton9.Click();
}
function selectProductTypeNewProd()
{
  Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_Details_ProductDetails_ProductSubTypeID.LookupSearchCombo.ClickItem("Book- Paperback");
  
}
function enterTitlePrefixNewProd()
{
  let txtTitlePrefix = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_PT_Products_Toparea_TitlePrefix.txtInner;
  txtTitlePrefix.Click();
  txtTitlePrefix.Keys("RAVE");
  
}
function enterImprintNewProd()
{
  let lnkImprint = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProducts_Wizard_Organizations.txtLink;
  lnkImprint.Click();
  lnkImprint.Keys("Reef Books");
  lnkImprint.Keys("[Tab]");
  
}
function enterDescriptionNewProduct()
{
  let txtDescription = Aliases.Aptify_Shell.PTProductWizard.WizPanels_395.PTProductWizard_ProductTitle.PTProductWizard_Details_Description.txtInner;  
  txtDescription.Click();
  txtDescription.Keys("Paperback product");
  txtDescription.Keys("[Tab]");
}
function clickNextBtnNewProd()
{
  Aliases.Aptify_Shell.PTProductWizard.WizMain.btnNext.ClickButton();
}
function selectDimensionGrp()
{
  let ddDimensionGroup = Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_PTProductDimensions_DimensionGroupID.txtLink;
  ddDimensionGroup.Click();
  ddDimensionGroup.Keys("Standard UK Paperback");
  ddDimensionGroup.Keys("[Tab]");
}
function clickApplyBtnFromDimensionGrp()
{
  Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_PTProductDimensions_Apply.Click();
  Aliases.Aptify_Shell.LocalizedMsgBox.UltraGroupBox1.TableLayoutPanel1.btnTwo.ClickButton();
}
function clickNewBtnDimensionGrp()
{
  Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Product_Dimensions_SubtypeView.zAptifyControlBase_Toolbars_Dock_Area_Top.ClickItem("SubType|New");
}
function selectTypeFromDimensionRecord()
{
  let ddType = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductDimensions_Form.PTProductDimensions_Tabs.tabMain.PTProductDimensions_Tabs_General.PTProductDimensions_Tabs_General.PTProductDimensions_TypeID.LookupSearchCombo;
  ddType.ClickItem("Unit weight");
  ddType.Keys("[Tab]");
}
function entervalueDimesionGrp()
{
  let txtValue = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductDimensions_Form.PTProductDimensions_Tabs.tabMain.PTProductDimensions_Tabs_General.PTProductDimensions_Tabs_General.PTProductDimensions_Value.txtInner;
  txtValue.Keys("20");
  
}
function selectOnixUnit()
{
  let ddOnixUnit = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductDimensions_Form.PTProductDimensions_Tabs.tabMain.PTProductDimensions_Tabs_General.PTProductDimensions_Tabs_General.PTProductDimensions_ONIXUnitID.LookupSearchCombo;
  ddOnixUnit.ClickItem("Grams");
}
function clickOkBtnDimensionGrp()
{
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
}
function clickNewBtnFromIdentifiersTable()
{
  Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Products_SubtypesData_Sub_Type_Control_1.zAptifyControlBase_Toolbars_Dock_Area_Top.ClickItem("SubType|New");
}
function selectIdentifierType()
{
  let ddIdentifierType = Aliases.Aptify_Shell.SubTypeTemplateForm.PTProductIdentifiers_Form.PTProductIdentifiers_Tabs.tabMain.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_IdentifierTypeID.LookupSearchCombo;
  ddIdentifierType.ClickItem("ISBN 13");

}
function selectRangeIdentifierType()
{
  let subTypeTemplateForm = Aliases.Aptify_Shell.SubTypeTemplateForm;
  subTypeTemplateForm.PTProductIdentifiers_Form.PTProductIdentifiers_Tabs.tabMain.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_Tabs_General.PTProductIdentifiers_OrganizationCodeAllocationsID.LookupSearchCombo.ClickItem("ISBN 13 (Global)");
}
function clickOkBtnDimensionGroup()
{
  Aliases.Aptify_Shell.SubTypeTemplateForm.datEntity.AptifyDataControl_Fill_Panel.cmdOK.ClickButton();
}
function enterPubdateNewProd()
{
  let txtPubDate = Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Products_SubtypesData_PublicationDate.txtInner;
  txtPubDate.Click();
  txtPubDate.Keys(aqDateTime.Today());
  txtPubDate.Keys("[Tab]");
}
function enterCopyrightYrNewProd()
{
  let txtCopyrightYear = Aliases.Aptify_Shell.PTProductWizard.WizPanels_402.ProductWizard_Products_SubtypesData.ProductWizard_Products_SubtypesData_xCopyrightYear.txtInner;
  txtCopyrightYear.Keys("2021");
  
}
function clickFinishBtnNewProd()
{
  let wizardControl = Aliases.Aptify_Shell.PTProductWizard.WizMain;
  wizardControl.btnFinish.ClickButton();
}
