app.controller('indexController', ['$scope', 'notificationFactory', '$timeout', function($scope, notificationFactory, $timeout, $window, $http, $filter) {
    $scope.currentPage = 'frontend/views/home.html';
    $scope.isLoading = true;

    $scope.init = function()
    {
        $scope.isLoading = false;
    };

    $scope.init();    
    
    $scope.changePage = function(page)
    {
        $scope.isLoading = true;
        $scope.currentPage = page + '.html';
        $scope.isLoading = false;
    };
}]);