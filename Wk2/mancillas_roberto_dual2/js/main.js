/*
	Name: Roberto Mancillas
	Date: 10/31/2015
	Assignment: Goal 1: Assignment: Dual 1
*/

//self-executing function
(function(){
	
	// Players
	var player1 = ["Spiderman", 20, 100];
	var player2 = ["Batman", 20, 100];
	var round = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	
	function fight(){
	
		alert(player1[0] + ":" + player1[2] +" *START* "+ player2[0] +":"+ player2[2]);
		
		for(var i=0, j=round.length; i<j; i++){
			
			
			var minDamage1 = player1[1] * .5;
			var minDamage2 = player2[1] * .5;
			var f1 = Math.floor(Math.random()*(player1[1]-minDamage1)+minDamage1);
			var f2 = Math.floor(Math.random()*(player2[1]-minDamage2)+minDamage2);
			
			//console.log(f1);
			//console.log(f2);
			
			//damage
			player1[2]-=f1;
			player2[2]-=f2;
			
			//console.log(playerOneHealth);
			//console.log(playerTwoHealth);
			
			console.log(player1[0]+":"+player1[2]+" *START* "+player2[0]+":"+player2[2]);
			
			var results = winnerCheck();
			console.log(results);
			
			if(results === "no winner"){
				alert(player1[0]+":"+player1[2]+" *Round "+round[i]+" over* " +player2[0]+":"+player2[2]);
			}else{
				alert(results);
				break;
			};
		};
	};
	
	function winnerCheck(){
		console.log("inside winnerCheck FN");
	
		var result = "no winner";
		
		if(player1[2] < 1 && player2[2] < 1){
			result = "You Both Die";
		}else if(player1[2] < 1){
			result = player2[0] + "Wins!";
		}else if(player2[2] < 1){
			result = player1[0] + "Wins!"
		};
		return result;
	};
	
	fight();

})();

