# frozen_string_literal: true
require 'rails_helper'

# This spec was generated by rspec-rails when you ran the scaffold generator.
# It demonstrates how one might use RSpec to specify the controller code that
# was generated by Rails when you ran the scaffold generator.
#
# It assumes that the implementation code is generated by the rails scaffold
# generator.  If you are using any extension libraries to generate different
# controller code, this generated spec may or may not pass.
#
# It only uses APIs available in rails and/or rspec-rails.  There are a number
# of tools you can use to make these specs even more expressive, but we're
# sticking to rails and rspec-rails APIs to keep things simple and stable.
#
# Compared to earlier versions of this generator, there is very limited use of
# stubs and message expectations in this spec.  Stubs are only used when there
# is no simpler way to get a handle on the object needed for the example.
# Message expectations are only used when there is no simpler way to specify
# that an instance is receiving a specific message.

RSpec.describe UsersController, type: :controller do
  # This should return the minimal set of attributes required to create a valid
  # User. As you add validations to User, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) do
    {login: 'allex', email: 'example@mail.ru', password: '123123'}
  end
  let(:invalid_attributes) do
    {login: 'allex', email: 'example', password: '1!@#$'}
  end

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # UsersController. Be sure to keep this updated too.
  let(:valid_session) { {} }

  describe 'GET #index' do
    subject { get :index, params: {}, session: valid_session }
    let!(:user) { create(:user) }

    it 'assigns all users as @users' do
      subject
      expect(assigns(:users)).to eq([user])
    end
  end

  describe 'GET #show' do
    subject { get :show, params: {id: user.to_param}, session: valid_session }
    let!(:user) { create(:user) }

    it 'assigns the requested user as @user' do
      subject
      expect(assigns(:user)).to eq(user)
    end
  end

  describe 'GET #edit' do
    subject { get :edit, params: {id: user.to_param}, session: valid_session }
    let!(:user) { create(:user) }

    it 'assigns the requested user as @user' do
      subject
      expect(assigns(:user)).to eq(user)
    end
  end

  describe 'PUT #update' do
    subject { put :update, params: {id: user.to_param, user: valid_attributes}, session: valid_session }
    let!(:user) { create(:user) }

    context 'with valid params' do
      it 'updates the requested user' do
        subject && user.reload
        expect(user).to have_attributes(login: 'allex')
      end
      it 'assigns the requested user as @user' do
        subject
        expect(assigns(:user)).to eq(user)
      end
      it 'redirects to the user' do
        subject
        expect(response).to redirect_to(user)
      end
    end
    subject { put :update, params: {id: user.to_param, user: invalid_attributes}, session: valid_session }
    let!(:user) { create(:user) }
    context 'with invalid params' do
      it 'assigns the user as @user' do
        subject
        expect(assigns(:user)).to eq(user)
      end
    end
  end

  describe 'DELETE #destroy' do
    subject { delete :destroy, params: {id: user.to_param}, session: valid_session }
    let!(:user) { create(:user) }

    it 'destroys the requested user' do
      expect { subject }.to change(User, :count).by(-1)
    end

    it 'redirects to the users list' do
      subject
      expect(response).to redirect_to(users_url)
    end
  end
end
