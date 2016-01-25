class Organizer < ActiveRecord::Base

  ROLES = %i(god account_owner team_member)

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  belongs_to :account

  validates :name, presence: true
end
