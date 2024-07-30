var globalmode;
var globalstep = 0;
var globalsteparrow = 21;
var globalsteparrowouter = -30;
var globalstepinner = 0;
var globalcurrentwebsite = false;
var stopArrow;

window.addEventListener('load', function () {
    //When the page starts, load the appropiate visibility mode
    switch(+checkCookie()){
        case 1:
            //Dark mode
            $('#darkmode').css('zIndex',2);$('#darkmode').css('visibility','visible');
            $('#lightmode').css('zIndex',1);$('#lightmode').css('visibility','visible');
            $('#innerwebsite').css('background-color','#212129');
            $('#innerwebsite').css('color','white');
            $(".switchArrow").attr("src","icons/arrowlightsmall.png");
            globalmode = 1;
            break;
        case 2:
        case 0:
            //Light mode
            $('#darkmode').css('zIndex',1);$('#darkmode').css('visibility','visible');
            $('#lightmode').css('zIndex',2);$('#lightmode').css('visibility','visible');
            $('#innerwebsite').css('background-color','#white');
            $('#innerwebsite').css('color','#212129');
            $(".switchArrow").attr("src","icons/arrowdarksmall.png");
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
                    //Step needs to be used in order to animate clip-path, which is not originally supported by jquery animate
                    $({step: globalstep}).animate({step:20}, {
                        step: function(val) {
                            $('#lightmode').css('clip-path','circle('+val+'% at 100% 0)');
                            globalstep = val;
                        }
                    })
    
                    break;
                case 2:
                    //Light mode
                    $('#darkmode').css('zIndex',2);
                    $('#lightmode').css('zIndex',1);
                    //Step needs to be used in order to animate clip-path, which is not originally supported by jquery animate
                    $({step: globalstep}).animate({step:20}, {
                        step: function(val) {
                            $('#darkmode').css('clip-path','circle('+val+'% at 100% 0)');
                            globalstep = val;
                        }
                    })
    
                    break;
            }
        }
    })

    $('#modehover').mouseleave(function() {
        //This if is: If the switch animation has stopped or if the animation stopped and the user just stopped hovering
        if($(this).hasClass('unbinded') || globalstep == 0) {
            if(globalstep == 0 && !$(this).hasClass('unbinded') ) {
                $('#modehover').toggleClass('unbinded');
            }
            switch(+globalmode){
                case 1:
                    //Dark mode
                    //Step needs to be used in order to animate clip-path, which is not originally supported by jquery animate
                    $({step: globalstep}).animate({step:0}, {
                        step: function(val) {          
                            $('#lightmode').css('clip-path','circle('+val+'% at 100% 0)');
                            globalstep = val;
                        }
                    })
                    //$('#darkmode').css('zIndex',2);
                    //$('#lightmode').css('zIndex',1);
                    break;
                case 2:
                    //Light mode
                    //Step needs to be used in order to animate clip-path, which is not originally supported by jquery animate
                    $({step: globalstep}).animate({step:0}, {
                        step: function(val) {          
                            $('#darkmode').css('clip-path','circle('+val+'% at 100% 0)');
                            globalstep = val;
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
        if($(this).hasClass('unbinded')) {
            $('#modehover').toggleClass('unbinded');
            switch(+globalmode){
                case 1:
                    //Dark mode
                    //Step needs to be used in order to animate clip-path, which is not originally supported by jquery animate
                    $({step: globalstep}).animate({step:150}, {
                        step: function(val) {
                            $('#lightmode').css('clip-path','circle('+val+'% at 100% 0)');
                            globalstep = val;
                            if (val == 150) {
                                globalstep=0;
                                globalmode=2;
                                $('#innerwebsite').css('background-color','white');
                                $('#innerwebsite').css('color','#212129');
                                $(".switchArrow").attr("src","icons/arrowdarksmall.png");
                                $('#lightmode').css('clip-path','');
                                setCookie("lightmode", 2, 365);
                                //This if is for when the user has not yet stopped hovering the object, without this the user can trigger a mode change without animation
                                if ($('#modehover:hover').length == 0) {
                                    $('#modehover').toggleClass('unbinded');
                                }
                            }
                        }
                    })
                    break;
                case 2:
                    //Light mode
                    //Step needs to be used in order to animate clip-path, which is not originally supported by jquery animate
                    $({step: globalstep}).animate({step:150}, {
                        step: function(val) {
                            $('#darkmode').css('clip-path','circle('+val+'% at 100% 0)');
                            globalstep = val;
                            if (val == 150) {
                                globalstep=0;
                                globalmode=1;
                                $('#innerwebsite').css('background-color','#212129');
                                $('#innerwebsite').css('color','white');
                                $(".switchArrow").attr("src","icons/arrowlightsmall.png");
                                $('#darkmode').css('clip-path','');
                                setCookie("lightmode", 1, 365);
                                //This if is for when the user has not yet stopped hovering the object, without this the user can trigger a mode change without animation
                                if ($('#modehover:hover').length == 0) {
                                    $('#modehover').toggleClass('unbinded');
                                }
                                
                            }
                        }
                    })
                    break;
        }
        }
    })
    //Move arrow to the right on hover
    $('.arrowhover').mouseover(function() {
        //$('.arrow').animate({
        //    right:0
        //})
        var first = false
        stopArrow = false
        $({step:globalsteparrow}).animate({step:-30}, {
            step: function(val) {
                if (stopArrow) {
                    return;
                }
                globalsteparrow=val;
                $('.arrow').css('right','min('+(val/4)+'vh,'+(val/4/21*9)+'vw)');
                if (first == false && val <= 0) {
                    switchPage();switchArrow();
                    first=true;
                //    var valAdapted = val + 30;
                //    console.log(valAdapted);
                //    globalstepinner = valAdapted;
                //    $('#innerwebsite').css('clip-path','circle('+valAdapted+'% at 0 50%)');
                //    $('.arrow').css('right','0');
                //} else {
                //    $('.arrow').css('right','min('+(val/4)+'vh,'+(val/4/21*9)+'vw)');
                }
            }
        })

        //We show a peak into the site
        $('#innerwebsite').css('visibility','visible');

        //$({step: globalstepinner}).animate({step:20}, {
        //    step: function(val) {
        //        $('#innerwebsite').css('clip-path','circle('+val+'% at 0 50%)');
        //        globalstepinner=val;
        //    }
        //})


    })
    //Move arrow back to it's original place, needs to be done over a div to make sure it doesn't glitch
    $('.arrowhover').mouseleave(function(){
        stopArrow = true;
        var vh = window.innerHeight * 0.0525;
        var vw = window.innerWidth * 0.0225;
        var min = Math.min(vh, vw);
        //$('.arrow').animate({
        //    right:min
        //})
        $({step:globalsteparrow}).animate({step:21}, {
            step: function(val) {
                globalsteparrow=val;
                $('.arrow').css('right','min('+(val/4)+'vh,'+(val/4/21*9)+'vw)');
            }
        })
        
        //We hide the sneak peak
        $({step: globalstepinner}).animate({step:0}, {
            step: function(val) {
                globalstepinner=val;
                $('#innerwebsite').css('clip-path','circle('+val+'% at 0 50%)');
            }
        })

        $({step: globalsteparrowouter}).animate({step:-30}, {
            step: function(val) {
                $('.switchArrow').css('left','min('+(val/4)+'vh,'+(val/4/21*9)+'vw)');
                //$('#innerwebsite').css('clip-path','circle('+val+'% at 0 50%)');
                globalsteparrowouter=val;
            }
        })
    })
    $('.arrowhover').on('click', function() {
        $({step: globalstepinner}).animate({step:150}, {
            step: function(val) {
                globalstepinner=val;
                $('#innerwebsite').css('clip-path','circle('+val+'% at 0 50%)');

                if (val == 150) {
                    globalcurrentwebsite = !globalcurrentwebsite;
                    globalstepinner=0;
                    $('#innerwebsite').css('clip-path','');
                    //This if is for when the user has not yet stopped hovering the object, without this the user can trigger a mode change without animation
                    //if ($('#modehover:hover').length == 0) {
                    //    $('#modehover').toggleClass('unbinded');
                    //}
                    
                }
            }
        })

        
    })
})
