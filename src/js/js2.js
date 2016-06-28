import $ from 'jquery';

var run = function() {
  console.log(results)
}

var results = $.ajax( {
  url: 'https://openapi.etsy.com/v2/listings/active?/color34;234;54&color_accuracy=15&limit=25&api_key=zpht0fbrdvf3lz5ys9gcl04j',
  dataType: 'json',
  success: run,
  error: logIt
})