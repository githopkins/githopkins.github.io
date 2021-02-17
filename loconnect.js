$(document).ready(function() {
	$(body).hide();
	console.log('this is working so far');
// 	$(window)
// 		.keydown(function(event) {
// 			if (event.keyCode == 13) {
// 				event.preventDefault();
// 				return false;
// 			}
// 		});
// 
// 	$("#start").click(function() {
// 			$(".about-connect").hide();
// 			$(".about-me").show();
// 		});
// 
// 	$('input')
// 		.on('blur keyup', function() {
// 			if ($("form")
// 				.valid()) {
// 				$('#next')
// 					.prop('disabled', false);
// 			} else {
// 				$('#next')
// 					.prop('disabled', 'disabled');
// 			}
// 		});
// 
// 	$("#next")
// 		.click(function() {
// 			$(".about-them")
// 				.show();
// 			$("#next")
// 				.hide();
// 		});
// 
// 	$("#referrer")
// 		.click(function() {
// 			$(".about-them-2")
// 				.show();
// 			$(".about-them, .about-me")
// 				.hide();
// 		});
// 
// 	$("#previous")
// 		.click(function() {
// 			$(".previous-employer")
// 				.toggle();
// 		});
// 	$("#referral")
// 		.click(function() {
// 			$(".about-referral")
// 				.toggle();
// 		});
// 
// 	$('form')
// 		.on('submit', function(event) {
// 			$(".about-me")
// 				.show();
// 		});
// 
// 	$("input[type='tel']")
// 		.each(function() {
// 			$(this)
// 				.on("change keyup paste", function(e) {
// 					var output,
// 						$this = $(this),
// 						input = $this.val();
// 
// 					if (e.keyCode != 8) {
// 						input = input.replace(/[^0-9]/g, '');
// 						var area = input.substr(0, 3);
// 						var pre = input.substr(3, 3);
// 						var tel = input.substr(6, 4);
// 						if (area.length < 3) {
// 							output = "(" + area;
// 						} else if (area.length == 3 && pre.length < 3) {
// 							output = "(" + area + ")" + " " + pre;
// 						} else if (area.length == 3 && pre.length == 3) {
// 							output = "(" + area + ")" + " " + pre + "-" + tel;
// 						}
// 						$this.val(output);
// 					}
// 				});
// 		});
});