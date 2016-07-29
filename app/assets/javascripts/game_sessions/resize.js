function resize()
{
    var gameDiv = $('#gameDiv');
    var canvases = $('#canvases');



    size.out = gameDiv.width();

    var borderMultiplier = (isBordered ? 0.05 : 0.003);
    border.width = Math.floor(size.out*borderMultiplier);
    if (border.width < 2) border.width = 2;

    border.shadowSize = Math.floor(size.out*0.015);

    squareSize = Math.floor((size.out - border.width*2) / map.length);
    size.in = squareSize * map.length;
    size.out = size.in + border.width*2;

    // -------------------------------------------------------------

    canvases.width(size.out);
    canvases.height(size.out);

    canvases = document.getElementById('canvases');

    canvases.style.boxShadow = '0 0 ' + border.shadowSize + 'px 0 rgba(50, 50, 50, 0.75)';
    canvases.style.mozBoxShadow = '0 0 ' + border.shadowSize + 'px 0 rgba(50, 50, 50, 0.75)';
    canvases.style.webkitBoxShadow = '0 0 ' + border.shadowSize + 'px 0 rgba(50, 50, 50, 0.75)';

    // -------------------------------------------------------------

    canvasGB.width = size.out;
    canvasGB.height = size.out;

    canvasSA.width = size.in;
    canvasSA.height = size.in;
    canvasSA.style.top = border.width+"px";
    canvasSA.style.left = border.width+"px";

    canvasSA2.width = size.in;
    canvasSA2.height = size.in;
    canvasSA2.style.top = border.width+"px";
    canvasSA2.style.left = border.width+"px";

    canvasCH.width = size.in;
    canvasCH.height = size.in;
    canvasCH.style.top = border.width+"px";
    canvasCH.style.left = border.width+"px";

    canvasCH2.width = size.in;
    canvasCH2.height = size.in;
    canvasCH2.style.top = border.width+"px";
    canvasCH2.style.left = border.width+"px";

    squaresCoordinates = makeCoordinatesMap();

    drawGlobalImages();
    drawGameBoard();
    drawChekers();

    drawSelectedCheckerAndSquares();
}

function makeCoordinatesMap()
{
    function getSquareCoordinatesAtNumber(numX, numY)
    {
        var posX = squareSize*numX;
        var posY = squareSize*numY;

        return {posX:posX, posY:posY, numX:numX, numY:numY};
    }

    var coordinates = [];
    for (var y = 0; y < map.length; y++)
    {
        var coordinates_ = [];

        for (var x = 0; x < map.length; x++)
            coordinates_.push(getSquareCoordinatesAtNumber(y, x));

        coordinates.push(coordinates_);
    }

    return coordinates;
}
