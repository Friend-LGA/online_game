var canvasGB = document.getElementById('canvasGameBoard');
var contextGB = canvasGB.getContext('2d');

var canvasSA = document.getElementById('canvasSelectedArea');
var contextSA = canvasSA.getContext('2d');

var canvasSA2 = document.getElementById('canvasSelectedArea2');
var contextSA2 = canvasSA2.getContext('2d');

var canvasCH = document.getElementById('canvasCheckers');
var contextCH = canvasCH.getContext('2d');

var canvasCH2 = document.getElementById('canvasCheckers2');
var contextCH2 = canvasCH2.getContext('2d');

var isMobileDevice = navigator.userAgent.match(/iPad|iPhone|iPod|Android|BlackBerry|webOS/i) != null || screen.width <= 480;

var size = {in:0, out:0};                   // размер доски включающий рамку  и  размер доски без рамки
var border = {width:0, shadowSize:0};       // ширина рамки и тени у доски
var squareSize;                             // размер игрового квадрата
var squaresCoordinates;                     // координаты квадратов

var highlightedChecker;                     // подсвеченный квадрат c шашкой
var selectedChecker;                        // выделенный квадрат c шашкой

var highlightedMoveSquare;                  // подсвеченные квадраты для хода
var selectedMoveSquare;                     // выделенные квадраты для хода

var highlightedAttackSquare;                // подсвеченные квадраты для атаки
var selectedAttackSquares = [];             // выделенные квадраты для атаки

var highlightedAttackChecker;               // подсвеченная вражеская шашка под атакой
var selectedAttackCheckers = [];            // выделенные вражеские шашки под атакой

var highlightedSquaresInLine;               // все квадраты между подсвеченными выделениями
var selectedSquaresInLine = [];             // все квадраты между выделениями

var animationFrameSelectableCanvas = new AnimationFrame(); // библа отвечающая за анимацию

// настройки
// ---------------------------------------------------------------------------------------------------------------------

var isBordered              = false; // нужно ли рисовать широкую границу вокруг игорового поля (с цифрами и буквами)
var isInteractionEnabled    = true;  // разрешено ли взаимодействие
var attackDelay             = 800;   // задержка между ходами атаки
var moveDelay               = 500;   // задержка после обычного хода

var blackColor  = 'rgba(0, 0, 0, 1)';
var whiteColor  = 'rgba(255, 255, 255, 1)';
var greenColor  = 'rgba(50, 240, 50, 1)';
var redColor    = 'rgba(240, 50, 50, 1)';
var yellowColor = 'rgba(255, 255, 0, 1)';
// изменяемое
// ---------------------------------------------------------------------------------------------------------------------
var currentPlayerColor = playerColors.white;
var turnType =
{
    white: 1,   // ход белых
    black: 2    // ход черных
};

var turn = turnType.white;  // чей ход

var imageData;              // для копий контекста

// правила игры
// ---------------------------------------------------------------------------------------------------------------------

var canManMoveBack          = true;         // может ли простая шашка ходить назад
var canManAttackBack        = true;         // может ли простая шашка атаковать назад
var becomeKingImmediately   = true;         // простая шашка превращается в дамку при наступлении на квадрат, или в конце хода
var canKingMoveBack         = true;         // может ли дамка ходить назад
var canKingAttackBack       = true;         // может ли дамка атаковать назад
var manMoveLength           = 1;            // длина хода обычной шашки
var kingMoveLength          = Infinity;     // длина хода дамки

var becameKing;                             // указывает, стала ли пешка дамкой во время хода

// карты ходов
// ---------------------------------------------------------------------------------------------------------------------

var checkerType =
{
    empty:      0,      // пустая клетка
    whiteMan:   1,      // белая шашка
    whiteKing:  1.5,    // белая дамка
    blackMan:   2,      // черная шашка
    blackKing:  2.5     // черная дамка
};

 //
 var map =
 [
 [0, 2, 0, 2, 0, 2, 0, 2],
 [2, 0, 2, 0, 2, 0, 2, 0],
 [0, 2, 0, 2, 0, 2, 0, 2],
 [0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0],
 [1, 0, 1, 0, 1, 0, 1, 0],
 [0, 1, 0, 1, 0, 1, 0, 1],
 [1, 0, 1, 0, 1, 0, 1, 0]
 ];
// var map =
//     [
//         [0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 1, 0, 0, 0],
//         [0, 0, 0, 2, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0]
//     ];

var mapMoveable;
var mapAttackableCheckers;
var mapAttackableSquares;
var mapCrossing;

var crossingType =
{
    empty:      0,  // нет перехода
    slash:      1,  // линия ( / )
    backSlash:  2,  // линия ( \ )
    top:        3,  // дуга сверху справа
    bottom:     4,  // дуга сверху слева
    left:       5,  // дуга снизу справа
    right:      6,  // дуга снизу слева
    cross:      7,  // перекрестие
    topBottom:  8,  // дуги сверху и снизу
    leftRight:  9   // дуги слева и справа
};

// ---------------------------------------------------------------------------------------------------------------------

function isBlackChecker(checker)
{
    if (checker == checkerType.blackMan || checker == checkerType.blackKing) return true;
    else if (checker == checkerType.whiteMan || checker == checkerType.whiteKing) return false;
}

function isWhiteChecker(checker)
{
    if (checker == checkerType.whiteMan || checker == checkerType.whiteKing) return true;
    else if (checker == checkerType.blackMan || checker == checkerType.blackKing) return false;
}

function isMan(checker)
{
    if (checker == checkerType.blackMan || checker == checkerType.whiteMan) return true;
    else if (checker == checkerType.blackKing || checker == checkerType.whiteKing) return false;
}

function isKing(checker)
{
    if (checker == checkerType.blackKing || checker == checkerType.whiteKing) return true;
    else if (checker == checkerType.blackMan || checker == checkerType.whiteMan) return false;
}

function isBlackTurn()
{
    if (turn == turnType.black) return true;
    else if (turn == turnType.white) return false;
}

function isWhiteTurn()
{
    if (turn == turnType.white) return true;
    else if (turn == turnType.black) return false;
}

function isEnemyChecker(checker)
{
    if (isBlackTurn())
        return (isWhiteChecker(checker) ? true : false);
    else
        return (isBlackChecker(checker) ? true : false);
}

function imageForChecker(checker)
{
    return ((isKing(checker) ? (isBlackChecker(checker) ? blackCheckerKingImage : whiteCheckerKingImage) : (isBlackChecker(checker) ? blackCheckerManImage : whiteCheckerManImage)));
}

function isWinnerHOD(){
    var blackcheckers = 0;
    var whitecheckers = 0;
    for (i = 0; i < 8; i++) {
        for (j = 0; j < 8; j++) {
            if (map[i][j] != 0) {
                if (map[i][j] == 1) {
                    whitecheckers++
                }
                if (map[i][j] == 2) {
                    blackcheckers++
                }
            }
        }
    }
    if (blackcheckers == 0 || whitecheckers == 0){
        if(blackcheckers == 0) {
        winner = $('.winner');
            winner.css({'display':'block'});
            winner.html('Белые победили!!!');
            setTimeout(function(){
                window.location = "/"
            }, 4000)
        }
        if(whitecheckers == 0){
            winner.css({'display':'block'});
            winner.html('Черные победили!!!');
            setTimeout(function(){
                window.location = "/"
            }, 4000)
        }
    }
}
