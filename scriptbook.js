// AnnieMac Script Document

// Variables to drop HTML:
var applicationDrop = '<header id="product-banner" class="flex column flex-end align-center"><h2>Mortgage Application</h2></header>';


$(document).ready(function() {

if (window.location.href.indexOf("loan/apply") != -1) {
$( applicationDrop ).insertBefore( $( ".main-content" ) );
}





});