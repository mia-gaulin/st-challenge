// Task 1
var city = document.getElementsByClassName("destination");
var checkIn = document.getElementsByClassName("in_date_field");
var checkOut = document.getElementsByClassName("out_date_field");
var destination = city[1]
var dateIn = checkIn[1]
var dateOut = checkOut[1]

// the following will return the value of each individually
$(destination).val();
$(dateIn).val();
$(dateOut).val();

// or, you can run this, and call 'vacation' to see an array of destination, check in, and check out dates
var vacation = new Array;
vacation.push($(destination).val());
vacation.push($(dateIn).val());
vacation.push($(dateOut).val());

// Task 2
var hotels = document.getElementById("hotel_listings");
var hotelItems = new Array;
for (var i = 0; i < hotels.childNodes.length; i++) {
  if (hotels.childNodes[i].nodeName == "LI") {
    hotelItems.push(hotels.childNodes[i]);
  }
}

var listing = document.getElementById("hotel_listing_container");

listing.querySelector("h3").innerHTML = "Showing " + hotelItems.length + " out of 387 San Francisco Hotels";

$(function(){
  var $listing = $('.listing_summary').clone();
  $('.bottom').append($listing);
});

// window.addEventListener('scroll', function () {
//   $('.bottom').append($('.listing_summary'));
// });

// Task 3
var button = document.getElementsByClassName("prominent_button do_show_rates");
