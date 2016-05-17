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
// still working on getting the XX of 387 to change as the page loads more items
var city = document.getElementsByClassName("destination");
var destination = city[1]

// $(window).scroll(function() {
//   if ($(window).data('ajaxready') == false) return;
//   if ($(window).scrollTop() >= ($(document).height() - $(window).height()))
var hotels = document.getElementById("hotel_listings");
var hotelItems = new Array;

for (var i = 0; i < hotels.childNodes.length; i++) {
  if (hotels.childNodes[i].nodeName == "LI") {
    hotelItems.push(hotels.childNodes[i]);
  }
}
// });

var listing = document.getElementById("hotel_listing_container");

// next step is to avoid hardcoding the 387

listing.querySelector("h3").innerHTML = "Showing " + hotelItems.length + " out of 387 hotels in " + $(destination).val();

$(function(){
  var $listing = $('.listing_summary').clone();
  $('.bottom').append($listing);
});

// this was my first method, but i like the clone better:

// window.addEventListener('scroll', function () {
//   $('.bottom').append($('.listing_summary'));
// });

// Task 3
var button = document.getElementsByClassName("prominent_button do_show_rates");
