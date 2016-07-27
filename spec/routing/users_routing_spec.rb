# frozen_string_literal: true
require 'rails_helper'

RSpec.describe UsersController, type: :routing do
  describe 'routing' do
    it 'routes new_user_session' do
      expect(get: '/users/sign_in').to route_to('devise/sessions#new')
    end

    it 'routes user_session' do
      expect(post: '/users/sign_in').to route_to('devise/sessions#create')
    end

    it 'routes destroy_user_session' do
      expect(delete: '/users/sign_out').to route_to('devise/sessions#destroy')
    end

    it 'routes user_password' do
      expect(post: '/users/password').to route_to('devise/passwords#create')
    end

    it 'routes  new_user_password' do
      expect(get: '/users/password/new').to route_to('devise/passwords#new')
    end

    it 'routes edit_user_password' do
      expect(get: '/users/password/edit').to route_to('devise/passwords#edit')
    end

    it 'routes to #update PATCH password' do
      expect(patch: '/users/password').to route_to('devise/passwords#update')
    end

    it 'routes cancel_user_registration' do
      expect(get: '/users/cancel').to route_to('devise/registrations#cancel')
    end

    it 'routes user_registration' do
      expect(post: '/users').to route_to('devise/registrations#create')
    end

    it 'routes new_user_registration' do
      expect(get: '/users/sign_up').to route_to('devise/registrations#new')
    end

    it 'routes  edit_user_registration' do
      expect(get: '/users/edit').to route_to('devise/registrations#edit')
    end

    it 'routes to #update PATCH users ' do
      expect(patch: '/users').to route_to('devise/registrations#update')
    end

    it 'routes cancel_user_registration ' do
      expect(get: '/users/cancel').to route_to('devise/registrations#cancel')
    end

    it 'routes user_registration ' do
      expect(post: '/users').to route_to('devise/registrations#create')
    end

    it 'routes new_user_registration ' do
      expect(get: '/users/sign_up').to route_to('devise/registrations#new')
    end

    it 'routes edit_user_registration' do
      expect(get: '/users/edit').to route_to('devise/registrations#edit')
    end

    it 'routes #update PATCH registration ' do
      expect(patch: '/users').to route_to('devise/registrations#update')
    end

    it 'routes #destroy DELETE registration' do
      expect(delete: '/users').to route_to('devise/registrations#destroy')
    end

    it 'routes user_confirmation' do
      expect(post: '/users/confirmation').to route_to('devise/confirmations#create')
    end

    it 'routes new_user_confirmation' do
      expect(get: '/users/confirmation/new').to route_to('devise/confirmations#new')
    end

    it 'routes #show GET confirmation' do
      expect(get: '/users/confirmation/new').to route_to('devise/confirmations#new')
    end

    it 'routes edit_user' do
      expect(get: '/users/1/edit').to route_to('users#edit', id: '1')
    end

    it 'routes user' do
      expect(get: '/users/1').to route_to('users#show', id: '1')
    end

    it 'routes #destroy DELETE users' do
      expect(DELETE: '/users/1').to route_to('users#destroy', id: '1')
    end
  end
end
