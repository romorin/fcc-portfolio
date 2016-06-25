var navPosition;
var jHeader;

function projectHoverIn(event) {
	jQuery(jQuery(event.currentTarget).find(".blurry")).removeClass('is-hidden');
	jQuery(jQuery(event.currentTarget).find("figcaption")).removeClass('is-hidden');
}

function projectHoverOut(event) {
	jQuery(jQuery(event.currentTarget).find(".blurry")).addClass('is-hidden');
	jQuery(jQuery(event.currentTarget).find("figcaption")).addClass('is-hidden');
}

function onScroll() {
	var scrollTop = jQuery(this).scrollTop();

	if (scrollTop > navPosition) {
		jHeader.addClass('navbar-fixed-top');
	} else {
		jHeader.removeClass('navbar-fixed-top');
	}
}

// to be done when the page is ready
jQuery(document).ready(function() {
	var projects = jQuery(".project");
	projects.hover(projectHoverIn, projectHoverOut);

	jHeader = jQuery("#header")
	navPosition = jHeader.offset().top;
	jQuery(window).scroll(onScroll);
});