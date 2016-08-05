# frozen_string_literal: true
class GameSessionsController < ApplicationController
  before_action :set_game_session, only: :show

  def show
  end

  def create
    @game_session = GameSession.new(game_session_params)

    if @game_session.save
      redirect_to @game_session
    else
      render :new
    end
  end

  def move
    data1 = params[:selectedChecker]
    data2 = params[:selectedMoveSquare]
    its_for = if current_user.id == 10
                7
              else
                10
              end
    ActionCable.server.broadcast its_for.to_s + '_game',
                                 selectedChecker: data1,
                                 selectedMoveSquare: data2
  end

  def attack
  end

  private

  def set_game_session
    @game_session = GameSession.find(params[:id])
  end

  def game_session_params
    params.require(:game_session).permit
  end
end
