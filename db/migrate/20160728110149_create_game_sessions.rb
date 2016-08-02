# frozen_string_literal: true
class CreateGameSessions < ActiveRecord::Migration[5.0]
  def change
    create_table :game_sessions do |t|
      t.references :white_user, null: false
      t.references :black_user, null: false
      t.timestamps null: false
    end
  end
end
