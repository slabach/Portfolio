function resizeEvents(evt){
    if(window.innerWidth > window.innerHeight){
        console.log( "This device is in landscape mode!" );
    } else {
        console.log( "This device is in portrait mode!" );
    }
}

function navEvents(navView){
    if(navView == 1){
        $( "#homeNav" ).css({"border-bottom-color": "#131313", "border-bottom-style": "solid", "border-bottom-width": ".5px", "color": "#99badd"});
        $( "#projectsNav" ).removeAttr('style');
        $( "#contactNav" ).removeAttr('style');
    } else if (navView == 2) {
        $( "#projectsNav" ).css({"border-bottom-color": "#131313", "border-bottom-style": "solid", "border-bottom-width": ".5px", "color": "#99badd"}); 
        $( "#homeNav" ).removeAttr('style'); 
        $( "#contactNav" ).removeAttr('style'); 
    } else if (navView == 3) {
        $( "#contactNav" ).css({"border-bottom-color": "#131313", "border-bottom-style": "solid", "border-bottom-width": ".5px", "color": "#99badd"});
        $( "#homeNav" ).removeAttr('style');
        $( "#projectsNav" ).removeAttr('style');
    } else {
      // do nothing    
    }

}

function addListeners(){
    // var screenHeight = window.innerHeight;    
    $( "#homeNav" ).css({"border-bottom-color": "#131313", "border-bottom-style": "solid", "border-bottom-width": ".5px", "color": "#99badd"});

    /* var navID="";
    var currentSection = "";
    $(".header ul li").click(function(e){
        e.preventDefault();
        navID = $(this).attr("id");
        nLoc = navID.indexOf("N");
        currentSection = navID.substring(0, nLoc);
        console.log(currentSection);

        $("."+currentSection).animate({
            scrollTop: 0
        },1000)

    }) */

    $('#homeNav').click( e => {
        if( ($('.bodyContent div:visible')[0]) == ($('.bodyContent .home')[0]) ){
            // do nothing
        } else {
            $('.bodyContent div:visible').slideToggle(function(){
                $('.bodyContent .home').fadeToggle(200);
            });
        } 
        
        localStorage.setItem('url',1);
        navEvents(curURL = localStorage.getItem('url'));
    });

    $('#projectsNav').click( e => {
        
        if( ($('.bodyContent div:visible')[0]) == ($('.bodyContent .projects')[0]) ){
            // do nothing
        } else {
            $('.bodyContent div:visible').slideToggle(function(){
                $('.bodyContent .projects').fadeToggle(200);
            });
        }

        localStorage.setItem('url',2);
        navEvents(curURL = localStorage.getItem('url'));
    });

    $('#contactNav').click( e => {
        
        if( ($('.bodyContent div:visible')[0]) == ($('.bodyContent .contact')[0]) ){
            // do nothing
        } else {
            $('.bodyContent div:visible').slideToggle(function(){
                $('.bodyContent .contact').fadeToggle(200);
            });
        } 

        localStorage.setItem('url',3);
        navEvents(curURL = localStorage.getItem('url'));
    });


    $(document.body)[0].onresize = function() {resizeEvents()};
    
}



//Run anon function on page fully loaded
$(document).ready(function(){    

    addListeners();

    
});