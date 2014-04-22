$(document).ready(function() {
	$.ajax('https://api.parse.com/1/classes/NewsItem', 
	  {
	    beforeSend: function(request) {
	      request.setRequestHeader('X-Parse-Application-Id', 'wp4sBsBXBMygewTekXeVDgfHALM1mM1tJ4FqS1mK');
	      request.setRequestHeader('X-Parse-REST-API-Key', 'mHijvpVtVXd3rL9i7b863e6EqUMdAKvdveOBsCWz');
	        }
	    }
).done(function(response) {
	//console.log(response.results);
	// var stuffToPostOnOurSite = response.results;
	// console.log(stuffToPostOnOurSite);
  	// $(".newsfeed").text(response.results);
  	// for (var i = 0; i<response.results.length; i++){
  	// 	console.log(response.results[i])
  	// 	$(".newsfeed").append(response.results[i].title + "<br><br><br>" + response.results[i].body + "<br><br><br>");
  	// }
  	

});
});