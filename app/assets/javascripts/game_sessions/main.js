window.onresize = function()
{
    resize();
};

window.

window.onload = function()
{
    if (playerColor == 1){
     $("#canvases").css({'transform' : 'rotate(180deg)'});
        }else{
     $("#canvases").css({'transform' : 'rotate(0deg)'});

    }
    // отрисовываем все
    resize();
    current_player = 1;
    var isActionNeed = false;

    var mouseDownActionAtPos = function(event)
    {
        if (isInteractionEnabled && currentPlayerColor == playerColor)
        {
            if (!isMobileDevice || (isMobileDevice && isActionNeed))
            {
                var rect = canvasSA.getBoundingClientRect();

            var x,y;
                if ( playerColor == 1){
                     x = size.out  - ((isMobileDevice ? event.changedTouches[0].clientX : event.clientX) - rect.left);
                     y = size.out  - ((isMobileDevice ? event.changedTouches[0].clientY : event.clientY) - rect.top);
                }else{
                     x = (isMobileDevice ? event.changedTouches[0].clientX : event.clientX) - rect.left;
                     y = (isMobileDevice ? event.changedTouches[0].clientY : event.clientY) - rect.top;
                }

                if (x > 0 && x < canvasSA.width &&
                    y > 0 && y < canvasSA.height)
                    drawSelectedActionAtPos(x, y);
            }
        }
    };

    var mouseMoveActionAtPos = function(event)
    {
        if (isInteractionEnabled && currentPlayerColor == playerColor)
        {
            isActionNeed = true;

            var rect = canvasSA.getBoundingClientRect();
            var x,y;
            if ( playerColor == 1){
                 x = size.out  - ((isMobileDevice ? event.changedTouches[0].clientX : event.clientX) - rect.left);
                 y = size.out  - ((isMobileDevice ? event.changedTouches[0].clientY : event.clientY) - rect.top);
            }else{
                 x = (isMobileDevice ? event.changedTouches[0].clientX : event.clientX) - rect.left;
                 y = (isMobileDevice ? event.changedTouches[0].clientY : event.clientY) - rect.top;
            }
            if (x > 0 && x < canvasSA.width &&
                y > 0 && y < canvasSA.height) {
                drawHighlightedActionAtPos(x, y);
            }else
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
};
