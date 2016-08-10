App.game_session = App.cable.subscriptions.create("GameSessionChannel", {
  connected: function() {
      console.log('Подключился к игре')
  },

  disconnected: function() {
    // Called when the subscription has been terminated by the server
  },

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
          //mapMoveable = data.mapMoveable;
          //map = data.map;
          mapCrossing = data.mapCrossing;
          attackAction(0);
      }
      else if (data.type == 'move') {
        if (data.current_player == 2){
     $(".black_background_opacity").css({'display': 'none'});
     $("#canvases").css({'transform' : 'rotate(180deg)', 'transition':'1s'});
        }else{
     $("#canvases").css({'transform' : 'rotate(0deg)'});

    }
          current_player = data.current_player;
          selectedMoveSquare = data.selectedMoveSquare;
          moveAction();
      }else if(data.type == 'roles'){
          current_player = data.current_player;
      }

  }
});
