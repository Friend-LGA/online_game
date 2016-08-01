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
    data3 = params[:x]
    data4 = params[:y]
    data5 = params[:map]
    data6 = params[:type]
    data7 = params[:selectedAttackCheckers]
    data8 = params[:selectedAttackSquares]
    data9 = params[:posX]
    data10 = params[:posY]
    data11 = params[:mapMoveable]
    data12 = params[:mapCrossing]
    data13 = if current_user.id == 117
               2
             else
               1
             end
    its_for = if current_user.id == 117
                116
              else
                117
              end
    ActionCable.server.broadcast its_for.to_s + '_game',
                                 selectedChecker: data1,
                                 selectedMoveSquare: data2,
                                 x: data3,
                                 y: data4,
                                 map: data5,
                                 type: data6,
                                 selectedAttackCheckers: data7.to_a.map { |i| i[1] },
                                 selectedAttackSquares: data8.to_a.map { |i| i[1] },
                                 posX: data9,
                                 posY: data10,
                                 mapMoveable: data11.to_a.map { |i| i[1] },
                                 mapCrossing: data12.to_a.map { |i| i[1] },
                                 current_player: data13
  end

  # def roles
  #   if current_user.id == @game_session.black_user_id
  #     return 2
  #   else
  #     return 1
  #   end
  # end

  private

  def set_game_session
    @game_session = GameSession.find(params[:id])
  end

  def game_session_params
    params.require(:game_session).permit
  end
end
