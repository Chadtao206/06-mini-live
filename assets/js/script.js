var searchInput = document.querySelector("#search-input");
var selectEl = document.querySelector("#format-input");
var searchForm = document.querySelector("#search-form");

//listen for submit event on form
searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var searchTerm = searchInput.value.trim();
  var formatSelected = selectEl.value;

  console.log("TERM", searchTerm);
  console.log("format", formatSelected);

  //build the url to assign to our location,
  var redirectURL = `./search-results.html?term=${searchTerm}&format=${formatSelected}`;
  location.replace(redirectURL);
});
