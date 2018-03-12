function GameEngine()
{
	var xSize = null;
	var ySize = null;
	var frameFreq = null;// frame update time in milisec 
	var keyPressFreq = null;// key press update time in milisec 
	var updateRatio = null;
	var frameCounter = null;
	var keyBeenPressed = null;
	var score = null;
	var gameOver = null;
	
	this.construct = function()
	{
		this.xSize = 600;
		this.ySize = 400;
		this.frameFreq = 300; // frame update time in milisec 
		this.keyPressFreq = 30; // key press update time in milisec 
		this.updateRatio = this.frameFreq / this.keyPressFreq;
		this.frameCounter = 0;
		this.keyBeenPressed = false;
		this.score = 0;
		this.gameOver = false;	
	}
	

	



	function updateFrame(snake, snakeFood) {

		if (this.frameCounter == updateRatio) {
			frameCounter = 0;
			this.keyBeenPressed = false;

		}
			frameCounter += 1;
			if(!this.keyBeenPressed){keyListener(event, snake)}

			if(frameCounter == updateRatio-1)
			{
			snake.move(snakeFood)
				if (snake.eating) 
				{
				window.setInterval(snakeFood.generateNew(snake), this.updateFreq);
				if(this.gameOver){endGame()}
				this.score += snakeFood.value;
				snakeFood.generateNew(snake);

				}
			}
	}

		function keyListener(event, snake){  

		 /*updatedDir = snake.direction;  
   		 event = window.event; 
   		 var key = event.keyCode; 
   		 if(key==38 || key == 87) { updatedDir = snake.varEnum.1;}
   		 else if (key == 40 || key == 83) {updatedDir= snake.varEnum.2;}
   		 else if (key == 37 || key == 65) {updatedDir = snake.varEnum.left.3;}
   		 else if (key == 39 || key == 68) {updatedDir = snake.varEnum.right.4;}
   		 snake.direction = updatedDir;
   		 this.keyBeenPressed = true;  */  
 		 }

 	 function update(){
 	 	var intervalID = timeInterval(updateFrame(snake, snakeFood), this.keyPressFreq)

 		 }
 	 function endGame(){
 	 	clearInterval(intervalID);
 	 	finalScore = this.score;
 	 	document.write('Your final score is' + 'finalScore' + "points. Try again? Y/N")
 	 	var playagain = playAgainKeyListener(event);
 	 	if (playagain(event)){newgame(snake, snakeFood)}
 	 		else if (!playagain(event)){document.write("Thank you for playing you stupid fuck!1")}
 	 	}
 	 
 	 function playAgainKeyListener(event){

   		 event = window.event; 
   		 var key = event.keyCode; 
   		 if(key==89) { return true;}
   		 else if (key == 78) {return false;}
 	 }

}