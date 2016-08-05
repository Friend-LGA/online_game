App.invite_user = App.cable.subscriptions.create("InviteUserChannel", {
  connected: function() {
    console.log('Подключился...')
  },

  disconnected: function() {
    console.log('Отключаюсь...')
  },

  received: function(data) {
    $token = $("meta[name=csrf-token]").attr('content');
    if (data.type == 'invite'){
      document.getElementById('invitions').innerHTML+=
      '<div class="alert alert-warning">Игрок '
      +'<button aria-hidden="true" class="close" data-dismiss="alert" type="button">×</button>'
      +data.login+' пригласил вас в игру, <a href="/game">присоедениться</a>'

      // +'<form action="/notification/accept" accept-charset="UTF-8" method="post">'
      // +'<input value="'+data.game_session_id+'" name="game_session_id" type="hidden">'
      // +'<input value="Принять" class="btn btn-success sign_button delete_margin" '
      // +'data-disable-with="Принять" type="submit"></form>'

      +'<a href = "/game_sessions/'+data.game_session_id+'" class = "btn btn-success sign_button delete_margin" >Принять</a>'
      +'<form action="/notification/decline" accept-charset="UTF-8" method="POST">'
      +'<input name="authenticity_token" value="'+$token+'" type="hidden">'
      +'<input value="'+data.game_session_id+'" name="game_session_id" type="hidden">'
      +'<input name="commit" value="Отклонить" class="btn btn-success sign_button delete_margin"'
      +'data-disable-with="Отклонить" type="submit"></form>'
    }
    if (data.type == 'decline'){
        $('.modal_window').html('Противник отклонил приглашение');
    }
  }
});