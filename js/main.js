;(function($, window, document) {

	var wH,
			$cursor = $('#cursor'),
			$html   = $('html'),
			$window = $(window);

	$window.resize(function() {
		var wH = $window.height();
	});

  $html.mouseenter(function(){
      $cursor.show();
      return false;
  });

  $html.mousemove(function(e){
  		var x = e.clientX,
  				y = e.clientY;

      $cursor.css({
      	left: x - 450,
      	top: y - 245
      });
  });

})(jQuery, window, document, undefined);