// Manipulating styles with jquery
$('h1').css("color", "green"); // This changes the h1 to green

console.log($('h1').css('color')); // This logs an output of the color of the h1

$('h1').addClass("big-title"); // This adds the class .big-title
$('h1').removeClass("big-title"); // This removes the class .big-title 

// To add multiple classes we do
$('h1').addClass("big-title margin-50");

// and remove multiple classes
// $('h1').removeClass("big-title margin-50");

// To check whether an element has a class we do
$('h1').hasClass('big-title')
