App.invite_user = App.cable.subscriptions.create("InviteUserChannel", {
  connected: function() {

  },

  disconnected: function() {

  },

  received: function(data) {
    $token = $("meta[name=csrf-token]").attr('content');
      if (data.type == 'invite') {
          document.getElementById('invitions').innerHTML +=
              '<div class="alert alert-warning">'
              + 'Игрок '
              + '<button aria-hidden="true" class="close" data-dismiss="alert" type="button">×</button>'
              + data.login + ' пригласил вас в игру'
              + '<div class="flash_form_buttons">'
              + '<form action="/notification/accept" accept-charset="UTF-8" method="POST" class="flash_form_button">'
              + '<input name="authenticity_token" value="' + $token + '" type="hidden">'
              + '<input value="' + data.game_session_id + '" name="game_session_id" type="hidden">'
              + '<input name="commit" value="Принять" class="btn btn-success sign_button delete_margin"'
              + 'data-disable-with="Отклонить" type="submit"></form>'

              + '<form action="/notification/decline" accept-charset="UTF-8" method="POST" class="flash_form_button">'
              + '<input name="authenticity_token" value="' + $token + '" type="hidden">'
              + '<input value="' + data.game_session_id + '" name="game_session_id" type="hidden">'
              + '<input name="commit" value="Отклонить" class="btn btn-success sign_button delete_margin"'
              + 'data-disable-with="Отклонить" type="submit"></form>'
              + '</div>'
      }
    if (data.type == 'decline'){
        $time = 3;
        setInterval(function(){
            if ($time == 0){
                window.location = "/"
            }
            $('.modal_window').html('Противник отклонил приглашение<br>до выхода '+ $time);
            $time-=1;
        },1000)
    }
    if (data.type == 'accept'){
        $('.modal_window').css({'display':'none'});
        $('.black_background_opacity').css({'display':'none'});
    }
  }
});
