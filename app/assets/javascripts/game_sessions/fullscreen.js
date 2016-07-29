function fullScreen()
{
    var html = document.documentElement;

    if (html.requestFullscreen)             html.requestFullscreen();
    else if (html.webkitRequestFullscreen)  html.webkitRequestFullscreen();
    else if (html.mozRequestFullScreen)     html.mozRequestFullScreen();
    else if (html.msRequestFullscreen)      html.msRequestFullscreen();
}

function fullScreenCancel()
{
    if (document.cancelFullScreen)              document.cancelFullScreen();
    else if (document.cancelFullscreen)         document.cancelFullscreen(); // добавил на всякий
    else if (document.exitFullscreen)           document.exitFullscreen();
    else if (document.exitFullScreen)           document.exitFullScreen(); // добавил на всякий
    else if (document.webkitCancelFullScreen)   document.webkitCancelFullScreen();
    else if (document.mozCancelFullScreen)      document.mozCancelFullScreen();
    else if (document.msExitFullscreen)         document.msExitFullscreen();
}

function fullScreenChange()
{
    if((screen.availHeight || screen.height-30) <= window.innerHeight) fullScreenCancel();
    else fullScreen();
}