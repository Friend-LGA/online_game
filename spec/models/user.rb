# frozen_string_literal: true
require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validations_by_login' do
    subject do
      User.create(email: '14@14.ru',
                  login: 'abia_bdiaaaaaa',
                  password: '123456',
                  password_confirmation: '123456')
    end

    it { is_expected.to validate_presence_of(:login) }
    it { is_expected.to validate_uniqueness_of(:login).case_insensitive }
    it { is_expected.to validate_length_of(:login) }
    it { is_expected.to validate_exclusion_of(:login).in_array(%w[Admin Moderator User admin moderator user]) }
    it { is_expected.to validate_presence_of(:email) }
    it { is_expected.to validate_uniqueness_of(:email).case_insensitive }
    it 'should validate that :email has valid format' do
      is_expected.to allow_value('email@example.net').for(:email)
      is_expected.not_to allow_value('email', 'email@', '@email').for(:email)
    end
    it { is_expected.to validate_presence_of(:password) }
    it { is_expected.to validate_length_of(:password) }
  end
end
