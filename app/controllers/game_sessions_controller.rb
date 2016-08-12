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
    game_session_id = params[:game_id]
    @game_session = GameSession.find(game_session_id)
    its_for = if current_user.id == @game_session.black_user_id
                @game_session.white_user_id
              else
                @game_session.black_user_id
              end
    ActionCable.server.broadcast its_for.to_s + '_game',
                                 selectedChecker: params[:selectedChecker],
                                 selectedMoveSquare: params[:selectedMoveSquare],
                                 x: params[:x],
                                 y: params[:y],
                                 map: params[:map],
                                 type: params[:type],
                                 selectedAttackCheckers: params[:selectedAttackCheckers].to_a.map { |i| i[1] },
                                 selectedAttackSquares: params[:selectedAttackSquares].to_a.map { |i| i[1] },
                                 posX: params[:posX],
                                 posY: params[:posY],
                                 mapMoveable: params[:mapMoveable].to_a.map { |i| i[1] },
                                 mapCrossing: params[:mapCrossing].to_a.map { |i| i[1] }
  end
  
  private

  def set_game_session
    @game_session = GameSession.find(params[:id])
  end

  def game_session_params
    params.require(:game_session).permit
  end
end
