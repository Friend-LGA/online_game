# frozen_string_literal: true
class UserStatusChannel < ApplicationCable::Channel
  def subscribed
    $redis_users_statuses.set(current_user.id, true)
  end

  def unsubscribed
    conections = ActionCable.server.connections.select { |conn| conn.current_user == current_user }
    $redis_users_statuses.del(current_user.id) if conections.size.zero?
  end
end
