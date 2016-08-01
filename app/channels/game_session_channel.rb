# frozen_string_literal: true
# Be sure to restart your server when you modify this file. Action Cable runs in a loop th
# at does not support auto reloading.
class GameSessionChannel < ApplicationCable::Channel
  def subscribed
    stream_from "#{current_user.id}_game"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
