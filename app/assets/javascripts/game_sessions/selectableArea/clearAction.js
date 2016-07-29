function clearHighlightedAction()
{
    if (highlightedMoveSquare) clearHighlightedMove();

    if (highlightedAttackSquare) clearHighlightedAttack();

    if (highlightedChecker) clearHighlightedChecker();
}

function clearSelectedAction(completionHandler)
{
    if (selectedMoveSquare) clearSelectedMove(completionHandler ? function() { completionHandler(); } : null);

    if (selectedAttackSquares.length)
    {
        clearSelectedAttackFromIndex(0, (completionHandler ? function () { completionHandler(); } : null));

        if (kingMoveLength) becameKing = null;
    }

    if (selectedChecker) clearSelectedChecker();
}

// ---------------------------------------------------------------------------------------------------------------------

function clearHighlightedChecker()
{
    var numX = highlightedChecker.numX;
    var numY = highlightedChecker.numY;
    var posX = highlightedChecker.posX;
    var posY = highlightedChecker.posY;

    highlightedChecker = null;

    if (isAnimatingEnabled)
    {
        var borderAlpha, fillAlpha, circlesAlpha;
        var array = getSquareAnimationParametersAndStop(numX, numY);
        if (array) { borderAlpha = array[0]; fillAlpha = array[1]; circlesAlpha = array[2]; }

        clearHighlightedCheckerAnimation(squaresCoordinates[numX][numY], borderAlpha, fillAlpha, circlesAlpha);
    }
    else contextSA.clearRect(posX, posY, squareSize, squareSize);
}

function clearHighlightedMove()
{
    var numX = highlightedMoveSquare.numX;
    var numY = highlightedMoveSquare.numY;
    var posX = highlightedMoveSquare.posX;
    var posY = highlightedMoveSquare.posY;

    highlightedMoveSquare = null;

    if (isAnimatingEnabled)
    {
        var borderAlpha, fillAlpha, circlesAlpha;
        var array = getSquareAnimationParametersAndStop(numX, numY);
        if (array) { borderAlpha = array[0]; fillAlpha = array[1]; circlesAlpha = array[2]; }

        clearHighlightedMoveAnimation(squaresCoordinates[numX][numY], borderAlpha, fillAlpha, circlesAlpha, false);
    }
    else contextSA.clearRect(posX, posY, squareSize, squareSize);

    var tempHighlightedSquaresInLine = clone(highlightedSquaresInLine);

    if (tempHighlightedSquaresInLine) clearHighlightedSquaresInLine(tempHighlightedSquaresInLine, false);
}

function clearHighlightedAttack()
{
    var numX = highlightedAttackSquare.numX;
    var numY = highlightedAttackSquare.numY;
    var posX = highlightedAttackSquare.posX;
    var posY = highlightedAttackSquare.posY;

    highlightedAttackSquare = null;
    highlightedAttackChecker = null;

    var isSelectedAttack = isSelectedAttackSquaresContains(numX, numY);
    var isSelectedSquare = isSelectedSquaresInLineContains(numX, numY);
    var isSelectedChecker = (selectedChecker && numX == selectedChecker.numX && numY == selectedChecker.numY);

    if (isSelectedAttack) drawSelectedAttackSquare(numX, numY, posX, posY);
    else if (isSelectedSquare)
    {
        if (imageData)
        {
            contextSA2.putImageData(imageData, posX, posY);
            imageData = null;
        }

        drawSelectedSquare(numX, numY, posX, posY, true);
    }
    else
    {
        if (isAnimatingEnabled)
        {
            var borderAlpha, fillAlpha, circlesAlpha;
            var array = getSquareAnimationParametersAndStop(numX, numY);
            if (array) { borderAlpha = array[0]; fillAlpha = array[1]; circlesAlpha = array[2]; }

            clearHighlightedAttackAnimation(squaresCoordinates[numX][numY], borderAlpha, fillAlpha, circlesAlpha, true);
        }
        else
        {
            if (isSelectedChecker) contextSA.drawImage((isWhiteChecker(selectedChecker) ? selectedCheckerWhiteImage : selectedCheckerBlackImage), selectedChecker.posX, selectedChecker.posY);
            else contextSA.clearRect(posX, posY, squareSize, squareSize);
        }
    }

    var tempHighlightedSquaresInLine = clone(highlightedSquaresInLine);

    if (tempHighlightedSquaresInLine) clearHighlightedSquaresInLine(tempHighlightedSquaresInLine, true);
}

// ---------------------------------------------------------------------------------------------------------------------

function clearSelectedChecker()
{
    var numX = selectedChecker.numX;
    var numY = selectedChecker.numY;
    var posX = selectedChecker.posX;
    var posY = selectedChecker.posY;

    mapMoveable = null;
    mapAttackableSquares = null;
    selectedChecker = null;

    if (isAnimatingEnabled)
    {
        var borderAlpha, fillAlpha, circlesAlpha;
        var array = getSquareAnimationParametersAndStop(numX, numY);
        if (array) { borderAlpha = array[0]; fillAlpha = array[1]; circlesAlpha = array[2]; }

        clearSelectedCheckerAnimation(squaresCoordinates[numX][numY], borderAlpha, fillAlpha, circlesAlpha);
    }
    else contextSA.clearRect(posX, posY, squareSize, squareSize);
}

function clearSelectedMove(completionHandler)
{
    var numX = selectedMoveSquare.numX;
    var numY = selectedMoveSquare.numY;
    var posX = selectedMoveSquare.posX;
    var posY = selectedMoveSquare.posY;

    selectedMoveSquare = null;

    var tempSelectedSquaresInLine = clone(selectedSquaresInLine[0]);

    selectedSquaresInLine = [];

    if (isAnimatingEnabled)
    {
        var isComplete1 = false;
        var isComplete2 = false;

        var borderAlpha, fillAlpha, circlesAlpha;
        var array = getSquareAnimationParametersAndStop(numX, numY);
        if (array) { borderAlpha = array[0]; fillAlpha = array[1]; circlesAlpha = array[2]; }

        clearSelectedMoveAnimation(squaresCoordinates[numX][numY], borderAlpha, fillAlpha, circlesAlpha, function()
        {
            isComplete1 = true;

            if (isComplete1 && isComplete2 && completionHandler) completionHandler();
        });

        // -------------------------------------

        var key = ""+selectedChecker.numX+selectedChecker.numY+numX+numY+"";

        var lineAlpha;
        if (lineAnimations[key])
        {
            lineAlpha = lineAnimations[key].alpha;
            animationFrameSelectableCanvas.cancel(lineAnimations[key].animationRequest);
            lineAnimations[key] = null;
        }

        clearLineAnimation(selectedChecker.numX, selectedChecker.numY, numX, numY, lineAlpha, null, null, function()
        {
            isComplete2 = true;

            if (isComplete1 && isComplete2 && completionHandler) completionHandler();
        });
    }
    else
    {
        contextSA.clearRect(posX, posY, squareSize, squareSize);
        clearLine(selectedChecker.numX, selectedChecker.numY, numX, numY);

        if (completionHandler) completionHandler();
    }

    if (tempSelectedSquaresInLine) clearSelectedSquaresInLine(tempSelectedSquaresInLine, false);
}

function clearSelectedAttackFromIndex(index, completionHandler)
{
    if (index > 0) index--;

    if (selectedAttackSquares && selectedAttackSquares.length > index)
    {
        var tempMapCrossing = clone(mapCrossing);

        var lastIndex = selectedAttackSquares.length;
        var count1 = 0;
        var count2 = 0;
        var isComplete1 = false;
        var isComplete2 = false;

        for (var i = index; i < selectedAttackSquares.length; i++)
        {
            var selectedAttackSquare = selectedAttackSquares[i];

            var tempSelectedAttackSquare = clone(selectedAttackSquare);

            var previousSquare = (i == 0 ? selectedChecker : selectedAttackSquares[i - 1]);

            var prevCrossing1 = tempMapCrossing[previousSquare.numY][previousSquare.numX];
            var prevCrossing2 = tempMapCrossing[tempSelectedAttackSquare.numY][tempSelectedAttackSquare.numX];

            var isSelectedChecker = (selectedChecker && selectedAttackSquare.numX == selectedChecker.numX && selectedAttackSquare.numY == selectedChecker.numY);

            if (isAnimatingEnabled)
            {
                if (!isSelectedChecker)
                {
                    var borderAlpha, fillAlpha, circlesAlpha;
                    var array = getSquareAnimationParametersAndStop(tempSelectedAttackSquare.numX, tempSelectedAttackSquare.numY);
                    if (array) { borderAlpha = array[0]; fillAlpha = array[1]; circlesAlpha = array[2]; }

                    clearSelectedAttackSquaresAnimation(squaresCoordinates[tempSelectedAttackSquare.numX][tempSelectedAttackSquare.numY],
                        borderAlpha, fillAlpha, circlesAlpha, function ()
                        {
                            count1++;

                            if (count1 == lastIndex && completionHandler)
                            {
                                isComplete1 = true;

                                if (isComplete1 && isComplete2) completionHandler();
                            }
                        });
                }
                else
                {
                    count1++;

                    if (count1 == lastIndex && completionHandler)
                    {
                        isComplete1 = true;

                        if (isComplete1 && isComplete2) completionHandler();
                    }
                }

                // -------------------------------------

                var key = ""+previousSquare.numX+previousSquare.numY+tempSelectedAttackSquare.numX+tempSelectedAttackSquare.numY+"";

                var lineAlpha;
                if (lineAnimations[key])
                {
                    lineAlpha = lineAnimations[key].alpha;
                    animationFrameSelectableCanvas.cancel(lineAnimations[key].animationRequest);
                    lineAnimations[key] = null;
                }

                clearLineAnimation(previousSquare.numX, previousSquare.numY, tempSelectedAttackSquare.numX, tempSelectedAttackSquare.numY, lineAlpha, prevCrossing1, prevCrossing2, function()
                {
                    count2++;

                    if (count2 == lastIndex && completionHandler)
                    {
                        isComplete2 = true;

                        if (isComplete1 && isComplete2) completionHandler();
                    }
                });
            }
            else
            {
                var isSelectedChecker = (selectedChecker && tempSelectedAttackSquare.numX == selectedChecker.numX && tempSelectedAttackSquare.numY == selectedChecker.numY);

                if (!isSelectedChecker) contextSA.clearRect(tempSelectedAttackSquare.posX, tempSelectedAttackSquare.posY, squareSize, squareSize);

                clearLine(previousSquare.numX, previousSquare.numY, tempSelectedAttackSquare.numX, tempSelectedAttackSquare.numY);

                if (i == lastIndex-1 && completionHandler) completionHandler()
            }

            var tempSelectedSquaresInLine = selectedSquaresInLine[i];

            if (tempSelectedSquaresInLine) clearSelectedSquaresInLine(tempSelectedSquaresInLine, true);
        }

        selectedAttackSquares.splice(index, selectedAttackSquares.length - index);
        selectedAttackCheckers.splice(index, selectedAttackCheckers.length - index);
        selectedSquaresInLine.splice(index, selectedSquaresInLine.length - index);
    }
}

function clearHighlightedSquaresInLine(arrayOfSquares, isAttack)
{
    for (var i=0; i<arrayOfSquares.length; i++)
    {
        var square = arrayOfSquares[i];

        clearHighlightedSquare(square.numX, square.numY, square.posX, square.posY, isAttack);
    }
}

function clearHighlightedSquare(numX, numY, posX, posY, isAttack)
{
    if (isSelectedSquaresInLineContains(numX, numY)) drawSelectedSquare(numX, numY, posX, posY, true);
    else if (isSelectedAttackSquaresContains(numX, numY)) drawSelectedAttackSquare(numX, numY, posX, posY);
    else
    {
        if (isAnimatingEnabled)
        {
            var borderAlpha, fillAlpha, circlesAlpha;
            var array = getSquareAnimationParametersAndStop(numX, numY);
            if (array) { borderAlpha = array[0]; fillAlpha = array[1]; circlesAlpha = array[2]; }

            clearHighlightedSquareAnimation(squaresCoordinates[numX][numY], borderAlpha, fillAlpha, circlesAlpha, isAttack);
        }
        else contextSA.clearRect(posX, posY, squareSize, squareSize);
    }
}

function clearSelectedSquaresInLine(arrayOfSquares, isAttack)
{
    for (var i=0; i<arrayOfSquares.length; i++)
    {
        var square = arrayOfSquares[i];

        clearSelectedSquare(square.numX, square.numY, square.posX, square.posY, isAttack);
    }
}

function clearSelectedSquare(numX, numY, posX, posY, isAttack)
{
    if (isAnimatingEnabled)
    {
        var borderAlpha, fillAlpha, circlesAlpha;
        var array = getSquareAnimationParametersAndStop(numX, numY);
        if (array) { borderAlpha = array[0]; fillAlpha = array[1]; circlesAlpha = array[2]; }

        clearSelectedSquareAnimation(squaresCoordinates[numX][numY], borderAlpha, fillAlpha, circlesAlpha, isAttack);
    }
    else contextSA.clearRect(posX, posY, squareSize, squareSize);
}