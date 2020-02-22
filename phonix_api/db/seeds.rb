usr1 = User.create!(first_name: "Marco", last_name: "McNulty")

headphone1 = Headphone.create!(model: "HD800 S", manufacturer: "Sennheiser")

review1 = Review.create!(title: "Simply the best!", body: "This is the best sound I have ever heard from any headphone or speakers...", rating: 4, headphone_id: 1, user_id: 1)
