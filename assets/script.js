
// Header Date
$("#currentDay").text(moment().format("dddd, MMM Do"));

// current time 
const currentHour = moment().hour();
let textContent = $(".row textarea");

// past, present, future function
$(textContent).each(function() {

    let time = $(this).data("hour");

    if(time < currentHour){
        $(this).addClass("past")
    } 

    else if (time == currentHour){
        $(this).addClass("present")
    }

    else if (time > currentHour){
        $(this).addClass("future")
    }
})

// Save user input to local storage
$(".saveBtn").on("click", function (){

    var eventTime = $(this).data("hour");
    var eventInput = $(this).siblings("textarea").val();

    console.log(eventTime);
    localStorage.setItem(eventTime, eventInput);

});

// display event after refresh on page 
$(textContent).each(function(){
    var hour = $(this).data("hour");
    
    var description = localStorage.getItem(hour);
    $(this).val(description);

})