function resizeEvents(evt){
    if(window.innerWidth > window.innerHeight){
        console.log( "This device is in landscape mode!" );
    } else {
        console.log( "This device is in portrait mode!" );
    }
}

function navEvents(navView){
    if(navView == 1){
        $( "#homeNav" ).css({"border-bottom-color": "#333333", "border-bottom-style": "solid", "border-bottom-width": ".5px", "color": "#99badd"});
        $( "#projNav" ).removeAttr('style');
        $( "#contNav" ).removeAttr('style');
    } else if (navView == 2) {
        $( "#projNav" ).css({"border-bottom-color": "#333333", "border-bottom-style": "solid", "border-bottom-width": ".5px", "color": "#99badd"}); 
        $( "#homeNav" ).removeAttr('style'); 
        $( "#contNav" ).removeAttr('style'); 
    } else if (navView == 3) {
        $( "#contNav" ).css({"border-bottom-color": "#333333", "border-bottom-style": "solid", "border-bottom-width": ".5px", "color": "#99badd"});
        $( "#homeNav" ).removeAttr('style');
        $( "#projNav" ).removeAttr('style');
    } else {
      // do nothing    
    }

}

function addListeners(){
    var screenHeight = window.innerHeight;    
    $( "#homeNav" ).css({"border-bottom-color": "#333333", "border-bottom-style": "solid", "border-bottom-width": ".5px", "color": "#99badd"});

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

    $('#projNav').click( e => {
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

    $('#contNav').click( e => {
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