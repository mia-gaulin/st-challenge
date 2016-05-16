Integration Engineer Take Home Assignment

Tingo.com is one of SmarterTravel’s internal brands where you can shop for and book a hotel.
For the exercise, you will be writing JavaScript code to modify the behavior of the tingo.com
listings page - this is the page you arrive on when doing a search for a destination with a check
in and check out date from the home page. An example URL
is http://www.tingo.com/hotels/San-Francisco- California-United-
States/60713?searchDone=1&amp;a=2016-08- 09&amp;d=2016-08-
11&amp;rooms=%5B%7B%22adults%22%3A2%2C%22numChildren%22%3A0%2C%22children%22%
3A%5B%5D%7D%5D

You should develop your solution by writing JavaScript code in your preferred editor, and then
pasting it into your browser’s developer tools to execute it. 
The solution you submit should be runnable by simply copying and pasting the entire block into
the Chrome developer console and running it. 

Task 1

Write JavaScript code that fetches the destination name, check in date, and check out date of
the page the user is on and prints them to the console. You can find these values in the search
form near the top of the page.

Task 2

At the top of the page there is a tagline that contains something similar to “Searching 384 San
Francisco Hotels”. Modify this string to say “Showing XX out of 384 San Francisco Hotels” where
XX is the number of hotels currently listed on the page. Note that this page uses ‘infinite
scrolling’, so as you scroll down more hotels are loaded in via AJAX. The number of hotels in the
tagline should be updated to reflect this as the user scrolls.

Task 3

Each hotel in the listing has a ‘Select’ button that when clicked takes the user to a detail page
about that specific hotel. Write JavaScript code that changes the functionality of this button to
instead do 2 things
1) Opens the hotel’s detail page in a new browser window instead of reusing the same one as it
currently does
2) Add the name of the hotel chosen to a new list somewhere on the hotel listing page that says
“Selected hotels”. You can choose where this list is displayed and how it is styled, but it must be
visible on the hotel listings page. Note that If the user chooses the same hotel twice, the name
should not be duplicated in the list of ‘Selected hotels’.
