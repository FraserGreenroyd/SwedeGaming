
class snakeFood
	{
		{}
		var UID = generateUID();
		var position = [{
			x : Math.floor(this.engine.xSize/2+10),
			y : Math.floor(this.engine.ySize/2-30)
		}];
		var bonusFactor = bonusFactor();	
		var defaultValue = 1;
		var value = bonusFactor*defaultValue;


		function bonusFactor()
		{
			var bonusFactor = 1;
			var rand = Math.getRandomInt(0,10);
			if(rand > 9) {bonusFactor = 4};
				else if (rand > 7) {bonusFactor = 2};
		}

		function generateNew(snake)
		{
			while(isInsnake)
			{
				var pos = 
				[
				{
					x : Math.getRandomInt(0, GameEngine.xSize),
					y : Math.getRandomInt(0, GameEngine.ySize)
				}
				];
				for (var i = snake.length - 1; i >= 0; i--) 
				{
					var isInsnake = false;
					if(snakeFood == snake[i])
					{
						isInsnake = true; 
						break;
					}
				}
			}

		this.position = pos;
		this.bonusFactor = bonusFactor();
		
		}

	}

