function snakeFood()
{
	var UID = null;
	var position = null;
	var bonusFactor = null;
	var defaultValue = null;
	var value = null;
	var engine = null;

	this.construct = function(engine)
	{
		this.engine = engine;
		this.position = {
			x : Math.floor(this.engine.xSize/2+10),
			y : Math.floor(this.engine.ySize/2-30)
		};
		this.bonusFactor = this.calcBonusFactor();	
		this.defaultValue = 1;
		this.value = bonusFactor*defaultValue;
	}
	


	this.calcBonusFactor =function()
	{

		var bonusFactor = 1;
		var rand = Math.random(0,10);
		if(rand > 9) {bonusFactor = 4}
			else if (rand > 7) {bonusFactor = 2}
	}

	this.update = function(snake)
	{
		this.engine = new GameEngine();
	    this.engine.construct();
		this.x = math.getRandomInt(0,this.engine.xSize);
		this.y = math.getRandomInt(0,this.engine.xSize);


	}

}