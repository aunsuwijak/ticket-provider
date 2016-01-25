# God
Fabricate(:god)

# Account
account = Fabricate(:account)

# Organizer
Fabricate(:account_owner, account: account)
Fabricate(:team_member, account: account)

# Event
events = Fabricate.times(2, :event, account: account)

# Ticket Type
ticket_types = Fabricate.times(5, :ticket_type) do
  event events.sample
end

# User
users = Fabricate.times(60, :user)
users << nil

# Ticket
Fabricate.times(100, :ticket) do
  ticket_type ticket_types.sample
  user users.sample
end