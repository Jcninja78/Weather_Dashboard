var apiKey = "6d9cc0b7996a0b5f70cb1b01983fb443"

// // After searching for a city, the following information is displayed:

// //  Current temperature
// //  Current humidity
//  Windspeed
//  Uv index
//  5 day forecast


// we need to grab information from user
// after we figure out what city the user is looking for we make an ajax request with city
// //  Current temperature
// //  Current humidity
//  Windspeed
//  Uv index
//  5 day forecast

// create a user input

// add a submit button

// add eventhandler to submit button
$("#weatherSearch").on("click", function(event){
    event.preventDefault();
    console.log("TEST");
    var city = $("#city").val()
    console.log(city);
})
// eventhandler then grabs information from input box

// then it makes the ajax request
// with the response from the API we then place the data on the page
// then make the site pretty