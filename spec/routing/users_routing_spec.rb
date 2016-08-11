# frozen_string_literal: true
require 'rails_helper'

RSpec.describe UsersController, type: :routing do
  describe 'routing' do
    it 'routes to #edit' do
      expect(get: '/users/1/edit').to route_to('users#edit', id: '1')
    end

    it 'routes to #show' do
      expect(get: '/users/1').to route_to('users#show', id: '1')
    end

    it 'routes to #destroy' do
      expect(DELETE: '/users/1').to route_to('users#destroy', id: '1')
    end

    it 'routes to #update via PATCH' do
      expect(patch: '/users/1').to route_to('users#update', id: '1')
    end

    it 'routes to #update via PUT' do
      expect(put: '/users/1').to route_to('users#update', id: '1')
    end

    it 'routes to #send_not' do
      expect(post: '/notification').to route_to('users#send_not')
    end

    it 'routes to #accept_invite' do
      expect(post: '/notification_accept').to route_to('users#accept_invite')
    end

    it 'routes to #decline_invite' do
      expect(post: '/notification_decline').to route_to('users#decline_invite')
    end
  end
end
