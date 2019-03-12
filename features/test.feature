@Regression
Feature: test-feature

  Background:
    When User navigates to the main page with url "http://thinkmobiles.com/"
    Then Page title is equal to "Top list of IT companies, software, mobile apps, games, Saas, PaaS, IaaS"

  Scenario: 1: Testing website under-menu "QA"
    When User waits 3000 seconds
    When User moves mouse over "Find IT Services" ".dropdown-holder.doubled > a"
    And User waits 3000 seconds
    And User clicks "QA" "li.sublist-holder.menuHref"


