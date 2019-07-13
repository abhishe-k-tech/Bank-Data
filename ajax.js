$(document).ready(function(){
var table =  $('#myTable');
fetchData();
function fetchData() {
  
  $("#city").on("click", function (){
    table.empty();
    var $nr="";
  var city_name=$("#city").val();
 
  $.ajax({
    
    url: "https://vast-shore-74260.herokuapp.com/banks?city="+city_name,
    
    type:"GET",
    data:{
     
    },


    success : function(data) {
      //console.log(data);
     //alert(data.ifsc);

      if(data){


        var max_size=data.length;
 var sta = 0;
 var elements_per_page = 10;
 var limit = elements_per_page;
 goFun(sta,limit);
 function goFun(sta,limit) {
  for (var i =sta ; i < limit; i++) {
    
  $nr = $('<tr><td>' + data[i]['ifsc'] + '</td><td>' + data[i]['bank_id']  + '</td><td>' + data[i]['branch'] + '</td><td>' +  data[i]['address'] + '</td><td>' + data[i]['city'] + '</td><td>' + data[i]['district'] + '</td><td>' + data[i]['state'] + '</td><td>' + data[i]['bank_name'] + '</td></tr>');
    table.append($nr);

  }
  }
   $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
  $('#next-btn').click(function(){
      
  var next = limit;
  if(max_size>=next) {
  limit = limit+elements_per_page;
  table.empty();
  goFun(next,limit);
  }
  });
  $('#prev-btn').click(function(){

  var pre = limit-(2*elements_per_page);
  if(pre>=0) {
  limit = limit-elements_per_page;
  table.empty();
  goFun(pre,limit); 
  }
  });


  }
},
});
});
}
});
