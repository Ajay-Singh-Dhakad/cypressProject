Feature: To Validate the Cart Page of Myntra.com
# T.C.005
Scenario: Verify the cart product is similar to the added product or not 
Given Open the browser and navigate to the product Page
When Select size
And Click on Add to bag button
And Click on the Go to Bag button
And click on alert
Then Similar product should be added to the bag
#T.C.006
Scenario: Verify the added product details
Given Open the browser and navigate to the product Page
When Select size
And Click on Add to bag button
And Click on the Go to Bag button
And click on alert
Then The details of added product should be mentioned at the product page
#T.C.007
Scenario: Verify the order payment details 
Given Open the browser and navigate to the product Page
When Select size
And Click on Add to bag button
And Click on the Go to Bag button
And click on alert
Then The order payment details of added product should be mentioned at the cart page
#T.C.008
Scenario: Validate the functionality of Remove button
Given Open the browser and navigate to the product Page
When Select size
And Click on Add to bag button
And Click on the Go to Bag button
And click on alert
And click on the Remove button
Then The product should be removed from the cart page
#T.C.009
Scenario:Click on the logo of myntra
Given Open the browser and navigate to the product Page
When Select size
And Click on Add to bag button
And Click on the Go to Bag button
And click on alert
And click on the Remove button
And click on the logo of Myntra
Then The user should be redirected to homepage