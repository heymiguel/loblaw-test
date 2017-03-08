# Submission for Loblaw Digital

## Requirements and Response
* Your challenge is to build a new Joe Fresh product listing page, just the the main content area for this page, don’t worry about adding a menu, header, footer or any marketing hero images.

Main content area is complete. `React` is used to hold three states: the original order of the JSON file, a scratchpad array used for sorting and a display array to manage the _show more_ or _pagination_.

* The page will take a JSON list of products, and display the first 20 products (in a grid or a list) when the page is loaded.

JSON accessed via link that was emailed. `Axios` is used to manage the GET call, alongside a built-in and robust promises library. 

* There should be a way to either paginate or “load more” products beyond the initial 20 that are displayed.

Clicking on _show more_ loads the next 20 items.


# Breakpoints
* The page should be responsive. You can choose the breakpoints that you would like to have, but have at least two — one for smaller devices, and one for larger ones.

> Mobile
> 2 products side by side

> Tablet
> 3 products side by side

> desktop and beyond
> 4 products within a container.

* There should be way to sort the products:
* Default order (the way it appears in the supplied JSON document).
* By the productPrice property low to high.
* By the productName property alphabetically A-Z.

Enabled via the three buttons on top. 


## Tools and Credits 

JS Framework used: `React`

Library for API: `Axios`

CSS Framework used: `bulma.io`

CSS Caveats: Modular CSS (in case bulma needed overriding) scoped to each component via JSX. 


