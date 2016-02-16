require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :controller do

  describe 'POST #create' do

    context 'when request is created by user' do

      context 'when user is valid' do
        before { post :create, user: Fabricate.attributes_for(:user) }

        it { expect(response).to have_http_status(:created) }
      end

      context 'when email is already use' do
        before do
          Fabricate(:user, email: 'earth@earth.com')
          post :create, user: Fabricate.attributes_for(:user, email: 'earth@earth.com')
        end

        it { expect(response).to have_http_status(:unprocessable_entity) }
        it { expect(response).to match_response_schema('errors') }
      end
    end
  end
end
