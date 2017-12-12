// JavaScript Document

var scrollCounter = 0;

$(document).ready(function () {
	
	"use strict";
	
	$("[data-toggle=popover]").popover();

	$('#collapseOne .list-group .list-group-item').hover(function() {
		$(this).css('background-color', 'lightgray');
	}, function(){
		$(this).css('background-color', 'white');
	});
	
	$('.panel-heading').hover(function() {
		$(this).css('background-color', 'lightgray');
	}, function(){
		$(this).css('background-color', 'white');
	});
	
});

$(window).scroll(function(){
	"use strict";
	var skillOffTop = $("#skill-section").offset().top;
	var skillOuterHeight = $("#skill-section").outerHeight();
	var wH = $(window).height();
	var wS = $(this).scrollTop();
	if ((wS > (skillOffTop + skillOuterHeight - wH)/2) && scrollCounter == 0){
		$("#html .progress .progress-bar").animate({width: "80%"}, 2000);
		$("#office .progress .progress-bar").animate({width: "75%"}, 2000);
		$("#cplus .progress .progress-bar").animate({width: "73%"}, 2000);
		$("#git .progress .progress-bar").animate({width: "70%"}, 2000);
		$("#javascript .progress .progress-bar").animate({width: "66%"}, 2000);
		$("#jquery .progress .progress-bar").animate({width: "63%"}, 2000);
		$("#python .progress .progress-bar").animate({width: "63%"}, 2000);
		$("#sql .progress .progress-bar").animate({width: "55%"}, 2000);
		
		scrollCounter = 1;
	}
		
});