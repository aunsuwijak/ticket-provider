Fabricator(:user, class_name: 'User') do
  email { FFaker::Internet.email }
  password '12345678'
  name { FFaker::Name.name }
  birthdate { FFaker::Time.date }
end