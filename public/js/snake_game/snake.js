function snake()
{
	//snake properties
	var dirrEnum = {up:1, down:2, left:3, right:4}
	/*var path2 = 
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
		]*/
	var path = 
		[
		{
			//x : Math.floor(engine.xSize/2),
			//y : Math.floor(engine.ySize/2)
			x : Math.floor(30/2),
			y : Math.floor(20/2)
		},		
		{
			//x : Math.floor(engine.xSize/2)+3,
			//y : Math.floor(engine.ySize/2)
			x : Math.floor(40/2),
			y : Math.floor(30/2)
		}

	]; //all coordinates occupied by the snake
	var speed = 15; //int snek sped
	var direction = dirrEnum.up; //current snake direction
	var fuck = new UID();
	var snake_id = fuck.generateUID(); 
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
		var pathLength = path.length;

		switch(currDir)
		{
		case dirrEnum.up:
		newMouthPos = {x: mouthPosition[0], y: mouthPosition[1]-1};
		break;
		case dirrEnum.down:
		newMouthPos = {x: mouthPosition[0], y: mouthPosition[1]+1};
		break;
		case dirrEnum.right:
		newMouthPos = {x: mouthPosition[0]+1, y: mouthPosition[1]};
		break;
		case dirrEnum.left:
		newMouthPos = {x: mouthPosition[0]-1, y: mouthPosition[1]};
		break;
		}

		var newpath2 = [newMouthPos];
		if (this.direction != currDir) newpath2.Push(path[pathLength-2]);
		else newpath2.push(path.slice(1, pathLength-2));		
		
		if (foodPos == mouthPosition) 
			{
			newpath2.Push(path2[path2.length-1])
			this.eating = true;
		    }

		else if ((path[pathLength-1].x == path[pathLength-2].x) || (path[pathLength-1].y == path[pathLength-2].y))
		  	{
		  		var currY = 0;
		  		if (path[pathLength-1] > path[pathLength-2]) currY = path[pathLength-1].y+1;
		  		else currY = path[pathLength-1].y-1;

		  		var lastPos = 
		  		[{
					x : path[pathLength-1].x,
					y : currY
				}];
				newpath2.push(lastPos);
		  	}
		 else
		 {
				var currX = 0;
		  		if (path[pathLength-1] > path[pathLength-2]) currX = path[pathLength-1].x+1;
		  		else currX = path[pathLength-1].x-1;
		  		newpath2.push(lastPos);

		 }
		this.path = newpath2;
		hasCrashed(GameEngine);
		direction = currDir;
		}

		function hasCrashed(GameEngine)
		{
			var head = path2[0];
			if (head[0]< 0 || head[0]>GameEngine.xSize || head[1]< 0 || head[1]>GameEngine.ySize) {engine.gameOver = true;}
			var headX = head.x;
			var headY = head.y;
			for (var i = 0; i < this.path.length; i++) {
				Things[i]
			}

		}



	}