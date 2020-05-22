$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GetRates.feature");
formatter.feature({
  "line": 1,
  "name": "Foreign currency exchange rates",
  "description": "Description: The purpose of these tests are to use of the exchange rate for financial reasons",
  "id": "foreign-currency-exchange-rates",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "#The latest current URL : https://api.ratesapi.io/api/latest"
    },
    {
      "line": 5,
      "value": "#This is to check a latest Foreign currency exchange rates and assert the response"
    }
  ],
  "line": 7,
  "name": "TC_1 User calls web service to get a latest Foreign currency exchange rates",
  "description": "",
  "id": "foreign-currency-exchange-rates;tc-1-user-calls-web-service-to-get-a-latest-foreign-currency-exchange-rates",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "a user retrieves the rates",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "response includes the following",
  "rows": [
    {
      "cells": [
        "base",
        "EUR"
      ],
      "line": 11
    },
    {
      "cells": [
        "date",
        "2020-05-21"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "rate for \"rates.HKD\" is \"8.5298\"",
  "keyword": "And "
});
formatter.match({
  "location": "CucumberStepDefinitions.a_user_retrieves_the_rates()"
});
formatter.result({
  "duration": 2399264400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "CucumberStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "duration": 33215500,
  "status": "passed"
});
formatter.match({
  "location": "CucumberStepDefinitions.response_equals(String,String\u003e)"
});
formatter.result({
  "duration": 471750200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rates.HKD",
      "offset": 10
    },
    {
      "val": "8.5298",
      "offset": 25
    }
  ],
  "location": "CucumberStepDefinitions.rate_verify(String,String)"
});
formatter.result({
  "duration": 36294700,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 15,
      "value": "#The symbol URL : https://api.ratesapi.io/api/latest?base\u003dUSD\u0026symbols\u003dGBP"
    },
    {
      "line": 16,
      "value": "#This is to check a latest Foreign currency exchange rates by providing symbol data and assert the response"
    }
  ],
  "line": 18,
  "name": "TC_2 User calls web service to get exchange rates by providing symbol",
  "description": "",
  "id": "foreign-currency-exchange-rates;tc-2-user-calls-web-service-to-get-exchange-rates-by-providing-symbol",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "a user retrieves the exchange rate by providing the symbol as input data",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "response includes the following",
  "rows": [
    {
      "cells": [
        "base",
        "USD"
      ],
      "line": 22
    },
    {
      "cells": [
        "date",
        "2020-05-21"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CucumberStepDefinitions.a_user_retrieves_the_rates_by_providing_the_symbol_input()"
});
formatter.result({
  "duration": 616117200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "CucumberStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "duration": 303000,
  "status": "passed"
});
formatter.match({
  "location": "CucumberStepDefinitions.response_equals(String,String\u003e)"
});
formatter.result({
  "duration": 15483000,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 25,
      "value": "#The incomplete URL : https://api.ratesapi.io/api"
    },
    {
      "line": 26,
      "value": "#This is to check a incomplete Foreign currency exchange rates"
    }
  ],
  "line": 28,
  "name": "TC_3 User calls web service to get incomplete URL for Foreign Exchange rates",
  "description": "",
  "id": "foreign-currency-exchange-rates;tc-3-user-calls-web-service-to-get-incomplete-url-for-foreign-exchange-rates",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "a user retrieves incomplete URL exchange rates",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "the error status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberStepDefinitions.a_user_retrieves_incomplete_url_exchange_rates()"
});
formatter.result({
  "duration": 772132200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 25
    }
  ],
  "location": "CucumberStepDefinitions.verify_error_status_code(int)"
});
formatter.result({
  "duration": 289300,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 32,
      "value": "#The Specific date Foreign Exchange rates URL : https://api.ratesapi.io/api/2011-01-12"
    },
    {
      "line": 33,
      "value": "#This is to check a Specific date Foreign Exchange rates and assert the response and assert the response"
    }
  ],
  "line": 35,
  "name": "TC 4 User calls web service to get Specific date Foreign Exchange rates",
  "description": "",
  "id": "foreign-currency-exchange-rates;tc-4-user-calls-web-service-to-get-specific-date-foreign-exchange-rates",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "a user retrieves specific URL date Foreign Exchange rates",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "the status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "response includes the following",
  "rows": [
    {
      "cells": [
        "base",
        "EUR"
      ],
      "line": 39
    },
    {
      "cells": [
        "date",
        "2011-01-12"
      ],
      "line": 40
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "rate for \"rates.DKK\" is \"7.4496\"",
  "keyword": "And "
});
formatter.match({
  "location": "CucumberStepDefinitions.a_user_retrieves_specific_url_date_exchange_rates()"
});
formatter.result({
  "duration": 789877300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "CucumberStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "duration": 336600,
  "status": "passed"
});
formatter.match({
  "location": "CucumberStepDefinitions.response_equals(String,String\u003e)"
});
formatter.result({
  "duration": 16437300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rates.DKK",
      "offset": 10
    },
    {
      "val": "7.4496",
      "offset": 25
    }
  ],
  "location": "CucumberStepDefinitions.rate_verify(String,String)"
});
formatter.result({
  "duration": 17590800,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 43,
      "value": "#The future date URL date Foreign Exchange rates URL : https://api.ratesapi.io/api/2021-01-12"
    },
    {
      "line": 44,
      "value": "#This is to check a future date Foreign Exchange rates and response will come with current date"
    }
  ],
  "line": 46,
  "name": "TC_5 User calls web service to get future date for Foreign Exchange rates",
  "description": "",
  "id": "foreign-currency-exchange-rates;tc-5-user-calls-web-service-to-get-future-date-for-foreign-exchange-rates",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 47,
  "name": "a user retrieves future URL date Foreign Exchange rates",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "the status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "response includes the following",
  "rows": [
    {
      "cells": [
        "base",
        "EUR"
      ],
      "line": 50
    },
    {
      "cells": [
        "date",
        "2020-05-21"
      ],
      "line": 51
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CucumberStepDefinitions.a_user_retrieves_future_url_date_exchange_rates()"
});
formatter.result({
  "duration": 520948000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "CucumberStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "duration": 826500,
  "status": "passed"
});
formatter.match({
  "location": "CucumberStepDefinitions.response_equals(String,String\u003e)"
});
formatter.result({
  "duration": 18862600,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 53,
      "value": "#The future date URL date Foreign Exchange rates URL : https://api.ratesapi.io/api/2021-01-12"
    },
    {
      "line": 54,
      "value": "#This is to check a Specific date Foreign Exchange rates and response will come with current date and assert the response"
    }
  ],
  "line": 56,
  "name": "TC_6 User calls web service to get Specific date Foreign Exchange rates",
  "description": "",
  "id": "foreign-currency-exchange-rates;tc-6-user-calls-web-service-to-get-specific-date-foreign-exchange-rates",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 57,
  "name": "a user retrieves future URL date Foreign Exchange rates and assert the response",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "the status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "rate for \"rates.INR\" is \"83.0545\"",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "response includes the following",
  "rows": [
    {
      "cells": [
        "base",
        "EUR"
      ],
      "line": 61
    },
    {
      "cells": [
        "date",
        "2020-05-21"
      ],
      "line": 62
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CucumberStepDefinitions.a_user_retrieves_future_url_date_exchange_rates()"
});
formatter.result({
  "duration": 565254300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "CucumberStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "duration": 323400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rates.INR",
      "offset": 10
    },
    {
      "val": "83.0545",
      "offset": 25
    }
  ],
  "location": "CucumberStepDefinitions.rate_verify(String,String)"
});
formatter.result({
  "duration": 12848700,
  "status": "passed"
});
formatter.match({
  "location": "CucumberStepDefinitions.response_equals(String,String\u003e)"
});
formatter.result({
  "duration": 15717100,
  "status": "passed"
});
});