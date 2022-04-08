module.exports = function($scope, $http, $rootScope,$location ){
  var bookingShow=function(){
  var data=$rootScope.Moviename;
  $http.get('/mt_map/selmoviename/'+data).success(function(response){
    $scope.booking=response;
// $rootScope.allData=$scope.booking;
// console.log($rootScope.allData);

  });
  $http.get('/theater/showtheater').success(function (response) {
    $scope.theaterShow=response;
    console.log($scope.theaterShow);
  });

  $http.get('/mt_map/getMappingData').success(function (response) {
    $scope.mappingData=response;
  });



};
bookingShow();

$scope.showTimings=function (a,x) {
  $rootScope.showTime=a;
  $rootScope.CinemaName=x.Cinema;
  $rootScope.city=x.City;
  $rootScope.rootDate=x.ShowDate;
  console.log($rootScope.city);
  $location.path('/seatSelect');
};

 // $scope.myDateFilter=function(colm){
 //  var d = new Date();
 //  var curr_date = d.getDate();
 //  var curr_month = d.getMonth()+1;
 //  var curr_year = d.getFullYear();
 //
 //  $scope.dateToday = Date.parse(curr_month + '/' + curr_date + '/' + curr_year);
 //  $scope.dateRange = "";
 //
 //  if(colm === 'today') {
 //      $scope.dateRange = $scope.dateToday;
 //      // console.log($scope.dateToday);
 //    }
 // };
$scope.movDates=[];
var showDates=function() {
for(i=0;i<6;i++)
{
  var date=new Date();
  date.setDate(date.getDate()+i);
  $scope.movDates[i]=date;
  // $scope.movDates[i].toString();
}
};
showDates();

//
// $scope.search=function(item){
// if(item.)
//
// };

};
