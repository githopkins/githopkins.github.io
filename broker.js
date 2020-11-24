$(document).ready(function() {
	$('#continue').click(function() {
		$('#contact-information').hide();
		$('#broker-information').show();
	});
	$('#prev').click(function() {
		$('#contact-information').show();
		$('#broker-information').hide();
	});
	$('#role-selection').on('change',function(){
		$('#disable-role').prop('disabled',true);
	});
	$('#state-selection').on('change',function(){
		$('#disable-state').prop('disabled',true);
	});
	$("input[type='tel']").each(function() {
		$(this).on("change keyup paste", function(e) {
			var output,
				$this = $(this),
				input = $this.val();

			if (e.keyCode != 8) {
				input = input.replace(/[^0-9]/g, '');
				var area = input.substr(0, 3);
				var pre = input.substr(3, 3);
				var tel = input.substr(6, 4);
				if (area.length < 3) {
					output = "(" + area;
				} else if (area.length == 3 && pre.length < 3) {
					output = "(" + area + ")" + " " + pre;
				} else if (area.length == 3 && pre.length == 3) {
					output = "(" + area + ")" + " " + pre + "-" + tel;
				}
				$this.val(output);
			}
		});
	});
	$('#zip-code').keyup(function () { 
		this.value = this.value.replace(/[^0-9\.]/g,'');
	});
});