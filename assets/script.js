var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));


let saveButton = $(".saveBtn");



var currentHour = moment().format("h");

$('.hour')
  .each(function(){
    var val = parseInt($(this).prop('id'));
    if(val > currentHour){
      $(this).css('background-color','lightblue');
    }else if(val < currentHour){
      $(this).css('background-color','rgb(229, 112, 112)');
    }else if(val === currentHour){
      $(this).css('background-color','lightgreen');
    }
  });


