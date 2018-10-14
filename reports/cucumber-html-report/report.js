$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("basket.feature");
formatter.feature({
  "line": 2,
  "name": "basket",
  "description": "",
  "id": "basket",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#shopping basket features"
    }
  ],
  "line": 5,
  "name": "add to basket",
  "description": "",
  "id": "basket;add-to-basket",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "that i am on the booking website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "i add all mandatory items",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "i save the booking",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I can see the saved booking",
  "keyword": "Then "
});
formatter.match({
  "location": "Basket.that_i_am_on_the_booking_website()"
});
formatter.result({
  "duration": 4944781253,
  "status": "passed"
});
formatter.match({
  "location": "Basket.i_add_all_mandatory_items()"
});
formatter.result({
  "duration": 695439147,
  "status": "passed"
});
formatter.match({
  "location": "Basket.i_save_the_booking()"
});
formatter.result({
  "duration": 81062745,
  "status": "passed"
});
formatter.match({
  "location": "Basket.i_can_see_the_saved_booking()"
});
formatter.result({
  "duration": 45131789,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Fiona]\u003e but was:\u003c[Reekie]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat bindings.Basket.i_can_see_the_saved_booking(Basket.java:65)\r\n\tat ✽.Then I can see the saved booking(basket.feature:9)\r\n",
  "status": "failed"
});
});