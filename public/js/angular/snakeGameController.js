app.controller('snakeGameController', ['$scope', 'notificationFactory', '$timeout', '$interval', function($scope, notificationFactory, $timeout, $interval, $window, $http, $filter) {
    $scope.isLoading = true;

    $scope.canvas = null;//document.getElementById('canvas');
    $scope.context = null;
    $scope.snakeFood = null;

    $scope.snake = null;

    $scope.init = function()
    {
        $scope.canvas = document.getElementById('snake-canvas');
        $scope.canvas.width = 600;
        $scope.canvas.height = 400;
        $scope.context = $scope.canvas.getContext('2d');
        $scope.context.globalAlpha = 1.0;

        $scope.snake = new snake();
        $scope.snake.construct();
        $scope.snakeFood = new snakeFood();
        $scope.snakeFood.construct($scope.snake.engine);
        //console.log($scope.snake);

        draw($scope.snake.path);

        $scope.isLoading = false;

        $interval($scope.runSnake, 500);
    };

    $scope.runSnake = function()
    {
        if($scope.snakeFood.wasEaten)
            $scope.snakeFood.update();
        $scope.snake.move($scope.snakeFood);
        $scope.context.clearRect(0, 0, $scope.canvas.width, $scope.canvas.height);
        draw($scope.snake.path);
        draw($scope.snakeFood.position);
        //alert("Fuck you");
    };

    $scope.runSearchKeyPress = function($event)
    {
        if($event.keyCode == 119)
            $scope.snake.changeDirection($scope.snake.dirrEnum.up);
        else if ($event.keyCode == 100)
            $scope.snake.changeDirection($scope.snake.dirrEnum.right);
        else if ($event.keyCode == 115)
            $scope.snake.changeDirection($scope.snake.dirrEnum.down);
        else if ($event.keyCode == 97)
            $scope.snake.changeDirection($scope.snake.dirrEnum.left);

    };

    $scope.init();    
    
    function draw(data) {
        //console.log(data);
        if(data == undefined) return;
        if(data.length > 1)
        {
           for(var i=0; i<data.length; i++) {
                if(i > 0) {
                    drawLine(data[i], data[i-1]);               
                }
            } 
        }
        else
            drawSquare(data);
        
    };

    function drawLine(data1, data2) {
        
        $scope.context.beginPath();
        $scope.context.moveTo(data1.x, data1.y);
        $scope.context.lineTo(data2.x, data2.y);
        //$scope.context.strokeStyle = "#00000";
        $scope.context.lineWidth=5;
        $scope.context.stroke();
    };

    function drawSquare(data1)
    {
        $scope.context.rect(data1.x, data1.y, 5, 5);
        $scope.context.stroke();


    }
    //$scope.context.beginPath();
    //draw($scope.data);    
}]);