$( document ).ready(function() {
	console.log( "ready!" );

	var starWarsPeopleUrl = "http:swapi.co/api/people/";
	var starWarsFilmsUrl = "http:swapi.co/api/films/";
	var starWarsPlanetsUrl = "http:swapi.co/api/planets/";
	var starWarsWrongUrl = "http:swapi.co/api/frefe/";

	// function appel API
	function appelAjax(url){
		$.ajax({
			url: url,
			typeData:"json",
			beforeSend: function(){
			console.log("request will be send soon");
			},
			success: function(result, status){
			console.log("request succeeds" + result);//Add result in console.log when request is success
			},
			error : function(resultat, statut, erreur){
			console.log("the request fails");
			},
			complete : function(resultat, statut){
			console.log("request finishes, whether in failure or success");
			}
		});
	}
	appelAjax('http:swapi.co/api/films/');


	/* section 1 */

	/*
	* Observations :
	*/

	/* section 2 */

	//function appel API
	function appelAjax2(url){
		$.ajax({
			url: url,
			typeData:"json",
			beforeSend: function(){
				console.log("request will be send soon");
			},
			success: function(result, status){
				console.log("request succeeds" + result);//Add result in console.log when request is success

				for (i=0; i < result['results'].length; i++) {
					for (var key in result['results'][i]) {
						$('#result').append('<div>' +result['results'][i][key] + '</div>' + '</br>')
					}
				}

				// for (var key in result) {
				// 	obj = result[key]
				// 	$('#result').append('<div  class="panel panel-default">' + obj)
				// 	for (var key in obj) {
				// 		$('#result').append('<li class="list-group-item">' + obj[key]['title'] + ' ' + obj[key]['director'] + '<span class="badge">' + obj[key]['episode_id'] + '</span>' + '</li>')
				// 	}
				// }
			},
			error : function(resultat, statut, erreur){
				console.log("the request fails");
			},
			complete : function(resultat, statut){
				console.log("request finishes, whether in failure or success");
			}
		});
	}

	appelAjax2('http:swapi.co/api/films/');


	/* section 3 */

	// function appel API
	function appelAjax3(url){
		$.ajax({
			url: url,
			typeData:"json",
			beforeSend: function(){
				console.log("request will be send soon");
			},
			success: function(result, status){
				console.log(result);
				for (var key in result) {
					obj = result[key];
					for (var key in obj) {
						$('#result').append('<div  class="panel panel-default">' + '<div class="panel-heading">' + obj[key]['title'] + '</div>' + '<div class="panel-body hidden">' + obj[key]['opening_crawl'] + '</div>' + '</div>');
                    
                    }
						$('.panel-heading').click(function () {
                        	if ($(this).next().hasClass('hidden')) {
                        $(this).next().removeClass('hidden');
                        } else {
                        $(this).next().addClass('hidden');
                        }
                });
        }
			},
			error : function(resultat, statut, erreur){
				console.log("the request fails");
			},
			complete : function(resultat, statut){
				console.log("request finishes, whether in failure or success");
			}
		});
	}
	appelAjax3('http:swapi.co/api/films/');

	/* section 4 */

	function appelAjax4(url){
		$.ajax({
			url: url,
			typeData:"json",
			beforeSend: function(){
				console.log("request will be send soon");
			},

			success: function (result, status) {
				for (var i = 0 ; i < result.length ; i++) {
					$('#result').append('<strong>' + result[i]['name'] + '</strong> :</br>');

				for (var a = 0 ; a < result[i]['aliases'].length ; a++) {
					$('#result').append(result[i]['aliases'][a] + '</br>');
				}
				$('#result').append('<hr>');
				}
			},
			// success: function(result, status){
			// 	for (var key in result) {
			// 		obj = result[key]
			// 		for (var key in obj) {
			// 			console.log(result);
			// 			$('#result').append('<div  class="panel panel-default">' + obj['name'] + ' ' + obj['aliases']+ '</div>' );
			// 			}
			// 			$(".panel-default").on('click', function() {

			// 				$(this).append('<div  class="panel panel-default">' + obj['tvSeries'] + '</div>');
			// 			});
					
			// 	}
			// },
			error : function(resultat, statut, erreur){
				console.log("the request fails");
			},
			complete : function(resultat, statut){
				console.log("request finishes, whether in failure or success");
			}
		});
	}

	 //appelAjax4('http:anapioficeandfire.com/api/characters');
});