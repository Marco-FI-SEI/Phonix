# headphone seeds
# 10.times do
#   Headphone.create!(
#     model: Faker::Hipster.sentence(word_count: 1),
#     manufacturer: Faker::Vehicle.manufacture
#   )
# end

# user seeds
# 15.times do
#   User.create!(
#     first_name: Faker::Name.first_name,
#     last_name: Faker::Name.last_name,
#   )
# end

5.times do
  Review.create!(
    title: Faker::ProgrammingLanguage.name,
    body: Faker::Lorem.paragraphs(number: 3),
    rating: Faker::Number.between(from: 1, to: 5),
    headphone_id: Faker::Number.between(from: 1, to: 5),
  )
end
