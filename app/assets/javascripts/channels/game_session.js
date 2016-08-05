App.game_session = App.cable.subscriptions.create("GameSessionChannel", {
  connected: function() {
      console.log('Подключился к игре')
  },

  disconnected: function() {
    // Called when the subscription has been terminated by the server
  },

  received: function(data) {
      console.log(data.selectedChecker);
      console.log(data.selectedMoveSquare);
      console.log('-------------------selectedMoveSquare-----------------------------');
      selectedChecker = data.selectedChecker;
      selectedMoveSquare = data.selectedMoveSquare;
      moveAction();
  }
});