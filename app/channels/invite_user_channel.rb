# frozen_string_literal: true
# Be sure to restart your server when you modify this file. Action Cable runs in a loop th
# at does not support auto reloading.
class InviteUserChannel < ApplicationCable::Channel
  def subscribed
    stream_from "#{current_user.id}_invite"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
