function drawSelectedActionAtPos(posX, posY)
{
    var numX = Math.floor(posX / squareSize);
    var numY = Math.floor(posY / squareSize);

    posX = squareSize * numX;
    posY = squareSize * numY;

    // если мы нажали на нашу выделенную шашку
    if (selectedChecker && selectedChecker.numX == numX && selectedChecker.numY == numY && (!mapAttackableSquares || !mapAttackableSquares[numY][numX]))
    {
        if (selectedMoveSquare) clearSelectedMove();
        if (selectedAttackSquares.length) clearSelectedAttackFromIndex(0);

        if (!isMobileDevice)
        {
            highlightedChecker = {numX:numX, numY:numY, posX:posX, posY:posY};
            drawHighlightedChecker(numX, numY, posX, posY);
        }
        else clearSelectedChecker();

        selectedChecker = null;
    }
    // если мы нажали на возможный ход выделеной шашки
    else if (selectedChecker && !selectedAttackCheckers.length && mapMoveable[numY][numX])
    {
        // если повторно нажали на выбранный ход - то происходит непосредственно ход
        if (selectedMoveSquare && selectedMoveSquare.numX == numX && selectedMoveSquare.numY == numY)
        {
            isInteractionEnabled = false;
            $data = {'selectedChecker': selectedChecker, 'selectedMoveSquare': selectedMoveSquare, 'type' : 'move'};
            $.ajax({
                url: '/move',
                method: 'POST',
                data: $data,
                success: function(data){
                    console.log('ДВИЖЕНИЕ!!');
                }
            });
            moveAction();
        }
        else if (!selectedMoveSquare)
        {
            if (selectedMoveSquare) clearSelectedMove();
            if (selectedAttackSquares.length)
            {
                clearSelectedAttackFromIndex(0);
                makeMaps(selectedChecker.numX, selectedChecker.numY, 0);
            }

            if (highlightedSquaresInLine) selectedSquaresInLine.push(highlightedSquaresInLine);

            highlightedMoveSquare = null;
            highlightedSquaresInLine = null;

            selectedMoveSquare = {numX: numX, numY: numY, posX: posX, posY: posY};
            drawSelectedMove(numX, numY, posX, posY);
            if (selectedSquaresInLine[0] && selectedSquaresInLine[0].length) drawSelectedSquaresInLine(selectedSquaresInLine[0], false);
        }
        else
        {
            clearSelectedMove();
            makeMaps(selectedChecker.numX, selectedChecker.numY, 0);
        }
    }
    // если мы нажади на возможную атаку
    else if (selectedChecker && !selectedMoveSquare && mapAttackableSquares[numY][numX])
    {
        // если повторно нажали на выбранную последнюю атаку - то происходит непосредственно ход
        if (selectedAttackSquares.length && selectedAttackSquares[selectedAttackSquares.length-1].numX == numX && selectedAttackSquares[selectedAttackSquares.length-1].numY == numY)
        {
            isInteractionEnabled = false;
            $data = {'selectedAttackChecker': selectedChecker, 'selectedAttackSquares': selectedMoveSquare, 'type': 'attack'};
            $.ajax({
                url: '/move',
                method: 'POST',
                data: $data,
                success: function(data){
                    console.log('ATTACK ALARM!!');
                }
            })
            attackAction(0);
        }
        // нажали на новую возможную атаку
        else if (!highlightedSquaresInLine || !isSelectedAttackCheckersContainsAnyOf(highlightedSquaresInLine))
        {
            if (selectedMoveSquare)
            {
                clearSelectedMove();
                makeMaps(selectedChecker.numX, selectedChecker.numY, 0);
            }

            var attackNumber = mapAttackableSquares[numY][numX];
            clearSelectedAttackFromIndex(attackNumber);

            selectedSquaresInLine.push(highlightedSquaresInLine);

            highlightedAttackSquare = null;
            highlightedAttackChecker = null;
            highlightedSquaresInLine = null;

            selectedAttackSquares.push({numX:numX, numY:numY, posX:posX, posY:posY});
            var previousAttackSquare = (attackNumber == 1 ? selectedChecker : selectedAttackSquares[attackNumber-2]);

            selectedAttackCheckers.push(findAttackableCheckerInSquares(selectedSquaresInLine[selectedSquaresInLine.length-1]));

            findAttackableSquaresFromSquare(numX, numY, attackNumber);

            if (attackNumber > 1)
            {
                var previousAttackSquare2 = ((attackNumber-1) == 1 ? selectedChecker : selectedAttackSquares[attackNumber-3]);
                var previousCrossingType1 = mapCrossing[previousAttackSquare.numY][previousAttackSquare.numX];
                var previousCrossingType2 = mapCrossing[numY][numX];

                if (mapCrossing[previousAttackSquare.numY][previousAttackSquare.numX] == crossingType.empty)
                {
                    if ((previousAttackSquare2.numX > previousAttackSquare.numX && previousAttackSquare2.numY < previousAttackSquare.numY &&
                        numX > previousAttackSquare.numX && numY > previousAttackSquare.numY) ||
                        (numX > previousAttackSquare.numX && numY < previousAttackSquare.numY &&
                            previousAttackSquare2.numX > previousAttackSquare.numX && previousAttackSquare2.numY > previousAttackSquare.numY))
                        mapCrossing[previousAttackSquare.numY][previousAttackSquare.numX] = crossingType.right;
                    else if ((previousAttackSquare2.numX > previousAttackSquare.numX && previousAttackSquare2.numY < previousAttackSquare.numY &&
                        numX < previousAttackSquare.numX && numY > previousAttackSquare.numY) ||
                        (numX > previousAttackSquare.numX && numY < previousAttackSquare.numY &&
                            previousAttackSquare2.numX < previousAttackSquare.numX && previousAttackSquare2.numY > previousAttackSquare.numY))
                        mapCrossing[previousAttackSquare.numY][previousAttackSquare.numX] = crossingType.slash;
                    else if ((previousAttackSquare2.numX > previousAttackSquare.numX && previousAttackSquare2.numY < previousAttackSquare.numY &&
                        numX < previousAttackSquare.numX && numY < previousAttackSquare.numY) ||
                        (numX > previousAttackSquare.numX && numY < previousAttackSquare.numY &&
                            previousAttackSquare2.numX < previousAttackSquare.numX && previousAttackSquare2.numY < previousAttackSquare.numY))
                        mapCrossing[previousAttackSquare.numY][previousAttackSquare.numX] = crossingType.top;
                    else if ((previousAttackSquare2.numX < previousAttackSquare.numX && previousAttackSquare2.numY < previousAttackSquare.numY &&
                        numX < previousAttackSquare.numX && numY > previousAttackSquare.numY) ||
                        (numX < previousAttackSquare.numX && numY < previousAttackSquare.numY &&
                            previousAttackSquare2.numX < previousAttackSquare.numX && previousAttackSquare2.numY > previousAttackSquare.numY))
                        mapCrossing[previousAttackSquare.numY][previousAttackSquare.numX] = crossingType.left;
                    else if ((previousAttackSquare2.numX < previousAttackSquare.numX && previousAttackSquare2.numY < previousAttackSquare.numY &&
                        numX > previousAttackSquare.numX && numY > previousAttackSquare.numY) ||
                        (numX < previousAttackSquare.numX && numY < previousAttackSquare.numY &&
                            previousAttackSquare2.numX > previousAttackSquare.numX && previousAttackSquare2.numY > previousAttackSquare.numY))
                        mapCrossing[previousAttackSquare.numY][previousAttackSquare.numX] = crossingType.backSlash;
                    else if ((previousAttackSquare2.numX > previousAttackSquare.numX && previousAttackSquare2.numY > previousAttackSquare.numY &&
                        numX < previousAttackSquare.numX && numY > previousAttackSquare.numY) ||
                        (numX > previousAttackSquare.numX && numY > previousAttackSquare.numY &&
                            previousAttackSquare2.numX < previousAttackSquare.numX && previousAttackSquare2.numY > previousAttackSquare.numY))
                        mapCrossing[previousAttackSquare.numY][previousAttackSquare.numX] = crossingType.bottom;
                }
                else
                {
                    if (mapCrossing[previousAttackSquare.numY][previousAttackSquare.numX] == crossingType.slash ||
                        mapCrossing[previousAttackSquare.numY][previousAttackSquare.numX] == crossingType.backSlash)
                        mapCrossing[previousAttackSquare.numY][previousAttackSquare.numX] = crossingType.cross;
                    else if (mapCrossing[previousAttackSquare.numY][previousAttackSquare.numX] == crossingType.left ||
                        mapCrossing[previousAttackSquare.numY][previousAttackSquare.numX] == crossingType.right)
                        mapCrossing[previousAttackSquare.numY][previousAttackSquare.numX] = crossingType.leftRight;
                    else if (mapCrossing[previousAttackSquare.numY][previousAttackSquare.numX] == crossingType.top ||
                        mapCrossing[previousAttackSquare.numY][previousAttackSquare.numX] == crossingType.bottom)
                        mapCrossing[previousAttackSquare.numY][previousAttackSquare.numX] = crossingType.topBottom;
                }
            }

            var previoslySelectedSquare = { numX:null, numY:null };

            for (var i=0; i<selectedSquaresInLine[selectedSquaresInLine.length-1].length; i++)
            {
                var squre = selectedSquaresInLine[selectedSquaresInLine.length-1][i];

                if (isSelectedAttackSquaresContains(squre.numX, squre.numY))
                {
                    previoslySelectedSquare = { numX:squre.numX, numY:squre.numY };

                    break;
                }
            }

            drawSelectedAttack(numX, numY, posX, posY, previousAttackSquare.numX, previousAttackSquare.numY,
                previoslySelectedSquare.numX, previoslySelectedSquare.numY, previousCrossingType1, previousCrossingType2);
            drawSelectedSquaresInLine(selectedSquaresInLine[selectedSquaresInLine.length-1], true);
        }
        else
        {
            clearSelectedAttackFromIndex(0);
            makeMaps(selectedChecker.numX, selectedChecker.numY, 0);
        }
    }
    else
    {
        // если мы выбрали новую шашку
        if (isBlackTurn() ? isBlackChecker(map[numY][numX]) : isWhiteChecker(map[numY][numX]))
        {
            clearSelectedAction();

            selectedChecker = {numX:numX, numY:numY, posX:posX, posY:posY};
            drawSelectedChecker(numX, numY, posX, posY);

            highlightedChecker = null;
            imageData = null;

            makeMaps(numX, numY);
        }
        else
        {
            if (selectedAttackCheckers.length)
            {
                if (!isSelectedAttackSquaresContains(numX, numY))
                {
                    clearSelectedAttackFromIndex(0);
                    makeMaps(selectedChecker.numX, selectedChecker.numY, 0);
                }
            }
            else if (selectedMoveSquare)
            {
                clearSelectedMove();
                makeMaps(selectedChecker.numX, selectedChecker.numY, 0);
            }
            else clearSelectedAction();
        }
    }
}

// ---------------------------------------------------------------------------------------------------------------------

function attackAction(attackMoveNumber)
{
    if (attackMoveNumber == 0) contextCH.clearRect(selectedChecker.posX, selectedChecker.posY, squareSize, squareSize);
    else contextCH.clearRect(selectedAttackSquares[attackMoveNumber-1].posX, selectedAttackSquares[attackMoveNumber-1].posY, squareSize, squareSize);
    contextCH.clearRect(selectedAttackCheckers[attackMoveNumber].posX, selectedAttackCheckers[attackMoveNumber].posY, squareSize, squareSize);

    contextCH.save();
    contextCH.globalAlpha = 0.5;
    contextCH.drawImage(imageForChecker(map[selectedAttackCheckers[attackMoveNumber].numY][selectedAttackCheckers[attackMoveNumber].numX]),
        selectedAttackCheckers[attackMoveNumber].posX, selectedAttackCheckers[attackMoveNumber].posY);
    contextCH.restore();

    // при достижении последней черты шашка становится дамкой
    if (becomeKingImmediately && selectedAttackSquares[attackMoveNumber].numY == (isBlackTurn() ? map.length-1 : 0))
    {
        var isCheckerMan = isMan(map[selectedChecker.numY][selectedChecker.numX]);
        if (isCheckerMan) map[selectedChecker.numY][selectedChecker.numX] += 0.5;
    }

    contextCH.drawImage(imageForChecker(map[selectedChecker.numY][selectedChecker.numX]),
        selectedAttackSquares[attackMoveNumber].posX, selectedAttackSquares[attackMoveNumber].posY);

    attackMoveNumber++;

    setTimeout(function() { (attackMoveNumber < selectedAttackSquares.length ? attackAction(attackMoveNumber) : nextTurnAfterAttack()); }, attackDelay);
}

function nextTurnAfterAttack()
{
    for (var i=0; i<selectedAttackCheckers.length; i++)
    {
        map[selectedAttackCheckers[i].numY][selectedAttackCheckers[i].numX] = checkerType.empty;

        contextCH.clearRect(selectedAttackCheckers[i].posX, selectedAttackCheckers[i].posY, squareSize, squareSize);
    }

    map[selectedAttackSquares[selectedAttackSquares.length - 1].numY][selectedAttackSquares[selectedAttackSquares.length - 1].numX] = map[selectedChecker.numY][selectedChecker.numX];
    map[selectedChecker.numY][selectedChecker.numX] = checkerType.empty;

    // при достижении последней черты шашка становится дамкой
    if (!becomeKingImmediately && selectedAttackSquares[selectedAttackSquares.length - 1].numY == (isBlackTurn() ? map.length-1 : 0))
    {
        var isCheckerMan = isMan(map[selectedAttackSquares[selectedAttackSquares.length - 1].numY][selectedAttackSquares[selectedAttackSquares.length - 1].numX]);
        if (isCheckerMan)
        {
            map[selectedAttackSquares[selectedAttackSquares.length - 1].numY][selectedAttackSquares[selectedAttackSquares.length - 1].numX] += 0.5;

            contextCH.clearRect(selectedAttackSquares[selectedAttackSquares.length - 1].posX, selectedAttackSquares[selectedAttackSquares.length - 1].posY, squareSize, squareSize);
            contextCH.drawImage(imageForChecker(map[selectedAttackSquares[selectedAttackSquares.length - 1].numY][selectedAttackSquares[selectedAttackSquares.length - 1].numX]),
                selectedAttackSquares[selectedAttackSquares.length - 1].posX, selectedAttackSquares[selectedAttackSquares.length - 1].posY);
        }
    }

    clearSelectedAction(function() { nextTurnDone(); });
}

function moveAction()
{
    contextCH.clearRect(selectedChecker.posX, selectedChecker.posY, squareSize, squareSize);

    // при достижении последней черты шашка становится дамкой
    if (becomeKingImmediately && selectedMoveSquare.numY == (isBlackTurn() ? map.length-1 : 0))
    {
        var isCheckerMan = isMan(map[selectedChecker.numY][selectedChecker.numX]);
        if (isCheckerMan) map[selectedChecker.numY][selectedChecker.numX] += 0.5;
    }

    contextCH.drawImage(imageForChecker(map[selectedChecker.numY][selectedChecker.numX]), selectedMoveSquare.posX, selectedMoveSquare.posY);

    setTimeout(function() { nextTurnAfterMove(); }, moveDelay);
}

function nextTurnAfterMove()
{
    map[selectedMoveSquare.numY][selectedMoveSquare.numX] = map[selectedChecker.numY][selectedChecker.numX];
    map[selectedChecker.numY][selectedChecker.numX] = checkerType.empty;

    // при достижении последней черты шашка становится дамкой
    if (!becomeKingImmediately && selectedMoveSquare.numY == (isBlackTurn() ? map.length-1 : 0))
    {
        var isCheckerMan = isMan(map[selectedMoveSquare.numY][selectedMoveSquare.numX]);
        if (isCheckerMan)
        {
            map[selectedMoveSquare.numY][selectedMoveSquare.numX] += 0.5;

            contextCH.clearRect(selectedMoveSquare.posX, selectedMoveSquare.posY, squareSize, squareSize);
            contextCH.drawImage(imageForChecker(map[selectedMoveSquare.numY][selectedMoveSquare.numX]), selectedMoveSquare.posX, selectedMoveSquare.posY);
        }
    }

    clearSelectedAction(function() { nextTurnDone(); });
}

function nextTurnDone()
{
    turn = (isBlackTurn() ? turnType.white : turnType.black);
    isInteractionEnabled = true;
}

// ---------------------------------------------------------------------------------------------------------------------

function drawSelectedChecker(numX, numY, posX, posY)
{
    contextSA.clearRect(posX, posY, squareSize, squareSize);
    contextSA.drawImage((isBlackTurn() ? selectedCheckerBlackImage : selectedCheckerWhiteImage), posX, posY);
}

function drawSelectedMove(numX, numY, posX, posY)
{
    contextSA.clearRect(posX, posY, squareSize, squareSize);
    contextSA.drawImage((isBlackTurn() ? selectedMoveBlackImage : selectedMoveWhiteImage), posX, posY);
    drawMoveLine(1);
}

function drawSelectedAttack(numX1, numY1, posX1, posY1, numX2, numY2, numX_clear, numY_clear, prevCrossing1, prevCrossing2)
{
    var isSelectedChecker = (selectedChecker && numX1 == selectedChecker.numX && numY1 == selectedChecker.numY);

    contextSA.clearRect(posX1, posY1, squareSize, squareSize);

    if (isSelectedChecker) contextSA.drawImage((isBlackTurn() ? selectedCheckerBlackImage : selectedCheckerWhiteImage), posX1, posY1);
    else contextSA.drawImage((isBlackTurn() ? selectedAttackBlackImage : selectedAttackWhiteImage), posX1, posY1);

    drawLineWithCrossing(numX2, numY2, numX1, numY1, 1, prevCrossing1, prevCrossing2);

    if (numX_clear && numY_clear)
    {
        clearCircleInSquare(numX_clear, numY_clear);
        drawCrossing(numX_clear, numY_clear, mapCrossing[numY_clear][numX_clear], 1);
    }
}

function drawSelectedSquaresInLine(arrayOfSquares, isAttack)
{
    for (var i=0; i<arrayOfSquares.length; i++)
    {
        var squre = arrayOfSquares[i];

        if (isAttack && isSelectedAttackSquaresContains(squre.numX, squre.numY)) drawSelectedAttackSquare(squre.numX, squre.numY, squre.posX, squre.posY);
        else drawSelectedSquare(squre.numX, squre.numY, squre.posX, squre.posY, isAttack);
    }
}

function drawSelectedSquare(numX, numY, posX, posY, isAttack, completionHandler)
{
    contextSA.clearRect(posX, posY, squareSize, squareSize);
    contextSA.drawImage((isAttack ? selectedAttackSquareImage : selectedMoveSquareImage), posX, posY);

    if (completionHandler) completionHandler();
}

function drawSelectedAttackSquare(numX, numY, posX, posY)
{
    contextSA.clearRect(posX, posY, squareSize, squareSize);
    contextSA.drawImage((isBlackTurn() ? selectedAttackBlackImage : selectedAttackWhiteImage), posX, posY);
}







