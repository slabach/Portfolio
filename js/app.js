function resizeEvents(evt){
    if(window.innerWidth > window.innerHeight){
        console.log( "This device is in landscape mode!" );
    } else {
        console.log( "This device is in portrait mode!" );
    }
}

function addListeners(){
    var screenHeight = window.innerHeight;
    localStorage.setItem('url',1);

    $('ul.listA').click(function(){
        $(this).addClass('currentPage').siblings('').removeClass('currentPage');
    });

    $('#homeNav').click( e => {
        if( ($('.bodyContent div:visible')[0]) == ($('.bodyContent .home')[0]) ){
            // do nothing
        } else {
            $('.bodyContent div:visible').slideToggle(function(){
                $('.bodyContent .home').fadeToggle(200);
            });
        }        
        
        localStorage.setItem('url',1);
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
    });

    
    var curURL = localStorage.getItem('url');

    if(curURL == 1){
        $( "#homeNav" ).css({"border-bottom-color": "#333333", "border-bottom-style": "solid", "border-bottom-width": ".5px", "color": "#99badd"});
    } else if (curURL == 2) {
        $( "#projNav" ).css({"border-bottom-color": "#333333", "border-bottom-style": "solid", "border-bottom-width": ".5px", "color": "#99badd"}); 
    } else if (curURL == 3) {
        $( "#contNav" ).css({"border-bottom-color": "#333333", "border-bottom-style": "solid", "border-bottom-width": ".5px", "color": "#99badd"});
    } else {
      // do nothing    
    }

    $(document.body)[0].onresize = function() {resizeEvents()};
    
}



//Run anon function on page fully loaded
$(document).ready(function(){    

    addListeners();

    
});