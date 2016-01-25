Fabricator(:account, class_name: 'Account') do
  name { FFaker::Internet.user_name }
  description { FFaker::Lorem.paragraphs.join }
end