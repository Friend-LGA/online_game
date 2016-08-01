App.invite_user = App.cable.subscriptions.create("InviteUserChannel", {
  connected: function() {
    console.log('Подключился...')
  },

  disconnected: function() {
    console.log('Отключаюсь...')
  },

  received: function(data) {
    if (data.type == 'invite'){
      document.getElementById('invitions').innerHTML+='<div class="alert alert-warning">Игрок '
      +data.login
      +' пригласил вас в игру, <a href="/game">присоедениться</a>'
      +'<form action="/notification/accept" accept-charset="UTF-8" data-remote="true" method="post">'
      +'<input name="utf8" value="✓" type="hidden"><input value="'+data.id+'" name="user[id]" id="user_id" type="hidden">'
      +'<input value="'+data.id_to+'" name="user[send_invite]" id="user_send_invite" type="hidden">'
      +'<input name="commit" value="Принять" class="btn btn-success sign_button delete_margin" '
      +'data-disable-with="Пригласить в игру" type="submit"></form>'
      +'<form action="/notification/decline" accept-charset="UTF-8" data-remote="true" method="post">'
      +'<input name="utf8" value="✓" type="hidden"><input value="'+data.id+'" name="user[id]" id="user_id" type="hidden">'
      +'<input value="'+data.id_to+'" name="user[send_invite]" id="user_send_invite" type="hidden">'
      +'<input name="commit" value="отклонить" class="btn btn-success sign_button delete_margin"'
      +'data-disable-with="Пригласить в игру" type="submit"></form>'
    }
    if (data.type == 'accept'){
      document.getElementById('invitions').innerHTML+='<div class="alert alert-warning">Игрок '
      +data.login
      +' принял ваше приглашение, вы перейдете в игру через 3 секунды.'
      alert('Отдохни');
      window.location.href = "https://new.vk.com/feed"
    }
    if (data.type == 'decline'){
      document.getElementById('invitions').innerHTML+='<div class="alert alert-warning">Игрок '
      +data.login
      +' отклонил ваше приглашение'
    }
  }
});