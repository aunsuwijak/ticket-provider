require 'rails_helper'

RSpec.describe User, type: :model do

  describe 'db' do
    context 'columns' do
      it { should have_db_column(:email).of_type(:string).with_options(null: false) }
    end

    context 'indexes' do
      it { should have_db_index(:email).unique(true) }
    end
  end

  describe 'validation' do
    let(:user) { Fabricate(:user) }

    subject { user }

    it { is_expected.to validate_presence_of(:name) }
    it { is_expected.to validate_presence_of(:birthdate) }
  end
end
