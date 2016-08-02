# frozen_string_literal: true
class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]

  # GET /users
  def index
    @users = User.page(params[:page])
  end

  def show
  end

  def edit
  end

  def send_not
    user_id = params.require(:user).permit(:id)
    @game_session = GameSession.create(white_user_id: current_user.id, black_user_id: user_id[:id])
    if user_id[:id] != current_user.id.to_s
      ActionCable.server.broadcast user_id[:id] + '_invite',
                                   type: 'invite',
                                   login: current_user.login,
                                   id: current_user.id,
                                   id_to: user_id[:id],
                                   game_session_id: @game_session.id

    end

    if @game_session
      redirect_to users_path, notice: 'Error ТИПО ЗАШЕЛ'
      # redirect_to game_session_path(@game_session.id)
    else
      redirect_to users_path, notice: 'Error 500'
    end
  end

  def decline_invite
    game_session_id = params[:game_session_id]

    game_session = GameSession.find(game_session_id)
    user_id = game_session.white_user_id.to_s
    ActionCable.server.broadcast user_id + '_invite',
                                 type: 'decline'
    redirect_to users_path, notice: 'Вы отклонили приглашение'
  end

  def update
    if @user.update(user_params)
      redirect_to @user, notice:  t('.user_was_update_successfull')
    else
      render :edit
    end
  end

  def destroy
    @user.destroy
    redirect_to users_path, notice: t('.user_was_destroy_successfull')
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:login)
  end
end
