window.onresize = function()
{
      resize();
};

window.

window.onload = function()
{
    // отрисовываем все

    resize();

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
                y > 0 && y < canvasSA.height) {
                // $data = {
                //     'selectedChecker': selectedChecker,
                //     'selectedMoveSquare': selectedMoveSquare,
                //     'x': x,
                //     'y': y,
                //     'map': getEmptyMapOfNumbers()
                // };
                // $.ajax({
                //     url: '/move',
                //     method: 'POST',
                //     data: $data,
                //     success: function (data) {
                //         conole.log('ДВИЖЕНИЕ!!');
                //     }
                // });
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
