# frozen_string_literal: true
require 'rails_helper'

RSpec.describe UsersController, type: :routing do
  describe 'routing' do
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
