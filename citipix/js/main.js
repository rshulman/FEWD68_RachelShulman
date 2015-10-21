//wait for dom elements to load
$(document).ready(function() {

//prevent submit button from refreshing page
$('#submit').click(function() {
  event.preventDefault();
  
//get value of #city input and correct spacing and capitalization
var city = $('#city').val();
 $('#').val('');
  city = city.toLowerCase().trim();


if (city == "New York" || city == "New York City" || city == "NYC") {
  $('body').attr('class', 'ny');  //if user submits any of those, show nyc background image
}
else if (city == "San Francisco" || city == "SF" || city =="Bay Area") {
  $('body').attr('class', 'sf'); //if user submits any of those, show sf background 
}
else if (city == "Los Angeles" || city == "LA" || city =="LAX") {
  $('body').attr('class', 'la');//if user submits any of those, show la background 
}
else if (city == "Austin" || city == "ATX") {
  $('body').attr('class', 'austin'); //if user submits any of those, show austin background 
}
else if (city == "Sydney" || city == "Syd") {
  $('body').attr('class', 'sydney');//if user submits any of those, show sydney background 
}
});
});


// the code is not working for me. everything looks good but the background doesnt change when
//i type in each city. i went through the solution code line by line to make sure it matched also
//thoughts?