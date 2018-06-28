$(document).ready(function(){


	$("a1").css('border','1px solid white');
	$("a2").css('border','1px solid white');
	$("a3").css('border','1px solid white');

	$(".a1").mouseenter(function(){
		$(this).css('border','1px solid black');
	});
	$(".a1").mouseout(function(){
		$(this).css('border','1px solid white');
	});
	$(".a2").mouseenter(function(){
		$(this).css('border','1px solid black');
	});
	$(".a2").mouseout(function(){
		$(this).css('border','1px solid white');
	});
	$(".a3").mouseenter(function(){
		$(this).css('border','1px solid black');
	});
	$(".a3").mouseout(function(){
		$(this).css('border','1px solid white');
	});

	$(".a1").click(function(){
		$(".a1").css('background-color','#ffff99');
		$(".a2").css('background','none');
		$(".a3").css('background','none');
	});

	$(".a2").click(function(){
		$(".a2").css('background-color','#ffff99');
		$(".a1").css('background','none');
		$(".a3").css('background','none');
	});

	$(".a3").click(function(){
		$(".a3").css('background-color','#ffff99');
		$(".a2").css('background','none');
		$(".a1").css('background','none');
	});

	var answer;

	$(".a1").click(function(){
		var answer=0;
		$(".submitbutton").click(function(){
			$(".a1").css("background-color",'#ff6666');
			$(".a2").css("background-color","#bbff99");
			$(".a3").css("background",'none');
			$(".next").html("&#8594;");
		});
	});

	$(".a2").click(function(){
		var answer=1;
		$(".submitbutton").click(function(){
			$(".a1").css("background",'none');
			$(".a2").css("background-color","#bbff99");
			$(".a3").css("background",'none');
			$(".next").html("&#8594;");
		});
	});

	$(".a3").click(function(){

		$(".submitbutton").click(function(){
		console.log(answer);
			$(".a1").css("background",'none');
			$(".a2").css("background-color","#bbff99");
			$(".a3").css("background-color",'#ff6666');
			$(".next").html("&#8594;");
		});
	});

});
