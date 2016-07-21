# frozen_string_literal: true
module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user
    def connect
      self.current_user = find_verified_user
      logger.add_tags('ActionCable', current_user.login)
    end

    protected

    def find_verified_user
      current_user = User.find_by(id: cookies.signed['user.id'])
      current_user ? current_user : reject_unauthorized_connection
    end
  end
end
