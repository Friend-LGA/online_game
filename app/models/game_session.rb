# frozen_string_literal: true
class GameSession < ApplicationRecord
  belongs_to :white_user, class_name: 'User'
  belongs_to :black_user, class_name: 'User'
end
