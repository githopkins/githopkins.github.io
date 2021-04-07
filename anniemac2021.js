$(function() {
	$("#full-transformation-gallery").addClass("hide");
	$("#consultant-filter").click(function(){
	  $("#consultant-filter").toggleClass("filtered-inactive");
	  $(".consultant-type-consultant").fadeToggle( "slow", "linear" );
	  $(".consultant-type-consultant").toggleClass("hide");
	});
	$("#contractor-filter").click(function(){
	  $("#contractor-filter").toggleClass("filtered-inactive");
	  $(".consultant-type-contractor").fadeToggle( "slow", "linear" );
	  $(".consultant-type-contractor").toggleClass("hide");
	});
	$("#builder-filter").click(function(){
	  $("#builder-filter").toggleClass("filtered-inactive");
	  $(".consultant-type-builder").fadeToggle( "slow", "linear" );
	  $(".consultant-type-builder").toggleClass("hide");
	});
	$("#transformation-grid > button").click(function(){
	  $("#transformation-grid > button").toggleClass("toggled-viewing");
	  $("#full-transformation-gallery").fadeToggle( "slow", "linear" );
	  $("#full-transformation-gallery").toggleClass("hide");
	});	
})