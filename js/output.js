$(document).ready(function(){
	$("button").click(function(event){

		event.preventDefault();

		var answer = $("input.form-control").val();

		if (isNaN(answer)){			

			$("div.output").append("<div class='well'>" + output(answer) + "</div>");
			$("input.form-control").val("");
		    $("input.form-control").focus();	
		
		} else {

			alert("This is a number. Please enter a number");
			$("input.form-control").val("");
			$("input.form-control").focus();
		};

		$("div.output").find("div").click(function(){
		$(this).remove();
		$("input.form-control").focus();
	});	
	});
});