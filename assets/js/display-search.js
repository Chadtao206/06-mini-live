//first thing - grab the url params
var params = location.search.split("&");
var term = params[0].split("=")[1];
var format = params[1].split("=")[1];
var baseURL = `https://www.loc.gov/${format}/?q=${term}&fo=json`;
var resultForEl = document.querySelector("#result-text");
var resultContainerEl = document.querySelector("#result-content");

function searchForStuff(url = baseURL) {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      resultForEl.textContent = term;
      var results = data.results;
      putStuffOnPage(results);
    });
}

function putStuffOnPage(data) {
  console.log(data);
  //loop through data and put stuff on page;
  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    var row = document.createElement("div");
    row.classList.add("row");
    var h1 = document.createElement("h1");
    h1.textContent = item.title;
    var textNImg = document.createElement("div");
    textNImg.classList.add("img-n-text");
    var img = document.createElement("img");
    img.src = item.image_url[0];
    var p = document.createElement("p");
    p.textContent = item.description[0];
    var a = document.createElement("a");
    textNImg.append(img);
    textNImg.append(p);
    a.href = item.url;
    a.target = "_blank";
    a.append(h1);
    row.append(a);
    row.append(textNImg);

    //create img element
    //put the made row of info intop the container
    resultContainerEl.append(row);
  }
}

searchForStuff();

// searchForStuff("https://www.loc.gov/websites/?q=joe%20biden&fo=json");
