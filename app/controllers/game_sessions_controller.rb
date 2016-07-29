class GameSessionsController < ApplicationController
  before_action :set_game_session, only: :show

  def show
    render('show', layout: 'empty')
  end

  def create
    @game_session = GameSession.new(game_session_params)

    if @game_session.save
      redirect_to @game_session
    else
      render :new
    end
  end

  private

  def set_game_session
    @game_session = GameSession.find(params[:id])
  end

  def game_session_params
    params.require(:game_session).permit()
  end
end
