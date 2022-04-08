module.exports = function($scope, $http,$rootScope, $location){

$scope.addMovie =function(){
//$rootScope.amount=$scope.data.seatAmt;
$location.path('/insertOMDB');
};

$scope.addTheater =function(){
//$rootScope.amount=$scope.data.seatAmt;
$location.path('/Theater');
};

$scope.mapThaterMovie =function(){
//$rootScope.amount=$scope.data.seatAmt;
$location.path('/MovieTheaterMap');
};
};
