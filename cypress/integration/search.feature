Feature: Search

Scenario Outline:  
    Given I am at google page
	When I type "<keyword>"
	And I type "{enter}" 
	Then I should see "<keyword>" word in the results

    Examples:
    | keyword    |
    | cypress    |
    | typescript |