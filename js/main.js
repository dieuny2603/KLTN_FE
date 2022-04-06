(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var carousel = function() {
		$('.featured-carousel').owlCarousel({
	    loop: true,
	    autoplay: true,
	    margin:30,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:true,
	    dots: true,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-ios-arrow-back'></span>","<span class='ion-ios-arrow-forward'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:2
	      },
	      1000:{
	        items:3
	      }
	    }
		});

	};
	carousel();

	function addSC() {
		const html =
			$('#form-addSC').innerHTML = html;
	}
	$('#btnAddSC').on('click', () => {
		// addSC();
		var htmlObj = document.getElementById('form-addSC');
		htmlObj.innerHTML = htmlObj.innerHTML + '<div class="lc-suatchieu">	<div class="">		<label for="">Suất chiếu</label>		<select id="" name="" class="select-pc">			<option value="">9:00</option>			<option value="">12:00</option>		<option value="">20:00</option>		</select>	</div>	<div class="">		<label for="">Rạp</label>		<select id="room" name="room" class="select-pc">			<option value="1">CINEMA 1</option>			<option value="2">CINEMA 2</option>			<option value="3">CINEMA 3</option>		</select>	</div></div>';
	})
	
})(jQuery);
