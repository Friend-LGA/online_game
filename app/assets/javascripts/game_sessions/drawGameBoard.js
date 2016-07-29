function drawGameBoard()
{
    contextGB.lineWidth = border.width*2;
    contextGB.strokeStyle = 'rgb(50, 50, 50)';
    contextGB.strokeRect(0, 0, size.out, size.out);

    // быстрее отрисовывать без изменения состояния

    var i, j;

    //contextGB.fillStyle = 'rgb(130, 130, 130)';
    contextGB.fillStyle = 'rgb(190, 120, 50)';
    for (i = 0; i < map.length; i += 2)
        for (j = 0; j < map.length; j += 2)
        {
            contextGB.fillRect(border.width + i * squareSize, border.width + (j + 1) * squareSize, squareSize, squareSize);
            contextGB.fillRect(border.width + (i + 1) * squareSize, border.width + j * squareSize, squareSize, squareSize);
        }

    //contextGB.fillStyle = 'rgb(230, 230, 230)';
    contextGB.fillStyle = 'rgb(240, 190, 140)';
    for (i = 0; i < map.length; i += 2)
        for (j = 0; j < map.length; j += 2)
        {
            contextGB.fillRect(border.width + i * squareSize, border.width + j * squareSize, squareSize, squareSize);
            contextGB.fillRect(border.width + (i + 1) * squareSize, border.width + (j + 1) * squareSize, squareSize, squareSize);
        }
}