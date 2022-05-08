
// moment.js for top of page
function init() {
$("#currentDay").text(moment().format("dddd, MMM Do"));
};

// current time 
const currentHour = moment().hour();
let textContent = $(".row textarea");

// past, present, future function
function colorCode() {
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
}



// Save user input to local storage
$(".saveBtn").on("click", function (event){

  
    let hourBlock = $(this).data("hour");
    let value = $(this).prev().children("textarea").val();
    
  
   

    console.log(hourBlock);
    console.log(value);
    localStorage.setItem(hourBlock, value);

});



// display event after refresh on page 


$(textContent).each(function(){
  
    var hour = $(this).data("hour");
    
    var description = localStorage.getItem(hour);
    $(this).val(description);
  

})


init();
colorCode();
