@run
Feature: basket
  #shopping basket features
 
  Scenario: add to basket
  Given that i am on the booking website
  When i add all mandatory items
   And i save the booking
   Then I can see the saved booking