# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Item.delete_all
# 100.times do
#   post = Item.create(:name => Faker::Name.name, :description => Faker::Lorem.paragraphs(paragraph_count = 10).join("</br>"))
# end