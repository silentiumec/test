@Regression
Feature: test-feature

  Background:
    When User navigates to the main page with url "http://thinkmobiles.com/"
    Then Page title is equal to "ThinkMobiles"

  Scenario: 1: Testing website under-menu "QA"
    When User waits 2000 seconds
    When User moves mouse over "Find IT Services" "body > div.wrapper > header > div.header-main-block > div.header-dropdowns.hide-xs.hide-s.hide-m.hide-l > div.dropdown-holder.doubled > a"
    And User waits 3000 seconds
    And User clicks "QA" ".sublist-holder" with text "QA"
    And User clicks "Security" "ul li ul li.list-item.menuHref" with text "Security"



