App.game_session = App.cable.subscriptions.create("GameSessionChannel", {
  connected: function() {
      console.log('Подключился к игре')
  },

  disconnected: function() {
    // Called when the subscription has been terminated by the server
  },

  received: function(data) {
      selectedChecker = data.selectedChecker;
      if (data.type == 'attack'){
          selectedAttackCheckers = data.selectedAttackCheckers;
          selectedAttackSquares = data.selectedAttackSquares;
          console.log(selectedAttackSquares);
          numX = data.posX;
          numY = data.posY;
          //mapMoveable = data.mapMoveable;
          //map = data.map;
          mapCrossing = data.mapCrossing;
          attackAction(0);
      }
      else if (data.type == 'move') {
          selectedMoveSquare = data.selectedMoveSquare;
          moveAction();
      }
  }
});
