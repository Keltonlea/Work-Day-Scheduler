var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));


var currentHour = (new Date()).getHours();
$('.colorcode')
  .each(function(){
    var val = parseInt($(this).prop('id'));
    if(val > currentHour && val < currentHour + 6){
      $(this).css('background-color','lightblue');
    }else if(val < currentHour && val > currentHour-6){
      $(this).css('background-color','rgb(229, 112, 112)');
    }else if(val === currentHour){
      $(this).css('background-color','lightgreen');
    }else{
      $(this).css('background-color','White');
    }
  });
