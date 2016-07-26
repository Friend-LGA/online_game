# frozen_string_literal: true
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable

  def online?
    $redis_users_statuses.get(id).present?
  end

  validates :login,
            presence: true,
            uniqueness: {case_sensitive: false},
            length: {minimum: 2, maximum: 25},
            exclusion: {in: %w[Admin Moderator User admin moderator user]}
end
