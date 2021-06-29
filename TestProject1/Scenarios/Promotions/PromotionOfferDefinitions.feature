Feature: PromotionOfferDefinitions
#This feature file contains automated manual tests of RAVAUT-790 on Jira
  Background:
    Given I am logged in Ingenta Commercial Application
    When I click on Sales & Marketing
    And I click on Promotion Offer Definitions
    And I click on All Promotion offer Definitions view  
   
  @PromotionsAndDiscounts
    Scenario:1 Creating Simple promotion offer definitions
    And I click on New record
    And I enter Code "PRICE"
    And I enter code Name "Promotion"
    And I enter Description "Promotion"
    And I enter Definition Type "Promotional Price"
    And I enter Price 20 under Price Offer
    And I enter Currency "Euro"
    And I enter Licence "12 Months Concurrent Access"
    And I select the Gratis Product checkbox
    And I click Save Record and Close Form button
    Then New Promotion offer definition should be created with unique ID
    And record "Promotion" should be displayed in all promotion offer definition
   
  @PromotionsAndDiscounts  
    Scenario:2 Creating Advance promotion offer definitions with Discount Offer
    And I click on New record
    And I enter Code "DISCOUNT"
    And I select Advanced from Options
    And I enter code Name "DiscountOffer"
    And I enter Description "DiscountOffer"
    And I enter Definition Type "Promotional Discount Percentage"
    And I select Discount "Discount 36" under Discount Offer
    And I enter Licence "12 Months Concurrent Access"
    And I select the Gratis Product checkbox
    And I click Save Record and Close Form button
    Then New Promotion offer definition should be created with unique ID
    And record "DiscountOffer" should be displayed in all promotion offer definition
    
  @PromotionsAndDiscounts
    Scenario:3 Creating Advance promotion offer definitions with Freight Offer
    And I click on New record
    And I enter Code "FREIGHT"
    And I select Advanced from Options
    And I enter code Name "FreightOffer"
    And I enter Description "FreightOffer"
    And I enter Definition Type "Promotional Freight"
    And I enter Despatch Discount 30 under Freight Offer
    And I enter Licence "12 Months Concurrent Access"
    And I select the Gratis Product checkbox
    And I click Save Record and Close Form button
    Then New Promotion offer definition should be created with unique ID
    And record "FreightOffer" should be displayed in all promotion offer definition
    
  @PromotionsAndDiscounts
    Scenario:4 Creating Advance promotion offer definitions with Price Offer
    And I click on New record
    And I enter Code "PRICE"
    And I select Advanced from Options
    And I enter code Name "PriceOffer"
    And I enter Description "PriceOffer"
    And I enter Definition Type "Promotional Price"
    And I select Product Price "Promotion" under Price Offer
    And I enter Licence "12 Months Concurrent Access"
    And I select the Gratis Product checkbox
    And I click Save Record and Close Form button
    Then New Promotion offer definition should be created with unique ID
    And record "PriceOffer" should be displayed in all promotion offer definition
    
    