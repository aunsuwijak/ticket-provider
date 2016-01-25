class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new

    if user.role == 'god'
      can :manage, :all
    elsif user.role == 'account_owner'
      can :manage, Event, account: user.account
      can :manage, TicketType, event_id: user.account.event_ids
      can :manage, Ticket, ticket_type: { event_id: user.account.event_ids }
    elsif user.role == 'team_member'
      can [:read, :create, :update], Event, account: user.account
      can [:read, :create, :update], TicketType, event_id: user.account.event_ids
      can [:read, :create, :update], Ticket, ticket_Type: { event_id: user.account.event_ids }
    else
      can :read, Event
      can :read, TicketType
      can [:read, :update], Ticket, user: user
    end
  end
end
