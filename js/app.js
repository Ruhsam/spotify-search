// wait for DOM to load before running JS
$(document).on('ready', function() {

  // check to make sure JS is loaded
  console.log('JS is loaded!');
  var apiKey = '6rqhFgbbKwnb9MLmUQDhG6'
  var apiURL = 'https://api.spotify.com/v1/search?type=track&q='+ tracks + apiKey

$.ajax({
	method: 'GET',
	URL: apiURL,
	data: {
		api_key:apiKey,
		q:''
},
	success: onSuccess,
	error: onError
});
  function onSuccess(json){
	console.log(json);
	console.log(json.data);
}
  function onError(){
	console.log('error to the max')
}
$("form").on("submit");
 console.log($this.val());
