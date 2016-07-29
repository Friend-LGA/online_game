# frozen_string_literal: true
class GameSession < ApplicationRecord
  belongs_to :white_user, class_name: 'User'
  belongs_to :black_user, class_name: 'User'

  validates :white_user, :black_user, presence: true
  validate :matches?

  def matches?
    return if white_user_id != black_user_id

    errors[:base] << 'Пользователи не могут совпадать'
  end
end
