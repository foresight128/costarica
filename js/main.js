$(function () {
    
    var myFullpage = new fullpage("#fullpage", {
        menu: "#menu",
        anchors: ["home", "about", "landmark"],
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
    })

    //.layer 
    var sec = [1000, 2000, 2500, 1500, 900, 1500, 2000, 1800, 2300];
    for (i = 0; i < 9; i++) {
        $(`.h1Span${i + 1}`).delay(sec[i]).animate({ color: "#00b4d8", fontSize: "1.7em" });
    }
})

