require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module OnlineGame
  class Application < Rails::Application

  	config.sass.preferred_syntax = :sass
  	config.encoding = 'utf-8'
    
  	config.i18n.available_locales = %i[ru]
  	config.i18n.default_locale = :ru
  	config.time_zone = 'UTC'
  

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end
