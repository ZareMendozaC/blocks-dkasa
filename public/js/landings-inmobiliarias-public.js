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
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		variableWidth: true
	});
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

	$("#testimonios-slider").slick({
		slidesToShow: 1,
        slidesToScroll: 1,			
        arrows: true,
        appendDots: $("#testimonios-dots"),
        dots: true,
        autoplay: false,
        autoplaySpeed: 2500,
        speed: 2500,
        infinite: true,
        prevArrow: `<div class="" role="button" aria-label="Previous">
        <svg width="35" height="58" viewBox="0 0 35 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.0602 51.7565L28.5008 57.3157L0 28.8157L28.5008 0.291504L34.0602 5.8507L11.1187 28.8157L34.0602 51.7565Z" fill="#BE1521"/>
        </svg>
        </div>`,
        nextArrow: `<div class="" role="button" aria-label="Next">
        <svg width="35" height="58" viewBox="0 0 35 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 6.01403L5.5593 0.454834L34.0844 28.9548L5.5593 57.4547L0 51.8955L22.9415 28.9548L0 6.01403Z" fill="#BE1521"/>
        </svg>
        </div>`,
        responsive: [{
            breakpoint: 767,
            settings: {
                arrows: false,
                dots: true
            }
        }]
    });
	
})( jQuery );
