Fabricator(:ticket, class_name: 'Ticket') do
  zone { (('A'..'Z').to_a << nil).sample }
  row { (('A'..'Z').to_a << nil).sample }
  column { ((1..10).to_a << nil).sample }
  price { (500...10000).to_a.sample }
end