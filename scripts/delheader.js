function setHeaderValue(headers, headerName, value) {
  var lower = headerName.toLowerCase();
  if (lower in headers) {
    headers[lower] = value;
  } else {
    headers[headerName] = value;
  }
}

var headers = $request.headers;
setHeaderValue(headers, "X-RevenueCat-ETag", "");
$done({ headers: headers });