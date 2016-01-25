require 'rails_helper'

RSpec.describe TicketType, type: :model do

  describe 'db' do
    context 'columns' do
      it { should have_db_column(:name).of_type(:string).with_options(null: false) }
    end
  end

  describe 'relationships' do
    it { should belong_to(:event) }
    it { should have_many(:tickets) }
  end

  describe 'validation' do
    let(:account) { Fabricate(:account) }
    let(:event) { Fabricate(:event, account: account) }
    let(:ticket_type) { Fabricate.build(:ticket_type, event: event) }

    subject { ticket_type }

    it { is_expected.to validate_presence_of(:name) }
    it { is_expected.to validate_presence_of(:event) }
  end
end
