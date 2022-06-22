(function( $ ) {
	'use strict';

	/**
	 * All of the code for your public-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */

	var $containerFilter = $('.lia-js-filter');

	var $configSlickFilter = {
		lazyLoad: 'ondemand',
		arrows: false,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipe: false,
		fade: true,
		adaptiveHeight: true
	};

	if($containerFilter.length){
		$containerFilter.each(function(){
			var $father = $(this).parent().parent().parent();
			var $sliderFilter = $father.find('.lia-carousel-filtering').slick($configSlickFilter);
			var $select = $father.find("[name=Modelo]");
			var $buttons = $(this).find("button");
			$select.change(function (){
				var $index = $(this)[0].selectedIndex;
				$sliderFilter.slick('slickGoTo', ($index === 0) ? 0: $index - 1);
			});
			$(this).on('click',"button", function(){
				var $filter = $(this).data('filter');
				var $nroDorm = $(this).data('num');
				$buttons.each(function (){
					$(this).removeClass("is-active");
				});
				$(this).addClass("is-active");
				$nroDorm = parseInt($nroDorm);
				$sliderFilter
					.slick('slickUnfilter')
					.slick('slickFilter',`:has(.${$filter})`)
					.slick('slickGoTo', 0);
				var $data = $father.find(".data-select-quoter").val();
				$data = JSON.parse($data);
				var $htmlSelect ='<option value="">Elige Modelo</option>';
				$data.forEach(function(ele){
					if(parseInt(ele.nroDormitorio) === $nroDorm) $htmlSelect +=`<option value="${ele.modelo}">${ele.modelo}</option>`;
				});
				$select
					.html("")
					.html($htmlSelect)
					.val("");
			});
			if($buttons.length > 0) $buttons.first()[0].click();
		});
	}

	$('.lia-carousel').slick({
		dots: true,
		infinite: true,
		autoplay: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		variableWidth: true
	});
	/*
	$('.slider-obra').slick({
		dots: true,
		infinite: true,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		variableWidth: true
	});*/
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		// fade: true,
		variableWidth: true,
		autoplay: true,
		asNavFor: '.slider-nav'
	  });
	  $('.slider-nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		centerMode: true,
		variableWidth: true,
		focusOnSelect: true
	  });


	  $('.slider-for-avance').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav-avance'
	  });
	  $('.slider-nav-avance').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for-avance',
		dots: false,
		infinite: true,
		centerMode: true,
		vertical: true,

		arrows: true,
		focusOnSelect: true
	  });
				  
})( jQuery );
