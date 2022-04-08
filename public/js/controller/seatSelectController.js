module.exports = function($scope, $http, $rootScope,$location){
var s_seat,no_of_seat;
  var seatOnload = function(){
  $(document).ready(function(){
    $('#Seatclass').change(function(){
      var sel=$('#Seatclass').find(":selected").text();
      if(sel=="GOLD")
      {

      $('#silver tr>td>div').addClass('grey');
      $('#gold tr>td>div').removeClass('grey');

      }

      if(sel=="SILVER")
      {
        $('#gold tr>td>div').addClass('grey');
        $('#silver tr>td>div').removeClass('grey');
      }

    $('#noofseats').change(function(){
      var no = $('#noofseats').find(":selected").text();
      no_of_seat=document.getElementById("totalst").innerHTML= no;
      //alert(no);
      var countdiv=[];


    $('.floating-box').click(function(){

    if(!$(this).hasClass('grey')||$(this).hasClass('red'))
    {
  //alert($(this).hasClass('grey'));
      if(countdiv.length < no)
      {

        $(this).toggleClass("d1");
        var id=$(this).attr('id');
        var cn=$(this).hasClass('d1');

        if(cn)
            {

                countdiv.push(id);
                  $rootScope.TotalSeat=JSON.stringify(countdiv);
              s_seat= document.getElementById("st").innerHTML=countdiv;
              }

        else{
              var ind=countdiv.indexOf(id);
              countdiv.splice(ind,1);
              $rootScope.TotalSeat=JSON.stringify(countdiv);
            }
  if(sel== "SILVER")
  {
    document.getElementById("amt").innerHTML=countdiv.length*200;
  }
  else
  {
    document.getElementById("amt").innerHTML=countdiv.length*280;
  }

  }
  else {
          alert("Request you to  book only " + no +" seats");
    }
  }
  });


  });
  });

  });
};
seatOnload();





$scope.nextPage=function(){
$rootScope.Amount=document.getElementById("amt").innerHTML;
$rootScope.TotalSeat1= s_seat;
$rootScope.coutSeat=no_of_seat;
// $rootScope.seatType=
$location.path('/makePayment');
};


var init=function()
{
  var m=$rootScope.Moviename;
  var t=$rootScope.CinemaName;
  var s=$rootScope.showTime;
  var d=$rootScope.rootDate;

  $http.get('/pay/bookedseats/'+m+'/'+t+'/'+s).success(function (response) {
    for(i=0;i<response.length;i++)
    {
      for(j=0;j<response[i].SeatNo.length;j++)
      {
          $('#'+response[i].SeatNo[j]).addClass('red');
      }
    }
  });
};

init();

};
