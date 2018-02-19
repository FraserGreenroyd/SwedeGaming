class snake
{
	{}

	//snake properties
	var dirrEnum = {up:1, down:2, left:3, right:4}
	var path2 = 
		[
		{
			x : Math.floor(engine.xSize/2),
			y : Math.floor(engine.ySize/2)
		},
		{
			x : Math.floor(engine.xSize/2)+1,
			y : Math.floor(engine.ySize/2)
		},
		{
			x : Math.floor(engine.xSize/2)+2,
			y : Math.floor(engine.ySize/2)
		}
		]
	var path = 
		[
		{
			x : Math.floor(engine.xSize/2),
			y : Math.floor(engine.ySize/2)
		},		
		{
			x : Math.floor(engine.xSize/2)+2,
			y : Math.floor(engine.ySize/2)
		}
		]

	]; //all coordinates occupied by the snake
	var speed = 15; //int snek sped
	var direction = dirrEnum.up; //current snake direction
	var UID = generateUID(); 
	var isAlive = true;
	var thickness = 1;
	var eating = false;

//snake methods

	
		function move(snakeFood)
		{
		this.eating = false; 
		var foodPos = snakeFood.position;
		var currDir = changeDir();
		var mouthPosition = path2[0];
		var newMouthPos = [];

		switch(currDir)
		{
		case dirrEnum.up:
		newMouthPos = {mouthPosition[0], mouthPosition[1]-1};
		break;
		case dirrEnum.down:
		newMouthPos = {mouthPosition[0], mouthPosition[1]+1};
		break;
		case dirrEnum.right:
		newMouthPos = {mouthPosition[0]+1, mouthPosition[1]};
		break;
		case: dirrEnum.left:
		newMouthPos = {mouthPosition[0]-1, mouthPosition[1]};
		break;
		}

		var newpath2 = [newMouthPos];
		newpath2.Push(path2[_.range(0, path2.length-2)]);
		if (foodPos == mouthPosition) 
		{
			newpath2.Push(path2[path2.length-1])
			this.eating = true;
		}
		this.path2 = newpath2;
		hasCrashed(GameEngine);
		}

		function hasCrashed(GameEngine)
		{
			var head = path2[0];
			if (head[0]< 0 || head[0]>GameEngine.xSize || head[1]< 0 || head[1]>GameEngine.ySize) {engine.gameOver = true;}

		}



	}
	}
	}

}
