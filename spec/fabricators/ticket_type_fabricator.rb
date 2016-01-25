Fabricator(:ticket_type, class_name: 'TicketType') do
  name { ('A'..'G').to_a.sample }
  description { FFaker::Lorem.paragraphs.join }
  current_price { (500...10000).to_a.sample }
end