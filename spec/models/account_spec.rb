require 'rails_helper'

RSpec.describe Account, type: :model do

  describe 'db' do
    context 'columns' do
      it { should have_db_column(:name).of_type(:string).with_options(null: false) }
    end
  end

  describe 'relationships' do
    it { should have_many(:organizers) }
    it { should have_many(:events) }
  end

  describe 'validation' do
    let(:account) { Fabricate.build(:account) }

    subject { account }

    it { is_expected.to validate_presence_of(:name) }
  end
end
