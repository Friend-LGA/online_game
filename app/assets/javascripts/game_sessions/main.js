$('html').keydown(function(event)
{
    // TODO проверить правильно ли отрабатывается во всех браузерах
    if (event.keyCode == 70) fullScreenChange();
    if (event.keyCode == 27) fullScreenCancel();
});

window.onresize = function()
{
    resize();
};

window.

window.onload = function()
{
    // отрисовываем все

    resize();

    // проверяем, доступен ли полноэкранный режим

    var isFullscreenEnabled = (
        document.fullscreenEnabled ||
        document.fullScreenEnabled || // добавил на всякий
        document.mozFullScreenEnabled ||
        document.webkitFullscreenEnabled ||
        document.msFullscreenEnabled) &&
        !isMobileDevice;

    if (!isFullscreenEnabled) $('#fullscreenButton').remove();

    // отслеживаем позицию нажатия на канвасе

    var isActionNeed = false;

    var mouseDownActionAtPos = function(event)
    {
        if (isInteractionEnabled)
        {
            if (!isMobileDevice || (isMobileDevice && isActionNeed))
            {
                var rect = canvasSA.getBoundingClientRect();

                var x = (isMobileDevice ? event.changedTouches[0].clientX : event.clientX) - rect.left;
                var y = (isMobileDevice ? event.changedTouches[0].clientY : event.clientY) - rect.top;

                if (x > 0 && x < canvasSA.width &&
                    y > 0 && y < canvasSA.height)
                    drawSelectedActionAtPos(x, y);
            }
        }
    };

    var mouseMoveActionAtPos = function(event)
    {
        if (isInteractionEnabled)
        {
            isActionNeed = true;

            var rect = canvasSA.getBoundingClientRect();

            var x = (isMobileDevice ? event.changedTouches[0].clientX : event.clientX) - rect.left;
            var y = (isMobileDevice ? event.changedTouches[0].clientY : event.clientY) - rect.top;

            if (x > 0 && x < canvasSA.width &&
                y > 0 && y < canvasSA.height)
                drawHighlightedActionAtPos(x, y);
            else
                clearHighlightedAction();
        }
    };

    var touchMoveAction = function()
    {
        isActionNeed = false;

        clearHighlightedAction();
    };

    if (isMobileDevice)
    {
        document.addEventListener('touchstart', mouseMoveActionAtPos, false);
        document.addEventListener('touchend', mouseDownActionAtPos, false);
        document.addEventListener('touchmove', touchMoveAction, false);
    }
    else
    {
        document.addEventListener('mousedown', mouseDownActionAtPos, false);
        document.addEventListener('mousemove', mouseMoveActionAtPos, false);
    }

    //alert(navigator.userAgent);
};