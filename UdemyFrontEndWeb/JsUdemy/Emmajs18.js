var button = document.getElementById("button");
let button = document.getElementsByTagName("button")[0];// The [0] is to take the first button in the array
button.addEventListener("mouseleave", function (){
    console.log("CLICK!!!!");
});
button.addEventListener("mouseenter",function(){
    console.log("CLICK!!!!");
})
