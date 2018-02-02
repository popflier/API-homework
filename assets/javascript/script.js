$(window).on("load", function() {

$("#searchBtn").on("click", function () {
	/*var searchTerm = $(this).attr("data-btnText");*/

//array to hold searchTerms from the input form field
var imageBank = [];


event.preventDefault();

$("#pageBtn").on("click", function () {
	var searchTerm = $(this).attr("data-btnText");
//wanting to grab the text typed into the search field and loop it through an array
//and push all additions to the array.

var APIkey = "uFyH2vwzgnMtG2KIHMEFN56F4076iEDc";
/*var queryURL = "https://api.giphy.com/v1/gifs/random?search?q=" + searchTerm + "&api_key=" + APIkey + "&limit=10";
*/
var queryURL = "https://api.giphy.com/v1/gifs/random?search?q=kittens&api_key=" + APIkey + "&limit=10";


$.ajax({
	url: queryURL,
	method: "GET"
}) //ajax function


.then(function(response) {
	console.log(response);

	
	console.log(buttonTitles);
	
  /* var queryURL = "https://api.giphy.com/v1/gifs/random?search?q=" + searchTerm + "&api_key=" + APIkey + "&limit=10";*/

   // var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats";

   //      $.ajax({
   //        url: queryURL,
   //        method: "GET"
   //      }).done(function(response) {
   //        console.log(response);

	//place below in for loop

	var imageURL = response.data.images_original_url;
	var newImage = $("<img>");

	newImage.attr("src", imageURL);
	$("#gfxContainer").prepend(newImage);
	console.log(newImage);




});
});
	}); //function response

	$(".searchBtn").on("Click", function(event) {
		$(".searchInput").val("");

	}); //searchBtn function

 //onLoad function

