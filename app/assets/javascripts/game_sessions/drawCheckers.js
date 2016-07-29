function drawChekers()
{
    function placeChecher(numX, numY, canvasImage)
    {
        var squareCoordinates = squaresCoordinates[numX][numY];

        contextCH.drawImage(canvasImage, squareCoordinates.posX, squareCoordinates.posY);
    }

    for (var y = 0; y < map.length; y++)
        for (var x = 0; x < map.length; x++)
        {
            switch (map[y][x])
            {
                case 1:
                    placeChecher(x, y, whiteCheckerManImage);
                    break;
                case 1.5:
                    placeChecher(x, y, whiteCheckerKingImage);
                    break;
                case 2:
                    placeChecher(x, y, blackCheckerManImage);
                    break;
                case 2.5:
                    placeChecher(x, y, blackCheckerKingImage);
                    break;
            }
        }
}