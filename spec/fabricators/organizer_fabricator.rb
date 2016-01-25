Fabricator(:god, class_name: 'Organizer') do
  email 'god@zaap.com'
  password '12345678'
  name { FFaker::Name.name }
  role 'god'
end

Fabricator(:account_owner, class_name: 'Organizer') do
  email 'account_owner@zaap.com'
  password '12345678'
  name { FFaker::Name.name }
  role 'account_owner'
end

Fabricator(:team_member, class_name: 'Organizer') do
  email 'team_member@zaap.com'
  password '12345678'
  name { FFaker::Name.name }
  role 'team_member'
end