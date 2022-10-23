$(document).ready(function(){
	$(".menu").on("click", function(){
		$(".sidebar").toggleClass("show")
    })
	$(".nav-list li a").on("click", function(){
		$(".sidebar").removeClass("show")
    })
	

    $("#switch").on("click", function(){
        $("body").toggleClass("dark-mode")
    })


    $('.Popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
	})
  
})