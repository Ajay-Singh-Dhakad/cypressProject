Feature: To Validate the Product Page of Myntra.com
# T.C.001
Scenario: Add the product to the cart/bag
Given Open the browser and navigate to the product Page
When Select size
And Click on Add to bag button
And Click on the Go to Bag button
And click on alert
Then Respected product should be added to the bag
 # T.C.002
Scenario: Verify the changing in Bag icon
Given Open the browser and navigate to the product Page
When Select size
And Click on Add to bag button
Then UI of the bag icon should be changed from 0 to 1
 #T.C.003
Scenario: Verify the changing of Add to bag button to Go to bag button
Given Open the browser and navigate to the product Page
When Select size
And Click on Add to bag button
Then UI of the Add to bag button should be changed to Go to bag button
 #T.C.004
Scenario: Valiadte the functionality of the Go to bag button
Given Open the browser and navigate to the product Page
When Select size
And Click on Add to bag button
And Click on the Go to Bag button
And click on alert
Then user should be able to navigate to cart page
