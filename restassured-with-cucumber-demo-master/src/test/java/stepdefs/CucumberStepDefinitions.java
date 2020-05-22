package stepdefs;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.hamcrest.Matchers.equalTo;

import java.math.BigDecimal;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;

import cucumber.api.java.en.And;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;
import junit.framework.Assert;

public class CucumberStepDefinitions {

	private Response response;
	private ValidatableResponse json;
	private RequestSpecification request;

	private String ENDPOINT_GET_RATE = "https://api.ratesapi.io/api/latest";
	private String ENDPOINT_SYMBOL_LATEST_URI = "https://api.ratesapi.io/api/latest?base=USD&symbols=GBP";
	private String ENDPOINT_GET_INCOMPLETE_URI_EXCHANGE_RATES = "https://api.ratesapi.io/api/";
	private String ENDPOINT_GET_SPECIFIC_EXCHANGE_RATES = "https://api.ratesapi.io/api/2011-01-12";
	private String ENDPOINT_GET_FETURE_EXCHANGE_RATES = "https://api.ratesapi.io/api/2021-01-12";
	
	
	@When("a user retrieves the rates")
	public void a_user_retrieves_the_rates(){
		response = given().get(ENDPOINT_GET_RATE);
		System.out.println("response: " + response.prettyPrint());
	}
	
	@When("a user retrieves the exchange rate by providing the symbol as input data")
	public void a_user_retrieves_the_rates_by_providing_the_symbol_input(){
		response = given().get(ENDPOINT_SYMBOL_LATEST_URI);
		System.out.println("response: " + response.prettyPrint());		
	}
	
	@When("a user retrieves incomplete URL exchange rates")
	public void a_user_retrieves_incomplete_url_exchange_rates(){
		response = given().get(ENDPOINT_GET_INCOMPLETE_URI_EXCHANGE_RATES);
		System.out.println("response: " + response.prettyPrint());		
	}
	
	@When("a user retrieves specific URL date Foreign Exchange rates")
	public void a_user_retrieves_specific_url_date_exchange_rates(){
		response = given().get(ENDPOINT_GET_SPECIFIC_EXCHANGE_RATES);
		System.out.println("response: " + response.prettyPrint());		
	}
	
	@When("a user retrieves future URL date Foreign Exchange rates")
	public void a_user_retrieves_future_url_date_exchange_rates(){
		response = given().get(ENDPOINT_GET_FETURE_EXCHANGE_RATES);
		System.out.println("response: " + response.prettyPrint());		
	}
		
	@SuppressWarnings("deprecation")
	@Then("the error status code is (\\d+)")
	public void verify_error_status_code(int statusCode){
		json = response.then().statusCode(statusCode);
		Assert.assertEquals(400, response.getStatusCode());
	}

	@And("rate for \"([^\"]*)\" is \"([^\"]*)\"$")
	public void rate_verify(String curency, String curencyValue){
		String actulRate = response.path(curency).toString();
		Assert.assertEquals(curencyValue, actulRate);
	}
	
	@SuppressWarnings("deprecation")
	@Then("the status code is (\\d+)")
	public void verify_status_code(int statusCode){
		json = response.then().statusCode(statusCode);
		Assert.assertEquals(200, response.getStatusCode());
	}

	@And("response includes the following$")
	public void response_equals(Map<String,String> responseFields){
		for (Map.Entry<String, String> field : responseFields.entrySet()) {
			if(StringUtils.isNumeric(field.getValue())){
				json.body(field.getKey(), equalTo(Integer.parseInt(field.getValue())));
				
			}
			else{
				json.body(field.getKey(), equalTo(field.getValue()));
				
			}
		}
	}
	
}
		
	
		


