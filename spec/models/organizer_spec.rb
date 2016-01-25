require 'rails_helper'

RSpec.describe Organizer, type: :model do

  describe 'db' do
    context 'columns' do
      it { should have_db_column(:name).of_type(:string).with_options(null: false) }
      it { should have_db_column(:role).of_type(:string).with_options(null: false) }
    end

    context 'indexes' do
      it { should have_db_index(:email).unique(true) }
    end
  end

  describe 'relationships' do
    it { should belong_to(:account) }
  end

  describe 'validation' do
    let(:organizer) { Fabricate.build(:god) }

    subject { organizer }

    it { is_expected.to validate_presence_of(:name) }
  end
end
