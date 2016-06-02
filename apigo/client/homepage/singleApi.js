Template.homepage.onRendered(function() {
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		items:1,
    autoplay:true,
    autoplayTimeout: 2000
	})
});