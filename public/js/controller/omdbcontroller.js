module.exports = function($scope, $http, $rootScope,$location){

  $scope.searchOMDB = function(){
    $http.get('http://www.omdbapi.com/?t='+$scope.M_Name+'&y='+$scope.M_Year+'&plot=short&r=json').success(function (response) {
      $scope.omdbData=response;
    });
  };

  $scope.insertOMDBMovie=function(){
    $http.post('/api/insertOMDBMovie',$scope.omdbData).success(function (response){
  });
displaymovies();
  };

// displaymovies();
  var displaymovies = function(){
  $http.get('/api/showmovies').success(function (response) {
    $scope.movieShow=response;
  });
  $scope.omdbData='';
};
displaymovies();

$scope.deletemovies = function(movieShow){
      var x=confirm("Are you sure you want to delete ?");
      if(x){
        $http.delete('/api/deletemovies/'+movieShow._id).success(function (response) {
      });
    }
displaymovies();
    };

// we are defining the $rootScope that's mean gloable variable in first line we
// have to add to more parameters
    $scope.timeTable=function(m,x){
    $rootScope.Moviename=m;
    $rootScope.MyPoster=x;
    $location.path('/bookingTimeTable');
    };



};
