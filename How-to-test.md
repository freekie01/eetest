Feature:

Create a booking

|ID| Given                                                                | When                | Then                                       | Outcome   |
|--| -------------------------------------------------------------------- | ------------------- | ------------------------------------------ |-----------|
|1 | I add a valid firstname, surname, deposit, checkin, checkout values  | When I select Save  | The details will be displayed on the screen|As expected|
|2 | I add a valid firstname                                              | When I select Save  | The details will not be saved              |As expected|
|3 | I add a valid surname                                                | When I select Save  | The details will not be saved              |As expected|
|4 | I add a valid deposit                                                | When I select Save  | The details will not be saved              |As expected|
|5 | I add a valid checkin date                                           | When I select Save  | The details will not be saved              |As expected|
|6 | I add a valid checkout date                                          | When I select Save  | The details will not be saved              |As expected|

Feature:

Delete a booking

|ID| Given                   | When                  | Then                       | Outcome   |
| -| ----------------------- | --------------------- |----------------------------|---------- |
|1 | There is a booking row  | When I select Delete  | The details will be deleted|As expected|

Run all the tests using the following Browsers:
Chrome
Safari
Edge
IE


Feature:

Validation

|ID| Given                                                                                      | When                | Then                         | Outcome   |
|--| -------------------------------------------------------------------------------------------| ------------------- | ---------------------------- |-----------|
|1 | After adding valid details in all fields, amend the Deposit field to have alpha characters | When I select Save  | The details will not be saved|As expected|
|2 | After adding valid details in all fields, amend the checkin field to have alpha characters | When I select Save  | The details will not be saved|As expected|
|2 | After adding valid details in all fields, amend the checkout field to have alpha characters| When I select Save  | The details will not be saved|As expected|
