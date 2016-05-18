// Task 1
var city = document.getElementsByClassName("destination");
var checkIn = document.getElementsByClassName("in_date_field");
var checkOut = document.getElementsByClassName("out_date_field");
var destination = city[1];
var dateIn = checkIn[1];
var dateOut = checkOut[1];

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
var city = document.getElementsByClassName("destination");
var destination = city[1];

var getHotelItems = function () {
  var hotels = document.getElementById("hotel_listings");
  var hotelItems = new Array;

  for (var i = 0; i < hotels.childNodes.length; i++) {
    if (hotels.childNodes[i].nodeName == "LI") {
      hotelItems.push(hotels.childNodes[i]);
    }
  }
  return hotelItems;
}

var getTotalHotelCount = function () {
  var searchString = $('.listing_summary h3').text();
  var searchArray = searchString.split(" ");
  return searchArray[1];
}

var initialHotelCount = function (hotelCount, totalHotelCount) {
  var hotelCountString = "Showing " + hotelCount + " out of " + totalHotelCount + " hotels in "
                         + $(destination).val();
  var listingContainerHeader = $('#hotel_listing_container h3');

  listingContainerHeader.text(hotelCountString);

  var listingSummary = $('.listing_summary').clone();
  $('.bottom').append(listingSummary);
};

var updateHotelCount = function (hotelCount, totalHotelCount) {
  var hotelCountString = "Showing " + hotelCount + " out of " + totalHotelCount + " hotels in "
                         + $(destination).val();
  var listingContainerHeader = $('#hotel_listing_container h3');

  listingContainerHeader.text(hotelCountString);

  $('.bottom h3').text(hotelCountString);
};

var hotelCount = getHotelItems().length;
var totalHotelCount = getTotalHotelCount();

initialHotelCount(hotelCount, totalHotelCount);

$(window).scroll(function(){
  hotelCount = getHotelItems().length;
  updateHotelCount(hotelCount, totalHotelCount);
});


// Task 3
var buttons = document.querySelectorAll(".prominent_button.do_show_rates");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    $(this).attr('target', '_blank');
  });
}
