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
    if user_id[:id] != current_user.id.to_s
      ActionCable.server.broadcast user_id[:id] + '_invite',
                                   type: 'invite',
                                   login: current_user.login,
                                   id: current_user.id,
                                   id_to: user_id[:id]
      head :ok
    end
  end

  def accept_invite
    user_id = params.require(:user).permit(:id)
    ActionCable.server.broadcast user_id[:id] + '_invite',
                                 type: 'accept',
                                 login: current_user.login,
                                 id: current_user.id
  end

  def decline_invite
    user_id = params.require(:user).permit(:id)
    ActionCable.server.broadcast user_id[:id] + '_invite',
                                 type: 'decline',
                                 login: current_user.login,
                                 id: current_user.id
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
    redirect_to users_url, notice: t('.user_was_destroy_successfull')
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:login)
  end
end
