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
  "duration": 4830751296,
  "status": "passed"
});
formatter.match({
  "location": "Basket.i_add_all_mandatory_items()"
});
formatter.result({
  "duration": 721104015,
  "status": "passed"
});
formatter.match({
  "location": "Basket.i_save_the_booking()"
});
formatter.result({
  "duration": 89547413,
  "status": "passed"
});
formatter.match({
  "location": "Basket.i_can_see_the_saved_booking()"
});
formatter.result({
  "duration": 50513428,
  "status": "passed"
});
});