var whiteCheckerManImage = document.createElement('canvas');
var blackCheckerManImage = document.createElement('canvas');

var whiteCheckerKingImage = document.createElement('canvas');
var blackCheckerKingImage = document.createElement('canvas');

var highlightedCheckerImage = document.createElement('canvas');
var selectedCheckerWhiteImage = document.createElement('canvas');
var selectedCheckerBlackImage = document.createElement('canvas');

var highlightedMoveWhiteImage = document.createElement('canvas');
var highlightedMoveBlackImage = document.createElement('canvas');
var selectedMoveWhiteImage = document.createElement('canvas');
var selectedMoveBlackImage = document.createElement('canvas');

var highlightedAttackWhiteImage = document.createElement('canvas');
var highlightedAttackBlackImage = document.createElement('canvas');
var selectedAttackWhiteImage = document.createElement('canvas');
var selectedAttackBlackImage = document.createElement('canvas');

var highlightedMoveSquareImage = document.createElement('canvas');
var selectedMoveSquareImage = document.createElement('canvas');

var highlightedAttackSquareImage = document.createElement('canvas');
var selectedAttackSquareImage = document.createElement('canvas');

// ---------------------------------------------------------------------------------------------------------------------

function drawGlobalImages()
{
    function drawCheckers()
    {
        whiteCheckerManImage.width = squareSize;
        whiteCheckerManImage.height = squareSize;
        var whiteCheckerManContext = whiteCheckerManImage.getContext('2d');

        blackCheckerManImage.width = squareSize;
        blackCheckerManImage.height = squareSize;
        var blackCheckerManContext = blackCheckerManImage.getContext('2d');

        whiteCheckerKingImage.width = squareSize;
        whiteCheckerKingImage.height = squareSize;
        var whiteCheckerKingContext = whiteCheckerKingImage.getContext('2d');

        blackCheckerKingImage.width = squareSize;
        blackCheckerKingImage.height = squareSize;
        var blackCheckerKingContext = blackCheckerKingImage.getContext('2d');

        drawCheckerImage(whiteCheckerManContext, false, 0, 0, false, 1, 1);
        drawCheckerImage(blackCheckerManContext, false, 0, 0, true, 1, 1);
        drawCheckerImage(whiteCheckerKingContext, true, 0, 0, false, 1, 1);
        drawCheckerImage(blackCheckerKingContext, true, 0, 0, true, 1, 1);
    }

    // -----------------------------------------------------------------------------------------------------------------

    function drawSelectedAndHighlightedCheckers()
    {
        highlightedCheckerImage.width = squareSize;
        highlightedCheckerImage.height = squareSize;
        var highlightedCheckerContext = highlightedCheckerImage.getContext('2d');
        drawSelectedImage(highlightedCheckerContext, 0.75, false, 0, false, false, false);

        selectedCheckerWhiteImage.width = squareSize;
        selectedCheckerWhiteImage.height = squareSize;
        var selectedCheckerWhiteContext = selectedCheckerWhiteImage.getContext('2d');
        drawSelectedImage(selectedCheckerWhiteContext, 1, true, 1, false, false, true);

        selectedCheckerBlackImage.width = squareSize;
        selectedCheckerBlackImage.height = squareSize;
        var selectedCheckerBlackContext = selectedCheckerBlackImage.getContext('2d');
        drawSelectedImage(selectedCheckerBlackContext, 1, true, 1, true, false, true);
    }

    // -----------------------------------------------------------------------------------------------------------------

    function drawSelectedAndHighlightedMoves()
    {
        highlightedMoveWhiteImage.width = squareSize;
        highlightedMoveWhiteImage.height = squareSize;
        var highlightedMoveWhiteContext = highlightedMoveWhiteImage.getContext('2d');
        drawSelectedImage(highlightedMoveWhiteContext, 0.75, false, 0, false, false, true);

        highlightedMoveBlackImage.width = squareSize;
        highlightedMoveBlackImage.height = squareSize;
        var highlightedMoveBlackContext = highlightedMoveBlackImage.getContext('2d');
        drawSelectedImage(highlightedMoveBlackContext, 0.75, false, 0, true, false, true);

        selectedMoveWhiteImage.width = squareSize;
        selectedMoveWhiteImage.height = squareSize;
        var selectedMoveWhiteContext = selectedMoveWhiteImage.getContext('2d');
        drawSelectedImage(selectedMoveWhiteContext, 1, true, 1, false, false, true);

        selectedMoveBlackImage.width = squareSize;
        selectedMoveBlackImage.height = squareSize;
        var selectedMoveBlackContext = selectedMoveBlackImage.getContext('2d');
        drawSelectedImage(selectedMoveBlackContext, 1, true, 1, true, false, true);

        // -----------------------------------------------

        highlightedMoveSquareImage.width = squareSize;
        highlightedMoveSquareImage.height = squareSize;
        var highlightedAttackCheckerContext = highlightedMoveSquareImage.getContext('2d');
        drawSelectedImage(highlightedAttackCheckerContext, 0.75, false, 0, false, false, false);

        selectedMoveSquareImage.width = squareSize;
        selectedMoveSquareImage.height = squareSize;
        var selectedAttackCheckerContext = selectedMoveSquareImage.getContext('2d');
        drawSelectedImage(selectedAttackCheckerContext, 1, true, 1, false, false, false);
    }

    function drawSelectedAndHighlightedAttacks()
    {
        highlightedAttackWhiteImage.width = squareSize;
        highlightedAttackWhiteImage.height = squareSize;
        var highlightedAttackWhiteContext = highlightedAttackWhiteImage.getContext('2d');
        drawSelectedImage(highlightedAttackWhiteContext, 0.75, false, 0, false, true, true);

        highlightedAttackBlackImage.width = squareSize;
        highlightedAttackBlackImage.height = squareSize;
        var highlightedAttackBlackContext = highlightedAttackBlackImage.getContext('2d');
        drawSelectedImage(highlightedAttackBlackContext, 0.75, false, 0, true, true, true);

        selectedAttackWhiteImage.width = squareSize;
        selectedAttackWhiteImage.height = squareSize;
        var selectedAttackWhiteContext = selectedAttackWhiteImage.getContext('2d');
        drawSelectedImage(selectedAttackWhiteContext, 1, true, 1, false, true, true);

        selectedAttackBlackImage.width = squareSize;
        selectedAttackBlackImage.height = squareSize;
        var selectedAttackBlackContext = selectedAttackBlackImage.getContext('2d');
        drawSelectedImage(selectedAttackBlackContext, 1, true, 1, true, true, true);

        // -----------------------------------------------

        highlightedAttackSquareImage.width = squareSize;
        highlightedAttackSquareImage.height = squareSize;
        var highlightedAttackCheckerContext = highlightedAttackSquareImage.getContext('2d');
        drawSelectedImage(highlightedAttackCheckerContext, 0.75, false, 0, false, true, false);

        selectedAttackSquareImage.width = squareSize;
        selectedAttackSquareImage.height = squareSize;
        var selectedAttackCheckerContext = selectedAttackSquareImage.getContext('2d');
        drawSelectedImage(selectedAttackCheckerContext, 1, true, 1, false, true, false);
    }

    drawCheckers();
    drawSelectedAndHighlightedCheckers();
    drawSelectedAndHighlightedMoves();
    drawSelectedAndHighlightedAttacks();
}

// ---------------------------------------------------------------------------------------------------------------------

function drawCheckerImage(context, isKing, posX, posY, isBlack, scale, alpha)
{
    var centerX = posX + squareSize/2;
    var centerY = posY + squareSize/2;

    var k1 = 0.425;
    var k2 = 0.1;
    var k3 = 0.215;
    var k4 = 0.33;

    var lineWidth = Math.floor(size.out * 0.003);
    if (lineWidth < 2) lineWidth = 2;

    context.lineWidth = lineWidth;
    context.strokeStyle = colorWithAlpha((isBlack ? whiteColor : blackColor), alpha*0.15);
    context.fillStyle = colorWithAlpha((isBlack ? blackColor : whiteColor), alpha);
    context.shadowColor = colorWithAlpha('rgba(50, 50, 50, 1)', alpha*0.75);
    context.shadowBlur = border.shadowSize;

    context.beginPath();
    context.arc(centerX, centerY, squareSize * k1 * scale, 0, 2 * Math.PI);
    context.fill();
    context.closePath();

    context.shadowBlur = null;

    if (!isKing)
    {
        context.beginPath();
        context.arc(centerX, centerY, squareSize * k2 * scale, 0, 2 * Math.PI);
        context.stroke();
        context.closePath();

        context.beginPath();
        context.arc(centerX, centerY, squareSize * k3 * scale, 0, 2 * Math.PI);
        context.stroke();
        context.closePath();
    }

    context.beginPath();
    context.arc(centerX, centerY, squareSize * k4 * scale, 0, 2 * Math.PI);
    context.stroke();
    context.closePath();

    if (isKing)
    {
        context.fillStyle = colorWithAlpha((isBlack ? whiteColor : blackColor), alpha*0.3);

        var shiftXTop       = Math.floor(squareSize/4.5) * scale;
        var shiftXBottom    = Math.floor(squareSize/7) * scale;
        var shiftY          = Math.floor(squareSize/9) * scale;
        var yBottom         = centerY + Math.floor(squareSize/4.5) * scale;

        context.beginPath();
        context.moveTo(centerX-shiftXBottom, yBottom-shiftY);
        context.lineTo(centerX+shiftXBottom, yBottom-shiftY);
        context.lineTo(centerX+shiftXBottom, yBottom);
        context.lineTo(centerX-shiftXBottom, yBottom);
        context.lineTo(centerX-shiftXBottom, yBottom-shiftY);
        context.fill();
        context.closePath();

        var shiftBetween = lineWidth;
        yBottom = yBottom-shiftY-shiftBetween;

        context.beginPath();
        context.moveTo(centerX-shiftXBottom,    yBottom);
        context.lineTo(centerX+shiftXBottom,    yBottom);
        context.lineTo(centerX+shiftXTop,       yBottom-shiftY*2.2);
        context.lineTo(centerX+shiftXBottom/2,  yBottom-shiftY*1.1);
        context.lineTo(centerX,                 yBottom-shiftY*3.2);
        context.lineTo(centerX-shiftXBottom/2,  yBottom-shiftY*1.1);
        context.lineTo(centerX-shiftXTop,       yBottom-shiftY*2.2);
        context.lineTo(centerX-shiftXBottom,    yBottom-shiftBetween);
        context.fill();
        context.closePath();
    }
}

// ---------------------------------------------------------------------------------------------------------------------

// мигающие зеленым цветом круги
function drawSelectedCheckerAnimationImage(posX, posY, circlesAlpha)
{
    if (circlesAlpha > 0.5) circlesAlpha = 1 - circlesAlpha;

    var centerX = posX + squareSize/2;
    var centerY = posY + squareSize/2;

    var numX = Math.floor(posX / squareSize);
    var numY = Math.floor(posY / squareSize);

    var isCheckerKing = isKing(map[numY][numX]);

    contextCH.drawImage(imageForChecker(map[numY][numX]), posX, posY);

    if (circlesAlpha > 0)
    {
        var k1 = 0.1;
        var k2 = 0.215;
        var k3 = 0.33;

        var lineWidth = Math.floor(size.out * 0.003);
        if (lineWidth < 2) lineWidth = 2;

        var newGreenColor = (isBlackTurn() ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)');

        contextCH.shadowColor = colorWithAlpha(greenColor, circlesAlpha);
        contextCH.shadowBlur = border.shadowSize;
        contextCH.lineWidth = lineWidth;
        contextCH.strokeStyle = colorWithAlpha(newGreenColor, circlesAlpha);
        contextCH.fillStyle = colorWithAlpha(newGreenColor, circlesAlpha);

        if (!isCheckerKing)
        {
            contextCH.beginPath();
            contextCH.arc(centerX, centerY, squareSize * k1, 0, 2 * Math.PI);
            contextCH.stroke();
            contextCH.closePath();

            contextCH.beginPath();
            contextCH.arc(centerX, centerY, squareSize * k2, 0, 2 * Math.PI);
            contextCH.stroke();
            contextCH.closePath();
        }

        contextCH.beginPath();
        contextCH.arc(centerX, centerY, squareSize * k3, 0, 2 * Math.PI);
        contextCH.stroke();
        contextCH.closePath();

        if (isCheckerKing)
        {
            var shiftXTop = Math.floor(squareSize / 4.5);
            var shiftXBottom = Math.floor(squareSize / 7);
            var shiftY = Math.floor(squareSize / 9);
            var yBottom = centerY + Math.floor(squareSize / 4.5);

            contextCH.beginPath();
            contextCH.moveTo(centerX - shiftXBottom, yBottom - shiftY);
            contextCH.lineTo(centerX + shiftXBottom, yBottom - shiftY);
            contextCH.lineTo(centerX + shiftXBottom, yBottom);
            contextCH.lineTo(centerX - shiftXBottom, yBottom);
            contextCH.lineTo(centerX - shiftXBottom, yBottom - shiftY);
            contextCH.fill();
            contextCH.closePath();

            var shiftBetween = lineWidth;
            yBottom = yBottom - shiftY - shiftBetween;

            contextCH.beginPath();
            contextCH.moveTo(centerX - shiftXBottom, yBottom);
            contextCH.lineTo(centerX + shiftXBottom, yBottom);
            contextCH.lineTo(centerX + shiftXTop, yBottom - shiftY * 2.2);
            contextCH.lineTo(centerX + shiftXBottom / 2, yBottom - shiftY * 1.1);
            contextCH.lineTo(centerX, yBottom - shiftY * 3.2);
            contextCH.lineTo(centerX - shiftXBottom / 2, yBottom - shiftY * 1.1);
            contextCH.lineTo(centerX - shiftXTop, yBottom - shiftY * 2.2);
            contextCH.lineTo(centerX - shiftXBottom, yBottom - shiftBetween);
            contextCH.fill();
            contextCH.closePath();
        }

        contextCH.shadowBlur = null;
    }
}

// ---------------------------------------------------------------------------------------------------------------------

function drawSelectedImage(context, strokeAlpha, isFill, fillAlpha, isBlack, isAttack, isCircles)
{
    drawSelectedAnimationImageOnContext(context, 0, 0, strokeAlpha, isFill, fillAlpha, isCircles, 1, isBlack, isAttack);
}

function drawSelectedAnimationImage(posX, posY, strokeAlpha, isFill, fillAlpha, isCircles, circlesAlpha, isAttack)
{
    drawSelectedAnimationImageOnContext(contextSA, posX, posY, strokeAlpha, isFill, fillAlpha, isCircles, circlesAlpha, isBlackTurn(), isAttack)
}

function drawSelectedAnimationImageOnContext(context, posX, posY, strokeAlpha, isFill, fillAlpha, isCircles, circlesAlpha, isBlack, isAttack)
{
    var lineWidth = Math.floor(squareSize * 0.075 / 2);
    if (lineWidth < 2) lineWidth = 2;

    var rect =
    {
        x: posX + lineWidth / 2 + lineWidth / 4,
        y: posY + lineWidth / 2 + lineWidth / 4,
        x_center: posX + squareSize/2,
        y_center: posY + squareSize/2,
        width: squareSize - lineWidth - lineWidth / 2,
        height: squareSize - lineWidth - lineWidth / 2
    };

    context.lineWidth = lineWidth;

    if (isFill)
    {
        context.fillStyle = colorWithAlpha((isAttack ? redColor : greenColor), fillAlpha*0.4);
        context.fillRect(rect.x, rect.y, rect.width, rect.height);
    }

    context.strokeStyle = colorWithAlpha((isAttack ? redColor : greenColor), strokeAlpha);
    context.strokeRect(rect.x, rect.y, rect.width, rect.height);

    // -----------------------------------------------------

    if (isCircles) drawMoveCircles(context, posX, posY, circlesAlpha, isBlack);
}

// ---------------------------------------------------------------------------------------------------------------------

function drawMoveCircles(context, posX, posY, alpha, isBlack)
{
    var x_center = posX + squareSize/2;
    var y_center = posY + squareSize/2;

    var k1 = 0.2;
    var k2 = 0.25;

    context.fillStyle = colorWithAlpha((isBlack ? blackColor : whiteColor), alpha*0.35);

    context.beginPath();
    context.arc(x_center, y_center, squareSize * k1, 0, 2 * Math.PI);
    context.fill();
    context.closePath();

    context.lineWidth = squareSize*0.15/3;
    if (context.lineWidth < 2) context.lineWidth = 2;
    context.strokeStyle = colorWithAlpha((isBlack ? blackColor : whiteColor), alpha);

    context.beginPath();
    context.arc(x_center, y_center, squareSize * k2, 0, 2 * Math.PI);
    context.stroke();
    context.closePath();
}

// ---------------------------------------------------------------------------------------------------------------------

function drawLineWithCrossing(numX1, numY1, numX2, numY2, alpha, prevCrossing1, prevCrossing2)
{
    clearLine(numX1, numY1, numX2, numY2);

    var posX1 = numX1 * squareSize;
    var posY1 = numY1 * squareSize;
    var posX2 = numX2 * squareSize;
    var posY2 = numY2 * squareSize;

    var centerX1 = posX1 + squareSize/2;
    var centerY1 = posY1 + squareSize/2;
    var centerX2 = posX2 + squareSize/2;
    var centerY2 = posY2 + squareSize/2;

    var isXIncrease = (numX2 > numX1);
    var isYIncrease = (numY2 > numY1);

    contextSA2.lineWidth = 2;
    contextSA2.fillStyle = colorWithAlpha((isBlackTurn() ? blackColor : whiteColor), alpha*0.3);
    contextSA2.strokeStyle = colorWithAlpha((isBlackTurn() ? blackColor : whiteColor), alpha*0.3);

    var k1 = 0.15;
    var k2 = 0.4;
    var k3 = 0.3;

    contextSA2.beginPath();

    contextSA2.moveTo(centerX1 + (squareSize * k1 * (isXIncrease ? 1 : -1)), centerY1);

    contextSA2.lineTo(centerX1, centerY1 + (squareSize * k1 * (isYIncrease ? 1 : -1)));

    contextSA2.lineTo(centerX2 + (squareSize / 2 * (isXIncrease ? -1 : 1)) + (squareSize * k1 * (isXIncrease ? -1 : 1))/2,
            centerY2 + (squareSize / 2 * (isYIncrease ? -1 : 1)) + (squareSize * k1 * (isYIncrease ? 1 : -1))/2);

    contextSA2.lineTo(centerX2 + (squareSize * k2 * (isXIncrease ? -1 : 1))/2, centerY2 + (squareSize * k2 * (isYIncrease ? -1 : 1))/2);

    contextSA2.lineTo(centerX2 + (squareSize / 2 * (isXIncrease ? -1 : 1)) + (squareSize * k1 * (isXIncrease ? 1 : -1))/2,
            centerY2 + (squareSize / 2 * (isYIncrease ? -1 : 1)) + (squareSize * k1 * (isYIncrease ? -1 : 1))/2);

    contextSA2.lineTo(centerX1 + (squareSize * k1 * (isXIncrease ? 1 : -1)), centerY1);

    contextSA2.closePath();
    contextSA2.fill();

    // ---------------------------------------------------------

    contextSA2.globalCompositeOperation = 'destination-out';
    contextSA2.fillStyle = "black";

    contextSA2.beginPath();
    contextSA2.arc(posX1 + squareSize/2, posY1 + squareSize/2, squareSize * k3, 0, 2 * Math.PI);
    contextSA2.fill();
    contextSA2.closePath();

    contextSA2.beginPath();
    contextSA2.arc(posX2 + squareSize/2, posY2 + squareSize/2, squareSize * k3, 0, 2 * Math.PI);
    contextSA2.fill();
    contextSA2.closePath();

    contextSA2.globalCompositeOperation = 'destination-over';

    // ---------------------------------------------------------

    if (mapCrossing[numY1][numX1] != crossingType.empty)
    {
        drawCrossing(numX1, numY1, mapCrossing[numY1][numX1], alpha);

        if (prevCrossing1 && prevCrossing1 != crossingType.empty && mapCrossing[numY1][numX1] != prevCrossing1)
            drawCrossing(numX1, numY1, prevCrossing1, 1);
    }
    else drawCrossing(numX1, numY1, prevCrossing1, alpha);

    if (mapCrossing[numY2][numX2] != crossingType.empty)
    {
        if (prevCrossing2 && prevCrossing2 != crossingType.empty)
            drawCrossing(numX2, numY2, mapCrossing[numY2][numX2], 1);
        else
            drawCrossing(numX2, numY2, mapCrossing[numY2][numX2], alpha);
    }
    else drawCrossing(numX2, numY2, prevCrossing2, alpha);
}

function drawMoveLine(alpha)
{
    drawLineWithCrossing(selectedChecker.numX, selectedChecker.numY, selectedMoveSquare.numX, selectedMoveSquare.numY, alpha, null);
}

function clearLine(numX1, numY1, numX2, numY2)
{
    var posX1 = numX1 * squareSize;
    var posY1 = numY1 * squareSize;
    var posX2 = numX2 * squareSize;
    var posY2 = numY2 * squareSize;

    var lineWidth = squareSize*0.15;
    if (lineWidth < 2) lineWidth = 2;

    var k = 0.3;

    contextSA2.lineWidth = lineWidth*2;
    contextSA2.globalCompositeOperation = 'destination-out';
    contextSA2.strokeStyle = "black";

    contextSA2.beginPath();
    contextSA2.arc(posX1 + squareSize/2, posY1 + squareSize/2, squareSize * k, 0, 2 * Math.PI);
    contextSA2.fill();
    contextSA2.closePath();

    contextSA2.beginPath();
    contextSA2.moveTo(posX1 + squareSize/2, posY1 + squareSize/2);
    contextSA2.lineTo(posX2 + squareSize/2, posY2 + squareSize/2);
    contextSA2.stroke();
    contextSA2.closePath();

    contextSA2.beginPath();
    contextSA2.arc(posX2 + squareSize/2, posY2 + squareSize/2, squareSize * k, 0, 2 * Math.PI);
    contextSA2.fill();
    contextSA2.closePath();

    contextSA2.globalCompositeOperation = 'destination-over';
}

// ---------------------------------------------------------------------------------------------------------------------

function drawCrossing(numX, numY, type, alpha)
{
    var posX = numX * squareSize;
    var posY = numY * squareSize;

    var x_center = posX + squareSize/2;
    var y_center = posY + squareSize/2;

    var k = 0.25;

    contextSA2.lineWidth = squareSize*0.15/3/2;
    if (contextSA2.lineWidth < 2) contextSA2.lineWidth = 2;
    contextSA2.strokeStyle = colorWithAlpha((isBlackTurn() ? blackColor : whiteColor), alpha);

    contextSA2.beginPath();

    if (type == crossingType.slash)
    {
        contextSA2.moveTo(x_center + squareSize * k * 0.75, y_center - squareSize * k * 0.75);
        contextSA2.lineTo(x_center - squareSize * k * 0.75, y_center + squareSize * k * 0.75);
    }
    else if (type == crossingType.backSlash)
    {
        contextSA2.moveTo(x_center + squareSize * k * 0.75, y_center + squareSize * k * 0.75);
        contextSA2.lineTo(x_center - squareSize * k * 0.75, y_center - squareSize * k * 0.75);
    }
    else if (type == crossingType.left)
    {
        contextSA2.arc(x_center - squareSize * k * 1.2, y_center, squareSize * k * 0.9, 1.7*Math.PI , 0.3*Math.PI);
    }
    else if (type == crossingType.right)
    {
        contextSA2.arc(x_center + squareSize * k * 1.2, y_center, squareSize * k * 0.9, 0.7*Math.PI , 1.3*Math.PI);
    }
    else if (type == crossingType.top)
    {
        contextSA2.arc(x_center, y_center - squareSize * k * 1.2, squareSize * k * 0.9, 0.2*Math.PI , 0.8*Math.PI);
    }
    else if (type == crossingType.bottom)
    {
        contextSA2.arc(x_center, y_center + squareSize * k * 1.2, squareSize * k * 0.9, 1.2*Math.PI , 1.8*Math.PI);
    }
    else if (type == crossingType.cross)
    {
        contextSA2.moveTo(x_center + squareSize * k * 0.75, y_center - squareSize * k * 0.75);
        contextSA2.lineTo(x_center - squareSize * k * 0.75, y_center + squareSize * k * 0.75);
        contextSA2.stroke();
        contextSA2.closePath();
        contextSA2.beginPath();
        contextSA2.moveTo(x_center + squareSize * k * 0.75, y_center + squareSize * k * 0.75);
        contextSA2.lineTo(x_center - squareSize * k * 0.75, y_center - squareSize * k * 0.75);
    }
    else if (type == crossingType.leftRight)
    {
        contextSA2.arc(x_center + squareSize * k * 1.2, y_center, squareSize * k * 0.9, 0.7*Math.PI , 1.3*Math.PI);
        contextSA2.stroke();
        contextSA2.closePath();
        contextSA2.beginPath();
        contextSA2.arc(x_center - squareSize * k * 1.2, y_center, squareSize * k * 0.9, 1.7*Math.PI , 0.3*Math.PI);
    }
    else if (type == crossingType.topBottom)
    {
        contextSA2.arc(x_center, y_center - squareSize * k * 1.2, squareSize * k * 0.9, 0.2*Math.PI , 0.8*Math.PI);
        contextSA2.stroke();
        contextSA2.closePath();
        contextSA2.beginPath();
        contextSA2.arc(x_center, y_center + squareSize * k * 1.2, squareSize * k * 0.9, 1.2*Math.PI , 1.8*Math.PI);
    }

    contextSA2.stroke();
    contextSA2.closePath();
}

function clearCircleInSquare(numX, numY)
{
    var posX = numX * squareSize;
    var posY = numY * squareSize;

    var lineWidth = squareSize*0.15;
    if (lineWidth < 2) lineWidth = 2;

    var k = 0.3;

    contextSA2.lineWidth = lineWidth*2;
    contextSA2.globalCompositeOperation = 'destination-out';
    contextSA2.strokeStyle = "black";

    contextSA2.beginPath();
    contextSA2.arc(posX + squareSize/2, posY + squareSize/2, squareSize * k, 0, 2 * Math.PI);
    contextSA2.fill();
    contextSA2.closePath();

    contextSA2.globalCompositeOperation = 'destination-over';
}

function drawKingImageOnChecker(posX, posY, alpha)
{
    var centerX = posX + squareSize/2;
    var centerY = posY + squareSize/2;

    if (alpha > 0)
    {
        var k1 = 0.4;
        var k2 = 0.33;

        var lineWidth = Math.floor(size.out * 0.003);
        if (lineWidth < 2) lineWidth = 2;

        contextCH.lineWidth = lineWidth;
        contextCH.strokeStyle = colorWithAlpha((isBlackTurn() ? whiteColor : blackColor), alpha*0.15);
        contextCH.fillStyle = colorWithAlpha((isBlackTurn() ? blackColor : whiteColor), alpha);

        contextCH.beginPath();
        contextCH.arc(centerX, centerY, squareSize * k1, 0, 2 * Math.PI);
        contextCH.fill();
        contextCH.closePath();

        contextCH.beginPath();
        contextCH.arc(centerX, centerY, squareSize * k2, 0, 2 * Math.PI);
        contextCH.stroke();
        contextCH.closePath();

        contextCH.fillStyle = colorWithAlpha((isBlackTurn() ? whiteColor : blackColor), alpha*0.3);

        var shiftXTop = Math.floor(squareSize / 4.5);
        var shiftXBottom = Math.floor(squareSize / 7);
        var shiftY = Math.floor(squareSize / 9);
        var yBottom = centerY + Math.floor(squareSize / 4.5);

        contextCH.beginPath();
        contextCH.moveTo(centerX - shiftXBottom, yBottom - shiftY);
        contextCH.lineTo(centerX + shiftXBottom, yBottom - shiftY);
        contextCH.lineTo(centerX + shiftXBottom, yBottom);
        contextCH.lineTo(centerX - shiftXBottom, yBottom);
        contextCH.lineTo(centerX - shiftXBottom, yBottom - shiftY);
        contextCH.fill();
        contextCH.closePath();

        var shiftBetween = lineWidth;
        yBottom = yBottom - shiftY - shiftBetween;

        contextCH.beginPath();
        contextCH.moveTo(centerX - shiftXBottom, yBottom);
        contextCH.lineTo(centerX + shiftXBottom, yBottom);
        contextCH.lineTo(centerX + shiftXTop, yBottom - shiftY * 2.2);
        contextCH.lineTo(centerX + shiftXBottom / 2, yBottom - shiftY * 1.1);
        contextCH.lineTo(centerX, yBottom - shiftY * 3.2);
        contextCH.lineTo(centerX - shiftXBottom / 2, yBottom - shiftY * 1.1);
        contextCH.lineTo(centerX - shiftXTop, yBottom - shiftY * 2.2);
        contextCH.lineTo(centerX - shiftXBottom, yBottom - shiftBetween);
        contextCH.fill();
        contextCH.closePath();
    }
}




