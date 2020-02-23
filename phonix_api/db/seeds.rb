# headphone seeds
10.times do
  Headphone.create!(
    model: Faker::Hipster.sentence(word_count: 1),
    manufacturer: Faker::Vehicle.manufacture
  )
end
