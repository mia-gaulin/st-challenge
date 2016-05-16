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
