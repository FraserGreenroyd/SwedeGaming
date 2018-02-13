

class snake
{

	var dirrEnum = {"up":1, "down":2, "left":3, "right":4};
	
	var path = [
		{
			x : 50,
			y : 50
		},
		{
			x : 51, 
			y : 50
		},
		{
			x : 52, 
			y : 50
		}

	]; //all coordinates occupied by the snake
	var speed = 15; //int snek sped
	var direction = dirrEnum.up; //current snake direction
	var instanceID = generateUID(); 
	var isAlive = true;
	var thickness = 1;



	function changeDir(){}

	function move(snakeFood)
	{

var foodPos = snakeFood.position;
var currDir = changeDir();
var mouthPosition = path[0];
var newMouthPos = [];

if (path == dirrEnum.up) {newMouthPos = {mouthPosition[0], mouthPosition[1]+1}}
	else if (path == dirrEnum.down){newMouthPos = {mouthPosition[0], mouthPosition[1]-1}}
		else if (path == dirrEnum.right){newMouthPos = {mouthPosition[0]+1, mouthPosition[1]}}
			else {newMouthPos = {mouthPosition[0]-1, mouthPosition[1]}}

var newPath = [newMouthPos];
newPath.Push(path[_.range(0, path.length-2)]);
if (foodPos == mouthPosition) {newPath.Push(path[path.length-1])}
snake.path = newPath;
	}
}

}
