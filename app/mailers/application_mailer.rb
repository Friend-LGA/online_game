# frozen_string_literal: true
class ApplicationMailer < ActionMailer::Base
  default from: 'help@online_game.com'
  layout 'email_devise'
end
