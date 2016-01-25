class TicketType < ActiveRecord::Base
  belongs_to :event
  has_many :tickets

  validates :name, presence: true
  validates :event, presence: true
end
