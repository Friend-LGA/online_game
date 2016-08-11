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

RSpec.describe GameSessionsController, type: :controller do
  # This should return the minimal set of attributes required to create a valid
  # GameSession. As you add validations to GameSession, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) do
    {whie_user_id: 1, black_user_id: 2, game_session: 1}
  end

  let(:invalid_attributes) do
    {whie_user_id: 1, black_user_id: 2, game_session: 1}
  end

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # GameSessionsController. Be sure to keep this updated too.
  let(:valid_session) { {} }

  describe 'GET #show' do
    subject { get :show, params: {id: game_session.to_param}, session: valid_session }
    let!(:game_session) { create(:game_session) }

    it 'assigns the requested game_session as @game_session' do
      subject
      expect(assigns(:game_session)).to eq(game_session)
    end
  end

  describe 'POST #create' do
    subject { post :create, params: {game_session: valid_attributes}, session: valid_session }
    let!(:game_session) { create(:game_session) }

    context 'with valid params' do
      it 'creates a new GameSession' do
        expect do
        end.to change(GameSession, :count).by(1)
      end
    end

    subject { post :create, params: {game_session: valid_attributes}, session: valid_session }
    let!(:game_session) { create(:game_session) }

    it 'assigns a newly created game_session as @game_session' do
      subject
      expect(assigns(:game_session)).to be_a(GameSession)
      expect(assigns(:game_session)).to be_persisted
    end

    subject { post :create, params: {game_session: valid_attributes}, session: valid_session }
    let!(:game_session) { create(:game_session) }

    it 'redirects to the created game_session' do
      subject
      expect(response).to redirect_to(GameSession.last)
    end

    context 'with invalid params' do
      subject { post :create, params: {game_session: invalid_attributes}, session: valid_session }
      let!(:game_session) { create(:game_session) }

      it 'assigns a newly created but unsaved game_session as @game_session' do
        subject
        expect(assigns(:game_session)).to be_a_new(GameSession)
      end

      subject { post :create, params: {game_session: invalid_attributes}, session: valid_session }
      let!(:game_session) { create(:game_session) }

      it "re-renders the 'new' template" do
        subject
        expect(response).to render_template('new')
      end
    end
  end
end
