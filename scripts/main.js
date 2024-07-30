function setCookie(cname, cvalue, cdays) {
    const d = new Date();
    d.setTime(d.getTime() + (cdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function checkCookie() {
    let mode = getCookie("lightmode");
    if (mode == 1) {
        //Dark Mode
        return mode;
    } else {
        if (mode == 2) {
            //Light Mode, default
            return mode;
        } else {
            setCookie("lightmode", 2, 365);
            return 0;
        }
    }
}

function switchPage(whichSwitch) {
  var valArrow;
  $({step: globalstepinner}).animate({step:20}, {
    step: function(val) {
        valArrow = val-10;  // val + 93
        //103vw is the maximum, 93vw the minimum
        //$('.switchArrow').css('left','min('+(valArrow/4)+'vh,'+(valArrow/4/21*9)+'vw)');
        $('#innerwebsite').css('clip-path','circle('+val+'% at 0 50%)');
        globalstepinner=val;
    }
})

}

function switchArrow(whichSwitch) {
  $({step: globalsteparrowouter}).animate({step:21}, {
    step: function(val) {
        $('.switchArrow').css('left','min('+(val/4)+'vh,'+(val/4/21*9)+'vw)');
        //$('#innerwebsite').css('clip-path','circle('+val+'% at 0 50%)');
        globalsteparrowouter=val;
    }
})

}