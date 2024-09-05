$("#animate-me1").click(function(){
    $("h1").animate({
        opacity:0.5
    });
})


$("#animate-me2").click(function(){
    $("h1").slideUp().slideDown().animate({
        opacity:0.5,
        margin:"20%",// We can also use strings with number values inside them . It is used to add units like rem ,em, vh e.t.c
    });
})


$("#animate-me3").click(function(){
    $("h1").slideUp().delay(100000).slideDown().animate({
        opacity:0.5,
        margin:"20%",// We can also use strings with number values inside them . It is used to add units like rem ,em, vh e.t.c
    });
})