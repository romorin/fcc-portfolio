var navPosition;
var jHeader;

function projectHoverIn(event) {
	addProjectFocus(jQuery(event.currentTarget));
}

function projectHoverOut(event) {
	removeProjectFocus(jQuery(event.currentTarget));
}

function removeProjectFocus(nodes) {
	nodes.find(".blurry").addClass('is-hidden');
	nodes.find("figcaption").addClass('is-hidden');
	nodes.removeClass('hover');
}

function addProjectFocus(nodes) {
	nodes.find(".blurry").removeClass('is-hidden');
	nodes.find("figcaption").removeClass('is-hidden');
	nodes.addClass('hover');

	// there can only be one*
	removeProjectFocus(jQuery('.project').not(nodes));
}

function onScroll() {
	var scrollTop = jQuery(this).scrollTop();

	if (scrollTop > navPosition) {
		jHeader.addClass('navbar-fixed-top');
	} else {
		jHeader.removeClass('navbar-fixed-top');
	}
}

// http://knackforge.com/blog/karalmax/how-deal-hover-touch-screen-devices
function onTouchStart(event) {
	'use strict';

	var link = jQuery(event.currentTarget); //preselect the link
	if (link.hasClass('hover')) {
		return true;
	}
	else {
		addProjectFocus(link);
		event.preventDefault();
		return false; //extra, and to make sure the function has consistent return points
	}
}

// to be done when the page is ready
jQuery(document).ready(function() {
	var projects = jQuery(".project");
	projects.hover(projectHoverIn, projectHoverOut);

	projects.on("touchstart", onTouchStart);

	jHeader = jQuery("#header");
	navPosition = jHeader.offset().top;
	jQuery(window).scroll(onScroll);
});
