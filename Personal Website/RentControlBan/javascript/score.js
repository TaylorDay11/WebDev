var questions;
var correct;
var loop=0;

console.log(localStorage.score);

$("#start").click(function(){
	score=0;
	if (localStorage.score) {
            localStorage.score = 0;
        } else {
            localStorage.score = 0;
        }
});


$(".a1").click(function(){
	correct=0;
});

$(".a2").click(function(){
	correct=1;
});

$(".a3").click(function(){
	correct=0;
});

$(".next").click(function(){
	if (correct == 1){
		localStorage.score=Number(localStorage.score)+1;
	}
	else if (correct ==0){
		localStorage.score=Number(localStorage.score);
	}
});

if ($('#finalscore').length > 0){
	document.getElementById("finalscore").innerHTML= localStorage.score + "/8";

	    // Get a reference to the database service
	var database = firebase.database();

	//Create a storage reference form from our storgae service
	var storageRef = database.ref();

	var name;

	var x=false;

	$(".enter").click(function(){
		x = true;
		name = document.getElementById("name").value;
		var score=localStorage.score;
		
		console.log("name");
		console.log(name);

		console.log("score");
		console.log(score);

		storageRef.push({
			name: name, 
			score: score
		});

		var score_list = document.getElementById("scores");

		if(x==true){
			$(".score_heading").css('color','black');
			$(".name_heading").css('color','black');
			$(".scoreboard").css('border','black 3px double');

			storageRef.orderByChild("score").limitToLast(9).on("child_added",function(snapshot){
				console.log(snapshot.val());
				var nameboard = snapshot.val().name;
				var scoreboard = snapshot.val().score;
				score_list.innerHTML += "<br><span class='nameboard'>" + nameboard + "</span><span class='scoreboard1'>" + scoreboard + "</span>";
				x=false;
			});
		};

	});
}

