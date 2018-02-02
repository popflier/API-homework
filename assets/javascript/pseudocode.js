/*

on page load
set variables
buttonTitles = [football, baseball, etc.]
displayButtons - function
clear previous buttons from screen
for loop through buttonTitles
create a jquery  button
add attribute to jquery button created(attribute title: "button-title", attribute value:
put the current buttonTitle that we are looping through in the button
append the button to the page
When the user clicks on one of the buttons - function
prevent default
get the attribute of the button clicked and store in a variable
AJAX call to GIPHY
method | GET
URL:url?apikey=MY KEY&q=SEARCH TERM
loop through response.data
create a jquery div
create a jquery image
set the src attribute of the jquery image to be the image from GIPHY response data[i].images, etc...
create a jquery paragraph













































*/