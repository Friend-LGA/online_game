# frozen_string_literal: true
require 'rails_helper'

RSpec.describe Devise::SessionsController, type: :routing do
  describe 'routing' do
    it 'routes to #index' do
      expect(get: '/users/sign_in').to route_to('devise/sessions#new')
    end

    it 'routes to #create' do
      expect(post: '/users/sign_in').to route_to('devise/sessions#create')
    end

    it 'routes to #destroy' do
      expect(delete: '/users/sign_out').to route_to('devise/sessions#destroy')
    end

    it 'routes to #create' do
      expect(post: '/users/confirmation').to route_to('devise/confirmations#create')
    end

    it 'routes to #new' do
      expect(get: '/users/confirmation/new').to route_to('devise/confirmations#new')
    end
  end
end
