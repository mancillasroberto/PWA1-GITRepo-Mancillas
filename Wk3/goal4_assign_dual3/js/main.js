/*
	Name: Roberto Mancillas
	Date: 10/31/2015
	Assignment: Goal 1: Assignment: Dual 1
*/

//self-executing function
(function(){
	
	var round = 0;
	var roundNum = document.forms[0];
	var fightBtn = document.querySelector("#fight_btn a");
	var kabal = document.getElementById("kabal");
	var kratos = document.getElementById("kratos");
	var fighter = [
		player1 = {
			name:"Kabal",
			damage:20,
			health:100
		},
		player2 = {
			name:"Kratos",
			damage:20,
			health:100
		}
	];
	
	
	kabal.innerHTML = fighter[0].name + ":" + fighter[0].health;
	kratos.innerHTML = fighter[1].name +":"+ fighter[1].health;
	
	function fightFN(){
			
			var minDamage1 = fighter[0].damage * .5;
			var minDamage2 = fighter[1].damage * .5;
			var f1 = Math.floor(Math.random()*(fighter[0].damage-minDamage1)+minDamage1);
			var f2 = Math.floor(Math.random()*(fighter[1].damage-minDamage2)+minDamage2);
			
			//console.log(f1);
			//console.log(f2);
			
			//damage
			fighter[0].health-=f1;
			fighter[1].health-=f2;
			
			//console.log(playerOneHealth);
			//console.log(playerTwoHealth);
			
			console.log(fighter[0].name+":"+fighter[0].health+" *START* "+fighter[1].name+":"+fighter[1].health);
			
			var results = winnerCheck();
			console.log(results);
			
			if(results === "no winner"){
				round++;
				kabal.innerHTML = fighter[0].name + ":" + fighter[0].health;
				kratos.innerHTML = fighter[1].name +":"+ fighter[1].health;
				roundNum.innerHTML = " *Round " + round + " over* ";
				
			}else{
				kabal.innerHTML = "";
				kratos.innerHTML = "";
				roundNum.innerHTML = results;
				fightBtn.setAttribute("onclick", null);
			};
	};
	
	function winnerCheck(){
		console.log("inside winnerCheck FN");
	
		var result = "no winner";
		
		if(fighter[0].health < 1 && fighter[1].health < 1){
			result = "You Both Die";
		}else if(fighter[0].health < 1){
			result = fighter[1].name + " Wins!";
		}else if(fighter[1].health < 1){
			result = fighter[0].name + " Wins!"
		};
		return result;
	};
	
	fightBtn.addEventListener("click", fightFN, false);

})();

