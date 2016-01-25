Fabricator(:event, class_name: 'Event') do
  name { FFaker::Internet.user_name }
  description { FFaker::Lorem.paragraphs.join }
end