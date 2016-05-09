$(document).ready(function () {
	$("#header").removeClass("default");
	$(window).scroll(function () {
		if ($(this).scrollTop() > 20) {
			$("#header").addClass("default").fadeIn("slow");
		} else {
			$("#header").removeClass("default").fadeIn("slow");
		};
	});

	$('a[href^="#"]').click(function(event){
		var id_clicked_element = $(this).attr('href');
		var destination = $(id_clicked_element).offset().top;
		$('html, body').animate({scrollTop: destination}, 1000);
		return false;
	});﻿

});