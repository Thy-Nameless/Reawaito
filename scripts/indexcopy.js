var globalmode;

window.addEventListener('load', function () {
    //When the page starts, load the appropiate visibility mode
    switch(+checkCookie()){
        case 1:
            //Dark mode
            $('#darkmode').css('zIndex',2);$('#darkmode').css('visibility','visible');
            $('#lightmode').css('zIndex',1);$('#lightmode').css('visibility','visible');
            globalmode = 1;
            break;
        case 2:
        case 0:
            //Light mode
            $('#darkmode').css('zIndex',1);$('#darkmode').css('visibility','visible');
            $('#lightmode').css('zIndex',2);$('#lightmode').css('visibility','visible');
            globalmode = 2;
            break;
    }


    //When hovering, show a small peak into the other mode

    $('#modehover').mouseover(function() {
        
        if($(this).hasClass('unbinded')){
            switch(+globalmode){
                case 1:
                    //Dark mode
                    $('#darkmode').css('zIndex',1);
                    $('#lightmode').css('zIndex',2);
    
                    $({step: 0}).animate({step:20}, {
                        step: function(val) {
                            $('#lightmode').css('clip-path','circle('+val+'% at 100% 0)');
                        }
                    })
    
                    break;
                case 2:
                    //Light mode
                    $('#darkmode').css('zIndex',2);
                    $('#lightmode').css('zIndex',1);
    
                    $({step: 0}).animate({step:20}, {
                        step: function(val) {
                            $('#darkmode').css('clip-path','circle('+val+'% at 100% 0)');
                        }
                    })
    
                    break;
            }
        }
    })

    $('#modehover').mouseleave(function() {
        if($(this).hasClass('unbinded')){
            switch(+globalmode){
                case 1:
                    //Dark mode
                    $({step: 20}).animate({step:0}, {
                        step: function(val) {          
                            $('#lightmode').css('clip-path','circle('+val+'% at 100% 0)');
                        }
                    })
    
                    //$('#darkmode').css('zIndex',2);
                    //$('#lightmode').css('zIndex',1);
                    break;
                case 2:
                    //Light mode
                    $({step: 20}).animate({step:0}, {
                        step: function(val) {
                            $('#darkmode').css('clip-path','circle('+val+'% at 100% 0)');
                        }
                    })
    
                    //$('#darkmode').css('zIndex',1);
                    //$('#lightmode').css('zIndex',2); 
                    break;
            }
        }
    })
    //When clicking, transition to the next mode
    $('#modehover').on('click', function() {
        switch(+globalmode){
            case 1:
                //Dark mode
                $('#darkmode').css('zIndex',1);
                $('#lightmode').css('zIndex',2);
                setCookie("lightmode", 2, 365);
                globalmode = 2;
                break;
            case 2:
                //Light mode
                $('#darkmode').css('zIndex',2);
                $('#lightmode').css('zIndex',1);
                setCookie("lightmode", 1, 365);
                globalmode = 1;
                break;
        }
    })
    
})
