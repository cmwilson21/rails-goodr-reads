# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding database"

winter = Book.create(title: "The Winter King", author: "Bernard Cornwell")
hunger = Book.create(title: "Hunger Games", author: "Suzanne Collins")
gatsby = Book.create(title: "The Great Gatsby", author: "F.Scott Fitzgerald")

bob = User.create(username: "BobBob", password: "alsobob")
court = User.create(username: "RecklessReject", password: "password")
gats = User.create(username: "GreatGatsby", password: "imadog")



Review.create(content: "What a great book!", book: winter, user: gats)
Review.create(content: "Mind blowing!", book: hunger, user: court)
Review.create(content: "Read it so many times!", book: gatsby, user: bob)
Review.create(content: "Didn't read but it was a good movie", book: hunger, user: bob)




puts "Finished seeding"