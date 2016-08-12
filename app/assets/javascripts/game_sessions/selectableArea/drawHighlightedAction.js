function drawHighlightedActionAtPos(posX, posY)
{
    var numX = Math.floor(posX / squareSize);
    var numY = Math.floor(posY / squareSize);

    posX = squareSize * numX;
    posY = squareSize * numY;

    // если наводим курсор на нашу не выделенную шашку
    if ((!selectedChecker || selectedChecker.numX != numX || selectedChecker.numY != numY) &&
        (!highlightedChecker || highlightedChecker.numX != numX || highlightedChecker.numY != numY) &&
        (map && (isBlackTurn()? isBlackChecker(map[numY][numX]): isWhiteChecker(map[numY][numX]))))
    {
        clearHighlightedAction();

        highlightedChecker = {numX:numX, numY:numY, posX:posX, posY:posY};
        drawHighlightedChecker(numX, numY, posX, posY);
    }
    // если навели на не интерактивную клетку снимаем подсвеченные выделения, если они есть
    else if ((!map || !map[numY][numX] || isEnemyChecker(map[numY][numX])) &&
        (!mapMoveable || !mapMoveable[numY][numX]) &&
        (!mapAttackableSquares || !mapAttackableSquares[numY][numX]))
    {
        clearHighlightedAction();
    }
    else
    {
        // ищем все квадраты между последними 2умя выделениями
        if (selectedChecker && ((mapAttackableSquares && mapAttackableSquares[numY][numX]) || (mapMoveable && mapMoveable[numY][numX])))
        {
            var number;
            if (mapAttackableSquares && mapAttackableSquares[numY][numX]) number = mapAttackableSquares[numY][numX];
            else if (mapMoveable && mapMoveable[numY][numX]) number = 1;
            if (number != undefined)
            {
                var previousSquare = (number > 1 ? selectedAttackSquares[number - 2] : selectedChecker);
                highlightedSquaresInLine = getSquresInLine(previousSquare.numX, previousSquare.numY, numX, numY);
            }
        }
        else highlightedSquaresInLine = null;

        // если у нас есть выделенная шашка и мы наводим курсор на возможный ход
        if (selectedChecker && !selectedMoveSquare && !selectedAttackCheckers.length &&
            //(!selectedMoveSquare || selectedMoveSquare.numX != numX || selectedMoveSquare.numY != numY) &&
            (!highlightedMoveSquare || highlightedMoveSquare.numX != numX || highlightedMoveSquare.numY != numY) &&
            (mapMoveable && mapMoveable[numY][numX]))
        {
            clearHighlightedAction();

            highlightedMoveSquare = {numX:numX, numY:numY, posX:posX, posY:posY};
            drawHighlightedMove(numX, numY, posX, posY);
            if (highlightedSquaresInLine && highlightedSquaresInLine.length)
                drawHighlightedSquaresInLine(highlightedSquaresInLine, false);
        }
        // если у нас есть выделенная шашка и мы наводим курсор на возможную атаку
        else if (selectedChecker && !selectedMoveSquare &&
            (!selectedAttackCheckers.length || !highlightedSquaresInLine || !isSelectedAttackCheckersContainsAnyOf(highlightedSquaresInLine)) &&
            (!highlightedAttackSquare || highlightedAttackSquare.numX != numX || highlightedAttackSquare.numY != numY) &&
            (mapAttackableSquares && mapAttackableSquares[numY][numX]))
        {
            clearHighlightedAction();

            highlightedAttackSquare = {numX:numX, numY:numY, posX:posX, posY:posY};

            if (isSelectedAttackSquaresContains(numX, numY))
            {
                drawHighlightedAttackSquare(numX, numY, posX, posY);
                drawHighlightedSquaresInLine(highlightedSquaresInLine, true);
            }
            else
            {
                drawHighlightedAttack(numX, numY, posX, posY);
                drawHighlightedSquaresInLine(highlightedSquaresInLine, true);
            }
        }
    }
}

// ---------------------------------------------------------------------------------------------------------------------

function drawHighlightedChecker(numX, numY, posX, posY)
{
    if (selectedChecker) contextSA.clearRect(posX, posY, squareSize, squareSize);
    contextSA.drawImage(highlightedCheckerImage, posX, posY);
}

function drawHighlightedMove(numX, numY, posX, posY)
{
    contextSA.drawImage((isBlackTurn() ? highlightedMoveBlackImage : highlightedMoveWhiteImage), posX, posY);
}

function drawHighlightedAttack(numX, numY, posX, posY)
{
    var isSelected = isSelectedSquaresInLineContains(numX, numY);

    if (isSelected)
    {
        imageData = contextSA2.getImageData(posX, posY, squareSize, squareSize);

        clearCircleInSquare(numX, numY);
        if (mapCrossing[numY][numX]) drawCrossing(numX, numY, mapCrossing[numY][numX], 1);
    }

    contextSA.clearRect(posX, posY, squareSize, squareSize);
    contextSA.drawImage((isBlackTurn() ? highlightedAttackBlackImage : highlightedAttackWhiteImage), posX, posY);
}

function drawHighlightedSquaresInLine(arrayOfSquares, isAttack)
{
    for (var i=0; i<arrayOfSquares.length; i++)
    {
        var squre = arrayOfSquares[i];

        if (isSelectedAttackSquaresContains(squre.numX, squre.numY)) drawHighlightedAttackSquare(squre.numX, squre.numY, squre.posX, squre.posY);
        else
        {
            if (isSelectedSquaresInLineContains(squre.numX, squre.numY) && imageData)
            {
                contextSA2.putImageData(imageData, squre.posX, squre.posY);
                imageData = null;
            }

            drawHighlightedSquare(squre.numX, squre.numY, squre.posX, squre.posY, isAttack);
        }
    }
}

function drawHighlightedSquare(numX, numY, posX, posY, isAttack)
{
    contextSA.clearRect(posX, posY, squareSize, squareSize);
    contextSA.drawImage((isAttack ? highlightedAttackSquareImage : highlightedMoveSquareImage), posX, posY);
}

function drawHighlightedAttackSquare(numX, numY, posX, posY)
{
    contextSA.clearRect(posX, posY, squareSize, squareSize);
    contextSA.drawImage((isBlackTurn() ? highlightedAttackBlackImage : highlightedAttackWhiteImage), posX, posY);
}












