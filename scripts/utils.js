function getQueryParams() {
    var queryParams = {};
    var queryString = window.location.search.substring(1);
    if (queryString.length === 0) {
      return undefined; // Return undefined when there are no query parameters
    }
    var pairs = queryString.split("&");
    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split("=");
      var key = decodeURIComponent(pair[0]);
      var value = decodeURIComponent(pair[1]);
      queryParams[key] = value;
    }
    return queryParams;
}

function toHUF(number) {
    var str = number.toString();
    var parts = str.split(".");
    var formatted = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    if (parts.length > 1) {
      formatted += "." + parts[1];
    }
    formatted += " Ft";
    return formatted;
}
  
  