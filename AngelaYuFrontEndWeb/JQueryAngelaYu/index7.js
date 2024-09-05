$("#hide").click(function () {
    $("h1").hide();
    // This hides the h1 title when hide me is clicked
})


$("#show").click(function () {
    $("h1").show();
    // This shows the h1 title when show me is clicked
})


$("#toggle").click(function () {
    $("h1").toggle();
    // This hides and shows the h1 title when Toggle me is clicked
})


$("#fade-out").click(function(){
    $("h1").fadeOut();
    // This fadesOut the title when fade Out me is clicked 
})

$("#fade-in").click(function () {
    $("h1").fadeIn();
    // This fadesIn the title when fade In me is clicked
})

$("#fadeToggle").click(function(){
    $("h1").fadeToggle();
    // This fade Toggles the title when fade Toggle me is clicked
})


$("#slide-up").click(function(){
    $("h1").slideUp();
    // This slides Up the title when slide up me is clicked
    // This is useful for dropdown menus
})


$("#slide-down").click(function(){
    $("h1").slideDown();
    // This slides Down the title when slide down me is clicked
    // This is useful for dropdown menus
})


$("#slide-toggle").click(function(){
    $("h1").slideToggle();
    // This slides the title up and down when slide toggle me
    // This is useful for dropdown menus
})