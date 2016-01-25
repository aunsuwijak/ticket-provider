require 'rails_helper'

RSpec.describe Event, type: :model do

  describe 'db' do
    context 'columns' do
      it { should have_db_column(:name).of_type(:string).with_options(null: false) }
    end
  end

  describe 'relationships' do
    it { should belong_to(:account) }
  end

  describe 'validation' do
    let(:account) { Fabricate(:account) }
    let(:event) { Fabricate.build(:event, account: account) }

    subject { event }

    it { is_expected.to validate_presence_of(:name) }
    it { is_expected.to validate_presence_of(:account) }
  end
end
