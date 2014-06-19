// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require jquery.lettering
//= require jquery.textillate
(function($) {
	$(document).ready(function () {
		
	})
})(jQuery);

function makePara() {
	var p1 = $("<p>");
	p1.text("Are you new to running?");
	p1.css("color", "white");
	$("#text").append(p1);
}

function startTextillate() {
	$("#new").textillate({
		initialDelay: 500,
		in: {
			effect: "fadeIn",
			delayScale: 3,
			delay:25,
			sync: false,
			sequence: true
		}
	})
	
	$("#nextLevel").textillate({
		initialDelay: 1500,
		in: {
			effect: "fadeIn",
			delayScale: 3,
			delay:25,
			sync: false,
			sequence: true
		}
	})
	
	$("#challenge").textillate({
		initialDelay: 3000,
		in: {
			effect: "fadeIn",
			delayScale: 3,
			delay:25,
			sync: false,
			sequence: true
		}
	})
	
	$("#performance").textillate({
		initialDelay: 4500,
		in: {
			effect: "fadeIn",
			delayScale: 3,
			delay:25,
			sync: false,
			sequence: true
		}
	})
	
	$("#distance").textillate({
		initialDelay: 6000,
		in: {
			effect: "fadeIn",
			delayScale: 3,
			delay:25,
			sync: false,
			sequence: true
		}
	})
}