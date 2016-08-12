# frozen_string_literal: true
require_relative 'boot'
require 'rails/all'
# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module OnlineGame
  class Application < Rails::Application
    config.sass.preferred_syntax = :sass
    config.encoding = 'utf-8'
    config.i18n.load_path += Dir[Rails.root.join('config', 'locales', '**', '*.{rb,yml}')]
    config.i18n.available_locales = %i[ru]
    config.i18n.default_locale = :ru
    config.time_zone = 'UTC'
    config.to_prepare do
      Devise::Mailer.layout 'email_devise' # email.haml or email.erb
    end
  end
end
