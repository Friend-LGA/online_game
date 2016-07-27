# frozen_string_literal: true
require 'rails_helper'

RSpec.describe Devise::ConfirmationsController, type: :routing do
  describe 'routing' do
    it 'routes to #create' do
      expect(post: '/users/confirmation').to route_to('devise/confirmations#create')
    end

    it 'routes to #new' do
      expect(get: '/users/confirmation/new').to route_to('devise/confirmations#new')
    end
  end
end
