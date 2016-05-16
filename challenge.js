// Task 1
var city = document.getElementsByClassName("destination");
var checkIn = document.getElementsByClassName("in_date_field");
var checkOut = document.getElementsByClassName("out_date_field");
var destination = city[1]
var dateIn = checkIn[1]
var dateOut = checkOut[1]
$(destination).val();
$(dateIn).val();
$(dateOut).val();
var vacation = new Array;
vacation.push($(destination).val());
vacation.push($(dateIn).val());
vacation.push($(dateOut).val());

// call 'vacation' to see an array of destination, check in, and check out dates

// Task 2
element.querySelector("h3").innerHTML = "Showing 1-20 out of 387 San Francisco Hotels";

// Task 3
var button = document.getElementsByClassName("prominent_button do_show_rates");
