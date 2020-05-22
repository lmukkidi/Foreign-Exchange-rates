Feature: Foreign currency exchange rates
Description: The purpose of these tests are to use of the exchange rate for financial reasons 

#The latest current URL : https://api.ratesapi.io/api/latest
#This is to check a latest Foreign currency exchange rates and assert the response

  Scenario: TC_1 User calls web service to get a latest Foreign currency exchange rates
	When a user retrieves the rates
    Then the status code is 200
    And response includes the following
      | base | EUR        |
      | date | 2020-05-21 |
   And rate for "rates.HKD" is "8.5298"
   
#The symbol URL : https://api.ratesapi.io/api/latest?base=USD&symbols=GBP
#This is to check a latest Foreign currency exchange rates by providing symbol data and assert the response
	
  Scenario: TC_2 User calls web service to get exchange rates by providing symbol
    When a user retrieves the exchange rate by providing the symbol as input data
    Then the status code is 200
    And response includes the following
      | base | USD        |
      | date | 2020-05-21 |
               
#The incomplete URL : https://api.ratesapi.io/api
#This is to check a incomplete Foreign currency exchange rates

  Scenario: TC_3 User calls web service to get incomplete URL for Foreign Exchange rates
    When a user retrieves incomplete URL exchange rates
    Then the error status code is 400
    
#The Specific date Foreign Exchange rates URL : https://api.ratesapi.io/api/2011-01-12
#This is to check a Specific date Foreign Exchange rates and assert the response and assert the response
    
  Scenario: TC 4 User calls web service to get Specific date Foreign Exchange rates
    When a user retrieves specific URL date Foreign Exchange rates
    Then the status code is 200
    And response includes the following
      | base | EUR        |
      | date | 2011-01-12 |
    And rate for "rates.DKK" is "7.4496"
   
#The future date URL date Foreign Exchange rates URL : https://api.ratesapi.io/api/2021-01-12
#This is to check a future date Foreign Exchange rates and response will come with current date 
    
  Scenario: TC_5 User calls web service to get future date for Foreign Exchange rates
    When a user retrieves future URL date Foreign Exchange rates
    Then the status code is 200
    And response includes the following
    	| base | EUR        |
      | date | 2020-05-21 | 
       
#The future date URL date Foreign Exchange rates URL : https://api.ratesapi.io/api/2021-01-12
#This is to check a Specific date Foreign Exchange rates and response will come with current date and assert the response
    
  Scenario: TC_6 User calls web service to get Specific date Foreign Exchange rates
    When a user retrieves future URL date Foreign Exchange rates and assert the response
    Then the status code is 200
    And rate for "rates.INR" is "83.0545"
    And response includes the following
    	| base | EUR        |
      | date | 2020-05-21 | 
   

