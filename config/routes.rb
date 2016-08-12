# frozen_string_literal: true
Rails.application.routes.draw do
  mount ActionCable.server => '/cable'
  root 'users#index', as: 'users'
  devise_for :users
  resources :users, only: %i[show edit destroy update]
end
