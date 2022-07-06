(function ($) {
  "use strict";

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

  var $containerFilter = $(".lia-js-filter");

  var $configSlickFilter = {
    lazyLoad: "ondemand",
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    fade: true,
    adaptiveHeight: true,
  };

  if ($containerFilter.length) {
    $containerFilter.each(function () {
      var $father = $(this).parent().parent().parent();
      var $sliderFilter = $father
        .find(".lia-carousel-filtering")
        .slick($configSlickFilter);
      var $select = $father.find("[name=Modelo]");
      var $buttons = $(this).find("button");
      $select.change(function () {
        var $index = $(this)[0].selectedIndex;
        $sliderFilter.slick("slickGoTo", $index === 0 ? 0 : $index - 1);
      });
      $(this).on("click", "button", function () {
        var $filter = $(this).data("filter");
        var $nroDorm = $(this).data("num");
        $buttons.each(function () {
          $(this).removeClass("is-active");
        });
        $(this).addClass("is-active");
        $nroDorm = parseInt($nroDorm);
        $sliderFilter
          .slick("slickUnfilter")
          .slick("slickFilter", `:has(.${$filter})`)
          .slick("slickGoTo", 0);
        var $data = $father.find(".data-select-quoter").val();
        $data = JSON.parse($data);
        var $htmlSelect = '<option value="">Elige Modelo</option>';
        $data.forEach(function (ele) {
          if (parseInt(ele.nroDormitorio) === $nroDorm)
            $htmlSelect += `<option value="${ele.modelo}">${ele.modelo}</option>`;
        });
        $select.html("").html($htmlSelect).val("");
      });
      if ($buttons.length > 0) $buttons.first()[0].click();
    });
  }

  $(".lia-carousel").slick({
    dots: true,
    infinite: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    prevArrow: `<div class="arrow-slider-prev"><svg width="35" height="58" viewBox="0 0 35 58" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M34.0602 52.3016L28.5008 57.8608L0 29.3609L28.5008 0.83667L34.0602 6.39586L11.1187 29.3609L34.0602 52.3016Z" fill="#BE1521"/>
		</svg></div>`,
    nextArrow: `<div class="arrow-slider-next"><svg width="35" height="57" viewBox="0 0 35 57" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M0 5.55919L5.5593 0L34.0844 28.4999L5.5593 56.9999L0 51.4407L22.9415 28.4999L0 5.55919Z" fill="#BE1521"/>
		</svg></div>`,
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
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // fade: true,
    variableWidth: true,
    autoplay: true,
    asNavFor: ".slider-nav",
    prevArrow: `<div class="arrow-slider-prev"><svg width="35" height="58" viewBox="0 0 35 58" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M34.0602 52.3016L28.5008 57.8608L0 29.3609L28.5008 0.83667L34.0602 6.39586L11.1187 29.3609L34.0602 52.3016Z" fill="#BE1521"/>
					</svg></div>`,
    nextArrow: `<div class="arrow-slider-next"><svg width="35" height="57" viewBox="0 0 35 57" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0 5.55919L5.5593 0L34.0844 28.4999L5.5593 56.9999L0 51.4407L22.9415 28.4999L0 5.55919Z" fill="#BE1521"/>
					</svg></div>`,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 1,
          variableWidth: true,
        },
      },
    ],
  });
  $(".slider-nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    centerMode: true,
    variableWidth: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 345,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 4,
        },
      },
    ],
  });

  $(".slider-for-avance").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: ".slider-nav-avance",
    responsive: [
      {
        breakpoint: 345,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  $(".slider-nav-avance").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for-avance",
    dots: false,
    infinite: true,
    centerMode: true,
    vertical: true,
    arrows: true,
    focusOnSelect: true,
    prevArrow: `<div class="" role="button" aria-label="Previous">
        <svg width="49" height="30" viewBox="0 0 49 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.77896 30L-2.13885e-07 25.1069L24.5 2.74377e-06L49 25.1069L44.221 30L24.5 9.80764L4.77896 30Z" fill="#BE1521"/>
</svg>

        </div>`,
    nextArrow: `<div class="" role="button" aria-label="Next">
		<svg width="49" height="30" viewBox="0 0 49 30" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M44.221 -2.08895e-07L49 4.89312L24.5 30L-2.13885e-07 4.89312L4.77896 -1.93296e-06L24.5 20.1924L44.221 -2.08895e-07Z" fill="#BE1521"/>
		</svg>
		
        </div>`,
  });

  $("#testimonios-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    appendDots: $("#testimonios-dots"),
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 2500,
    infinite: true,
    fade: false,
    prevArrow: `<div data-aos="fade-zoom-in" data-aos-duration="2000" class="" role="button" aria-label="Previous">
        <svg width="35" height="58" viewBox="0 0 35 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.0602 51.7565L28.5008 57.3157L0 28.8157L28.5008 0.291504L34.0602 5.8507L11.1187 28.8157L34.0602 51.7565Z" fill="#BE1521"/>
        </svg>
        </div>`,
    nextArrow: `<div data-aos="fade-zoom-in" data-aos-duration="2000" class="" role="button" aria-label="Next">
        <svg width="35" height="58" viewBox="0 0 35 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 6.01403L5.5593 0.454834L34.0844 28.9548L5.5593 57.4547L0 51.8955L22.9415 28.9548L0 6.01403Z" fill="#BE1521"/>
        </svg>
        </div>`,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: true,
          dots: false,
        },
      },
    ],
  });
  $("#slider-home-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 2500,
    infinite: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });
  // On edge hit
$('#slider-home-slider').on('beforeChange', function(event, slick, direction,currentSlide,nextSlide){
  console.log('before Change');
  var AosInits = $(slick.$slides[currentSlide]).find('.aos-init');
  console.log(currentSlide+1);
  console.log(slick.$slides[currentSlide+1]);
  $.map(AosInits, function (elementOrValue, indexOrKey) {
    console.log(elementOrValue);
    elementOrValue.classList.remove('aos-init','aos-animate');
  });
  console.log($(slick.$slides[currentSlide]).find('.aos-init'));
});
$('#slider-home-slider').on('afterChange', function(event, slick, direction, nextSlide){
  console.log('after Change');
  AOS.init({
    });
});
  $("#slider-archive-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 2500,
    infinite: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          dots: false,
        },
      },
    ],
  });
  $("#slider-tu-futuro").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 5000,
    infinite: true,
    variableWidth: true,
    prevArrow: `<div class="prev" role="button" aria-label="Previous">
        <svg width="35" height="58" viewBox="0 0 35 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.0602 51.7565L28.5008 57.3157L0 28.8157L28.5008 0.291504L34.0602 5.8507L11.1187 28.8157L34.0602 51.7565Z" fill="#BE1521"/>
        </svg>
        </div>`,
    nextArrow: `<div class="next" role="button" aria-label="Next">
        <svg width="35" height="58" viewBox="0 0 35 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 6.01403L5.5593 0.454834L34.0844 28.9548L5.5593 57.4547L0 51.8955L22.9415 28.9548L0 6.01403Z" fill="#BE1521"/>
        </svg>
        </div>`,
    responsive: [
      {
        breakpoint: 767,
        settings: "unslick",
      },
    ],
  });
  $("#slider-archive-single-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    appendDots: $("#slider-archive-single-dots"),
    autoplay: false,
    autoplaySpeed: 150,
    speed: 1250,
    infinite: true,
    variableWidth: true,
    prevArrow: `<div class="prev" role="button" aria-label="Previous">
        <svg width="35" height="58" viewBox="0 0 35 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.0602 51.7565L28.5008 57.3157L0 28.8157L28.5008 0.291504L34.0602 5.8507L11.1187 28.8157L34.0602 51.7565Z" fill="#BE1521"/>
        </svg>
        </div>`,
    nextArrow: `<div class="next" role="button" aria-label="Next">
        <svg width="35" height="58" viewBox="0 0 35 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 6.01403L5.5593 0.454834L34.0844 28.9548L5.5593 57.4547L0 51.8955L22.9415 28.9548L0 6.01403Z" fill="#BE1521"/>
        </svg>
        </div>`,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: true,
          dots: false,
          prevArrow: `<div class="prev" role="button" aria-label="Previous">
          <svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 20.7568L11.7165 23L1.00536e-06 11.5L11.7165 -1.99626e-07L14 2.24319L4.5769 11.5L14 20.7568Z" fill="white"/>
          </svg>          
        </div>`,
    nextArrow: `<div class="next" role="button" aria-label="Next">
    <svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 2.24319L2.28346 0L14 11.5L2.28346 23L0 20.7568L9.4231 11.5L0 2.24319Z" fill="white"/>
    </svg>    
        </div>`,
        },
      },
    ],
  });

  let numero= jQuery('.slick-vertical .slick-slide').not('.slick-cloned').children().length;
	jQuery('.indice-'+numero).click();
	
    AOS.init({
      once: true,
      });

	jQuery('.openForm').click(function() {
		$('#accordionInfo .btn-link').click();
		$('html, body').animate({
			scrollTop: $("#accordionInfo").offset().top
		}, 500);
	});
})( jQuery );
