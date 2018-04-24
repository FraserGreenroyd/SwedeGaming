function snake()
{
	var engine = null;
	var speed = null;
	var direction = null; //current snake direction
	var uidMaker = null;
	var snake_id = null;
	var isAlive = null;
	var thickness = null;
	var eating = null;
	var dirrEnum = null;
	var steplength = null;

//snake methods

	this.construct = function()
	{
		this.engine = new GameEngine();
		this.engine.construct();

		this.speed = 15; //int snek sped
		this.dirrEnum = {up:1, down:2, left:3, right:4}
		this.direction = this.dirrEnum.up; //current snake direction
		this.uidMaker = new UID();
		this.snake_id = this.uidMaker.generateUID(); 
		this.isAlive = true;
		this.thickness = 1;
		this.eating = false;
		this.steplength = 10;

		this.path = [
		{
			x : Math.floor(this.engine.xSize/2),
			y : Math.floor(this.engine.ySize/2)
		},		
		{
			x : Math.floor(this.engine.xSize/2)+this.speed,
			y : Math.floor(this.engine.ySize/2)
		}		
		];
	}
	var path = []; //all coordinates occupied by the snake
	
	this.move = function(snakeFood)
	{
		if(!this.isAlive) return;

		var lastPos = this.path[this.path.length - 1];	
		var newMouthPos ={};	

		switch(this.direction)
		{
			case  this.dirrEnum.up:
			newMouthPos = {x: lastPos.x, y: lastPos.y-this.steplength};
			break;
			case  this.dirrEnum.down:
			newMouthPos = {x: lastPos.x, y: lastPos.y+this.steplength};
			break;
			case  this.dirrEnum.right:
			newMouthPos = {x: lastPos.x+this.steplength, y: lastPos.y};
			break;
			case  this.dirrEnum.left:
			newMouthPos = {x: lastPos.x-this.steplength, y: lastPos.y};
			break;
		}

		//var newpath2 = [newMouthPos];
		//if (this.direction != currDir) newpath2.Push(path[pathLength-2]);
		//else newpath2.push(path.slice(1, pathLength-2));		

		
		this.path.push(newMouthPos);

		this.hasCrashed();
	    if(this.isInSnake(snakeFood, this.path[this.path.length - 1])) //Eating some food
	    	snakeFood.wasEaten = true;
	    else
	    	this.path.splice(0, 1);	//Not eating, don't grow - remove the tail
	}

	this.changeDirection = function(dir)
	{
		var valid = false;
		if(this.direction == this.dirrEnum.up || this.direction == this.dirrEnum.down)
		{
			if(dir != this.dirrEnum.up && dir != this.dirrEnum.down)
			{
				this.direction = dir;
				valid = true;
			}
		}
		else if(this.direction == this.dirrEnum.right || this.direction == this.dirrEnum.left)
		{
			if(dir != this.dirrEnum.right && dir != this.dirrEnum.left)
			{
				this.direction = dir;
				valid = true;
			}
		}

		if(valid)
			this.path.push(this.path[this.path.length - 1]);

		this.move();
	}

	this.hasCrashed = function()
	{
		var head = this.path[this.path.length -1];
		if (head.x < 0 || head.x > this.engine.xSize || head.y < 0 || head.y > this.engine.ySize)
		{
			this.isAlive = false;
			//alert("Game over mofo");
		}
	}

	this.isInSnake = function(snakeFood, snakePos)
	{
		if(snakeFood == undefined || snakeFood.position == undefined) return false;
		if(((snakePos.x >= (snakeFood.position.x-5)) && snakePos.x <= (snakeFood.position.x + 10)) && ((snakePos.y >= (snakeFood.position.y-5)) && (snakePos.y <= (snakeFood.position.y + 10))))
			return true;
		else return false;

	}

/*function move(snakeFood)
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
}*/





}