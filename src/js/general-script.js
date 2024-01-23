document.addEventListener("DOMContentLoaded", function() {
    var popup_post = document.getElementById("popup_post");
    var closeButton = document.getElementById("close_post");

    // Mostrar el popup al cargar la página
    popup_post.style.display = "block";

    // Cerrar el popup al hacer clic en el botón de cierre
    closeButton.addEventListener("click", function() {
        popup_post.style.display = "none";
    });

    // Cerrar el popup al hacer clic fuera de él
    window.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup_post.style.display = "none";
        }
    });
});
function eliminarCookies() {
	document.cookie.split(";").forEach(function(c) {
	  document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
	});
  }

$(document).ready(function () {
	eliminarCookies();
	$('.form-popup').click(function (event) {
		event.preventDefault();
		$('#popup-form').toggleClass('active');
	});
	$('.fa-close').click(function (event) {
		event.preventDefault();
		$('#popup-form').toggleClass('active');
	});
	var carousel_banner = $('#carousel-banner');
	var carousel_desc = $('#carousel-cards');
	var carousel_pregrado = $('#carousel-pregrado');
	var carousel_admision = $('#carousel-admision');
	var carousel_alianzas = $('#acreditaciones-c');

	$("a").click(function (event) {
		if ($(this).attr('href', $(this).attr('href'))) {
			
		} else {
			event.preventDefault();
			// event.preventDefault();
		}

		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top - 100
		}, 500);
	});

	carousel_alianzas.owlCarousel({
		loop: false,
		margin: 20,
		dots: false,
		autoplay: true,
		autoplayTimeout: 7000,
		smartSpeed: 6000,
		responsive: {
			0: {
				items: 2
			},
			768: {
				items: 5,
			}
		}
	});


	carousel_banner.owlCarousel({
		loop: false,
		margin: 10,
		dots: false,
		autoplay: true,
		autoplayTimeout: 7000,
		smartSpeed: 6000,
		responsive: {
			0: {
				items: 1
			}
		}
	});

	carousel_desc.owlCarousel({
		loop: false,
		dots: true,
		mouseDrag: false,
		smartSpeed: 6000,
		responsive: {
			0: {
				items: 1,
				mouseDrag: true
			},
			768: {
				items: 2,
				autoplay: false,
				mouseDrag: true
			},
			1200: {
				items: 3,
				autoplay: false
			}
		}
	});

	carousel_pregrado.owlCarousel({
		loop: false,
		margin: 10,
		dots: true,
		autoplay: true,
		autoplayTimeout: 7000,
		smartSpeed: 6000,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2,
				autoplay: true,
				mouseDrag: true
			},
			992: {
				items: 3
			}
		}
	});

	carousel_admision.owlCarousel({
		loop: false,
		dots: true,
		autoplay: true,
		autoplayTimeout: 3000,
		smartSpeed: 6000,
		margin: 2,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
				margin: 10
			},
			992: {
				items: 3,
				margin: 60
			}
		}
	});

});
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
});