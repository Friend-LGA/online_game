function getSquareAnimationParametersAndStop(numX, numY)
{
    if (squareAnimationsArray[numY][numX].animation)
    {
        var borderAlpha = squareAnimationsArray[numY][numX].borderAlpha;
        var fillAlpha = squareAnimationsArray[numY][numX].fillAlpha;
        var circlesAlpha = squareAnimationsArray[numY][numX].circlesAlpha;
        animationFrameSelectableCanvas.cancel(squareAnimationsArray[numY][numX].animationRequest);
        squareAnimationsArray[numY][numX] = 0;

        return [borderAlpha, fillAlpha, circlesAlpha];
    }
    else return null;
}

// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

function drawHighlightedCheckerAnimation(squareCoordinates, borderAlpha, fillAlpha, circlesAlpha)
{
    var animationName = 'highlightedCheckerFadeIn';

    var startBorderAlpha = 0;
    var startFillAlpha = 0;
    var startCirclesAlpha = 0;

    var finalBorderAlpha = 0.75;
    var finalFillAlpha = 0;
    var finalCirclesAlpha = 0;

    squareAnimation(squareCoordinates, animationName, false,
        borderAlpha, startBorderAlpha, finalBorderAlpha,
        true, fillAlpha, startFillAlpha, finalFillAlpha,
        true, circlesAlpha, startCirclesAlpha, finalCirclesAlpha);
}

function drawHighlightedAfterSelectedCheckerAnimation(squareCoordinates, borderAlpha, fillAlpha, circlesAlpha)
{
    var animationName = 'highlightedCheckerFadeInAfterSelected';

    var startBorderAlpha = 1;
    var startFillAlpha = 1;
    var startCirclesAlpha = 1;

    var finalBorderAlpha = 0.75;
    var finalFillAlpha = 0;
    var finalCirclesAlpha = 0;

    squareAnimation(squareCoordinates, animationName, false,
        borderAlpha, startBorderAlpha, finalBorderAlpha,
        true, fillAlpha, startFillAlpha, finalFillAlpha,
        true, circlesAlpha, startCirclesAlpha, finalCirclesAlpha);
}

function clearHighlightedCheckerAnimation(squareCoordinates, borderAlpha, fillAlpha, circlesAlpha)
{
    var animationName = 'highlightedCheckerFadeOut';

    var startBorderAlpha = 0.75;
    var startFillAlpha = 0;
    var startCirclesAlpha = 0;
    
    var finalBorderAlpha = 0;
    var finalFillAlpha = 0;
    var finalCirclesAlpha = 0;

    squareAnimation(squareCoordinates, animationName, false,
        borderAlpha, startBorderAlpha, finalBorderAlpha,
        true, fillAlpha, startFillAlpha, finalFillAlpha,
        true, circlesAlpha, startCirclesAlpha, finalCirclesAlpha);
}

// ---------------------------------------------------------------------------------------------------------------------

function drawSelectedCheckerAnimation(squareCoordinates, borderAlpha, fillAlpha, circlesAlpha)
{
    var animationName = 'selectedCheckerFadeIn';

    var startBorderAlpha = 0.75;
    var startFillAlpha = 0;
    var startCirclesAlpha = 0;

    var finalBorderAlpha = 1;
    var finalFillAlpha = 1;
    var finalCirclesAlpha = 1;

    squareAnimation(squareCoordinates, animationName, false,
        borderAlpha, startBorderAlpha, finalBorderAlpha,
        true, fillAlpha, startFillAlpha, finalFillAlpha,
        true, circlesAlpha, startCirclesAlpha, finalCirclesAlpha);
}

function clearSelectedCheckerAnimation(squareCoordinates, borderAlpha, fillAlpha, circlesAlpha)
{
    var animationName = 'selectedCheckerFadeOut';

    var startBorderAlpha = 1;
    var startFillAlpha = 1;
    var startCirclesAlpha = 1;

    var finalBorderAlpha = 0;
    var finalFillAlpha = 0;
    var finalCirclesAlpha = 0;

    squareAnimation(squareCoordinates, animationName, false,
        borderAlpha, startBorderAlpha, finalBorderAlpha,
        true, fillAlpha, startFillAlpha, finalFillAlpha,
        true, circlesAlpha, startCirclesAlpha, finalCirclesAlpha);
}

// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

function drawHighlightedMoveAnimation(squareCoordinates, borderAlpha, fillAlpha, circlesAlpha)
{
    var animationName = 'highlightedMoveFadeIn';

    var startBorderAlpha = 0;
    var startFillAlpha = 0;
    var startCirclesAlpha = 0;

    var finalBorderAlpha = 0.75;
    var finalFillAlpha = 0;
    var finalCirclesAlpha = 1;

    squareAnimation(squareCoordinates, animationName, false,
        borderAlpha, startBorderAlpha, finalBorderAlpha,
        true, fillAlpha, startFillAlpha, finalFillAlpha,
        true, circlesAlpha, startCirclesAlpha, finalCirclesAlpha);
}

function clearHighlightedMoveAnimation(squareCoordinates, borderAlpha, fillAlpha, circlesAlpha)
{
    var animationName = 'highlightedMoveFadeOut';

    var startBorderAlpha = 0.75;
    var startFillAlpha = 0;
    var startCirclesAlpha = 1;

    var finalBorderAlpha = 0;
    var finalFillAlpha = 0;
    var finalCirclesAlpha = 0;

    squareAnimation(squareCoordinates, animationName, false,
        borderAlpha, startBorderAlpha, finalBorderAlpha,
        true, fillAlpha, startFillAlpha, finalFillAlpha,
        true, circlesAlpha, startCirclesAlpha, finalCirclesAlpha);
}

// ---------------------------------------------------------------------------------------------------------------------

function drawSelectedMoveAnimation(squareCoordinates, borderAlpha, fillAlpha, circlesAlpha)
{
    var animationName = 'selectedMoveFadeIn';

    var startBorderAlpha = 0.75;
    var startFillAlpha = 0;
    var startCirclesAlpha = 1;

    var finalBorderAlpha = 1;
    var finalFillAlpha = 1;
    var finalCirclesAlpha = 1;

    squareAnimation(squareCoordinates, animationName, false,
        borderAlpha, startBorderAlpha, finalBorderAlpha,
        true, fillAlpha, startFillAlpha, finalFillAlpha,
        true, circlesAlpha, startCirclesAlpha, finalCirclesAlpha);
}

function clearSelectedMoveAnimation(squareCoordinates, borderAlpha, fillAlpha, circlesAlpha, completionHandler)
{
    var animationName = 'selectedMoveFadeOut';

    var startBorderAlpha = 1;
    var startFillAlpha = 1;
    var startCirclesAlpha = 1;

    var finalBorderAlpha = 0;
    var finalFillAlpha = 0;
    var finalCirclesAlpha = 0;

    squareAnimation(squareCoordinates, animationName, false,
        borderAlpha, startBorderAlpha, finalBorderAlpha,
        true, fillAlpha, startFillAlpha, finalFillAlpha,
        true, circlesAlpha, startCirclesAlpha, finalCirclesAlpha,
        (completionHandler ? function() { completionHandler(); } : null));
}

// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

function drawHighlightedAttackAnimation(squareCoordinates, borderAlpha, fillAlpha, circlesAlpha, completionHandler)
{
    var animationName = 'highlightedAttackFadeIn';

    var startBorderAlpha = 0;
    var startFillAlpha = 0;
    var startCirclesAlpha = 0;

    var finalBorderAlpha = 0.75;
    var finalFillAlpha = 0;
    var finalCirclesAlpha = 1;

    squareAnimation(squareCoordinates, animationName, true,
        borderAlpha, startBorderAlpha, finalBorderAlpha,
        true, fillAlpha, startFillAlpha, finalFillAlpha,
        true, circlesAlpha, startCirclesAlpha, finalCirclesAlpha,
        (completionHandler ? function() { completionHandler(); } : null));
}

function drawHighlightedAttackSquareAnimation(squareCoordinates, borderAlpha, fillAlpha, circlesAlpha)
{
    var animationName = 'highlightedAttackSquareFadeIn';

    var startBorderAlpha = 1;
    var startFillAlpha = 1;
    var startCirclesAlpha = 1;

    var finalBorderAlpha = 0.75;
    var finalFillAlpha = 0;
    var finalCirclesAlpha = 1;

    squareAnimation(squareCoordinates, animationName, true,
        borderAlpha, startBorderAlpha, finalBorderAlpha,
        true, fillAlpha, startFillAlpha, finalFillAlpha,
        true, circlesAlpha, startCirclesAlpha, finalCirclesAlpha);
}

function clearHighlightedAttackAnimation(squareCoordinates, borderAlpha, fillAlpha, circlesAlpha)
{
    var animationName = 'highlightedAttackFadeOut';

    var startBorderAlpha = 0.75;
    var startFillAlpha = 0;
    var startCirclesAlpha = 1;

    var finalBorderAlpha = 0;
    var finalFillAlpha = 0;
    var finalCirclesAlpha = 0;

    squareAnimation(squareCoordinates, animationName, true,
        borderAlpha, startBorderAlpha, finalBorderAlpha,
        true, fillAlpha, startFillAlpha, finalFillAlpha,
        true, circlesAlpha, startCirclesAlpha, finalCirclesAlpha);
}

// ---------------------------------------------------------------------------------------------------------------------

function drawSelectedAttackAnimation(squareCoordinates, borderAlpha, fillAlpha, circlesAlpha)
{
    var animationName = 'selectedAttackFadeIn';

    var startBorderAlpha = 0.75;
    var startFillAlpha = 0;
    var startCirclesAlpha = 1;

    var finalBorderAlpha = 1;
    var finalFillAlpha = 1;
    var finalCirclesAlpha = 1;

    squareAnimation(squareCoordinates, animationName, true,
        borderAlpha, startBorderAlpha, finalBorderAlpha,
        true, fillAlpha, startFillAlpha, finalFillAlpha,
        true, circlesAlpha, startCirclesAlpha, finalCirclesAlpha);
}

function clearSelectedAttackSquaresAnimation(squareCoordinates, borderAlpha, fillAlpha, circlesAlpha, completionHandler)
{
    var animationName = 'selectedAttackFadeOut';

    var startBorderAlpha = 1;
    var startFillAlpha = 1;
    var startCirclesAlpha = 1;

    var finalBorderAlpha = 0;
    var finalFillAlpha = 0;
    var finalCirclesAlpha = 0;

    squareAnimation(squareCoordinates, animationName, true,
        borderAlpha, startBorderAlpha, finalBorderAlpha,
        true, fillAlpha, startFillAlpha, finalFillAlpha,
        true, circlesAlpha, startCirclesAlpha, finalCirclesAlpha,
        (completionHandler ? function() { completionHandler(); } : null));
}

// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

function drawHighlightedSquareAnimation(squareCoordinates, borderAlpha, fillAlpha, circlesAlpha, isAttack)
{
    var animationName = 'highlightedSquareFadeIn';

    var startBorderAlpha = 0;
    var startFillAlpha = 0;
    var startCirclesAlpha = 0;

    var finalBorderAlpha = 0.75;
    var finalFillAlpha = 0;
    var finalCirclesAlpha = 0;

    squareAnimation(squareCoordinates, animationName, isAttack,
        borderAlpha, startBorderAlpha, finalBorderAlpha,
        true, fillAlpha, startFillAlpha, finalFillAlpha,
        true, circlesAlpha, startCirclesAlpha, finalCirclesAlpha);
}

function clearHighlightedSquareAnimation(squareCoordinates, borderAlpha, fillAlpha, circlesAlpha, isAttack)
{
    var animationName = 'highlightedSquareFadeOut';

    var startBorderAlpha = 0.75;
    var startFillAlpha = 0;
    var startCirclesAlpha = 0;

    var finalBorderAlpha = 0;
    var finalFillAlpha = 0;
    var finalCirclesAlpha = 0;

    squareAnimation(squareCoordinates, animationName, isAttack,
        borderAlpha, startBorderAlpha, finalBorderAlpha,
        true, fillAlpha, startFillAlpha, finalFillAlpha,
        true, circlesAlpha, startCirclesAlpha, finalCirclesAlpha);
}

// ---------------------------------------------------------------------------------------------------------------------

function drawSelectedSquareAnimation(squareCoordinates, borderAlpha, fillAlpha, circlesAlpha, isAttack, completionHandler)
{
    var animationName = 'selectedSquareFadeIn';

    var startBorderAlpha = 0.75;
    var startFillAlpha = 0;
    var startCirclesAlpha = 0;

    var finalBorderAlpha = 1;
    var finalFillAlpha = 1;
    var finalCirclesAlpha = 0;

    squareAnimation(squareCoordinates, animationName, isAttack,
        borderAlpha, startBorderAlpha, finalBorderAlpha,
        true, fillAlpha, startFillAlpha, finalFillAlpha,
        true, circlesAlpha, startCirclesAlpha, finalCirclesAlpha,
        (completionHandler ? function() { completionHandler(); } : null));
}

function clearSelectedSquareAnimation(squareCoordinates, borderAlpha, fillAlpha, circlesAlpha, isAttack)
{
    var animationName = 'selectedSquareFadeOut';

    var startBorderAlpha = 1;
    var startFillAlpha = 1;
    var startCirclesAlpha = 0;

    var finalBorderAlpha = 0;
    var finalFillAlpha = 0;
    var finalCirclesAlpha = 0;

    squareAnimation(squareCoordinates, animationName, isAttack,
        borderAlpha, startBorderAlpha, finalBorderAlpha,
        true, fillAlpha, startFillAlpha, finalFillAlpha,
        true, circlesAlpha, startCirclesAlpha, finalCirclesAlpha);
}

// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

function drawLineAnimation(numX1, numY1, numX2, numY2, numX_clear, numY_clear, alpha, prevCrossing1, prevCrossing2)
{
    var animationName = 'lineFadeIn';

    var startAlpha = 0;
    
    var finalAlpha = 1;

    var stepAlphaChange = 0.15 * animationSpeed;

    var alphaChange = (finalAlpha - startAlpha) * stepAlphaChange;

    if (!alpha) alpha = startAlpha;

    lineAnimation(animationName,
        numX1, numY1, numX2, numY2, numX_clear, numY_clear,
        alpha, finalAlpha, alphaChange, prevCrossing1, prevCrossing2);
}

function clearLineAnimation(numX1, numY1, numX2, numY2, alpha, prevCrossing1, prevCrossing2, completionHandler)
{
    var animationName = 'lineFadeOut';

    var startAlpha = 1;

    var finalAlpha = 0;

    var stepAlphaChange = 0.15 * animationSpeed;

    var alphaChange = (finalAlpha - startAlpha) * stepAlphaChange;

    if (!alpha) alpha = startAlpha;

    lineAnimation(animationName,
        numX1, numY1, numX2, numY2, null, null,
        alpha, finalAlpha, alphaChange, prevCrossing1, prevCrossing2,
        (completionHandler ? function() { completionHandler(); } : null));
}

// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

function lineAnimation(animationName,
                       numX1, numY1, numX2, numY2, numX_clear, numY_clear,
                       alpha, finalAlpha, alphaChange, prevCrossing1, prevCrossing2,
                       completionHandler)
{
    var key = ""+numX1+numY1+numX2+numY2+"";

    var newAlpha = alpha;

    function animationStep()
    {
        if (lineAnimations[key] && lineAnimations[key].animationRequest && lineAnimations[key].animation == animationName)
        {
            if (newAlpha != finalAlpha)
            {
                newAlpha += alphaChange;
                if ((alphaChange > 0 && newAlpha > finalAlpha-0.01) ||
                    (alphaChange < 0 && newAlpha < finalAlpha+0.01))
                    newAlpha = finalAlpha;

                if (newAlpha != finalAlpha)
                {
                    clearLine(numX1, numY1, numX2, numY2);
                    drawLineWithCrossing(numX1, numY1, numX2, numY2, newAlpha, prevCrossing1, prevCrossing2);

                    if (numX_clear && numY_clear)
                    {
                        clearCircleInSquare(numX_clear, numY_clear);
                        drawCrossing(numX_clear, numY_clear, mapCrossing[numY_clear][numX_clear], 1);
                    }

                    lineAnimations[key].alpha = newAlpha;

                    animationFrameSelectableCanvas.request(animationStep);
                }
                else
                {
                    animationFrameSelectableCanvas.cancel(animationRequest);
                    lineAnimations[key][animationRequest] = null;
                    //lineAnimations[key] = null;

                    clearLine(numX1, numY1, numX2, numY2);
                    drawLineWithCrossing(numX1, numY1, numX2, numY2, finalAlpha, prevCrossing1, prevCrossing2);

                    if (numX_clear && numY_clear)
                    {
                        clearCircleInSquare(numX_clear, numY_clear);
                        drawCrossing(numX_clear, numY_clear, mapCrossing[numY_clear][numX_clear], 1);
                    }

                    lineAnimations[key].alpha = finalAlpha;

                    if (completionHandler) completionHandler();
                }
            }
        }
        else clearLine(numX1, numY1, numX2, numY2);
    }

    var animationRequest = animationFrameSelectableCanvas.request(animationStep);

    lineAnimations[key] = {animationRequest:animationRequest, animation:animationName, alpha:alpha};
}

// ---------------------------------------------------------------------------------------------------------------------

function selectedCheckerCirclesAnimation(posX, posY)
{
    var stepAlphaChange = squareAnimationSpeed * animationSpeed;

    var alpha = 0;
    var finalAlpha = 1;

    function animationStep()
    {
        if (selectedCheckerCirclesAnimationRequest)
        {
            alpha += stepAlphaChange;
            if ((stepAlphaChange > 0 && alpha > finalAlpha-0.01) ||
                (stepAlphaChange < 0 && alpha < finalAlpha+0.01))
                alpha = finalAlpha;

            if (alpha != finalAlpha)
            {
                contextCH.clearRect(posX, posY, squareSize, squareSize);
                drawSelectedCheckerAnimationImage(posX, posY, alpha);

                animationFrameSelectableCanvas.request(animationStep);
            }
            else
            {
                animationFrameSelectableCanvas.cancel(animationRequest);
                selectedCheckerCirclesAnimationRequest = null;

                contextCH.clearRect(posX, posY, squareSize, squareSize);
                drawSelectedCheckerAnimationImage(posX, posY, alpha);
            }
        }
    }

    var animationRequest = animationFrameSelectableCanvas.request(animationStep);
    selectedCheckerCirclesAnimationRequest = animationRequest;
}

// ---------------------------------------------------------------------------------------------------------------------

function squareAnimation(squareCoordinates, animationName, isAttack,
                         borderAlpha, startBorderAlpha, finalBorderAlpha,
                         isFill, fillAlpha, startFillAlpha, finalFillAlpha,
                         isCircles, circlesAlpha, startCirclesAlpha, finalCirclesAlpha,
                         completionHandler)
{
    var posX = squareCoordinates.posX;
    var posY = squareCoordinates.posY;
    var numX = squareCoordinates.numX;
    var numY = squareCoordinates.numY;

    // --------------------------------------------------------------------------------

    var isSelectedChecker = (selectedChecker && numX == selectedChecker.numX && numY == selectedChecker.numY);

    // если атака в квадрат где находится наша шашка, то у нас уже есть сохраненные значения от прошлого выделения, которые нужно очистить
    if (isSelectedChecker && animationName == 'highlightedAttackFadeIn' && borderAlpha == 1 && fillAlpha == 1 && circlesAlpha == 1)
    {
        borderAlpha = 0;
        fillAlpha = 0;
        circlesAlpha = 0;
    }

    // --------------------------------------------------------------------------------

    if (!borderAlpha) borderAlpha = startBorderAlpha;
    if (!fillAlpha) fillAlpha = startFillAlpha;
    if (!circlesAlpha) circlesAlpha = startCirclesAlpha;

    var diff1 = finalBorderAlpha-startBorderAlpha;
    if (diff1 < 0) diff1 = -diff1;

    var diff2 = finalFillAlpha-startFillAlpha;
    if (diff2 < 0) diff2 = -diff2;

    var diff3 = finalCirclesAlpha-startCirclesAlpha;
    if (diff3 < 0) diff3 = -diff3;

    var diffMin = Math.min(diff1, diff2, diff3);
    var diffMiddle = (diff1 + diff2 + diff3) / 3;
    var diff = (diffMin + diffMiddle) / 2;

    var stepAlphaChange = squareAnimationSpeed * animationSpeed * (1-(1-diff)/2);

    var steps1 = (finalBorderAlpha - borderAlpha) / stepAlphaChange;
    if (steps1 < 0) steps1 = -steps1;

    var steps2 = (finalFillAlpha - fillAlpha) / stepAlphaChange;
    if (steps2 < 0) steps2 = -steps2;

    var steps3 = (finalCirclesAlpha - circlesAlpha) / stepAlphaChange;
    if (steps3 < 0) steps3 = -steps3;

    var stepsMax = Math.max(steps1, steps2, steps3);
    var stepsMiddle = (steps1 + steps2 + steps3) / 3;
    var steps = (stepsMax + stepsMiddle) / 2;

    var borderAlphaChange = (finalBorderAlpha - borderAlpha) / steps;
    var fillAlphaChange = (finalFillAlpha - fillAlpha) / steps;
    var circlesAlphaChange = (finalCirclesAlpha - circlesAlpha) / steps;

    // --------------------------------------------------------------------------------

    var newBorderAlpha = borderAlpha;
    var newFillAlpha = fillAlpha;
    var newCirclesAlpha = circlesAlpha;

    // --------------------------------------------------------------------------------

    if (animationName == 'selectedCheckerFadeIn') selectedCheckerCirclesAnimation(posX, posY);

    // --------------------------------------------------------------------------------

    function animationStep()
    {
        if (squareAnimationsArray[numY][numX] && squareAnimationsArray[numY][numX].animationRequest && squareAnimationsArray[numY][numX].animation == animationName)
        {
            if (newBorderAlpha != finalBorderAlpha)
            {
                newBorderAlpha += borderAlphaChange;
                if ((borderAlphaChange > 0 && newBorderAlpha > finalBorderAlpha - 0.01) ||
                    (borderAlphaChange < 0 && newBorderAlpha < finalBorderAlpha + 0.01))
                    newBorderAlpha = finalBorderAlpha;
            }

            if (isFill && newFillAlpha != finalFillAlpha)
            {
                newFillAlpha += fillAlphaChange;
                if ((fillAlphaChange > 0 && newFillAlpha > finalFillAlpha-0.01) ||
                    (fillAlphaChange < 0 && newFillAlpha < finalFillAlpha+0.01))
                    newFillAlpha = finalFillAlpha;
            }

            if (isCircles && newCirclesAlpha != finalCirclesAlpha)
            {
                newCirclesAlpha += circlesAlphaChange;
                if ((circlesAlphaChange > 0 && newCirclesAlpha > finalCirclesAlpha-0.01) ||
                    (circlesAlphaChange < 0 && newCirclesAlpha < finalCirclesAlpha+0.01))
                    newCirclesAlpha = finalCirclesAlpha;
            }

            if (newBorderAlpha != finalBorderAlpha || newFillAlpha != finalFillAlpha || newCirclesAlpha != finalCirclesAlpha)
            {
                contextSA.clearRect(posX, posY, squareSize, squareSize);

                if (isSelectedChecker && (animationName == 'highlightedAttackFadeIn' || animationName == 'highlightedAttackFadeOut' || animationName == 'selectedAttackFadeIn'))
                {
                    if (animationName == 'highlightedAttackFadeIn' || animationName == 'highlightedAttackFadeOut')
                    {
                        drawSelectedAnimationImage(posX, posY, 1 - newBorderAlpha*1.33, true, 1 - newBorderAlpha*1.33, true, 1, false);

                        if (newBorderAlpha > 0 || newFillAlpha > 0 || newCirclesAlpha > 0)
                            drawSelectedAnimationImage(posX, posY, newBorderAlpha, isFill, newFillAlpha, isCircles, newCirclesAlpha, true);
                    }
                    else if (animationName == 'selectedAttackFadeIn')
                    {
                        if (borderAlpha > 0.5)
                        {
                            drawSelectedAnimationImage(posX, posY, 1 - (newBorderAlpha - 0.75) * 4, false, 0, true, 1, true);

                            if (newBorderAlpha > 0 || newFillAlpha > 0 || newCirclesAlpha > 0)
                                drawSelectedAnimationImage(posX, posY, (newBorderAlpha - 0.75) * 4, isFill, newFillAlpha, isCircles, newCirclesAlpha, false);
                        }
                        else
                        {
                            if (newBorderAlpha > 0 || newFillAlpha > 0 || newCirclesAlpha > 0)
                            {
                                if (newBorderAlpha < 0.5)
                                {
                                    newBorderAlpha = 1 - newBorderAlpha;
                                    newFillAlpha = 1 - newFillAlpha;
                                }

                                drawSelectedAnimationImage(posX, posY, newBorderAlpha, isFill, newFillAlpha, isCircles, newCirclesAlpha, false);
                            }
                        }
                    }
                }
                else if (newBorderAlpha > 0 || newFillAlpha > 0 || newCirclesAlpha > 0)
                    drawSelectedAnimationImage(posX, posY, newBorderAlpha, isFill, newFillAlpha, isCircles, newCirclesAlpha, isAttack);

                squareAnimationsArray[numY][numX].borderAlpha = newBorderAlpha;
                squareAnimationsArray[numY][numX].fillAlpha = newFillAlpha;
                squareAnimationsArray[numY][numX].circlesAlpha = newCirclesAlpha;

                animationFrameSelectableCanvas.request(animationStep);
            }
            else
            {
                animationFrameSelectableCanvas.cancel(animationRequest);
                squareAnimationsArray[numY][numX].animationRequest = null;
                //squareAnimationsArray[numY][numX] = 0;

                contextSA.clearRect(posX, posY, squareSize, squareSize);

                if (isSelectedChecker && (animationName == 'highlightedAttackFadeOut' || animationName == 'selectedAttackFadeIn'))
                {
                    if (animationName == 'highlightedAttackFadeOut')
                        drawSelectedAnimationImage(posX, posY, 1, true, 1, true, 1, false);
                    else if (animationName == 'selectedAttackFadeIn')
                        drawSelectedAnimationImage(posX, posY, newBorderAlpha, isFill, newFillAlpha, isCircles, newCirclesAlpha, false);
                }
                else if (newBorderAlpha > 0 || newFillAlpha > 0 || newCirclesAlpha > 0)
                    drawSelectedAnimationImage(posX, posY, newBorderAlpha, isFill, newFillAlpha, isCircles, newCirclesAlpha, isAttack);

                squareAnimationsArray[numY][numX].borderAlpha = finalBorderAlpha;
                squareAnimationsArray[numY][numX].fillAlpha = finalFillAlpha;
                squareAnimationsArray[numY][numX].circlesAlpha = finalCirclesAlpha;

                if (completionHandler) completionHandler();
            }
        }
        else contextSA.clearRect(posX, posY, squareSize, squareSize);
    }

    var animationRequest = animationFrameSelectableCanvas.request(animationStep);

    squareAnimationsArray[numY][numX] = {animationRequest:animationRequest, animation:animationName, posX:posX, posY:posY, borderAlpha:borderAlpha, fillAlpha:fillAlpha, circlesAlpha:circlesAlpha};
}

// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

function checkerMoveAnimation(checkerStartCoordinates, checkerFinalCoordinates)
{
    var isCheckerCleared = false;

    var posX1 = checkerStartCoordinates.posX;
    var posY1 = checkerStartCoordinates.posY;
    var numX1 = checkerStartCoordinates.numX;
    var numY1 = checkerStartCoordinates.numY;

    var posX2 = checkerFinalCoordinates.posX;
    var posY2 = checkerFinalCoordinates.posY;
    var numX2 = checkerFinalCoordinates.numX;
    var numY2 = checkerFinalCoordinates.numY;

    var isXIncrease = (numX2 > numX1);
    var isYIncrease = (numY2 > numY1);

    var isCheckerMan;

    function animationStep()
    {
        if ((posX1 < posX2 && isXIncrease) || (posY1 < posY2 && isYIncrease) ||
            (posX1 > posX2 && !isXIncrease) || (posY1 > posY2 && !isYIncrease))
        {
            if (!isCheckerCleared)
            {
                isCheckerCleared = true;
                contextCH.clearRect(posX1, posY1, squareSize, squareSize);
            }

            contextCH2.clearRect(posX1, posY1, squareSize, squareSize);

            var stepChange = squareSize*0.1*animationSpeed;

            posX1 += (isXIncrease ? stepChange : -stepChange);
            posY1 += (isYIncrease ? stepChange : -stepChange);

            if ((posX1 > posX2 && isXIncrease) || (posX1 < posX2 && !isXIncrease)) posX1 = posX2;
            if ((posY1 > posY2 && isYIncrease) || (posY1 < posY2 && !isYIncrease)) posY1 = posY2;

            contextCH2.drawImage(imageForChecker(map[selectedChecker.numY][selectedChecker.numX]), posX1, posY1);

            animationFrameSelectableCanvas.request(animationStep);
        }
        else
        {
            animationFrameSelectableCanvas.cancel(animationRequest);

            contextCH2.clearRect(posX2, posY2, squareSize, squareSize);
            contextCH.drawImage(imageForChecker(map[selectedChecker.numY][selectedChecker.numX]), posX2, posY2);

            // при достижении последней черты шашка становится дамкой
            if (becomeKingImmediately && posY2 == (isBlackTurn() ? (map.length-1)*squareSize : 0))
            {
                isCheckerMan = isMan(map[selectedChecker.numY][selectedChecker.numX]);
                if (isCheckerMan)
                {
                    map[selectedChecker.numY][selectedChecker.numX] += 0.5;

                    checkerBecomeKingAnimation(posX2, posY2);
                }
            }

            setTimeout(function() { nextTurnAfterMove(); }, moveDelay);
        }
    }

    var animationRequest = animationFrameSelectableCanvas.request(animationStep);
}

function checkerAttackAnimation(attackMoveNumber)
{
    // на слабых устройствах проверяем, если тормозит анимация и не успевает завершиться предыдущая, то останавливаем ее
    if (selectedCheckerCirclesAnimationRequest)
    {
        animationFrameSelectableCanvas.cancel(selectedCheckerCirclesAnimationRequest);
        selectedCheckerCirclesAnimationRequest = null;
        contextCH.clearRect(selectedChecker.posX, selectedChecker.posY, squareSize, squareSize);
    }
    else if (checkerBecomeKingAnimationRequest)
    {
        animationFrameSelectableCanvas.cancel(checkerBecomeKingAnimationRequest);
        checkerBecomeKingAnimationRequest = null;

        contextCH.clearRect(selectedAttackSquares[attackMoveNumber-1].posX, selectedAttackSquares[attackMoveNumber-1].posY, squareSize, squareSize);
    }

    // --------------------------------------------------------------------------------

    var checker = (attackMoveNumber == 0 ? selectedChecker : selectedAttackSquares[attackMoveNumber-1]);

    var isCheckerCleared = false;
    var isAttackCheckerRemoved = false;

    var posX1 = checker.posX;
    var posY1 = checker.posY;
    var numX1 = checker.numX;
    var numY1 = checker.numY;

    var posX2 = selectedAttackSquares[attackMoveNumber].posX;
    var posY2 = selectedAttackSquares[attackMoveNumber].posY;
    var numX2 = selectedAttackSquares[attackMoveNumber].numX;
    var numY2 = selectedAttackSquares[attackMoveNumber].numY;

    var posX3 = selectedAttackCheckers[attackMoveNumber].posX;
    var posY3 = selectedAttackCheckers[attackMoveNumber].posY;
    var numX3 = selectedAttackCheckers[attackMoveNumber].numX;
    var numY3 = selectedAttackCheckers[attackMoveNumber].numY;

    var isXIncrease = (numX2 > numX1);
    var isYIncrease = (numY2 > numY1);

    var scalePosX1 = posX1 + (isXIncrease ? squareSize/2 : -squareSize/2);
    var scalePosX2 = posX2 - (isXIncrease ? squareSize/2 : -squareSize/2);

    var scale = 1;
    var isCheckerMan;

    function animationStep()
    {
        if ((posX1 < posX2 && isXIncrease) || (posY1 < posY2 && isYIncrease) ||
            (posX1 > posX2 && !isXIncrease) || (posY1 > posY2 && !isYIncrease))
        {
            if (!isCheckerCleared)
            {
                isCheckerCleared = true;
                contextCH.clearRect(posX1, posY1, squareSize, squareSize);
            }

            contextCH2.clearRect(posX1-squareSize/2, posY1-squareSize/2, squareSize*2, squareSize*2);

            var stepChange = squareSize*0.1*animationSpeed;

            posX1 += (isXIncrease ? stepChange : -stepChange);
            posY1 += (isYIncrease ? stepChange : -stepChange);

            if ((posX1 > posX2 && isXIncrease) || (posX1 < posX2 && !isXIncrease)) posX1 = posX2;
            if ((posY1 > posY2 && isYIncrease) || (posY1 < posY2 && !isYIncrease)) posY1 = posY2;

            var scaleChange = 0.05*animationSpeed;

            if ((posX1 < scalePosX1 && isXIncrease) || (posX1 > scalePosX1 && !isXIncrease)) scale += scaleChange;
            else if ((posX1 > scalePosX2 && isXIncrease) || (posX1 < scalePosX2 && !isXIncrease)) scale -= scaleChange;
            if (scale < 1) scale = 1;

            drawCheckerImage(contextCH2, isKing(map[selectedChecker.numY][selectedChecker.numX]), posX1, posY1, isBlackTurn(), scale, 1);

            if (!isAttackCheckerRemoved && ((posX1 >= posX3 && isXIncrease) || (posX1 <= posX3 && !isXIncrease)))
            {
                contextCH.clearRect(posX3, posY3, squareSize, squareSize);

                contextCH.save();
                contextCH.globalAlpha = 0.5;
                contextCH.drawImage(imageForChecker(map[numY3][numX3]), posX3, posY3);
                contextCH.restore();

                isAttackCheckerRemoved = true;
            }

            animationFrameSelectableCanvas.request(animationStep);
        }
        else
        {
            animationFrameSelectableCanvas.cancel(animationRequest);

            contextCH2.clearRect(posX2, posY2, squareSize, squareSize);
            contextCH.drawImage(imageForChecker(map[selectedChecker.numY][selectedChecker.numX]), posX2, posY2);

            // при достижении последней черты шашка становится дамкой
            if (becomeKingImmediately && posY2 == (isBlackTurn() ? (map.length-1)*squareSize : 0))
            {
                isCheckerMan = isMan(map[selectedChecker.numY][selectedChecker.numX]);
                if (isCheckerMan)
                {
                    map[selectedChecker.numY][selectedChecker.numX] += 0.5;

                    checkerBecomeKingAnimation(posX2, posY2);
                }
            }

            attackMoveNumber++;

            setTimeout(function() { (attackMoveNumber < selectedAttackSquares.length ? checkerAttackAnimation(attackMoveNumber) : nextTurnAfterAttack()); }, attackDelay);
        }
    }

    var animationRequest = animationFrameSelectableCanvas.request(animationStep);
}

function clearSelectedAttackCheckersAnimation(squareCoordinates)
{
    var posX = squareCoordinates.posX;
    var posY = squareCoordinates.posY;
    var numX = squareCoordinates.numX;
    var numY = squareCoordinates.numY;

    var startAlpha = 0.5;
    var finalAlpha = 0;

    var diff = finalAlpha-startAlpha;
    if (diff < 0) diff = -diff;
    var stepAlphaChange = squareAnimationSpeed * animationSpeed * (1-(1-diff)/2);

    var alpha = startAlpha;

    function animationStep()
    {
        alpha -= stepAlphaChange;

        if (alpha > finalAlpha)
        {
            contextCH.clearRect(posX, posY, squareSize, squareSize);
            drawCheckerImage(contextCH, isKing(map[numY][numX]), posX, posY, !isBlackTurn(), 1, alpha);

            animationFrameSelectableCanvas.request(animationStep);
        }
        else
        {
            animationFrameSelectableCanvas.cancel(animationRequest);

            contextCH.clearRect(posX, posY, squareSize, squareSize);
        }
    }

    var animationRequest = animationFrameSelectableCanvas.request(animationStep);
}

function checkerBecomeKingAnimation(posX, posY)
{
    var startAlpha = 0;
    var finalAlpha = 1;

    var diff = finalAlpha-startAlpha;
    if (diff < 0) diff = -diff;
    var stepAlphaChange = squareAnimationSpeed * animationSpeed * (1-(1-diff)/2);

    var alpha = startAlpha;

    function animationStep()
    {
        if (checkerBecomeKingAnimationRequest)
        {
            alpha += stepAlphaChange;

            if (alpha < finalAlpha)
            {
                contextCH.save();
                drawKingImageOnChecker(posX, posY, alpha);
                contextCH.restore();

                animationFrameSelectableCanvas.request(animationStep);
            }
            else
            {
                animationFrameSelectableCanvas.cancel(animationRequest);
                checkerBecomeKingAnimationRequest = null;

                drawKingImageOnChecker(posX, posY, finalAlpha);
            }
        }
    }

    var animationRequest = animationFrameSelectableCanvas.request(animationStep);
    checkerBecomeKingAnimationRequest = animationRequest;
}



















