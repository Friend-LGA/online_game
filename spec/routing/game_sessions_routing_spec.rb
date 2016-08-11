# frozen_string_literal: true
require 'rails_helper'

RSpec.describe GameSessionsController, type: :routing do
  describe 'routing' do
    it 'routes to #move' do
      expect(post: '/move').to route_to('game_sessions#move')
    end

    it 'routes to #attack' do
      expect(post: '/attack').to route_to('game_sessions#attack')
    end

    it 'routes to #show' do
      expect(get: '/game_sessions/1').to route_to('game_sessions#show', id: '1')
    end

    it 'routes to #create' do
      expect(post: '/game_sessions').to route_to('game_sessions#create')
    end
  end
end
