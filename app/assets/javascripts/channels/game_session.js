App.game_session = App.cable.subscriptions.create("GameSessionChannel", {
  received: function(data) {
      selectedChecker = data.selectedChecker;
      if (data.current_player == 1){
        $('.who_is_checker').html('Сейчас ход белых')
      }else{
        $('.who_is_checker').html('Сейчас ход черных')
      }
      if (data.type == 'attack'){
          selectedAttackCheckers = data.selectedAttackCheckers;
          selectedAttackSquares = data.selectedAttackSquares;
          current_player = data.current_player;
          console.log(selectedAttackSquares);
          numX = data.posX;
          numY = data.posY;
          mapCrossing = data.mapCrossing;
          attackAction(0);
      }
      else if (data.type == 'move') {
          current_player = data.current_player;
          selectedMoveSquare = data.selectedMoveSquare;
          moveAction();
      }

  }
});
