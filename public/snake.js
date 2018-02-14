class snake
{
	{}
	var dirrEnum = {"up":1, "down":2, "left":3, "right":4}
	var path = [
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

	]; //all coordinates occupied by the snake
	var speed = 15; //int snek sped
	var direction = dirrEnum.up; //current snake direction
	var UID = generateUID(); 
	var isAlive = true;
	var thickness = 1;
	var eating = false;



	
		function move(snakeFood)
		{
		this.eating = false;
		var foodPos = snakeFood.position;
		var currDir = changeDir();
		var mouthPosition = path[0];
		var newMouthPos = [];

		if (currDir == dirrEnum.up) {newMouthPos = {mouthPosition[0], mouthPosition[1]+1}}
			else if (currDir == dirrEnum.down){newMouthPos = {mouthPosition[0], mouthPosition[1]-1}}
			else if (currDir == dirrEnum.right){newMouthPos = {mouthPosition[0]+1, mouthPosition[1]}}
			else {newMouthPos = {mouthPosition[0]-1, mouthPosition[1]}}

		var newPath = [newMouthPos];
		newPath.Push(path[_.range(0, path.length-2)]);
		if (foodPos == mouthPosition) 
		{
			newPath.Push(path[path.length-1])
			this.eating = true;
		}
		this.path = newPath;
		hasCrashed(engine);
		}

		function hasCrashed(engine)
		{
			var head = path[0];
			if (head[0]< 0 || head[0]>engine.xSize || head[1]< 0 || head[1]>engine.ySize) {engine.gameOver = true;}

		}



	}
	}
	}

}
