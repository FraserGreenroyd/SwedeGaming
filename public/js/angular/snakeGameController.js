app.controller('snakeGameController', ['$scope', 'notificationFactory', '$timeout', function($scope, notificationFactory, $timeout, $window, $http, $filter) {
    $scope.isLoading = true;

    $scope.canvas = null;//document.getElementById('canvas');
    $scope.context = null;

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
        console.log($scope.snake);

        draw($scope.snake.path);

        $scope.isLoading = false;
    };

    $scope.init();    
    
    function draw(data) {
        console.log(data);
        if(data == undefined) return;
        for(var i=0; i<data.length; i++) {
            if(i > 0) {
                drawLine(data[i], data[i-1]);               
            }
        }
    };

    function drawLine(data1, data2) {
        $scope.context.beginPath();
        $scope.context.moveTo(data1.x, data1.y);
        $scope.context.lineTo(data2.x, data2.y);
        //$scope.context.strokeStyle = "#00000";
        $scope.context.lineWidth=10;
        $scope.context.stroke();
    };

    //$scope.context.beginPath();
    //draw($scope.data);    
}]);