
$("h1").click(function () {
    $("h1").css("color", "purple")
    // This just adds the purple color to h1 when clicked
})

// If using pure javascript code to make all the buttons to change the color of the h1 to purple if the buttons are clicked
// for (let i=0; i<5; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color = "purple";
//     });
// }


// This is the one for jQuery
$("button").click(function () {
    $("h1").css("color", "yellow")
})

// Keypress event listener
$(document).keypress(function(){
    console.log(event.key);
})

// on()event method
$("h1").on("mouseover", function(){
    $("h1:hover").css("background-color", "purple")
})