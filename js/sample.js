(function(){
	// consider using a debounce utility if you get too many consecutive events
	$(window).on('motion', function(ev, data){
		console.log('detected motion at', new Date(), 'with data:', data);
		var spot = $(data.spot.el);
		spot.addClass('active');
		setTimeout(function(){
			spot.removeClass('active');
		}, 230);
	});

	// example using a class
	// $('.link').on('motion', function(ev, data){
	// 	console.log('motion detected on a link to', data.spot.el.href);

	// });

	
	$('#one').on('motion', function(){
		$('#myView').html();
		$('#myView').html('<img class="imgView" src="images/one.jpg" />');
	});

	$('#two').on('motion', function(){
		$('#myView').html();
		$('#myView').html('<img class="imgView" src="images/two.jpg" />');
	});

	$('#three').on('motion', function(){
		$('#myView').html();
		$('#myView').html('<img class="imgView" src="images/three.jpg" />');
	});

	$('#four').on('motion', function(){
		$('#myView').html();
		$('#myView').html('<img class="imgView" src="images/four.jpg" />');
	});



})();