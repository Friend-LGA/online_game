window.onresize = function()
{
      resize();
};

window.

window.onload = function()
{
    // отрисовываем все
    // current_player = 1;
    resize();
    current_player = 1;
    // отслеживаем позицию нажатия на канвасе
                if ( current_player == 2){
                     $(".black_background_opacity").css({'display': 'none'});
                     $("#canvases").css({'transform' : 'rotate(180deg)', 'transition':'1s'});
                }else{
                     $("#canvases").css({'transform' : 'rotate(0deg)'});
                }
    var isActionNeed = false;

    var mouseDownActionAtPos = function(event)
    {
        if (isInteractionEnabled)
        {
            if (!isMobileDevice || (isMobileDevice && isActionNeed))
            {
                var rect = canvasSA.getBoundingClientRect();

            var x,y;
                if ( current_player == 2){
                     $(".black_background_opacity").css({'display': 'none'});
                     $("#canvases").css({'transform' : 'rotate(180deg)', 'transition':'1s'});
                     x = size.out  - ((isMobileDevice ? event.changedTouches[0].clientX : event.clientX) - rect.left);
                     y = size.out  - ((isMobileDevice ? event.changedTouches[0].clientY : event.clientY) - rect.top);
                     console.log('Нажатие 2'+ x +' '+ y)
                }else{
                     $("#canvases").css({'transform' : 'rotate(0deg)'});
                     x = (isMobileDevice ? event.changedTouches[0].clientX : event.clientX) - rect.left;
                     y = (isMobileDevice ? event.changedTouches[0].clientY : event.clientY) - rect.top;
                     console.log('Нажатие 1'+ x +' '+ y)
                }

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
            var x,y;
                if ( current_player == 2){
                     $(".black_background_opacity").css({'display': 'none'});
                     $("#canvases").css({'transform' : 'rotate(180deg)', 'transition':'1s'});
                     x = size.out  - ((isMobileDevice ? event.changedTouches[0].clientX : event.clientX) - rect.left);
                     y = size.out  - ((isMobileDevice ? event.changedTouches[0].clientY : event.clientY) - rect.top);
                     console.log('Движение 2 '+x +' '+y)
                }else{
                     $("#canvases").css({'transform' : 'rotate(0deg)'})
                     x = (isMobileDevice ? event.changedTouches[0].clientX : event.clientX) - rect.left;
                     y = (isMobileDevice ? event.changedTouches[0].clientY : event.clientY) - rect.top;
                    console.log('Движение 1 '+x +' '+ y)
                }
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
