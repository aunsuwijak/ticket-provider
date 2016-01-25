class Event < ActiveRecord::Base
  belongs_to :account
  has_many :ticket_types

  validates :name, presence: true
  validates :account, presence: true
end
