# frozen_string_literal: true
Rails.application.routes.draw do
  mount ActionCable.server => '/cable'
  root 'users#index', as: 'users'
  devise_for :users
  resources :users, only: %i[show edit destroy update]
  resources :game_sessions, only: %i[create show]
  post '/notification', to: 'users#send_not'
  post '/notification/accept', to: 'users#accept_invite'
  post '/notification/decline', to: 'users#decline_invite'
  post '/move', to: 'game_sessions#move'
  post '/attack', to: 'game_sessions#attack'
end
