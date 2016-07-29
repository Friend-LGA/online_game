// функция для перерисовки выделений после ресайза
function drawSelectedCheckerAndSquares()
{
    var i, j; // для циклов

    if (selectedChecker)
    {
        selectedChecker.posX = squareSize * selectedChecker.numX;
        selectedChecker.posY = squareSize * selectedChecker.numY;
        contextSA.drawImage((isBlackTurn() ? selectedCheckerBlackImage : selectedCheckerWhiteImage), selectedChecker.posX, selectedChecker.posY);
    }

    if (selectedMoveSquare)
    {
        selectedMoveSquare.posX = squareSize * selectedMoveSquare.numX;
        selectedMoveSquare.posY = squareSize * selectedMoveSquare.numY;
        contextSA.drawImage((isBlackTurn() ? selectedMoveBlackImage : selectedMoveWhiteImage), selectedMoveSquare.posX, selectedMoveSquare.posY);

        if (selectedSquaresInLine.length)
            for (j=0; j<selectedSquaresInLine[0].length; j++)
            {
                selectedSquaresInLine[0][j].posX = squareSize * selectedSquaresInLine[0][j].numX;
                selectedSquaresInLine[0][j].posY = squareSize * selectedSquaresInLine[0][j].numY;
                contextSA.drawImage(selectedAttackSquareImage, selectedSquaresInLine[0][j].posX, selectedSquaresInLine[0][j].posY);
            }

        drawMoveLine(1);
    }

    if (selectedAttackSquares.length)
    {
        for (i=0; i<selectedAttackSquares.length; i++)
        {
            selectedAttackSquares[i].posX = squareSize * selectedAttackSquares[i].numX;
            selectedAttackSquares[i].posY = squareSize * selectedAttackSquares[i].numY;

            contextSA.clearRect(selectedAttackSquares[i].posX, selectedAttackSquares[i].posY, squareSize, squareSize);
            contextSA.drawImage((isBlackTurn() ? selectedAttackBlackImage : selectedAttackWhiteImage), selectedAttackSquares[i].posX, selectedAttackSquares[i].posY);

            for (j=0; j<selectedSquaresInLine[i].length; j++)
            {
                selectedSquaresInLine[i][j].posX = squareSize * selectedSquaresInLine[i][j].numX;
                selectedSquaresInLine[i][j].posY = squareSize * selectedSquaresInLine[i][j].numY;
                contextSA.drawImage(selectedAttackSquareImage, selectedSquaresInLine[i][j].posX, selectedSquaresInLine[i][j].posY);
            }

            var previousAttackSquare = (i == 0 ? selectedChecker : selectedAttackSquares[i-1]);
            var previousCrossingType1 = mapCrossing[previousAttackSquare.numY][previousAttackSquare.numX];
            var previousCrossingType2 = mapCrossing[selectedAttackSquares[i].numY][selectedAttackSquares[i].numX];

            drawLineWithCrossing(previousAttackSquare.numX, previousAttackSquare.numY, selectedAttackSquares[i].numX, selectedAttackSquares[i].numY, 1, previousCrossingType1, previousCrossingType2);
        }
    }
}

// ---------------------------------------------------------------------------------------------------------------------

function makeMaps(numX, numY)
{
    findMovableSquaresFromSquare(numX, numY);
    findAttackableSquaresFromSquare(numX, numY, 0);
    mapCrossing = getEmptyMapOfNumbers();
}

function findMovableSquaresFromSquare(numX, numY)
{
    mapMoveable = getEmptyMapOfNumbers();

    var isCheckerMan = isMan(map[selectedChecker.numY][selectedChecker.numX]);

    if (isCheckerMan ? canManMoveBack : canKingMoveBack) checkMovableSquare(numX, numY, 1);
    if (isCheckerMan ? canManMoveBack : canKingMoveBack) checkMovableSquare(numX, numY, 2);
    checkMovableSquare(numX, numY, 3);
    checkMovableSquare(numX, numY, 4);
}

function checkMovableSquare(numX1, numY1, direction)
{
    var moveLength = (isMan(map[selectedChecker.numY][selectedChecker.numX]) ? manMoveLength : kingMoveLength);

    for (var i=1; i<=moveLength; i++)
    {
        var numX2, numY2;
        if (direction == 1) { numY2 = numY1 + i; numX2 = numX1 + i; }
        else if (direction == 2) { numY2 = numY1 + i; numX2 = numX1 - i; }
        else if (direction == 3) { numY2 = numY1 - i; numX2 = numX1 + i; }
        else if (direction == 4) { numY2 = numY1 - i; numX2 = numX1 - i; }

        if (numY2 < map.length && numY2 >= 0 && numX2 < map.length && numX2 >= 0 && map[numY2][numX2] == checkerType.empty) mapMoveable[numY2][numX2] = 1;
        else break;
    }
}

function findAttackableSquaresFromSquare(numX, numY, number)
{
    mapAttackableCheckers = getEmptyMapOfNumbers();
    mapAttackableSquares = getEmptyMapOfNumbers();

    if (number > 0) mapAttackableSquares[numY][numX] = number;

    var isCheckerMan = isMan(map[selectedChecker.numY][selectedChecker.numX]);

    if (isCheckerMan ? canManAttackBack : canKingAttackBack) checkAttackableSquare(numX, numY, number, 1);
    if (isCheckerMan ? canManAttackBack : canKingAttackBack) checkAttackableSquare(numX, numY, number, 2);
    checkAttackableSquare(numX, numY, number, 3);
    checkAttackableSquare(numX, numY, number, 4);
}

function checkAttackableSquare(numX1, numY1, number, direction)
{
    var moveLength;

    if (isMan(map[selectedChecker.numY][selectedChecker.numX]))
    {
        if (becameKing) moveLength = kingMoveLength;
        else if (becomeKingImmediately && ((isWhiteTurn() && numY1 == 0) || (isBlackTurn() && numY1 == map.length - 1)))
        {
            becameKing = true;
            moveLength = kingMoveLength;
        }
        else moveLength = manMoveLength;
    }
    else moveLength = kingMoveLength;

    for (var i=1; i<=moveLength; i++)
    {
        var numX2, numY2;
        if (direction == 1) { numY2 = numY1 + i; numX2 = numX1 + i; }
        else if (direction == 2) { numY2 = numY1 + i; numX2 = numX1 - i; }
        else if (direction == 3) { numY2 = numY1 - i; numX2 = numX1 + i; }
        else if (direction == 4) { numY2 = numY1 - i; numX2 = numX1 - i; }

        if (numY2 < map.length && numY2 >= 0 && numX2 < map.length && numX2 >= 0)
        {
            if (isEnemyChecker(map[numY2][numX2]) && !isSelectedAttackCheckersContains(numX2, numY2))
            {
                var isAttackable = false;

                for (var j=i+1; j<=moveLength+1; j++)
                {
                    var numX3, numY3;
                    if (direction == 1) { numY3 = numY1 + j; numX3 = numX1 + j; }
                    else if (direction == 2) { numY3 = numY1 + j; numX3 = numX1 - j; }
                    else if (direction == 3) { numY3 = numY1 - j; numX3 = numX1 + j; }
                    else if (direction == 4) { numY3 = numY1 - j; numX3 = numX1 - j; }

                    if (numY3 < map.length && numY3 >= 0 && numX3 < map.length && numX3 >= 0 &&
                        (map[numY3][numX3] == checkerType.empty || (selectedChecker.numY == numY3 && selectedChecker.numX == numX3)))
                    {
                        mapAttackableSquares[numY3][numX3] = number + 1;

                        isAttackable = true;
                    }
                    else break;
                }

                if (isAttackable) mapAttackableCheckers[numY2][numX2] = number + 1;

                break;
            }
        }
        else break;
    }
}

function isSelectedAttackSquaresContains(numX, numY)
{
    for (var i=0; i<selectedAttackSquares.length; i++)
        if (selectedAttackSquares[i].numX == numX && selectedAttackSquares[i].numY == numY)
            return true;

    return false;
}

function isSelectedAttackCheckersContains(numX, numY)
{
    for (var i=0; i<selectedAttackCheckers.length; i++)
        if (selectedAttackCheckers[i].numX == numX && selectedAttackCheckers[i].numY == numY)
            return true;

    return false;
}

function isSelectedSquaresInLineContains(numX, numY)
{
    for (var i=0; i<selectedSquaresInLine.length; i++)
        for (var j=0; j<selectedSquaresInLine[i].length; j++)
            if (selectedSquaresInLine[i][j].numX == numX && selectedSquaresInLine[i][j].numY == numY)
                return true;

    return false;
}

function isSelectedAttackCheckersContainsAnyOf(array)
{
    for (var i=0; i<selectedAttackCheckers.length; i++)
        for (var j=0; j<array.length; j++)
            if (selectedAttackCheckers[i].numX == array[j].numX && selectedAttackCheckers[i].numY == array[j].numY)
                return true;

    return false;
}

function findAttackableCheckerInSquares(arrayOfSquares)
{
    for (var i=0; i<arrayOfSquares.length; i++)
        if (mapAttackableCheckers[arrayOfSquares[i].numY][arrayOfSquares[i].numX])
            return arrayOfSquares[i];

    return null;
}

function getSquresInLine(numX1, numY1, numX2, numY2)
{
    var array = [];

    for ( ; ; )
    {
        if (numX2 > numX1) numX1++;
        else numX1--;

        if (numY2 > numY1) numY1++;
        else numY1--;

        if (numX1 != numX2 && numY1 != numY2)
        {
            var posX = numX1 * squareSize;
            var posY = numY1 * squareSize;

            array.push({numX:numX1, numY:numY1, posX:posX, posY:posY});
        }
        else break;
    }

    return array;
}

function getEmptyMapOfNumbers()
{
    return [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ];
}








