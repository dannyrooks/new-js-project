# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

b1 = Brand.create(name: "Gibson")
b2 = Brand.create(name: "Fender")
b3 = Brand.create(name: "Taylor")

Guitar.create(name: "Big Baby", category: "Acoustic", year: 2009 , brand: b3)
Guitar.create(name: "Stratocaster", category: "Electric", year: 1964, brand: b2)
Guitar.create(name: "ES-335", category: "Electric", year: 1972, brand: b1)
Guitar.create(name: "SG", category: "Electric", year: 1990, brand: b1)
Guitar.create(name: "Telecaster", category: "Electric", year: 2019, brand: b2)



