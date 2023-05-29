function doEverything() {
  // remove <p> tag
  let p = document.getElementsByTagName("p")[0];
  p.remove();
  // remove <h2> tag
  let h2 = document.getElementsByTagName("h2")[0];
  h2.remove();
  // get browser name and display it in the <h3> tag with id "browserName"
  let browserName = window.navigator.appName;
  let h3 = document.getElementById("browserName");
  h3.innerHTML = "Browser name: " + browserName;
  // add calculated area (outerWidth and outerHeight) to <h3> tag with id "windowSize
  let windowSize = document.getElementById("windowSize");
  windowSize.innerHTML =
    "Area of the window: " + window.outerWidth * window.outerHeight;
  // add URL and HostName to <h3> tag with id "URL"
  let URL = document.getElementById("URL");
  URL.innerHTML = "The URL information is as follows: ";
  let p2 = document.createElement("p");
  p2.innerHTML = "HostName: " + window.location.hostname;
  URL.appendChild(p2);
  let p3 = document.createElement("p");
  p3.innerHTML = "URL: " + window.location.href;
  URL.appendChild(p3);
}

doEverything();
