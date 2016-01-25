require 'rails_helper'

RSpec.describe Ticket, type: :model do

  describe 'relationships' do
    it { should belong_to(:user) }
    it { should belong_to(:ticket_type) }
  end

  describe 'validation' do
    let(:account) { Fabricate(:account) }
    let(:event) { Fabricate(:event, account: account) }
    let(:ticket_type) { Fabricate(:ticket_type, event: event) }
    let(:ticket) { Fabricate.build(:ticket, ticket_type: ticket_type) }

    subject { ticket }

    it { is_expected.to validate_presence_of(:ticket_type) }
  end
end
