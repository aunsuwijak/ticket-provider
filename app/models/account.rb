class Account < ActiveRecord::Base
  has_many :organizers
  has_many :events

  validates :name, presence: true
end
