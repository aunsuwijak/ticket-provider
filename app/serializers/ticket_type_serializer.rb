class TicketTypeSerializer < ActiveModel::Serializer
  attributes :id,
             :event_id,
             :name,
             :description,
             :current_price

  def id
    object.uid
  end

  def event_id
    object.event.uid
  end
end