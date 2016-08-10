# frozen_string_literal: true
require 'rails_helper'

RSpec.describe GameSession, type: :model do
  describe 'validations' do
    it { is_expected.to validate_presence_of(:black_user) }
    it { is_expected.to validate_presence_of(:white_user) }

    context 'when users have the same id' do
      let(:subject_invalid) { GameSession.create(white_user_id: 123, black_user_id: 123) }

      it 'should be invalid' do
        expect(subject_invalid).to be_invalid
      end
    end
  end
end
