
class snakeFood
	{
		var UID = generateUID();
		var position = generatePosition(snake);		
		var bonusFactor = bonusFactor();


		bonus()
		{
			var bonusFactor = 1;
			int rand = Math.getRandomInt(0,10)
			if(rand > 9){bonusFactor = 4}
				else if (rand > 7) {bonusFactor = 2}
		}

		generatePosition(snake)
		{
			while(isInsnake)
			var pos = 
		[
			{
				x : Math.getRandomInt(0, engine.xSize),
				y : Math.getRandomInt(0, engine.ySize)
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

		this.position = pos;
		}
		generateNew(snake)
		{
			


		}

	


	}

