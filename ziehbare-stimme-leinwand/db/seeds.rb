# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Todo.destroy_all
Project.destroy_all

Project.create({
  id: 1,
  title: "work",
})

Project.create({
  id: 2,
  title: "school",
})

Project.create({
  id: 3,
  title: "bucket list",
})

Todo.create({
  id: 1,
  title: "do work",
  project_id: 1,
  content: "work work",
})

Todo.create({
  id: 2,
  title: "do school",
  project_id: 2,
  content: "bribe teacher",
})

Todo.create({
  id: 3,
  title: "do work",
  project_id: 1,
  content: "work.",
})

Todo.create({
  id: 4,
  title: "1",
  project_id: 3,
  content: "Visit Jamacia.",
})

Todo.create({
  id: 5,
  title: "2",
  project_id: 3,
  content: "Buy milk",
})

Todo.create({
  id: 6,
  title: "Become the President of Venezuela.",
  project_id: 3,
  content: "find out where Venezuela is?",
})

Todo.create({
  id: 7,
  title: "4",
  project_id: 3,
  content: "Text some random number saying “I killed him and hid the body in your backyard",
})

Todo.create({
  id: 8,
  title: "5",
  project_id: 3,
  content: "Fill floor cleaning liquid water with milkshake and drink it publicly.",
})

Todo.create({
  id: 9,
  title: "6",
  project_id: 3,
  content: "FIND THE MEANING OF LIFE",
})

Todo.create({
  id: 10,
  title: "7",
  project_id: 3,
  content: "Finally name my son, he's already in his 30's",
})

Todo.create({
  id: 11,
  title: "8",
  project_id: 3,
  content: "Solve all of the Millennium Prize Problems",
})

Todo.create({
  id: 12,
  title: "9",
  project_id: 3,
  content: "Eat a rock",
})

Todo.create({
  id: 13,
  title: "10",
  project_id: 3,
  content: "Propose a stranger when he or she is with family.",
})

Todo.create({
  id: 14,
  title: "11",
  project_id: 3,
  content: "Commit my crimes!",
})

Todo.create({
  id: 15,
  title: "12",
  project_id: 3,
  content: "Find out my wife's name / stop just calling her 'Cheif' and pointing finger guns at her.",
})

Todo.create({
  id: 16,
  title: "13",
  project_id: 3,
  content: "Learn to fly!",
})

Todo.create({
  id: 17,
  title: "14",
  project_id: 3,
  content: "eat 2 rocks",
})

Todo.create({
  id: 18,
  title: "do work",
  project_id: 1,
  content: "work work workky work",
})



