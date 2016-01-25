class Ticket < ActiveRecord::Base
  belongs_to :ticket_type
  belongs_to :user

  validates :ticket_type, presence: true
end
